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
      <div className="relative mx-auto flex max-w-[1400px] flex-col items-start gap-6 px-5 py-14 md:px-8 md:py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <Reveal className="w-full min-w-0 lg:max-w-2xl">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Next step
            </p>
            <h2 className="font-display mt-3 text-2xl leading-tight text-white md:text-3xl lg:text-4xl">
              Ready for an enterprise AI consultation?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/50 md:text-base">
              Primary path: a 30-minute strategy call with an architect. Prefer
              proof first? Review production case studies.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="w-full min-w-0 lg:w-auto lg:shrink-0">
          <div className="flex flex-row flex-nowrap items-center gap-2 sm:gap-3">
            <MagneticButton
              href="/contact?intent=strategy"
              className="min-h-11 shrink-0 justify-center whitespace-nowrap bg-cyan px-3.5 py-3 text-[13px] text-white hover:bg-white hover:text-ink sm:min-h-12 sm:px-7 sm:py-3.5 sm:text-sm"
              strength={0.35}
            >
              Book an AI strategy call
            </MagneticButton>
            <Link
              href="/case-studies"
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-cyan/55 bg-cyan/10 px-3 text-[13px] font-semibold text-white transition-colors hover:border-cyan hover:bg-cyan/20 sm:min-h-12 sm:gap-2 sm:px-5 sm:text-sm"
            >
              Review case studies
              <ArrowUpRight size={14} className="shrink-0 text-cyan" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
