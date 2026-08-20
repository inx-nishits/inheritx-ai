export const teamHero = {
  eyebrow: "Our Team",
  title: "AI architects and engineers, not generalist consultants.",
  description:
    "Every engagement is led by named technical accountability. Architects, ML/LLM engineers, and delivery leads who ship intelligence into production, owned, governed, and measured.",
};

export const leadership = [
  {
    role: "Enterprise Architecture",
    focus: "Platform strategy, private AI estates, and board-ready roadmaps.",
  },
  {
    role: "Agentic Systems",
    focus: "Multi-agent design, tool governance, and human-in-the-loop controls.",
  },
  {
    role: "Applied ML & LLMOps",
    focus: "Evaluation harnesses, fine-tuning, cost control, and production reliability.",
  },
  {
    role: "Delivery & Enablement",
    focus: "Squad leadership, stakeholder alignment, and industrialization playbooks.",
  },
];

export const coreCapabilities = [
  {
    title: "AI Architects",
    copy: "Design systems that survive security review, scale, and organizational change.",
  },
  {
    title: "ML / LLM Engineers",
    copy: "Build retrieval, agents, vision, and evaluation loops that hold up in production.",
  },
  {
    title: "AI Application Engineers",
    copy: "Ship the interfaces and integrations that make intelligence usable by real teams.",
  },
  {
    title: "Domain Partners",
    copy: "Translate healthcare, finance, and operations constraints into workable AI design.",
  },
];

export const cultureValues = [
  {
    title: "Production over performance theater",
    copy: "We optimize for systems that run Monday morning, not demos that impress Friday.",
  },
  {
    title: "Ownership is the product",
    copy: "Clients keep the IP. We refuse lock-in disguised as partnership.",
  },
  {
    title: "Clarity under pressure",
    copy: "Regulated environments need precise communication, written decisions, and calm delivery.",
  },
  {
    title: "Craft with accountability",
    copy: "Beautiful architecture means nothing without metrics, traces, and escalation paths.",
  },
];

export const whyWorkWithUs = [
  {
    title: "Embedded, not distant",
    copy: "Squads and Embedded AI Engineering engagements work inside your rituals, not around them.",
  },
  {
    title: "Senior by default",
    copy: "Critical path work is led by people who have shipped complex platforms before AI was a buzzword.",
  },
  {
    title: "Honest scoping",
    copy: "We will tell you when consulting is needed before hiring, or when a pilot is not ready to scale.",
  },
];

export const collaborationSteps = [
  {
    step: "01",
    title: "Align on mandate",
    copy: "Outcomes, constraints, and decision owners, before tooling conversations.",
  },
  {
    step: "02",
    title: "Staff the right shape",
    copy: "Architect-led pods, embedded engineers, or transformation programs, matched to readiness.",
  },
  {
    step: "03",
    title: "Build with evidence",
    copy: "Weekly signal: demos, evals, risks, and what changed in the operating model.",
  },
  {
    step: "04",
    title: "Industrialize together",
    copy: "Enablement, observability, and handover so capability compounds after we leave the room.",
  },
];

export const teamHighlights = [
  { value: "2011+", label: "Enterprise delivery DNA informing AI programs" },
  { value: "Global", label: "Pods across IN · US · EU · JP" },
  { value: "AI-native", label: "Agents, RAG, vision, LLMOps" },
  { value: "Owned", label: "IP transfer on every build" },
];

/** CMS-ready team member shape — swap image/social fields when a CMS is connected. */
export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image?: string;
  linkedin?: string;
  department?: string;
  /** Featured leaders appear in the larger intro row above the main grid. */
  featured?: boolean;
};

export const teamMembersIntro = {
  eyebrow: "Team members",
  title: "Operators behind production AI.",
  description:
    "Leadership that owns outcomes, and practice disciplines across architecture, agents, ML/LLMOps, and delivery. Additional specialist profiles will be published here as we expand this roster.",
};

export const teamMembers: TeamMember[] = [
  {
    id: "sandip-modi",
    name: "Sandip Modi",
    role: "CEO",
    bio: "Sets the vision for AI-native enterprise delivery worldwide, pairing ambition with the discipline required for regulated environments.",
    image: "/images/team/sandip-modi.png",
    department: "Leadership",
    linkedin: "https://www.linkedin.com/company/inheritx/",
    featured: true,
  },
  {
    id: "aiyub-munshi",
    name: "Aiyub Munshi",
    role: "Delivery Head & Senior Project Manager",
    bio: "Owns delivery excellence across complex multi-squad AI and platform programs, timelines honest, outcomes measurable.",
    image: "/images/team/aiyub-munshi.jpg",
    department: "Delivery",
    linkedin: "https://www.linkedin.com/company/inheritx/",
    featured: true,
  },
  {
    id: "krish-hinduja",
    name: "Krish Hinduja",
    role: "Sales Head",
    bio: "Partners with enterprise leaders to shape outcomes-first AI engagements, scoping for production, not slideware.",
    image: "/images/team/krish-hinduja.jpg",
    department: "Growth",
    linkedin: "https://www.linkedin.com/company/inheritx/",
    featured: true,
  },
  {
    id: "meera-tank",
    name: "Meera Tank",
    role: "HR Head",
    bio: "Builds the culture and talent systems behind high-performing AI delivery pods that stay accountable under pressure.",
    image: "/images/team/meera-tank.jpg",
    department: "People",
    linkedin: "https://www.linkedin.com/company/inheritx/",
    featured: true,
  },
];

/** Practice disciplines shown until named specialist profiles are published. */
export const practiceDisciplines = [
  {
    title: "Enterprise AI Architecture",
    copy: "Private estates, governance models, and board-ready roadmaps.",
  },
  {
    title: "Agentic & Multi-Agent Systems",
    copy: "Tool-governed agents with evaluation and human approval gates.",
  },
  {
    title: "ML / LLMOps",
    copy: "Evaluation harnesses, cost control, and production reliability.",
  },
  {
    title: "Computer Vision",
    copy: "Perception systems for quality, safety, logistics, and care.",
  },
  {
    title: "Generative Applications",
    copy: "Secure LLM products embedded in real enterprise workflows.",
  },
  {
    title: "AI Transformation Delivery",
    copy: "From discovery to industrialization, with enablement that sticks.",
  },
];

export const featuredTeamMembers = teamMembers.filter((m) => m.featured);
export const gridTeamMembers = teamMembers.filter((m) => !m.featured);
