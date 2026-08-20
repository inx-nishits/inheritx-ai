/**
 * Enterprise credibility - information still required from InheritX.
 * These are NOT website claims. Complete them before publishing as facts.
 *
 * Do not invent certifications, partnerships, named logos, or awards.
 */
export const enterpriseCredibilityTodos = [
  {
    id: "certifications",
    phase: 3,
    owner: "Security / Leadership",
    item: "Confirm and document any real certifications (e.g. SOC 2). Publish only when evidenced.",
  },
  {
    id: "subprocessors",
    phase: 1,
    owner: "Security",
    item: "Maintain an accurate subprocessors / tools list for NDA diligence packs.",
  },
  {
    id: "ip-exhibit",
    phase: 1,
    owner: "Legal",
    item: "Finalize standard IP schedule / MSA exhibit for sales to share under NDA.",
  },
  {
    id: "accelerator-disclosure",
    phase: 1,
    owner: "Delivery / Legal",
    item: "Per-SOW list of any reusable accelerators disclosed to the client.",
  },
  {
    id: "named-references",
    phase: 3,
    owner: "Sales",
    item: "Collect written approval for named customer references; otherwise keep anonymized industry+scale refs only.",
  },
  {
    id: "anonymized-refs",
    phase: 2,
    owner: "Sales / Delivery",
    item: "Complete 6-12 anonymized enterprise-grade reference blurbs in /resources/enterprise-references STATUS rows (industry, size band, use case, outcome).",
  },
  {
    id: "diligence-pdf",
    phase: 1,
    owner: "Sales Enablement",
    item: "Assemble downloadable/NDA diligence PDF from public pages + confidential annexes.",
  },
  {
    id: "partnership-status",
    phase: 1,
    owner: "Partnerships",
    item: "Confirm whether any formal cloud/model partnerships exist; keep site language as “platforms we build with” unless contracted.",
  },
  {
    id: "customer-quotes",
    phase: 3,
    owner: "Marketing / Sales",
    item: "Published testimonials live in src/data/testimonials.ts (approved + published). Refresh only with written customer approval.",
  },
  {
    id: "quarterly-refresh",
    phase: 3,
    owner: "Marketing",
    item: "Quarterly refresh of outcomes, security FAQ, and diligence STATUS rows when new approved material exists.",
  },
] as const;
