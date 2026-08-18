"use client";

import { usePathname } from "next/navigation";

import { CTA_LABELS } from "@/data/cta/copy";
import { contactHref } from "@/data/cta/intents";

import { CtaGhost } from "./CtaGhost";
import { CtaPrimary } from "./CtaPrimary";
import { useCtaImpression } from "./useCtaImpression";

type CtaFooterStripProps = {
  title?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaFooterStrip({
  title = "Ready to pressure-test an AI mandate?",
  primaryLabel = CTA_LABELS.footerStrategy,
  primaryHref = contactHref("strategy"),
  secondaryLabel = "AI assessment",
  secondaryHref = contactHref("assessment"),
}: CtaFooterStripProps) {
  const impressionRef = useCtaImpression<HTMLDivElement>({
    family: "fill",
    pattern: "footer-strip",
    intent: "strategy",
    location: "footer",
    label: primaryLabel,
    href: primaryHref,
  });

  return (
    <div
      ref={impressionRef}
      className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <p className="font-display max-w-md text-xl leading-snug text-white md:text-2xl">
        {title}
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <CtaPrimary
          href={primaryHref}
          location="footer"
          intent="strategy"
          pattern="footer-strip"
        >
          {primaryLabel}
        </CtaPrimary>
        <CtaGhost
          href={secondaryHref}
          location="footer"
          intent="assessment"
          pattern="footer-strip"
        >
          {secondaryLabel}
        </CtaGhost>
      </div>
    </div>
  );
}

/** Hides on /contact where the form is already the CTA. */
export function CtaFooterStripGate() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;
  return (
    <div className="mt-12 border-t border-white/10 pt-8 md:mt-14">
      <CtaFooterStrip />
    </div>
  );
}
