"use client";

import type { CtaLocation } from "@/data/cta/analytics";
import { ctaFamilyClasses } from "@/data/cta/families";
import { cn } from "@/lib/cn";

import { CtaGhost } from "./CtaGhost";
import { CtaPrimary } from "./CtaPrimary";
import { CtaProof } from "./CtaProof";
import { CtaText } from "./CtaText";
import type { CtaAction } from "./track";
import { intentFromHref } from "./track";

type CtaConversionBandProps = {
  eyebrow: string;
  title: string;
  description: string;
  primary: CtaAction;
  secondary?: CtaAction;
  secondaryFamily?: "text" | "tint" | "ghost";
  variant?: "card" | "bleed";
  titleAs?: "h2" | "h3";
  location?: CtaLocation | (string & {});
  className?: string;
};

export function CtaConversionBand({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  secondaryFamily = "text",
  variant = "card",
  titleAs = "h3",
  location = "page.mid",
  className,
}: CtaConversionBandProps) {
  const TitleTag = titleAs;
  const primaryIntent = intentFromHref(primary.href);
  const secondaryIntent = secondary
    ? intentFromHref(secondary.href)
    : "explore";

  const actions = (
    <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
      <CtaPrimary
        href={primary.href}
        location={location}
        intent={primaryIntent}
        pattern="contextual-band"
      >
        {primary.label}
      </CtaPrimary>
      {secondary ? (
        secondaryFamily === "tint" ? (
          <CtaProof
            href={secondary.href}
            location={location}
            intent={secondaryIntent}
            pattern="proof-band"
          >
            {secondary.label}
          </CtaProof>
        ) : secondaryFamily === "ghost" ? (
          <CtaGhost
            href={secondary.href}
            location={location}
            intent={secondaryIntent}
            pattern="contextual-band"
          >
            {secondary.label}
          </CtaGhost>
        ) : (
          <CtaText
            href={secondary.href}
            location={location}
            intent={secondaryIntent}
            pattern="text-explore"
          >
            {secondary.label}
          </CtaText>
        )
      ) : null}
    </div>
  );

  const copy = (
    <div className="w-full min-w-0 max-w-2xl">
      <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
        {eyebrow}
      </p>
      <TitleTag
        className={cn(
          "font-display mt-2 text-white",
          titleAs === "h2"
            ? "mt-3 text-2xl leading-tight md:text-3xl lg:text-4xl"
            : "mt-2 text-2xl md:text-3xl",
        )}
      >
        {title}
      </TitleTag>
      <p className="mt-3 text-sm leading-relaxed text-white/55 md:text-base">
        {description}
      </p>
    </div>
  );

  if (variant === "bleed") {
    return (
      <section
        className={cn(
          "relative overflow-hidden border-y border-white/[0.06] bg-ink-soft",
          className,
        )}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,190,212,0.12),transparent_55%)]" />
        <div className="relative mx-auto flex max-w-page flex-col items-start gap-6 px-5 py-14 md:px-8 md:py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          {copy}
          {actions}
        </div>
      </section>
    );
  }

  return (
    <div className={cn(ctaFamilyClasses.object.band, className)}>
      {copy}
      {actions}
    </div>
  );
}
