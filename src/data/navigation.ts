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
};

export type NavItem = {
  label: string;
  href: string;
  columns?: MegaColumn[];
  featured?: MegaFeatured;
};

export const navigation: NavItem[] = [
  {
    label: "Solutions",
    href: "/solutions",
    columns: [
      {
        label: "Platforms & Systems",
        items: [
          {
            title: "Enterprise AI",
            description: "Private, governed intelligence at scale.",
            href: "/solutions/enterprise-ai",
          },
          {
            title: "AI Agents",
            description: "Autonomous systems that execute work.",
            href: "/solutions/ai-agents",
          },
          {
            title: "AI Automation",
            description: "End-to-end workflow orchestration.",
            href: "/solutions/ai-automation",
          },
          {
            title: "Generative AI",
            description: "Secure LLM applications for the enterprise.",
            href: "/solutions/generative-ai",
          },
          {
            title: "Computer Vision",
            description: "Perception systems for the physical world.",
            href: "/solutions/computer-vision",
          },
        ],
      },
      {
        label: "Engagement Models",
        items: [
          {
            title: "AI Transformation",
            description: "From strategy to industrialized capability.",
            href: "/solutions/ai-transformation",
          },
          {
            title: "AI Consulting",
            description: "Architecture, governance, and roadmap design.",
            href: "/solutions/ai-consulting",
          },
          {
            title: "Hire AI Engineers",
            description: "Embedded AI / ML specialists—not staff-aug theater.",
            href: "/solutions/hire-ai-engineers",
          },
          {
            title: "Dedicated AI Squads",
            description: "Pods that own an AI capability to production.",
            href: "/solutions/dedicated-ai-squads",
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Featured",
      title: "Production AI, not experiments",
      description:
        "Platforms, agents, and engagement models designed for regulated enterprise scale.",
      href: "/solutions",
      cta: "Explore solutions",
    },
  },
  {
    label: "Industries",
    href: "/industries",
    columns: [
      {
        label: "Sectors",
        items: [
          {
            title: "Healthcare",
            description: "Clinical intelligence with compliance built in.",
            href: "/industries/healthcare",
          },
          {
            title: "Finance",
            description: "Risk, fraud, and decision systems.",
            href: "/industries/finance",
          },
          {
            title: "Retail",
            description: "Demand, personalization, and operations.",
            href: "/industries/retail",
          },
          {
            title: "Manufacturing",
            description: "Vision, quality, and predictive uptime.",
            href: "/industries/manufacturing",
          },
        ],
      },
      {
        label: "Also Serving",
        items: [
          {
            title: "Insurance",
            description: "Claims, underwriting, and service AI.",
            href: "/industries/insurance",
          },
          {
            title: "Logistics",
            description: "Routing, forecasting, and control towers.",
            href: "/industries/logistics",
          },
          {
            title: "Government",
            description: "Secure modernization for public institutions.",
            href: "/industries/government",
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Focus",
      title: "Fortune 500 Transformation",
      description: "AI programs designed for board-level outcomes.",
      href: "/case-studies",
      cta: "View case studies",
    },
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
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
    },
  },
  {
    label: "Company",
    href: "/company",
    columns: [
      {
        label: "Who We Are",
        items: [
          {
            title: "About InheritX",
            description:
              "Enterprise AI Solutions company—agents, platforms, transformation.",
            href: "/company",
          },
          {
            title: "Our AI Vision",
            description: "Intelligence as governed infrastructure you own.",
            href: "/company/ai-vision",
          },
          {
            title: "Why InheritX",
            description: "Production AI, IP ownership, regulated delivery.",
            href: "/company/why-inheritx",
          },
          {
            title: "Our Approach",
            description: "From mandate to industrialized AI capability.",
            href: "/company/approach",
          },
        ],
      },
      {
        label: "People",
        items: [
          {
            title: "Our Team",
            description: "Leadership, culture, and how we collaborate.",
            href: "/team",
          },
          {
            title: "Culture & Values",
            description: "Precision, ownership, and ambitious craft.",
            href: "/team/culture",
          },
          {
            title: "Careers",
            description: "Join teams shaping enterprise AI systems.",
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
            description: "30 minutes to map your AI opportunity.",
            href: "/contact",
          },
        ],
      },
    ],
    featured: {
      eyebrow: "People",
      title: "Meet the operators behind the systems",
      description:
        "Architects, engineers, and delivery leads who treat AI as enterprise infrastructure.",
      href: "/team",
      cta: "Our Team",
    },
  },
  {
    label: "Resources",
    href: "/resources",
    columns: [
      {
        label: "Learn",
        items: [
          {
            title: "Insights",
            description: "Perspectives on enterprise AI.",
            href: "/resources/insights",
          },
          {
            title: "Case Studies",
            description: "Client success stories with measurable results.",
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
        ],
      },
    ],
    featured: {
      eyebrow: "Insight",
      title: "The Enterprise AI Playbook",
      description: "A practical guide from strategy to agentic systems.",
      href: "/resources/insights",
      cta: "Explore insights",
    },
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
      { label: "Hire AI Engineers", href: "/solutions/hire-ai-engineers" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Industries", href: "/industries" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "AI Portfolio", href: "/portfolio" },
      { label: "Agent Bank", href: "/portfolio/agent-bank" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
