import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Resume uploads are base64-encoded before POSTing (~6.7 MB for a 5 MB file).
// App Router does not support the legacy `config.api.bodyParser` export - that
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
  // Honeypot - bots fill this, humans never see it
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

function wpBase(): string {
  return (
    process.env.WP_API_BASE?.replace(/\/$/, "") ||
    process.env.NEXT_PUBLIC_WP_API_BASE?.replace(/\/$/, "") ||
    "https://wpadmin.inheritx.com"
  );
}

async function forwardToWordPress(payload: ApplyPayload) {
  const endpoint = `${wpBase()}/wp-json/api/v1/careerform`;
  const fd = new FormData();
  fd.append("name", payload.name);
  fd.append("email", payload.email);
  fd.append("phone", payload.phone);
  if (payload.jobTitle) fd.append("position", payload.jobTitle);
  if (payload.jobId) fd.append("job_id", payload.jobId);

  if (payload.resumeBase64 && payload.resumeName) {
    try {
      const base64Data = payload.resumeBase64.includes(",")
        ? payload.resumeBase64.split(",")[1]
        : payload.resumeBase64;
      const buffer = Buffer.from(base64Data, "base64");
      const blob = new Blob([buffer]);
      fd.append("resume", blob, payload.resumeName);
    } catch {
      /* ignore resume formatting error */
    }
  }

  const response = await fetch(endpoint, {
    method: "POST",
    body: fd,
  });

  if (!response.ok) {
    throw new Error(`WordPress API failed with status ${response.status}`);
  }

  let data: { status?: number; message?: string } | null = null;
  try {
    data = (await response.json()) as { status?: number; message?: string };
  } catch {
    /* ignore json parse error */
  }

  if (data && typeof data.status !== "undefined" && Number(data.status) !== 1) {
    throw new Error(data.message || "WordPress API returned non-success status");
  }

  return { delivered: true as const, channel: "wordpress" as const };
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

    let wpResult: { delivered: boolean } = { delivered: false };
    try {
      wpResult = await forwardToWordPress(payload);
    } catch (wpError) {
      console.error("[career-apply] WordPress delivery failed:", wpError);
    }

    if (wpResult.delivered) {
      return NextResponse.json({ ok: true });
    }

    console.error(
      "[CRITICAL LEAD LOSS PREVENTION] Career application lead could not be delivered to WordPress.",
      {
        jobId: payload.jobId,
        jobTitle: payload.jobTitle,
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        resumeName: payload.resumeName,
        timestamp: new Date().toISOString(),
      },
    );

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
