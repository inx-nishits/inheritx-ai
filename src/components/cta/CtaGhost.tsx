"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

import { ctaFamilyClasses } from "@/data/cta/families";
import { cn } from "@/lib/cn";

import { handleCtaClick, intentFromHref, labelFromChildren, type CtaTrackable } from "./track";

type CtaGhostProps = CtaTrackable & {
  href: string;
  children: ReactNode;
  className?: string;
  surface?: "ink" | "paper";
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export function CtaGhost({
  href,
  children,
  className,
  surface = "ink",
  location,
  intent,
  pattern = "closing-stage",
  variant,
  onClick,
}: CtaGhostProps) {
  const label = labelFromChildren(children);
  const resolvedIntent = intent ?? intentFromHref(href);
  const strategyGhost = resolvedIntent === "strategy";

  return (
    <Link
      href={href}
      onClick={handleCtaClick({
        href,
        label,
        family: "ghost",
        pattern,
        intent: resolvedIntent,
        location,
        variant,
        onClick,
      })}
      className={cn(
        surface === "paper"
          ? ctaFamilyClasses.ghostOnPaper
          : strategyGhost
            ? ctaFamilyClasses.ghostStrategy
            : ctaFamilyClasses.ghost,
        className,
      )}
    >
      {children}
    </Link>
  );
}
