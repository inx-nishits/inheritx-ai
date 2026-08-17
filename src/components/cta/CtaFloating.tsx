"use client";

import { ArrowUpRight } from "lucide-react";

import { ctaFamilyClasses } from "@/data/cta/families";
import { cn } from "@/lib/cn";

import { CtaPrimary } from "./CtaPrimary";

type CtaFloatingProps = {
  teaser: string;
  label: string;
  href: string;
  className?: string;
};

/** Inner chrome for a path floating CTA. Scroll show/hide stays in PathFloatingCta. */
export function CtaFloating({
  teaser,
  label,
  href,
  className,
}: CtaFloatingProps) {
  return (
    <div className={cn(ctaFamilyClasses.object.floating, className)}>
      <p className="min-w-0 flex-1 truncate text-xs text-white/70 sm:text-sm">
        {teaser}
      </p>
      <CtaPrimary
        href={href}
        trackLabel={label}
        location="path.float"
        pattern="contextual-band"
        className="min-h-11 shrink-0 px-4 py-2 text-xs sm:text-sm"
        strength={0.2}
      >
        {label}
        <ArrowUpRight size={14} />
      </CtaPrimary>
    </div>
  );
}
