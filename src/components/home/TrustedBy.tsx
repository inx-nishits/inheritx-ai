"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Public profiles for InheritX Solutions.
 * Logos are visual recognition only — none are linked from this marquee.
 */
const logos: {
  name: string;
  node: ReactNode;
}[] = [
  {
    name: "Clutch",
    node: (
      <svg viewBox="0 0 110 36" className="h-11 w-[120px] md:h-12 md:w-[132px]" aria-hidden>
        <text
          x="0"
          y="26"
          fill="#fff"
          fontFamily="system-ui, Arial, sans-serif"
          fontSize="26"
          fontWeight="700"
          letterSpacing="-0.6"
        >
          Clutch
        </text>
        <circle cx="40" cy="18.5" r="3.4" fill="#E11B22" />
      </svg>
    ),
  },
  {
    name: "Upwork",
    node: (
      <svg viewBox="0 0 120 36" className="h-10 w-[128px] md:h-11 md:w-[140px]" aria-hidden>
        <text
          x="0"
          y="26"
          fill="#14A800"
          fontFamily="system-ui, Arial, sans-serif"
          fontSize="24"
          fontWeight="600"
          letterSpacing="-0.4"
        >
          upwork
        </text>
      </svg>
    ),
  },
  {
    name: "Trustpilot",
    node: (
      <svg viewBox="0 0 150 36" className="h-10 w-[148px] md:h-11 md:w-[160px]" aria-hidden>
        <text
          x="0"
          y="25"
          fill="#A1A1AA"
          fontFamily="system-ui, Arial, sans-serif"
          fontSize="17"
          fontWeight="600"
          letterSpacing="2"
        >
          TRUSTPILOT
        </text>
      </svg>
    ),
  },
];

function LogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  const sequence = [...logos, ...logos, ...logos];

  return (
    <div
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-14 pr-14 md:gap-20 md:pr-20"
    >
      {sequence.map((logo, index) => (
        <div
          key={`${logo.name}-${index}`}
          title={ariaHidden ? undefined : logo.name}
          className="flex min-h-16 shrink-0 items-center justify-center opacity-90"
        >
          {logo.node}
          {!ariaHidden ? <span className="sr-only">{logo.name}</span> : null}
        </div>
      ))}
    </div>
  );
}

export function TrustedBy() {
  return (
    <section
      aria-label="Trust and recognition"
      className="relative z-10 overflow-hidden border-b border-white/[0.06] bg-ink py-16 md:py-20"
    >
      <div className="mx-auto max-w-page px-5 text-center md:px-8">
        <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
          Review platforms
        </p>
        <h2 className="font-display mt-3 text-2xl leading-tight text-white md:text-4xl">
          Independent profiles you can check.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/50 md:text-base">
          Public review listings are not a substitute for enterprise diligence.
          Start with published case studies, or request references under NDA.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/case-studies"
            className="cta-primary group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(0,190,212,0.22)]"
          >
            View case studies
            <ArrowUpRight
              size={15}
              className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>

      <div className="marquee-pause relative mt-12 md:mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-ink to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-ink to-transparent md:w-24" />

        <div className="marquee-track flex w-max will-change-transform">
          <LogoRow />
          <LogoRow ariaHidden />
        </div>
      </div>
    </section>
  );
}
