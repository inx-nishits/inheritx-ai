"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/**
 * Compact homepage discoverability only — full procurement depth lives on
 * Contact, Security FAQ, and Diligence Pack.
 */
export function ProcurementTrustStrip() {
  return (
    <section
      id="diligence"
      aria-label="Security and diligence links"
      className="border-t border-white/[0.06] bg-ink"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-2.5 px-5 py-4 md:flex-row md:items-center md:justify-between md:gap-6 md:px-8 md:py-5">
        <p className="text-sm text-white/40">
          Need security or procurement information?
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5">
          <Link
            href="/resources/security-faq"
            className="inline-flex items-center gap-1 text-sm text-white/35 transition-colors hover:text-white/60"
          >
            Security FAQ
            <ArrowUpRight size={12} className="opacity-70" />
          </Link>
          <Link
            href="/resources/diligence-pack"
            className="inline-flex items-center gap-1 text-sm text-white/35 transition-colors hover:text-white/60"
          >
            Diligence Pack
            <ArrowUpRight size={12} className="opacity-70" />
          </Link>
        </div>
      </div>
    </section>
  );
}
