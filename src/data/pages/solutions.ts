export const solutionsHero = {
  eyebrow: "Solutions",
  title: "AI systems that transform how enterprises operate.",
  description:
    "InheritX is an AI-native enterprise partner. We deliver AI/ML engineering, Agentic AI, and AI DevOps—consulting when the mandate is unclear; production systems in your private cloud when you are ready—with full IP handover.",
};

export const solutionPillars = [
  {
    id: "01",
    title: "AI/ML Engineering",
    summary:
      "Custom LLMs, RAG, fine-tuning, vector search, prediction systems, and AI analytics—engineered for measurable outcomes inside your security boundary.",
    points: [
      "Enterprise RAG, fine-tuning, and model gateways",
      "Prediction, search, and analytics systems tied to KPIs",
      "Full IP transfer on delivery",
    ],
    image: "/images/visuals/lead-solutions.png",
    href: "/solutions/enterprise-ai",
  },
  {
    id: "02",
    title: "Agentic AI",
    summary:
      "Autonomous agents, multi-agent orchestration, MCP, tool calling, memory, and human–AI collaboration—AI employees that execute work with auditability.",
    points: [
      "Single agents and hierarchical multi-agent systems",
      "MCP, tool contracts, memory, and approval gates",
      "Observability for every agent decision",
    ],
    image: "/images/visuals/lead-agents.png",
    href: "/solutions/ai-agents",
  },
  {
    id: "03",
    title: "AI DevOps",
    summary:
      "MLOps, LLMOps, CI/CD for AI, model lifecycle, monitoring, and cloud AI infrastructure—so production intelligence stays reliable after go-live.",
    points: [
      "CI/CD, evaluation harnesses, and model lifecycle",
      "Tracing, guardrails, cost controls, and incident playbooks",
      "Vision, documents, and workflow automation when ops need them",
    ],
    image: "/images/visuals/lead-capabilities.png",
    href: "/solutions/ai-transformation",
  },
];

export const engagementModels = [
  {
    title: "AI Consulting & Architecture",
    duration: "2–6 weeks · Start here when the mandate is unclear",
    copy: "Board-ready blueprints: data readiness, model strategy, agent design, LLMOps posture, security, and sequenced investment—before you commit to a build.",
    bestFor: "CTO / CIO / CISO / Head of AI",
    href: "/solutions/ai-consulting",
  },
  {
    title: "AI Transformation Programs",
    duration: "90 days → multi-wave · Production build & industrialize",
    copy: "Executive alignment, architecture, governed pilots that industrialize, private-cloud deployment, and enablement—with IP handover.",
    bestFor: "CEO / Transformation Office",
    href: "/solutions/ai-transformation",
  },
  {
    title: "Dedicated AI Squads",
    duration: "Pod-based delivery · Owned capability to production",
    copy: "Cross-functional pods (ML, agentic systems, LLMOps, platform) that own a capability from discovery to production under InheritX delivery leadership.",
    bestFor: "Business unit & innovation leaders",
    href: "/solutions/dedicated-ai-squads",
  },
  {
    title: "Hire AI Engineers",
    duration: "Dedicated embed · Only when the roadmap is already clear",
    copy: "Senior AI / ML / agentic / LLMOps engineers embedded in your roadmap—shipping under your standards. Not a substitute for strategy.",
    bestFor: "Product & Engineering leaders with a defined backlog",
    href: "/solutions/hire-ai-engineers",
  },
];

export const solutionFitMatrix = [
  {
    need: "We need custom models, RAG, or prediction systems",
    fit: "AI/ML Engineering",
  },
  {
    need: "We need agents that execute work, not just answer",
    fit: "Agentic AI",
  },
  {
    need: "We need production reliability, MLOps, and LLMOps",
    fit: "AI DevOps",
  },
  {
    need: "We need specialized AI capacity on our team",
    fit: "Hire AI Engineers / Dedicated AI Squads",
  },
];

/** Trust signals for enterprise buyers — ownership + outcome classes. */
export const solutionProofPoints = [
  { value: "Owned", label: "100% code & model IP at handover" },
  { value: "Private", label: "Deployed in your VPC or on-prem" },
  { value: "40%", label: "Faster documentation cycles (pattern)" },
  { value: "10×", label: "Faster agentic triage (pattern)" },
];
