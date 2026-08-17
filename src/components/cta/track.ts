"use client";

import type { MouseEvent, ReactNode } from "react";

import type { CtaAnalyticsIntent, CtaLocation } from "@/data/cta/analytics";
import type { CtaFamilyId } from "@/data/cta/families";
import type { CtaPatternId } from "@/data/cta/patterns";
import { resolveContactIntent } from "@/data/cta/intents";
import { trackCtaClick } from "@/lib/cta";
import { readStoredHeroAbVariant } from "@/lib/ctaAb";

export type CtaAction = {
  label: string;
  href: string;
};

export type CtaTrackable = {
  location?: CtaLocation | (string & {});
  intent?: CtaAnalyticsIntent;
  pattern?: CtaPatternId;
  variant?: string;
};

export function intentFromHref(href: string): CtaAnalyticsIntent {
  const queryIndex = href.indexOf("?");
  const params = new URLSearchParams(
    queryIndex >= 0 ? href.slice(queryIndex) : "",
  );
  const resolved = resolveContactIntent(params.get("intent"));
  if (resolved) return resolved;
  if (href.startsWith("/contact") || href.includes("/contact?")) {
    return "strategy";
  }
  return "explore";
}

export function labelFromChildren(
  children: ReactNode,
  fallback = "",
): string {
  return typeof children === "string" ? children : fallback;
}

export function handleCtaClick(options: {
  href: string;
  label: string;
  family: CtaFamilyId;
  pattern: CtaPatternId;
  intent?: CtaAnalyticsIntent;
  location?: CtaLocation | (string & {});
  variant?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (event: MouseEvent<HTMLAnchorElement>) => {
    const variant = options.variant ?? readStoredHeroAbVariant();
    const payload = {
      family: options.family,
      pattern: options.pattern,
      intent: options.intent ?? intentFromHref(options.href),
      location: options.location ?? "nav",
      label: options.label,
      href: options.href,
      ...(variant ? { variant } : {}),
    };
    try {
      sessionStorage.setItem("inx_cta_last", JSON.stringify(payload));
    } catch {
      /* private mode */
    }
    trackCtaClick(payload);
    options.onClick?.(event);
  };
}
