"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Public profiles for InheritX Solutions.
 * Logos are always rendered. Only company-specific profile URLs are linked.
 */
const logos: {
  name: string;
  /** Exact InheritX profile URL — omit until the official listing is confirmed. */
  href?: string;
  node: ReactNode;
}[] = [
  {
    name: "AWS Partner",
    // TODO: Replace with the official InheritX AWS Partner Network directory URL
    // (partners.amazonaws.com/partners/…/InheritX…). Do not use aws.amazon.com/partners/.
    href: undefined,
    node: (
      <svg viewBox="0 0 120 56" className="h-14 w-[128px] md:h-16 md:w-[148px]" aria-hidden>
        <text
          x="60"
          y="26"
          textAnchor="middle"
          fill="#fff"
          fontFamily="system-ui, Arial, sans-serif"
          fontSize="26"
          fontWeight="700"
          letterSpacing="-0.5"
        >
          aws
        </text>
        <path
          d="M28 34c14 10 50 10 64 0"
          stroke="#FF9900"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M86 32.5l6 1.5-3.5 5.5"
          stroke="#FF9900"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <text
          x="60"
          y="50"
          textAnchor="middle"
          fill="#fff"
          fontFamily="system-ui, Arial, sans-serif"
          fontSize="11"
        >
          Partner
        </text>
      </svg>
    ),
  },
  {
    name: "Google Reviews",
    // TODO: Replace with the official InheritX Google Business Profile URL
    // (maps.app.goo.gl/… or google.com/maps/place/…). Do not use search-result URLs.
    href: undefined,
    node: (
      <svg viewBox="0 0 150 40" className="h-12 w-[160px] md:h-14 md:w-[180px]" aria-hidden>
        <text
          x="0"
          y="16"
          fontFamily="system-ui, Arial, sans-serif"
          fontSize="15"
          fontWeight="700"
        >
          <tspan fill="#4285F4">G</tspan>
          <tspan fill="#EA4335">o</tspan>
          <tspan fill="#FBBC05">o</tspan>
          <tspan fill="#4285F4">g</tspan>
          <tspan fill="#34A853">l</tspan>
          <tspan fill="#EA4335">e</tspan>
        </text>
        <text
          x="58"
          y="16"
          fill="#fff"
          fontFamily="system-ui, Arial, sans-serif"
          fontSize="14"
          fontWeight="500"
        >
          Reviews
        </text>
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            transform={`translate(${i * 16}, 22)`}
            d="M6 0l1.4 4.2H12l-3.5 2.6 1.3 4.2L6 8.4 2.2 11 3.5 6.8 0 4.2h4.6z"
            fill="#FABB05"
          />
        ))}
      </svg>
    ),
  },
  {
    name: "Clutch",
    href: "https://clutch.co/profile/inheritx-solutions",
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
    // TODO: Replace with the official InheritX Upwork agency profile URL
    // (upwork.com/agencies/…). Do not use talent search pages.
    href: undefined,
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
    href: "https://www.trustpilot.com/review/inheritx.com",
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
      {sequence.map((logo, index) => {
        const content = (
          <>
            {logo.node}
            {!ariaHidden ? <span className="sr-only">{logo.name}</span> : null}
          </>
        );

        return (
          <div
            key={`${logo.name}-${index}`}
            title={ariaHidden ? undefined : logo.name}
            className="flex min-h-16 shrink-0 items-center justify-center opacity-90 transition-opacity hover:opacity-100"
          >
            {logo.href && !ariaHidden ? (
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
                aria-label={`View InheritX on ${logo.name}`}
              >
                {content}
              </a>
            ) : (
              content
            )}
          </div>
        );
      })}
    </div>
  );
}

export function TrustedBy() {
  return (
    <section
      aria-label="Trust and recognition"
      className="relative z-10 overflow-hidden border-b border-white/[0.06] bg-ink py-16 md:py-20"
    >
      <div className="mx-auto max-w-[1400px] px-5 text-center md:px-8">
        <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
          Recognition
        </p>
        <h2 className="font-display mt-3 text-2xl leading-tight text-white md:text-4xl">
          Trusted presence across leading platforms.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/50 md:text-base">
          Open any profile to verify InheritX delivery history and reviews. For
          enterprise diligence, start with our published case studies—or request
          references under NDA.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2.5 rounded-full bg-cyan px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(0,190,212,0.22)] transition-colors hover:bg-white hover:text-ink"
          >
            Explore case studies
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
