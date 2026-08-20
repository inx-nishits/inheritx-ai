/**
 * Twelve CTA patterns from the strategy blueprint.
 * Phase 2 builds components; Phase 3 binds them to pages.
 */

export const CTA_PATTERNS = [
  "header-convert",
  "hero-pair",
  "artifact-chip",
  "text-explore",
  "proof-band",
  "contextual-band",
  "case-convert",
  "insight-inline",
  "closing-stage",
  "form-destination",
  "ira-converse",
  "footer-strip",
] as const;

export type CtaPatternId = (typeof CTA_PATTERNS)[number];

export const ctaPatternMeta = {
  "header-convert": {
    id: "header-convert",
    name: "Header convert",
    family: "fill",
    purpose: "Always-available high-intent path",
    where: "Global header and mobile drawer",
    phase: 2,
  },
  "hero-pair": {
    id: "hero-pair",
    name: "Hero pair",
    family: "fill",
    purpose: "Convert + proof in one viewport - never two fills",
    where: "Home, solutions index, topic heroes",
    phase: 2,
  },
  "artifact-chip": {
    id: "artifact-chip",
    name: "Artifact chip",
    family: "object",
    purpose: "Featured build without a sales verb",
    where: "Home hero, portfolio",
    phase: 2,
  },
  "text-explore": {
    id: "text-explore",
    name: "Text explore",
    family: "text",
    purpose: "Low-commitment movement between pages",
    where: "Cards, lists, related blocks",
    phase: 2,
  },
  "proof-band": {
    id: "proof-band",
    name: "Proof band",
    family: "tint",
    purpose: "Trust before ask",
    where: "After logos, outcomes, quotes",
    phase: 2,
  },
  "contextual-band": {
    id: "contextual-band",
    name: "Contextual conversion band",
    family: "object",
    purpose: "One mid-page convert after value is clear",
    where: "Long pages - one per page",
    phase: 2,
  },
  "case-convert": {
    id: "case-convert",
    name: "Case-study convert",
    family: "fill",
    purpose: "Do this for us after proof",
    where: "Case study detail closer",
    phase: 3,
  },
  "insight-inline": {
    id: "insight-inline",
    name: "Insight inline",
    family: "text",
    purpose: "Content to architect, not a banner",
    where: "Article end only",
    phase: 3,
  },
  "closing-stage": {
    id: "closing-stage",
    name: "Closing stage",
    family: "object",
    purpose: "Dominant final convert",
    where: "Home, company, solutions",
    phase: 2,
  },
  "form-destination": {
    id: "form-destination",
    name: "Form destination",
    family: "object",
    purpose: "The form is the CTA",
    where: "/contact only",
    phase: 3,
  },
  "ira-converse": {
    id: "ira-converse",
    name: "IRA converse",
    family: "object",
    purpose: "Low-friction Q&A - never a cyan pill",
    where: "Global, bottom-right",
    phase: 2,
  },
  "footer-strip": {
    id: "footer-strip",
    name: "Footer strip",
    family: "fill",
    purpose: "Last convert before legal - missing today",
    where: "Site footer",
    phase: 2,
  },
} as const satisfies Record<
  CtaPatternId,
  {
    id: CtaPatternId;
    name: string;
    family: string;
    purpose: string;
    where: string;
    phase: 2 | 3;
  }
>;
