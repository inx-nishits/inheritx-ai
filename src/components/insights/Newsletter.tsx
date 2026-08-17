"use client";

import { useState, type FormEvent } from "react";

import { cn } from "@/lib/cn";

export function Newsletter({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/insights/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) throw new Error("Subscription failed");
      setStatus("success");
      setMessage("Subscribed. You’ll receive enterprise AI insights.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Subscription unavailable right now. Email hello@inheritx.com.");
    }
  }

  return (
    <section
      className={cn(
        "border-t border-white/[0.06] bg-ink-soft py-16 md:py-20",
        className,
      )}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="grid gap-8 rounded-[1.75rem] border border-white/10 bg-ink px-6 py-8 md:grid-cols-[1.2fr_1fr] md:items-center md:px-10 md:py-10">
          <div>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Stay current
            </p>
            <h2 className="font-display mt-3 text-3xl text-white md:text-4xl">
              Enterprise AI insights, delivered.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/50">
              Brief perspectives on agentic systems, LLMOps, governance, and
              production AI—written for technical and executive buyers.
            </p>
          </div>
          <form onSubmit={onSubmit} className="space-y-3">
            <label htmlFor="insights-email" className="sr-only">
              Work email
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="insights-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email"
                className="min-h-12 flex-1 rounded-full border border-white/15 bg-white/[0.04] px-5 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan/50"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-cyan px-6 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-ink disabled:opacity-60"
              >
                {status === "loading" ? "Subscribing…" : "Subscribe"}
              </button>
            </div>
            {message ? (
              <p
                className={cn(
                  "text-xs",
                  status === "success" ? "text-cyan" : "text-white/45",
                )}
                role="status"
              >
                {message}
              </p>
            ) : (
              <p className="text-xs text-white/30">
                No spam. Unsubscribe anytime.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
