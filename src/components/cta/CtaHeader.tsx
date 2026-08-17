"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { CTA_LABELS } from "@/data/cta/copy";
import { ctaFamilyClasses } from "@/data/cta/families";
import { contactHref } from "@/data/cta/intents";
import { cn } from "@/lib/cn";

import { handleCtaClick } from "./track";
import { useCtaImpression } from "./useCtaImpression";

type CtaHeaderProps = {
  href?: string;
  label?: string;
  mobileLabel?: string;
  className?: string;
};

export function CtaHeader({
  href = contactHref("strategy"),
  label = CTA_LABELS.strategyCall,
  mobileLabel = CTA_LABELS.strategyCallShort,
  className,
}: CtaHeaderProps) {
  const hrefValue = href;
  const impressionRef = useCtaImpression<HTMLSpanElement>({
    family: "fill",
    pattern: "header-convert",
    intent: "strategy",
    location: "header",
    label,
    href: hrefValue,
  });

  return (
    <span ref={impressionRef} className="inline-flex">
      <Link
        href={href}
        onClick={handleCtaClick({
          href,
          label,
          family: "fill",
          pattern: "header-convert",
          intent: "strategy",
          location: "header",
        })}
        className={cn(ctaFamilyClasses.fill.header, className)}
      >
        <span className="sm:hidden">{mobileLabel}</span>
        <span className="hidden sm:inline">{label}</span>
        <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-white text-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-white">
          <ArrowUpRight size={13} strokeWidth={2.25} />
        </span>
      </Link>
    </span>
  );
}
