"use client";

import { CTA_LABELS } from "@/data/cta/copy";
import { CtaPrimary } from "@/components/cta/CtaPrimary";
import { CtaProof } from "@/components/cta/CtaProof";
import { Reveal } from "@/components/ui/Reveal";
import { contactHref } from "@/lib/cta";

/** Single mid-page conversion band - placed after proof. */
export function MidPageCTA() {
  return (
    <section
      aria-label={CTA_LABELS.strategyCall}
      className="relative overflow-hidden border-y border-white/[0.06] bg-ink-soft"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,190,212,0.12),transparent_55%)]" />
      <div className="relative mx-auto flex max-w-page flex-col items-start gap-6 px-5 py-14 md:px-8 md:py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <Reveal className="w-full min-w-0 lg:max-w-2xl">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Next step
            </p>
            <h2 className="font-display mt-3 text-2xl leading-tight text-white md:text-3xl lg:text-4xl">
              Ready to pressure-test an AI mandate?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/50 md:text-base">
              Start with a mandate review with an architect, or review production
              case studies first.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="w-full min-w-0 lg:w-auto lg:shrink-0">
          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            <CtaPrimary
              href={contactHref("strategy")}
              location="home.mid"
              intent="strategy"
              pattern="contextual-band"
              className="min-h-11 w-full justify-center px-4 py-3 text-[13px] sm:min-h-12 sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm"
            >
              {CTA_LABELS.strategyCall}
            </CtaPrimary>
            <CtaProof
              href="/case-studies"
              location="home.mid"
              pattern="proof-band"
              className="min-h-11 w-full justify-center px-4 text-[13px] sm:min-h-12 sm:w-auto sm:px-5 sm:text-sm"
            >
              Review case studies
            </CtaProof>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
