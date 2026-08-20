export const resourcesHero = {
  eyebrow: "Resources",
  title: "Decision material for CEOs and CTOs building with AI.",
  description:
    "Outcomes, architecture briefs, and practical frameworks for leaders industrializing AI/ML, AI Agents, and AI DevOps across the enterprise.",
};

export const resourceArticles = [
  {
    slug: "governed-agents",
    category: "Insight",
    title: "Why agentic systems fail without governance",
    readTime: "6 min",
    excerpt:
      "Autonomy without policy, traces, and escalation paths creates operational risk. Here’s how we design agent workforces that survive audit.",
    body: [
      "Most agent demos skip the parts enterprises cannot skip: identity, tool permissions, evaluation, and human escalation.",
      "At InheritX, every agent action is attributable. High-risk tools require approval. Retrieval is scoped by role. Evaluation harnesses catch drift before users do.",
      "If your agent cannot explain what it did yesterday, it is not ready for production, no matter how fluent it sounds.",
    ],
  },
  {
    slug: "private-ai-ownership",
    category: "Brief",
    title: "Private AI is an ownership decision",
    readTime: "5 min",
    excerpt:
      "API rentals can accelerate experiments. Long-term advantage comes from systems you deploy, control, and keep.",
    body: [
      "Enterprises often confuse access to a model with ownership of capability. Capability includes fine-tunes, retrieval corpora, orchestration, and the workflow glue.",
      "We deploy into your VPC, transfer IP, and refuse to train public models on your proprietary interactions.",
      "That is not ideology, it is how regulated buyers protect competitive advantage.",
    ],
  },
  {
    slug: "from-pilot-to-platform",
    category: "Playbook",
    title: "From pilot to platform in four decisions",
    readTime: "8 min",
    excerpt:
      "Pilots die when success criteria are vague. Industrialization starts with four explicit decisions before the first sprint.",
    body: [
      "Decision one: which KPI moves if this works? Decision two: what data and systems are in scope? Decision three: who owns exceptions? Decision four: what must be true to scale?",
      "Our process, Discovery, Blueprint, Pilot to Proof, Industrialize, forces those answers early.",
      "When those four decisions are clear, pilots become platforms instead of slide decks.",
    ],
  },
  {
    slug: "hire-ai-engineers",
    category: "Engagement",
    title: "When Embedded AI Engineering is the right motion",
    readTime: "4 min",
    excerpt:
      "Capacity is not a strategy, but senior embedded talent can accelerate a strategy already defined.",
    body: [
      "Embedded AI Engineering works when the roadmap is clear and the bottleneck is execution capacity, not when the problem is still undefined.",
      "We embed senior practitioners who ship under your architecture standards, security reviews, and product rituals.",
      "If you need a mandate and a blueprint first, start with consulting. If the architecture is defined and the bottleneck is execution, Embedded AI Engineering is the right motion. See Engagement Models for the full buying sequence.",
    ],
  },
  {
    slug: "owned-ai-not-rented",
    category: "Brief",
    title: "What “you own the code” includes",
    readTime: "5 min",
    excerpt:
      "IP handover is contractual and technical. Here is the standard intent, and what still belongs to model vendors.",
    body: [
      "Production builds are designed so application code, agents, fine-tunes created for you, prompts, evals, and IaC targeting your estate transfer at handover.",
      "Foundation model licenses remain governed by those providers. Your pre-existing data and systems remain yours.",
      "Ask for the IP schedule under NDA during diligence, ownership should be reviewable by counsel before build starts.",
    ],
  },
];

export const resourceLibrary = [
  {
    title: "Insights",
    description:
      "Decision-grade perspectives on governed agents, private AI, and the path from pilot to platform.",
    href: "/insights",
    meta: "Perspectives",
  },
  {
    title: "Security FAQ",
    description:
      "CISO and procurement answers, private cloud, data boundaries, model use, and access controls.",
    href: "/resources/security-faq",
    meta: "Security",
  },
  {
    title: "Diligence Pack",
    description:
      "NDA-ready security, IP intent, engagement classes from published cases, and procurement answers.",
    href: "/resources/diligence-pack",
    meta: "Trust",
  },
  {
    title: "AI Governance",
    description:
      "How we design policy, evaluation, guardrails, and human gates for production AI.",
    href: "/resources/ai-governance",
    meta: "Governance",
  },
  {
    title: "Architecture Principles",
    description:
      "Reference patterns for RAG, agents, MCP, LLMOps, and private-cloud deployment.",
    href: "/resources/architecture-principles",
    meta: "Architecture",
  },
  {
    title: "Enterprise References",
    description:
      "How buyers verify InheritX, published cases, anonymized NDA references, and named calls only with approval.",
    href: "/resources/enterprise-references",
    meta: "Proof",
  },
  {
    title: "Engagement Models",
    description:
      "Consulting, build/transformation, squads, and embeds, when each motion is the right buy.",
    href: "/resources/engagement-models",
    meta: "How to buy",
  },
  {
    title: "Case Studies",
    description:
      "Named client outcomes led by AI, vision, generative systems, platforms, and supporting enterprise delivery.",
    href: "/case-studies",
    meta: "Client proof",
  },
  {
    title: "IP Ownership",
    description:
      "What transfers at handover, application code, agents, fine-tunes, prompts, evals, and IaC.",
    href: "/company/ip-ownership",
    meta: "Ownership",
  },
];
export const resourceFaqs = [
  {
    q: "Are these resources sales collateral?",
    a: "They are written to help buyers and builders make better decisions. If they also start a conversation with us, that is useful, but the content stands alone.",
  },
  {
    q: "Can we request a private briefing or Diligence Pack?",
    a: "Yes. Book an AI strategy call. NDA-backed Diligence Pack materials (security, IP intent, Engagement Models) can follow when there is mutual fit.",
  },
  {
    q: "Do OpenAI/AWS/Microsoft logos mean you are formal partners?",
    a: "They indicate platforms and models we commonly implement with, not automatic formal partnership claims. Ask for current status in diligence.",
  },
  {
    q: "Do you publish technical deep-dives?",
    a: "Yes, architecture principles, AI governance, production readiness, and engagement guidance appear here as they are ready for external readers.",
  },
];
