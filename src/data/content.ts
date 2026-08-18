/** Homepage strength strip — core AI technology lanes (UI shared with former sector bar). */
export const trustTechnologies = [
  { label: "Enterprise AI", href: "/solutions/enterprise-ai" },
  { label: "Agentic AI", href: "/solutions/ai-agents" },
  { label: "Generative AI", href: "/solutions/generative-ai" },
  { label: "AI Search", href: "/solutions/enterprise-ai" },
  { label: "LLMOps", href: "/solutions/ai-transformation" },
  { label: "MCP", href: "/solutions/ai-agents" },
  { label: "Multi-Agent", href: "/solutions/ai-agents" },
] as const;

export const capabilities = [
  {
    id: "01",
    title: "AI/ML Engineering",
    copy: "Fine-tuning, Document AI, prediction systems, and PyTorch-class training—engineered for measurable outcomes, not demos.",
  },
  {
    id: "02",
    title: "Generative AI",
    copy: "Secure LLM apps, RAG copilots, and code copilots with evaluation harnesses, guardrails, citations, and private-cloud ownership.",
  },
  {
    id: "03",
    title: "Agentic AI Systems",
    copy: "Text, voice/realtime, and multimodal agents with MCP, tool calling, memory, and human gates that execute real enterprise work.",
  },
  {
    id: "04",
    title: "AI Automation",
    copy: "Workflow intelligence with n8n, durable orchestration, and system integrations—cutting operating cost inside ERP, CRM, and plant systems you already run.",
  },
  {
    id: "05",
    title: "AI DevOps & LLMOps",
    copy: "CI/CD for AI, MLflow, vLLM serving, tracing, and LLM FinOps—so production systems stay reliable and cost-governed after go-live.",
  },
  {
    id: "06",
    title: "Enterprise AI platforms",
    copy: "AI Search, GraphRAG, model gateways, and AI security controls—deployed in your VPC with full ownership at handover.",
  },
];

export const journey = [
  {
    step: "01",
    title: "Discover",
    copy: "Map the business problem, data readiness, and ROI case—so leadership knows why AI, why now, and which workflows move the P&L.",
  },
  {
    step: "02",
    title: "Architect",
    copy: "Define AI architecture, model strategy, eval and security controls, and LLMOps posture your CTO and CISO can defend in diligence.",
  },
  {
    step: "03",
    title: "Build & Deploy",
    copy: "Ship production agents and platforms into your environment with evaluation, monitoring, and IP transfer—not a rented sandbox.",
  },
  {
    step: "04",
    title: "Scale",
    copy: "Industrialize across departments with cost controls, enablement, and continuous improvement after handover.",
  },
];

export const solutions = [
  {
    index: "01",
    title: "AI/ML Engineering",
    copy: "Fine-tuning, Document AI, prediction systems, and AI Search built for enterprise data and outcomes.",
  },
  {
    index: "02",
    title: "Generative AI",
    copy: "Secure LLM applications with evals, guardrails, RAG copilots, and code copilots designed for enterprise controls.",
  },
  {
    index: "03",
    title: "Autonomous AI agents",
    copy: "Task-oriented agents—text, voice/realtime, and computer-use—with MCP and tool access that execute, not just answer.",
  },
  {
    index: "04",
    title: "Multi-Agent Orchestration",
    copy: "Hierarchical agent networks that assign work, peer-review outputs, escalate exceptions, and keep humans on risk.",
  },
  {
    index: "05",
    title: "AI Automation",
    copy: "Governed workflow automation with n8n, agents, and integrations—cut operating cost without shadow IT.",
  },
  {
    index: "06",
    title: "AI DevOps & LLMOps",
    copy: "CI/CD for AI, MLflow, vLLM, tracing, and GitOps so AI systems stay production-grade at scale.",
  },
  {
    index: "07",
    title: "Enterprise RAG Platforms",
    copy: "AI Search and GraphRAG with hybrid retrieval, citations, and guardrails inside your security boundary.",
  },
  {
    index: "08",
    title: "Computer Vision",
    copy: "Domain-trained perception for QA, imaging, and plant ops—including on-device / edge inference when data cannot leave site.",
  },
  {
    index: "09",
    title: "AI Transformation",
    copy: "From strategy call to industrialized capability—with eval, safety, and security gates from pilot to scaled operations.",
  },
];

export const industries = [
  {
    name: "Healthcare",
    focus: "Clinical operations, documentation, and compliance-grade AI that reduces cost without increasing risk.",
    image: "/images/visuals/industries/industry-healthcare.png",
  },
  {
    name: "Finance",
    focus: "Fraud, underwriting, and decisioning agents with audit trails built for institutional scale.",
    image: "/images/visuals/industries/industry-finance.png",
  },
  {
    name: "Retail",
    focus: "Demand sensing, merchandising intelligence, and service automation that compress operating cost.",
    image: "/images/visuals/industries/industry-retail.png",
  },
  {
    name: "Manufacturing",
    focus: "Vision inspection, predictive maintenance, and plant intelligence that protect throughput and quality.",
    image: "/images/visuals/industries/industry-manufacturing.png",
  },
  {
    name: "Insurance",
    focus: "Claims acceleration, underwriting support, and service agents with policy-aware controls.",
    image: "/images/visuals/industries/industry-insurance.png",
  },
  {
    name: "Logistics",
    focus: "Network optimization, control towers, and exception agents that cut manual operations.",
    image: "/images/visuals/industries/industry-logistics.png",
  },
  {
    name: "Government",
    focus: "Secure AI modernization for mission-critical public systems with sovereignty by design.",
    image: "/images/visuals/industries/industry-government.png",
  },
];

export const agents = [
  { name: "Research Agent", role: "Synthesizes enterprise knowledge with citations and memory." },
  { name: "Ops Agent", role: "Executes workflows, tool calls, and exception resolution." },
  { name: "Compliance Agent", role: "Enforces policy, audit trails, and approval gates." },
  { name: "Decision Agent", role: "Surfaces recommendations with explainable rationale." },
  { name: "Integration Agent", role: "Bridges ERP, CRM, APIs, MCP tools, and human handoffs." },
];

export const techLayers = [
  {
    id: "01",
    name: "Models & Reasoning",
    tagline: "Frontier, open-weight, and cloud AI platforms—privately governed.",
    items: [
      "OpenAI",
      "Claude",
      "Gemini",
      "Llama / Mistral / DeepSeek",
      "Bedrock / Azure OpenAI / Vertex",
      "PyTorch / Transformers",
      "Fine-Tuning",
    ],
  },
  {
    id: "02",
    name: "Agentic AI",
    tagline: "Multi-Agent Systems that execute real enterprise work.",
    items: [
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "CrewAI",
      "MCP",
      "Tool Calling",
      "Human-in-the-loop",
    ],
  },
  {
    id: "03",
    name: "Data & Retrieval",
    tagline: "AI Search, GraphRAG, and vector infrastructure that stays accurate.",
    items: [
      "Pinecone",
      "Weaviate",
      "Qdrant / pgvector",
      "OpenSearch",
      "GraphRAG",
      "RAG Pipelines",
      "AI Search",
    ],
  },
  {
    id: "04",
    name: "Automation & Integration",
    tagline: "Workflow intelligence connected to enterprise systems.",
    items: [
      "n8n",
      "Temporal / Prefect",
      "MCP Tools",
      "API Orchestration",
      "ERP / CRM Hooks",
      "Human Approval Gates",
    ],
  },
  {
    id: "05",
    name: "Cloud & Security",
    tagline: "Bedrock, Azure OpenAI, Vertex, and private-cloud AI by design.",
    items: [
      "AWS / Bedrock",
      "Azure OpenAI / Foundry",
      "GCP / Vertex AI",
      "Identity & Access",
      "Private Networking",
      "Customer-tenant deploy",
    ],
  },
  {
    id: "06",
    name: "AI DevOps",
    tagline: "MLflow, vLLM, GitOps, and tracing for production AI.",
    items: [
      "MLflow",
      "vLLM / FastAPI",
      "Langfuse",
      "Argo CD",
      "OpenTelemetry",
      "CI/CD for AI",
      "Tracing & Guardrails",
    ],
  },
];

export const techStack = techLayers.flatMap((layer) => layer.items);

export const caseStudies = [
  {
    sector: "Healthcare",
    title: "Governed clinical documentation assistants",
    result: "40%",
    resultLabel: "less documentation time (pattern)",
    detail:
      "A private generative platform that drafts, validates, and routes clinical notes under strict governance—cutting clinician admin load.",
    challenge: "Clinicians lost hours to notes, delaying care and increasing burnout.",
    solution: "Governed AI assistants with specialty-aware drafting and EHR handoffs.",
    image: "/images/visuals/industries/industry-healthcare.png",
  },
  {
    sector: "Finance",
    title: "Multi-agent fraud review with audit trails",
    result: "10×",
    resultLabel: "faster case triage cycles (pattern)",
    detail:
      "Agentic triage across signals, cases, and analyst workflows—with explainable escalation and full auditability.",
    challenge: "Fraud teams drowned in false positives while high-risk cases waited.",
    solution: "Multi-agent orchestration with human gates on consequential actions.",
    image: "/images/visuals/industries/industry-finance.png",
  },
  {
    sector: "Manufacturing",
    title: "Vision quality on the production line",
    result: "65%",
    resultLabel: "fewer missed micro-defects (pattern)",
    detail:
      "Computer Vision on the line, integrated into quality systems and operator feedback loops that open corrective workflows.",
    challenge: "Manual inspection missed micro-defects and slowed throughput.",
    solution: "Edge vision models with ops agents that trigger corrective action.",
    image: "/images/visuals/industries/industry-manufacturing.png",
  },
];

export const whyPoints = [
  {
    title: "AI-native, not IT-generic",
    copy: "We specialize in AI/ML engineering, agentic systems, and AI DevOps—not websites, staff-aug theater, or generic software projects dressed up as AI.",
  },
  {
    title: "You own the capability",
    copy: "Agent logic, platforms, fine-tunes, and infrastructure-as-code transfer at handover. We do not rent you someone else’s black-box platform.",
  },
  {
    title: "Private cloud by default",
    copy: "Deploy into your AWS, Azure, or GCP VPC. Your data stays inside your boundary and is never used by InheritX to train public models.",
  },
  {
    title: "Architects who ship production",
    copy: "Named AI architects and engineers accountable from blueprint to LLMOps—systems your CTO can operate, not slideware your board forgets.",
  },
];

export const audiencePaths = {
  eyebrow: "Built for enterprise AI buyers",
  title: "Choose your path",
  description:
    "Open the decision page built for your seat—outcomes for CEOs, architecture for CTOs, and operating models for Heads of AI and Enterprise Architects.",
  paths: [
    {
      id: "outcomes",
      icon: "outcomes" as const,
      label: "01",
      title: "I'm a CEO / Business leader",
      description:
        "Clarify ROI, operating-cost impact, and board-ready transformation outcomes.",
      cta: "Open CEO path",
      href: "/path/ceo",
      meta: "CEOs, founders & transformation leaders",
    },
    {
      id: "systems",
      icon: "systems" as const,
      label: "02",
      title: "I'm a CTO / VP Engineering",
      description:
        "Pressure-test architecture, LLMOps, security, and production readiness.",
      cta: "Open CTO path",
      href: "/path/cto",
      meta: "CTOs, CIOs & VP Engineering",
    },
    {
      id: "explore",
      icon: "explore" as const,
      label: "03",
      title: "I'm a Head of AI / Enterprise architect",
      description:
        "Define estate fit, agent architecture, evaluation, and the AI operating model.",
      cta: "Open AI leadership path",
      href: "/path/head-of-ai",
      meta: "Heads of AI & enterprise architects",
    },
  ],
};

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    duration: "2–3 weeks",
    copy: "Business problem, AI feasibility, ROI blueprint, and data readiness—honest about what should not be automated.",
    detail:
      "We map mandates, operating cost, risk posture, and the highest-leverage AI opportunities with leadership before production build begins.",
    outcomes: ["Feasibility report", "ROI blueprint", "Data readiness audit"],
  },
  {
    step: "02",
    title: "Architect",
    duration: "3–4 weeks",
    copy: "AI architecture, model selection, agent design, and the security framework your CISO can defend.",
    detail:
      "We design the platform, agent workforce, and LLMOps operating model that survives board and security scrutiny.",
    outcomes: ["Target architecture", "Security framework", "90-day plan"],
  },
  {
    step: "03",
    title: "Prove",
    duration: "6–10 weeks",
    copy: "Governed pilot under production constraints—accuracy benchmarks, human gates, and scale criteria.",
    detail:
      "We ship a real system with security, auditability, and integration—not a disposable demo that dies after the readout.",
    outcomes: ["Working PoC", "Accuracy benchmarks", "Scale criteria"],
  },
  {
    step: "04",
    title: "Industrialize",
    duration: "Ongoing",
    copy: "Private-cloud deployment, AI DevOps, enablement, and IP handover—then optional hypercare and advisory.",
    detail:
      "We harden platforms, enable your teams, transfer IP, and expand agents across units with full observability. No forced lock-in.",
    outcomes: ["Private cloud go-live", "IP handover", "Hypercare / enablement"],
  },
];
