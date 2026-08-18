"use client";

import type { MouseEvent, ReactNode } from "react";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { ctaFamilyClasses } from "@/data/cta/families";
import { cn } from "@/lib/cn";

import { handleCtaClick, intentFromHref, labelFromChildren, type CtaTrackable } from "./track";

type CtaPrimarySize = "md" | "hero" | "lg";

type CtaPrimaryProps = CtaTrackable & {
  href: string;
  children: ReactNode;
  /** Analytics label when `children` is not a plain string. */
  trackLabel?: string;
  size?: CtaPrimarySize;
  fullWidth?: boolean;
  className?: string;
  strength?: number;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

const sizeClasses: Record<CtaPrimarySize, string> = {
  md: ctaFamilyClasses.fill.magnetic,
  hero: ctaFamilyClasses.fill.magneticHero,
  lg: "cta-primary min-h-12 justify-center px-8 py-4 text-base text-white",
};

export function CtaPrimary({
  href,
  children,
  trackLabel,
  size = "md",
  fullWidth = false,
  className,
  strength,
  location,
  intent,
  pattern = "hero-pair",
  variant,
  onClick,
}: CtaPrimaryProps) {
  const label = trackLabel ?? labelFromChildren(children);
  const resolvedIntent = intent ?? intentFromHref(href);
  const assessmentFill = resolvedIntent === "assessment";

  return (
    <MagneticButton
      href={href}
      strength={strength}
      onClick={handleCtaClick({
        href,
        label,
        family: "fill",
        pattern,
        intent: resolvedIntent,
        location,
        variant,
        onClick,
      })}
      className={cn(
        assessmentFill
          ? size === "hero"
            ? ctaFamilyClasses.fill.assessmentHero
            : ctaFamilyClasses.fill.assessment
          : sizeClasses[size],
        fullWidth && "w-full",
        className,
      )}
    >
      {children}
    </MagneticButton>
  );
}
