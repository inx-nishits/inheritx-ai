export const solutionsHero = {
  eyebrow: "Solutions",
  title: "AI systems that transform how enterprises operate.",
  description:
    "InheritX delivers production AI/ML, agents, and AI DevOps, consulting when the mandate is unclear; build in your estate when you are ready. Full IP handover at delivery.",
};

export const solutionPillars = [
  {
    id: "01",
    title: "AI/ML Engineering",
    summary:
      "Custom LLMs, RAG, fine-tuning, vector search, prediction systems, and AI analytics, engineered for measurable outcomes inside your security boundary.",
    points: [
      "Enterprise RAG, fine-tuning, and model gateways",
      "Prediction, search, and analytics systems tied to KPIs",
      "Full IP transfer on delivery",
    ],
    image: "/images/actual/actual-aiml-engineering.jpg",
    href: "/solutions/enterprise-ai",
  },
  {
    id: "02",
    title: "AI Agents",
    summary:
      "Autonomous agents, multi-agent orchestration, MCP, tool calling, memory, and human–AI collaboration, agents that execute work with auditability.",
    points: [
      "Single agents and hierarchical multi-agent systems",
      "MCP, tool contracts, memory, and approval gates",
      "Observability for every agent decision",
    ],
    image: "/images/actual/actual-agentic-ai.jpg",
    href: "/solutions/ai-agents",
  },
  {
    id: "03",
    title: "AI DevOps",
    summary:
      "MLOps, LLMOps, CloudOps, GitOps, CI/CD for AI, model lifecycle, monitoring, and cloud AI infrastructure, so production intelligence stays reliable after go-live.",
    points: [
      "CI/CD, GitOps promotion gates, and model lifecycle",
      "CloudOps, tracing, guardrails, cost controls, and incident playbooks",
      "Vision, documents, and n8n workflow automation when ops need them",
    ],
    image: "/images/actual/actual-ai-devops.jpg",
    href: "/solutions/ai-transformation",
  },
];

export const engagementModels = [
  {
    title: "AI Consulting & Architecture",
    duration: "2–6 weeks · Start here when the mandate is unclear",
    copy: "Board-ready blueprints: data readiness, model strategy, agent design, LLMOps posture, security, and sequenced investment, before you commit to a build.",
    bestFor: "CTO / CIO / CISO / Head of AI",
    href: "/solutions/ai-consulting",
  },
  {
    title: "AI Transformation Programs",
    duration: "90 days → multi-wave · Production build & industrialize",
    copy: "Executive alignment, architecture, governed pilots that industrialize, and enablement, with IP handover.",
    bestFor: "CEO / Transformation Office",
    href: "/solutions/ai-transformation",
  },
  {
    title: "Dedicated AI Squads",
    duration: "Pod-based delivery · Owned capability through to production",
    copy: "Cross-functional pods (ML, agentic systems, LLMOps, platform) that own a capability from discovery to production under InheritX delivery leadership.",
    bestFor: "Business unit & innovation leaders",
    href: "/solutions/dedicated-ai-squads",
  },
  {
    title: "Embedded AI Engineering",
    duration: "Dedicated embed · Only when the roadmap is already clear",
    copy: "Senior AI / ML / agentic / LLMOps engineers embedded in your roadmap, shipping under your standards. Not a substitute for strategy.",
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
    fit: "AI Agents",
  },
  {
    need: "We need production reliability, MLOps, and LLMOps",
    fit: "AI DevOps",
  },
  {
    need: "We need senior AI engineers on a defined platform roadmap",
    fit: "Embedded AI Engineering / Dedicated AI Squads",
  },
];

/** Trust signals for enterprise buyers — ownership + outcome classes. */
export const solutionProofPoints = [
  { value: "Owned", label: "100% code & model IP at handover" },
  { value: "Private", label: "Deployed in your VPC or on-prem" },
  { value: "HITL", label: "Human gates on high-risk actions" },
  { value: "Eval", label: "Production gates, not demo theater" },
];
