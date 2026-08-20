import { CTA_LABELS } from "@/data/cta/copy";
import { contactHref } from "@/data/cta/intents";

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
      eyebrow?: string;
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
      type: "snapshot";
      title: string;
      intro?: string;
      items: { label: string; value: string; copy: string }[];
    }
  | {
      type: "impactMatrix";
      title: string;
      intro?: string;
      insight?: string;
      note?: string;
      items: {
        title: string;
        copy: string;
        impact: "high" | "medium";
        effort: "low" | "high";
      }[];
    }
  | {
      type: "flow";
      title: string;
      intro?: string;
      insight?: string;
      note?: string;
      items: { step: string; title: string; copy: string }[];
    }
  | {
      type: "rankChart";
      title: string;
      intro?: string;
      insight?: string;
      note?: string;
      items: { label: string; value: number; detail: string }[];
    }
  | {
      type: "trendChart";
      title: string;
      intro?: string;
      insight?: string;
      note?: string;
      yLabel: string;
      labels: string[];
      series: number[];
    }
  | {
      type: "radarChart";
      title: string;
      intro?: string;
      insight?: string;
      note?: string;
      items: { label: string; value: number }[];
    }
  | {
      type: "stageFunnel";
      title: string;
      intro?: string;
      insight?: string;
      note?: string;
      items: { label: string; detail: string }[];
    }
  | {
      type: "proofCases";
      title: string;
      intro?: string;
      cases: {
        id: string;
        focus: "business" | "engineering" | "ai";
      }[];
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
  floatingCta: {
    teaser: string;
    label: string;
    href: string;
  };
  blocks: PathBlock[];
};

export const pathPages: PathPage[] = [
  {
    slug: "ceo",
    eyebrow: "For CEOs, founders & business owners",
    title: "Turn AI into a business advantage your board can fund.",
    description:
      "We help enterprises identify where AI creates P&L leverage, then design, build, and industrialize governed systems you own. Cost, speed, risk, and competitive position first. Technology second.",
    primaryCta: {
      label: CTA_LABELS.strategySession,
      href: contactHref("strategy"),
    },
    secondaryCta: {
      label: CTA_LABELS.seeProductionCases,
      href: "/case-studies",
    },
    metadata: {
      title: "AI for CEOs & business leaders | InheritX",
      description:
        "Board-ready enterprise AI for CEOs: where AI creates business leverage, how to invest first, a governed path to production, and full IP ownership.",
    },
    proof: [
      { value: "P&L", label: "KPIs tied to cost, speed, revenue & risk" },
      { value: "90d", label: "Typical path to a governed production system" },
      { value: "Owned", label: "Full IP transfer, no platform lock-in" },
      { value: "Honest", label: "We say no when AI is the wrong lever" },
    ],
    closing: {
      eyebrow: "Executive next step",
      title: "Let's build your AI roadmap.",
      description:
        "A focused strategy conversation on mandate, the first workflow worth funding, risk posture, and whether to pursue a workshop, assessment, or governed build.",
      primary: {
        label: CTA_LABELS.strategySession,
        href: contactHref("strategy"),
      },
      secondary: {
        label: CTA_LABELS.opportunityAssessment,
        href: contactHref("assessment"),
      },
    },
    floatingCta: {
      teaser: "30 minutes. One KPI. A clear go / no-go.",
      label: CTA_LABELS.strategySession,
      href: contactHref("strategy"),
    },
    blocks: [
      {
        type: "narrative",
        title: "What a CEO actually needs to decide",
        body: [
          "Most AI programs fail the board test for the same reason: the demo is impressive, but nobody owns the operating metric, the security posture, or the path past the pilot. Boards do not fund fluency. They fund durable capability that shows up in the P&L and the risk register.",
          "Why now: copilots are already inside the estate, shadow spend is accumulating, and competitors who industrialize governed workflows will lock in cost and cycle-time advantages that are hard to unwind. Waiting is also a decision, usually a more expensive one.",
          "InheritX is an AI-native enterprise partner. We help you identify, design, build, deploy, and scale AI systems that create measurable business impact, with private deployment and IP that stays with you. If AI is not the right lever, we will say so.",
        ],
      },
      {
        type: "snapshot",
        title: "What you should know in 30 seconds",
        intro:
          "Four signals that separate a fundable AI program from vendor theater.",
        items: [
          {
            label: "Business impact",
            value: "Named KPI",
            copy: "Cost-to-serve, cycle time, exception rate, revenue quality, or risk, chosen before architecture.",
          },
          {
            label: "How we work",
            value: "Governed path",
            copy: "Mandate → feasibility → production constraints → industrialize. Budget releases have exit criteria.",
          },
          {
            label: "What you own",
            value: "Your IP",
            copy: "Systems, agents, retrieval, and orchestration transfer to you. Capability is not rented indefinitely.",
          },
          {
            label: "What happens next",
            value: "One call",
            copy: "A strategy session to pressure-test the opportunity, or a clear no if AI is the wrong move.",
          },
        ],
      },
      {
        type: "proofCases",
        title: "Production proof, not a pitch deck",
        intro:
          "Published outcomes from systems already in production. These metrics belong to those engagements, they are not a forecast of yours.",
        cases: [
          { id: "heva", focus: "business" },
          { id: "agent-bank", focus: "business" },
        ],
      },
      {
        type: "impactMatrix",
        title: "Where AI creates the most business leverage",
        insight:
          "Fund high-impact, lower-complexity workflows first. Platform bets come second. Do not buy autonomy before the operating metric and data are real.",
        intro:
          "A decision map for where to invest first, not a forecast of your results. Categories reflect how enterprise AI programs typically concentrate value.",
        note: "Conceptual framework for briefing. Your sequence is set by data access, risk class, and the KPI you are willing to own. Not measured client statistics.",
        items: [
          {
            title: "Document-heavy operations",
            copy: "Clinical notes, claims, contracts, onboarding packs, high volume, repeatable structure, clear time-to-complete.",
            impact: "high",
            effort: "low",
          },
          {
            title: "Exception & triage workflows",
            copy: "Routing, first-pass review, and queue compression where humans currently batch-process the same pattern.",
            impact: "high",
            effort: "low",
          },
          {
            title: "Enterprise knowledge platform",
            copy: "Shared retrieval, citations, and access control so every BU is not rebuilding search from scratch.",
            impact: "high",
            effort: "high",
          },
          {
            title: "Multi-agent operations",
            copy: "Tool-using agents across core systems, with human gates on money, customers, and irreversible actions.",
            impact: "high",
            effort: "high",
          },
          {
            title: "Copilot overlays on existing SaaS",
            copy: "Useful for individuals. Rarely a board program unless tied to a named operating metric.",
            impact: "medium",
            effort: "low",
          },
          {
            title: "Ungoverned autonomy",
            copy: "Agents without evaluation, policy, or data foundations. High spend, weak P&L story. Do not fund first.",
            impact: "medium",
            effort: "high",
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
          "Named architects accountable from blueprint through handover",
          "Deployment in your estate with policy and audit trails",
          "Case-study-grade proof, then scaled capability across BUs",
          "Enablement so your teams own the system after handoff",
        ],
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
        type: "timeline",
        title: "AI investment roadmap - typical executive path",
        intro:
          "A briefing-friendly sequence. Actual calendars depend on data access, risk class, and estate readiness.",
        items: [
          {
            phase: "Week 0-2",
            title: "Mandate & KPI",
            copy: "Strategy session or executive workshop: confirm the workflow, board metric, and go / no-go on AI.",
          },
          {
            phase: "Week 2-6",
            title: "Architecture & risk",
            copy: "Target architecture, security posture, value case, and industrialization criteria.",
          },
          {
            phase: "Week 6-14",
            title: "Governed production",
            copy: "Ship under production constraints, integrations, evaluation, auditability, human gates.",
          },
          {
            phase: "Ongoing",
            title: "Industrialize",
            copy: "Scale across BUs, harden LLMOps, transfer IP, and enable internal ownership.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Decision signals CEOs use to filter partners",
        intro:
          "If a partner cannot answer these cleanly, the program will not survive diligence, or the first security review.",
        items: [
          {
            title: "One board-recognizable KPI",
            copy: "Cost-to-serve, cycle time, exception rate, revenue lift, or risk reduction, named before architecture. Not “engagement with the assistant.”",
          },
          {
            title: "A path past the pilot",
            copy: "Explicit scale criteria: accuracy bars, human gates, CISO sign-off, operating owner, and runbooks after go-live.",
          },
          {
            title: "Economics that survive procurement",
            copy: "Build vs. buy vs. embed framed honestly, including where SaaS copilots create shadow spend and where owned systems compound.",
          },
          {
            title: "IP and exit rights from day one",
            copy: "Models, agents, retrieval corpora, and orchestration transfer to you. Capability is not rented indefinitely.",
          },
        ],
      },
      {
        type: "midCta",
        eyebrow: "Executive next step",
        title: "Explore what AI could unlock in your business.",
        description:
          "A focused strategy session on mandate, the first workflow worth funding, and whether to pursue a workshop, assessment, or governed build.",
        primary: {
          label: CTA_LABELS.strategySession,
          href: contactHref("strategy"),
        },
        secondary: {
          label: CTA_LABELS.opportunityAssessment,
          href: contactHref("assessment"),
        },
      },
      {
        type: "decisionMatrix",
        title: "Executive decision matrix - where to start",
        intro: "Match urgency to motion. Do not start with a catalog tour.",
        columns: ["If this is true…", "Start here", "Primary proof"],
        rows: [
          {
            need: "Need proof before a board ask",
            a: "Case studies + strategy session",
            b: "Named outcomes & methodology",
            c: "/case-studies",
          },
          {
            need: "Need enterprise transformation partner",
            a: "AI Transformation program",
            b: "Value case → production systems",
            c: "/solutions/ai-transformation",
          },
          {
            need: "Need a governed build under your operating model",
            a: "Dedicated AI squads",
            b: "Architect-led delivery, IP you own",
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
        type: "related",
        title: "Useful next reads for business leaders",
        links: [
          { label: "Case Studies", href: "/case-studies" },
          { label: "AI Transformation", href: "/solutions/ai-transformation" },
          { label: "Why InheritX", href: "/company/why-inheritx" },
          { label: "IP Ownership", href: "/company/ip-ownership" },
          { label: "Agent Bank", href: "/portfolio/agent-bank" },
          { label: "Diligence Pack", href: "/resources/diligence-pack" },
          { label: CTA_LABELS.strategySession, href: contactHref("strategy") },
        ],
      },
      {
        type: "faq",
        title: "Executive FAQs",
        items: [
          {
            q: "How do we show the board progress in 90 days?",
            a: "Name one KPI, ship a governed production-constrained release against that KPI, and report accuracy, cost, risk controls, and operating ownership, not demo anecdotes.",
          },
          {
            q: "Will we own the IP?",
            a: "Yes. Engagements are structured for full IP transfer of systems built for you, agents, orchestration, fine-tunes, and integration code.",
          },
          {
            q: "What if AI is not the right answer?",
            a: "We will say so. A useful strategy session often ends with a clearer process or data decision, and no build.",
          },
          {
            q: "How do you work with our SI or cloud partner?",
            a: "As the AI systems partner alongside enterprise IT and cloud partners, not a rip-and-replace of trusted vendors.",
          },
          {
            q: "What does an executive workshop produce?",
            a: "Aligned mandate, KPI, risk class, investment shape, and a written next-step recommendation your steering group can act on.",
          },
          {
            q: "How does procurement typically start?",
            a: "A strategy session or opportunity assessment under NDA when required, then a scoped statement of work. Security questionnaires and the Diligence Pack are available before a master agreement.",
          },
          {
            q: "What does an AI opportunity assessment produce?",
            a: "A prioritized workflow, value hypothesis tied to a named KPI, risk class, and a go / no-go on whether AI is the right lever, without committing you to a build.",
          },
        ],
      },
    ],
  },
  {
    slug: "cto",
    eyebrow: "For CTOs, VP Engineering & platform leaders",
    title: "Build AI systems your enterprise can actually scale.",
    description:
      "Architecture, security, and handover, so production AI survives design review and still runs after we leave. Your estate. Your IP.",
    primaryCta: {
      label: CTA_LABELS.architectureAssessment,
      href: contactHref("assessment"),
    },
    secondaryCta: {
      label: CTA_LABELS.openSecurityFaq,
      href: "/resources/security-faq",
    },
    metadata: {
      title: "AI for CTOs & VP Engineering | InheritX",
      description:
        "Enterprise AI architecture for CTOs: deployment topology, security, evaluation, observability, and systems your platform team can operate.",
    },
    proof: [
      { value: "VPC", label: "Private / hybrid / sovereign deployment" },
      { value: "LLMOps", label: "Eval → release → observe → improve" },
      { value: "Secure", label: "Policy, audit, secrets, tool sandboxing" },
      { value: "Owned", label: "Code, weights, runbooks, your estate" },
    ],
    closing: {
      eyebrow: "Technical next step",
      title: "Discuss your AI architecture.",
      description:
        "Bring constraints, estate, and risk class. Leave with a clearer topology, evaluation plan, and go / no-go on the proposed shape.",
      primary: {
        label: CTA_LABELS.architectureAssessment,
        href: contactHref("assessment"),
      },
      secondary: {
        label: CTA_LABELS.openSecurityFaq,
        href: "/resources/security-faq",
      },
    },
    floatingCta: {
      teaser: "Bring constraints. Leave with a topology.",
      label: CTA_LABELS.architectureAssessment,
      href: contactHref("assessment"),
    },
    blocks: [
      {
        type: "narrative",
        title: "What CTOs evaluate before they trust a partner",
        body: [
          "The failure mode is familiar: a flashy prototype that cannot pass security review, has no evaluation regression suite, and cannot be operated by your platform team. Engineering leadership does not need more copilots. It needs systems that behave like infrastructure.",
          "InheritX designs and delivers enterprise AI platforms and agent systems in private and hybrid estates, with GitOps-friendly delivery, observability, cost controls, and runbooks your platform team can operate after handover.",
        ],
      },
      {
        type: "snapshot",
        title: "Technical credibility, scannable",
        intro:
          "What we expect to defend in your design review, without a fake scorecard.",
        items: [
          {
            label: "Architecture",
            value: "Reviewable",
            copy: "Trust boundaries, data flows, model gateway, and tool policy drawn before sprint zero.",
          },
          {
            label: "Release quality",
            value: "Eval-gated",
            copy: "Golden sets and regression suites as release blockers, not a one-off accuracy slide.",
          },
          {
            label: "Operations",
            value: "Handover",
            copy: "Your platform team can deploy, roll back, and extend without vendor presence.",
          },
          {
            label: "Control plane",
            value: "Your estate",
            copy: "IAM, secrets, VPC, cost caps, and audit trails in the environment you already run.",
          },
        ],
      },
      {
        type: "proofCases",
        title: "Production systems that survived engineering review",
        intro:
          "Published architecture and reliability outcomes, not a scored audit of your estate.",
        cases: [
          { id: "kavia-ai", focus: "engineering" },
          { id: "t2d2", focus: "engineering" },
        ],
      },
      {
        type: "flow",
        title: "Enterprise AI architecture we design against",
        insight:
          "Intelligence sits on a real data and control plane. Agents are an application layer, not a substitute for architecture.",
        intro:
          "A pressure-testable topology. We map your estate onto this before we propose build.",
        note: "Conceptual reference architecture, not a latency SLO, capacity plan, or measured benchmark.",
        items: [
          {
            step: "01",
            title: "Data sources",
            copy: "Systems of record, documents, events, and approved APIs, with residency and classification explicit.",
          },
          {
            step: "02",
            title: "Data & knowledge",
            copy: "Pipelines, corpora, vector/search fabric, and access control the rest of the stack can trust.",
          },
          {
            step: "03",
            title: "AI / ML services",
            copy: "RAG, routing, fine-tunes when earned, document intelligence, and model gateway policy.",
          },
          {
            step: "04",
            title: "Models",
            copy: "Your approved providers and serving path, Bedrock, Azure OpenAI, Vertex, or private vLLM.",
          },
          {
            step: "05",
            title: "Agents & applications",
            copy: "Orchestration, MCP/tool calling, HITL queues, and channels your users already work in.",
          },
          {
            step: "06",
            title: "Enterprise systems",
            copy: "ERP, CRM, core banking, clinical, and plant systems, integrations with scoped credentials.",
          },
          {
            step: "07",
            title: "Observe & govern",
            copy: "Tracing, eval, cost, audit, incident runbooks, and policy in runtime, not a PDF after the fact.",
          },
        ],
      },
      {
        type: "layers",
        title: "Enterprise AI reference stack",
        intro:
          "A pressure-testable layer model, not a product catalog. We map your estate onto this before we propose build.",
        layers: [
          {
            name: "Experience & channels",
            items: ["Apps", "Voice / real-time", "APIs", "Human approval queues"],
          },
          {
            name: "Agent & orchestration",
            items: [
              "Multi-Agent Systems",
              "MCP / tool calling",
              "LangGraph / LlamaIndex",
              "HITL gates",
            ],
          },
          {
            name: "Intelligence services",
            items: [
              "Enterprise RAG / AI Search",
              "Fine-tunes",
              "Document AI",
              "Guardrails",
            ],
          },
          {
            name: "Data & knowledge",
            items: [
              "Qdrant / pgvector / OpenSearch",
              "GraphRAG",
              "Pipelines",
              "Feature / corpus governance",
            ],
          },
          {
            name: "Platform & ops",
            items: [
              "vLLM / FastAPI serving",
              "MLflow + LLMOps",
              "OpenTelemetry",
              "GitOps / Argo CD",
            ],
          },
          {
            name: "Security & control plane",
            items: [
              "IAM / secrets",
              "Network & VPC",
              "Eval / red team",
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
          "Private cloud, VPC, hybrid, or sovereign, map trust boundaries, data flows, and serving topology before sprint zero.",
        primary: {
          label: CTA_LABELS.deploymentStrategy,
          href: contactHref("assessment"),
        },
        secondary: {
          label: CTA_LABELS.openSecurityFaq,
          href: "/resources/security-faq",
        },
      },
      {
        type: "checklist",
        title: "Production Readiness checklist",
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
            b: "Security FAQ + Diligence Pack",
            c: "/resources/security-faq",
          },
          {
            need: "Need production delivery without hiring lag",
            a: "Architect-led squads in your rituals",
            b: "Dedicated AI squads",
            c: "/solutions/dedicated-ai-squads",
          },
        ],
      },
      {
        type: "related",
        title: "Technical deep links",
        links: [
          { label: "Case Studies", href: "/case-studies" },
          { label: "Enterprise AI", href: "/solutions/enterprise-ai" },
          { label: "AI Agents", href: "/solutions/ai-agents" },
          { label: "Agent Bank", href: "/portfolio/agent-bank" },
          { label: "Security FAQ", href: "/resources/security-faq" },
          { label: "IP Ownership", href: "/company/ip-ownership" },
          { label: "Diligence Pack", href: "/resources/diligence-pack" },
          { label: CTA_LABELS.architectureAssessment, href: contactHref("assessment") },
        ],
      },
      {
        type: "faq",
        title: "CTO diligence FAQs",
        items: [
          {
            q: "Do you fine-tune, or only prompt?",
            a: "Both when justified. Simplest approach that meets accuracy and latency bars first; fine-tune when evaluation proves the gap, and document the tradeoffs.",
          },
          {
            q: "How do you handle secrets, PII, and tool access for agents?",
            a: "Secrets in your vault patterns; tools scoped and logged; high-risk actions require human approval. Policy before autonomy.",
          },
          {
            q: "Can our platform team operate this after you leave?",
            a: "Yes, that is a design requirement. Handover includes architecture, evaluation suites, runbooks, and enablement.",
          },
          {
            q: "What clouds and model providers do you support?",
            a: "Your approved estate, AWS, Azure, GCP, and your model gateway choices. No proprietary runtime you cannot own.",
          },
          {
            q: "How does MCP fit your agent architecture?",
            a: "As a governed tool interface with scoped servers, auditability, and clear trust boundaries, not unrestricted tool sprawl.",
          },
          {
            q: "How do GitOps, CloudOps, and LLMOps show up in delivery?",
            a: "GitOps for environment promotion (typically Argo CD on your cluster), CloudOps for VPC/IAM/cost controls in the estate you already run, and LLMOps for eval → release → observe → improve. They are operating disciplines, not a product SKU.",
          },
          {
            q: "Can you deploy private, hybrid, or sovereign?",
            a: "Yes. Topology is a design input: private cloud, VPC, hybrid, or sovereign paths with egress and residency explicit before sprint zero.",
          },
        ],
      },
    ],
  },
  {
    slug: "head-of-ai",
    eyebrow: "For Heads of AI, CAIOs & Enterprise Architects",
    title: "Connect enterprise architecture to production-grade intelligence.",
    description:
      "AI strategy, RAG, agents, evaluation, and governance, on the estate you already run. Domain architecture, integration, identity, and a build-vs-buy call that does not create a shadow platform.",
    primaryCta: {
      label: CTA_LABELS.architectureAssessment,
      href: contactHref("assessment"),
    },
    secondaryCta: {
      label: CTA_LABELS.strategyCall,
      href: contactHref("strategy"),
    },
    metadata: {
      title: "AI for Heads of AI & Enterprise Architects | InheritX",
      description:
        "Production AI for Heads of AI and Enterprise Architects: estate fit, RAG, Multi-Agent Systems, evaluation, identity, governance, and the path from experiments to industrialized intelligence.",
    },
    proof: [
      { value: "Agents", label: "Multi-Agent Systems with HITL & policy" },
      { value: "RAG", label: "Context engineering & knowledge systems" },
      { value: "Eval", label: "Harnesses, golden sets, release gates" },
      { value: "Gov", label: "Guardrails, audit, operating model" },
    ],
    closing: {
      eyebrow: "AI leadership next step",
      title: "Let's industrialize your AI operating model.",
      description:
        "Bring maturity stage, estate constraints, and agent ambitions. Leave with a clearer architecture assessment and a 90-day implementation path.",
      primary: {
        label: CTA_LABELS.architectureAssessment,
        href: contactHref("assessment"),
      },
      secondary: {
        label: CTA_LABELS.strategyCall,
        href: contactHref("strategy"),
      },
    },
    floatingCta: {
      teaser: "From experiments to a production operating model.",
      label: CTA_LABELS.assessmentShort,
      href: contactHref("assessment"),
    },
    blocks: [
      {
        type: "narrative",
        title: "What Heads of AI and Enterprise Architects decide together",
        body: [
          "Your job is not to ship another chatbot. It is to make intelligence behave like infrastructure: measurable, governable, and extensible across the estate you already run. That means maturity honesty, a real AI operating model, and agent architectures that survive contact with tools, data, identity, and risk.",
          "Enterprise Architects need the other half of that picture: domain and data architecture, application integration, API strategy, identity boundaries, deployment topology, and a build-vs-buy call that does not create a parallel shadow platform. InheritX connects those layers to production retrieval, multi-agent systems, evaluation, and guardrails, delivered into estates you own. Autonomy is earned through evaluation. It is not a demo setting.",
        ],
      },
      {
        type: "snapshot",
        title: "What both roles should know in 30 seconds",
        intro:
          "The difference between calling an LLM API and running production intelligence on an existing enterprise estate.",
        items: [
          {
            label: "Estate fit",
            value: "Your topology",
            copy: "Domain, data, APIs, and identity first. AI sits on the control plane you already operate, not beside it.",
          },
          {
            label: "Strategy",
            value: "Honest stage",
            copy: "Place the org on a maturity model before funding agents. Skipping stages is the expensive mistake.",
          },
          {
            label: "Quality",
            value: "Eval as OS",
            copy: "Golden sets, release gates, and production sampling. Coverage rises as autonomy rises.",
          },
          {
            label: "Control",
            value: "Runtime gov",
            copy: "IAM, tool scopes, HITL, audit, and policy in the path of execution, not a PDF after incidents.",
          },
        ],
      },
      {
        type: "proofCases",
        title: "Production AI architecture, already shipped",
        intro:
          "Published agent, RAG, and evaluation patterns, not a lab demo. Metrics belong to those engagements.",
        cases: [
          { id: "agent-bank", focus: "ai" },
          { id: "heva", focus: "ai" },
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
        type: "trendChart",
        title: "Eval rigor should rise with autonomy",
        insight:
          "If evaluation coverage stays flat while agents gain tools, autonomy is theater.",
        intro:
          "A teaching chart for steering committees, not a measured score of your org.",
        yLabel: "Eval rigor",
        note: "Conceptual relationship across maturity stages. Real coverage is measured against golden sets and production sampling.",
        labels: ["L1 Copilots", "L2 RAG", "L3 Agents", "L4 Multi-agent"],
        series: [22, 48, 72, 92],
      },
      {
        type: "layers",
        title: "Enterprise + AI architecture map",
        intro:
          "How we typically decompose the estate and the intelligence layer so Enterprise Architects and Heads of AI can review the same picture.",
        layers: [
          {
            name: "Experience & channels",
            items: ["Apps", "APIs", "Approvals", "Operator UX"],
          },
          {
            name: "Agent runtime",
            items: [
              "Planner / specialist agents",
              "Memory",
              "MCP / tool calling",
              "HITL gates",
            ],
          },
          {
            name: "Context & knowledge",
            items: [
              "Enterprise RAG / AI Search",
              "GraphRAG",
              "Corpus governance",
              "Knowledge graphs",
            ],
          },
          {
            name: "Application integration",
            items: [
              "Systems of record",
              "API strategy",
              "Event / batch paths",
              "Scoped credentials",
            ],
          },
          {
            name: "Identity & security",
            items: [
              "IAM / workload identity",
              "Secrets",
              "Network & VPC",
              "Audit trails",
            ],
          },
          {
            name: "Evaluation & governance",
            items: [
              "Golden sets",
              "Release gates",
              "Guardrails",
              "Architecture review",
            ],
          },
          {
            name: "Platform & observability",
            items: [
              "Model gateway",
              "LLMOps / MLOps",
              "OpenTelemetry",
              "Cost controls",
            ],
          },
        ],
      },
      {
        type: "midCta",
        eyebrow: "Architecture assessment",
        title: "Request an AI architecture assessment",
        description:
          "Estate fit, maturity stage, RAG quality, evaluation gaps, identity boundaries, and a prioritized implementation roadmap.",
        primary: {
          label: CTA_LABELS.architectureAssessment,
          href: contactHref("assessment"),
        },
        secondary: {
          label: CTA_LABELS.discussEnterpriseAi,
          href: contactHref("strategy"),
        },
      },
      {
        type: "bullets",
        title: "Questions we expect AI leaders and Enterprise Architects to ask",
        intro:
          "If a partner cannot answer these, they are selling features, not an operating model that fits the estate.",
        items: [
          {
            title: "How does this sit on the existing estate?",
            copy: "Domain architecture, systems of record, data classification, and whether AI consumes shared platform services or creates a parallel stack.",
          },
          {
            title: "Who owns evaluation?",
            copy: "Offline suites, online sampling, ownership of golden sets, and release authority when quality regresses.",
          },
          {
            title: "Identity, APIs, and security boundaries",
            copy: "Workload identity, scoped credentials, API strategy, and network/VPC trust boundaries for tools and retrieval.",
          },
          {
            title: "Build vs. buy vs. embed",
            copy: "Where a SaaS copilot is enough, where an owned control plane compounds, and where embedding into existing platforms wins.",
          },
          {
            title: "Where does autonomy stop?",
            copy: "Tool scopes, MCP server boundaries, human-in-the-loop for money/risk, and audit completeness.",
          },
          {
            title: "How does capability compound?",
            copy: "Shared platform services, reusable agents, enablement for platform teams, and IP that stays inside the enterprise.",
          },
        ],
      },
      {
        type: "risk",
        title: "AI risk matrix - architecture view",
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
        type: "timeline",
        title: "Production rollout roadmap",
        intro: "A practical path from assessment to industrialized agents on the existing estate.",
        items: [
          {
            phase: "Assess",
            title: "Estate, maturity & gaps",
            copy: "Architecture assessment: domain/data fit, identity, eval, governance, agent readiness, and quick wins vs. platform bets.",
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
          "AI on the existing estate, identity, APIs, and trust boundaries drawn",
          "Prompt + corpus lifecycle tied to eval gates",
          "Use-case → pattern → platform sequencing",
          "Governance embedded in runtime and release",
        ],
      },
      {
        type: "decisionMatrix",
        title: "Implementation decision tree (simplified)",
        intro: "Choose the next motion based on maturity and estate fit, not vendor excitement.",
        columns: ["If you are here…", "Do this next", "Primary artifact"],
        rows: [
          {
            need: "Existing estate, unclear AI fit",
            a: "Architecture assessment",
            b: "Domain, data, IAM, integration map",
            c: "/contact?intent=assessment",
          },
          {
            need: "L1 ad hoc copilots",
            a: "RAG foundation + eval harness",
            b: "Corpus plan + release gates",
            c: "/solutions/enterprise-ai",
          },
          {
            need: "Build vs. buy for the AI platform",
            a: "Enterprise AI strategy discussion",
            b: "Control plane vs. SaaS copilot",
            c: "/contact?intent=strategy",
          },
          {
            need: "Need a reference system",
            a: "Study Agent Bank patterns",
            b: "Multi-agent + MCP + HITL",
            c: "/portfolio/agent-bank",
          },
        ],
      },
      {
        type: "related",
        title: "Deep links for AI leaders and architects",
        links: [
          { label: "Case Studies", href: "/case-studies" },
          { label: "AI Agents", href: "/solutions/ai-agents" },
          { label: "Enterprise AI", href: "/solutions/enterprise-ai" },
          { label: "Agent Bank", href: "/portfolio/agent-bank" },
          { label: "AI Consulting", href: "/solutions/ai-consulting" },
          { label: "Security FAQ", href: "/resources/security-faq" },
          { label: "IP Ownership", href: "/company/ip-ownership" },
          {
            label: CTA_LABELS.architectureAssessment,
            href: contactHref("assessment"),
          },
        ],
      },
      {
        type: "faq",
        title: "FAQs for Heads of AI & Enterprise Architects",
        items: [
          {
            q: "How do you approach Multi-Agent Systems responsibly?",
            a: "Specialist agents with clear contracts, shared memory carefully scoped, MCP/tool governance, and human approval for irreversible actions, autonomy is earned through evaluation.",
          },
          {
            q: "What is your stance on prompt engineering vs. context engineering?",
            a: "Prompts matter, but enterprise quality usually hinges on corpus design, retrieval, structured outputs, and eval, context engineering plus prompt lifecycle, not prompt folklore.",
          },
          {
            q: "How do you fit AI into an existing enterprise estate?",
            a: "We map domain architecture, data classification, application integration, API strategy, and identity boundaries first, then place RAG, agents, and the model gateway on that control plane. We do not stand up a parallel shadow platform.",
          },
          {
            q: "Build vs. buy for the AI platform?",
            a: "SaaS copilots for individual productivity; owned retrieval, evaluation, and tool governance where capability must compound and survive exit. The assessment makes that split explicit before spend.",
          },
          {
            q: "Can you work inside our existing AI platform team?",
            a: "Yes. Many engagements are embedded with your architects and platform engineers, InheritX as acceleration and production hardening, not a parallel shadow org.",
          },
          {
            q: "How do you treat AI governance?",
            a: "As runtime and release controls, policy, audit, evaluation gates, and operating ownership, not a PDF after the fact.",
          },
          {
            q: "Where should we start if leadership wants agents tomorrow?",
            a: "Assess maturity and estate fit honestly. If RAG, eval, identity, and tool policy are weak, we stabilize foundations first, then agentize the highest-leverage workflow.",
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
