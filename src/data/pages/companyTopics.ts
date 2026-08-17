import { contactHref } from "@/data/cta/intents";
import type { TopicPage } from "./topic";

export type { TopicLink, TopicSection, TopicPage } from "./topic";

const companyTopics: TopicPage[] = [
  {
    slug: "ai-vision",
    eyebrow: "AI vision",
    title: "Intelligence as governed infrastructure you own.",
    description:
      "InheritX treats AI as enterprise infrastructure—reliable, observable, and entirely under your control. Not rented capability. Not pilot theater. Systems that compound.",
    primaryCta: { label: "Book an AI strategy call", href: contactHref("strategy") },
    secondaryCta: { label: "Explore solutions", href: "/solutions" },
    layout: "narrative",
    metadata: {
      title: "Our AI vision | InheritX",
      description:
        "Intelligence should behave like infrastructure: governed, measurable, and owned by the enterprise. InheritX designs AI systems for production—not demos.",
    },
    sections: [
      {
        type: "narrative",
        title: "The shift from experiments to infrastructure",
        body: [
          "Most enterprises are past the question of whether AI matters. The question now is whether intelligence will behave like email, ERP, or identity—always on, auditable, and owned—or like a vendor subscription that resets every renewal cycle.",
          "We believe intelligence belongs in the second category of serious infrastructure. That means private deployment, explicit governance, evaluation before release, and IP that stays with the organization that funded the work.",
          "Our vision is not maximal autonomy for its own sake. It is governed capability: agents and platforms that execute real work inside policy boundaries, with humans accountable for exceptions and outcomes.",
        ],
      },
      {
        type: "bullets",
        title: "What governed infrastructure means in practice",
        intro: "Three design commitments shape every program we lead.",
        items: [
          {
            title: "Systems over slides",
            copy: "Strategy earns its place when it ships into production with observability, evaluation harnesses, and operational controls—not when it lives in a deck.",
          },
          {
            title: "Sovereignty by design",
            copy: "Private deployment, full IP transfer, and zero reuse of your proprietary weights, corpora, or interaction data. Partnership is not lock-in.",
          },
          {
            title: "Agents that work",
            copy: "Multi-Agent Systems that plan, call tools, escalate exceptions, and keep humans in the decision loop for high-risk actions.",
          },
        ],
      },
      {
        type: "split",
        title: "Infrastructure thinking vs. pilot thinking",
        leftTitle: "What infrastructure demands",
        leftBody: [
          "Clear ownership of models, retrieval corpora, orchestration, and workflow glue.",
          "Security and privacy designed in before the first sprint—not patched after a successful demo.",
          "Metrics tied to business outcomes: time, cost, accuracy, risk reduction, or decision quality.",
          "Enablement so capability compounds after the engagement ends.",
        ],
        rightTitle: "What pilot theater optimizes for",
        rightItems: [
          "Fluency without traceability",
          "Shared API keys without estate control",
          "Success defined as stakeholder applause",
          "No path from proof to platform",
          "Vendor dependency disguised as speed",
        ],
      },
      {
        type: "related",
        title: "Continue exploring",
        links: [
          { label: "Why InheritX", href: "/company/why-inheritx" },
          { label: "Our Approach", href: "/company/approach" },
          { label: "Enterprise AI solutions", href: "/solutions" },
          { label: "Our Team", href: "/team" },
          { label: "Contact", href: contactHref("strategy") },
        ],
      },
      {
        type: "faq",
        title: "Common questions",
        items: [
          {
            q: "Does this vision require building everything in-house?",
            a: "No. It requires owning the capability that matters—fine-tunes, agents, retrieval, orchestration, and integrations—while using commodity models and cloud primitives where they add speed without creating dependency.",
          },
          {
            q: "How does governance differ from slowing innovation?",
            a: "Governance is what lets innovation survive audit, scale across business units, and earn executive trust. Without it, pilots stall at the first security review or operational incident.",
          },
          {
            q: "Where should we start if our estate is still experimental?",
            a: "Start with one workflow where the KPI is clear, the data is accessible, and the risk profile is manageable. Design it as infrastructure from day one—even if the first release is narrow.",
          },
        ],
      },
    ],
  },
  {
    slug: "why-inheritx",
    eyebrow: "Why InheritX",
    title: "Your data. Your models. Your IP.",
    description:
      "Enterprises choose InheritX when pilots are no longer enough—when we build and hand over systems you own: code, fine-tuned weights, and private-cloud deployment with zero third-party data sharing.",
    primaryCta: { label: "Book an AI strategy call", href: contactHref("strategy") },
    secondaryCta: { label: "View case studies", href: "/case-studies" },
    layout: "narrative",
    metadata: {
      title: "Why InheritX | Enterprise AI Partner",
      description:
        "Production AI with full IP ownership and delivery discipline for regulated enterprises. InheritX industrializes intelligence—not experiments.",
    },
    sections: [
      {
        type: "proof",
        items: [
          { value: "14+", label: "Years delivery DNA for AI programs" },
          { value: "600+", label: "Engagements informing AI delivery" },
          { value: "18", label: "Industries with AI-ready programs" },
          { value: "97%", label: "Client retention" },
        ],
      },
      {
        type: "narrative",
        title: "Built for buyers who cannot afford theater",
        body: [
          "InheritX is an Enterprise AI Solutions company—an AI-native enterprise partner. We design, govern, and industrialize intelligence systems—agents, platforms, and automation—so leaders own capability, not demos. We are not a foundation-model vendor and not a classic staff-augmentation broker.",
          "Our clients operate where mistakes have consequences: healthcare, finance, insurance, manufacturing, logistics, and public institutions. They need partners who treat security, privacy, and auditability as product requirements—not change requests after launch.",
          "We refuse the trade that many AI vendors offer: speed today for dependency tomorrow. Code, fine-tunes, agents, and workflows transfer. Your competitive advantage stays yours.",
        ],
      },
      {
        type: "matrix",
        title: "How we show up against common enterprise needs",
        intro: "Buyers come to us with different mandates. Our engagement models map to the decision you are actually trying to make.",
        rows: [
          {
            need: "We need a board-ready AI roadmap with realistic sequencing",
            approach: "AI consulting and architecture—data readiness, model strategy, governance, and investment phasing in weeks, not quarters of slideware.",
          },
          {
            need: "We need private AI inside our VPC with full IP transfer",
            approach: "Governed intelligence platforms deployed into your estate, with retrieval, generation, and controls designed for regulated buyers.",
          },
          {
            need: "We need agents that execute work—not chat that impresses",
            approach: "Agent workforces with tool permissions, traces, evaluation harnesses, and human approval gates for high-risk actions.",
          },
          {
            need: "We have a roadmap but lack senior execution capacity",
            approach: "Embedded AI Engineering and dedicated squads embedded in your rituals—shipping under your standards, not staff-augmentation theater.",
          },
        ],
      },
      {
        type: "bullets",
        title: "Principles that do not bend",
        items: [
          {
            title: "You own the IP",
            copy: "Models, agents, orchestration, and workflow glue transfer on delivery. We do not train public systems on your proprietary interactions.",
          },
          {
            title: "Regulated reality first",
            copy: "Identity, role-based retrieval, audit trails, and escalation paths are designed in—not negotiated after a successful pilot.",
          },
          {
            title: "Measure what matters",
            copy: "Every engagement defines KPIs before build. If success cannot be named, the program is not ready to scale.",
          },
          {
            title: "AI talent with accountability",
            copy: "Embedded engineers and squads own outcomes under your architecture and security standards—not ticket throughput.",
          },
        ],
      },
      {
        type: "related",
        title: "Go deeper",
        links: [
          { label: "Our AI Vision", href: "/company/ai-vision" },
          { label: "Our Approach", href: "/company/approach" },
          { label: "Security practices", href: "/company/security" },
          { label: "IP Ownership", href: "/company/ip-ownership" },
          { label: "Engagement models", href: "/resources/engagement-models" },
          { label: "Contact", href: contactHref("strategy") },
        ],
      },
    ],
  },
  {
    slug: "approach",
    eyebrow: "Our approach",
    title: "From discovery to production.",
    description:
      "Discover, strategise, prototype, deploy, and scale—with governance and ownership in every phase. Typical engagements move from feasibility to private-cloud go-live with full IP handover.",
    primaryCta: { label: "Book an AI strategy call", href: contactHref("strategy") },
    secondaryCta: { label: "Explore solutions", href: "/solutions" },
    layout: "narrative",
    metadata: {
      title: "Our approach | InheritX Enterprise AI",
      description:
        "A disciplined path from executive mandate to industrialized AI: discovery, blueprint, pilot to proof, and scale—with governance and IP ownership throughout.",
    },
    sections: [
      {
        type: "steps",
        title: "Four phases, one operating discipline",
        intro: "Programs flex in duration and shape, but the sequence holds. Skipping a phase is how pilots die quietly.",
        items: [
          {
            step: "01",
            title: "Discovery",
            copy: "Map opportunity, constraints, data readiness, and the operating model gaps that block scale. Name the KPI before tooling conversations begin.",
          },
          {
            step: "02",
            title: "Blueprint",
            copy: "Architecture for private AI estates, agent ecosystems, integrations, security, and LLMOps posture—written for security review and executive decision-making.",
          },
          {
            step: "03",
            title: "Pilot to proof",
            copy: "Ship a narrow, production-grade capability with evaluation harnesses, observability, and exception handling—not a sandbox that cannot survive Monday morning.",
          },
          {
            step: "04",
            title: "Industrialize",
            copy: "Enablement, platform patterns, and handover so capability compounds across business units after the initial squad moves on.",
          },
        ],
      },
      {
        type: "narrative",
        title: "Why sequence matters more than speed",
        body: [
          "Enterprises often rush to build because competitors are visible in headlines. The failure mode is familiar: a fluent demo, vague success criteria, no owner for exceptions, and a security review that arrives too late.",
          "Our approach forces the decisions that industrialization requires—what moves if this works, which systems are in scope, who owns risk, and what must be true to scale—before the first sprint.",
          "That discipline is not bureaucracy. It is how regulated buyers protect advantage while still moving faster than organizations stuck in endless pilot loops.",
        ],
      },
      {
        type: "split",
        title: "What we bring vs. what you keep",
        leftTitle: "InheritX delivers",
        leftBody: [
          "Senior architects and engineers who have shipped complex platforms before AI was a category.",
          "Patterns for governed agents, private retrieval, evaluation, and cost control.",
          "Delivery leadership that keeps stakeholders aligned and risks visible weekly.",
          "Enablement artifacts—runbooks, eval suites, and architecture decisions—that outlive the engagement.",
        ],
        rightTitle: "You retain",
        rightItems: [
          "Full IP on code, fine-tunes, and agents",
          "Control of deployment estate and data boundaries",
          "Decision authority on policy and risk appetite",
          "Internal teams upskilled to operate what we build",
          "Freedom from vendor lock-in",
        ],
      },
      {
        type: "bullets",
        title: "After handover",
        intro:
          "Ownership raises a fair question: who supports the system next? Options are explicit—never forced dependency.",
        items: [
          {
            title: "Hypercare window",
            copy: "A defined period after go-live for stabilization, knowledge transfer, and rapid response on issues tied to the delivered system.",
          },
          {
            title: "Advisory retainer (optional)",
            copy: "When offered, ongoing architecture and optimization advice without repossessing your IP or requiring a rented platform.",
          },
          {
            title: "Enhancement waves",
            copy: "Additional scoped builds as new workflows industrialize—same ownership model as the original program.",
          },
          {
            title: "Your operations remain yours",
            copy: "You are not required to keep InheritX online to run what you own. Handover is designed for internal operability.",
          },
        ],
      },
      {
        type: "related",
        title: "Related",
        links: [
          { label: "Our AI Vision", href: "/company/ai-vision" },
          { label: "Why InheritX", href: "/company/why-inheritx" },
          { label: "Security practices", href: "/company/security" },
          { label: "IP Ownership", href: "/company/ip-ownership" },
          { label: "Production readiness", href: "/resources/production-readiness" },
          { label: "Contact", href: contactHref("strategy") },
        ],
      },
      {
        type: "faq",
        title: "Engagement questions",
        items: [
          {
            q: "Can we enter at pilot if we already have a strategy?",
            a: "Yes—if the blueprint decisions are documented: KPI, scope, exception ownership, and scale criteria. If those are missing, we will recommend a short architecture phase first.",
          },
          {
            q: "Do you work alongside internal teams or replace them?",
            a: "Alongside, by default. The goal is capability transfer—your teams should be stronger operators when we step back, not dependent on permanent embeds.",
          },
          {
            q: "How do you handle programs that span multiple business units?",
            a: "Industrialization includes platform patterns and governance models that business units can adopt without re-solving security and evaluation from scratch each time.",
          },
        ],
      },
    ],
  },
  {
    slug: "security",
    eyebrow: "Security & Compliance",
    title: "Security practices for private, production AI.",
    description:
      "How InheritX approaches identity, data boundaries, private deployment, and honest compliance language—without claiming certifications we have not earned.",
    primaryCta: { label: "Book an AI strategy call", href: contactHref("strategy") },
    secondaryCta: { label: "Security FAQ", href: "/resources/security-faq" },
    layout: "narrative",
    metadata: {
      title: "Security & compliance | InheritX",
      description:
        "InheritX security practices for private-cloud AI: data boundaries, access control, auditability, and precise compliance language for enterprise buyers.",
    },
    sections: [
      {
        type: "narrative",
        title: "What we commit to—and what we do not claim",
        body: [
          "Enterprise buyers deserve precise language. InheritX designs AI systems for private deployment, attributable actions, and customer-controlled data boundaries. We use phrases such as GDPR-aligned practices and HIPAA-ready architecture patterns when they describe how we build—not as substitutes for formal certifications.",
          "If a specific attestation, questionnaire answer, or certificate is required for your procurement process, we will state clearly whether we hold it today, are pursuing it, or will support your review with architecture evidence and contractual controls.",
          "Certification status is shared factually during vendor diligence—we do not publish blanket certification claims on this site without evidence.",
        ],
      },
      {
        type: "bullets",
        title: "Security design defaults",
        intro: "These are the patterns we apply on production AI engagements unless your estate requires a documented exception.",
        items: [
          {
            title: "Customer-tenant deployment",
            copy: "Workloads target your AWS, Azure, or GCP accounts (or equivalent private estate)—not a multi-tenant InheritX SaaS that reuses your data across customers.",
          },
          {
            title: "Least-privilege access",
            copy: "Engagement access uses time-bound identities, scoped roles, and your approval processes for production systems and sensitive data stores.",
          },
          {
            title: "Secrets and configuration hygiene",
            copy: "Secrets stay in your vaults/KMS patterns; we avoid embedding credentials in source and prefer infrastructure-as-code you can audit.",
          },
          {
            title: "Auditability for AI actions",
            copy: "Agent and generation workflows are designed with traces, approval gates for high-risk tools, and retention aligned to your policy—not opaque chat logs.",
          },
          {
            title: "No public-model training on your proprietary data",
            copy: "InheritX does not use your proprietary corpora, prompts, or fine-tunes to train public foundation models.",
          },
        ],
      },
      {
        type: "split",
        title: "Compliance language we use carefully",
        leftTitle: "Appropriate claims",
        leftBody: [
          "GDPR-aligned practices for data minimization, purpose limitation, and processor/controller clarity in contracts.",
          "HIPAA-ready architecture patterns for healthcare workloads (private estate, access control, audit logging)—when the engagement scope requires them.",
          "NDA-protected discovery and diligence discussions on request.",
          "Support for your vendor security questionnaire with factual answers.",
        ],
        rightTitle: "Claims we avoid unless true",
        rightItems: [
          "“HIPAA certified” or “GDPR certified” as InheritX entity claims without evidence",
          "Implied formal partnership status with model or cloud vendors",
          "Guarantees that every workload is automatically compliant in every jurisdiction",
          "Security theater language disconnected from how systems are actually deployed",
        ],
      },
      {
        type: "related",
        title: "Related",
        links: [
          { label: "Security FAQ", href: "/resources/security-faq" },
          { label: "Diligence pack overview", href: "/resources/diligence-pack" },
          { label: "Enterprise References", href: "/resources/enterprise-references" },
          { label: "IP Ownership", href: "/company/ip-ownership" },
          { label: "AI Governance", href: "/resources/ai-governance" },
          { label: "Contact — diligence", href: "/contact?intent=security" },
        ],
      },
      {
        type: "faq",
        title: "Security questions",
        items: [
          {
            q: "Where does customer data live during an engagement?",
            a: "In your designated cloud projects/subscriptions and approved environments. We do not require a shared InheritX multi-tenant data lake for delivery.",
          },
          {
            q: "Do you use our data to improve models for other clients?",
            a: "No. Proprietary data, fine-tunes, and interaction logs from your program are not reused to train systems for other customers or public models.",
          },
          {
            q: "Can we run a security review before build?",
            a: "Yes. Blueprint and consulting phases are designed to survive CISO review. Bring your questionnaire—we answer factually and flag gaps honestly.",
          },
        ],
      },
    ],
  },
  {
    slug: "ip-ownership",
    eyebrow: "IP Ownership",
    title: "What you own when we hand over.",
    description:
      "“You own the code” is a contractual and technical commitment—not a slogan. Here is the scope InheritX transfers on production AI engagements.",
    primaryCta: { label: "Book an AI strategy call", href: contactHref("strategy") },
    secondaryCta: { label: "Our Approach", href: "/company/approach" },
    layout: "narrative",
    metadata: {
      title: "IP ownership & Handover | InheritX",
      description:
        "InheritX IP handover scope: code, fine-tunes, agents, prompts, and infrastructure-as-code transferred to the customer—without renting back the platform.",
    },
    sections: [
      {
        type: "narrative",
        title: "Ownership is the point of the engagement",
        body: [
          "Many AI vendors accelerate pilots by keeping the valuable layer—orchestration, fine-tunes, evaluation, and workflow glue—inside a rented platform. InheritX is built the other way: we implement capability inside your estate and transfer what we create for you.",
          "Exact transfer terms are defined in the statement of work and master agreement for each engagement. The lists below describe our standard intent for production build programs. A detailed IP schedule can be shared under NDA during diligence.",
        ],
      },
      {
        type: "bullets",
        title: "Typically transferred to you",
        intro: "Unless the contract states otherwise, production build engagements are designed so you retain:",
        items: [
          {
            title: "Application & agent code",
            copy: "Services, APIs, UIs, agent logic, tool adapters, and workflow orchestration implemented for your program.",
          },
          {
            title: "Fine-tunes & adapters trained for you",
            copy: "Model weights/adapters fine-tuned on your approved data for your use—remaining your IP.",
          },
          {
            title: "Prompts, policies, and evaluation assets",
            copy: "Prompt libraries, guardrail configs, offline eval suites, and runbooks created for your system.",
          },
          {
            title: "Infrastructure-as-code for your estate",
            copy: "IaC and deployment definitions targeting your cloud accounts so your teams can operate and extend the system.",
          },
        ],
      },
      {
        type: "bullets",
        title: "What you should not assume is “owned”",
        items: [
          {
            title: "Third-party foundation models",
            copy: "Commercial model licenses (OpenAI, Anthropic, etc.) remain governed by those providers’ terms. We help you choose and integrate—they are not InheritX IP to transfer.",
          },
          {
            title: "Your pre-existing systems & data",
            copy: "Your ERP/EHR data, brands, and prior codebases remain yours; we do not claim them.",
          },
          {
            title: "InheritX accelerators reused across clients",
            copy: "Generic internal tooling may speed delivery. Anything material reused is disclosed in the SOW; customer-specific work product still transfers.",
          },
        ],
      },
      {
        type: "steps",
        title: "Handover package (standard intent)",
        intro: "At go-live, production programs aim to leave your team with operable ownership—not tribal knowledge.",
        items: [
          {
            step: "01",
            title: "Source & environments",
            copy: "Repositories, CI/CD definitions, and environment documentation under your control.",
          },
          {
            step: "02",
            title: "Security & operations",
            copy: "Access model notes, secret locations, observability dashboards, and incident basics agreed for hypercare.",
          },
          {
            step: "03",
            title: "Evaluation & governance",
            copy: "Eval harnesses, approval-gate configuration, and policy docs for high-risk actions.",
          },
          {
            step: "04",
            title: "Enablement",
            copy: "Runbooks and walkthroughs so internal owners can operate, extend, and audit the system after we step back.",
          },
        ],
      },
      {
        type: "related",
        title: "Related",
        links: [
          { label: "Security practices", href: "/company/security" },
          { label: "Our Approach", href: "/company/approach" },
          { label: "Diligence pack", href: "/resources/diligence-pack" },
          { label: "Why InheritX", href: "/company/why-inheritx" },
          { label: "Contact", href: contactHref("strategy") },
        ],
      },
      {
        type: "faq",
        title: "Ownership questions",
        items: [
          {
            q: "Do you retain a license to reuse our solution for others?",
            a: "Customer-specific work product is not resold as a productized clone of your system. Contract language governs residual knowledge and any shared accelerators—ask for the IP schedule in diligence.",
          },
          {
            q: "What about prompts and eval sets?",
            a: "Assets created for your program are intended to transfer with the system so you can continue improving quality after handover.",
          },
          {
            q: "Can legal review this before we sign?",
            a: "Yes. We expect enterprise counsel to review ownership, data processing, and confidentiality terms before build begins.",
          },
        ],
      },
    ],
  },
];

export function getCompanyTopic(slug: string): TopicPage | undefined {
  return companyTopics.find((topic) => topic.slug === slug);
}

export { companyTopics };
