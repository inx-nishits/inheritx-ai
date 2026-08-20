export type CaseStudyLink = {
  label: string;
  href: string;
};

export type CaseStudyResultKind = "reported" | "control" | "qualitative";

export type CaseStudyResult = {
  value: string;
  label: string;
  kind?: CaseStudyResultKind;
};

export const CASE_STUDY_METRICS_NOTE =
  "Numeric figures are engagement-reported from published project work. Baselines and measurement windows are shared with qualified buyers under NDA.";

export type CaseStudy = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  /** Executive summary - leads the story. */
  summary: string;
  technologies: string[];
  results: CaseStudyResult[];
  image: string;
  challenge: string;
  approach: string;
  outcome: string;
  highlights: string[];
  /** Why AI (or AI-ready systems) was the right approach - omit if not applicable. */
  whyAi?: string;
  /** Solution architecture points grounded in published delivery. */
  architecture?: string[];
  /** AI capabilities actually delivered (or explicitly AI-ready foundations). */
  aiCapabilities?: string[];
  /** Delivery / engagement approach narrative. */
  deliveryApproach?: string;
  /** Business outcome narrative bullets (in addition to result stats). */
  businessOutcomes?: string[];
  /** Lessons grounded in the published pattern - no invented claims. */
  lessonsLearned?: string[];
  relatedSolutions?: CaseStudyLink[];
  relatedIndustries?: CaseStudyLink[];
  relatedResources?: CaseStudyLink[];
  /** Optional deep-dive for platform cases published elsewhere. */
  relatedProjectHref?: string;
  relatedProjectLabel?: string;
};

export const caseStudyIntro = {
  eyebrow: "Case Studies",
  title: "Measured AI outcomes from production, not pilot theater.",
  copy: "AI-led engagements first, agentic systems, computer vision, generative intelligence, AI platforms, and AI infrastructure, followed by enterprise systems that prove scale and ops discipline. We publish methodology with the story. Numeric outcomes are engagement-reported until a measurement memo is on file. Named or anonymized references for qualified opportunities are available under NDA.",
};

/** Homepage featured carousel - AI-forward IDs only. */
export const featuredCaseStudyIds = [
  "agent-bank",
  "ai-dent",
  "heva",
  "kavia-ai",
  "t2d2",
] as const;

/**
 * Order is intentional: AI-forward stories first, then enterprise systems
 * that demonstrate scale/ops without over-claiming an AI angle.
 * Content is limited to published project information in this repository.
 */
export const caseStudiesPage: CaseStudy[] = [
  {
    id: "agent-bank",
    name: "Agent Bank",
    category: "AI Agents",
    tagline: "A governed multi-agent workforce for banking operations",
    summary:
      "Agent Bank is an enterprise multi-agent platform that executes high-volume banking workflows, with policy controls, audit trails, and human approval gates for anything that moves money or risk.",
    technologies: [
      "Multi-agent orchestration",
      "MCP-ready tool registry",
      "Vector retrieval",
      "Evaluation harness",
      "Private cloud (AWS / Azure)",
      "Observability",
    ],
    results: [
      { value: "6×", label: "Faster exception review cycles", kind: "reported" },
      { value: "24/7", label: "Logged coverage on routine ops", kind: "control" },
      { value: "Ledger", label: "Tool actions attributable in audit logs", kind: "control" },
      { value: "HITL", label: "Human gates on high-risk tools", kind: "control" },
    ],
    image: "/images/actual/actual-agentbank.jpg",
    challenge:
      "Banking teams drown in repetitive operational work, KYC follow-ups, case triage, document checks, and queue routing, while regulators still demand explainability. Single LLM chatbots cannot own multi-step work across core systems without creating control gaps: fragmented case queues, high false-positive load on fraud and compliance reviews, and no reliable way to prove what an AI system did, or why.",
    whyAi:
      "Rule engines alone stall on unstructured evidence and exception-heavy work. Unbounded chatbots create control and audit gaps. AI Agents with tool contracts, policy checks, and human gates is the right fit when the operating problem is multi-step workflow, not a single Q&A.",
    approach:
      "We built a multi-agent operating layer where specialized agents collaborate: intake, evidence gathering, policy checking, drafting, and escalation. Every tool call is permissioned. Every decision is traced. Humans remain accountable for irreversible actions.",
    architecture: [
      "Private model endpoints inside the client VPC",
      "Tool registry with scoped credentials (MCP-ready)",
      "Vector retrieval over approved knowledge only",
      "Evaluation harness for regression on banking scenarios",
      "Full action ledger for audit and QA sampling",
      "Supervisor layer for peer-check, confidence scoring, and escalation",
    ],
    aiCapabilities: [
      "Intake & classification agents",
      "Evidence & document agents with citations",
      "Policy & compliance agents",
      "Supervisor & escalation layer",
      "Human-in-the-loop gates on high-risk tools",
      "Attributable action logging",
    ],
    deliveryApproach:
      "Cases enter from channels and systems; intake agents classify urgency and required evidence. Specialists assemble the file from approved tools, never unbounded browsing, attach citations, run policy checks, and recommend next actions. High-risk moves require analyst approval; low-risk routines complete under logged autonomy.",
    outcome:
      "Routine assembly and first-pass checks move to agents so experts focus on exceptions that matter. Auditability becomes default, every recommendation is reconstructable. The result is a reusable agent fabric for new product lines, not a one-off chatbot.",
    businessOutcomes: [
      "Analysts reclaim judgment time as routine assembly shifts to agents",
      "Auditability becomes default, inputs, tools, policy checks, and approvals are reconstructable",
      "A platform pattern: new product lines reuse the same agent fabric with new tools and policies",
    ],
    highlights: [
      "Multi-agent collaboration under a shared control plane",
      "MCP-ready tool contracts with scoped credentials",
      "Policy-aware recommendations before analyst handoff",
      "Evaluation harness and full action ledger for production trust",
    ],
    lessonsLearned: [
      "Banking AI fails when autonomy is unbounded, permissioned tools and HITL gates are product requirements, not afterthoughts.",
      "Audit trails must capture tool I/O and policy checks, not just final answers.",
      "Platform reuse beats one-off bots: shared orchestration, evals, and escalation patterns compound across product lines.",
    ],
    relatedSolutions: [
      { label: "AI Agents", href: "/solutions/ai-agents" },
      { label: "Enterprise AI", href: "/solutions/enterprise-ai" },
      { label: "AI Transformation", href: "/solutions/ai-transformation" },
    ],
    relatedIndustries: [
      { label: "Finance", href: "/industries/finance" },
      { label: "Insurance", href: "/industries/insurance" },
    ],
    relatedResources: [
      { label: "Security FAQ", href: "/resources/security-faq" },
      { label: "Engagement Models", href: "/resources/engagement-models" },
      { label: "Book an AI strategy call", href: "/contact?intent=strategy" },
    ],
    relatedProjectHref: "/portfolio/agent-bank",
    relatedProjectLabel: "View Agent Bank",
  },
  {
    id: "ai-dent",
    name: "AI Dent",
    category: "Computer Vision",
    tagline: "Vision-guided dental assessment at home",
    summary:
      "Computer Vision quality gates for at-home dental scans, reducing unnecessary clinic visits by 30-35% while keeping clinicians in the loop.",
    technologies: [
      "Computer Vision",
      "Quality gating models",
      "Secure cloud pipeline",
      "Clinician review workflow",
    ],
    results: [
      { value: "60%", label: "Reduced entry barriers", kind: "reported" },
      { value: "30-35%", label: "Reduction in clinic visits", kind: "reported" },
    ],
    image: "/images/case-studies/ai-dent-app.png",
    challenge:
      "Patients delayed care due to access friction, while clinics lacked a reliable way to capture diagnostic-quality imagery outside the chair, without replacing clinician judgment or weakening data controls.",
    whyAi:
      "Manual intake cannot scale quality checks across at-home capture. Computer Vision is the right tool when the business problem is consistent scan quality and triage efficiency, while clinical interpretation remains human-owned.",
    approach:
      "We built a sensor-guided capture flow with vision models that gate scan quality, secure cloud processing, and clinician review workflows. High-risk interpretation stayed human-owned; AI focused on quality gates and intake efficiency.",
    architecture: [
      "Sensor-guided capture flow for diagnostic-quality imagery",
      "Vision models that gate scan quality before clinical review",
      "Secure cloud processing pipeline for regulated care data",
      "Clinician review workflows with clear human decision ownership",
    ],
    aiCapabilities: [
      "Computer Vision quality gating",
      "AI-assisted intake (not autonomous diagnosis)",
      "Human-in-the-loop clinical review",
      "Separation of AI assist vs. clinician decision authority",
    ],
    deliveryApproach:
      "Delivery prioritized regulated-care constraints: quality gates first, secure processing, and clinician workflows before any expansion of AI responsibility. High-risk interpretation was never delegated to models.",
    outcome:
      "At-home scans became a trusted intake path, cutting avoidable visits without replacing clinical judgment. Pattern: vision + human review for regulated care workflows.",
    businessOutcomes: [
      "Reduced entry barriers for patients seeking assessment",
      "30-35% fewer unnecessary clinic visits from improved intake quality",
      "Clinicians retained decision authority with AI focused on quality and efficiency",
    ],
    highlights: [
      "Vision models for scan quality gating",
      "Clinician-reviewed AI-assisted intake (HITL)",
      "Secure cloud pipeline for regulated care data",
      "Clear separation: AI assists intake; clinicians decide",
    ],
    lessonsLearned: [
      "In regulated care, AI earns trust when its job is quality and intake, not replacing clinical judgment.",
      "Human-in-the-loop is a design constraint, not a disclaimer.",
      "Secure cloud pipelines and data controls must ship with the model, not after a successful pilot.",
    ],
    relatedSolutions: [
      { label: "Computer Vision", href: "/solutions/computer-vision" },
      { label: "Enterprise AI", href: "/solutions/enterprise-ai" },
      { label: "AI Consulting", href: "/solutions/ai-consulting" },
    ],
    relatedIndustries: [
      { label: "Healthcare", href: "/industries/healthcare" },
    ],
    relatedResources: [
      { label: "Security FAQ", href: "/resources/security-faq" },
      { label: "IP Ownership", href: "/company/ip-ownership" },
      { label: "Book an AI strategy call", href: "/contact?intent=strategy" },
    ],
  },
  {
    id: "heva",
    name: "Heva",
    category: "Generative AI",
    tagline: "AI-native healthcare & wellness intelligence",
    summary:
      "NLP and personalization models that unify patient interaction and care discovery, cutting discovery effort by ~50%.",
    technologies: ["Generative AI", "NLP", "Personalization models", "Python"],
    results: [
      { value: "~50%", label: "Reduction in care discovery effort", kind: "reported" },
      { value: "Improved", label: "Personalized care pathways", kind: "qualitative" },
    ],
    image: "/images/case-studies/heva.png",
    challenge:
      "Patients struggled to navigate care options while providers lacked a unified intelligence layer for personalized guidance within approved content boundaries.",
    whyAi:
      "Static directories and generic search cannot personalize pathways inside approved content boundaries. Generative NLP with operator-visible pathways is appropriate when the goal is guided discovery, not autonomous clinical advice.",
    approach:
      "We designed an AI-native interaction layer, NLP-driven guidance, personalization models, and operator-visible pathways with human oversight for clinical escalation.",
    architecture: [
      "NLP-driven patient interaction layer",
      "Personalization models for care discovery",
      "Operator-visible pathways (not a black box)",
      "Human oversight for clinical escalation",
    ],
    aiCapabilities: [
      "Generative / NLP patient interaction",
      "Personalized care pathway guidance",
      "Operator-visible recommendation pathways",
      "Human escalation for clinical risk",
    ],
    deliveryApproach:
      "We bounded generation to approved content and kept operators able to see pathway logic. Clinical escalation stayed human-owned so generative assistance could not outrun accountability.",
    outcome:
      "Care discovery effort dropped sharply; patients received more relevant pathways without losing clinical accountability. Pattern: governed generative guidance with operator visibility.",
    businessOutcomes: [
      "~50% reduction in care discovery effort",
      "More relevant personalized pathways for patients",
      "Clinical accountability preserved through human escalation",
    ],
    highlights: [
      "Generative / NLP patient interaction",
      "Personalization for care discovery",
      "Human oversight for clinical escalation",
      "Operator-visible pathways (not a black box)",
    ],
    lessonsLearned: [
      "Generative healthcare UX fails without content boundaries and operator visibility.",
      "Personalization must stay inside approved guidance, fluency alone is not a product.",
      "Escalation paths are part of the architecture, not a support afterthought.",
    ],
    relatedSolutions: [
      { label: "Generative AI", href: "/solutions/generative-ai" },
      { label: "Enterprise AI", href: "/solutions/enterprise-ai" },
      { label: "AI Automation", href: "/solutions/ai-automation" },
    ],
    relatedIndustries: [
      { label: "Healthcare", href: "/industries/healthcare" },
    ],
    relatedResources: [
      { label: "Security FAQ", href: "/resources/security-faq" },
      { label: "Diligence Pack", href: "/resources/diligence-pack" },
      { label: "Book an AI strategy call", href: "/contact?intent=strategy" },
    ],
  },
  {
    id: "kavia-ai",
    name: "Kavia AI",
    category: "AI Platforms",
    tagline: "Reliable infrastructure for AI workflow builders",
    summary:
      "Hardened an AI development platform so teams could ship AI-driven workflows with 40-50% faster incident recovery.",
    technologies: [
      "AI platform reliability",
      "Kubernetes",
      "AWS",
      "Observability",
      "LLMOps-adjacent operations",
      "Python / Node.js services",
    ],
    results: [
      { value: "40-50%", label: "Reduction in MTTR", kind: "reported" },
      { value: "Improved", label: "AI builder productivity", kind: "qualitative" },
    ],
    image: "/images/case-studies/kavia-ai.png",
    challenge:
      "Teams building AI workflows hit reliability walls, opaque failures, slow recovery, and fragile environments that blocked production trust.",
    whyAi:
      "AI products stall when the platform beneath them cannot be observed or recovered. LLMOps-adjacent reliability, tracing, resilient topology, and incident playbooks, is required before agentic or generative workloads earn production trust.",
    approach:
      "We strengthened LLMOps-adjacent reliability: clearer observability, resilient service topology, and operational playbooks for AI workloads, treating the platform as governed infrastructure.",
    architecture: [
      "Resilient service topology for AI workflow workloads",
      "Observability for opaque failure modes",
      "Operational playbooks for AI incidents",
      "Stable environments for model-driven products",
    ],
    aiCapabilities: [
      "AI platform reliability & observability",
      "Faster recovery for AI platforms (MTTR reduction)",
      "Stable environments for model-driven products",
      "Operational playbooks for AI incidents",
    ],
    deliveryApproach:
      "We treated the AI builder platform as governed infrastructure: instrument failures, harden topology, and codify recovery so builders ship workflows instead of firefighting environments.",
    outcome:
      "Builders spent less time firefighting and more time shipping AI workflows with confidence. Pattern: observability + ops discipline for AI platforms.",
    businessOutcomes: [
      "40-50% faster incident recovery (MTTR)",
      "Higher AI builder productivity from stable environments",
      "Production trust restored for model-driven workflow products",
    ],
    highlights: [
      "AI platform reliability & observability",
      "Faster recovery for AI platforms",
      "Stable environments for model-driven products",
      "Operational playbooks for AI incidents",
    ],
    lessonsLearned: [
      "AI platforms need the same ops discipline as core enterprise systems, demos do not survive opaque failures.",
      "MTTR and observability are buyer-facing outcomes for AI products, not only SRE metrics.",
      "Playbooks and topology hardening compound: every recovered incident improves the next release.",
    ],
    relatedSolutions: [
      { label: "AI Transformation / AI DevOps", href: "/solutions/ai-transformation" },
      { label: "Enterprise AI", href: "/solutions/enterprise-ai" },
      { label: "Embedded AI Engineering", href: "/solutions/hire-ai-engineers" },
    ],
    relatedIndustries: [
      { label: "Finance", href: "/industries/finance" },
      { label: "Enterprise", href: "/industries" },
    ],
    relatedResources: [
      { label: "Engagement Models", href: "/resources/engagement-models" },
      { label: "Security FAQ", href: "/resources/security-faq" },
      { label: "Book an AI strategy call", href: "/contact?intent=strategy" },
    ],
  },
  {
    id: "t2d2",
    name: "T2D2",
    category: "AI Infrastructure",
    tagline: "Securing an AI damage-detection platform",
    summary:
      "Security and infrastructure hardening for an AI building-damage platform, cutting attack surface ~90% and preventing avoidable cloud loss.",
    technologies: [
      "GCP",
      "IAM / Secrets",
      "Terraform",
      "Security Automation",
      "AI platform guardrails",
    ],
    results: [
      { value: "$10k-$20k", label: "Monthly cloud losses prevented", kind: "reported" },
      { value: "~90%", label: "Reduction in attack surface", kind: "reported" },
    ],
    image: "/images/case-studies/t2d2.png",
    challenge:
      "An AI damage-detection product faced exposure and cost risk from insecure cloud configuration, undermining trust in the intelligence layer.",
    whyAi:
      "AI products inherit the risk of their cloud estate. Without IAM hygiene, secrets discipline, and automated guardrails, model capability cannot be trusted in production, security is part of AI infrastructure, not a separate IT track.",
    approach:
      "We audited posture, hardened secrets and IAM, and automated guardrails so the AI platform could run as governed infrastructure.",
    architecture: [
      "Posture audit of the AI damage-detection cloud estate",
      "Hardened secrets and IAM for production AI workloads",
      "Automated infrastructure guardrails",
      "Cost leakage controls alongside security controls",
    ],
    aiCapabilities: [
      "AI platform security posture",
      "Governed cloud & secrets hygiene for AI workloads",
      "Infrastructure guardrails for production AI",
      "Cost controls as first-class AI platform requirements",
    ],
    deliveryApproach:
      "Security and cost were treated as joint product requirements: audit, harden, automate guardrails, and prove the AI platform could operate under governed cloud controls.",
    outcome:
      "Attack surface and avoidable spend dropped, protecting both the AI product and operating margin. Pattern: security + cost controls as first-class AI platform requirements.",
    businessOutcomes: [
      "~90% reduction in attack surface",
      "$10k-$20k monthly cloud losses prevented",
      "Restored trust that the intelligence layer runs on governed infrastructure",
    ],
    highlights: [
      "AI platform security posture",
      "Governed cloud & secrets hygiene",
      "Infrastructure guardrails for production AI",
      "Cost leakage controls alongside security",
    ],
    lessonsLearned: [
      "AI buyers evaluate security of the estate as much as model quality.",
      "Automated guardrails beat one-time hardening, configuration drift returns.",
      "Cost leakage and security exposure often share root causes in cloud AI estates.",
    ],
    relatedSolutions: [
      { label: "AI Transformation / AI DevOps", href: "/solutions/ai-transformation" },
      { label: "Enterprise AI", href: "/solutions/enterprise-ai" },
      { label: "AI Consulting", href: "/solutions/ai-consulting" },
    ],
    relatedIndustries: [
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Insurance", href: "/industries/insurance" },
    ],
    relatedResources: [
      { label: "Security FAQ", href: "/resources/security-faq" },
      { label: "Security & Compliance", href: "/company/security" },
      { label: "Book an AI strategy call", href: "/contact?intent=strategy" },
    ],
  },
  {
    id: "hoop-dna",
    name: "Hoop DNA",
    category: "Computer Vision",
    tagline: "AR-assisted coaching intelligence",
    summary:
      "Coach-athlete platform with AR-assisted practice guidance, cutting coach prep time ~50% and lifting off-court consistency.",
    technologies: [
      "Computer Vision",
      "AR coaching intelligence",
      "Video processing",
      "Progress analytics",
    ],
    results: [
      { value: "50%", label: "Reduction in coach preparation time", kind: "reported" },
      { value: "50-60%", label: "Improvement in off-court practice", kind: "reported" },
    ],
    image: "/images/case-studies/hoopDNA.png",
    challenge:
      "Coaches lacked a system to assign drills, track progress, and guide practice between sessions.",
    whyAi:
      "Static drill libraries do not adapt to athlete progress between sessions. Computer Vision and AR-assisted cues make practice guidance portable, so coaching intelligence travels with the athlete.",
    approach:
      "We applied computer vision and AR-assisted practice cues with progress intelligence so coaching guidance traveled with the athlete between sessions.",
    architecture: [
      "Computer Vision / AR-assisted practice cues",
      "Progress intelligence for drill assignment and tracking",
      "Coach-driven training workflows",
      "Athlete-facing guidance between sessions",
    ],
    aiCapabilities: [
      "Vision / AR-assisted practice cues",
      "Coach-driven training intelligence",
      "Athlete progress visibility",
      "Measurable prep-time reduction for coaches",
    ],
    deliveryApproach:
      "We centered coaches as owners of the training plan while using CV/AR to extend guidance off-court, progress visibility and cues, not autonomous coaching replacement.",
    outcome:
      "Coaches prepared faster; athletes practiced more consistently with clearer, vision-assisted cues. Pattern: CV/AR coaching intelligence with measurable prep-time reduction.",
    businessOutcomes: [
      "~50% reduction in coach preparation time",
      "50-60% improvement in off-court practice consistency",
      "Clearer vision-assisted cues between sessions",
    ],
    highlights: [
      "Vision / AR-assisted practice cues",
      "Coach-driven training intelligence",
      "Athlete progress visibility",
    ],
    lessonsLearned: [
      "CV/AR coaching works when coaches remain in control of the plan.",
      "Progress analytics turn practice cues into measurable operating improvement.",
      "Off-court consistency is a business outcome, not only an engagement metric.",
    ],
    relatedSolutions: [
      { label: "Computer Vision", href: "/solutions/computer-vision" },
      { label: "Enterprise AI", href: "/solutions/enterprise-ai" },
    ],
    relatedIndustries: [
      { label: "Retail / consumer", href: "/industries/retail" },
    ],
    relatedResources: [
      { label: "AI Portfolio", href: "/portfolio" },
      { label: "Book an AI strategy call", href: "/contact?intent=strategy" },
    ],
  },
  {
    id: "qdis",
    name: "QDIS",
    category: "Enterprise Systems",
    tagline: "Operations fabric ready for AI automation",
    summary:
      "Unified work-order and GPS-verified service operations across 120+ properties, eliminating most billing disputes and holding budgets.",
    technologies: [".NET Core", "React", "React Native", "Azure"],
    results: [
      { value: "85%", label: "Elimination of billing disputes", kind: "reported" },
      { value: "Zero", label: "Budget overruns across 120+ properties", kind: "reported" },
    ],
    image: "/images/case-studies/qdis.png",
    challenge:
      "Fragmented tools across work orders, vendors, and billing created leakage and low operational visibility.",
    whyAi:
      "This engagement delivered a governed operations fabric, not an AI model. Clean, verified operational data and multi-role workflows are the prerequisite for trustworthy AI automation and agents; without them, automation amplifies chaos.",
    approach:
      "We delivered a multi-role operations fabric, admin, tenant, and vendor workflows with verified service proof and transparent economics.",
    architecture: [
      "Multi-role operations fabric (admin, tenant, vendor)",
      "GPS-verified service completion",
      "Unified work-order and billing visibility",
      "Automation-ready workflow data plane",
    ],
    aiCapabilities: [
      "Automation-ready workflow fabric for future agents",
      "Governed operational data plane for AI extension",
      "Verified field events suitable for exception automation",
    ],
    deliveryApproach:
      "We unified roles, verification, and economics first, so leaders gained visibility and the estate became a credible foundation for later AI automation.",
    outcome:
      "Leaders gained end-to-end operational visibility; disputes collapsed and budgets held, the governed data plane AI automation extends next.",
    businessOutcomes: [
      "85% elimination of billing disputes",
      "Zero budget overruns across 120+ properties",
      "End-to-end operational visibility for leaders",
    ],
    highlights: [
      "Enterprise operations visibility",
      "Verified field service completion",
      "Automation-ready workflow fabric for agents",
    ],
    lessonsLearned: [
      "AI automation requires a governed data plane; fragmented ops tools cannot be papered over with models.",
      "Verified completion events are the raw material for trustworthy agents.",
      "Enterprise systems discipline and AI roadmap should be sequenced, not confused.",
    ],
    relatedSolutions: [
      { label: "AI Automation", href: "/solutions/ai-automation" },
      { label: "AI Agents", href: "/solutions/ai-agents" },
      { label: "AI Transformation", href: "/solutions/ai-transformation" },
    ],
    relatedIndustries: [
      { label: "Enterprise operations", href: "/industries" },
    ],
    relatedResources: [
      { label: "Engagement Models", href: "/resources/engagement-models" },
      { label: "Book an AI strategy call", href: "/contact?intent=strategy" },
    ],
  },
  {
    id: "e-mobility",
    name: "E-mobility",
    category: "Enterprise Systems",
    tagline: "Intelligent EV charging operations journey",
    summary:
      "Connected discovery, session control, and payments for EV charging, ~60% faster station discovery and higher completion.",
    technologies: ["Maps & telemetry", "Stripe", "OCPP", "Cloud services"],
    results: [
      { value: "~60%", label: "Faster charging station discovery", kind: "reported" },
      { value: "Higher", label: "Session completion rates", kind: "qualitative" },
    ],
    image: "/images/case-studies/emobility-app-m.png",
    challenge:
      "Drivers abandoned sessions when discovery, access, and payment lived in fragmented experiences.",
    whyAi:
      "This delivery unified real-time operations, discovery, session control, and payments. That control plane is the substrate for forecasting and agent-assisted support; we do not claim generative or agentic AI was the core of this engagement.",
    approach:
      "We unified real-time availability, session control, and payments into one operator-ready charging journey.",
    architecture: [
      "Real-time operational telemetry",
      "Integrated session and payment flows",
      "Operator-ready charging control plane",
      "Surface ready for forecasting and agent-assisted support",
    ],
    aiCapabilities: [
      "Operations surface ready for forecasting",
      "Foundation for agent-assisted support on charging exceptions",
    ],
    deliveryApproach:
      "We closed journey fragmentation first, availability, access, and payment, so completion rates rose and operators gained a coherent control plane.",
    outcome:
      "Faster discovery and more completed sessions, an operations surface ready for forecasting and agent-assisted support.",
    businessOutcomes: [
      "~60% faster charging station discovery",
      "Higher session completion rates",
      "Operator-ready control plane for network operations",
    ],
    highlights: [
      "Real-time operational telemetry",
      "Integrated session & payment flows",
      "Operator-ready control plane",
    ],
    lessonsLearned: [
      "Fragmented journeys kill completion; intelligence layers need a unified control plane.",
      "Telemetry and session integrity precede predictive or agentic overlays.",
    ],
    relatedSolutions: [
      { label: "AI Automation", href: "/solutions/ai-automation" },
      { label: "AI Transformation", href: "/solutions/ai-transformation" },
    ],
    relatedIndustries: [
      { label: "Logistics", href: "/industries/logistics" },
    ],
    relatedResources: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Book an AI strategy call", href: "/contact?intent=strategy" },
    ],
  },
  {
    id: "twelfthman",
    name: "Twelfthman",
    category: "Enterprise Systems",
    tagline: "Real-time decision surfaces at match-day scale",
    summary:
      "Live fantasy sports platform with leaderboard updates in 2-3 seconds and zero downtime during major events.",
    technologies: ["Node.js", "React", "Redis", "WebSockets"],
    results: [
      { value: "Zero", label: "Downtime during major match events", kind: "reported" },
      { value: "2-3 sec", label: "Live leaderboard update time", kind: "reported" },
    ],
    image: "/images/case-studies/twelfthman.png",
    challenge:
      "Engagement collapses when live decision surfaces lag or fail under peak load.",
    whyAi:
      "This engagement proved high-scale, low-latency delivery, the same ops class enterprise AI agents need under load. It is not an LLM or vision delivery; it demonstrates the real-time discipline production AI systems inherit.",
    approach:
      "We engineered a resilient real-time architecture for peak traffic, the same class of discipline enterprise AI agents need under load.",
    architecture: [
      "Real-time leaderboard and decision surfaces",
      "Peak-load resilient service architecture",
      "Sub-3-second update path under concurrent demand",
    ],
    aiCapabilities: [
      "Peak-load resilience pattern applicable to agent decision surfaces",
      "Low-latency operational discipline for production AI systems",
    ],
    deliveryApproach:
      "Peak-event resilience was the acceptance bar: zero downtime and sub-3-second updates through major match traffic.",
    outcome:
      "Leaderboards stayed live within seconds through major events, proving high-scale, low-latency delivery.",
    businessOutcomes: [
      "Zero downtime during major match events",
      "2-3 second live leaderboard updates",
      "Engagement sustained under concurrent demand",
    ],
    highlights: [
      "Sub-3-second live decision surfaces",
      "Peak-load resilience",
      "Engagement under concurrent demand",
    ],
    lessonsLearned: [
      "Production AI inherits the same peak-load discipline as live decision surfaces.",
      "Latency and availability are buyer trust signals, whether the surface is a leaderboard or an agent console.",
    ],
    relatedSolutions: [
      { label: "AI Transformation / AI DevOps", href: "/solutions/ai-transformation" },
      { label: "AI Agents", href: "/solutions/ai-agents" },
    ],
    relatedIndustries: [
      { label: "Retail", href: "/industries/retail" },
    ],
    relatedResources: [
      { label: "AI Portfolio", href: "/portfolio" },
      { label: "Book an AI strategy call", href: "/contact?intent=strategy" },
    ],
  },
];

export const caseStudyCategories = [
  "All",
  ...Array.from(new Set(caseStudiesPage.map((c) => c.category))),
];

export function resultQualifier(kind?: CaseStudyResultKind) {
  if (kind === "control") return "Design control";
  if (kind === "qualitative") return "Qualitative outcome";
  return "Engagement-reported";
}

export function getCaseStudy(id: string) {
  return caseStudiesPage.find((study) => study.id === id);
}

/** AI-forward case studies (excludes pure enterprise-systems foundation stories). */
export function getAiCaseStudies() {
  return caseStudiesPage.filter(
    (study) => study.category !== "Enterprise Systems",
  );
}
