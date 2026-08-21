export const portfolioStats = [
  { value: "2011+", label: "Enterprise delivery DNA informing AI programs" },
  { value: "AI-first", label: "AI/ML · Agents · Vision · LLMOps" },
  { value: "VPC", label: "Private-cloud by default" },
  { value: "Owned", label: "IP transfer on delivery" },
];

export const aiServices = [
  "All",
  "Enterprise AI",
  "AI Agents",
  "Multi-Agent Systems",
  "Generative AI",
  "AI Automation",
  "AI Consulting",
  "AI Transformation",
  "Machine Learning",
  "Computer Vision",
] as const;

export type AiService = (typeof aiServices)[number];

export type PortfolioProject = {
  id: string;
  title: string;
  industry: string;
  service: Exclude<AiService, "All">;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  impact: string;
  tech: string[];
  image: string;
  featured?: boolean;
  editorial?: boolean;
  href?: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "agent-bank",
    title: "Agent Bank",
    industry: "Finance",
    service: "Multi-Agent Systems",
    summary:
      "A governed multi-agent workforce for banking operations, with policy controls, audit trails, and human approval gates.",
    challenge:
      "Banking teams drown in repetitive operational work while regulators demand explainability.",
    solution:
      "Specialized agents for intake, evidence, policy checks, and escalation under a shared control plane.",
    outcome: "Routine ops accelerate while high-risk actions stay human-gated and auditable.",
    impact: "Governed agent ops",
    tech: ["Claude", "LangChain", "Python", "AWS", "Eval harness"],
    image: "/images/actual/actual-agentbank.jpg",
    featured: true,
    editorial: true,
    href: "/portfolio/agent-bank",
  },
  {
    id: "clinical-doc-ai",
    title: "Clinical Documentation Intelligence",
    industry: "Healthcare",
    service: "Generative AI",
    summary:
      "A governed generative platform that drafts, validates, and routes clinical notes under compliance controls.",
    challenge:
      "Clinicians spent hours on documentation, delaying care and increasing burnout.",
    solution:
      "Enterprise AI assistants with specialty-aware drafting, audit trails, and EHR handoffs.",
    outcome: "Less documentation time across specialty clinics (pattern).",
    impact: "Pattern: documentation time",
    tech: ["OpenAI", "LangChain", "Python", "Azure", "Vector DB"],
    image: "/images/actual/actual-healthcare-industry.jpg",
    featured: true,
    editorial: true,
  },
  {
    id: "fraud-review-agents",
    title: "Multi-Agent Fraud Review System",
    industry: "Finance",
    service: "Multi-Agent Systems",
    summary:
      "Collaborating agents triage alerts, gather evidence, and escalate high-risk cases with explainability.",
    challenge:
      "Fraud teams drowned in false positives while high-risk cases waited.",
    solution:
      "Multi-agent orchestration with risk scoring, evidence synthesis, and human-in-the-loop gates.",
    outcome: "Fraud review accelerated with clearer auditability (pattern).",
    impact: "Pattern: faster review",
    tech: ["Claude", "CrewAI", "MCP", "Python", "AWS"],
    image: "/images/actual/actual-finance-industry.jpg",
    featured: true,
    editorial: true,
  },
  {
    id: "vision-inspection",
    title: "Computer Vision Quality Line",
    industry: "Manufacturing",
    service: "Computer Vision",
    summary:
      "Edge vision models detect defects in real time and trigger corrective workflows on the plant floor.",
    challenge:
      "Manual inspection missed micro-defects and slowed throughput.",
    solution:
      "Vision models + ops agents that flag anomalies and open maintenance tickets automatically.",
    outcome: "Fewer missed micro-defects on critical lines (pattern).",
    impact: "Pattern: defect escape",
    tech: ["Gemini", "Python", "AWS", "Edge Inference"],
    image: "/images/actual/actual-manufacturing-industry-l.jpg",
    featured: true,
  },
  {
    id: "enterprise-ai-assistant",
    title: "Enterprise AI Assistant Hub",
    industry: "Enterprise",
    service: "Enterprise AI",
    summary:
      "A private assistant layer for policies, SOPs, and operational knowledge with role-aware access.",
    challenge:
      "Knowledge lived in silos; employees waited days for answers.",
    solution:
      "Secure retrieval, tool calling, and governed responses across internal systems.",
    outcome: "First-response time dropped from days to minutes.",
    impact: "Minutes vs days",
    tech: ["OpenAI", "LangChain", "Vector DB", "Next.js", "Azure"],
    image: "/images/actual/actual-data-retrieval.jpg",
    featured: true,
  },
  {
    id: "ai-customer-support",
    title: "AI Customer Support Command Center",
    industry: "Retail",
    service: "AI Agents",
    summary:
      "Support agents resolve tier-1 inquiries, draft replies, and escalate with full conversation context.",
    challenge:
      "Support volume spiked while CSAT and handle times slipped.",
    solution:
      "Agentic support workflows with CRM tools, sentiment routing, and supervised escalation.",
    outcome: "Lower handle time and higher first-contact resolution (pattern).",
    impact: "Pattern: handle time",
    tech: ["Claude", "LangChain", "GCP", "Next.js"],
    image: "/images/actual/actual-retail-industry-l.jpg",
  },
  {
    id: "ai-knowledge-base",
    title: "AI Knowledge Base Fabric",
    industry: "Insurance",
    service: "Generative AI",
    summary:
      "Living knowledge graph that keeps claims, underwriting, and policy guidance continuously current.",
    challenge:
      "Policy updates lagged; agents worked from outdated guidance.",
    solution:
      "Continuous ingestion, citation-backed answers, and change-aware retrieval.",
    outcome: "Policy answers grounded in citations (pattern).",
    impact: "Pattern: cited answers",
    tech: ["OpenAI", "Vector DB", "Python", "AWS"],
    image: "/images/actual/actual-insurance-industry.jpg",
  },
  {
    id: "ai-sales-copilot",
    title: "AI Sales Copilot",
    industry: "B2B SaaS",
    service: "AI Agents",
    summary:
      "Copilot prepares briefings, drafts outreach, and scores opportunities from CRM signals.",
    challenge:
      "Reps spent more time researching than selling.",
    solution:
      "Sales agents connected to CRM, email, and account intelligence with guardrails.",
    outcome: "Reps spent more time selling, less time researching (pattern).",
    impact: "Pattern: selling time",
    tech: ["Gemini", "LangChain", "Next.js", "Azure"],
    image: "/images/actual/actual-agenticai.jpg",
  },
  {
    id: "ai-hr-assistant",
    title: "AI HR Assistant",
    industry: "Enterprise HR",
    service: "AI Automation",
    summary:
      "HR assistant answers policy questions, drafts offers, and routes approvals with privacy controls.",
    challenge:
      "HR teams were overloaded with repetitive employee requests.",
    solution:
      "Role-scoped assistant with workflow automation for onboarding and policy support.",
    outcome: "Tier-1 HR queries auto-resolved under policy controls (pattern).",
    impact: "Pattern: tier-1 HR",
    tech: ["Claude", "MCP", "Python", "GCP"],
    image: "/images/actual/actual-automation.jpg",
  },
  {
    id: "document-intelligence",
    title: "AI Document Intelligence",
    industry: "Logistics",
    service: "Machine Learning",
    summary:
      "Extracts, validates, and reconciles shipping and customs documents at network scale.",
    challenge:
      "Manual document review created bottlenecks across lanes.",
    solution:
      "Document models + validation agents with exception queues for specialists.",
    outcome: "Document turnaround reduced from hours to minutes.",
    impact: "Minutes vs hours",
    tech: ["OpenAI", "Python", "AWS", "Vector DB"],
    image: "/images/actual/actual-logistic-industry-l.jpg",
  },
  {
    id: "predictive-ops",
    title: "Predictive Operations Analytics",
    industry: "Manufacturing",
    service: "Machine Learning",
    summary:
      "Predictive models forecast downtime and recommend interventions before failures occur.",
    challenge:
      "Unplanned downtime disrupted production schedules.",
    solution:
      "Sensor ML pipelines with ops agents that trigger maintenance playbooks.",
    outcome: "Unplanned downtime reduced on instrumented lines (pattern).",
    impact: "Pattern: uptime",
    tech: ["Python", "AWS", "Gemini", "Observability"],
    image: "/images/actual/actual-manufacturing.jpg",
  },
  {
    id: "workflow-automation",
    title: "AI Workflow Automation Fabric",
    industry: "Government",
    service: "AI Transformation",
    summary:
      "End-to-end automation for intake, classification, routing, and citizen case updates.",
    challenge:
      "Legacy case workflows were slow, opaque, and labor-heavy.",
    solution:
      "Transformation program with automation agents, audit logs, and secure cloud controls.",
    outcome: "Shorter case cycles with full auditability (pattern).",
    impact: "Pattern: case cycle time",
    tech: ["Claude", "CrewAI", "Azure", "Next.js"],
    image: "/images/actual/actual-government-industry.jpg",
    editorial: true,
  },
  {
    id: "ai-consulting-blueprint",
    title: "AI Transformation Blueprint",
    industry: "Enterprise",
    service: "AI Consulting",
    summary:
      "Board-ready roadmap aligning use cases, governance, and platform investment.",
    challenge:
      "Leadership lacked a sequenced AI investment thesis.",
    solution:
      "Consulting engagement covering mandate design, risk, and 90-day delivery plan.",
    outcome: "Executive alignment and funded 3-wave AI roadmap.",
    impact: "Funded roadmap",
    tech: ["Strategy", "Architecture", "Governance"],
    image: "/images/actual/actual-transformation.jpg",
  },
];

export const capabilityLogos = [
  { name: "Claude", src: "/images/partners/anthropic.svg" },
  { name: "LangGraph", src: "/images/partners/langgraph.svg" },
  { name: "LlamaIndex", src: "/images/partners/llamaindex.svg" },
  { name: "CrewAI", src: "/images/partners/crewai.svg" },
  { name: "Pinecone", src: "/images/partners/pinecone.svg" },
  { name: "Weaviate", src: "/images/partners/weaviate.svg" },
  { name: "Qdrant", src: "/images/partners/qdrant.svg" },
  { name: "Azure", src: "/images/partners/microsoft.svg" },
  { name: "NVIDIA", src: "/images/partners/nvidia.svg" },
  { name: "Kubernetes", src: "/images/partners/kubernetes.svg" },
  { name: "PyTorch", src: "/images/partners/pytorch.svg" },
  { name: "Hugging Face", src: "/images/partners/huggingface.svg" },
];

export const businessImpacts = [
  {
    title: "Manual operations",
    value: "Lower",
    copy: "Agentic triage and workflow automation aimed at operating cost, not a guaranteed percentage.",
  },
  {
    title: "Decision velocity",
    value: "Faster",
    copy: "Governed agents and AI analytics designed to compress decision cycles with human gates on risk.",
  },
  {
    title: "Process automation",
    value: "Governed",
    copy: "Higher throughput on routine paths while humans own high-risk actions.",
  },
  {
    title: "Delivery speed",
    value: "Shorter",
    copy: "AI platforms and LLMOps so teams ship production systems instead of repeating pilots.",
  },
  {
    title: "Workflow accuracy",
    value: "Evaluated",
    copy: "Evaluation harnesses and citations on governed workflows, accuracy is measured per program.",
  },
  {
    title: "Ownership",
    value: "Yours",
    copy: "Code, agents, and fine-tunes transfer at handover, no rented platform.",
  },
];
