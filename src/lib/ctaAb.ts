import { CTA_LABELS } from "@/data/cta/copy";
import { isAnalyticsConsentGranted } from "@/lib/consent";

export const HERO_AB_KEY = "inx_cta_ab_hero_v1";

export type HeroAbVariant = "control" | "treatment";

/** Highest-value slot: home hero primary. Sticky 50/50. */
export const HERO_AB_LABELS: Record<HeroAbVariant, string> = {
  control: CTA_LABELS.strategyCall,
  treatment: CTA_LABELS.talkToArchitectShort,
};

const HERO_AB_SESSION_KEY = `${HERO_AB_KEY}:session`;

export function getHeroAbVariant(): HeroAbVariant {
  if (typeof window === "undefined") return "control";

  const analyticsOk = isAnalyticsConsentGranted();

  try {
    if (analyticsOk) {
      const stored = window.localStorage.getItem(HERO_AB_KEY);
      if (stored === "control" || stored === "treatment") return stored;
    }
  } catch {
    /* private mode */
  }

  // Always keep the variant stable within the current tab/session.
  // This does not create a cookie, so it is safe when analytics consent
  // is not granted yet.
  try {
    const fromSession = window.sessionStorage.getItem(HERO_AB_SESSION_KEY);
    if (fromSession === "control" || fromSession === "treatment") return fromSession;
  } catch {
    /* private mode */
  }

  const assigned: HeroAbVariant =
    Math.random() < 0.5 ? "control" : "treatment";

  try {
    window.sessionStorage.setItem(HERO_AB_SESSION_KEY, assigned);
  } catch {
    /* private mode */
  }

  if (analyticsOk) persistHeroAbVariant(assigned);
  return assigned;
}

export function persistHeroAbVariant(variant: HeroAbVariant): void {
  try {
    window.localStorage.setItem(HERO_AB_KEY, variant);
  } catch {
    /* private mode */
  }
  document.cookie = `${HERO_AB_KEY}=${variant};path=/;max-age=15552000;samesite=lax`;
}

export function readStoredHeroAbVariant(): HeroAbVariant | undefined {
  if (typeof window === "undefined") return undefined;

  const analyticsOk = isAnalyticsConsentGranted();

  if (!analyticsOk) {
    // Before consent, tracking is blocked anyway; omit the variant from the payload.
    // (We keep session stability for UI via getHeroAbVariant.)
    return undefined;
  }

  try {
    const stored = window.localStorage.getItem(HERO_AB_KEY);
    if (stored === "control" || stored === "treatment") return stored;
  } catch {
    /* private mode */
  }

  // If we never persisted a cookie before consent, recover from sessionStorage
  // and then persist immediately (post-consent).
  try {
    const fromSession = window.sessionStorage.getItem(HERO_AB_SESSION_KEY);
    if (fromSession === "control" || fromSession === "treatment") {
      persistHeroAbVariant(fromSession);
      return fromSession;
    }
  } catch {
    /* private mode */
  }

  const match = document.cookie.match(
    new RegExp(`(?:^|; )${HERO_AB_KEY}=(control|treatment)`),
  );
  return match?.[1] as HeroAbVariant | undefined;
}
