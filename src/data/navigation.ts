export type MegaItem = {
  title: string;
  description: string;
  href: string;
};

export type MegaColumn = {
  label: string;
  items: MegaItem[];
};

export type MegaFeatured = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta?: string;
  stats?: { value: string; label: string }[];
};

export type NavItem = {
  label: string;
  href: string;
  overview?: string;
  columns?: MegaColumn[];
  featured?: MegaFeatured;
  quickLinks?: MegaItem[];
};

export const navigation: NavItem[] = [
  {
    label: "Solutions",
    href: "/solutions",
    overview:
      "AI/ML engineering, Agentic AI, and AI DevOps—built for enterprise production, not pilots.",
    columns: [
      {
        label: "AI Capabilities",
        items: [
          {
            title: "Enterprise AI",
            description: "Private platforms, RAG, and governed intelligence.",
            href: "/solutions/enterprise-ai",
          },
          {
            title: "AI Agents",
            description: "Autonomous agents with MCP, memory, and tool calling.",
            href: "/solutions/ai-agents",
          },
          {
            title: "AI Automation",
            description: "Workflow intelligence that cuts operating cost.",
            href: "/solutions/ai-automation",
          },
          {
            title: "Generative AI",
            description: "Secure LLM applications for enterprise work.",
            href: "/solutions/generative-ai",
          },
          {
            title: "Computer Vision",
            description: "Perception systems for plants, QA, and logistics.",
            href: "/solutions/computer-vision",
          },
        ],
      },
      {
        label: "How We Engage",
        items: [
          {
            title: "AI Transformation",
            description: "From mandate to industrialized capability.",
            href: "/solutions/ai-transformation",
          },
          {
            title: "AI Consulting",
            description: "Architecture, governance, and investment roadmaps.",
            href: "/solutions/ai-consulting",
          },
          {
            title: "Dedicated AI Squads",
            description: "Pods that own an AI capability to production.",
            href: "/solutions/dedicated-ai-squads",
          },
          {
            title: "Embedded AI Engineering",
            description: "Senior AI/ML embeds when architecture is defined.",
            href: "/solutions/hire-ai-engineers",
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Featured solution",
      title: "Agentic AI for enterprise operations",
      description:
        "Multi-agent systems with MCP, human gates, and full audit trails—deployed in your VPC.",
      href: "/solutions/ai-agents",
      cta: "Explore Agentic AI",
      stats: [
        { value: "MCP", label: "Tool contracts" },
        { value: "HITL", label: "Risk gates" },
        { value: "100%", label: "IP at handover" },
      ],
    },
    quickLinks: [
      { title: "AI Strategy Call", description: "30-min architect session", href: "/contact" },
      { title: "All solutions", description: "Capability map", href: "/solutions" },
      { title: "Engagement models", description: "How to buy", href: "/resources/engagement-models" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    overview:
      "Sector-fluent AI programs for regulated environments where accuracy and auditability are non-negotiable.",
    columns: [
      {
        label: "Primary sectors",
        items: [
          {
            title: "Healthcare",
            description: "Clinical ops and documentation with compliance controls.",
            href: "/industries/healthcare",
          },
          {
            title: "Finance",
            description: "Fraud, underwriting, and decisioning at scale.",
            href: "/industries/finance",
          },
          {
            title: "Manufacturing",
            description: "Vision inspection and predictive plant intelligence.",
            href: "/industries/manufacturing",
          },
          {
            title: "Retail",
            description: "Demand sensing, merchandising, and service AI.",
            href: "/industries/retail",
          },
        ],
      },
      {
        label: "Also serving",
        items: [
          {
            title: "Insurance",
            description: "Claims acceleration and underwriting support.",
            href: "/industries/insurance",
          },
          {
            title: "Logistics",
            description: "Control towers and exception automation.",
            href: "/industries/logistics",
          },
          {
            title: "Government",
            description: "Secure modernization for mission systems.",
            href: "/industries/government",
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Industry proof",
      title: "Outcomes across regulated enterprises",
      description:
        "See how AI moves cost, speed, and risk in healthcare, finance, and manufacturing.",
      href: "/case-studies",
      cta: "View case studies",
      stats: [
        { value: "VPC", label: "Private by default" },
        { value: "40%", label: "Doc time ↓ (pattern)" },
        { value: "10×", label: "Triage speed (pattern)" },
      ],
    },
    quickLinks: [
      { title: "All industries", description: "Sector map", href: "/industries" },
      { title: "Case studies", description: "Measured outcomes", href: "/case-studies" },
    ],
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    overview:
      "Production AI outcomes—methodology included. Proof for CEOs, CTOs, and diligence teams.",
    columns: [
      {
        label: "Proof",
        items: [
          {
            title: "Case Studies",
            description: "Measured deployments across AI/ML and agents.",
            href: "/case-studies",
          },
          {
            title: "Enterprise references",
            description: "How buyers verify InheritX.",
            href: "/resources/enterprise-references",
          },
          {
            title: "Production readiness",
            description: "Checklist before go-live.",
            href: "/resources/production-readiness",
          },
          {
            title: "Security FAQ",
            description: "CISO and procurement answers.",
            href: "/resources/security-faq",
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Featured outcome",
      title: "Measured enterprise AI results",
      description:
        "Client deployments with methodology—vision, generative systems, platforms, and agentic workflows.",
      href: "/case-studies",
      cta: "Browse case studies",
      stats: [
        { value: "AI/ML", label: "Core focus" },
        { value: "Owned", label: "IP handover" },
        { value: "Prod", label: "Not pilots" },
      ],
    },
    quickLinks: [
      { title: "Book strategy call", description: "Map your use case", href: "/contact" },
      { title: "AI Portfolio", description: "Capability patterns", href: "/portfolio" },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    overview:
      "Enterprise AI capability patterns—platforms, agents, vision, and transformation systems.",
    columns: [
      {
        label: "Showcase",
        items: [
          {
            title: "AI Portfolio",
            description: "Enterprise AI platforms and agentic systems.",
            href: "/portfolio",
          },
          {
            title: "Agent Bank",
            description: "Governed multi-agent workforce for banking ops.",
            href: "/portfolio/agent-bank",
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Featured",
      title: "Agent Bank",
      description:
        "A production multi-agent platform with policy controls, audit trails, and human gates.",
      href: "/portfolio/agent-bank",
      cta: "View project",
      stats: [
        { value: "Multi", label: "Agent ops" },
        { value: "Audit", label: "Full traces" },
        { value: "HITL", label: "High-risk" },
      ],
    },
    quickLinks: [
      { title: "Case studies", description: "Measured outcomes", href: "/case-studies" },
      { title: "All solutions", description: "Capability map", href: "/solutions" },
    ],
  },
  {
    label: "Company",
    href: "/company",
    overview:
      "An AI-native enterprise partner—architects and engineers who ship owned intelligence systems.",
    columns: [
      {
        label: "Who we are",
        items: [
          {
            title: "About InheritX",
            description: "AI-native partner for enterprise transformation.",
            href: "/company",
          },
          {
            title: "Our AI Vision",
            description: "Intelligence as infrastructure you own.",
            href: "/company/ai-vision",
          },
          {
            title: "Why InheritX",
            description: "Production AI, IP ownership, regulated delivery.",
            href: "/company/why-inheritx",
          },
          {
            title: "Our Approach",
            description: "From mandate to industrialized capability.",
            href: "/company/approach",
          },
          {
            title: "Security & Compliance",
            description: "Private deployment and precise claims.",
            href: "/company/security",
          },
          {
            title: "IP Ownership",
            description: "What transfers at handover.",
            href: "/company/ip-ownership",
          },
        ],
      },
      {
        label: "People",
        items: [
          {
            title: "Our Team",
            description: "Leadership and delivery operators.",
            href: "/team",
          },
          {
            title: "Culture & Values",
            description: "Precision, ownership, and ambitious craft.",
            href: "/team/culture",
          },
          {
            title: "Careers",
            description: "Build enterprise AI systems with us.",
            href: "/careers",
          },
        ],
      },
      {
        label: "Connect",
        items: [
          {
            title: "Contact",
            description: "Speak with our transformation team.",
            href: "/contact",
          },
          {
            title: "Book a Strategy Call",
            description: "30 minutes to map your AI transformation.",
            href: "/contact",
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Connect",
      title: "Talk with an AI architect",
      description:
        "30 minutes to pressure-test fit, ownership model, and the right engagement shape.",
      href: "/contact",
      cta: "Book an AI Strategy Call",
      stats: [
        { value: "14+", label: "Years AI delivery DNA" },
        { value: "600+", label: "Engagements" },
        { value: "97%", label: "Retention" },
      ],
    },
    quickLinks: [
      { title: "Contact", description: "Start a conversation", href: "/contact" },
      { title: "Careers", description: "Join the team", href: "/careers" },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    overview:
      "Enterprise AI perspectives on agentic systems, LLMOps, governance, and production architecture.",
    columns: [
      {
        label: "Library",
        items: [
          {
            title: "All Insights",
            description: "Browse the enterprise AI library.",
            href: "/insights",
          },
          {
            title: "Case Studies",
            description: "Measured production outcomes.",
            href: "/case-studies",
          },
          {
            title: "AI Portfolio",
            description: "Capability patterns in production.",
            href: "/portfolio",
          },
        ],
      },
    ],
    quickLinks: [
      { title: "All insights", description: "Browse the library", href: "/insights" },
      { title: "Case studies", description: "Measured outcomes", href: "/case-studies" },
      { title: "AI Strategy Call", description: "Talk to an architect", href: "/contact?intent=strategy" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    overview:
      "Decision material for CEOs and CTOs—insights, frameworks, and diligence packs.",
    columns: [
      {
        label: "Learn",
        items: [
          {
            title: "Insights",
            description: "Enterprise AI perspectives from production.",
            href: "/insights",
          },
          {
            title: "Case Studies",
            description: "Published AI production outcomes with methodology.",
            href: "/case-studies",
          },
          {
            title: "AI Portfolio",
            description: "Enterprise AI platforms and agentic systems.",
            href: "/portfolio",
          },
          {
            title: "Research",
            description: "Applied intelligence briefs.",
            href: "/resources/research",
          },
          {
            title: "Whitepapers",
            description: "Frameworks for AI modernization.",
            href: "/resources/whitepapers",
          },
          {
            title: "Engagement models",
            description: "Consulting, build, squads, embeds.",
            href: "/resources/engagement-models",
          },
        ],
      },
      {
        label: "Enterprise diligence",
        items: [
          {
            title: "Security FAQ",
            description: "Procurement-ready answers.",
            href: "/resources/security-faq",
          },
          {
            title: "Diligence pack",
            description: "NDA materials for qualified buyers.",
            href: "/resources/diligence-pack",
          },
          {
            title: "AI governance",
            description: "Controls for agentic systems.",
            href: "/resources/ai-governance",
          },
          {
            title: "Production readiness",
            description: "Checklist before declaring AI production-ready.",
            href: "/resources/production-readiness",
          },
          {
            title: "Architecture principles",
            description: "Private, governed defaults.",
            href: "/resources/architecture-principles",
          },
          {
            title: "Enterprise references",
            description: "How buyers verify InheritX—honest tiers of proof.",
            href: "/resources/enterprise-references",
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Trust center",
      title: "Security practices & diligence",
      description:
        "Private-cloud defaults, precise compliance language, and materials for enterprise review.",
      href: "/company/security",
      cta: "Review security",
      stats: [
        { value: "VPC", label: "Private by default" },
        { value: "NDA", label: "Diligence pack" },
        { value: "IP", label: "Client-owned" },
      ],
    },
    quickLinks: [
      { title: "Case studies", description: "Measured outcomes", href: "/case-studies" },
      { title: "AI portfolio", description: "Capability patterns", href: "/portfolio" },
    ],
  },
];

export const footerColumns = [
  {
    title: "Solutions",
    links: [
      { label: "Enterprise AI", href: "/solutions/enterprise-ai" },
      { label: "AI Agents", href: "/solutions/ai-agents" },
      { label: "AI Automation", href: "/solutions/ai-automation" },
      { label: "AI Transformation", href: "/solutions/ai-transformation" },
      { label: "Embedded AI Engineering", href: "/solutions/hire-ai-engineers" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Industries", href: "/industries" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Insights", href: "/insights" },
      { label: "AI Portfolio", href: "/portfolio" },
      { label: "Security FAQ", href: "/resources/security-faq" },
      { label: "Diligence pack", href: "/resources/diligence-pack" },
      { label: "AI Governance", href: "/resources/ai-governance" },
      { label: "Enterprise References", href: "/resources/enterprise-references" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Security", href: "/company/security" },
      { label: "IP Ownership", href: "/company/ip-ownership" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "AI Assessment", href: "/contact?intent=assessment" },
    ],
  },
];
