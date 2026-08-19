export const agentBankProject = {
  slug: "agent-bank",
  name: "Agent Bank",
  category: "Agentic Systems · Financial Services",
  eyebrow: "Featured project",
  headline: "A governed agent workforce for banking operations.",
  summary:
    "Agent Bank is an enterprise multi-agent platform that executes high-volume banking workflows—with policy controls, audit trails, and human approval gates for anything that moves money or risk.",
  heroImage: "/images/actual/actual-agentbank.jpg",
  stats: [
    { value: "6×", label: "Faster exception review cycles" },
    { value: "24/7", label: "Agent coverage on routine ops" },
    { value: "100%", label: "Actions attributable in audit logs" },
    { value: "HITL", label: "Human gates on high-risk tools" },
  ],
  challenge: {
    title: "The operating problem",
    copy: "Banking teams drown in repetitive operational work—KYC follow-ups, case triage, document checks, and queue routing—while regulators still demand explainability. Single LLM chatbots cannot own multi-step work across core systems without creating control gaps.",
    points: [
      "Fragmented case queues across CRM, core banking, and document stores",
      "High false-positive load on fraud and compliance reviews",
      "No reliable way to prove what an AI system did—or why",
    ],
  },
  solution: {
    title: "What we built",
    copy: "A multi-agent operating layer where specialized agents collaborate: intake, evidence gathering, policy checking, drafting, and escalation. Every tool call is permissioned. Every decision is traced. Humans remain accountable for irreversible actions.",
  },
  capabilities: [
    {
      title: "Intake & classification agents",
      copy: "Normalize inbound cases, enrich with customer context, and route by risk and product line.",
    },
    {
      title: "Evidence & document agents",
      copy: "Retrieve, extract, and reconcile KYC packs, statements, and policy documents with citations.",
    },
    {
      title: "Policy & compliance agents",
      copy: "Evaluate actions against internal policy packs before recommendations reach analysts.",
    },
    {
      title: "Supervisor & escalation layer",
      copy: "Peer-check agent outputs, score confidence, and escalate to humans when thresholds trip.",
    },
  ],
  journey: [
    {
      step: "01",
      title: "Case enters the bank",
      copy: "Signals arrive from channels and systems. Intake agents classify urgency, product, and required evidence.",
    },
    {
      step: "02",
      title: "Agents assemble the file",
      copy: "Specialists pull context from approved tools—never unbounded browsing—and attach citations.",
    },
    {
      step: "03",
      title: "Policy check & recommend",
      copy: "Compliance-aware agents propose next actions with rationale and confidence scores.",
    },
    {
      step: "04",
      title: "Human gate when needed",
      copy: "High-risk moves require analyst approval. Low-risk routines complete under logged autonomy.",
    },
  ],
  architecture: [
    "Private model endpoints inside the client VPC",
    "Tool registry with scoped credentials (MCP-ready)",
    "Vector retrieval over approved knowledge only",
    "Evaluation harness for regression on banking scenarios",
    "Full action ledger for audit and QA sampling",
  ],
  outcomes: [
    {
      title: "Analysts reclaim judgment time",
      copy: "Routine assembly and first-pass checks move to agents; experts focus on exceptions that matter.",
    },
    {
      title: "Auditability becomes default",
      copy: "Every recommendation is reconstructable—inputs, tools, policy checks, and approvals.",
    },
    {
      title: "A platform, not a one-off bot",
      copy: "New product lines reuse the same agent fabric with new tools and policies—not greenfield chat apps.",
    },
  ],
  stack: [
    "Claude / GPT-class models",
    "LangChain / orchestration",
    "Vector retrieval",
    "Python services",
    "AWS / Azure private cloud",
    "Observability & eval harness",
  ],
};
