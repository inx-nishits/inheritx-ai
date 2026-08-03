export const trustSectors = [
  "Healthcare",
  "Finance",
  "Manufacturing",
  "Retail",
  "Insurance",
  "Logistics",
  "Government",
  "Energy",
];

export const capabilities = [
  {
    id: "01",
    title: "Enterprise AI Platforms",
    copy: "Private, governed intelligence layers—RAG, model gateways, and controls—deployed in your cloud with full ownership at handover.",
  },
  {
    id: "02",
    title: "Custom AI Agents",
    copy: "Task-oriented agents with memory, planning, and access to your systems. They reason through situations—they don’t follow brittle rule trees.",
  },
  {
    id: "03",
    title: "Multi-Agent Orchestration",
    copy: "Hierarchical agent networks that assign work, peer-review outputs, escalate exceptions, and keep humans on high-risk decisions.",
  },
  {
    id: "04",
    title: "Computer Vision Systems",
    copy: "Domain-trained perception for QA, medical imaging, inventory, and plant operations—including edge deployments when data cannot leave the site.",
  },
  {
    id: "05",
    title: "Document & Workflow Intelligence",
    copy: "OCR, classification, validation, and intelligent automation across contracts, invoices, claims, and ERP-connected operations.",
  },
];

export const journey = [
  {
    step: "01",
    title: "Discover",
    copy: "Feasibility, data readiness, and an ROI blueprint tied to the operating model—not a slide deck of buzzwords.",
  },
  {
    step: "02",
    title: "Strategise",
    copy: "Technical architecture, model selection, security framework, and the governance path that survives CISO review.",
  },
  {
    step: "03",
    title: "Build & Deploy",
    copy: "Working systems in your private cloud with LLMOps, compliance verification, and IP transfer—not a rental sandbox.",
  },
  {
    step: "04",
    title: "Scale",
    copy: "Fine-tuning loops, cost optimisation, enablement, and expansion across business units with continuous evaluation.",
  },
];

export const solutions = [
  {
    index: "01",
    title: "Custom AI Agents",
    copy: "Task-oriented agents with memory, planning, and access to your systems.",
  },
  {
    index: "02",
    title: "Multi-Agent Orchestration",
    copy: "Hierarchical agent networks that assign work, peer-review, and escalate.",
  },
  {
    index: "03",
    title: "Computer Vision",
    copy: "Domain-trained perception for QA, imaging, inventory, and plant ops.",
  },
  {
    index: "04",
    title: "Enterprise RAG Platforms",
    copy: "Context-aware generation with vector search and custom guardrails.",
  },
  {
    index: "05",
    title: "Document Intelligence",
    copy: "Extraction, classification, and validation across contracts and claims.",
  },
  {
    index: "06",
    title: "Private AI Platforms",
    copy: "Owned intelligence infrastructure in your VPC—models, controls, IP.",
  },
  {
    index: "07",
    title: "AI Transformation",
    copy: "From discovery to production capability—with ownership at handover.",
  },
];

export const industries = [
  {
    name: "Healthcare",
    focus: "Clinical operations, documentation, and compliance-grade intelligence.",
    image: "/images/visuals/industries/industry-healthcare.png",
  },
  {
    name: "Finance",
    focus: "Risk, fraud, underwriting, and decisioning at institutional scale.",
    image: "/images/visuals/industries/industry-finance.png",
  },
  {
    name: "Retail",
    focus: "Merchandising, demand sensing, and customer intelligence.",
    image: "/images/visuals/industries/industry-retail.png",
  },
  {
    name: "Manufacturing",
    focus: "Vision inspection, predictive maintenance, and plant intelligence.",
    image: "/images/visuals/industries/industry-manufacturing.png",
  },
  {
    name: "Insurance",
    focus: "Claims acceleration, underwriting support, and service automation.",
    image: "/images/visuals/industries/industry-insurance.png",
  },
  {
    name: "Logistics",
    focus: "Network optimization, control towers, and exception handling.",
    image: "/images/visuals/industries/industry-logistics.png",
  },
  {
    name: "Government",
    focus: "Secure modernization for mission-critical public systems.",
    image: "/images/visuals/industries/industry-government.png",
  },
];

export const agents = [
  { name: "Research Agent", role: "Synthesizes signals across enterprise knowledge." },
  { name: "Ops Agent", role: "Orchestrates workflows and exception resolution." },
  { name: "Compliance Agent", role: "Enforces policy, audit trails, and controls." },
  { name: "Decision Agent", role: "Surfaces recommendations with explainability." },
  { name: "Integration Agent", role: "Bridges systems, APIs, and human handoffs." },
];

export const techLayers = [
  {
    id: "01",
    name: "Models & Reasoning",
    tagline: "Frontier intelligence, privately governed.",
    items: ["OpenAI", "Claude", "Gemini", "Specialized LLMs", "Eval Harness"],
  },
  {
    id: "02",
    name: "Agents & Orchestration",
    tagline: "Multi-agent systems that execute real work.",
    items: ["LangChain", "CrewAI", "MCP", "Tool Calling", "Human-in-the-loop"],
  },
  {
    id: "03",
    name: "Memory & Data Fabric",
    tagline: "Retrieval that stays accurate and auditable.",
    items: ["Vector DB", "Knowledge Graphs", "RAG Pipelines", "Feature Store"],
  },
  {
    id: "04",
    name: "Cloud & Security",
    tagline: "Mission-critical infrastructure by design.",
    items: ["AWS", "Azure", "GCP", "Identity & Access", "Private Networking"],
  },
  {
    id: "05",
    name: "Delivery & Observability",
    tagline: "Shipped, monitored, and continuously improved.",
    items: ["ML Ops", "Tracing", "Guardrails", "Next.js", "CI/CD"],
  },
];

export const techStack = techLayers.flatMap((layer) => layer.items);

export const caseStudies = [
  {
    sector: "Healthcare",
    title: "Governed clinical documentation assistants",
    result: "Private",
    resultLabel: "gen AI in the care workflow",
    detail:
      "A private generative platform that drafts, validates, and routes clinical notes under strict governance.",
    challenge: "Clinicians lost hours to notes, delaying care and increasing burnout.",
    solution: "Governed AI assistants with specialty-aware drafting and EHR handoffs.",
    image: "/images/visuals/industries/industry-healthcare.png",
  },
  {
    sector: "Finance",
    title: "Multi-agent fraud review with audit trails",
    result: "HITL",
    resultLabel: "gates on high-risk actions",
    detail:
      "Agentic triage across signals, cases, and analyst workflows with full auditability.",
    challenge: "Fraud teams drowned in false positives while high-risk cases waited.",
    solution: "Multi-agent orchestration with explainable escalation and audit trails.",
    image: "/images/visuals/industries/industry-finance.png",
  },
  {
    sector: "Manufacturing",
    title: "Vision quality on the production line",
    result: "Edge",
    resultLabel: "vision + ops workflows",
    detail:
      "Computer vision on the line, integrated into quality systems and operator feedback loops.",
    challenge: "Manual inspection missed micro-defects and slowed throughput.",
    solution: "Edge vision models with ops agents that open corrective workflows.",
    image: "/images/visuals/industries/industry-manufacturing.png",
  },
];

export const whyPoints = [
  {
    title: "You Own the Code",
    copy: "Agent logic, backends, interfaces, and fine-tuned weights transfer at handover. We retain no rights to your systems—we don’t rent you someone else’s platform.",
  },
  {
    title: "Private Cloud by Default",
    copy: "Deploy into your AWS, Azure, or GCP VPC. Your data stays inside your boundary and is never used to train public models.",
  },
  {
    title: "Built for Regulated Reality",
    copy: "GDPR-aligned practices, HIPAA-ready patterns, audit trails, and NDA-protected engagements—governance designed in, not patched later.",
  },
  {
    title: "Architects Who Ship",
    copy: "AI architects and engineers—not generalist consultants. Every engagement has named technical accountability from blueprint to production.",
  },
];

export const audiencePaths = {
  eyebrow: "Who we work with",
  title: "Choose your path",
  description:
    "The same engineering rigour—surfaced differently depending on your role.",
  paths: [
    {
      id: "systems",
      icon: "systems" as const,
      label: "01",
      title: "I'm a CTO or technical lead",
      description:
        "Architecture matters: model selection, agent orchestration, LLMOps pipelines, fine-tuning strategy, and how this integrates with your existing infrastructure—with control intact.",
      cta: "See technical solutions",
      href: "/solutions",
      meta: "For CTOs, CIOs, architects & engineering leads",
    },
    {
      id: "outcomes",
      icon: "outcomes" as const,
      label: "02",
      title: "I'm a CEO or business owner",
      description:
        "You need the business case: expected outcomes, timelines, ownership of data and IP, and what changes when AI becomes infrastructure you can measure and govern.",
      cta: "See client case studies",
      href: "/case-studies",
      meta: "For CEOs, founders & transformation leaders",
    },
  ],
};

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    duration: "2–3 weeks",
    copy: "AI feasibility, ROI blueprint, and data readiness—honest about what should not be automated.",
    detail:
      "We map mandates, data reality, risk posture, and the highest-leverage opportunities with leadership before a line of production code is written.",
    outcomes: ["Feasibility report", "ROI blueprint", "Data readiness audit"],
  },
  {
    step: "02",
    title: "Strategise",
    duration: "3–4 weeks",
    copy: "Technical architecture, model selection, and the security framework your CISO can defend.",
    detail:
      "We design the operating model, platform architecture, and sequenced roadmap that survives board and security scrutiny.",
    outcomes: ["Target architecture", "Security framework", "90-day plan"],
  },
  {
    step: "03",
    title: "Prototype",
    duration: "6–10 weeks",
    copy: "Working proof under production constraints—accuracy benchmarks, UX validation, human gates.",
    detail:
      "We ship a governed pilot with real security, auditability, and integration—not a disposable demo that dies after the readout.",
    outcomes: ["Working PoC", "Accuracy benchmarks", "Scale criteria"],
  },
  {
    step: "04",
    title: "Deploy & Scale",
    duration: "Ongoing",
    copy: "Private cloud integration, LLMOps, compliance verification—then continuous fine-tuning and cost control.",
    detail:
      "We harden platforms, enable your teams, transfer IP, and expand agents and workflows across units with full observability.",
    outcomes: ["Private cloud go-live", "IP handover", "Performance dashboard"],
  },
];
