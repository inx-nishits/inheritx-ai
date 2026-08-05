import type { TopicPage } from "./topic";

/** Culture & values topic — rendered at /team/culture */
export const cultureTopic: TopicPage = {
  slug: "culture",
  eyebrow: "Culture & Values",
  title: "Precision, ownership, ambitious craft.",
  description:
    "How InheritX teams work: production discipline over performance theater, client IP ownership, clarity under pressure, and engineering craft held accountable by metrics and traces.",
  primaryCta: { label: "View careers", href: "/careers" },
  secondaryCta: { label: "Meet the team", href: "/team" },
  layout: "narrative",
  metadata: {
    title: "Culture & Values | InheritX",
    description:
      "Precision, ownership, and ambitious craft—how InheritX teams ship governed enterprise AI with accountability and calm delivery under pressure.",
  },
  sections: [
    {
      type: "narrative",
      title: "Culture is how we behave when the demo is over",
      body: [
        "InheritX teams operate inside regulated enterprises where fluency is not enough. Systems must be attributable, secure, and measurable. Culture here is not posters—it is the default choices we make when scope is tight, security review is thorough, and the client needs truth more than reassurance.",
        "We hire operators who treat intelligence as infrastructure: architects, ML and LLM engineers, agentic systems builders, and delivery leads who would rather ship a narrow production capability than a wide sandbox that cannot survive Monday morning.",
        "Ambitious craft means we care about architecture, evaluation, and operator experience with the same intensity we bring to model selection. Beautiful design earns its place when traces, escalation paths, and KPIs prove it works.",
      ],
    },
    {
      type: "bullets",
      title: "Values we practice",
      items: [
        {
          title: "Production over performance theater",
          copy: "We optimize for systems that run in operations—not demos that impress in a conference room. Weekly signal includes evals, risks, and what changed in the operating model.",
        },
        {
          title: "Ownership is the product",
          copy: "Clients keep the IP. We refuse lock-in disguised as partnership. That principle shapes how we document, hand over, and enable internal teams.",
        },
        {
          title: "Clarity under pressure",
          copy: "Regulated environments need precise communication, written decisions, and calm delivery when timelines compress or scope shifts.",
        },
        {
          title: "Craft with accountability",
          copy: "Architecture, retrieval design, and agent orchestration must connect to metrics and observability. Elegance without evidence does not ship.",
        },
      ],
    },
    {
      type: "split",
      title: "How we collaborate with clients",
      leftTitle: "Embedded, not distant",
      leftBody: [
        "Squads and Embedded AI Engineering engagements work inside your rituals—standups, architecture forums, security reviews—not around them.",
        "Senior practitioners lead critical path work. We say plainly when consulting should precede hiring, or when a pilot is not ready to scale.",
        "Evidence beats narrative: demos tied to eval results, integration progress, and exception handling—not vanity metrics.",
      ],
      rightTitle: "What we expect from each other",
      rightItems: [
        "Direct feedback without personal drama",
        "Written decisions for cross-functional alignment",
        "Respect for security and compliance as design inputs",
        "Curiosity across domain, product, and platform",
        "Ownership through handover—not throw-over-the-wall delivery",
      ],
    },
    {
      type: "steps",
      title: "How engagement feels from the inside",
      intro: "The same sequence clients see externally is how we run internally.",
      items: [
        {
          step: "01",
          title: "Align on mandate",
          copy: "Outcomes, constraints, and decision owners—before tooling debates consume the room.",
        },
        {
          step: "02",
          title: "Staff the right shape",
          copy: "Architect-led pods, embedded engineers, or transformation programs—matched to readiness, not to a one-size staffing template.",
        },
        {
          step: "03",
          title: "Build with evidence",
          copy: "Weekly visibility: what shipped, what the evals say, what risks emerged, and what we recommend changing.",
        },
        {
          step: "04",
          title: "Industrialize together",
          copy: "Enablement and handover so client teams operate confidently after we step back from daily delivery.",
        },
      ],
    },
    {
      type: "related",
      title: "Join us or go deeper",
      links: [
        { label: "Our team", href: "/team" },
        { label: "Careers", href: "/careers" },
        { label: "Why InheritX", href: "/company/why-inheritx" },
        { label: "Our approach", href: "/company/approach" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
};
