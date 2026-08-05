/**
 * Enterprise proof helpers — only reference published case studies
 * or clearly labeled anonymized engagement classes. Never invent logos,
 * client names, testimonials, certifications, or unaudited metrics.
 */

export const anonymousEngagementClasses = [
  {
    label: "Healthcare & clinical workflows",
    detail: "Published patterns in intake, vision quality gates, and care discovery.",
    caseIds: ["ai-dent", "heva"] as const,
  },
  {
    label: "AI platforms & LLMOps reliability",
    detail: "Published work hardening AI builder infrastructure and recovery.",
    caseIds: ["kavia-ai"] as const,
  },
  {
    label: "AI infrastructure security",
    detail: "Published posture hardening for an AI damage-detection platform.",
    caseIds: ["t2d2"] as const,
  },
  {
    label: "Enterprise operations systems",
    detail: "Published multi-property and real-time operations platforms.",
    caseIds: ["qdis", "twelfthman", "e-mobility"] as const,
  },
] as const;

/** Industry home accordion → sector page + published related cases only. */
export const industryCaseLinks: Record<
  string,
  { sectorHref: string; cases: { id: string; name: string }[] }
> = {
  Healthcare: {
    sectorHref: "/industries/healthcare",
    cases: [
      { id: "ai-dent", name: "AI Dent" },
      { id: "heva", name: "Heva" },
    ],
  },
  Finance: {
    sectorHref: "/industries/finance",
    cases: [{ id: "agent-bank", name: "Agent Bank" }],
  },
  Retail: {
    sectorHref: "/industries/retail",
    cases: [{ id: "twelfthman", name: "Twelfthman" }],
  },
  Manufacturing: {
    sectorHref: "/industries/manufacturing",
    cases: [],
  },
  Insurance: {
    sectorHref: "/industries/insurance",
    cases: [],
  },
  Logistics: {
    sectorHref: "/industries/logistics",
    cases: [{ id: "e-mobility", name: "E-mobility" }],
  },
  Government: {
    sectorHref: "/industries/government",
    cases: [],
  },
};

export const diligenceLinks = [
  {
    label: "Security FAQ",
    href: "/resources/security-faq",
    note: "Public procurement-oriented answers",
  },
  {
    label: "Diligence pack",
    href: "/resources/diligence-pack",
    note: "Detailed materials under NDA after fit is confirmed",
  },
  {
    label: "IP Ownership",
    href: "/company/ip-ownership",
    note: "How code, models, and data transfer at handover",
  },
  {
    label: "Security practices",
    href: "/company/security",
    note: "Deployment and governance posture",
  },
] as const;
