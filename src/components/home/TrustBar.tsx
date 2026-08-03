"use client";

import { trustSectors } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function TrustBar() {
  const items = [...trustSectors, ...trustSectors];

  return (
    <section className="relative overflow-hidden border-y border-[var(--line-dark)] bg-paper text-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 md:py-16">
        <Reveal>
          <p className="text-center text-[11px] tracking-[0.28em] text-ink/40 uppercase">
            Enterprise AI for regulated industries across North America, Europe, and APAC
          </p>
        </Reveal>
      </div>

      <div className="relative mb-14 border-y border-[var(--line-dark)] py-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-paper to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-paper to-transparent md:w-40" />
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap px-6">
          {items.map((sector, index) => (
            <span
              key={`${sector}-${index}`}
              className="font-display text-3xl text-ink/80 md:text-5xl"
            >
              {sector}
              <span className="ml-12 inline-block h-1.5 w-1.5 rounded-full bg-cyan align-middle" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
