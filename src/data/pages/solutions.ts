export const solutionsHero = {
  eyebrow: "Solutions",
  title: "Custom AI systems—built, deployed, and owned by you.",
  description:
    "InheritX is an Enterprise AI Solutions company. Agents, multi-agent orchestration, computer vision, generative platforms, and automation—handed over with full IP and private-cloud deployment, not rented access.",
};

export const solutionPillars = [
  {
    id: "01",
    title: "Governed Intelligence Platforms",
    summary:
      "Enterprise RAG, model gateways, and policy controls inside your estate—context-aware generation with guardrails so answers stay grounded in your business.",
    points: [
      "Vector retrieval with citations and role-aware access",
      "Custom guardrails against missing-context hallucinations",
      "Full IP transfer on delivery",
    ],
    image: "/images/visuals/lead-solutions.png",
    href: "/solutions/enterprise-ai",
  },
  {
    id: "02",
    title: "Agent Workforces",
    summary:
      "Task-oriented and hierarchical multi-agent systems that plan, call tools, peer-review outputs, and escalate exceptions—with humans on consequential decisions.",
    points: [
      "Memory, planning, and tool access to your systems",
      "Specialised sub-agents with human approval gates",
      "Observability for every agent decision",
    ],
    image: "/images/visuals/lead-agents.png",
    href: "/solutions/ai-agents",
  },
  {
    id: "03",
    title: "Vision, Documents & Workflows",
    summary:
      "Computer vision, document intelligence, and automation woven into ERP, CRM, and plant systems—trained on your domain data, deployed where your data lives.",
    points: [
      "Vision transformers and CNNs for inspection and imaging",
      "Document extraction, classification, and validation",
      "Exception queues and continuous evaluation",
    ],
    image: "/images/visuals/lead-capabilities.png",
    href: "/solutions/ai-automation",
  },
];

export const engagementModels = [
  {
    title: "AI Transformation Programs",
    duration: "90 days → multi-wave",
    copy: "Executive alignment, architecture, governed pilots that industrialize, and enablement for the operating model.",
    bestFor: "CEO / Transformation Office",
    href: "/solutions/ai-transformation",
  },
  {
    title: "AI Consulting & Architecture",
    duration: "2–6 weeks",
    copy: "Board-ready blueprints: data readiness, model strategy, LLMOps posture, security, and sequenced investment.",
    bestFor: "CTO / CIO / CISO / Architecture",
    href: "/solutions/ai-consulting",
  },
  {
    title: "Hire AI Engineers",
    duration: "Dedicated embed",
    copy: "Senior AI / ML / agentic engineers embedded in your roadmap—shipping under your standards, not staff-aug theater.",
    bestFor: "Product & Engineering leaders",
    href: "/solutions/hire-ai-engineers",
  },
  {
    title: "Dedicated AI Squads",
    duration: "Pod-based delivery",
    copy: "Cross-functional pods (ML, LLMOps, platform, product) that own a capability from discovery to production.",
    bestFor: "Business unit & innovation leaders",
    href: "/solutions/dedicated-ai-squads",
  },
];

export const solutionFitMatrix = [
  {
    need: "We need private AI with compliance",
    fit: "Governed Intelligence Platforms",
  },
  {
    need: "We need work executed, not just answers",
    fit: "Agent Workforces",
  },
  {
    need: "We need AI inside existing processes",
    fit: "Workflow Automation Fabric",
  },
  {
    need: "We need specialized AI capacity on our team",
    fit: "Hire AI Engineers / Dedicated AI Squads",
  },
];

/** Non-numeric trust principles — avoids unverifiable performance claims. */
export const solutionProofPoints = [
  { value: "Owned", label: "100% code & model IP at handover" },
  { value: "Private", label: "Deployed in your VPC or on-prem" },
  { value: "Governed", label: "Audit trails & human gates" },
  { value: "Honest", label: "We’ll say when AI isn’t the fit" },
];
