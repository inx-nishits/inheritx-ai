import type { CtaFamilyId } from "./families";
import type { CtaPatternId } from "./patterns";
import type { OfficialContactIntent } from "./intents";

/**
 * Event names for the analytics vendor (GTM dataLayer / gtag).
 * `trackCta` in src/lib/cta.ts always emits these.
 * A/B: home hero primary only (`cta_variant`). Do not expand until a baseline exists.
 */
export const CTA_EVENTS = {
  click: "cta_click",
  impression: "cta_impression",
  formStart: "cta_form_start",
  formSubmit: "cta_form_submit",
  iraOpen: "cta_ira_open",
} as const;

export type CtaEventName = (typeof CTA_EVENTS)[keyof typeof CTA_EVENTS];

export type CtaAnalyticsIntent =
  | OfficialContactIntent
  | "explore"
  | "ira"
  | "none";

export type CtaLocation =
  | "header"
  | "mobile-nav"
  | "home.hero"
  | "home.mid"
  | "home.final"
  | "page.hero"
  | "page.mid"
  | "page.close"
  | "path.float"
  | "footer"
  | "contact.form"
  | "ira"
  | "insight"
  | "case-study"
  | "nav";

export type CtaAnalyticsPayload = {
  event: CtaEventName;
  family: CtaFamilyId;
  pattern: CtaPatternId;
  intent: CtaAnalyticsIntent;
  location: CtaLocation | (string & {});
  label: string;
  href: string;
  variant?: string;
};
