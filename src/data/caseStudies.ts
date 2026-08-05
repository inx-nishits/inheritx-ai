export type CaseStudy = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  summary: string;
  technologies: string[];
  results: { value: string; label: string }[];
  image: string;
  challenge: string;
  approach: string;
  outcome: string;
  highlights: string[];
};

export const caseStudyIntro = {
  eyebrow: "Case Studies",
  title: "Measured AI outcomes from production—not pilot theater.",
  copy: "AI-led engagements first—computer vision, generative systems, AI platforms, and infrastructure—followed by enterprise systems that prove scale and ops discipline. We publish methodology with the story. Named or anonymized references for qualified opportunities are available under NDA.",
};

/** Homepage featured carousel — AI-forward IDs only. */
export const featuredCaseStudyIds = [
  "ai-dent",
  "heva",
  "kavia-ai",
  "t2d2",
  "hoop-dna",
] as const;

/**
 * Order is intentional: AI-forward stories first, then enterprise systems
 * that demonstrate scale/ops without over-claiming an AI angle.
 */
export const caseStudiesPage: CaseStudy[] = [
  {
    id: "ai-dent",
    name: "AI Dent",
    category: "Computer Vision",
    tagline: "Vision-guided dental assessment at home",
    summary:
      "Computer vision quality gates for at-home dental scans—reducing unnecessary clinic visits by 30–35% while keeping clinicians in the loop.",
    technologies: ["Computer Vision", "AWS Amplify", "Firebase", "Mobile capture"],
    results: [
      { value: "60%", label: "Reduced entry barriers" },
      { value: "30–35%", label: "Reduction in clinic visits" },
    ],
    image: "/images/visuals/industries/industry-healthcare.png",
    challenge:
      "Patients delayed care due to access friction, while clinics lacked a reliable way to capture diagnostic-quality imagery outside the chair—without replacing clinician judgment or weakening data controls.",
    approach:
      "We built a sensor-guided capture flow with vision models that gate scan quality, secure cloud processing, and clinician review workflows. High-risk interpretation stayed human-owned; AI focused on quality gates and intake efficiency.",
    outcome:
      "At-home scans became a trusted intake path—cutting avoidable visits without replacing clinical judgment. Pattern: vision + human review for regulated care workflows.",
    highlights: [
      "Vision models for scan quality gating",
      "Clinician-reviewed AI-assisted intake (HITL)",
      "Secure cloud pipeline for regulated care data",
      "Clear separation: AI assists intake; clinicians decide",
    ],
  },
  {
    id: "heva",
    name: "Heva",
    category: "Generative AI",
    tagline: "AI-native healthcare & wellness intelligence",
    summary:
      "NLP and personalization models that unify patient interaction and care discovery—cutting discovery effort by ~50%.",
    technologies: ["Python", "NLP", "ML Models", "React"],
    results: [
      { value: "~50%", label: "Reduction in care discovery effort" },
      { value: "Improved", label: "Personalized care pathways" },
    ],
    image: "/images/visuals/industries/industry-healthcare.png",
    challenge:
      "Patients struggled to navigate care options while providers lacked a unified intelligence layer for personalized guidance within approved content boundaries.",
    approach:
      "We designed an AI-native interaction layer—NLP-driven guidance, personalization models, and operator-visible pathways with human oversight for clinical escalation.",
    outcome:
      "Care discovery effort dropped sharply; patients received more relevant pathways without losing clinical accountability. Pattern: governed generative guidance with operator visibility.",
    highlights: [
      "Generative / NLP patient interaction",
      "Personalization for care discovery",
      "Human oversight for clinical escalation",
      "Operator-visible pathways (not a black box)",
    ],
  },
  {
    id: "kavia-ai",
    name: "Kavia AI",
    category: "AI Platforms",
    tagline: "Reliable infrastructure for AI workflow builders",
    summary:
      "Hardened an AI development platform so teams could ship AI-driven workflows with 40–50% faster incident recovery.",
    technologies: ["Python", "Node.js", "Kubernetes", "AWS", "Observability"],
    results: [
      { value: "40–50%", label: "Reduction in MTTR" },
      { value: "Improved", label: "AI builder productivity" },
    ],
    image: "/images/visuals/lead-agents.png",
    challenge:
      "Teams building AI workflows hit reliability walls—opaque failures, slow recovery, and fragile environments that blocked production trust.",
    approach:
      "We strengthened LLMOps-adjacent reliability: clearer observability, resilient service topology, and operational playbooks for AI workloads—treating the platform as governed infrastructure.",
    outcome:
      "Builders spent less time firefighting and more time shipping AI workflows with confidence. Pattern: observability + ops discipline for AI platforms.",
    highlights: [
      "AI platform reliability & observability",
      "Faster recovery for AI platforms",
      "Stable environments for model-driven products",
      "Operational playbooks for AI incidents",
    ],
  },
  {
    id: "t2d2",
    name: "T2D2",
    category: "AI Infrastructure",
    tagline: "Securing an AI damage-detection platform",
    summary:
      "Security and infrastructure hardening for an AI building-damage platform—cutting attack surface ~90% and preventing avoidable cloud loss.",
    technologies: ["GCP", "IAM / Secrets", "Terraform", "Security Automation"],
    results: [
      { value: "$10k–$20k", label: "Monthly cloud losses prevented" },
      { value: "~90%", label: "Reduction in attack surface" },
    ],
    image: "/images/visuals/lead-tech.png",
    challenge:
      "An AI damage-detection product faced exposure and cost risk from insecure cloud configuration—undermining trust in the intelligence layer.",
    approach:
      "We audited posture, hardened secrets and IAM, and automated guardrails so the AI platform could run as governed infrastructure.",
    outcome:
      "Attack surface and avoidable spend dropped—protecting both the AI product and operating margin. Pattern: security + cost controls as first-class AI platform requirements.",
    highlights: [
      "AI platform security posture",
      "Governed cloud & secrets hygiene",
      "Infrastructure guardrails for production AI",
      "Cost leakage controls alongside security",
    ],
  },
  {
    id: "hoop-dna",
    name: "Hoop DNA",
    category: "Computer Vision",
    tagline: "AR-assisted coaching intelligence",
    summary:
      "Coach-athlete platform with AR-assisted practice guidance—cutting coach prep time ~50% and lifting off-court consistency.",
    technologies: ["ARKit", "Video Processing", "React Native", "Firebase"],
    results: [
      { value: "50%", label: "Reduction in coach preparation time" },
      { value: "50–60%", label: "Improvement in off-court practice" },
    ],
    image: "/images/visuals/lead-capabilities.png",
    challenge:
      "Coaches lacked a system to assign drills, track progress, and guide practice between sessions.",
    approach:
      "We combined progress intelligence with AR-assisted practice experiences so guidance traveled with the athlete.",
    outcome:
      "Coaches prepared faster; athletes practiced more consistently with clearer, vision-assisted cues.",
    highlights: [
      "Vision / AR-assisted practice cues",
      "Coach-driven training intelligence",
      "Athlete progress visibility",
    ],
  },
  {
    id: "qdis",
    name: "QDIS",
    category: "Enterprise Systems",
    tagline: "Operations fabric ready for AI automation",
    summary:
      "Unified work-order and GPS-verified service operations across 120+ properties—eliminating most billing disputes and holding budgets.",
    technologies: [".NET Core", "React", "React Native", "Azure"],
    results: [
      { value: "85%", label: "Elimination of billing disputes" },
      { value: "Zero", label: "Budget overruns across 120+ properties" },
    ],
    image: "/images/visuals/lead-solutions.png",
    challenge:
      "Fragmented tools across work orders, vendors, and billing created leakage and low operational visibility.",
    approach:
      "We delivered a multi-role operations fabric—admin, tenant, and vendor workflows with verified service proof and transparent economics.",
    outcome:
      "Leaders gained end-to-end operational visibility; disputes collapsed and budgets held—the governed data plane AI automation extends next.",
    highlights: [
      "Enterprise operations visibility",
      "Verified field service completion",
      "Automation-ready workflow fabric for agents",
    ],
  },
  {
    id: "e-mobility",
    name: "E-mobility",
    category: "Enterprise Systems",
    tagline: "Intelligent EV charging operations journey",
    summary:
      "Connected discovery, session control, and payments for EV charging—~60% faster station discovery and higher completion.",
    technologies: ["Maps & telemetry", "Stripe", "OCPP", "Cloud services"],
    results: [
      { value: "~60%", label: "Faster charging station discovery" },
      { value: "Higher", label: "Session completion rates" },
    ],
    image: "/images/visuals/industries/industry-logistics.png",
    challenge:
      "Drivers abandoned sessions when discovery, access, and payment lived in fragmented experiences.",
    approach:
      "We unified real-time availability, session control, and payments into one operator-ready charging journey.",
    outcome:
      "Faster discovery and more completed sessions—an operations surface ready for forecasting and agent-assisted support.",
    highlights: [
      "Real-time operational telemetry",
      "Integrated session & payment flows",
      "Operator-ready control plane",
    ],
  },
  {
    id: "twelfthman",
    name: "Twelfthman",
    category: "Enterprise Systems",
    tagline: "Real-time decision surfaces at match-day scale",
    summary:
      "Live fantasy sports platform with leaderboard updates in 2–3 seconds and zero downtime during major events.",
    technologies: ["Node.js", "React", "Redis", "WebSockets"],
    results: [
      { value: "Zero", label: "Downtime during major match events" },
      { value: "2–3 sec", label: "Live leaderboard update time" },
    ],
    image: "/images/visuals/industries/industry-retail.png",
    challenge:
      "Engagement collapses when live decision surfaces lag or fail under peak load.",
    approach:
      "We engineered a resilient real-time architecture for peak traffic—the same class of discipline enterprise AI agents need under load.",
    outcome:
      "Leaderboards stayed live within seconds through major events—proving high-scale, low-latency delivery.",
    highlights: [
      "Sub-3-second live decision surfaces",
      "Peak-load resilience",
      "Engagement under concurrent demand",
    ],
  },
];

export const caseStudyCategories = [
  "All",
  ...Array.from(new Set(caseStudiesPage.map((c) => c.category))),
];

export function getCaseStudy(id: string) {
  return caseStudiesPage.find((study) => study.id === id);
}
