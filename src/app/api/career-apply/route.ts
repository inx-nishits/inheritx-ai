import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Resume uploads are base64-encoded before POSTing (~6.7 MB for a 5 MB file).
// App Router does not support the legacy `config.api.bodyParser` export — that
// was Pages Router only and is silently ignored here.
// On Vercel: set `maxDuration` if needed; the platform default body limit is
// sufficient for 5 MB base64 payloads (~6.7 MB, well within the 4.5 MB
// compressed / uncompressed limits for Hobby; use Pro/Enterprise for larger).
// The client-side file picker enforces MAX_BYTES = 5 MB before any upload.
export const maxDuration = 30;

type ApplyPayload = {
  jobId: string;
  jobTitle: string;
  name: string;
  email: string;
  phone: string;
  // Base64-encoded resume file (optional)
  resumeBase64?: string;
  resumeName?: string;
  // Honeypot — bots fill this, humans never see it
  website?: string;
};

function sanitize(value: unknown, max = 500) {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function sendViaResend(payload: ApplyPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { delivered: false as const };

  // HR career email — fall back to the general contact-to email
  const to =
    process.env.CAREERS_TO_EMAIL ??
    process.env.CONTACT_TO_EMAIL ??
    "careers@inheritx.com";

  const from =
    process.env.CONTACT_FROM_EMAIL ??
    "InheritX Website <contact@inheritx.com>";

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
      subject: `[Career Application] ${payload.jobTitle} — ${payload.name}`,
      text: [
        `New job application received via the InheritX careers page.`,
        ``,
        `Position : ${payload.jobTitle}`,
        `Job ID   : ${payload.jobId}`,
        ``,
        `Applicant Details`,
        `─────────────────`,
        `Name     : ${payload.name}`,
        `Email    : ${payload.email}`,
        `Phone    : ${payload.phone}`,
        `Resume   : ${payload.resumeName ? `${payload.resumeName} (attached)` : "Not provided"}`,
        ``,
        `Reply directly to this email to contact the applicant.`,
      ].join("\n"),
      ...(payload.resumeBase64 && payload.resumeName
        ? {
            attachments: [
              {
                filename: payload.resumeName,
                content: payload.resumeBase64,
              },
            ],
          }
        : {}),
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend failed with status ${response.status}`);
  }

  return { delivered: true as const };
}

async function sendViaWebhook(payload: ApplyPayload) {
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) return { delivered: false as const };

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
      source: "career-application",
      submittedAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error(`Webhook failed with status ${response.status}`);
  }

  return { delivered: true as const };
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ApplyPayload>;

    // Honeypot check
    if (sanitize(body.website)) {
      return NextResponse.json({ ok: true }); // silently drop
    }

    const payload: ApplyPayload = {
      jobId: sanitize(body.jobId, 40),
      jobTitle: sanitize(body.jobTitle, 200),
      name: sanitize(body.name, 120),
      email: sanitize(body.email, 160),
      phone: sanitize(body.phone, 40),
      resumeBase64: body.resumeBase64 ? sanitize(body.resumeBase64, 10_000_000) : undefined,
      resumeName: body.resumeName ? sanitize(body.resumeName, 255) : undefined,
    };

    const missing: string[] = [];
    if (!payload.name) missing.push("Name");
    if (!payload.email) missing.push("Email");
    if (!payload.phone) missing.push("Contact No");

    if (missing.length > 0) {
      return NextResponse.json(
        { ok: false, error: `Please complete: ${missing.join(", ")}.` },
        { status: 400 },
      );
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json(
        { ok: false, error: "Enter a valid email address." },
        { status: 400 },
      );
    }

    // Try webhook first, then Resend
    const webhook = await sendViaWebhook(payload);
    if (webhook.delivered) {
      return NextResponse.json({ ok: true });
    }

    const email = await sendViaResend(payload);
    if (email.delivered) {
      return NextResponse.json({ ok: true });
    }

    console.error("[career-apply] No delivery channel configured.", {
      jobTitle: payload.jobTitle,
      name: payload.name,
      email: payload.email,
    });

    return NextResponse.json(
      {
        ok: false,
        error:
          "Unable to submit right now. Please email careers@inheritx.com directly.",
      },
      { status: 503 },
    );
  } catch (error) {
    console.error("[career-apply]", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Unable to submit right now. Please email careers@inheritx.com.",
      },
      { status: 502 },
    );
  }
}
