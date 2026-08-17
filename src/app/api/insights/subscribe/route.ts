import { NextResponse } from "next/server";

export const runtime = "nodejs";

function wpBase(): string {
  return (
    process.env.WP_API_BASE?.replace(/\/$/, "") ||
    process.env.NEXT_PUBLIC_WP_API_BASE?.replace(/\/$/, "") ||
    "https://wpadmin.inheritx.com"
  );
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string };
    const email = String(body.email ?? "").trim().slice(0, 160);

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Enter a valid work email." },
        { status: 400 },
      );
    }

    const res = await fetch(`${wpBase()}/wp-json/api/v1/subscription`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "Subscription unavailable right now." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Subscription unavailable right now." },
      { status: 502 },
    );
  }
}
