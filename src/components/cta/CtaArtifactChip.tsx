"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

import { ctaFamilyClasses } from "@/data/cta/families";
import { cn } from "@/lib/cn";

import { handleCtaClick, type CtaTrackable } from "./track";

type CtaArtifactChipProps = CtaTrackable & {
  href: string;
  eyebrow: string;
  label: string;
  icon: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export function CtaArtifactChip({
  href,
  eyebrow,
  label,
  icon,
  className,
  location,
  intent = "explore",
  pattern = "artifact-chip",
  onClick,
}: CtaArtifactChipProps) {
  return (
    <Link
      href={href}
      onClick={handleCtaClick({
        href,
        label,
        family: "object",
        pattern,
        intent,
        location,
        onClick,
      })}
      className={cn(ctaFamilyClasses.object.chip, className)}
    >
      <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-cyan text-white transition-colors group-hover:bg-cyan/90">
        {icon}
      </span>
      <span className="min-w-0 text-left leading-tight">
        <span className="block text-[10px] tracking-[0.18em] text-cyan uppercase">
          {eyebrow}
        </span>
        <span className="mt-0.5 block whitespace-nowrap text-sm font-semibold text-white">
          {label}
        </span>
      </span>
      <ArrowUpRight
        size={14}
        className="shrink-0 text-cyan transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}
