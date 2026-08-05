import type { TopicPage } from "./topic";

/**
 * Enterprise credibility resource topics (content-only).
 * Visual layout uses existing TopicLandingView patterns.
 */
export const enterpriseResourceTopics: TopicPage[] = [
  {
    slug: "security-faq",
    eyebrow: "Security FAQ",
    title: "Answers procurement and security teams ask first.",
    description:
      "Factual responses for vendor reviews. If something is not yet attested, we say so—rather than inventing certifications or partnership claims.",
    primaryCta: { label: "Security practices", href: "/company/security" },
    secondaryCta: { label: "Book an AI Strategy Call", href: "/contact" },
    layout: "library",
    metadata: {
      title: "Security FAQ | InheritX",
      description:
        "Enterprise security FAQ for InheritX AI engagements: data residency, access, model providers, IP, and diligence.",
    },
    sections: [
      {
        type: "faq",
        title: "Data, tenancy & models",
        items: [
          {
            q: "Is InheritX a multi-tenant AI SaaS that trains on our data?",
            a: "No. Production programs target your cloud estate. We do not operate a shared InheritX product that trains public models on your proprietary data.",
          },
          {
            q: "Which model providers might be involved?",
            a: "Depending on architecture choices: commercial APIs (e.g., OpenAI, Anthropic, Google) and/or models hosted in your VPC. Provider selection is part of blueprint—and governed by those providers’ terms plus your policies.",
          },
          {
            q: "Do logos for OpenAI, AWS, Microsoft, etc. mean formal partnership?",
            a: "No. They indicate platforms and models we commonly implement with. Formal partnership status is only claimed when a contract exists; ask us for current status in diligence.",
          },
          {
            q: "Can inference stay inside our network boundary?",
            a: "Yes when the architecture calls for private endpoints, VPC-hosted models, or approved private networking patterns. That choice is designed in blueprint, not bolted on after a demo.",
          },
        ],
      },
      {
        type: "faq",
        title: "Access, logging & offboarding",
        items: [
          {
            q: "How do engineers access our systems?",
            a: "Through identities and roles you approve—preferably time-bound and least-privilege—following your IAM and change processes.",
          },
          {
            q: "What logs exist for AI actions?",
            a: "We design for attributable traces on agent/tool actions and generation workflows, with retention aligned to your policy. Exact tooling is chosen per estate.",
          },
          {
            q: "What happens at engagement end?",
            a: "Access is revoked per your offboarding checklist; repositories and runbooks remain under your control as defined in the handover package.",
          },
          {
            q: "Do you have SOC 2 / ISO certificates we can download?",
            a: "Formal SOC/ISO marks are published only when evidenced. Until then, use this Security FAQ and the diligence pack under NDA. We share attestation status factually during vendor review—this site does not claim certifications that are not currently evidenced.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Anonymized engagement classes (from published cases)",
        intro:
          "Derived from published case studies—not invented client names. Use these for early peer matching; named references require written approval.",
        items: [
          {
            title: "Healthcare & clinical workflows",
            copy: "Published patterns in intake, vision quality gates, and care discovery. Cases: AI Dent, Heva.",
          },
          {
            title: "AI platforms & LLMOps reliability",
            copy: "Published work hardening AI builder infrastructure and recovery. Case: Kavia AI.",
          },
          {
            title: "AI infrastructure security",
            copy: "Published posture hardening for an AI damage-detection platform. Case: T2D2.",
          },
          {
            title: "Enterprise operations systems",
            copy: "Published multi-property and real-time operations platforms. Cases: QDIS, Twelfthman, E-mobility.",
          },
        ],
      },
      {
        type: "narrative",
        title: "What we share publicly vs under NDA",
        body: [
          "We do not publish unverified logos or invented testimonials. Public materials include this FAQ, published case methodology, anonymized engagement classes from those stories, and company pages on security practices and IP ownership.",
          "Named customer references: only with written approval. Otherwise anonymized industry + scale references under NDA for qualified opportunities—after a strategy or security diligence conversation confirms fit.",
        ],
      },
      {
        type: "related",
        title: "Go deeper",
        links: [
          { label: "Security practices", href: "/company/security" },
          { label: "Diligence pack", href: "/resources/diligence-pack" },
          { label: "Enterprise references", href: "/resources/enterprise-references" },
          { label: "IP ownership", href: "/company/ip-ownership" },
          { label: "AI governance", href: "/resources/ai-governance" },
          { label: "Contact — security intent", href: "/contact?intent=security" },
        ],
      },
    ],
  },
  {
    slug: "diligence-pack",
    eyebrow: "Diligence Pack",
    title: "What enterprise buyers receive under NDA.",
    description:
      "A structured pack for security, legal, and architecture review—shared after a qualified strategy conversation. Public pages stay precise; sensitive detail stays controlled.",
    primaryCta: { label: "Book an AI Strategy Call", href: "/contact" },
    secondaryCta: { label: "Security FAQ", href: "/resources/security-faq" },
    layout: "library",
    metadata: {
      title: "Enterprise Diligence Pack | InheritX",
      description:
        "Overview of InheritX enterprise diligence materials available under NDA for security, legal, and architecture review.",
    },
    sections: [
      {
        type: "narrative",
        title: "How diligence works with InheritX",
        body: [
          "Serious enterprise programs need more than a marketing site. After a strategy call confirms mutual fit, we can share a diligence pack under NDA covering security practices, engagement models, IP intent, and architecture patterns relevant to your mandate.",
          "We will not invent certificates, logos, or capabilities to fill gaps. Where an item is not available, we mark it clearly and propose an alternative evidence path (architecture review, reference call process, questionnaire response).",
          "Formal SOC/ISO marks appear only when evidenced. Until then, use the Security FAQ and this pack under NDA.",
        ],
      },
      {
        type: "bullets",
        title: "Anonymized engagement classes (from published cases)",
        intro:
          "Early peer matching without invented client names. Each class links to published case methodology on this site.",
        items: [
          {
            title: "Healthcare & clinical workflows",
            copy: "Intake, vision quality gates, and care discovery patterns. Published cases: /case-studies/ai-dent, /case-studies/heva.",
          },
          {
            title: "AI platforms & LLMOps reliability",
            copy: "AI builder infrastructure and recovery hardening. Published case: /case-studies/kavia-ai.",
          },
          {
            title: "AI infrastructure security",
            copy: "Posture hardening for AI platforms. Published case: /case-studies/t2d2.",
          },
          {
            title: "Enterprise operations systems",
            copy: "Multi-property and real-time operations platforms. Published cases: /case-studies/qdis, /case-studies/twelfthman, /case-studies/e-mobility.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Pack contents (standard intent)",
        intro: "Typical contents—final set depends on your questionnaire and engagement type.",
        items: [
          {
            title: "Security & data-handling overview",
            copy: "Deployment model, access norms, logging/audit intent, and compliance language boundaries.",
          },
          {
            title: "IP & ownership schedule summary",
            copy: "What transfers at handover vs third-party licenses (foundation models, cloud services).",
          },
          {
            title: "Engagement model one-pagers",
            copy: "Consulting, transformation/build, squads, and embeds—when each is appropriate.",
          },
          {
            title: "Architecture principles & governance outline",
            copy: "Human-in-the-loop, evaluation, observability, and private-by-default patterns.",
          },
          {
            title: "Reference process",
            copy: "How qualified opportunities request anonymized or named references when approved. Named references only with written customer approval.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Public security & procurement links",
        intro: "Available without NDA—use these while your questionnaire is prepared.",
        items: [
          {
            title: "Security FAQ",
            copy: "Public procurement-oriented answers — /resources/security-faq",
          },
          {
            title: "IP ownership",
            copy: "How code, models, and data transfer at handover — /company/ip-ownership",
          },
          {
            title: "Security practices",
            copy: "Deployment and governance posture — /company/security",
          },
          {
            title: "Enterprise references process",
            copy: "How verification works — /resources/enterprise-references",
          },
        ],
      },
      {
        type: "matrix",
        title: "Materials available under NDA after fit is confirmed",
        intro:
          "Shared during vendor review when mutual fit is clear—not as public downloads.",
        rows: [
          {
            need: "Current certification letters / reports",
            approach:
              "Provided only when earned and evidenced. Otherwise we state clearly that marks are not currently published.",
          },
          {
            need: "Subprocessors / tools list for a typical engagement",
            approach:
              "Accurate living list shared with security and procurement under NDA.",
          },
          {
            need: "Sample SOW / MSA exhibits (IP, DPA)",
            approach:
              "Legal-owned templates shared under NDA—not published as open downloads.",
          },
          {
            need: "Named customer references",
            approach:
              "Only with written customer approval; otherwise anonymized industry and scale references under NDA.",
          },
        ],
      },
      {
        type: "steps",
        title: "Request path",
        items: [
          {
            step: "01",
            title: "Strategy call or security intent",
            copy: "Share mandate, industry, systems, and risk constraints via /contact?intent=strategy or /contact?intent=security. We confirm whether InheritX is the right partner.",
          },
          {
            step: "02",
            title: "NDA (if required)",
            copy: "Execute mutual NDA when your process requires it before detailed diligence materials.",
          },
          {
            step: "03",
            title: "Pack + questionnaire",
            copy: "We share the pack and answer your security questionnaire with factual responses and clear gaps.",
          },
          {
            step: "04",
            title: "Technical deep-dive",
            copy: "Optional architecture session with your security and platform owners.",
          },
        ],
      },
      {
        type: "related",
        title: "Public materials",
        links: [
          { label: "Security practices", href: "/company/security" },
          { label: "Security FAQ", href: "/resources/security-faq" },
          { label: "IP ownership", href: "/company/ip-ownership" },
          { label: "Enterprise references", href: "/resources/enterprise-references" },
          { label: "Engagement models", href: "/resources/engagement-models" },
          { label: "Contact — diligence", href: "/contact?intent=security" },
        ],
      },
    ],
  },
  {
    slug: "engagement-models",
    eyebrow: "Engagement Models",
    title: "How to buy InheritX without category confusion.",
    description:
      "Three primary motions—plus embeds when the roadmap is already clear. Choose the path that matches your decision, not a menu of everything at once.",
    primaryCta: { label: "Explore solutions", href: "/solutions" },
    secondaryCta: { label: "Book an AI Strategy Call", href: "/contact" },
    layout: "engagement",
    metadata: {
      title: "Engagement Models | InheritX",
      description:
        "InheritX engagement models: AI consulting, transformation/build with IP handover, dedicated squads, and embedded AI engineers.",
    },
    sections: [
      {
        type: "steps",
        title: "Recommended buying sequence",
        intro: "Most enterprise programs benefit from clarity before capacity.",
        items: [
          {
            step: "01",
            title: "AI Consulting & Architecture",
            copy: "When the mandate, KPI, data readiness, or security path is unclear. Output: blueprint your CISO and architecture board can defend.",
          },
          {
            step: "02",
            title: "Transformation / production build",
            copy: "When you are ready to ship governed capability into your private cloud with evaluation, observability, and IP handover.",
          },
          {
            step: "03",
            title: "Dedicated AI Squads",
            copy: "When a business unit needs a pod that owns a capability end-to-end under InheritX delivery leadership.",
          },
          {
            step: "04",
            title: "Embedded AI Engineering",
            copy: "Only when the roadmap and architecture standards already exist and the bottleneck is senior execution capacity—not strategy.",
          },
        ],
      },
      {
        type: "matrix",
        title: "Match need → motion",
        rows: [
          {
            need: "We need a board-ready plan and honest feasibility",
            approach: "AI Consulting & Architecture",
          },
          {
            need: "We need private AI in our VPC with ownership at handover",
            approach: "AI Transformation / production build",
          },
          {
            need: "We need a pod to own one capability to production",
            approach: "Dedicated AI Squads",
          },
          {
            need: "We have a clear backlog and need senior AI bench strength",
            approach: "Embedded AI Engineering",
          },
        ],
      },
      {
        type: "narrative",
        title: "What InheritX is—and is not",
        body: [
          "InheritX is an AI-native enterprise partner—an Enterprise AI Solutions company. We design, build, govern, and hand over systems. We are not a foundation-model provider, and we are not a classic staff-augmentation broker optimizing for headcount.",
          "Embeds exist to accelerate a defined roadmap under your standards. If you need the mandate and blueprint first, start with consulting—even if you eventually want embeds.",
        ],
      },
      {
        type: "related",
        title: "Open a motion",
        links: [
          { label: "AI Consulting", href: "/solutions/ai-consulting" },
          { label: "AI Transformation", href: "/solutions/ai-transformation" },
          { label: "Dedicated AI Squads", href: "/solutions/dedicated-ai-squads" },
          { label: "Embedded AI Engineering", href: "/solutions/hire-ai-engineers" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "ai-governance",
    eyebrow: "AI Governance",
    title: "Controls that let autonomy survive audit.",
    description:
      "How InheritX designs human-in-the-loop gates, evaluation, attribution, and escalation—so agentic systems behave like infrastructure, not demos.",
    primaryCta: { label: "Production readiness", href: "/resources/production-readiness" },
    secondaryCta: { label: "Book an AI Strategy Call", href: "/contact" },
    layout: "library",
    metadata: {
      title: "AI Governance | InheritX",
      description:
        "InheritX AI governance patterns: human-in-the-loop, evaluation harnesses, attributable agent actions, and escalation for high-risk tools.",
    },
    sections: [
      {
        type: "narrative",
        title: "Governance is what makes production possible",
        body: [
          "Enterprises do not fail AI programs because models lack fluency. They fail when actions cannot be explained, permissions are too broad, evaluation is absent, and nobody owns exceptions.",
          "InheritX treats governance as part of the product: identity-aware retrieval, tool permissions, approval gates, traces, and evaluation loops tied to business KPIs.",
        ],
      },
      {
        type: "bullets",
        title: "Control patterns we implement",
        items: [
          {
            title: "Human-in-the-loop for high-risk actions",
            copy: "Consequential tools—money movement, clinical sign-off proxies, irreversible changes—require explicit approval paths.",
          },
          {
            title: "Attributed agent actions",
            copy: "Who/what initiated an action, with which tools and context, should be reconstructable for audit and incident review.",
          },
          {
            title: "Evaluation before scale",
            copy: "Offline suites and sampling strategies defined before broad rollout—not after users discover failure modes.",
          },
          {
            title: "Scoped retrieval",
            copy: "Role, jurisdiction, and corpus boundaries so generation stays inside approved knowledge.",
          },
          {
            title: "Escalation & fallback",
            copy: "Clear paths when confidence is low, tools fail, or policy blocks an action—humans remain accountable.",
          },
        ],
      },
      {
        type: "split",
        title: "Governance vs. theater",
        leftTitle: "Production governance",
        leftBody: [
          "Policy encoded in architecture and workflows",
          "Metrics tied to risk and quality, not demo applause",
          "Owners for exceptions and model changes",
          "Rollback and incident basics agreed before go-live",
        ],
        rightTitle: "Pilot theater",
        rightItems: [
          "Shared keys and unbounded tool access",
          "No eval harness beyond anecdotal prompts",
          "Success defined as stakeholder excitement",
          "Security review scheduled after the demo",
        ],
      },
      {
        type: "related",
        title: "Related",
        links: [
          { label: "Production readiness checklist", href: "/resources/production-readiness" },
          { label: "Architecture principles", href: "/resources/architecture-principles" },
          { label: "Security practices", href: "/company/security" },
          { label: "Our approach", href: "/company/approach" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "production-readiness",
    eyebrow: "Production Readiness",
    title: "The checklist before you industrialize.",
    description:
      "A practical readiness bar InheritX uses so pilots become platforms—security, evaluation, ownership, and operations included.",
    primaryCta: { label: "AI governance", href: "/resources/ai-governance" },
    secondaryCta: { label: "Our approach", href: "/company/approach" },
    layout: "library",
    metadata: {
      title: "Production Readiness Checklist | InheritX",
      description:
        "InheritX production readiness checklist for enterprise AI: KPI, data, security, evaluation, observability, and handover.",
    },
    sections: [
      {
        type: "steps",
        title: "Readiness gates",
        intro: "If a gate is red, we recommend fixing it before scale—even if the demo looks impressive.",
        items: [
          {
            step: "01",
            title: "Outcome & owners",
            copy: "Named KPI, business owner, and exception owner. If success cannot be stated, the program is not ready.",
          },
          {
            step: "02",
            title: "Data & systems scope",
            copy: "Approved corpora, integration boundaries, and retention rules documented.",
          },
          {
            step: "03",
            title: "Security path",
            copy: "Deployment estate, identity model, and high-risk tool policy reviewed with security stakeholders.",
          },
          {
            step: "04",
            title: "Evaluation harness",
            copy: "Offline tests and sampling plan tied to quality/risk metrics—not anecdotal prompt checks.",
          },
          {
            step: "05",
            title: "Observability & ops",
            copy: "Tracing, alerting basics, cost visibility, and an agreed hypercare window.",
          },
          {
            step: "06",
            title: "Handover package",
            copy: "Repos, runbooks, IaC, and enablement so your team can operate without InheritX as a permanent dependency.",
          },
        ],
      },
      {
        type: "narrative",
        title: "Honesty over velocity theater",
        body: [
          "We will recommend pausing industrialization when readiness gates fail. That is not friction—it is how regulated buyers avoid expensive rework and trust loss.",
          "Consulting engagements often exist specifically to turn red gates green before a production build starts.",
        ],
      },
      {
        type: "related",
        title: "Related",
        links: [
          { label: "Engagement models", href: "/resources/engagement-models" },
          { label: "AI governance", href: "/resources/ai-governance" },
          { label: "Diligence pack", href: "/resources/diligence-pack" },
          { label: "Case studies", href: "/case-studies" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "architecture-principles",
    eyebrow: "Architecture Principles",
    title: "Opinionated defaults for enterprise AI systems.",
    description:
      "Principles InheritX applies when designing private, governed, IP-transferrable AI—useful for CTOs comparing builders vs. integrators.",
    primaryCta: { label: "Tech on the homepage", href: "/#tech" },
    secondaryCta: { label: "AI consulting", href: "/solutions/ai-consulting" },
    layout: "library",
    metadata: {
      title: "Architecture Principles | InheritX",
      description:
        "InheritX architecture principles: private by default, evaluate before scale, human gates, observability, and IP-transferrable design.",
    },
    sections: [
      {
        type: "bullets",
        title: "Seven principles",
        items: [
          {
            title: "Private by default",
            copy: "Prefer customer-tenant deployment and data boundaries that match regulated reality.",
          },
          {
            title: "Evaluate before you scale",
            copy: "Define quality and risk tests early; do not confuse fluency with readiness.",
          },
          {
            title: "Human gates on consequential actions",
            copy: "Autonomy is earned inside policy—not granted globally because a demo impressed.",
          },
          {
            title: "Attribution over opacity",
            copy: "Design for reconstructable decisions: tools used, context retrieved, approvals given.",
          },
          {
            title: "Observability is a product requirement",
            copy: "Tracing, cost, and failure modes are visible to operators—not buried in vendor dashboards you cannot export.",
          },
          {
            title: "IP-transferrable by construction",
            copy: "Prefer designs your team can own: code, configs, evals, and runbooks that survive handover.",
          },
          {
            title: "Commodity where it helps; ownership where it matters",
            copy: "Use foundation models and cloud primitives for speed; own orchestration, fine-tunes, retrieval, and workflow glue.",
          },
        ],
      },
      {
        type: "narrative",
        title: "LLMOps in practice",
        body: [
          "Delivery & observability layers include regression checks for prompts/agents, cost controls, and guardrails appropriate to the workflow. Exact tooling varies by estate—AWS, Azure, GCP, and your existing CI/CD.",
          "We document trade-offs in blueprint so security and platform teams can accept the path before build velocity increases.",
        ],
      },
      {
        type: "related",
        title: "Related",
        links: [
          { label: "AI governance", href: "/resources/ai-governance" },
          { label: "Production readiness", href: "/resources/production-readiness" },
          { label: "Enterprise AI solutions", href: "/solutions/enterprise-ai" },
          { label: "Security", href: "/company/security" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "enterprise-references",
    eyebrow: "References",
    title: "How enterprise buyers verify InheritX.",
    description:
      "Named references only with written customer approval. Until then: published case methodology plus anonymized industry-scale references under NDA—never fabricated logos or Fortune 500 claims.",
    primaryCta: { label: "Case studies", href: "/case-studies" },
    secondaryCta: { label: "Book an AI Strategy Call", href: "/contact" },
    layout: "library",
    metadata: {
      title: "Enterprise References | InheritX",
      description:
        "InheritX reference process: published case studies, anonymized NDA references, and named calls only with customer approval.",
    },
    sections: [
      {
        type: "narrative",
        title: "Reference process (honest)",
        body: [
          "Enterprise buyers should verify delivery risk the same way they verify architecture: with peers and evidence, not marketing claims. InheritX supports three tiers of proof.",
          "We will not invent customer names, awards, or partnership badges to close a diligence gap. If a named reference is not approved, we say so and offer an approved alternative path.",
        ],
      },
      {
        type: "steps",
        title: "Three tiers of proof",
        items: [
          {
            step: "01",
            title: "Published case studies",
            copy: "Methodology-forward stories on this site—challenge, approach, outcome, and measurable results where we can publish them.",
          },
          {
            step: "02",
            title: "Anonymized references (NDA)",
            copy: "Industry, size band, use case, constraint, InheritX role, and outcome class—shared after mutual fit is confirmed.",
          },
          {
            step: "03",
            title: "Named reference calls",
            copy: "Only with written customer approval. Requested for qualified opportunities; scheduling depends on customer availability.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Published anonymized engagement classes",
        intro:
          "Available now from published case studies—not invented client names. Prefer these for early peer matching before NDA.",
        items: [
          {
            title: "Healthcare & clinical workflows",
            copy: "Intake, vision quality gates, care discovery — cases: AI Dent, Heva.",
          },
          {
            title: "AI platforms & LLMOps reliability",
            copy: "AI builder infrastructure and recovery — case: Kavia AI.",
          },
          {
            title: "AI infrastructure security",
            copy: "Posture hardening for AI platforms — case: T2D2.",
          },
          {
            title: "Enterprise operations systems",
            copy: "Multi-property and real-time operations — cases: QDIS, Twelfthman, E-mobility.",
          },
        ],
      },
      {
        type: "bullets",
        title: "What we ask buyers to prepare",
        items: [
          {
            title: "Peer similarity",
            copy: "Industry, geography, and approximate scale so we match the closest approved reference—not a vanity logo.",
          },
          {
            title: "Diligence stage",
            copy: "Whether you need architecture review, security questionnaire support, or a customer call.",
          },
          {
            title: "NDA readiness",
            copy: "If your process requires NDA before references or pack materials, say so early.",
          },
        ],
      },
      {
        type: "related",
        title: "Related",
        links: [
          { label: "Case studies", href: "/case-studies" },
          { label: "Diligence pack", href: "/resources/diligence-pack" },
          { label: "Outcome taxonomy", href: "/resources/outcome-taxonomy" },
          { label: "Security FAQ", href: "/resources/security-faq" },
          { label: "Contact — diligence", href: "/contact?intent=security" },
          { label: "Contact — strategy", href: "/contact?intent=strategy" },
        ],
      },
    ],
  },
  {
    slug: "outcome-taxonomy",
    eyebrow: "Outcomes",
    title: "How we talk about results—without vanity metrics.",
    description:
      "A shared vocabulary for case studies and diligence: efficiency, risk reduction, reliability, cost control, and enablement—tied to methods you can inspect.",
    primaryCta: { label: "Case studies", href: "/case-studies" },
    secondaryCta: { label: "Production readiness", href: "/resources/production-readiness" },
    layout: "library",
    metadata: {
      title: "Outcome Taxonomy | InheritX",
      description:
        "InheritX outcome taxonomy for enterprise AI engagements: efficiency, risk, reliability, cost, and enablement—measured with inspectable methods.",
    },
    sections: [
      {
        type: "narrative",
        title: "Why taxonomy matters",
        body: [
          "Enterprise buyers should be able to compare stories by outcome class—not by unrelated percentages. We classify published results so readers know what kind of value was measured and what remains qualitative.",
          "Where a figure cannot be independently verified for public use, we prefer precise qualitative outcomes and methodology over invented precision.",
        ],
      },
      {
        type: "bullets",
        title: "Outcome classes",
        items: [
          {
            title: "Operational efficiency",
            copy: "Time-to-complete, discovery effort, prep time, throughput—e.g. reduced clinic visits, faster discovery flows.",
          },
          {
            title: "Risk & security posture",
            copy: "Attack surface reduction, access hygiene, policy-bound actions, auditability of AI decisions.",
          },
          {
            title: "Reliability & recovery",
            copy: "MTTR, uptime under peak load, incident playbooks for AI platforms and real-time systems.",
          },
          {
            title: "Cost & leakage control",
            copy: "Avoidable cloud spend, billing disputes, budget adherence—when economics are part of the mandate.",
          },
          {
            title: "Enablement & ownership",
            copy: "Team capability after handover, IP transfer completeness, runbooks, and hypercare/advisory options.",
          },
        ],
      },
      {
        type: "matrix",
        title: "How published case studies map (illustrative)",
        intro: "Mapping uses public case narratives already on this site—not new claims.",
        rows: [
          {
            need: "AI Dent / Heva",
            approach: "Operational efficiency + human-in-the-loop clinical accountability patterns",
          },
          {
            need: "Kavia AI / Twelfthman",
            approach: "Reliability & recovery (platform MTTR / peak-load decision surfaces)",
          },
          {
            need: "T2D2",
            approach: "Risk & security posture + cost leakage control for an AI product estate",
          },
          {
            need: "QDIS / E-mobility",
            approach: "Operational efficiency + automation-ready enterprise systems foundations",
          },
        ],
      },
      {
        type: "faq",
        title: "Proof hygiene",
        items: [
          {
            q: "Will every engagement publish a percentage?",
            a: "No. Some of the most important outcomes are qualitative (auditability, ownership, governance maturity). We publish numbers only when they are appropriate for public use.",
          },
          {
            q: "How often is proof refreshed?",
            a: "Published outcomes and the security FAQ are refreshed when new approved material is available—without inventing interim claims.",
          },
        ],
      },
      {
        type: "related",
        title: "Related",
        links: [
          { label: "Case studies", href: "/case-studies" },
          { label: "Enterprise references", href: "/resources/enterprise-references" },
          { label: "Diligence pack", href: "/resources/diligence-pack" },
          { label: "AI governance", href: "/resources/ai-governance" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
];
