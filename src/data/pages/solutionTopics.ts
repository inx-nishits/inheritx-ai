import { contactHref } from "@/data/cta/intents";
import type { TopicPage } from "./topic";

export type { TopicLink, TopicSection, TopicPage } from "./topic";

export const solutionTopicSlugs = [
  "enterprise-ai",
  "ai-agents",
  "ai-automation",
  "generative-ai",
  "computer-vision",
  "ai-transformation",
  "ai-consulting",
  "hire-ai-engineers",
  "dedicated-ai-squads",
  "voice-ai",
  "document-ai",
] as const;

export const solutionTopics: TopicPage[] = [
  {
    slug: "enterprise-ai",
    eyebrow: "Enterprise AI",
    title: "Private AI platforms that transform how enterprises operate.",
    description:
      "We build and hand over AI/ML systems—governed retrieval, fine-tuning, model endpoints, prediction, and policy controls inside your VPC. Your data, your models, your IP. Not a rental of someone else’s platform.",
    primaryCta: { label: "Discuss this capability", href: contactHref("strategy") },
    secondaryCta: { label: "View AI portfolio", href: "/portfolio" },
    layout: "capability",
    sections: [
      {
        type: "proof",
        items: [
          { value: "Private", label: "Runs in your VPC or sovereign cloud" },
          { value: "Governed", label: "RBAC, audit trails, data residency" },
          { value: "Composable", label: "Shared services across BUs" },
          { value: "Owned", label: "Full IP transfer on delivery" },
        ],
      },
      {
        type: "narrative",
        title: "Intelligence as infrastructure, not a sidecar",
        body: [
          "Most enterprises accumulate disconnected copilots, vendor sandboxes, and shadow API keys. The result is duplicated spend, inconsistent policy enforcement, and no durable path from pilot to production.",
          "InheritX builds enterprise AI platforms as shared infrastructure: a governed layer for retrieval, orchestration, model routing, and observability that business units consume through approved patterns—not ad hoc integrations.",
          "The platform is designed for CIO and CISO review from day one: identity-bound access, lineage for every inference, and deployment topologies that respect your existing network and data-classification boundaries.",
        ],
      },
      {
        type: "bullets",
        title: "Platform capabilities leaders expect",
        intro:
          "Each component ships with operational runbooks—not demo scripts—so platform teams can sustain the estate after handoff.",
        items: [
          {
            title: "Unified retrieval fabric",
            copy: "Hybrid search across documents, structured stores, and APIs with chunking, re-ranking, and citation metadata tuned to your content types.",
          },
          {
            title: "Model gateway & routing",
            copy: "Centralized endpoints for hosted and fine-tuned models with cost caps, fallback policies, and latency-aware routing per use case.",
          },
          {
            title: "Policy enforcement layer",
            copy: "Pre- and post-generation guardrails aligned to your classification schema, prohibited topics, and PII handling rules.",
          },
          {
            title: "Evaluation & drift monitoring",
            copy: "Regression suites, golden datasets, and production sampling so quality regressions surface before users report them.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Capability lines this platform carries",
        intro:
          "Named so procurement and architecture reviews can find them—delivered as shared services, not a second product catalog.",
        items: [
          {
            title: "AI Search / Enterprise Search",
            copy: "Hybrid retrieval (keyword + vector), re-ranking, and citation-backed answers over role-scoped corpora—the RFQ label for governed RAG.",
          },
          {
            title: "Document AI / IDP",
            copy: "Ingestion, classification, extraction, and reconciliation for contracts, claims, clinical packets, and back-office packets—with human review on low confidence.",
          },
          {
            title: "GraphRAG & knowledge graphs",
            copy: "Entity- and relationship-aware retrieval when chunked search is not enough—wired to the same policy, citation, and audit path.",
          },
          {
            title: "Fine-tuning & custom models",
            copy: "Adapters and supervised fine-tunes when prompting and retrieval plateau—with evaluation gates, rollback, and IP transfer on the artifacts we train for you.",
          },
        ],
      },
      {
        type: "split",
        title: "Build vs. buy vs. platform",
        leftTitle: "What we avoid",
        leftBody: [
          "Per-department SaaS copilots with no shared governance",
          "Black-box APIs that cannot be audited or redeployed",
          "Pilot stacks that require a full rewrite to scale",
        ],
        rightTitle: "What we deliver",
        rightItems: [
          "Reference architecture aligned to your cloud landing zone",
          "Shared services catalog for approved AI patterns",
          "Runbooks for LLMOps, incident response, and model updates",
          "Clear ownership boundaries between platform and product teams",
        ],
      },
      {
        type: "matrix",
        title: "When an enterprise platform is the right move",
        intro: "Use this lens with your architecture board—not as a sales checklist.",
        rows: [
          {
            need: "Multiple BUs need similar RAG and generation patterns",
            approach: "Shared retrieval and gateway services with tenant isolation",
          },
          {
            need: "Regulators or internal audit require inference traceability",
            approach: "Centralized logging, citation stores, and approval workflows",
          },
          {
            need: "Model strategy spans open, hosted, and fine-tuned options",
            approach: "Routing layer with evaluation gates before promotion",
          },
          {
            need: "Security wants one choke point for AI egress",
            approach: "Policy proxy with DLP integration and role-scoped keys",
          },
        ],
      },
      {
        type: "related",
        title: "Adjacent capabilities",
        links: [
          { label: "Document AI / IDP", href: "/solutions/document-ai" },
          { label: "Generative AI applications", href: "/solutions/generative-ai" },
          { label: "AI Agents", href: "/solutions/ai-agents" },
          { label: "AI consulting & architecture", href: "/solutions/ai-consulting" },
          { label: "Case Studies", href: "/case-studies" },
        ],
      },
      {
        type: "faq",
        title: "Enterprise AI platform FAQ",
        items: [
          {
            q: "Do you require a specific cloud provider?",
            a: "No. We align to your existing estate—AWS, Azure, GCP, or private cloud—and use your approved IaC and identity patterns.",
          },
          {
            q: "Can we start with one business unit and expand?",
            a: "Yes. We sequence a foundational platform slice first, then onboard additional domains through the shared services catalog.",
          },
          {
            q: "Who operates the platform after launch?",
            a: "We transfer runbooks, monitoring, and code ownership to your platform or SRE teams. Embedded support is available during stabilization.",
          },
          {
            q: "How do you handle sensitive data classes?",
            a: "Data stays in approved stores; models run in scoped environments with classification-aware retrieval and redaction policies.",
          },
          {
            q: "Is enterprise search different from RAG?",
            a: "RAG is the architecture. AI Search is how buyers usually name the product: hybrid retrieval, access control, citations, and an operator experience over your corpus.",
          },
        ],
      },
    ],
    metadata: {
      title: "Enterprise AI platforms — InheritX",
      description:
        "Private, governed enterprise AI platforms—AI Search, Document AI, GraphRAG, fine-tuning, model routing, and observability inside your cloud estate.",
    },
  },
  {
    slug: "ai-agents",
    eyebrow: "Agentic AI",
    title: "Autonomous agents that execute enterprise work—not chat demos.",
    description:
      "Autonomous agents with memory, planning, MCP, and tool calling. Multi-agent networks assign work, peer-review outputs, and escalate exceptions—fully instrumented, with humans on consequential decisions.",
    primaryCta: { label: "Discuss this capability", href: contactHref("strategy") },
    secondaryCta: { label: "See Agent Bank", href: "/portfolio/agent-bank" },
    layout: "capability",
    sections: [
      {
        type: "narrative",
        title: "From chat interfaces to accountable action",
        body: [
          "Enterprise leaders do not need another chatbot. They need systems that intake requests, gather context, call internal APIs via MCP and tool contracts, draft outputs, and route exceptions—under explicit policy and with a record of every step.",
          "InheritX designs agentic architectures around your operational reality: which tools exist, which actions require human approval, and where autonomy stops. Agents are observable workers—not opaque oracles.",
          "Multi-agent patterns decompose complex workflows—research, triage, fulfillment—into specialized roles with shared memory, structured handoffs, and evaluation harnesses that catch regressions before production traffic does.",
        ],
      },
      {
        type: "bullets",
        title: "Agentic AI principles we enforce",
        items: [
          {
            title: "MCP and tool contracts, not prompt hope",
            copy: "Every external action maps to typed tool schemas—MCP-ready where appropriate—with timeouts, idempotency rules, and explicit failure modes.",
          },
          {
            title: "Human gates on consequential actions",
            copy: "Payments, policy changes, customer commitments, and data exports pause for approval with full context attached.",
          },
          {
            title: "Memory and traceable reasoning",
            copy: "Persistent memory, step-level logs, tool I/O capture, and replay tooling so operators can diagnose misfires without guesswork.",
          },
          {
            title: "Cost and loop controls",
            copy: "Iteration budgets, model tiering, and circuit breakers prevent runaway token spend on stuck agent loops.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Agent surfaces beyond text chat",
        intro:
          "Same control plane—typed tools, HITL, and traces—applied to channels and runtimes enterprises now ask for by name.",
        items: [
          {
            title: "Voice / realtime conversational AI",
            copy: "Telephony and realtime assistants with barge-in, latency budgets, and the same tool contracts and approval gates as text agents.",
          },
          {
            title: "Computer-use and browser agents",
            copy: "Bounded UI automation where APIs do not exist—scoped credentials, step limits, and human publish on irreversible actions.",
          },
          {
            title: "Realtime multimodal agents",
            copy: "Vision, voice, and tools in one loop for ops floors and service desks—still evaluated and logged like any other worker.",
          },
          {
            title: "Long-running agent workflows",
            copy: "Checkpointed cases that outlive a single model call—durable orchestration (e.g. Temporal / Prefect) with human review stages.",
          },
        ],
      },
      {
        type: "steps",
        title: "Agent delivery sequence",
        intro: "We ship narrow, high-value agent lanes before expanding orchestration breadth.",
        items: [
          {
            step: "01",
            title: "Workflow decomposition",
            copy: "Map the human process today—inputs, decisions, systems touched, and exception paths—before naming any agent roles.",
          },
          {
            step: "02",
            title: "Tooling & permission model",
            copy: "Wire MCP-ready or native integrations with least-privilege credentials scoped to each agent persona.",
          },
          {
            step: "03",
            title: "Single-agent pilot",
            copy: "Prove one lane end-to-end with evaluation datasets drawn from real cases, including edge and failure scenarios.",
          },
          {
            step: "04",
            title: "Multi-agent orchestration",
            copy: "Introduce supervisor and specialist agents with shared state, conflict resolution, and escalation to human queues.",
          },
          {
            step: "05",
            title: "Production hardening",
            copy: "Load testing, observability dashboards, on-call runbooks, and continuous eval in CI before full rollout.",
          },
        ],
      },
      {
        type: "proof",
        items: [
          { value: "Observable", label: "Every tool call logged & replayable" },
          { value: "Bounded", label: "Autonomy limits by action class" },
          { value: "Integrated", label: "ERP, CRM, ticketing, custom APIs" },
          { value: "Evaluated", label: "Golden paths before each release" },
        ],
      },
      {
        type: "matrix",
        title: "Agent pattern selection",
        rows: [
          {
            need: "High-volume triage with clear routing rules",
            approach: "Supervisor agent + specialist workers with queue handoff",
          },
          {
            need: "Research across multiple internal sources",
            approach: "Planner agent with retrieval sub-agents and citation assembly",
          },
          {
            need: "Long-running case work with state",
            approach: "Stateful agent with checkpointed memory and human review stages",
          },
          {
            need: "Customer-facing actions with compliance risk",
            approach: "Draft-only agent with mandatory human publish step",
          },
        ],
      },
      {
        type: "related",
        title: "Explore further",
        links: [
          { label: "Voice / Realtime AI", href: "/solutions/voice-ai" },
          { label: "AI Automation", href: "/solutions/ai-automation" },
          { label: "Enterprise AI platform", href: "/solutions/enterprise-ai" },
          { label: "Agent Bank showcase", href: "/portfolio/agent-bank" },
          { label: "Dedicated AI Squads", href: "/solutions/dedicated-ai-squads" },
        ],
      },
      {
        type: "faq",
        title: "AI agents FAQ",
        items: [
          {
            q: "How is this different from RPA with an LLM wrapper?",
            a: "Agents reason over unstructured context and adapt within policy bounds; we still integrate with deterministic automation where reliability demands it.",
          },
          {
            q: "Can agents act on our legacy systems?",
            a: "Yes, via APIs, message buses, or controlled UI automation—scoped by tool contracts and approval rules you define.",
          },
          {
            q: "What happens when an agent is wrong?",
            a: "Exception queues, rollback hooks, and eval alerts limit blast radius; high-risk paths never auto-commit without human sign-off.",
          },
          {
            q: "Do you build voice or only text agents?",
            a: "Voice and realtime channels use the same agent runtime, tool policy, and audit trail as text. We add them when the workflow actually needs a phone or live audio path—not as a demo overlay.",
          },
        ],
      },
    ],
    metadata: {
      title: "AI Agents & Multi-Agent Systems — InheritX",
      description:
        "Enterprise agent systems—text, voice/realtime, computer-use, and multimodal—with MCP, observability, and human gates built in.",
    },
  },
  {
    slug: "ai-automation",
    eyebrow: "AI Automation",
    title: "Intelligent workflow automation woven into enterprise systems.",
    description:
      "Embed AI into intake, routing, documentation, and exception handling—using n8n, agents, and system integrations connected to ERP and CRM with evaluation loops and cost discipline.",
    primaryCta: { label: "Discuss this capability", href: contactHref("strategy") },
    secondaryCta: { label: "Browse case studies", href: "/case-studies" },
    layout: "capability",
    sections: [
      {
        type: "bullets",
        title: "Automation surfaces we industrialize",
        intro:
          "We target workflows where manual handoffs create latency, inconsistency, or compliance exposure—not tasks that merely look automatable in a demo.",
        items: [
          {
            title: "Intelligent intake & classification",
            copy: "Emails, forms, and documents parsed into structured cases with confidence scores routing to straight-through or review paths.",
          },
          {
            title: "Dynamic routing & prioritization",
            copy: "Queue logic that weighs SLA, skill match, risk tier, and backlog state—adjustable by operations leadership.",
          },
          {
            title: "Document generation & reconciliation",
            copy: "Draft contracts, summaries, and reconciliation memos sourced from system-of-record data with citation back to fields.",
          },
          {
            title: "Exception orchestration",
            copy: "When automation stalls, cases land in specialist queues with full context, suggested next actions, and audit history.",
          },
        ],
      },
      {
        type: "narrative",
        title: "Automation that respects the backbone systems",
        body: [
          "Enterprise automation fails when AI sits outside the transactional core—creating shadow processes that diverge from ERP truth or bypass approval hierarchies.",
          "InheritX designs automation fabric that reads and writes through governed integration points: event streams, approved APIs, and idempotent job patterns your integration team can support.",
          "Intelligence augments deterministic steps—classification, extraction, summarization—while critical financial and policy commits remain under existing controls unless you explicitly expand autonomy.",
        ],
      },
      {
        type: "split",
        title: "Where AI adds leverage in workflows",
        leftTitle: "Deterministic backbone",
        leftBody: [
          "Transaction posting and ledger updates",
          "Identity, authorization, and segregation of duties",
          "Scheduled batch jobs with fixed business rules",
        ],
        rightTitle: "AI-accelerated layers",
        rightItems: [
          "Unstructured document understanding",
          "Natural-language case summarization for reviewers",
          "Anomaly surfacing before hard-rule triggers fire",
          "Adaptive routing when backlog or risk profile shifts",
        ],
      },
      {
        type: "steps",
        title: "Automation rollout model",
        items: [
          {
            step: "01",
            title: "Process instrumentation",
            copy: "Baseline cycle times, error rates, and rework drivers on the target workflow before introducing AI steps.",
          },
          {
            step: "02",
            title: "Integration mapping",
            copy: "Document source and sink systems, rate limits, and failure semantics for each touchpoint in the flow.",
          },
          {
            step: "03",
            title: "Shadow mode",
            copy: "Run AI suggestions alongside human decisions; measure agreement and catch systematic extraction gaps.",
          },
          {
            step: "04",
            title: "Controlled auto-path",
            copy: "Enable straight-through processing only for cases above confidence and policy thresholds.",
          },
          {
            step: "05",
            title: "Continuous improvement",
            copy: "Sample production outcomes, refresh training data, and tune routing as volume and edge cases grow.",
          },
        ],
      },
      {
        type: "proof",
        items: [
          { value: "Integrated", label: "ERP, CRM, ITSM, custom APIs" },
          { value: "Measured", label: "KPIs tied to workflow SLAs" },
          { value: "Resilient", label: "Graceful degradation to manual queues" },
          { value: "Auditable", label: "Decision rationale retained per case" },
        ],
      },
      {
        type: "related",
        title: "Related solutions",
        links: [
          { label: "AI Agents", href: "/solutions/ai-agents" },
          { label: "Computer Vision", href: "/solutions/computer-vision" },
          { label: "AI Transformation", href: "/solutions/ai-transformation" },
          { label: "Industries we serve", href: "/industries" },
          { label: "Portfolio", href: "/portfolio" },
        ],
      },
      {
        type: "faq",
        title: "AI automation FAQ",
        items: [
          {
            q: "Will this replace our iPaaS or BPM platform?",
            a: "Usually no—we extend orchestration you already operate, adding AI steps where unstructured data or judgment-heavy prep work slows the flow.",
          },
          {
            q: "How do you prevent silent data drift?",
            a: "Confidence monitoring, periodic human audits on auto-processed cases, and alerts when extraction fields fall below agreed thresholds.",
          },
          {
            q: "Can we automate regulated workflows?",
            a: "Yes, with classification-aware handling, retained evidence, and human approval on commits that touch compliance boundaries.",
          },
        ],
      },
    ],
    metadata: {
      title: "AI Workflow Automation — InheritX",
      description:
        "Enterprise intelligent automation integrated with ERP, CRM, and mission systems—classification, routing, documentation, and exception handling.",
    },
  },
  {
    slug: "generative-ai",
    eyebrow: "Generative AI",
    title: "Secure LLM applications built for enterprise constraints.",
    description:
      "Context-aware RAG with vector stores, semantic search, prompt engineering, evaluation harnesses, and custom guardrails—so answers stay grounded in your business context. Copilots and content systems you own in your private cloud.",
    primaryCta: { label: "Discuss this capability", href: contactHref("strategy") },
    secondaryCta: { label: "Explore enterprise AI platform", href: "/solutions/enterprise-ai" },
    layout: "capability",
    sections: [
      {
        type: "proof",
        items: [
          { value: "Grounded", label: "Retrieval with source citations" },
          { value: "Scoped", label: "Role-aware knowledge boundaries" },
          { value: "Tested", label: "Eval suites before each release" },
          { value: "Deployable", label: "Private cloud or VPC options" },
        ],
      },
      {
        type: "split",
        title: "Enterprise gen AI vs. consumer chat",
        leftTitle: "Consumer patterns we reject",
        leftBody: [
          "Open web retrieval on proprietary questions",
          "No attribution for generated claims",
          "Single shared prompt with no tenant isolation",
        ],
        rightTitle: "Patterns we implement",
        rightItems: [
          "Corpus scoped to approved internal sources",
          "Inline citations and refusal when evidence is thin",
          "Per-tenant or per-BU index partitions",
          "Red-team and jailbreak testing in CI pipelines",
        ],
      },
      {
        type: "bullets",
        title: "Application archetypes",
        intro: "Each archetype ships with threat modeling appropriate to its audience and data sensitivity.",
        items: [
          {
            title: "Knowledge copilots",
            copy: "Policy, product, and operational Q&A with hierarchical access—employees see only corpora their role entitles them to.",
          },
          {
            title: "Authoring assistants",
            copy: "Draft generation for proposals, clinical notes, or support replies with template guardrails and mandatory review queues.",
          },
          {
            title: "Conversational service layers",
            copy: "Customer-facing assistants that escalate to humans with full transcript, retrieved sources, and suggested resolution paths.",
          },
          {
            title: "Code copilots & AI SDLC",
            copy: "Context-aware helpers bound to approved repos and schemas—review, test, and change workflows with secrets scanning and output filtering. Not an unbounded coding chatbot.",
          },
        ],
      },
      {
        type: "bullets",
        title: "What we put in the release path",
        intro:
          "Model choice is one decision. Production quality is a system of contracts, evals, and gates.",
        items: [
          {
            title: "Evaluation harnesses",
            copy: "Golden sets, faithfulness checks, and regression suites in CI—so a prompt or index change cannot ship on vibes.",
          },
          {
            title: "Red-team and jailbreak testing",
            copy: "Prompt-injection, data-exfil, and policy-bypass cases run before customer-facing or regulated releases.",
          },
          {
            title: "Prompt & retrieval contracts",
            copy: "Versioned prompts, chunking, and re-rankers with rollback—the same discipline as application code.",
          },
          {
            title: "Fine-tunes when RAG plateaus",
            copy: "Adapters and supervised fine-tunes only after retrieval and prompting are exhausted—with data governance and a rollback plan.",
          },
        ],
      },
      {
        type: "narrative",
        title: "Quality is a systems problem—not a model pick",
        body: [
          "Leaders often anchor generative AI discussions on model selection. In production, answer quality depends on chunking strategy, metadata richness, re-rankers, prompt contracts, and feedback loops from real users.",
          "InheritX engineers the full stack: ingestion pipelines that respect document lifecycle, retrieval graphs that mirror how experts search, and evaluation harnesses that score faithfulness—not just fluency.",
          "We align with legal and compliance early on retention policies, training boundaries, and logging so generative features launch with documented controls—not retrofitted disclaimers.",
        ],
      },
      {
        type: "matrix",
        title: "Matching architecture to risk profile",
        rows: [
          {
            need: "Internal productivity on non-sensitive docs",
            approach: "Shared RAG service with SSO and standard DLP scanning",
          },
          {
            need: "Regulated content with external visibility",
            approach: "Human-in-the-loop publish, immutable citation store, extended logging",
          },
          {
            need: "Low-latency customer chat at scale",
            approach: "Cached retrieval, model tiering, and graceful handoff to live agents",
          },
          {
            need: "Multi-language enterprise knowledge",
            approach: "Language-aware indexing with cross-lingual retrieval validation",
          },
        ],
      },
      {
        type: "faq",
        title: "Generative AI FAQ",
        items: [
          {
            q: "Do you fine-tune foundation models?",
            a: "When retrieval and prompting plateau, we evaluate supervised fine-tuning or adapters—always with clear data governance and rollback plans.",
          },
          {
            q: "How do you reduce hallucinations?",
            a: "Grounding, citation requirements, confidence thresholds, and automated faithfulness checks against retrieved passages.",
          },
          {
            q: "Can we use models we already license?",
            a: "Yes. We integrate your existing enterprise agreements through a gateway that centralizes keys, routing, and usage telemetry.",
          },
          {
            q: "Do you build enterprise code copilots?",
            a: "Yes—scoped to approved repositories, identity, and change policy. We treat AI SDLC as a governed assistant in your delivery path, not an open internet coder.",
          },
        ],
      },
      {
        type: "related",
        title: "Continue exploring",
        links: [
          { label: "Enterprise AI platform", href: "/solutions/enterprise-ai" },
          { label: "AI Consulting", href: "/solutions/ai-consulting" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Contact", href: contactHref("strategy") },
        ],
      },
    ],
    metadata: {
      title: "Enterprise Generative AI — InheritX",
      description:
        "Secure LLM applications for the enterprise—RAG copilots, code copilots / AI SDLC, evaluation harnesses, and private deployment.",
    },
  },
  {
    slug: "computer-vision",
    eyebrow: "Computer Vision",
    title: "Perception systems for the physical operating world.",
    description:
      "Custom CNNs and Vision Transformer models trained on your domain data for real-time detection, anomaly finding, and classification—including edge deployments when data cannot leave the site.",
    primaryCta: { label: "Discuss this capability", href: contactHref("strategy") },
    secondaryCta: { label: "Manufacturing & logistics", href: "/industries" },
    layout: "capability",
    sections: [
      {
        type: "narrative",
        title: "Vision that survives the factory floor",
        body: [
          "Computer Vision pilots often fail in production because training data never captured glare, motion blur, line changeovers, or the long tail of defect morphology.",
          "InheritX builds perception pipelines with field validation loops: capture protocols, labeling governance, and retraining triggers tied to operator feedback—not static model drops.",
          "We design for deployment reality—GPU budgets at the edge, latency budgets on high-speed lines, and integration paths into quality hold systems and maintenance ticketing.",
        ],
      },
      {
        type: "proof",
        items: [
          { value: "Edge-ready", label: "On-line inference within SLA" },
          { value: "Explainable", label: "Heatmaps & review UI for QA" },
          { value: "Connected", label: "MES, SCADA, CMMS hooks" },
          { value: "Maintainable", label: "Retrain paths when lines shift" },
        ],
      },
      {
        type: "steps",
        title: "Vision system lifecycle",
        intro: "From feasibility through sustained operation on live lines.",
        items: [
          {
            step: "01",
            title: "Feasibility & optics",
            copy: "Camera placement, lighting, and frame-rate study against target defect classes and line speed constraints.",
          },
          {
            step: "02",
            title: "Labeled corpus build",
            copy: "Structured capture across shifts and SKUs with inter-annotator agreement checks and versioned datasets.",
          },
          {
            step: "03",
            title: "Model & edge packaging",
            copy: "Train, quantize, and benchmark on target hardware; define fallback behavior when inference confidence drops.",
          },
          {
            step: "04",
            title: "Line integration",
            copy: "Reject mechanisms, HMI alerts, and data feeds to quality dashboards—coordinated with controls engineers.",
          },
          {
            step: "05",
            title: "Monitoring & refresh",
            copy: "Track precision/recall drift, sample false positives for relabeling, and schedule retrains after material or tooling changes.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Use cases we deliver",
        items: [
          {
            title: "Inline quality inspection",
            copy: "Micro-defect, assembly completeness, and packaging verification with tunable thresholds per SKU.",
          },
          {
            title: "Safety & compliance monitoring",
            copy: "PPE detection, restricted-zone intrusion, and procedural adherence alerts with clip retention policies.",
          },
          {
            title: "Inventory & yard awareness",
            copy: "Slot occupancy, damage assessment, and asset identification fused with WMS events.",
          },
          {
            title: "Document and label capture",
            copy: "High-speed OCR and barcode validation on inbound logistics streams with exception routing.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Edge and on-device AI",
        intro:
          "When frames cannot leave the line, we package perception to run next to the camera—not only in a cloud GPU pool.",
        items: [
          {
            title: "On-device / line-side inference",
            copy: "Latency-bounded models on edge GPUs or industrial PCs, with fallback and hold logic when confidence drops.",
          },
          {
            title: "Model packaging for the floor",
            copy: "Export and optimize for the hardware you already run (ONNX / TensorRT-class paths) inside your patch and rollback process.",
          },
          {
            title: "Labeling and retraining loops",
            copy: "Operator overrides feed a governed labeling queue—synthetic or sampled data only where it improves the long tail, not as a standalone product.",
          },
          {
            title: "Vision stack we actually use",
            copy: "PyTorch training, OpenCV capture pipelines, and detector families such as YOLO or ViT—chosen for the defect class and SLA, not a logo wall.",
          },
        ],
      },
      {
        type: "split",
        title: "Edge vs. cloud placement",
        leftTitle: "Edge inference",
        leftBody: [
          "Sub-second decisions on high-throughput lines",
          "Bandwidth-constrained or air-gapped sites",
          "Deterministic actuation tied to PLCs",
        ],
        rightTitle: "Cloud aggregation",
        rightItems: [
          "Cross-site model training and benchmarking",
          "Long-horizon analytics on inspection trends",
          "Centralized retraining pipelines with federated upload",
          "Executive dashboards on quality and downtime drivers",
        ],
      },
      {
        type: "faq",
        title: "Computer Vision FAQ",
        items: [
          {
            q: "Do you supply camera hardware?",
            a: "We specify requirements and work with your preferred vendors; integration and model delivery are our core scope.",
          },
          {
            q: "How do operators trust reject decisions?",
            a: "Review UIs show evidence overlays, support quick override, and feed corrections back into the training queue.",
          },
          {
            q: "Can vision models coexist with existing AOI systems?",
            a: "Yes—we often augment legacy inspection with AI on defect classes rules miss, sharing outputs into the same quality workflow.",
          },
          {
            q: "Is edge AI a separate product?",
            a: "No. Edge is a deployment topology for the same vision system—used when data residency, bandwidth, or line latency requires on-device inference.",
          },
        ],
      },
      {
        type: "related",
        title: "Related offerings",
        links: [
          { label: "AI Automation", href: "/solutions/ai-automation" },
          { label: "Dedicated AI Squads", href: "/solutions/dedicated-ai-squads" },
          { label: "Portfolio", href: "/portfolio" },
          { label: "Case Studies", href: "/case-studies" },
        ],
      },
    ],
    metadata: {
      title: "Enterprise Computer Vision — InheritX",
      description:
        "Production computer vision for inspection, safety, and logistics—edge / on-device inference, MES integration, and retraining loops.",
    },
  },
  {
    slug: "ai-transformation",
    eyebrow: "AI Transformation",
    title: "From executive mandate to industrialized AI capability.",
    description:
      "Run structured transformation programs across AI/ML, Agentic AI, and AI DevOps—align leadership, stand up architecture, deliver governed pilots, and embed LLMOps so AI scales beyond innovation labs.",
    primaryCta: { label: "Discuss this capability", href: contactHref("strategy") },
    secondaryCta: { label: "AI Consulting", href: "/solutions/ai-consulting" },
    layout: "engagement",
    sections: [
      {
        type: "steps",
        title: "Transformation waves",
        intro:
          "Programs typically span multiple waves—each with board-visible outcomes and explicit go/no-go gates.",
        items: [
          {
            step: "01",
            title: "Mandate & portfolio shaping",
            copy: "Executive workshops to prioritize use cases by value, feasibility, and risk—avoiding unfocused pilot sprawl.",
          },
          {
            step: "02",
            title: "Foundation & guardrails",
            copy: "Data, identity, and platform prerequisites plus AI policy aligned with legal, security, and procurement.",
          },
          {
            step: "03",
            title: "Governed pilot delivery",
            copy: "Two to three production-grade capabilities with KPIs, not slide-deck experiments.",
          },
          {
            step: "04",
            title: "Industrialization",
            copy: "Shared services, playbooks, and training so business units replicate patterns without reinventing architecture.",
          },
          {
            step: "05",
            title: "Operating model handoff",
            copy: "Clear RACI between central platform, domain product teams, and vendor partners; metrics cadence for leadership.",
          },
        ],
      },
      {
        type: "narrative",
        title: "Transformation that outlasts the steering committee",
        body: [
          "Many AI programs stall after an initial burst of executive attention—when pilots cannot migrate to shared infrastructure or business owners lack funding models for sustainment.",
          "InheritX runs transformation as a delivery program, not a strategy deck. We pair transformation leads with architects and engineers who ship the first industrialized capabilities while documenting the path for wave two.",
          "Success is measured by capabilities in production, adoption by business operators, and a governance rhythm your CIO can defend—not by workshop attendance.",
        ],
      },
      {
        type: "matrix",
        title: "Signals you need a transformation program",
        rows: [
          {
            need: "Board or CEO mandate with ambiguous execution ownership",
            approach: "Program office with sequenced waves and executive reporting cadence",
          },
          {
            need: "Duplicated pilots across BUs with incompatible stacks",
            approach: "Portfolio rationalization and shared platform investment case",
          },
          {
            need: "Legal or risk blocking deployment at scale",
            approach: "Policy framework, approved patterns, and exemplar production releases",
          },
          {
            need: "Talent gaps blocking migration from lab to line",
            approach: "Enablement tracks plus embedded squads during industrialization",
          },
        ],
      },
      {
        type: "bullets",
        title: "Program deliverables",
        items: [
          {
            title: "AI opportunity portfolio",
            copy: "Ranked backlog with value hypotheses, dependency maps, and kill criteria for underperforming bets.",
          },
          {
            title: "Target reference architecture",
            copy: "Platform, data, and integration blueprint approved by enterprise architecture and security.",
          },
          {
            title: "Production pilot capabilities",
            copy: "Shipped systems with operational runbooks—not prototypes awaiting a future hardening phase.",
          },
          {
            title: "Enablement & change kit",
            copy: "Role-based training, communication templates, and success metrics for business sponsors.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Controls we industrialize with the program",
        intro:
          "Transformation without eval, security, and promotion gates recreates lab risk at enterprise scale.",
        items: [
          {
            title: "Eval, safety, and red team gates",
            copy: "Golden sets and adversarial tests at each wave go/no-go—so autonomy is earned, not assumed after a pilot demo.",
          },
          {
            title: "AI security in the control plane",
            copy: "Prompt-injection, data-exfiltration, and model-threat cases mapped into identity, DLP, and tool policy—not treated as generic AppSec later.",
          },
          {
            title: "LLMOps promotion path",
            copy: "Eval → release → observe → retrain, with cost caps and rollback, so wave-two teams inherit an operating rhythm.",
          },
          {
            title: "Governance cadence",
            copy: "Policy, RACI, and audit evidence your CIO can defend. Detailed control design lives with consulting and the AI Governance resource.",
          },
        ],
      },
      {
        type: "proof",
        items: [
          { value: "Aligned", label: "Executive & domain sponsor rhythm" },
          { value: "Sequenced", label: "Wave-based funding & scope" },
          { value: "Governed", label: "Risk gates at each wave" },
          { value: "Sustained", label: "Handoff to internal owners" },
        ],
      },
      {
        type: "related",
        title: "Engagement options",
        links: [
          { label: "AI Consulting", href: "/solutions/ai-consulting" },
          { label: "Enterprise AI platform", href: "/solutions/enterprise-ai" },
          { label: "AI Governance", href: "/resources/ai-governance" },
          { label: "Dedicated AI Squads", href: "/solutions/dedicated-ai-squads" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Contact", href: contactHref("strategy") },
        ],
      },
      {
        type: "faq",
        title: "AI transformation FAQ",
        items: [
          {
            q: "How long does a typical program run?",
            a: "Initial waves often span ninety days to two quarters for foundation plus first production capabilities; multi-wave programs extend based on portfolio size.",
          },
          {
            q: "Do you work with existing SI or consulting partners?",
            a: "Yes. We define clear boundaries—architecture and delivery of AI capabilities versus broader ERP or change programs you already have underway.",
          },
          {
            q: "What if our first pilots failed?",
            a: "We audit technical debt and governance gaps, salvage reusable components, and re-sequence with stricter evaluation gates before scaling spend.",
          },
        ],
      },
    ],
    metadata: {
      title: "AI transformation Programs — InheritX",
      description:
        "Enterprise AI transformation from strategy through industrialized capability—eval and security gates, governed pilots, platform foundation, and operating model design.",
    },
  },
  {
    slug: "ai-consulting",
    eyebrow: "AI Consulting",
    title: "Architecture, governance, and roadmap design for AI at scale.",
    description:
      "Engage senior architects for board-ready blueprints—data readiness, model strategy, LLMOps posture, security controls, and sequenced investment before major build spend.",
    primaryCta: { label: "Discuss this capability", href: contactHref("strategy") },
    secondaryCta: { label: "Start transformation program", href: "/solutions/ai-transformation" },
    layout: "engagement",
    sections: [
      {
        type: "matrix",
        title: "Consulting entry points",
        intro: "Engagements are scoped to decisions you need to make now—not open-ended advisory retainers.",
        rows: [
          {
            need: "Board asks for an AI strategy with defensible architecture",
            approach: "Executive briefing plus target-state blueprint and investment sequence",
          },
          {
            need: "Security review blocking generative AI rollout",
            approach: "Threat model, control matrix, and approved deployment patterns",
          },
          {
            need: "Vendor proposals with conflicting technical claims",
            approach: "Independent architecture assessment and build-vs-buy recommendation",
          },
          {
            need: "M&A or platform consolidation affecting AI assets",
            approach: "Due diligence on models, data rights, and integration risk",
          },
        ],
      },
      {
        type: "narrative",
        title: "Decisions worth getting right before build",
        body: [
          "Enterprise AI failures are often architectural: retrieval without lineage, agents without permission models, or model choices that ignore data residency and cost at scale.",
          "InheritX consulting engagements produce artifacts your CTO, CISO, and enterprise architecture forum can act on—reference diagrams, control mappings, and phased roadmaps tied to measurable outcomes.",
          "We stay technology-agnostic where appropriate, recommending patterns that fit your estate rather than defaulting to a single vendor stack or open-source religion.",
        ],
      },
      {
        type: "bullets",
        title: "Typical engagement outputs",
        items: [
          {
            title: "AI reference architecture",
            copy: "Layered view of data, models, orchestration, integration, and observability with non-functional requirements explicit.",
          },
          {
            title: "Data & readiness assessment",
            copy: "Corpus inventory, quality gaps, and ingestion priorities ranked by impact on planned use cases.",
          },
          {
            title: "Model & LLMOps strategy",
            copy: "Guidance on hosted vs. self-managed models, fine-tuning triggers, evaluation standards, and promotion gates.",
          },
          {
            title: "Governance & operating model",
            copy: "RACI for platform vs. product teams, policy templates, and vendor evaluation criteria.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Risk programs we design before scale",
        intro:
          "Named for buyers who search these as workstreams—not a parallel consulting brand.",
        items: [
          {
            title: "AI eval, safety, and red team",
            copy: "Golden sets, offline/online eval, and adversarial testing so quality and abuse cases are evidence—not a slide on guardrails.",
          },
          {
            title: "AI security (model threat)",
            copy: "Prompt injection, data exfiltration, tool abuse, and model-supply risk mapped to identity, DLP, and logging—distinct from classic AppSec checklists.",
          },
          {
            title: "Responsible AI operating model",
            copy: "Policy, human gates, and audit evidence. Implementation detail sits in the AI Governance resource; consulting produces the RACI and control map.",
          },
          {
            title: "Build-vs-buy for eval and safety tooling",
            copy: "When to use Langfuse / LangSmith-class observability versus in-estate harnesses—chosen against your data-residency and SRE constraints.",
          },
        ],
      },
      {
        type: "split",
        title: "Consulting vs. delivery",
        leftTitle: "Consulting scope",
        leftBody: [
          "Architecture and roadmap artifacts",
          "Security and compliance alignment",
          "Vendor and build-vs-buy analysis",
          "Executive and board-ready narratives",
        ],
        rightTitle: "When to add delivery",
        rightItems: [
          "Reference implementations to validate architecture choices",
          "Pilot capabilities that de-risk the roadmap",
          "Embedded squads during platform stand-up",
          "Knowledge transfer through paired engineering",
        ],
      },
      {
        type: "steps",
        title: "Engagement flow",
        items: [
          {
            step: "01",
            title: "Stakeholder alignment",
            copy: "Interviews with technology, security, legal, and domain leaders to surface constraints and success criteria.",
          },
          {
            step: "02",
            title: "Current-state assessment",
            copy: "Review existing pilots, data assets, integration landscape, and policy gaps.",
          },
          {
            step: "03",
            title: "Target architecture & roadmap",
            copy: "Draft and iterate in working sessions with your architecture board.",
          },
          {
            step: "04",
            title: "Executive readout",
            copy: "Decision-ready package with sequenced investments, risks, and recommended next engagement.",
          },
        ],
      },
      {
        type: "faq",
        title: "AI consulting FAQ",
        items: [
          {
            q: "How long is a typical consulting engagement?",
            a: "Most architecture and roadmap engagements run two to six weeks depending on stakeholder breadth and existing documentation.",
          },
          {
            q: "Will you recommend we build everything in-house?",
            a: "No. We map options—build, buy, hybrid—and articulate trade-offs on control, speed, and total cost of ownership for your context.",
          },
          {
            q: "Can consulting transition into implementation?",
            a: "Yes. Many clients proceed to platform build, agent delivery, or squad embeds using the same team for continuity.",
          },
          {
            q: "Is AI Governance a separate product?",
            a: "No. Governance is the control design for production AI. We publish the pattern as a resource and produce the operating model in consulting—then enforce it in delivery.",
          },
        ],
      },
      {
        type: "related",
        title: "Next steps",
        links: [
          { label: "AI Transformation", href: "/solutions/ai-transformation" },
          { label: "Enterprise AI", href: "/solutions/enterprise-ai" },
          { label: "AI Governance", href: "/resources/ai-governance" },
          { label: "Embedded AI Engineering", href: "/solutions/hire-ai-engineers" },
          { label: "Industries", href: "/industries" },
        ],
      },
    ],
    metadata: {
      title: "AI consulting & Architecture — InheritX",
      description:
        "Enterprise AI consulting—reference architecture, eval and red team programs, AI security, LLMOps, and sequenced roadmaps for CTOs and CIOs.",
    },
  },
  {
    slug: "hire-ai-engineers",
    eyebrow: "Embedded AI Engineering",
    title: "Embedded AI specialists who ship under your standards.",
    description:
      "Senior ML, LLM, and agentic engineers who join your delivery system—under your architecture, repos, and controls.",
    primaryCta: { label: "Discuss this capability", href: contactHref("strategy") },
    secondaryCta: { label: "Compare dedicated AI squads", href: "/solutions/dedicated-ai-squads" },
    layout: "engagement",
    sections: [
      {
        type: "bullets",
        title: "Roles we embed",
        intro:
          "Profiles are matched to your stack and delivery phase—not generic full-stack generalists relabeled as AI.",
        items: [
          {
            title: "ML & LLM engineers",
            copy: "Retrieval pipelines, prompt systems, fine-tuning, and evaluation harnesses integrated with your CI/CD.",
          },
          {
            title: "Agent & orchestration engineers",
            copy: "Tool integration, multi-agent coordination, observability, and human-in-the-loop workflow wiring.",
          },
          {
            title: "ML platform & LLMOps engineers",
            copy: "Model serving, feature stores, monitoring, and cost governance on your cloud accounts.",
          },
          {
            title: "Applied research engineers",
            copy: "Feasibility spikes, benchmark design, and prototype-to-production paths for novel perception or reasoning tasks.",
          },
        ],
      },
      {
        type: "proof",
        items: [
          { value: "Embedded", label: "Your tools, repos, and rituals" },
          { value: "Senior", label: "Production AI experience required" },
          { value: "Accountable", label: "Outcomes tied to your backlog" },
          { value: "Transferable", label: "Knowledge stays when we roll off" },
        ],
      },
      {
        type: "narrative",
        title: "Capacity without staff-aug theater",
        body: [
          "Traditional staff augmentation optimizes for headcount and billable hours—not for merged pull requests and production incidents resolved.",
          "InheritX embeds engineers as contributors to your teams: they join standups, adhere to your branching strategy, and document decisions in your wikis. Success is measured by shipped capabilities and reduced bus factor on critical AI components.",
          "Engagements include explicit knowledge-transfer expectations so internal hires or existing staff can assume ownership as capacity scales.",
        ],
      },
      {
        type: "steps",
        title: "Embed onboarding",
        items: [
          {
            step: "01",
            title: "Scope & profile definition",
            copy: "Align on skills, clearance or compliance needs, and the backlog items engineers will own in the first sprint.",
          },
          {
            step: "02",
            title: "Environment access",
            copy: "Provision identities, repos, and data sandboxes under your security process—no shadow environments.",
          },
          {
            step: "03",
            title: "Pairing period",
            copy: "Initial weeks paired with your tech leads on architecture norms, review standards, and deployment paths.",
          },
          {
            step: "04",
            title: "Sustained delivery",
            copy: "Embedded engineers operate as team members with regular performance check-ins against agreed outcomes.",
          },
        ],
      },
      {
        type: "matrix",
        title: "When embeds fit best",
        rows: [
          {
            need: "Backlog exceeds internal AI bench strength",
            approach: "Targeted senior embeds on highest-risk components",
          },
          {
            need: "Hiring cycles too slow for committed roadmap dates",
            approach: "Time-boxed specialist capacity against a committed delivery date",
          },
          {
            need: "Specialist skill for a bounded phase (e.g., eval framework)",
            approach: "Time-boxed embed with explicit deliverable definition",
          },
          {
            need: "Upskill internal team through paired delivery",
            approach: "Embed plus rotation of your engineers through AI workstreams",
          },
        ],
      },
      {
        type: "related",
        title: "Alternatives & complements",
        links: [
          { label: "Dedicated AI Squads", href: "/solutions/dedicated-ai-squads" },
          { label: "AI Agents", href: "/solutions/ai-agents" },
          { label: "Generative AI", href: "/solutions/generative-ai" },
          { label: "Contact", href: contactHref("strategy") },
        ],
      },
      {
        type: "faq",
        title: "Embedded AI Engineering FAQ",
        items: [
          {
            q: "When should we NOT hire embeds first?",
            a: "When the KPI, architecture standards, or security path are still undefined. Start with AI consulting & Architecture, then embed once the backlog and guardrails are clear.",
          },
          {
            q: "How is this different from Dedicated AI Squads?",
            a: "Embeds join your existing teams and rituals. Squads are cross-functional pods that own a capability end-to-end with InheritX delivery leadership.",
          },
          {
            q: "Is this staff augmentation?",
            a: "No. Embeds are scoped to architecture, evaluation, and production outcomes under your standards—with explicit knowledge transfer. Success is shipped capability, not billable headcount.",
          },
          {
            q: "Do engineers work on-site or remote?",
            a: "We match your policy—onsite, hybrid, or remote—with time-zone overlap agreed upfront.",
          },
          {
            q: "What happens at the end of an embed?",
            a: "Knowledge transfer is part of the engagement: runbooks, pairing, and ownership of critical AI components stay with your team.",
          },
        ],
      },
    ],
    metadata: {
      title: "Embedded AI Engineering — InheritX",
      description:
        "Embedded senior AI, ML, and agentic engineers for enterprise teams—shipping in your repos and standards with explicit knowledge transfer.",
    },
  },
  {
    slug: "dedicated-ai-squads",
    eyebrow: "Dedicated AI Squads",
    title: "Cross-functional pods that own a capability to production.",
    description:
      "Stand up dedicated squads—ML, LLMOps, platform, and product delivery— chartered to deliver a defined AI capability from discovery through production operations.",
    primaryCta: { label: "Discuss this capability", href: contactHref("strategy") },
    secondaryCta: { label: "View portfolio", href: "/portfolio" },
    layout: "engagement",
    sections: [
      {
        type: "split",
        title: "Squad composition",
        leftTitle: "Core pod roles",
        leftBody: [
          "Product-minded tech lead owning backlog and architecture",
          "ML / LLM engineers for model and retrieval work",
          "Platform engineer for deployment, observability, and cost",
          "Delivery lead coordinating stakeholders and release cadence",
        ],
        rightTitle: "Extended as needed",
        rightItems: [
          "UX for operator and reviewer interfaces",
          "Data engineer for ingestion and pipeline hardening",
          "Security liaison for control validation",
          "Domain SME hours from your business owners",
        ],
      },
      {
        type: "steps",
        title: "Squad operating rhythm",
        intro: "Pods run as product teams—not project teams that dissolve after a milestone demo.",
        items: [
          {
            step: "01",
            title: "Charter & success metrics",
            copy: "Define the capability boundary, KPIs, and release milestones with your executive sponsor.",
          },
          {
            step: "02",
            title: "Discovery sprint",
            copy: "Validate feasibility, integration points, and risk profile before committing to build scope.",
          },
          {
            step: "03",
            title: "Incremental releases",
            copy: "Ship thin vertical slices to production environments with eval gates between expansions.",
          },
          {
            step: "04",
            title: "Stabilization & handoff",
            copy: "Runbooks, on-call playbooks, and paired transition to your internal owners or embeds.",
          },
        ],
      },
      {
        type: "narrative",
        title: "Ownership beats handoff documents",
        body: [
          "Project-based AI delivery often ends with a knowledge dump and a team disbanded—leaving operations to inherit a system they did not shape.",
          "Dedicated AI Squads stay accountable through production stabilization. The same engineers who designed retrieval also tune alerts, respond to early incidents, and refine evaluation suites based on live feedback.",
          "Squads integrate with your governance forums but maintain velocity through a clear charter: one capability, one backlog, one release train.",
        ],
      },
      {
        type: "bullets",
        title: "Ideal squad missions",
        items: [
          {
            title: "Greenfield agent platform",
            copy: "First multi-agent workflow for a domain—intake through fulfillment with human gates and audit.",
          },
          {
            title: "Enterprise copilot launch",
            copy: "RAG application with ingestion, access control, and adoption program for a business function.",
          },
          {
            title: "Vision system on a production line",
            copy: "End-to-end inspection capability including edge deployment and QA reviewer tooling.",
          },
          {
            title: "Automation fabric for a process tower",
            copy: "AI-augmented workflow across systems of record with exception management.",
          },
        ],
      },
      {
        type: "proof",
        items: [
          { value: "End-to-end", label: "Discovery → production ops" },
          { value: "Cross-functional", label: "ML, platform, product combined" },
          { value: "Aligned", label: "Charter tied to business KPIs" },
          { value: "Handoff-ready", label: "Runbooks & paired transition" },
        ],
      },
      {
        type: "faq",
        title: "Dedicated AI Squads FAQ",
        items: [
          {
            q: "How is a squad different from hiring individual engineers?",
            a: "Squads include delivery leadership and a balanced skill mix to own outcomes—not just staff a backlog item.",
          },
          {
            q: "Who prioritizes the squad backlog?",
            a: "Your product or domain sponsor, with the squad tech lead facilitating trade-offs on scope, risk, and dependencies.",
          },
          {
            q: "What happens after the capability is stable?",
            a: "We transition to your internal team through documentation, paired ops, and optional embed support during ramp-down.",
          },
        ],
      },
      {
        type: "related",
        title: "Related paths",
        links: [
          { label: "Embedded AI Engineering", href: "/solutions/hire-ai-engineers" },
          { label: "AI Transformation", href: "/solutions/ai-transformation" },
          { label: "AI Agents", href: "/solutions/ai-agents" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Contact", href: contactHref("strategy") },
        ],
      },
    ],
    metadata: {
      title: "Dedicated AI Squads — InheritX",
      description:
        "Cross-functional AI delivery pods owning enterprise capabilities from discovery to production—ML, LLMOps, platform, and product in one charter.",
    },
  },
  {
    slug: "voice-ai",
    eyebrow: "Voice AI",
    title: "Realtime conversational AI on the same agent control plane.",
    description:
      "Telephony and live-audio assistants with barge-in, latency budgets, and the same MCP tools, human gates, and audit trail as text agents—not a separate chatbot stack.",
    primaryCta: { label: "Discuss this capability", href: contactHref("strategy") },
    secondaryCta: { label: "Parent capability: AI Agents", href: "/solutions/ai-agents" },
    layout: "capability",
    sections: [
      {
        type: "proof",
        items: [
          { value: "Realtime", label: "Latency budgets for live audio" },
          { value: "Telephony", label: "Contact-center and DID paths" },
          { value: "Governed", label: "Same tools, HITL, and traces" },
          { value: "Handoff", label: "Warm transfer with full context" },
        ],
      },
      {
        type: "narrative",
        title: "Voice is a channel—not a second product",
        body: [
          "Enterprises asking for “voice AI” usually need an agent that can listen, speak, call tools, and escalate—under the same policy as their text workers. A standalone IVR demo that cannot share memory, credentials, or eval suites becomes another silo.",
          "InheritX attaches realtime and telephony channels to the agent runtime you already review: typed tool contracts, approval gates on irreversible actions, and step-level logs operators can replay.",
          "We add voice when the workflow actually needs a phone or live-audio path—service desks, intake, status, and exception handling—not as a demo overlay on a text bot.",
        ],
      },
      {
        type: "bullets",
        title: "What we ship in a voice lane",
        items: [
          {
            title: "Telephony and realtime audio",
            copy: "Inbound/outbound call paths and realtime APIs with barge-in, interruption handling, and explicit silence/timeout behavior.",
          },
          {
            title: "Same tools as text agents",
            copy: "MCP-ready or native tool contracts—CRM, ticketing, knowledge retrieval—scoped per persona, not unbounded computer-use on a call.",
          },
          {
            title: "Human gates on the live path",
            copy: "Payments, policy changes, and commitments pause for approval or warm-transfer with transcript, retrieved sources, and suggested next action.",
          },
          {
            title: "Eval before you scale minutes",
            copy: "Golden call scripts, failure cases, and latency SLOs in CI so a prompt change cannot silently degrade the contact center.",
          },
        ],
      },
      {
        type: "steps",
        title: "How a voice lane goes live",
        items: [
          {
            step: "01",
            title: "Workflow and risk class",
            copy: "Map intents, systems, and which utterances may never auto-commit—before choosing a speech vendor.",
          },
          {
            step: "02",
            title: "Channel and identity",
            copy: "Wire telephony or realtime audio into your identity, recording, and retention policy.",
          },
          {
            step: "03",
            title: "Narrow production pilot",
            copy: "One high-volume, well-bounded intent with human fallback and measured containment.",
          },
          {
            step: "04",
            title: "Harden and expand",
            copy: "Load, barge-in, and eval gates; then add intents that share the same control plane.",
          },
        ],
      },
      {
        type: "matrix",
        title: "When voice is the right surface",
        rows: [
          {
            need: "High-volume status or intake on the phone",
            approach: "Realtime agent with retrieval + warm transfer on low confidence",
          },
          {
            need: "Internal ops that already run as text agents",
            approach: "Add a voice channel to the existing runtime—do not fork policy",
          },
          {
            need: "Regulated customer commitments",
            approach: "Draft-only or mandatory human publish; recording and audit retained",
          },
          {
            need: "Plant or field with eyes-busy work",
            approach: "Voice plus tools; multimodal only when the camera path is in scope",
          },
        ],
      },
      {
        type: "faq",
        title: "Voice AI FAQ",
        items: [
          {
            q: "Is this a different platform from AI Agents?",
            a: "No. Voice is a child lane of Agentic AI. The parent page covers the control plane; this page is for buyers who search “voice” or “realtime conversational AI.”",
          },
          {
            q: "Do you replace our contact-center vendor?",
            a: "We integrate with the telephony and CCaaS you already run when possible. Rip-and-replace is a last resort, not the default.",
          },
          {
            q: "How do you handle latency and barge-in?",
            a: "We set explicit audio SLOs, interruption rules, and fallback to a human queue when the loop cannot stay inside budget.",
          },
        ],
      },
      {
        type: "related",
        title: "Parent and adjacent",
        links: [
          { label: "AI Agents", href: "/solutions/ai-agents" },
          { label: "AI Automation", href: "/solutions/ai-automation" },
          { label: "Enterprise AI platform", href: "/solutions/enterprise-ai" },
          { label: "Document AI / IDP", href: "/solutions/document-ai" },
          { label: "Contact", href: contactHref("strategy") },
        ],
      },
    ],
    metadata: {
      title: "Voice AI & Realtime Conversational AI — InheritX",
      description:
        "Enterprise voice and realtime assistants on the same agent control plane—telephony, barge-in, MCP tools, human gates, and evaluation before you scale call minutes.",
    },
  },
  {
    slug: "document-ai",
    eyebrow: "Document AI",
    title: "Intelligent document processing inside your security boundary.",
    description:
      "Ingestion, classification, extraction, and reconciliation for contracts, claims, clinical packets, and back-office files—with human review on low confidence and IP you own.",
    primaryCta: { label: "Discuss this capability", href: contactHref("strategy") },
    secondaryCta: {
      label: "Parent capability: Enterprise AI",
      href: "/solutions/enterprise-ai",
    },
    layout: "capability",
    sections: [
      {
        type: "proof",
        items: [
          { value: "IDP", label: "Classify, extract, reconcile" },
          { value: "HITL", label: "Review queues on low confidence" },
          { value: "Lineage", label: "Every field tied to a source span" },
          { value: "Owned", label: "Pipelines and models in your VPC" },
        ],
      },
      {
        type: "narrative",
        title: "Documents are a platform problem, not a one-off OCR job",
        body: [
          "Buyers search “Document AI” and “IDP” when packet volume, exception rates, or audit requirements have outgrown shared inboxes and generic OCR. The failure mode is a point tool that cannot join your retrieval fabric, identity, or case systems.",
          "InheritX delivers document intelligence as a service of the enterprise AI platform: ingestion that respects document lifecycle, extraction with citation to page and span, and routing into ERP, CRM, EHR, or claims systems you already run.",
          "Human review stays on the path where confidence is low or the field class is irreversible—so straight-through processing is earned, not assumed.",
        ],
      },
      {
        type: "bullets",
        title: "IDP capabilities we industrialize",
        items: [
          {
            title: "Ingestion and classification",
            copy: "Packets split, typed, and routed—contracts, invoices, clinical notes, claims, KYC—before any extraction model runs.",
          },
          {
            title: "Extraction with evidence",
            copy: "Structured fields with source highlights so operators and auditors can see why a value was proposed.",
          },
          {
            title: "Reconciliation and exceptions",
            copy: "Cross-check against master data and prior cases; exceptions land in a queue with the original packet attached.",
          },
          {
            title: "Handoff into systems of record",
            copy: "Write-back through approved APIs—not a parallel document silo your teams must re-key.",
          },
        ],
      },
      {
        type: "steps",
        title: "Document AI delivery sequence",
        items: [
          {
            step: "01",
            title: "Corpus and field inventory",
            copy: "Sample real packets, define the field catalog, and mark which values may never auto-commit.",
          },
          {
            step: "02",
            title: "Pipeline in your boundary",
            copy: "Ingest, redaction, and model endpoints in the VPC or private estate your CISO already approved.",
          },
          {
            step: "03",
            title: "Pilot on one packet type",
            copy: "Measure extraction quality, exception rate, and handle time against a golden set from production.",
          },
          {
            step: "04",
            title: "Straight-through where earned",
            copy: "Raise auto-path only after eval gates hold; expand packet types on the same platform services.",
          },
        ],
      },
      {
        type: "matrix",
        title: "When Document AI is the right named lane",
        rows: [
          {
            need: "Back-office packets with a stable field catalog",
            approach: "IDP pipeline + HITL on low confidence + system write-back",
          },
          {
            need: "Employees asking questions over the same corpus",
            approach: "Pair with AI Search / RAG on the enterprise platform—not a second index",
          },
          {
            need: "Plant labels, waybills, or high-speed capture",
            approach: "Vision capture feeding the same IDP contract; see Computer Vision for line-side optics",
          },
          {
            need: "Regulated retention and legal hold",
            approach: "Classification-aware storage, immutable extraction logs, and DLP on egress",
          },
        ],
      },
      {
        type: "faq",
        title: "Document AI FAQ",
        items: [
          {
            q: "Is this separate from Enterprise AI / RAG?",
            a: "No. Document AI is a child lane of the enterprise platform. RAG answers questions; IDP turns packets into structured cases. They share identity, policy, and often the same corpus services.",
          },
          {
            q: "Do you replace our existing OCR vendor?",
            a: "We keep capture engines that already work and replace the fragile last mile—classification, extraction contracts, review, and write-back.",
          },
          {
            q: "Can extraction models be fine-tuned on our packets?",
            a: "Yes, when generic extraction plateaus—with data governance, eval gates, and rollback. Fine-tunes trained for you transfer with the rest of the IP.",
          },
        ],
      },
      {
        type: "related",
        title: "Parent and adjacent",
        links: [
          { label: "Enterprise AI platform", href: "/solutions/enterprise-ai" },
          { label: "Generative AI", href: "/solutions/generative-ai" },
          { label: "Computer Vision", href: "/solutions/computer-vision" },
          { label: "Voice / Realtime AI", href: "/solutions/voice-ai" },
          { label: "Contact", href: contactHref("strategy") },
        ],
      },
    ],
    metadata: {
      title: "Document AI & IDP — InheritX",
      description:
        "Intelligent document processing for enterprise packets—classification, extraction with evidence, human review, and write-back inside your VPC.",
    },
  },
];

export function getSolutionTopic(slug: string): TopicPage | undefined {
  return solutionTopics.find((topic) => topic.slug === slug);
}
