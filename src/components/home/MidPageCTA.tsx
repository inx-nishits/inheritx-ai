"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";

/** Single mid-page conversion band — placed after proof. */
export function MidPageCTA() {
  return (
    <section
      aria-label="Book an AI strategy call"
      className="relative overflow-hidden border-y border-white/[0.06] bg-ink-soft"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,190,212,0.12),transparent_55%)]" />
      <div className="relative mx-auto flex max-w-[1400px] flex-col items-start gap-6 px-5 py-12 md:flex-row md:items-center md:justify-between md:gap-10 md:px-8 md:py-14">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Next step
            </p>
            <h2 className="font-display mt-3 text-2xl leading-tight text-white md:text-3xl lg:text-4xl">
              Ready for an enterprise AI consultation?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/50 md:text-base">
              Primary path: a 30-minute strategy call with an architect. Prefer a
              structured readiness review first? Request an AI Assessment.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            <MagneticButton
              href="/contact?intent=strategy"
              className="min-h-12 justify-center bg-cyan px-7 py-3.5 text-sm text-white hover:bg-white hover:text-ink"
              strength={0.35}
            >
              Book an AI Strategy Call
            </MagneticButton>
            <Link
              href="/contact?intent=assessment"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-5 text-sm text-white/70 transition-colors hover:border-cyan/40 hover:text-white"
            >
              Request AI Assessment
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex min-h-12 items-center justify-center gap-2 px-2 text-sm text-white/45 transition-colors hover:text-white"
            >
              Review case studies
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
