"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

import { ctaFamilyClasses } from "@/data/cta/families";
import { cn } from "@/lib/cn";

import { handleCtaClick, labelFromChildren, type CtaTrackable } from "./track";

type CtaTextProps = CtaTrackable & {
  href: string;
  children: ReactNode;
  tone?: "default" | "quiet";
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export function CtaText({
  href,
  children,
  tone = "default",
  className,
  location,
  intent,
  pattern = "text-explore",
  variant,
  onClick,
}: CtaTextProps) {
  const label = labelFromChildren(children);

  return (
    <Link
      href={href}
      onClick={handleCtaClick({
        href,
        label,
        family: "text",
        pattern,
        intent,
        location,
        variant,
        onClick,
      })}
      className={cn(
        tone === "quiet"
          ? "inline-flex items-center gap-1 text-sm text-white/40 transition-colors hover:text-white"
          : ctaFamilyClasses.text,
        className,
      )}
    >
      {children}
      <ArrowUpRight
        size={tone === "quiet" ? 13 : 14}
        className={
          tone === "quiet"
            ? "text-white/35"
            : "text-white/45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        }
      />
    </Link>
  );
}
