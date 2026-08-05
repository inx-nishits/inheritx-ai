import type { TopicLink } from "./topic";

export type PathMidCta = {
  eyebrow: string;
  title: string;
  description: string;
  primary: TopicLink;
  secondary?: TopicLink;
};

export type PathBlock =
  | { type: "narrative"; title: string; body: string[] }
  | {
      type: "bullets";
      title: string;
      intro?: string;
      items: { title: string; copy: string }[];
    }
  | {
      type: "steps";
      title: string;
      intro?: string;
      items: { step: string; title: string; copy: string }[];
    }
  | { type: "faq"; title: string; items: { q: string; a: string }[] }
  | { type: "related"; title: string; links: TopicLink[] }
  | ({ type: "midCta" } & PathMidCta)
  | {
      type: "bars";
      title: string;
      intro?: string;
      note?: string;
      items: { label: string; before: number; after: number }[];
    }
  | {
      type: "maturity";
      title: string;
      intro?: string;
      stages: { stage: string; title: string; copy: string }[];
    }
  | {
      type: "layers";
      title: string;
      intro?: string;
      layers: { name: string; items: string[] }[];
    }
  | {
      type: "checklist";
      title: string;
      intro?: string;
      items: { label: string; detail: string }[];
    }
  | {
      type: "timeline";
      title: string;
      intro?: string;
      items: { phase: string; title: string; copy: string }[];
    }
  | {
      type: "decisionMatrix";
      title: string;
      intro?: string;
      columns: [string, string, string];
      rows: { need: string; a: string; b: string; c: string }[];
    }
  | {
      type: "chips";
      title: string;
      intro?: string;
      groups: { label: string; items: string[] }[];
    }
  | {
      type: "compare";
      title: string;
      leftTitle: string;
      leftItems: string[];
      rightTitle: string;
      rightItems: string[];
    }
  | {
      type: "risk";
      title: string;
      intro?: string;
      rows: { risk: string; without: string; with: string }[];
    }
  | {
      type: "roiMix";
      title: string;
      intro?: string;
      note?: string;
      items: { label: string; value: number; detail: string }[];
    }
  | {
      type: "lineChart";
      title: string;
      intro?: string;
      note?: string;
      meta?: string;
      labels: string[];
      series: number[];
    }
  | {
      type: "donutChart";
      title: string;
      intro?: string;
      note?: string;
      items: { label: string; value: number; detail: string }[];
    }
  | {
      type: "funnelChart";
      title: string;
      intro?: string;
      note?: string;
      items: { label: string; value: number; detail: string }[];
    }
  | {
      type: "scoreChart";
      title: string;
      intro?: string;
      note?: string;
      items: { label: string; value: number }[];
    }
  | {
      type: "pipelineChart";
      title: string;
      intro?: string;
      note?: string;
      items: { label: string; value: number; unit?: string }[];
    };

export type PathPage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: TopicLink;
  secondaryCta?: TopicLink;
  metadata: { title: string; description: string };
  proof: { value: string; label: string }[];
  closing: PathMidCta;
  blocks: PathBlock[];
};

export const pathPages: PathPage[] = [
  {
    slug: "ceo",
    eyebrow: "For CEOs & business leaders",
    title: "Enterprise AI outcomes your board can defend.",
    description:
      "You are not buying demos. You are buying operating leverage—cost, speed, revenue quality, and risk posture—delivered as governed systems you own. This page is built for the board conversation, not the vendor pitch.",
    primaryCta: {
      label: "Book an AI strategy call",
      href: "/contact?intent=strategy",
    },
    secondaryCta: {
      label: "See production case studies",
      href: "/case-studies",
    },
    metadata: {
      title: "AI for CEOs & business leaders | InheritX",
      description:
        "Board-ready enterprise AI: ROI framing, cost optimisation, transformation roadmap, competitive advantage, and full IP ownership for Fortune 500 leaders.",
    },
    proof: [
      { value: "Board", label: "KPIs tied to cost, speed, revenue & risk" },
      { value: "90d", label: "Typical path to a governed production system" },
      { value: "Owned", label: "Full IP transfer—no platform lock-in" },
      { value: "Honest", label: "We say no when AI is the wrong lever" },
    ],
    closing: {
      eyebrow: "Executive next step",
      title: "Discuss AI transformation with an architect.",
      description:
        "A focused strategy conversation on mandate, ROI framing, risk posture, and whether to pursue workshop, assessment, or a governed build.",
      primary: {
        label: "Book an AI strategy call",
        href: "/contact?intent=strategy",
      },
      secondary: {
        label: "Request an AI opportunity assessment",
        href: "/contact?intent=assessment",
      },
    },
    blocks: [
      {
        type: "narrative",
        title: "What Fortune 500 leaders actually need to decide",
        body: [
          "Most AI programs fail the board test for the same reason: the demo is impressive, but nobody owns the operating metric, the security posture, or the industrialization path. Boards do not fund fluency. They fund durable capability that shows up in the P&L and the risk register.",
          "InheritX is an AI-native enterprise technology partner—not a marketing agency and not a generic software shop. We help enterprises build, modernize, deploy, secure, and operate production-grade AI systems with private deployment and IP that stays with you.",
          "This page is structured the way a CEO briefing should be: outcomes first, investment logic second, transformation path third, then proof and diligence. If AI is not the right lever, we will say so.",
        ],
      },
      {
        type: "bars",
        title: "Executive KPI shifts we design toward",
        intro:
          "Illustrative operating deltas from production-shaped programs—not vendor vanity metrics. Your board metric is named before build begins.",
        note: "Framework values are directional for briefing—not guarantees. Primary proof lives in case studies.",
        items: [
          { label: "Ops productivity", before: 32, after: 78 },
          { label: "Decision cycle speed", before: 28, after: 84 },
          { label: "Manual exception load", before: 70, after: 28 },
          { label: "AI program confidence", before: 22, after: 76 },
        ],
      },
      {
        type: "lineChart",
        title: "Illustrative value compounding after go-live",
        intro:
          "Board-friendly view of how governed AI programs typically compound once the operating metric is owned—not a one-quarter spike.",
        meta: "Index 0–100",
        note: "Illustrative trajectory for briefing. Your curve is set by KPI, data access, and industrialization discipline.",
        labels: ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8"],
        series: [18, 24, 31, 42, 55, 68, 79, 88],
      },
      {
        type: "donutChart",
        title: "Board ROI portfolio at a glance",
        intro:
          "Same investment logic as a board pack—split across cost, revenue quality, risk, and decision speed so no single miracle KPI carries the story.",
        note: "Mix varies by industry and workflow. We pressure-test the blend on the strategy call.",
        items: [
          {
            label: "Cost optimisation",
            value: 42,
            detail: "Cycle time, handling cost, rework",
          },
          {
            label: "Revenue quality",
            value: 28,
            detail: "Conversion, retention, offer speed",
          },
          {
            label: "Risk reduction",
            value: 18,
            detail: "Policy, audit, fewer irreversible errors",
          },
          {
            label: "Speed-to-decision",
            value: 12,
            detail: "Diligence, triage, executive readiness",
          },
        ],
      },
      {
        type: "funnelChart",
        title: "From mandate to industrialized value",
        intro:
          "Executive view of how serious programs progress—each stage has exit criteria before the next budget release.",
        note: "Illustrative funnel for briefing. Stage widths reflect typical drop-off without governance—not a forecast.",
        items: [
          {
            label: "Mandate clarity",
            value: 100,
            detail: "KPI and owner named",
          },
          {
            label: "Feasible workflow",
            value: 78,
            detail: "Data + risk class confirmed",
          },
          {
            label: "Governed pilot",
            value: 52,
            detail: "Production constraints met",
          },
          {
            label: "Industrialized",
            value: 34,
            detail: "Shared services + IP owned",
          },
        ],
      },
      {
        type: "midCta",
        eyebrow: "Executive workshop",
        title: "Need alignment across CEO, CFO, and CIO first?",
        description:
          "Schedule an executive AI workshop to align mandate, KPI, risk class, and investment shape before any build spend.",
        primary: {
          label: "Schedule an executive AI workshop",
          href: "/contact?intent=workshop",
        },
        secondary: {
          label: "Discuss AI transformation",
          href: "/solutions/ai-transformation",
        },
      },
      {
        type: "bullets",
        title: "Decision signals CEOs use to filter partners",
        intro:
          "If a partner cannot answer these cleanly, the program will not survive diligence—or the first security review.",
        items: [
          {
            title: "One board-recognizable KPI",
            copy: "Cost-to-serve, cycle time, exception rate, revenue lift, or risk reduction—named before architecture. Not “engagement with the assistant.”",
          },
          {
            title: "A path past the pilot",
            copy: "Explicit scale criteria: accuracy bars, human gates, CISO sign-off, operating owner, and runbooks after go-live.",
          },
          {
            title: "Economics that survive procurement",
            copy: "Build vs. buy vs. embed framed honestly—including where SaaS copilots create shadow spend and where owned systems compound.",
          },
          {
            title: "IP and exit rights from day one",
            copy: "Models, agents, retrieval corpora, and orchestration transfer to you. Capability is not rented indefinitely.",
          },
        ],
      },
      {
        type: "compare",
        title: "Board conversation vs. pilot theater",
        leftTitle: "What we refuse to optimize for",
        leftItems: [
          "Slideware roadmaps with no production owner",
          "Vendor demos that fail CISO or audit review",
          "Success defined as executive applause",
          "Renewal lock-in disguised as acceleration",
          "AI for its own sake when process redesign wins",
        ],
        rightTitle: "What a serious program looks like",
        rightItems: [
          "Mandate → feasibility → architecture → governed pilot → industrialize",
          "Named architects accountable from blueprint to LLMOps",
          "Private cloud / VPC deployment with policy and audit trails",
          "Case-study-grade proof, then scaled capability across BUs",
          "Enablement so your teams own the system after handoff",
        ],
      },
      {
        type: "maturity",
        title: "Enterprise AI maturity model (executive view)",
        intro:
          "Know where you are before you fund the next stage. Most stalled programs try to skip from experiments to autonomy.",
        stages: [
          {
            stage: "01",
            title: "Experiments",
            copy: "Scattered copilots, API keys, and proofs with no shared governance or KPI ownership.",
          },
          {
            stage: "02",
            title: "Governed pilots",
            copy: "Production constraints, evaluation bars, security review, and a named operating owner.",
          },
          {
            stage: "03",
            title: "Platformized AI",
            copy: "Shared retrieval, model routing, policy, and observability consumed by multiple BUs.",
          },
          {
            stage: "04",
            title: "Industrialized agents",
            copy: "Multi-agent workflows with tool governance, human gates, and measurable P&L impact.",
          },
        ],
      },
      {
        type: "timeline",
        title: "AI investment roadmap — typical executive path",
        intro:
          "A briefing-friendly sequence. Actual calendars depend on data access, risk class, and estate readiness.",
        items: [
          {
            phase: "Week 0–2",
            title: "Mandate & KPI",
            copy: "Strategy call or executive workshop: confirm the workflow, board metric, and go / no-go on AI.",
          },
          {
            phase: "Week 2–6",
            title: "Architecture & risk",
            copy: "Target architecture, security posture, ROI blueprint, and industrialization criteria.",
          },
          {
            phase: "Week 6–14",
            title: "Governed production",
            copy: "Ship under production constraints—integrations, evaluation, auditability, human gates.",
          },
          {
            phase: "Ongoing",
            title: "Industrialize",
            copy: "Scale across BUs, harden LLMOps, transfer IP, and enable internal ownership.",
          },
        ],
      },
      {
        type: "decisionMatrix",
        title: "Executive decision matrix — where to start",
        intro: "Match urgency to motion. Do not start with a catalog tour.",
        columns: ["If this is true…", "Start here", "Primary proof"],
        rows: [
          {
            need: "Need proof before a board ask",
            a: "Case studies + strategy call",
            b: "Named outcomes & methodology",
            c: "/case-studies",
          },
          {
            need: "Need enterprise transformation partner",
            a: "AI Transformation program",
            b: "ROI blueprint → production systems",
            c: "/solutions/ai-transformation",
          },
          {
            need: "Need speed with ownership",
            a: "Dedicated AI squads",
            b: "Capacity under your leadership",
            c: "/solutions/dedicated-ai-squads",
          },
          {
            need: "Need a flagship agent platform pattern",
            a: "Agent Bank reference",
            b: "Governed multi-agent banking workflows",
            c: "/portfolio/agent-bank",
          },
        ],
      },
      {
        type: "midCta",
        eyebrow: "Opportunity assessment",
        title: "Request an AI opportunity assessment",
        description:
          "A structured readout of highest-leverage workflows, risk class, and recommended investment shape—before you commit to a large build.",
        primary: {
          label: "Request an AI opportunity assessment",
          href: "/contact?intent=assessment",
        },
        secondary: {
          label: "Book an AI strategy call",
          href: "/contact?intent=strategy",
        },
      },
      {
        type: "risk",
        title: "Executive risk framing",
        intro:
          "Boards care as much about downside as upside. Design for both.",
        rows: [
          {
            risk: "Pilot theater",
            without: "Budget spent on demos that cannot scale or pass security",
            with: "Governed pilots with explicit scale criteria and CISO path",
          },
          {
            risk: "Vendor lock-in",
            without: "Capability evaporates at renewal or exit",
            with: "Full IP transfer and operable runbooks for your teams",
          },
          {
            risk: "Shadow AI spend",
            without: "Department copilots with no shared control plane",
            with: "Platformized routing, policy, cost caps, and audit trails",
          },
          {
            risk: "Irreversible agent actions",
            without: "Autonomy without human gates on money/risk",
            with: "Tool scoping, approvals, and escalation by design",
          },
        ],
      },
      {
        type: "steps",
        title: "How a CEO-led engagement typically starts",
        intro: "Optimized for decision quality in the first 30 days—not activity theater.",
        items: [
          {
            step: "01",
            title: "Strategy call",
            copy: "Pressure-test mandate, constraints, and whether AI is the right lever. NDA available when diligence requires it.",
          },
          {
            step: "02",
            title: "Outcome framing",
            copy: "Align board metric, risk posture, and the narrowest workflow that can prove value under production constraints.",
          },
          {
            step: "03",
            title: "Proof path",
            copy: "Review case studies and architecture patterns—then choose workshop, assessment, pilot, or platform build.",
          },
          {
            step: "04",
            title: "Execute & own",
            copy: "Ship governed systems with IP transfer and an operating model your organization can sustain.",
          },
        ],
      },
      {
        type: "related",
        title: "Useful next reads for business leaders",
        links: [
          { label: "Case studies", href: "/case-studies" },
          { label: "AI Transformation", href: "/solutions/ai-transformation" },
          { label: "Why InheritX", href: "/company/why-inheritx" },
          { label: "Agent Bank", href: "/portfolio/agent-bank" },
          { label: "Diligence pack", href: "/resources/diligence-pack" },
          { label: "Contact", href: "/contact?intent=strategy" },
        ],
      },
      {
        type: "faq",
        title: "Executive FAQs",
        items: [
          {
            q: "How do we show the board progress in 90 days?",
            a: "Name one KPI, ship a governed production-constrained release against that KPI, and report accuracy, cost, risk controls, and operating ownership—not demo anecdotes.",
          },
          {
            q: "Will we own the IP?",
            a: "Yes. Engagements are structured for full IP transfer of systems built for you—agents, orchestration, fine-tunes, and integration code.",
          },
          {
            q: "What if AI is not the right answer?",
            a: "We will say so. A useful strategy call often ends with a clearer process or data decision—and no build.",
          },
          {
            q: "How do you work with our SI or cloud partner?",
            a: "As the AI systems partner alongside enterprise IT and cloud partners—not a rip-and-replace of trusted vendors.",
          },
          {
            q: "What does an executive workshop produce?",
            a: "Aligned mandate, KPI, risk class, investment shape, and a written next-step recommendation your steering group can act on.",
          },
        ],
      },
    ],
  },
  {
    slug: "cto",
    eyebrow: "For CTOs & VP Engineering",
    title: "Architecture you can pressure-test before you commit.",
    description:
      "Production readiness—not a black-box demo. Private cloud and VPC deployment, LLMOps, security, governance, integration, observability, and a partner whose architects survive your design review.",
    primaryCta: {
      label: "Talk to an Enterprise AI architect",
      href: "/contact?intent=strategy",
    },
    secondaryCta: {
      label: "Explore AI architecture & solutions",
      href: "/solutions",
    },
    metadata: {
      title: "AI for CTOs & VP Engineering | InheritX",
      description:
        "Enterprise AI architecture for CTOs: VPC, hybrid deployment, LLMOps, MLOps, security, MCP, RAG, observability, and production readiness.",
    },
    proof: [
      { value: "VPC", label: "Private / hybrid / sovereign deployment" },
      { value: "LLMOps", label: "Eval → release → observe → improve" },
      { value: "Secure", label: "Policy, audit, secrets, tool sandboxing" },
      { value: "Owned", label: "Code, weights, runbooks—your estate" },
    ],
    closing: {
      eyebrow: "Technical next step",
      title: "Schedule an architecture review.",
      description:
        "Bring constraints, estate, and risk class. Leave with a clearer topology, evaluation plan, and go / no-go on the proposed shape.",
      primary: {
        label: "Schedule an architecture review",
        href: "/contact?intent=architecture",
      },
      secondary: {
        label: "Book a technical discovery session",
        href: "/contact?intent=strategy",
      },
    },
    blocks: [
      {
        type: "narrative",
        title: "What CTOs and VP Engineering evaluate first",
        body: [
          "The failure mode is familiar: a flashy prototype that cannot pass security review, has no evaluation regression suite, and cannot be operated by your platform team. Engineering leadership does not need more copilots—it needs systems that behave like infrastructure.",
          "InheritX designs and delivers enterprise AI platforms and agent systems for private cloud, VPC, and hybrid estates—with GitOps-friendly delivery, observability, cost controls, and handover that includes runbooks, not a slide of “next steps.”",
          "On a technical discovery call we expect hard questions: model routing, data residency, MCP and tool boundaries, RAG quality, drift detection, Kubernetes serving, and how humans stay in the loop for irreversible actions.",
        ],
      },
      {
        type: "scoreChart",
        title: "Production readiness scores we design to",
        intro:
          "Illustrative target posture for enterprise AI platforms—use it as a design-review scorecard, not a vanity radar.",
        note: "Scores are target design bars. Your estate baseline is measured in the architecture review.",
        items: [
          { label: "Security", value: 94 },
          { label: "Governance", value: 91 },
          { label: "Observability", value: 96 },
          { label: "Reliability", value: 93 },
          { label: "Operability", value: 90 },
        ],
      },
      {
        type: "pipelineChart",
        title: "Illustrative inference & tool pipeline budget",
        intro:
          "Latency budgets CTOs expect to see drawn—ingest through deploy—with room for retrieval, reasoning, and governed tool calls.",
        note: "Example budgets in ms for briefing. Real SLOs are set per workflow and model class.",
        items: [
          { label: "Ingest", value: 42, unit: "ms" },
          { label: "Retrieve", value: 68, unit: "ms" },
          { label: "Reason", value: 120, unit: "ms" },
          { label: "Tool / MCP", value: 85, unit: "ms" },
          { label: "Respond", value: 35, unit: "ms" },
        ],
      },
      {
        type: "layers",
        title: "Enterprise AI reference stack",
        intro:
          "A pressure-testable layer model—not a product catalog. We map your estate onto this before we propose build.",
        layers: [
          {
            name: "Experience & channels",
            items: ["Apps", "Ops consoles", "APIs", "Human approval queues"],
          },
          {
            name: "Agent & orchestration",
            items: [
              "Multi-Agent Systems",
              "MCP / tool calling",
              "Workflow automation",
              "HITL gates",
            ],
          },
          {
            name: "Intelligence services",
            items: [
              "Enterprise RAG",
              "Model gateway & routing",
              "Fine-tunes",
              "Guardrails",
            ],
          },
          {
            name: "Data & knowledge",
            items: [
              "Vector databases",
              "Knowledge graphs",
              "Pipelines",
              "Feature / corpus governance",
            ],
          },
          {
            name: "Platform & ops",
            items: [
              "Kubernetes / model serving",
              "LLMOps + MLOps",
              "Observability",
              "GitOps / CI evaluation",
            ],
          },
          {
            name: "Security & control plane",
            items: [
              "IAM / secrets",
              "Network & VPC",
              "Policy & audit",
              "Cost & rate controls",
            ],
          },
        ],
      },
      {
        type: "midCta",
        eyebrow: "Architecture review",
        title: "Review deployment strategy with an architect",
        description:
          "Private cloud, VPC, hybrid, or sovereign—map trust boundaries, data flows, and serving topology before sprint zero.",
        primary: {
          label: "Review deployment strategy",
          href: "/contact?intent=architecture",
        },
        secondary: {
          label: "Open Security FAQ",
          href: "/resources/security-faq",
        },
      },
      {
        type: "checklist",
        title: "Production readiness checklist",
        intro:
          "Use this in design review. If answers are vague, the system is not ready for enterprise traffic.",
        items: [
          {
            label: "Deployment topology",
            detail:
              "VPC / private / hybrid paths drawn; egress and data residency explicit",
          },
          {
            label: "Identity & secrets",
            detail:
              "Workload identity, vault patterns, no long-lived shared API keys in apps",
          },
          {
            label: "Evaluation gates",
            detail:
              "Golden sets, regression suites, and release blockers for quality/safety",
          },
          {
            label: "Observability",
            detail:
              "Tracing, latency budgets, token/cost metrics, incident runbooks",
          },
          {
            label: "Tool & MCP governance",
            detail:
              "Scoped tools, audit trails, sandboxing, approval for high-risk actions",
          },
          {
            label: "RAG quality controls",
            detail:
              "Chunking, hybrid retrieval, citations, corpus freshness, poison resistance",
          },
          {
            label: "Operability",
            detail:
              "Platform team can deploy, roll back, and extend without vendor presence",
          },
          {
            label: "Cost controls",
            detail:
              "Per-use-case caps, fallback routing, and budget alerts in the control plane",
          },
        ],
      },
      {
        type: "compare",
        title: "Design review vs. demo theater",
        leftTitle: "What we will not defend",
        leftItems: [
          "API-key sprawl and shadow model usage",
          "Agents with unrestricted tools and no audit trail",
          "Pilots with no path to shared platform services",
          "“Trust the model” without evaluation or policy",
          "Black-box stacks your SRE team cannot operate",
        ],
        rightTitle: "What we bring to your review",
        rightItems: [
          "Target architecture with trust boundaries drawn",
          "RAG, routing, MCP, and guardrail patterns you can fork",
          "LLMOps operating model: eval → release → observe → retrain",
          "Security & diligence materials for CISO alignment",
          "Reference systems like Agent Bank for multi-agent workflows",
        ],
      },
      {
        type: "chips",
        title: "Technology depth CTOs expect us to speak fluently",
        intro:
          "Appears where architecture demands it—not as keyword decoration.",
        groups: [
          {
            label: "Intelligence",
            items: [
              "Enterprise RAG",
              "Generative AI",
              "Agentic AI",
              "Multi-Agent Systems",
              "MCP",
              "Tool calling",
              "Context engineering",
            ],
          },
          {
            label: "Platform & delivery",
            items: [
              "LLMOps",
              "MLOps",
              "DevOps",
              "CloudOps",
              "GitOps",
              "Kubernetes",
              "Model serving",
              "Vector databases",
            ],
          },
          {
            label: "Control & scale",
            items: [
              "AI security",
              "AI governance",
              "Guardrails",
              "Observability",
              "Private cloud AI",
              "Hybrid AI",
              "VPC deployment",
            ],
          },
        ],
      },
      {
        type: "timeline",
        title: "AI lifecycle we operate against",
        intro: "From mandate to industrialized platform services.",
        items: [
          {
            phase: "Discover",
            title: "Constraints & risk class",
            copy: "Estate, data, compliance, and whether RAG, agents, classical ML, or none applies.",
          },
          {
            phase: "Architect",
            title: "Topology & controls",
            copy: "Trust boundaries, model gateway, retrieval fabric, MCP/tool policy, evaluation plan.",
          },
          {
            phase: "Prove",
            title: "Governed release",
            copy: "Production-constrained pilot with integrations, observability, and human gates.",
          },
          {
            phase: "Industrialize",
            title: "Platformize & hand over",
            copy: "Shared services, hardened LLMOps, IP transfer, enablement for your teams.",
          },
        ],
      },
      {
        type: "decisionMatrix",
        title: "Where CTOs typically go deeper",
        intro: "Jump to the lane that matches your current mandate.",
        columns: ["Need", "Motion", "Start"],
        rows: [
          {
            need: "Enterprise AI platform / RAG",
            a: "Governed retrieval, routing, policy",
            b: "Enterprise AI solution",
            c: "/solutions/enterprise-ai",
          },
          {
            need: "Multi-agent production systems",
            a: "Agents + MCP + HITL",
            b: "AI Agents + Agent Bank",
            c: "/solutions/ai-agents",
          },
          {
            need: "Security & diligence first",
            a: "CISO-ready materials",
            b: "Security FAQ + diligence pack",
            c: "/resources/security-faq",
          },
          {
            need: "Capacity without hiring lag",
            a: "Squads under your lead",
            b: "Dedicated AI squads",
            c: "/solutions/dedicated-ai-squads",
          },
        ],
      },
      {
        type: "midCta",
        eyebrow: "Technical discovery",
        title: "Book a technical discovery session",
        description:
          "Architecture, LLMOps, integration, and production readiness—optimized for CTOs and platform leads.",
        primary: {
          label: "Book a technical discovery session",
          href: "/contact?intent=strategy",
        },
        secondary: {
          label: "Talk to an Enterprise AI architect",
          href: "/contact?intent=architecture",
        },
      },
      {
        type: "steps",
        title: "How a technical engagement usually progresses",
        intro: "Architecture certainty early—so build spend is not wasted on the wrong shape.",
        items: [
          {
            step: "01",
            title: "Technical strategy call",
            copy: "Constraints, estate, risk class, and the right intelligence pattern.",
          },
          {
            step: "02",
            title: "Architecture spike",
            copy: "Threat model, data flows, model/tool choices, evaluation plan your teams can challenge.",
          },
          {
            step: "03",
            title: "Governed build",
            copy: "Pilot under production constraints—integrations and observability included.",
          },
          {
            step: "04",
            title: "Industrialize",
            copy: "Platformize shared services, harden LLMOps, transfer IP, enable your teams.",
          },
        ],
      },
      {
        type: "related",
        title: "Technical deep links",
        links: [
          { label: "Solutions", href: "/solutions" },
          { label: "Enterprise AI", href: "/solutions/enterprise-ai" },
          { label: "AI Agents", href: "/solutions/ai-agents" },
          { label: "Agent Bank", href: "/portfolio/agent-bank" },
          { label: "Security FAQ", href: "/resources/security-faq" },
          { label: "Diligence pack", href: "/resources/diligence-pack" },
          { label: "Contact", href: "/contact?intent=architecture" },
        ],
      },
      {
        type: "faq",
        title: "CTO diligence FAQs",
        items: [
          {
            q: "Do you fine-tune, or only prompt?",
            a: "Both when justified. Simplest approach that meets accuracy and latency bars first; fine-tune when evaluation proves the gap—and document the tradeoffs.",
          },
          {
            q: "How do you handle secrets, PII, and tool access for agents?",
            a: "Secrets in your vault patterns; tools scoped and logged; high-risk actions require human approval. Policy before autonomy.",
          },
          {
            q: "Can our platform team operate this after you leave?",
            a: "Yes—that is a design requirement. Handover includes architecture, evaluation suites, runbooks, and enablement.",
          },
          {
            q: "What clouds and model providers do you support?",
            a: "Your approved estate—AWS, Azure, GCP, and your model gateway choices. No proprietary runtime you cannot own.",
          },
          {
            q: "How does MCP fit your agent architecture?",
            a: "As a governed tool interface with scoped servers, auditability, and clear trust boundaries—not unrestricted tool sprawl.",
          },
        ],
      },
    ],
  },
  {
    slug: "head-of-ai",
    eyebrow: "For Heads of AI & enterprise architects",
    title: "Enterprise AI strategy with production-grade agent systems.",
    description:
      "You own the AI operating model: maturity, agent architecture, RAG and context engineering, evaluation, guardrails, governance, and the roadmap from pilots to industrialized Multi-Agent Systems.",
    primaryCta: {
      label: "Request an AI architecture assessment",
      href: "/contact?intent=assessment",
    },
    secondaryCta: {
      label: "Discuss Enterprise AI strategy",
      href: "/contact?intent=strategy",
    },
    metadata: {
      title: "AI for Heads of AI & enterprise architects | InheritX",
      description:
        "Enterprise AI strategy for Heads of AI: Multi-Agent Systems, MCP, RAG, context engineering, evaluation, governance, maturity models, and implementation roadmaps.",
    },
    proof: [
      { value: "Agents", label: "Multi-Agent Systems with HITL & policy" },
      { value: "RAG", label: "Context engineering & knowledge systems" },
      { value: "Eval", label: "Harnesses, golden sets, release gates" },
      { value: "Gov", label: "Guardrails, audit, operating model" },
    ],
    closing: {
      eyebrow: "AI leadership next step",
      title: "Speak with an AI solutions architect.",
      description:
        "Bring your maturity stage, agent ambitions, and governance constraints. Leave with a clearer architecture assessment and implementation path.",
      primary: {
        label: "Speak with an AI solutions architect",
        href: "/contact?intent=strategy",
      },
      secondary: {
        label: "Book an AI implementation workshop",
        href: "/contact?intent=workshop",
      },
    },
    blocks: [
      {
        type: "narrative",
        title: "What Heads of AI and enterprise architects optimize for",
        body: [
          "Your job is not to ship another chatbot. It is to make intelligence behave like infrastructure: measurable, governable, and extensible across the enterprise. That means maturity honesty, a real AI operating model, and agent architectures that survive contact with tools, data, and risk.",
          "InheritX partners with Heads of AI and enterprise architects on strategy and implementation—Enterprise RAG, Multi-Agent Systems, MCP, evaluation harnesses, guardrails, and lifecycle operations—delivered into private and hybrid estates with IP you own.",
          "This page is a working brief: maturity, architecture patterns, governance, evaluation, and a roadmap you can take into steering committees without translating vendor marketing into engineering reality.",
        ],
      },
      {
        type: "scoreChart",
        title: "AI capability readiness map",
        intro:
          "Where mature AI orgs invest depth—use this to spot gaps before funding agents.",
        note: "Illustrative target readiness. Assessment baselines your actual scores.",
        items: [
          { label: "Enterprise RAG", value: 92 },
          { label: "Agents / MCP", value: 88 },
          { label: "Evaluation", value: 94 },
          { label: "Guardrails", value: 90 },
          { label: "LLMOps", value: 91 },
          { label: "Governance", value: 89 },
        ],
      },
      {
        type: "maturity",
        title: "Enterprise AI maturity model",
        intro:
          "Place your organization honestly. Funding the wrong stage is the most expensive AI mistake.",
        stages: [
          {
            stage: "L1",
            title: "Ad hoc copilots",
            copy: "Prompt experiments and SaaS assistants without shared retrieval, eval, or policy.",
          },
          {
            stage: "L2",
            title: "Governed RAG",
            copy: "Curated corpora, hybrid retrieval, citations, evaluation suites, and access control.",
          },
          {
            stage: "L3",
            title: "Orchestrated agents",
            copy: "Tool calling / MCP, memory patterns, HITL for high-risk actions, observability.",
          },
          {
            stage: "L4",
            title: "Industrial Multi-Agent",
            copy: "Specialist agents, shared control plane, cost governance, continuous evaluation.",
          },
        ],
      },
      {
        type: "funnelChart",
        title: "From AI idea to production agent",
        intro:
          "How evaluation discipline filters work—most ideas should not become agents.",
        note: "Illustrative. Strong orgs intentionally narrow the funnel with eval and risk gates.",
        items: [
          {
            label: "Ideas / requests",
            value: 100,
            detail: "Business intake",
          },
          {
            label: "Architecture fit",
            value: 64,
            detail: "Pattern + data ready",
          },
          {
            label: "Eval-gated pilot",
            value: 38,
            detail: "Golden sets + HITL",
          },
          {
            label: "Production agent",
            value: 22,
            detail: "Observed + governed",
          },
        ],
      },
      {
        type: "lineChart",
        title: "Evaluation coverage as maturity rises",
        intro:
          "As you move from copilots to Multi-Agent Systems, offline and online evaluation coverage should rise—or autonomy is theater.",
        meta: "Eval coverage index",
        note: "Illustrative. Real coverage is measured against golden sets and production sampling.",
        labels: ["L1", "L2", "L3", "L4", "L4+"],
        series: [22, 48, 67, 84, 92],
      },
      {
        type: "layers",
        title: "Agent & context architecture map",
        intro:
          "How we typically decompose enterprise agent systems for reviewability.",
        layers: [
          {
            name: "Interaction & control",
            items: ["Channels", "Approvals", "Escalation", "Operator UX"],
          },
          {
            name: "Agent runtime",
            items: [
              "Planner / specialist agents",
              "Memory",
              "MCP tool servers",
              "Policy hooks",
            ],
          },
          {
            name: "Context engineering",
            items: [
              "Enterprise RAG",
              "Prompt lifecycle",
              "Structured outputs",
              "Knowledge graphs",
            ],
          },
          {
            name: "Evaluation & safety",
            items: [
              "Golden sets",
              "Offline + online eval",
              "Guardrails",
              "Red team loops",
            ],
          },
          {
            name: "Platform",
            items: [
              "Model gateway",
              "Vector stores",
              "Pipelines",
              "LLMOps / serving",
            ],
          },
        ],
      },
      {
        type: "midCta",
        eyebrow: "Architecture assessment",
        title: "Request an AI architecture assessment",
        description:
          "Maturity stage, agent readiness, RAG quality, evaluation gaps, and a prioritized implementation roadmap.",
        primary: {
          label: "Request an AI architecture assessment",
          href: "/contact?intent=assessment",
        },
        secondary: {
          label: "Discuss Enterprise AI strategy",
          href: "/contact?intent=strategy",
        },
      },
      {
        type: "bullets",
        title: "Operating-model questions we expect you to ask",
        intro:
          "If your partner cannot answer these, they are selling features—not an AI operating model.",
        items: [
          {
            title: "Who owns evaluation?",
            copy: "Offline suites, online sampling, ownership of golden sets, and release authority when quality regresses.",
          },
          {
            title: "How is context engineered?",
            copy: "Corpus governance, chunking strategy, hybrid retrieval, prompt versioning, and poison / drift resistance.",
          },
          {
            title: "Where does autonomy stop?",
            copy: "Tool scopes, MCP server boundaries, human-in-the-loop for money/risk, and audit completeness.",
          },
          {
            title: "How does capability compound?",
            copy: "Shared platform services, reusable agents, enablement, and IP that stays inside the enterprise.",
          },
        ],
      },
      {
        type: "risk",
        title: "AI risk matrix — architecture view",
        intro: "Common failure modes and how production-grade design responds.",
        rows: [
          {
            risk: "Hallucinated actions",
            without: "Free-form agents with weak tool contracts",
            with: "Typed tools, MCP scopes, validation, HITL on irreversible steps",
          },
          {
            risk: "Context rot",
            without: "Stale corpora and unversioned prompts",
            with: "Corpus SLAs, prompt lifecycle, eval on every change",
          },
          {
            risk: "Ungoverned autonomy",
            without: "Agents that can move money or PII freely",
            with: "Policy layers, approvals, and complete audit trails",
          },
          {
            risk: "Eval theater",
            without: "One-off accuracy slides with no regression suite",
            with: "CI evaluation gates and production sampling loops",
          },
        ],
      },
      {
        type: "chips",
        title: "Capability map — depth Heads of AI expect",
        groups: [
          {
            label: "Systems",
            items: [
              "Multi-Agent Systems",
              "MCP",
              "Tool calling",
              "Enterprise RAG",
              "Knowledge graphs",
              "Memory patterns",
            ],
          },
          {
            label: "Quality & control",
            items: [
              "AI evaluation",
              "Guardrails",
              "AI governance",
              "AI security",
              "Prompt engineering",
              "Context engineering",
            ],
          },
          {
            label: "Lifecycle",
            items: [
              "LLMOps",
              "MLOps",
              "Model orchestration",
              "AI monitoring",
              "Data pipelines",
              "Model serving",
            ],
          },
        ],
      },
      {
        type: "timeline",
        title: "Production rollout roadmap",
        intro: "A practical path from assessment to industrialized agents.",
        items: [
          {
            phase: "Assess",
            title: "Maturity & gaps",
            copy: "Architecture assessment: data, eval, governance, agent readiness, and quick wins vs. platform bets.",
          },
          {
            phase: "Foundation",
            title: "RAG + control plane",
            copy: "Retrieval fabric, model gateway, guardrails, observability, and prompt/eval lifecycle.",
          },
          {
            phase: "Agents",
            title: "Governed tool use",
            copy: "MCP/tool calling, HITL, specialist agents, and workflow automation on high-value processes.",
          },
          {
            phase: "Scale",
            title: "Multi-agent industrialization",
            copy: "Shared services, cost governance, continuous evaluation, enablement across BUs.",
          },
        ],
      },
      {
        type: "compare",
        title: "Strategy theater vs. AI operating model",
        leftTitle: "Avoid",
        leftItems: [
          "Roadmaps with no evaluation owner",
          "Agent demos without tool policy",
          "Prompt libraries with no versioning or tests",
          "Platform shopping before use-case clarity",
          "Governance as paperwork after incidents",
        ],
        rightTitle: "Build toward",
        rightItems: [
          "Documented maturity stage and investment thesis",
          "Agent architectures with explicit trust boundaries",
          "Prompt + corpus lifecycle tied to eval gates",
          "Use-case → pattern → platform sequencing",
          "Governance embedded in runtime and release",
        ],
      },
      {
        type: "decisionMatrix",
        title: "Implementation decision tree (simplified)",
        intro: "Choose the next motion based on maturity—not vendor excitement.",
        columns: ["If you are here…", "Do this next", "Primary artifact"],
        rows: [
          {
            need: "L1 ad hoc copilots",
            a: "Architecture assessment + RAG foundation",
            b: "Eval harness + corpus plan",
            c: "/contact?intent=assessment",
          },
          {
            need: "L2 governed RAG",
            a: "Agent / MCP pilot on one workflow",
            b: "HITL + tool policy design",
            c: "/solutions/ai-agents",
          },
          {
            need: "L3 orchestrated agents",
            a: "Industrialize + shared control plane",
            b: "LLMOps + cost governance",
            c: "/solutions/enterprise-ai",
          },
          {
            need: "Need a reference system",
            a: "Study Agent Bank patterns",
            b: "Multi-agent banking workflows",
            c: "/portfolio/agent-bank",
          },
        ],
      },
      {
        type: "midCta",
        eyebrow: "Implementation workshop",
        title: "Book an AI implementation workshop",
        description:
          "Working session for Heads of AI and architects: maturity, agent design, evaluation, and a 90-day implementation plan.",
        primary: {
          label: "Book an AI implementation workshop",
          href: "/contact?intent=workshop",
        },
        secondary: {
          label: "Speak with an AI solutions architect",
          href: "/contact?intent=strategy",
        },
      },
      {
        type: "steps",
        title: "How we typically engage AI leadership",
        items: [
          {
            step: "01",
            title: "Strategy conversation",
            copy: "Mandate, maturity, constraints, and whether agents are earned yet.",
          },
          {
            step: "02",
            title: "Architecture assessment",
            copy: "Gaps across RAG, agents, eval, governance, and platform readiness.",
          },
          {
            step: "03",
            title: "Implementation workshop",
            copy: "90-day plan, owners, success metrics, and risk controls.",
          },
          {
            step: "04",
            title: "Build & industrialize",
            copy: "Governed delivery with IP transfer and an operating model your team runs.",
          },
        ],
      },
      {
        type: "related",
        title: "Deep links for AI leaders",
        links: [
          { label: "AI Agents", href: "/solutions/ai-agents" },
          { label: "Enterprise AI", href: "/solutions/enterprise-ai" },
          { label: "Agent Bank", href: "/portfolio/agent-bank" },
          { label: "AI Consulting", href: "/solutions/ai-consulting" },
          { label: "Security FAQ", href: "/resources/security-faq" },
          { label: "Case studies", href: "/case-studies" },
          { label: "Contact", href: "/contact?intent=assessment" },
        ],
      },
      {
        type: "faq",
        title: "FAQs for Heads of AI & enterprise architects",
        items: [
          {
            q: "How do you approach Multi-Agent Systems responsibly?",
            a: "Specialist agents with clear contracts, shared memory carefully scoped, MCP/tool governance, and human approval for irreversible actions—autonomy is earned through evaluation.",
          },
          {
            q: "What is your stance on prompt engineering vs. context engineering?",
            a: "Prompts matter, but enterprise quality usually hinges on corpus design, retrieval, structured outputs, and eval—context engineering plus prompt lifecycle, not prompt folklore.",
          },
          {
            q: "Can you work inside our existing AI platform team?",
            a: "Yes. Many engagements are embedded with your architects and platform engineers—InheritX as acceleration and production hardening, not a parallel shadow org.",
          },
          {
            q: "How do you treat AI governance?",
            a: "As runtime and release controls—policy, audit, evaluation gates, and operating ownership—not a PDF after the fact.",
          },
          {
            q: "Where should we start if leadership wants agents tomorrow?",
            a: "Assess maturity honestly. If RAG, eval, and tool policy are weak, we stabilize foundations first—then agentize the highest-leverage workflow.",
          },
        ],
      },
    ],
  },
];

export function getPathPage(slug: string): PathPage | undefined {
  return pathPages.find((page) => page.slug === slug);
}

export const pathPageSlugs = pathPages.map((page) => page.slug);
