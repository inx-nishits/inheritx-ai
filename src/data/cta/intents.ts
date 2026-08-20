/**
 * Official contact intents. Do not add a fourth intent without a product decision.
 * Query aliases exist only so older / path-page URLs keep working.
 */

export const CONTACT_PATH = "/contact" as const;

export const OFFICIAL_CONTACT_INTENTS = [
  "strategy",
  "assessment",
  "security",
] as const;

export type OfficialContactIntent = (typeof OFFICIAL_CONTACT_INTENTS)[number];

/** Legacy query values that must resolve to an official intent. */
export const CONTACT_INTENT_ALIASES = {
  architecture: "assessment",
  workshop: "strategy",
} as const satisfies Record<string, OfficialContactIntent>;

export type ContactIntentAlias = keyof typeof CONTACT_INTENT_ALIASES;

export const CONTACT_INTENTS = [
  {
    id: "strategy",
    label: "AI strategy call",
    topic: "AI strategy call",
    description:
      "Pressure-test fit, scope, and a 90-day path with an architect.",
    priority: "P0",
  },
  {
    id: "assessment",
    label: "AI assessment / architecture review",
    topic: "AI assessment / architecture review",
    description:
      "Structured readiness review, data, architecture, security, and build-vs-buy.",
    priority: "P1",
  },
  {
    id: "security",
    label: "Security / Diligence",
    topic: "Security / Diligence",
    description: "Questionnaire support, NDA pack, and reference process.",
    priority: "P2",
  },
] as const satisfies ReadonlyArray<{
  id: OfficialContactIntent;
  label: string;
  topic: string;
  description: string;
  priority: "P0" | "P1" | "P2";
}>;

export function isOfficialContactIntent(
  value: string | null | undefined,
): value is OfficialContactIntent {
  return (
    value === "strategy" || value === "assessment" || value === "security"
  );
}

/**
 * Maps a raw `?intent=` value to an official intent.
 * Unknown values return null - do not invent a fallback intent.
 */
export function resolveContactIntent(
  raw: string | null | undefined,
): OfficialContactIntent | null {
  if (!raw) return null;
  const normalized = raw.trim().toLowerCase();
  if (isOfficialContactIntent(normalized)) return normalized;
  if (normalized in CONTACT_INTENT_ALIASES) {
    return CONTACT_INTENT_ALIASES[normalized as ContactIntentAlias];
  }
  return null;
}

export function contactHref(
  intent: OfficialContactIntent,
  extra?: Record<string, string>,
): string {
  const params = new URLSearchParams({ intent, ...extra });
  return `${CONTACT_PATH}?${params.toString()}`;
}

export function contactIntentById(id: OfficialContactIntent) {
  return CONTACT_INTENTS.find((item) => item.id === id)!;
}
