"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

import { ctaFamilyClasses } from "@/data/cta/families";
import { cn } from "@/lib/cn";

import { handleCtaClick, labelFromChildren, type CtaTrackable } from "./track";

type CtaProofProps = CtaTrackable & {
  href: string;
  children: ReactNode;
  arrow?: "chevron" | "northeast";
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export function CtaProof({
  href,
  children,
  arrow = "northeast",
  className,
  location,
  intent,
  pattern = "hero-pair",
  variant,
  onClick,
}: CtaProofProps) {
  const label = labelFromChildren(children);

  return (
    <Link
      href={href}
      onClick={handleCtaClick({
        href,
        label,
        family: "tint",
        pattern,
        intent,
        location,
        variant,
        onClick,
      })}
      className={cn("group", ctaFamilyClasses.tint, className)}
    >
      {children}
      {arrow === "chevron" ? (
        <span className="text-cyan">
          →
        </span>
      ) : (
        <ArrowUpRight size={14} className="shrink-0 text-cyan" />
      )}
    </Link>
  );
}
