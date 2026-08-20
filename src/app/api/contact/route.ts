import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  country: string;
  phone: string;
  projectType: string;
  budget?: string;
  message: string;
  requestNda?: boolean;
  // Hidden anti-spam field (honeypot). Human users should never fill it.
  website?: string;
  source?: string;
};

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 8;

// Local/dev fallback (server-instance memory only).
const hits = new Map<string, { count: number; resetAt: number }>();

// Production-safe distributed limiter.
const upstashConfigured = Boolean(
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN,
);

const ratelimit = upstashConfigured
  ? new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.fixedWindow(RATE_MAX, "10 m"),
      prefix: "inheritx:contact",
    })
  : null;

function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "local";
}

async function rateLimited(key: string): Promise<boolean> {
  if (ratelimit) {
    const { success } = await ratelimit.limit(key);
    return !success;
  }

  // Fallback: per-instance memory (NOT distributed).
  const now = Date.now();
  const current = hits.get(key);
  if (!current || now > current.resetAt) {
    hits.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  current.count += 1;
  return current.count > RATE_MAX;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function sanitize(value: unknown, max = 2000) {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}

function formatBudget(value?: string) {
  if (!value) return ", ";
  return value.replace(/-/g, " ");
}

async function forwardToWebhook(payload: ContactPayload) {
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) return { delivered: false as const, channel: null };

  const response = await fetch(webhook, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(process.env.CONTACT_WEBHOOK_SECRET
        ? { Authorization: `Bearer ${process.env.CONTACT_WEBHOOK_SECRET}` }
        : {}),
    },
    body: JSON.stringify({
      ...payload,
      submittedAt: new Date().toISOString(),
      source: payload.source ?? "website-contact",
    }),
  });

  if (!response.ok) {
    throw new Error(`Webhook failed with status ${response.status}`);
  }

  return { delivered: true as const, channel: "webhook" as const };
}

async function forwardToResend(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "contact@inheritx.com";
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "InheritX Website <contact@inheritx.com>";

  if (!apiKey) return { delivered: false as const, channel: null };

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject: `[InheritX] ${payload.projectType} - ${payload.name}`,
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Country: ${payload.country}`,
        `Phone: ${payload.phone}`,
        `Project type: ${payload.projectType}`,
        `Budget: ${formatBudget(payload.budget)}`,
        `NDA requested: ${payload.requestNda ? "Yes" : "No"}`,
        "",
        payload.message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend failed with status ${response.status}`);
  }

  return { delivered: true as const, channel: "email" as const };
}

export async function POST(request: Request) {
  try {
    if (await rateLimited(clientKey(request))) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please email contact@inheritx.com." },
        { status: 429 },
      );
    }

    const body = (await request.json()) as Partial<ContactPayload>;
    const payload: ContactPayload = {
      name: sanitize(body.name, 120),
      email: sanitize(body.email, 160),
      country: sanitize(body.country, 120),
      phone: sanitize(body.phone, 40),
      projectType: sanitize(body.projectType, 160),
      budget: sanitize(body.budget, 40) || undefined,
      message: sanitize(body.message, 5000),
      requestNda: Boolean(body.requestNda),
      website: sanitize(body.website, 80) || undefined,
      source: sanitize(body.source, 80) || "website-contact",
    };

    // Honeypot: reject obvious bots/spam submissions.
    if (payload.website && payload.website.trim().length > 0) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const missing: string[] = [];
    if (!payload.name) missing.push("Name");
    if (!payload.email) missing.push("Email");
    if (!payload.country) missing.push("Country");
    if (!payload.phone) missing.push("Phone");
    if (!payload.projectType) missing.push("Project type");
    if (!payload.message) missing.push("Brief your details");

    if (missing.length > 0) {
      const detail =
        missing.length === 1
          ? `Please complete: ${missing[0]}.`
          : missing.length === 2
            ? `Please complete: ${missing[0]} and ${missing[1]}.`
            : `Please complete: ${missing.slice(0, -1).join(", ")}, and ${missing.at(-1)}.`;
      return NextResponse.json(
        { ok: false, error: detail, fields: missing },
        { status: 400 },
      );
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json(
        { ok: false, error: "Enter a valid email." },
        { status: 400 },
      );
    }

    const webhookResult = await forwardToWebhook(payload);
    if (webhookResult.delivered) {
      return NextResponse.json({
        ok: true,
        delivered: true,
        channel: webhookResult.channel,
      });
    }

    const emailResult = await forwardToResend(payload);
    if (emailResult.delivered) {
      return NextResponse.json({
        ok: true,
        delivered: true,
        channel: emailResult.channel,
      });
    }

    console.error(
      "[contact] No delivery channel configured. Lead rejected (no webhook/resend).",
      {
        name: payload.name,
        email: payload.email,
        country: payload.country,
        phone: payload.phone,
        projectType: payload.projectType,
        budget: payload.budget,
        requestNda: payload.requestNda,
        message: payload.message,
      },
    );

    return NextResponse.json(
      {
        ok: false,
        error: "Unable to submit right now. Please try again in a few minutes, or email contact@inheritx.com.",
      },
      { status: 503 },
    );
  } catch (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Unable to submit right now. Please email contact@inheritx.com.",
      },
      { status: 502 },
    );
  }
}
