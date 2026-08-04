import type { TopicPage } from "./topic";
import { enterpriseResourceTopics } from "./enterpriseResourceTopics";

const resourceTopics: TopicPage[] = [
  {
    slug: "insights",
    eyebrow: "Insights",
    title: "Executive and architect perspectives on enterprise AI.",
    description:
      "Short, decision-grade writing for leaders and builders—governed agents, private AI ownership, and the path from pilot to platform. No filler. No hype.",
    primaryCta: { label: "Book an AI Strategy Call", href: "/contact" },
    secondaryCta: { label: "View case studies", href: "/case-studies" },
    layout: "library",
    metadata: {
      title: "Enterprise AI Insights | InheritX",
      description:
        "Perspectives for executives and architects on governed agents, private AI, and industrializing intelligence in regulated enterprises.",
    },
    sections: [
      {
        type: "narrative",
        title: "Written for decisions, not page views",
        body: [
          "Insights here are shaped by delivery work—not marketing calendars. We publish when a pattern repeats across healthcare, finance, manufacturing, and operations programs and leaders ask for language they can use in boardrooms and architecture reviews.",
          "Expect direct takes on what breaks in production: autonomy without policy, API rentals mistaken for capability, pilots without scale criteria, and agents that cannot explain what they did yesterday.",
          "Themes rotate, but the through-line is consistent: intelligence should behave like infrastructure you govern and own.",
        ],
      },
      {
        type: "bullets",
        title: "Recurring themes",
        intro: "Recent and upcoming insight series reflect the mandates we see most often in regulated enterprise programs.",
        items: [
          {
            title: "Governed agents",
            copy: "Why agentic systems fail without identity, tool permissions, traces, and escalation paths—and how to design workforces that survive audit and operational scrutiny.",
          },
          {
            title: "Private AI as ownership",
            copy: "Access to a model is not ownership of capability. Briefs on VPC deployment, IP transfer, and protecting competitive advantage without ideology.",
          },
          {
            title: "Pilot to platform",
            copy: "Four decisions that separate industrialization from slideware: KPI, scope, exception ownership, and scale criteria—forced early, not discovered late.",
          },
          {
            title: "When to embed AI engineers",
            copy: "Staffing accelerates execution when the roadmap is clear. It does not substitute for mandate, blueprint, or honest scoping.",
          },
        ],
      },
      {
        type: "split",
        title: "Who reads what",
        leftTitle: "For executives",
        leftBody: [
          "Board-ready framing for AI investment, risk, and sequencing.",
          "Language that connects ambition to operating reality.",
          "Honest guidance on build vs. buy vs. embed—and when to pause.",
        ],
        rightTitle: "For architects & engineering leaders",
        rightItems: [
          "Reference patterns for retrieval, agents, and evaluation",
          "Security and LLMOps considerations by phase",
          "Integration and exception-handling design notes",
          "Cost control and observability practices",
          "Anti-patterns seen in failed pilots",
        ],
      },
      {
        type: "related",
        title: "More to explore",
        links: [
          { label: "Research briefs", href: "/resources/research" },
          { label: "Whitepapers", href: "/resources/whitepapers" },
          { label: "Our approach", href: "/company/approach" },
          { label: "Solutions", href: "/solutions" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        type: "faq",
        title: "About this library",
        items: [
          {
            q: "Is this content sales collateral?",
            a: "It is written to help buyers and builders make better decisions. If it starts a conversation with us, that is useful—but each piece should stand alone.",
          },
          {
            q: "Can we request a private briefing on a theme?",
            a: "Yes. Book an AI Strategy Call and we will tailor a briefing to your industry, risk posture, and current AI maturity.",
          },
          {
            q: "How often do you publish?",
            a: "When we have something worth saying—typically aligned to patterns we see across active delivery work, not a fixed publishing cadence.",
          },
        ],
      },
    ],
  },
  {
    slug: "research",
    eyebrow: "Research",
    title: "Applied intelligence briefs.",
    description:
      "Focused research notes on how enterprise AI behaves in production—evaluation design, agent governance, private deployment patterns, and domain-specific constraints.",
    primaryCta: { label: "Explore solutions", href: "/solutions" },
    secondaryCta: { label: "AI portfolio", href: "/portfolio" },
    layout: "library",
    metadata: {
      title: "Applied AI Research | InheritX",
      description:
        "Applied intelligence briefs on evaluation, agent governance, private AI deployment, and production patterns for regulated enterprises.",
    },
    sections: [
      {
        type: "narrative",
        title: "Research grounded in delivery",
        body: [
          "These briefs sit between academic survey and marketing blog. They document what we observe when intelligence meets real ERP boundaries, clinical workflows, underwriting rules, and plant-floor constraints.",
          "Each brief names the problem, the design choices that matter, and the failure modes we see when teams skip controls in favor of demo velocity.",
          "They are not predictions about model capabilities six months from now. They are practical notes for teams shipping this quarter.",
        ],
      },
      {
        type: "matrix",
        title: "Brief categories",
        intro: "Research clusters around the layers enterprises must get right to industrialize AI.",
        rows: [
          {
            need: "How do we know the system still works after deployment?",
            approach: "Evaluation harnesses—offline suites, production sampling, drift detection, and human review loops tied to business KPIs.",
          },
          {
            need: "How do agents stay inside policy when tools can act?",
            approach: "Permission models, approval gates, attributable traces, and scoped retrieval by role and jurisdiction.",
          },
          {
            need: "How do we deploy without creating vendor dependency?",
            approach: "Private estate patterns—VPC boundaries, owned fine-tunes and corpora, orchestration you control, commodity models where appropriate.",
          },
          {
            need: "How do domain rules change AI design?",
            approach: "Sector briefs on documentation, decisioning, vision inspection, and exception queues where regulated workflows differ.",
          },
        ],
      },
      {
        type: "bullets",
        title: "What a brief includes",
        items: [
          {
            title: "Problem framing",
            copy: "The operational or compliance tension the reader is actually trying to resolve—not a technology trend recap.",
          },
          {
            title: "Design implications",
            copy: "Architecture and process choices with trade-offs named explicitly, including what to defer and what cannot wait.",
          },
          {
            title: "Production signals",
            copy: "Observability, evaluation, and escalation patterns that indicate readiness—or warn early when a pilot is still theater.",
          },
        ],
      },
      {
        type: "related",
        title: "Continue reading",
        links: [
          { label: "Insights", href: "/resources/insights" },
          { label: "Whitepapers", href: "/resources/whitepapers" },
          { label: "Case studies", href: "/case-studies" },
          { label: "Company & vision", href: "/company" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
  {
    slug: "whitepapers",
    eyebrow: "Whitepapers",
    title: "Frameworks for AI modernization.",
    description:
      "Longer-form frameworks for transformation leaders—sequencing investment, designing governed platforms, and moving agentic capability from proof to estate-wide scale.",
    primaryCta: { label: "Book an AI Strategy Call", href: "/contact" },
    secondaryCta: { label: "Our approach", href: "/company/approach" },
    layout: "library",
    metadata: {
      title: "AI Modernization Whitepapers | InheritX",
      description:
        "Frameworks for enterprise AI modernization—platform design, agent governance, and industrialization playbooks from InheritX.",
    },
    sections: [
      {
        type: "narrative",
        title: "Frameworks you can operationalize",
        body: [
          "Whitepapers here are written for transformation offices, CTO organizations, and architecture boards planning multi-wave AI programs—not for casual browsing.",
          "Each framework connects executive mandate to engineering reality: what to decide first, how to phase investment, where governance must be invariant, and how to know a pilot is ready to become a platform.",
          "They complement delivery work. Many clients use them to align internal stakeholders before a discovery or blueprint engagement begins.",
        ],
      },
      {
        type: "bullets",
        title: "Available and upcoming frameworks",
        items: [
          {
            title: "Enterprise AI operating model",
            copy: "Roles, rituals, and decision rights for AI at scale—how product, security, data, and domain teams collaborate without bottlenecks or shadow AI.",
          },
          {
            title: "Governed agent reference architecture",
            copy: "Tool layers, policy enforcement, human-in-the-loop gates, and observability standards for multi-agent systems in regulated environments.",
          },
          {
            title: "Private AI estate blueprint",
            copy: "VPC deployment patterns, retrieval design, model strategy, cost controls, and IP boundaries for buyers who cannot rent core capability.",
          },
          {
            title: "Industrialization playbook",
            copy: "From proof to platform: enablement, platform patterns, evaluation at scale, and the handover criteria we use before declaring a capability production-ready.",
          },
        ],
      },
      {
        type: "steps",
        title: "How teams use whitepapers",
        intro: "Typical adoption path inside enterprise programs.",
        items: [
          {
            step: "01",
            title: "Align stakeholders",
            copy: "Share the framework with security, architecture, and business sponsors to establish common vocabulary before vendor selection or build starts.",
          },
          {
            step: "02",
            title: "Gap against current state",
            copy: "Map existing pilots, data estates, and governance posture to the framework—surfacing where scale will break without redesign.",
          },
          {
            step: "03",
            title: "Sequence investment",
            copy: "Use the phasing model to order blueprint, proof, and industrialization waves—with explicit KPIs per wave.",
          },
          {
            step: "04",
            title: "Engage for delivery",
            copy: "Bring InheritX in where execution capacity or specialized patterns accelerate the roadmap—always with IP ownership intact.",
          },
        ],
      },
      {
        type: "related",
        title: "Related resources",
        links: [
          { label: "Insights", href: "/resources/insights" },
          { label: "Research briefs", href: "/resources/research" },
          { label: "Solutions", href: "/solutions" },
          { label: "Careers", href: "/careers" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        type: "faq",
        title: "Access & usage",
        items: [
          {
            q: "Are whitepapers gated?",
            a: "Core frameworks are available on this site. Extended versions or sector-specific supplements may be shared during briefings when they help a specific program.",
          },
          {
            q: "Can we adapt these frameworks internally?",
            a: "Yes. They are meant to be operationalized inside your governance process—we do not require attribution for internal use.",
          },
          {
            q: "Do you workshop these with client teams?",
            a: "Often. Blueprint and transformation engagements frequently start with a facilitated walkthrough tailored to your industry and risk posture.",
          },
        ],
      },
    ],
  },
  ...enterpriseResourceTopics,
];

export function getResourceTopic(slug: string): TopicPage | undefined {
  return resourceTopics.find((topic) => topic.slug === slug);
}

export { resourceTopics };
