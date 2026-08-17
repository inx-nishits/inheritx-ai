import { CONTACT_INTENTS } from "@/data/cta/intents";

export const contactHero = {
  eyebrow: "Contact",
  title: "Book an AI strategy call with an architect.",
  description:
    "Thirty minutes to pressure-test your mandate. We’ll review your use case, say honestly whether AI is the right solution, and outline a delivery roadmap—NDA and a diligence pack available for qualified opportunities.",
};

/** Primary buyer intents — source of truth is `@/data/cta/intents`. */
export const contactIntents = CONTACT_INTENTS;

export const contactChannels = [
  {
    title: "Strategy & transformation",
    detail: "hello@inheritx.com",
    href: "mailto:hello@inheritx.com",
    note: "Best for AI transformation, platforms, and agentic systems",
  },
  {
    title: "Security FAQ",
    detail: "Public procurement answers",
    href: "/resources/security-faq",
    note: "Data residency, access, models, IP—before the call",
  },
  {
    title: "Diligence pack",
    detail: "Vendor review materials",
    href: "/resources/diligence-pack",
    note: "Detailed pack under NDA after fit is confirmed",
  },
  {
    title: "Careers",
    detail: "Open roles & how to apply",
    href: "/careers",
    note: "AI architects, ML engineers, and LLMOps builders",
  },
];

export const contactOffices = [
  {
    region: "United States",
    address: "222 Broadway, New York, NY 10038",
  },
  {
    region: "Germany",
    address: "Kloster 3, 79713 Bad Säckingen",
  },
  {
    region: "Japan",
    address: "1-36-13 Hashiba, Taito-ku, Tokyo",
  },
  {
    region: "India",
    address: "8th Floor, Panchdhara Complex, S G Highway, Bodakdev, Ahmedabad 380054",
  },
];

export const contactNextSteps = [
  {
    step: "01",
    title: "Share context",
    copy: "Mandate and KPI, systems in/out of scope, deployment preferences, any security review underway, and whether you need a strategy call, assessment, production build, squad, or embeds. Include what “good” looks like in 90 days.",
  },
  {
    step: "02",
    title: "Architect conversation",
    copy: "Strategy call or assessment scoping with an AI architect—we will say when AI is not the right move. NDA available on request.",
  },
  {
    step: "03",
    title: "Concrete next move",
    copy: "Recommended engagement shape with ownership model and success metrics—plus diligence materials and anonymized or approved references when appropriate.",
  },
];

export const contactTopics = [
  "AI strategy call",
  "AI assessment / architecture review",
  "AI transformation Program",
  "AI / ML Engineering",
  "Agentic AI / Multi-Agent System",
  "Voice / Realtime Conversational AI",
  "Document AI / IDP",
  "AI Search / Enterprise Search",
  "Fine-Tuning & Custom Models",
  "AI Eval / Safety / Red Team",
  "AI DevOps / LLMOps",
  "AI consulting & Architecture",
  "Custom AI Platform",
  "Embedded AI Engineering",
  "Dedicated AI Squad",
  "Private AI / VPC Deployment",
  "Security / Diligence",
  "Partnership",
  "Other",
];

export const contactProcurementNotes = [
  "NDA available before detailed architecture or data discussion",
  "Security FAQ is public; full diligence pack after fit is confirmed",
  "Named references only with written customer approval—otherwise anonymized industry + scale under NDA",
  "IP handover and private-cloud / VPC deployment are default commercial postures",
];

/** Prep guidance shown via existing contact copy surfaces / FAQs where wired. */
export const contactStrategyPrep = [
  "Business mandate and the KPI you need to move",
  "Systems and data sources in scope (and out of scope)",
  "Deployment preference (VPC / private estate constraints)",
  "Security or compliance reviews already underway",
  "Whether you need a strategy call, assessment, production build, squad, or embeds",
];
