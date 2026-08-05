import type { TopicPage } from "./topic";

export type { TopicLink, TopicSection, TopicPage } from "./topic";

export const industryTopics: TopicPage[] = [
  {
    slug: "healthcare",
    eyebrow: "Healthcare",
    title: "Clinical intelligence without compromising the chart.",
    description:
      "InheritX builds governed AI for health systems—documentation assistants, retrieval over approved clinical knowledge, and intake automation that respects HIPAA, audit trails, and clinician judgment.",
    primaryCta: { label: "Discuss healthcare AI", href: "/contact" },
    secondaryCta: { label: "View case studies", href: "/case-studies" },
    layout: "industry",
    image: "/images/visuals/industries/industry-healthcare.png",
    metadata: {
      title: "Healthcare AI Solutions — InheritX",
      description:
        "Governed clinical documentation, knowledge retrieval, and prior-auth automation for health systems that cannot trade compliance for speed.",
    },
    sections: [
      {
        type: "narrative",
        title: "Where care operations break down",
        body: [
          "Clinicians spend disproportionate time in the EHR—charting, searching policies, and chasing prior authorization—while patient-facing work suffers. Knowledge lives in PDFs, order sets, and siloed repositories that generic chat tools cannot safely surface.",
          "Health systems need AI that accelerates documentation and routing without hallucinating clinical guidance or bypassing privacy controls. Every answer must be traceable, every action reversible, and every high-risk recommendation escalated to a licensed professional.",
          "InheritX designs for private estates, clinician-in-the-loop gates, and audit-friendly traces—using HIPAA-ready architecture patterns where the workload requires them, without overclaiming certifications we have not earned.",
        ],
      },
      {
        type: "proof",
        items: [
          { value: "HIPAA-aware", label: "Private deployment in your cloud estate" },
          { value: "Cited", label: "Retrieval limited to approved sources" },
          { value: "HITL", label: "Clinicians approve high-risk outputs" },
          { value: "Audited", label: "Full traces for compliance review" },
        ],
      },
      {
        type: "bullets",
        title: "AI plays that hold up in a chart review",
        intro:
          "We design for the workflows that actually consume clinician time—not demo chatbots disconnected from the EHR.",
        items: [
          {
            title: "Clinical documentation assistants",
            copy: "Ambient and structured note generation aligned to your templates, with explicit clinician review before sign-off.",
          },
          {
            title: "Governed knowledge retrieval",
            copy: "Generative search over approved clinical policies, formularies, and internal protocols—with citations, not guesses.",
          },
          {
            title: "Prior-auth and intake agents",
            copy: "Multi-step agents that assemble evidence, check payer criteria, and route exceptions to authorization teams.",
          },
          {
            title: "Care navigation copilots",
            copy: "Patient-facing assistants bounded by approved content, with handoff to staff when clinical judgment is required.",
          },
        ],
      },
      {
        type: "matrix",
        title: "From pressure to governed capability",
        intro: "Map operational pain to AI patterns that survive privacy review and clinical governance.",
        rows: [
          {
            need: "Documentation burden and after-hours charting",
            approach: "Template-aware documentation assistants with mandatory clinician attestation",
          },
          {
            need: "Staff cannot find the right protocol quickly",
            approach: "Citation-backed retrieval over approved clinical knowledge bases",
          },
          {
            need: "Prior authorization queues stall care",
            approach: "Intake agents that gather records and draft submissions for human review",
          },
          {
            need: "Generic LLM tools fail privacy review",
            approach: "Private generative endpoints with role-based access and audit logging",
          },
        ],
      },
      {
        type: "steps",
        title: "How we deploy in a health system",
        intro:
          "Clinical AI requires staged validation—starting where risk is bounded and expanding with evidence.",
        items: [
          {
            step: "01",
            title: "Workflow and risk mapping",
            copy: "Identify high-volume tasks, data boundaries, and where human attestation is non-negotiable.",
          },
          {
            step: "02",
            title: "Governed pilot in your estate",
            copy: "Deploy retrieval and documentation tools against approved sources inside your VPC with full logging.",
          },
          {
            step: "03",
            title: "Clinical evaluation harness",
            copy: "Regression suites on de-identified scenarios; clinician review panels before broader rollout.",
          },
          {
            step: "04",
            title: "Industrialize and transfer",
            copy: "Integrate with EHR workflows, train operational teams, and transfer IP—you own the capability.",
          },
        ],
      },
      {
        type: "split",
        title: "Built for compliance, not convenience",
        leftTitle: "What we refuse to do",
        leftBody: [
          "Train on patient data without explicit contractual scope and legal review.",
          "Surface clinical recommendations without citations to approved sources.",
          "Auto-submit orders, prescriptions, or billing actions without licensed oversight.",
        ],
        rightTitle: "What we deliver instead",
        rightItems: [
          "BAAs and data-processing agreements aligned to your privacy office",
          "Retrieval scoped to whitelisted clinical corpora",
          "Human-in-the-loop gates on any action that affects care or billing",
          "Evaluation dashboards for clinical governance committees",
        ],
      },
      {
        type: "faq",
        title: "Healthcare AI — common questions",
        items: [
          {
            q: "Can this run entirely inside our cloud?",
            a: "Yes. We deploy private model endpoints, retrieval, and agent orchestration in your AWS, Azure, or GCP estate—no patient data sent to public APIs without explicit architecture approval.",
          },
          {
            q: "How do you prevent hallucinated clinical guidance?",
            a: "Retrieval is limited to approved sources. Generated answers include citations. High-confidence thresholds trigger escalation; out-of-scope questions route to staff rather than invented answers.",
          },
          {
            q: "Will clinicians actually use it?",
            a: "Adoption follows workflow fit. We embed in existing EHR and authorization flows, measure time-to-complete on real tasks, and iterate with frontline feedback—not generic chat UX.",
          },
        ],
      },
      {
        type: "related",
        title: "Explore related capabilities",
        links: [
          { label: "Generative AI for enterprise", href: "/solutions/generative-ai" },
          { label: "AI agents that execute work", href: "/solutions/ai-agents" },
          { label: "AI Dent case study", href: "/case-studies/ai-dent" },
          { label: "Heva case study", href: "/case-studies/heva" },
          { label: "All case studies", href: "/case-studies" },
          { label: "Book an AI strategy call", href: "/contact?intent=strategy" },
        ],
      },
    ],
  },
  {
    slug: "finance",
    eyebrow: "Finance",
    title: "Risk decisions at institutional scale—with explainability built in.",
    description:
      "From fraud triage to underwriting copilots, InheritX delivers multi-agent systems and governed generative AI for banks and asset managers who must explain every recommendation to regulators and boards.",
    primaryCta: { label: "Discuss financial services AI", href: "/contact" },
    secondaryCta: { label: "See Agent Bank", href: "/portfolio/agent-bank" },
    layout: "industry",
    image: "/images/visuals/industries/industry-finance.png",
    metadata: {
      title: "Financial Services AI — InheritX",
      description:
        "Multi-agent fraud triage, underwriting copilots, and policy-aware decision support for institutions that need speed and regulatory explainability.",
    },
    sections: [
      {
        type: "narrative",
        title: "Institutional constraints come first",
        body: [
          "Financial institutions cannot treat AI as an unverifiable assistant. Fraud, underwriting, and servicing decisions must be attributable, policy-bound, and deployable inside private estates.",
          "InheritX designs multi-agent and generative systems with traces, human escalation on high-risk actions, and ownership at handover—so speed does not trade away auditability.",
        ],
      },
      {
        type: "proof",
        items: [
          { value: "Explainable", label: "Traces for every agent recommendation" },
          { value: "Policy-bound", label: "Internal rules enforced before action" },
          { value: "Private", label: "Models and data in your perimeter" },
          { value: "Owned", label: "Full IP transfer on delivery" },
        ],
      },
      {
        type: "steps",
        title: "From alert storm to governed resolution",
        intro:
          "Financial operations AI must connect signals to action across CRM, core banking, and document stores—not sit in a standalone chat window.",
        items: [
          {
            step: "01",
            title: "Signal intake and enrichment",
            copy: "Agents classify alerts, enrich with customer and transaction context, and prioritize by risk tier.",
          },
          {
            step: "02",
            title: "Evidence assembly",
            copy: "Document agents retrieve KYC packs, statements, and prior case history with citations.",
          },
          {
            step: "03",
            title: "Policy evaluation",
            copy: "Compliance-aware agents check recommendations against internal policy packs before analysts see them.",
          },
          {
            step: "04",
            title: "Human gate and audit",
            copy: "High-risk actions require analyst approval. Every step is logged for regulatory reconstruction.",
          },
        ],
      },
      {
        type: "narrative",
        title: "Why generic AI fails in regulated finance",
        body: [
          "Alert fatigue buries analysts in false positives while genuine risk signals wait in queue. Single LLM chatbots can summarize a case but cannot orchestrate multi-step work across permissioned systems without creating control gaps.",
          "Regulators and model risk teams demand explainability—not eloquent prose, but reconstructable decision paths. InheritX builds agent workforces where tool calls are scoped, policy checks are mandatory, and humans remain accountable for irreversible actions.",
        ],
      },
      {
        type: "split",
        title: "Control posture for financial institutions",
        leftTitle: "Analyst reality today",
        leftBody: [
          "Cases scattered across CRM, core banking, and document repositories",
          "First-pass review dominated by repetitive assembly work",
          "No reliable way to prove what an AI system did—or why",
        ],
        rightTitle: "Target operating model",
        rightItems: [
          "Specialized agents for intake, evidence, policy, and drafting",
          "Supervisor layer that peer-checks outputs and scores confidence",
          "Full action ledger for audit, QA sampling, and model validation",
          "Analysts focused on exceptions that require judgment",
        ],
      },
      {
        type: "bullets",
        title: "Where we deploy in financial services",
        items: [
          {
            title: "Multi-agent fraud and AML triage",
            copy: "Collaborating agents normalize alerts, gather evidence, and propose dispositions with rationale for analyst review.",
          },
          {
            title: "Underwriting and credit copilots",
            copy: "Generative assistants that summarize financials, flag covenant gaps, and draft memos—never auto-approving credit.",
          },
          {
            title: "Policy-aware decision support",
            copy: "Retrieval over internal policy libraries with citations for compliance, legal, and operations teams.",
          },
          {
            title: "Operations automation fabric",
            copy: "Intelligent routing for KYC follow-ups, document exceptions, and queue management across channels.",
          },
        ],
      },
      {
        type: "matrix",
        title: "Institutional need → AI approach",
        rows: [
          {
            need: "Analysts drown in false-positive alerts",
            approach: "Multi-agent triage with enrichment and confidence-scored recommendations",
          },
          {
            need: "Underwriters need faster first drafts, not black boxes",
            approach: "Citation-backed copilots with mandatory human approval on decisions",
          },
          {
            need: "Model risk requires reproducible outputs",
            approach: "Evaluation harnesses and full decision traces on representative scenarios",
          },
          {
            need: "Public LLM APIs fail security review",
            approach: "Private endpoints, scoped tool registry, and VPC-only data paths",
          },
        ],
      },
      {
        type: "related",
        title: "Related solutions",
        links: [
          { label: "AI agents for enterprise", href: "/solutions/ai-agents" },
          { label: "Generative AI platforms", href: "/solutions/generative-ai" },
          { label: "Enterprise AI strategy", href: "/solutions/enterprise-ai" },
          { label: "Portfolio — Agent Bank", href: "/portfolio/agent-bank" },
          { label: "Contact us", href: "/contact" },
        ],
      },
      {
        type: "faq",
        title: "Financial services — FAQ",
        items: [
          {
            q: "How do you support model risk management?",
            a: "We deliver evaluation harnesses, documented decision traces, and regression suites aligned to your MRM framework. Agents are designed for reconstructability—not opaque end-to-end automation.",
          },
          {
            q: "Can agents integrate with our core systems?",
            a: "Yes. We connect via approved APIs and MCP-ready tool registries with scoped credentials. Agents never receive unbounded system access.",
          },
          {
            q: "Do you replace analysts?",
            a: "No. Agents handle assembly, first-pass checks, and routine routing. Licensed professionals retain authority over decisions that move money or risk.",
          },
        ],
      },
    ],
  },
  {
    slug: "retail",
    eyebrow: "Retail",
    title: "Demand sensing and service at scale—without merchandising guesswork.",
    description:
      "Retail leaders use InheritX for demand intelligence, support command agents, and assortment copilots that connect to your commerce stack—with governance over customer data and brand voice.",
    primaryCta: { label: "Explore retail AI", href: "/contact" },
    secondaryCta: { label: "View case studies", href: "/case-studies" },
    layout: "industry",
    image: "/images/visuals/industries/industry-retail.png",
    metadata: {
      title: "Retail AI Solutions — InheritX",
      description:
        "Demand intelligence, customer support agents, and merchandising copilots for retailers navigating volatile demand and high-volume service.",
    },
    sections: [
      {
        type: "bullets",
        title: "Retail pressures we design for",
        intro:
          "Seasonality, channel fragmentation, and promotional complexity make generic AI deployments fail within a quarter.",
        items: [
          {
            title: "Volatile demand patterns",
            copy: "Forecasting and sensing models that ingest POS, web, and external signals—with human override on assortment calls.",
          },
          {
            title: "Support volume spikes",
            copy: "Agent workforces that resolve WISMO, returns, and policy questions with escalation to specialists when needed.",
          },
          {
            title: "Merchandising latency",
            copy: "Copilots that summarize sell-through, flag assortment gaps, and draft recommendations for merchant review.",
          },
          {
            title: "Brand and policy consistency",
            copy: "Generative tools bounded by approved tone guides, return policies, and regional compliance rules.",
          },
        ],
      },
      {
        type: "narrative",
        title: "Commerce AI that survives peak season",
        body: [
          "Retail operations run on thin margins and unforgiving SLAs. A chatbot that hallucinates return policies during Black Friday creates more cost than it saves. Personalization engines disconnected from inventory reality erode customer trust.",
          "InheritX connects intelligence to your OMS, CRM, and catalog systems. Agents handle high-volume, policy-bounded interactions. Generative tools assist merchants and support leads—with citations to internal playbooks, not improvised answers.",
        ],
      },
      {
        type: "matrix",
        title: "Retail challenge → governed AI response",
        rows: [
          {
            need: "Forecast misses drive stockouts and markdowns",
            approach: "Demand sensing pipelines with merchant-facing explainability and override workflows",
          },
          {
            need: "Contact centers overwhelmed during peaks",
            approach: "Support command agents integrated with order status, returns, and loyalty systems",
          },
          {
            need: "Merchants lack time to analyze assortment performance",
            approach: "Generative copilots over approved sales and inventory data with draft recommendations",
          },
          {
            need: "Marketing wants personalization without privacy risk",
            approach: "Segment-aware generation inside your data perimeter with consent-aware retrieval",
          },
        ],
      },
      {
        type: "proof",
        items: [
          { value: "Integrated", label: "Connected to OMS, CRM, and catalog" },
          { value: "On-brand", label: "Bounded by approved policy and tone" },
          { value: "Escalated", label: "Humans own exceptions and disputes" },
          { value: "Measured", label: "KPIs defined before peak deployments" },
        ],
      },
      {
        type: "steps",
        title: "Retail deployment path",
        items: [
          {
            step: "01",
            title: "Peak-readiness assessment",
            copy: "Map volume drivers, integration points, and policies that must never be improvised by AI.",
          },
          {
            step: "02",
            title: "Bounded support agents",
            copy: "Deploy agents on highest-volume, lowest-risk intents with live escalation paths to agents.",
          },
          {
            step: "03",
            title: "Merchant and ops copilots",
            copy: "Roll generative assistants to internal teams with retrieval over approved operational data.",
          },
          {
            step: "04",
            title: "Continuous eval through seasons",
            copy: "Regression on promotional scenarios, policy changes, and new SKU launches before each peak.",
          },
        ],
      },
      {
        type: "split",
        title: "Customer-facing vs. back-office AI",
        leftTitle: "Customer channels",
        leftBody: [
          "Order status, returns eligibility, and policy FAQs handled by support agents",
          "Personalized content generation within brand and consent boundaries",
          "Seamless handoff to human agents when sentiment or complexity thresholds trip",
        ],
        rightTitle: "Operations and merchandising",
        rightItems: [
          "Demand and inventory sensing dashboards with generative summaries",
          "Assortment copilots for merchant review—not autonomous buying",
          "Exception routing for supply chain and fulfillment disruptions",
          "Audit trails on every customer-facing agent response",
        ],
      },
      {
        type: "faq",
        title: "Retail AI — FAQ",
        items: [
          {
            q: "Will AI agents replace our contact center?",
            a: "Agents absorb routine, policy-bounded volume so specialists handle disputes, VIP cases, and complex exceptions. We design for augmentation with clear escalation—not unattended automation on sensitive intents.",
          },
          {
            q: "How do you protect customer data?",
            a: "Deployments run in your cloud or approved vendor perimeter. PII handling follows your retention and consent policies. Retrieval scopes exclude unauthorized datasets.",
          },
          {
            q: "Can this integrate with Shopify, Salesforce, or custom stacks?",
            a: "Yes. We integrate via your commerce APIs, CRM, and data warehouse—agents call approved tools rather than scraping public web data.",
          },
        ],
      },
      {
        type: "related",
        title: "Continue exploring",
        links: [
          { label: "AI Agents", href: "/solutions/ai-agents" },
          { label: "Generative AI", href: "/solutions/generative-ai" },
          { label: "Enterprise AI", href: "/solutions/enterprise-ai" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "manufacturing",
    eyebrow: "Manufacturing",
    title: "Quality and uptime on the line—perception plus orchestration.",
    description:
      "Edge computer vision, predictive maintenance agents, and operator feedback loops for plants where missed defects and unplanned downtime carry immediate cost.",
    primaryCta: { label: "Discuss manufacturing AI", href: "/contact" },
    secondaryCta: { label: "Computer Vision solutions", href: "/solutions/computer-vision" },
    layout: "industry",
    image: "/images/visuals/industries/industry-manufacturing.png",
    metadata: {
      title: "Manufacturing AI Solutions — InheritX",
      description:
        "Edge computer vision, predictive maintenance agents, and plant intelligence for manufacturers who need detection accuracy and operational continuity.",
    },
    sections: [
      {
        type: "narrative",
        title: "Plant constraints come first",
        body: [
          "Manufacturers cannot accept vision or agent systems that invent defects, miss safety-critical events, or sit outside MES and quality processes. Latency, OT/IT boundaries, and change control matter as much as model accuracy.",
          "InheritX designs edge perception and maintenance agents with evidence trails, operator feedback loops, and drift monitoring—so a successful pilot line can industrialize without becoming shadow IT.",
        ],
      },
      {
        type: "split",
        title: "Plant floor vs. enterprise layer",
        leftTitle: "On the line",
        leftBody: [
          "Edge vision models detect micro-defects at production speed",
          "Low-latency inference on approved hardware profiles",
          "Operator alerts with image evidence—not black-box scores alone",
        ],
        rightTitle: "Above the line",
        rightItems: [
          "Predictive maintenance agents correlating sensor, MES, and work-order data",
          "Generative runbooks and troubleshooting guides from approved manuals",
          "Exception routing to maintenance and quality engineers",
          "Central observability across lines and sites",
        ],
      },
      {
        type: "proof",
        items: [
          { value: "Edge-ready", label: "Vision deployed where latency matters" },
          { value: "Traceable", label: "Defect decisions backed by image evidence" },
          { value: "Connected", label: "MES, SCADA, and CMMS integrations" },
          { value: "Iterative", label: "Feedback loops from quality teams" },
        ],
      },
      {
        type: "steps",
        title: "Industrializing vision and agents",
        intro:
          "Pilot accuracy on a single line means nothing if the model drifts after a tooling change. We build for continuous improvement.",
        items: [
          {
            step: "01",
            title: "Line and defect taxonomy",
            copy: "Define detection classes, acceptable false-positive rates, and escalation paths with quality engineering.",
          },
          {
            step: "02",
            title: "Edge pilot with golden set",
            copy: "Train and validate on representative production imagery with held-out test sets and operator review.",
          },
          {
            step: "03",
            title: "Integrate alerts and maintenance",
            copy: "Connect vision outputs to MES reject logic and maintenance agents for correlated downtime prevention.",
          },
          {
            step: "04",
            title: "Monitor drift and retrain",
            copy: "Operational dashboards, periodic relabeling workflows, and governed model updates you control.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Manufacturing AI capabilities",
        items: [
          {
            title: "Edge computer vision",
            copy: "Surface defect, assembly verification, and safety compliance models running at line speed with explainable outputs.",
          },
          {
            title: "Predictive maintenance agents",
            copy: "Agents that synthesize sensor anomalies, maintenance history, and OEM guidance to recommend interventions.",
          },
          {
            title: "Operator assistance copilots",
            copy: "Generative retrieval over SOPs, manuals, and tribal knowledge—cited, not invented.",
          },
          {
            title: "Quality feedback loops",
            copy: "Human review queues that feed labeled data back into model improvement without shadow IT.",
          },
        ],
      },
      {
        type: "narrative",
        title: "Why disconnected plant AI fails",
        body: [
          "A vision model that flags everything erodes operator trust within weeks. Cloud-only inference adds latency that production lines cannot tolerate. Predictive maintenance dashboards that ignore work-order reality become shelfware.",
          "InheritX designs for the full loop: edge perception, enterprise orchestration, and human feedback from quality and maintenance teams. Integrations respect OT boundaries and security policies—not blanket cloud connectivity.",
        ],
      },
      {
        type: "matrix",
        title: "Operational need → technical approach",
        rows: [
          {
            need: "Micro-defects escape manual inspection",
            approach: "Edge vision with operator-in-the-loop confirmation and image audit trails",
          },
          {
            need: "Unplanned downtime on critical assets",
            approach: "Predictive agents correlating telemetry with CMMS and maintenance playbooks",
          },
          {
            need: "Operators lack instant access to SOPs",
            approach: "Governed generative retrieval over approved technical documentation",
          },
          {
            need: "Models degrade after process changes",
            approach: "Drift monitoring, relabeling workflows, and versioned deployment pipelines",
          },
        ],
      },
      {
        type: "related",
        title: "Related capabilities",
        links: [
          { label: "Computer Vision", href: "/solutions/computer-vision" },
          { label: "AI Agents", href: "/solutions/ai-agents" },
          { label: "Enterprise AI", href: "/solutions/enterprise-ai" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        type: "faq",
        title: "Manufacturing — FAQ",
        items: [
          {
            q: "Can vision run fully on-premise?",
            a: "Yes. We deploy edge inference on approved industrial hardware and keep sensitive imagery inside your OT network when required. Cloud components are optional and architected to your security team’s standards.",
          },
          {
            q: "How do you handle model drift after line changes?",
            a: "We implement drift monitoring, operator feedback capture, and governed retraining pipelines—with quality sign-off before new models reach production.",
          },
          {
            q: "Do you integrate with our MES or SCADA?",
            a: "We connect through approved interfaces and respect OT segmentation. Agents read telemetry and work orders via scoped integrations—not ad-hoc plant floor connectivity.",
          },
        ],
      },
    ],
  },
  {
    slug: "insurance",
    eyebrow: "Insurance",
    title: "Claims speed with control—policy-grounded from first notice.",
    description:
      "Claims acceleration agents, citation-backed knowledge fabric, and underwriting assist for carriers and MGAs who must move faster without inconsistent policy application.",
    primaryCta: { label: "Discuss insurance AI", href: "/contact" },
    secondaryCta: { label: "View case studies", href: "/case-studies" },
    layout: "industry",
    image: "/images/visuals/industries/industry-insurance.png",
    metadata: {
      title: "Insurance AI Solutions — InheritX",
      description:
        "Claims agents, policy-aware knowledge retrieval, and underwriting assist for insurers balancing speed, consistency, and regulatory scrutiny.",
    },
    sections: [
      {
        type: "matrix",
        title: "Insurance operating pressures",
        intro: "Each function has different risk tolerance—AI must match the control posture of the workflow it touches.",
        rows: [
          {
            need: "Claims adjusters buried in document assembly",
            approach: "Intake agents that extract FNOL details and attach evidence for adjuster review",
          },
          {
            need: "Inconsistent answers on coverage questions",
            approach: "Citation-backed retrieval over policy wordings and internal bulletins",
          },
          {
            need: "Underwriters lack time for complex submissions",
            approach: "Copilots that summarize submissions and flag gaps—never auto-binding risk",
          },
          {
            need: "Regulators question AI in claims decisions",
            approach: "Full decision traces, human gates on payments, and evaluation on historical scenarios",
          },
        ],
      },
      {
        type: "narrative",
        title: "The claims and underwriting gap",
        body: [
          "Manual claims handling creates bottlenecks that erode policyholder experience. At the same time, adjusters cannot trust generic chat tools that invent coverage interpretations. Underwriters face submission volume with fragmented guidance across product lines and states.",
          "InheritX builds agents and retrieval systems grounded in your policy corpus. Acceleration happens in assembly, routing, and first-pass analysis—licensed professionals retain authority over coverage determinations and bind decisions.",
        ],
      },
      {
        type: "bullets",
        title: "Where AI earns its place in insurance",
        items: [
          {
            title: "Claims acceleration agents",
            copy: "Multi-step workflows for document intake, damage assessment support, and reserve drafting—with adjuster approval gates.",
          },
          {
            title: "Policy knowledge fabric",
            copy: "Generative search over endorsements, bulletins, and state variations with mandatory citations.",
          },
          {
            title: "Underwriting assist copilots",
            copy: "Submission summaries, loss history synthesis, and checklist completion for underwriter review.",
          },
          {
            title: "Service and broker support",
            copy: "Bounded assistants for coverage FAQs and status updates with escalation on disputed interpretations.",
          },
        ],
      },
      {
        type: "steps",
        title: "Carrier deployment sequence",
        items: [
          {
            step: "01",
            title: "Policy corpus and access model",
            copy: "Ingest approved wordings and bulletins; define role-based retrieval by line, state, and user type.",
          },
          {
            step: "02",
            title: "Knowledge pilot for internal users",
            copy: "Deploy citation-backed Q&A for underwriters and claims leads before any customer-facing use.",
          },
          {
            step: "03",
            title: "Claims intake agents",
            copy: "Automate assembly and routing on selected claim types with adjuster oversight on all determinations.",
          },
          {
            step: "04",
            title: "Governance and expansion",
            copy: "Regulatory review packages, evaluation harnesses, and phased rollout by product and geography.",
          },
        ],
      },
      {
        type: "proof",
        items: [
          { value: "Policy-cited", label: "Answers tied to approved wordings" },
          { value: "Adjuster-led", label: "Humans own coverage calls" },
          { value: "Traceable", label: "Decision paths for regulatory review" },
          { value: "Line-aware", label: "Retrieval scoped by product and state" },
        ],
      },
      {
        type: "split",
        title: "Automation boundaries in insurance",
        leftTitle: "Appropriate for agents",
        leftBody: [
          "Document extraction and FNOL data normalization",
          "Routing by complexity, line, and jurisdiction",
          "Drafting reserve recommendations for adjuster edit",
          "Internal policy Q&A with citations",
        ],
        rightTitle: "Requires licensed judgment",
        rightItems: [
          "Coverage determinations and denial rationale",
          "Payment authorization and settlement offers",
          "Underwriting bind decisions and pricing",
          "Regulatory filings and market conduct responses",
        ],
      },
      {
        type: "faq",
        title: "Insurance AI — FAQ",
        items: [
          {
            q: "Can AI auto-approve claims?",
            a: "We design for acceleration, not unattended adjudication on complex claims. Straight-through processing may apply only where you explicitly define low-risk, rules-bound scenarios—with full audit trails.",
          },
          {
            q: "How do you handle state-specific policy variations?",
            a: "Retrieval indexes are segmented by jurisdiction and product line. Agents surface the applicable wording with citations; ambiguous cases escalate to specialists.",
          },
          {
            q: "Will this pass regulatory examination?",
            a: "We document data flows, decision traces, and human oversight models for your compliance team. Architecture aligns to your governance framework—we do not substitute for your regulatory counsel.",
          },
        ],
      },
      {
        type: "related",
        title: "Explore further",
        links: [
          { label: "AI Agents", href: "/solutions/ai-agents" },
          { label: "Generative AI", href: "/solutions/generative-ai" },
          { label: "Enterprise AI", href: "/solutions/enterprise-ai" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "logistics",
    eyebrow: "Logistics",
    title: "Network clarity under exception load.",
    description:
      "Document intelligence, exception-handling agents, and network optimization support for operators who cannot afford document delays or blind spots in the control tower.",
    primaryCta: { label: "Discuss logistics AI", href: "/contact" },
    secondaryCta: { label: "AI Automation", href: "/solutions/enterprise-ai" },
    layout: "industry",
    image: "/images/visuals/industries/industry-logistics.png",
    metadata: {
      title: "Logistics AI Solutions — InheritX",
      description:
        "Document intelligence, exception agents, and network optimization for logistics operators managing high document volume and disruption.",
    },
    sections: [
      {
        type: "steps",
        title: "Exception handling from document to resolution",
        intro:
          "Logistics exceptions cascade—AI must connect paperwork, tracking, and carrier communication in one governed workflow.",
        items: [
          {
            step: "01",
            title: "Document capture and validation",
            copy: "Extract BOL, customs, and POD fields; flag discrepancies against shipment records for operator review.",
          },
          {
            step: "02",
            title: "Exception classification",
            copy: "Agents categorize delay, damage, and routing exceptions and attach relevant shipment context.",
          },
          {
            step: "03",
            title: "Resolution playbook execution",
            copy: "Draft carrier communications, reroute proposals, and customer updates from approved templates.",
          },
          {
            step: "04",
            title: "Human approval and close-out",
            copy: "Operators approve high-impact changes; every action logged for customer and audit reconstruction.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Logistics AI plays",
        items: [
          {
            title: "Document intelligence",
            copy: "OCR plus generative validation for bills of lading, customs forms, and invoices—integrated with TMS and WMS.",
          },
          {
            title: "Exception-handling agents",
            copy: "Multi-agent workflows that investigate delays, propose reroutes, and coordinate stakeholder updates.",
          },
          {
            title: "Control tower copilots",
            copy: "Generative summaries across in-transit inventory, carrier performance, and disruption signals.",
          },
          {
            title: "Forecasting and capacity models",
            copy: "Demand and lane forecasting with planner override—not autonomous network reconfiguration.",
          },
        ],
      },
      {
        type: "split",
        title: "Documents vs. dynamic network decisions",
        leftTitle: "Document-heavy workflows",
        leftBody: [
          "High-volume extraction with human verification on low-confidence fields",
          "Cross-reference against TMS shipment records",
          "Audit-ready document trails for customs and customer disputes",
        ],
        rightTitle: "Network and exception workflows",
        rightItems: [
          "Real-time exception triage with carrier and customer context",
          "Playbook-driven agent recommendations for reroute and communication",
          "Planner approval on capacity and cost-impacting changes",
          "Integration with control tower dashboards—not standalone bots",
        ],
      },
      {
        type: "narrative",
        title: "Why logistics AI must respect the exception",
        body: [
          "Standard shipments run on rules. Margin and customer satisfaction are won or lost on exceptions—customs holds, weather diversions, capacity crunches. Generic automation that cannot read a bill of lading or draft a carrier escalation leaves operators stitching systems manually.",
          "InheritX targets the exception layer: document intelligence that feeds validated data into your TMS, and agents that execute playbooks with human approval on anything that changes cost, SLA, or compliance posture.",
        ],
      },
      {
        type: "proof",
        items: [
          { value: "Validated", label: "Document fields verified against TMS" },
          { value: "Playbook-bound", label: "Agents follow approved exception flows" },
          { value: "Integrated", label: "TMS, WMS, and carrier API connections" },
          { value: "Accountable", label: "Operator approval on high-impact actions" },
        ],
      },
      {
        type: "matrix",
        title: "Logistics need → approach",
        rows: [
          {
            need: "Document turnaround delays customs clearance",
            approach: "Document intelligence with confidence scoring and operator verification queues",
          },
          {
            need: "Control tower lacks actionable exception context",
            approach: "Agents that assemble shipment, carrier, and customer history in one view",
          },
          {
            need: "Disruption storms overwhelm coordinators",
            approach: "Playbook automation with templated communications and planner escalation",
          },
          {
            need: "Forecasting ignores ground truth from operations",
            approach: "Models fed by TMS and WMS data with planner override workflows",
          },
        ],
      },
      {
        type: "related",
        title: "Related solutions",
        links: [
          { label: "AI Agents", href: "/solutions/ai-agents" },
          { label: "Computer Vision", href: "/solutions/computer-vision" },
          { label: "Enterprise AI", href: "/solutions/enterprise-ai" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        type: "faq",
        title: "Logistics — FAQ",
        items: [
          {
            q: "Can document AI handle poor-quality scans?",
            a: "We combine OCR with validation against TMS records and route low-confidence extractions to operator review—never silent acceptance of bad data.",
          },
          {
            q: "Will agents reroute shipments automatically?",
            a: "Agents propose reroutes and draft communications from approved playbooks. Planners approve changes that affect cost, SLA, or contractual obligations.",
          },
          {
            q: "How do you integrate with our TMS?",
            a: "Via approved APIs and event streams. Tool access is scoped—agents read and draft within permissions you define, with full action logging.",
          },
        ],
      },
    ],
  },
  {
    slug: "government",
    eyebrow: "Government",
    title: "Mission systems citizens can trust.",
    description:
      "Secure case automation, private cloud deployments, and auditability by design for public institutions modernizing legacy workflows under sovereignty and security constraints.",
    primaryCta: { label: "Discuss public sector AI", href: "/contact" },
    secondaryCta: { label: "Enterprise AI platforms", href: "/solutions/enterprise-ai" },
    layout: "industry",
    image: "/images/visuals/industries/industry-government.png",
    metadata: {
      title: "Government AI Solutions — InheritX",
      description:
        "Secure case automation, sovereign deployments, and full auditability for government agencies modernizing citizen services and internal operations.",
    },
    sections: [
      {
        type: "split",
        title: "Public sector constraints we design for",
        leftTitle: "Non-negotiables",
        leftBody: [
          "Data sovereignty and classified or sensitive handling requirements",
          "Transparent routing and decision reconstruction for oversight",
          "Accessibility and equitable service delivery mandates",
        ],
        rightTitle: "Modernization targets",
        rightItems: [
          "Legacy case management workflows with opaque handoffs",
          "Backlogs in document review and eligibility determination support",
          "Knowledge trapped in policy PDFs and tribal expertise",
          "Citizen inquiry volume exceeding staffed capacity",
        ],
      },
      {
        type: "matrix",
        title: "Agency need → secure approach",
        intro: "Government AI succeeds when architecture precedes features—security and auditability are features, not afterthoughts.",
        rows: [
          {
            need: "Case backlogs delay citizen outcomes",
            approach: "Intake agents that normalize applications and route by rules—with caseworker review",
          },
          {
            need: "Staff cannot quickly locate policy guidance",
            approach: "Citation-backed retrieval over approved regulations and internal manuals",
          },
          {
            need: "Cloud requirements conflict with sovereignty rules",
            approach: "Private cloud or air-gapped deployments with approved model endpoints",
          },
          {
            need: "Oversight bodies require decision transparency",
            approach: "Full action ledgers, human gates, and evaluation on representative cases",
          },
        ],
      },
      {
        type: "narrative",
        title: "Modernization without trust erosion",
        body: [
          "Citizens expect digital responsiveness; agencies operate on decades-old case systems and paper-heavy processes. Off-the-shelf SaaS AI often fails security accreditation. Opaque automation erodes public trust when decisions cannot be explained.",
          "InheritX builds for accredited environments: sovereign deployments, case automation with caseworker authority preserved, and retrieval grounded in official policy corpora. Every recommendation is reconstructable for oversight, FOIA, and internal audit.",
        ],
      },
      {
        type: "proof",
        items: [
          { value: "Sovereign", label: "Deploy in approved cloud or on-prem" },
          { value: "Transparent", label: "Decision paths for oversight review" },
          { value: "Accessible", label: "Designed for equitable citizen access" },
          { value: "Owned", label: "Capability transfer to your teams" },
        ],
      },
      {
        type: "bullets",
        title: "Government AI capabilities",
        items: [
          {
            title: "Secure case automation",
            copy: "Agents that intake applications, validate completeness, and route to caseworkers with full audit trails.",
          },
          {
            title: "Policy-grounded knowledge retrieval",
            copy: "Generative search over regulations, manuals, and internal guidance—with citations for staff use.",
          },
          {
            title: "Citizen inquiry assistants",
            copy: "Bounded assistants for status and FAQ intents with seamless handoff to staffed channels.",
          },
          {
            title: "Document review support",
            copy: "Extraction and summarization for caseworker review—not autonomous eligibility determinations.",
          },
        ],
      },
      {
        type: "steps",
        title: "Accredited deployment path",
        items: [
          {
            step: "01",
            title: "Authority and ATO alignment",
            copy: "Architecture review with security, privacy, and legal stakeholders before feature design.",
          },
          {
            step: "02",
            title: "Internal knowledge pilot",
            copy: "Deploy staff-facing retrieval over approved corpora in the target environment.",
          },
          {
            step: "03",
            title: "Case intake automation",
            copy: "Bounded agents on selected form types with caseworker approval on all determinations.",
          },
          {
            step: "04",
            title: "Operational transfer",
            copy: "Training, runbooks, and IP handoff so your teams operate and extend the platform.",
          },
        ],
      },
      {
        type: "related",
        title: "Related resources",
        links: [
          { label: "Enterprise AI", href: "/solutions/enterprise-ai" },
          { label: "Generative AI", href: "/solutions/generative-ai" },
          { label: "AI Agents", href: "/solutions/ai-agents" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        type: "faq",
        title: "Government — FAQ",
        items: [
          {
            q: "Can you deploy in FedRAMP or IL environments?",
            a: "We architect to your accreditation requirements—private cloud, GovCloud, or on-premise model endpoints. Specific ATO boundaries are defined jointly with your security and compliance teams.",
          },
          {
            q: "Will AI make eligibility decisions for citizens?",
            a: "We automate intake, assembly, and routing. Determinations remain with authorized caseworkers unless you explicitly define rules-bound scenarios with full oversight documentation.",
          },
          {
            q: "How do you support FOIA and oversight requests?",
            a: "Action ledgers capture inputs, retrieval sources, agent steps, and human approvals—enabling reconstruction without ad-hoc log archaeology.",
          },
        ],
      },
    ],
  },
];

export function getIndustryTopic(slug: string): TopicPage | undefined {
  return industryTopics.find((topic) => topic.slug === slug);
}
