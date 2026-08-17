import { CTA_LABELS } from "@/data/cta/copy";

export const HERO_AB_KEY = "inx_cta_ab_hero_v1";

export type HeroAbVariant = "control" | "treatment";

/** Highest-value slot: home hero primary. Sticky 50/50. */
export const HERO_AB_LABELS: Record<HeroAbVariant, string> = {
  control: CTA_LABELS.strategyCall,
  treatment: CTA_LABELS.talkToArchitectShort,
};

export function getHeroAbVariant(): HeroAbVariant {
  if (typeof window === "undefined") return "control";

  try {
    const stored = window.localStorage.getItem(HERO_AB_KEY);
    if (stored === "control" || stored === "treatment") return stored;
  } catch {
    /* private mode */
  }

  const assigned: HeroAbVariant = Math.random() < 0.5 ? "control" : "treatment";
  persistHeroAbVariant(assigned);
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
  try {
    const stored = window.localStorage.getItem(HERO_AB_KEY);
    if (stored === "control" || stored === "treatment") return stored;
  } catch {
    /* private mode */
  }
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${HERO_AB_KEY}=(control|treatment)`),
  );
  return match?.[1] as HeroAbVariant | undefined;
}
