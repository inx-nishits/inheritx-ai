export {
  CONTACT_PATH,
  CONTACT_INTENTS,
  CONTACT_INTENT_ALIASES,
  OFFICIAL_CONTACT_INTENTS,
  contactHref,
  contactIntentById,
  isOfficialContactIntent,
  resolveContactIntent,
  type ContactIntentAlias,
  type OfficialContactIntent,
} from "./intents";

export {
  CTA_FAMILIES,
  CTA_TAP_MIN_PX,
  ctaFamilyClasses,
  ctaFamilyMeta,
  type CtaFamilyId,
} from "./families";

export {
  BANNED_CTA_LABELS,
  CTA_LABELS,
  ctaCopyByPageJob,
  isBannedCtaLabel,
  type CtaCopySlot,
  type CtaLabelKey,
} from "./copy";

export {
  CTA_PATTERNS,
  ctaPatternMeta,
  type CtaPatternId,
} from "./patterns";

export {
  CTA_EVENTS,
  type CtaAnalyticsIntent,
  type CtaAnalyticsPayload,
  type CtaEventName,
  type CtaLocation,
} from "./analytics";

export { CTA_RULES } from "./rules";
