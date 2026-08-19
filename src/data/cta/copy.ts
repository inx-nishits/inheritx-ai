import type { OfficialContactIntent } from "./intents";
import type { CtaFamilyId } from "./families";

/**
 * Canonical labels. Page jobs pick from this list — do not invent synonyms
 * like "Get Started" or "Contact Us" as a primary.
 */
export const CTA_LABELS = {
  strategyCall: "Book an AI strategy call",
  strategyCallShort: "Strategy call",
  strategySession: "Book an AI strategy call",
  opportunityAssessment: "Request an AI opportunity assessment",
  technicalDiscovery: "Book a technical discovery",
  architectureReview: "Schedule an architecture review",
  architectureAssessment: "Request an AI architecture assessment",
  deploymentStrategy: "Review deployment strategy",
  implementationWorkshop: "Book an AI implementation workshop",
  discussEnterpriseAi: "Discuss Enterprise AI strategy",
  assessmentShort: "Request an assessment",
  requestAssessment: "Request AI assessment",
  seeProductionCases: "View case studies",
  openSecurityFaq: "Open the Security FAQ",
  discussCapability: "Discuss this capability",
  similarEngagement: "Start a similar engagement",
  talkToArchitect: "Talk to an architect about this",
  talkToArchitectShort: "Talk to an architect",
  startConversation: "Start a conversation",
  seeOutcomes: "See production outcomes",
  reviewCaseStudies: "View case studies",
  exploreSolution: "Explore this solution",
  exploreSolutions: "Explore solutions",
  exploreAgentBank: "View Agent Bank",
  reviewSecurity: "Review security",
  askIra: "Ask IRA",
  footerStrategy: "Book an AI strategy call",
  formSubmitStrategy: "Book an AI strategy call",
  formSubmitAssessment: "Request AI assessment",
  formSubmitSecurity: "Request diligence support",
} as const;

export type CtaLabelKey = keyof typeof CTA_LABELS;

/** Exact phrases that must not be used as a primary conversion label. */
export const BANNED_CTA_LABELS = [
  "Contact Us",
  "Let's Talk",
  "Lets Talk",
  "Get Started",
  "Jump-start My Project",
  "Connect With Us",
  "Talk to Sales",
  "Book a Demo",
  "Learn More",
  "Download",
  "Talk to AI",
] as const;

export function isBannedCtaLabel(label: string): boolean {
  const normalized = label.trim().toLowerCase().replace(/['’]/g, "");
  return BANNED_CTA_LABELS.some(
    (banned) => banned.toLowerCase().replace(/['’]/g, "") === normalized,
  );
}

export type CtaCopySlot = {
  label: string;
  family: CtaFamilyId;
  intent?: OfficialContactIntent | "explore" | "ira";
  hrefHint: string;
};

/**
 * Copy by page job. Header / home final / contact submit keep
 * "Book an AI strategy call". Home hero primary is A/B'd
 * (`inx_cta_ab_hero_v1`): control = strategyCall, treatment =
 * talkToArchitectShort.
 */
export const ctaCopyByPageJob = {
  header: {
    primary: {
      label: CTA_LABELS.strategyCall,
      mobileLabel: CTA_LABELS.strategyCallShort,
      family: "fill",
      intent: "strategy",
      hrefHint: "/contact?intent=strategy",
    },
  },
  home: {
    primary: {
      label: CTA_LABELS.strategyCall,
      family: "fill",
      intent: "strategy",
      hrefHint: "/contact?intent=strategy",
    },
    secondary: {
      label: CTA_LABELS.seeOutcomes,
      family: "tint",
      intent: "explore",
      hrefHint: "/case-studies",
    },
    artifact: {
      label: CTA_LABELS.exploreAgentBank,
      family: "object",
      intent: "explore",
      hrefHint: "/portfolio/agent-bank",
    },
  },
    solutionsIndex: {
    primary: {
      label: CTA_LABELS.strategyCall,
      family: "fill",
      intent: "strategy",
      hrefHint: "/contact?intent=strategy",
    },
    secondary: {
      label: "Explore solution lanes",
      family: "text",
      intent: "explore",
      hrefHint: "#lanes",
    },
  },
  solutionTopic: {
    primary: {
      label: CTA_LABELS.discussCapability,
      family: "fill",
      intent: "strategy",
      hrefHint: "/contact?intent=strategy",
    },
    secondary: {
      label: CTA_LABELS.reviewCaseStudies,
      family: "tint",
      intent: "explore",
      hrefHint: "/case-studies",
    },
  },
  pathCeo: {
    primary: {
      label: CTA_LABELS.strategySession,
      family: "fill",
      intent: "strategy",
      hrefHint: "/contact?intent=strategy",
    },
    secondary: {
      label: CTA_LABELS.seeProductionCases,
      family: "tint",
      intent: "explore",
      hrefHint: "/case-studies",
    },
  },
    pathCto: {
    primary: {
      label: CTA_LABELS.architectureAssessment,
      family: "fill",
      intent: "assessment",
      hrefHint: "/contact?intent=assessment",
    },
    secondary: {
      label: CTA_LABELS.openSecurityFaq,
      family: "text",
      intent: "explore",
      hrefHint: "/resources/security-faq",
    },
  },
    pathHeadOfAi: {
    primary: {
      label: CTA_LABELS.architectureAssessment,
      family: "fill",
      intent: "assessment",
      hrefHint: "/contact?intent=assessment",
    },
    secondary: {
      label: CTA_LABELS.strategyCall,
      family: "ghost",
      intent: "strategy",
      hrefHint: "/contact?intent=strategy",
    },
  },
  caseStudy: {
    primary: {
      label: CTA_LABELS.similarEngagement,
      family: "fill",
      intent: "strategy",
      hrefHint: "/contact?intent=strategy",
    },
    secondary: {
      label: "Explore solutions",
      family: "text",
      intent: "explore",
      hrefHint: "/solutions",
    },
  },
  insight: {
    primary: {
      label: CTA_LABELS.talkToArchitect,
      family: "text",
      intent: "strategy",
      hrefHint: "/contact?intent=strategy",
    },
    secondary: {
      label: CTA_LABELS.exploreSolutions,
      family: "text",
      intent: "explore",
      hrefHint: "/solutions",
    },
  },
    company: {
    primary: {
      label: CTA_LABELS.strategyCall,
      family: "fill",
      intent: "strategy",
      hrefHint: "/contact?intent=strategy",
    },
    secondary: {
      label: CTA_LABELS.reviewSecurity,
      family: "text",
      intent: "explore",
      hrefHint: "/company/security",
    },
  },
  contact: {
    submit: {
      strategy: CTA_LABELS.formSubmitStrategy,
      assessment: CTA_LABELS.formSubmitAssessment,
      security: CTA_LABELS.formSubmitSecurity,
    },
  },
  footer: {
    primary: {
      label: CTA_LABELS.footerStrategy,
      family: "fill",
      intent: "strategy",
      hrefHint: "/contact?intent=strategy",
    },
    secondary: {
      label: "AI assessment",
      family: "ghost",
      intent: "assessment",
      hrefHint: "/contact?intent=assessment",
    },
  },
  ira: {
    primary: {
      label: CTA_LABELS.askIra,
      family: "object",
      intent: "ira",
      hrefHint: "IRA_CHAT_URL",
    },
  },
} as const;
