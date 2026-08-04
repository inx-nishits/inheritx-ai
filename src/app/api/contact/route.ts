import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  topic: string;
  message: string;
  source?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function sanitize(value: unknown, max = 2000) {
  return String(value ?? "")
    .trim()
    .slice(0, max);
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
  const to = process.env.CONTACT_TO_EMAIL ?? "hello@inheritx.com";
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "InheritX Website <onboarding@resend.dev>";

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
      subject: `[InheritX] ${payload.topic} — ${payload.company || payload.name}`,
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Company: ${payload.company || "—"}`,
        `Topic: ${payload.topic}`,
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
    const body = (await request.json()) as Partial<ContactPayload>;
    const payload: ContactPayload = {
      name: sanitize(body.name, 120),
      email: sanitize(body.email, 160),
      company: sanitize(body.company, 160) || undefined,
      topic: sanitize(body.topic, 120),
      message: sanitize(body.message, 5000),
      source: sanitize(body.source, 80) || "website-contact",
    };

    if (!payload.name || !payload.email || !payload.topic || !payload.message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 },
      );
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json(
        { ok: false, error: "Enter a valid work email." },
        { status: 400 },
      );
    }

    const webhookResult = await forwardToWebhook(payload);
    if (webhookResult.delivered) {
      return NextResponse.json({
        ok: true,
        delivered: true,
        channel: webhookResult.channel,
        fallbackMailto: false,
      });
    }

    const emailResult = await forwardToResend(payload);
    if (emailResult.delivered) {
      return NextResponse.json({
        ok: true,
        delivered: true,
        channel: emailResult.channel,
        fallbackMailto: false,
      });
    }

    // No CRM/email provider configured yet — accept the lead and ask the client
    // to use mailto fallback so inquiries are not lost.
    return NextResponse.json({
      ok: true,
      delivered: false,
      channel: null,
      fallbackMailto: true,
      mailto: {
        to: "hello@inheritx.com",
        subject: `[InheritX] ${payload.topic} — ${payload.company || payload.name}`,
        body: [
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          `Company: ${payload.company || "—"}`,
          `Topic: ${payload.topic}`,
          "",
          payload.message,
        ].join("\n"),
      },
    });
  } catch (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Unable to submit right now. Please email hello@inheritx.com.",
      },
      { status: 502 },
    );
  }
}
