import type { TopicPage } from "./topic";

export type { TopicLink, TopicSection, TopicPage } from "./topic";

const companyTopics: TopicPage[] = [
  {
    slug: "ai-vision",
    eyebrow: "AI Vision",
    title: "Intelligence as governed infrastructure you own.",
    description:
      "InheritX treats AI as enterprise infrastructure—reliable, observable, and entirely under your control. Not rented capability. Not pilot theater. Systems that compound.",
    primaryCta: { label: "Explore solutions", href: "/solutions" },
    secondaryCta: { label: "Book a strategy call", href: "/contact" },
    layout: "narrative",
    metadata: {
      title: "Our AI Vision | InheritX",
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
            copy: "Multi-agent systems that plan, call tools, escalate exceptions, and keep humans in the decision loop for high-risk actions.",
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
          { label: "Our approach", href: "/company/approach" },
          { label: "Enterprise AI solutions", href: "/solutions" },
          { label: "Our team", href: "/team" },
          { label: "Contact", href: "/contact" },
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
    primaryCta: { label: "Book a strategy call", href: "/contact" },
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
          { value: "14+", label: "Years of enterprise delivery" },
          { value: "600+", label: "Global client engagements" },
          { value: "18", label: "Industries served" },
          { value: "97%", label: "Client retention" },
        ],
      },
      {
        type: "narrative",
        title: "Built for buyers who cannot afford theater",
        body: [
          "InheritX is an Enterprise AI Solutions company. We design, govern, and industrialize intelligence systems—agents, platforms, and automation—so leaders own capability, not demos.",
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
            approach: "Hire AI Engineers and dedicated squads embedded in your rituals—shipping under your standards, not staff-augmentation theater.",
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
          { label: "Our AI vision", href: "/company/ai-vision" },
          { label: "Our approach", href: "/company/approach" },
          { label: "Solutions & engagement models", href: "/solutions" },
          { label: "Resources & insights", href: "/resources" },
          { label: "Careers", href: "/careers" },
        ],
      },
    ],
  },
  {
    slug: "approach",
    eyebrow: "Our Approach",
    title: "From discovery to production.",
    description:
      "Discover, strategise, prototype, deploy, and scale—with governance and ownership in every phase. Typical engagements move from feasibility to private-cloud go-live with full IP handover.",
    primaryCta: { label: "Start a conversation", href: "/contact" },
    secondaryCta: { label: "Explore solutions", href: "/solutions" },
    layout: "narrative",
    metadata: {
      title: "Our Approach | InheritX Enterprise AI",
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
        type: "related",
        title: "Related",
        links: [
          { label: "Our AI vision", href: "/company/ai-vision" },
          { label: "Why InheritX", href: "/company/why-inheritx" },
          { label: "Culture & values", href: "/team/culture" },
          { label: "Insights & playbooks", href: "/resources/insights" },
          { label: "Contact", href: "/contact" },
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
];

export function getCompanyTopic(slug: string): TopicPage | undefined {
  return companyTopics.find((topic) => topic.slug === slug);
}

export { companyTopics };
