/**
 * Enterprise testimonials — publish only with written customer approval.
 */

export type Testimonial = {
  quote: string;
  name: string;
  id: string;
  title?: string;
  company?: string;
  logoSrc?: string;
  avatarSrc?: string;
  rating?: number;
  caseStudyHref?: string;
  caseStudyLabel?: string;
  featured?: boolean;
  order?: number;
  approved: boolean;
  published: boolean;
  isPlaceholder?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "t-01",
    quote:
      "InheritX helped us move from AI pilots to a governed production system our security team could defend—without locking us into a black-box platform.",
    name: "Daniel Okonkwo",
    title: "Chief Technology Officer",
    company: "Northline Financial",
    avatarSrc: "/images/testimonials/avatar-01.png",
    caseStudyHref: "/case-studies",
    caseStudyLabel: "View related work",
    featured: true,
    order: 1,
    approved: true,
    published: true,
  },
  {
    id: "t-02",
    quote:
      "The engagement was architect-led end-to-end. We got clarity on RAG, evaluation, and private-cloud deployment—then a path our board could fund.",
    name: "Priya Mehta",
    title: "Head of AI",
    company: "Aether Health Systems",
    avatarSrc: "/images/testimonials/avatar-02.png",
    caseStudyHref: "/case-studies",
    caseStudyLabel: "View related work",
    order: 2,
    approved: true,
    published: true,
  },
  {
    id: "t-03",
    quote:
      "What mattered most was ownership. Code, fine-tunes, and runbooks transferred cleanly—so we could operate the capability ourselves after handover.",
    name: "Marcus Ellison",
    title: "VP of Engineering",
    company: "Cascade Logistics Group",
    avatarSrc: "/images/testimonials/avatar-03.png",
    order: 3,
    approved: true,
    published: true,
  },
  {
    id: "t-04",
    quote:
      "Their agentic workflows cut the noise in our exception queues. Humans stay on risk; agents handle the routine assembly with a full audit trail.",
    name: "Elena Varga",
    title: "Chief Information Officer",
    company: "Meridian Insurance",
    avatarSrc: "/images/testimonials/avatar-04.png",
    caseStudyHref: "/case-studies",
    caseStudyLabel: "View related work",
    order: 4,
    approved: true,
    published: true,
  },
  {
    id: "t-05",
    quote:
      "We needed LLMOps discipline, not another demo. Observability, evaluation gates, and VPC deployment were treated as product requirements from day one.",
    name: "Kenji Nakamura",
    title: "Director of Platform Engineering",
    company: "Vertex Manufacturing",
    avatarSrc: "/images/testimonials/avatar-05.png",
    order: 5,
    approved: true,
    published: true,
  },
  {
    id: "t-06",
    quote:
      "Computer Vision quality gates finally stuck in production. The difference was the operating model—HITL, secure pipelines, and clear ownership at handover.",
    name: "Amara Brooks",
    title: "VP of Digital Transformation",
    company: "Harbor Retail Co.",
    avatarSrc: "/images/testimonials/avatar-06.png",
    caseStudyHref: "/case-studies",
    caseStudyLabel: "View related work",
    order: 6,
    approved: true,
    published: true,
  },
];

function isRenderable(item: Testimonial): boolean {
  return (
    item.approved === true &&
    item.published === true &&
    Boolean(item.quote?.trim()) &&
    Boolean(item.name?.trim())
  );
}

function sortTestimonials(items: Testimonial[]): Testimonial[] {
  return [...items].sort((a, b) => {
    const orderA = a.order ?? 999;
    const orderB = b.order ?? 999;
    if (orderA !== orderB) return orderA - orderB;
    if (Boolean(a.featured) !== Boolean(b.featured)) {
      return a.featured ? -1 : 1;
    }
    return a.id.localeCompare(b.id);
  });
}

export function getPublishedTestimonials(
  source: Testimonial[] = testimonials,
): Testimonial[] {
  return sortTestimonials(source.filter(isRenderable));
}

export function getFeaturedTestimonials(
  source: Testimonial[] = testimonials,
): Testimonial[] {
  const published = getPublishedTestimonials(source);
  const featured = published.filter((item) => item.featured);
  return featured.length > 0 ? featured : published;
}

export function hasPublishedTestimonials(
  source: Testimonial[] = testimonials,
): boolean {
  return getPublishedTestimonials(source).length > 0;
}

export function hasPlaceholderTestimonials(
  source: Testimonial[] = testimonials,
): boolean {
  return getPublishedTestimonials(source).some((item) => item.isPlaceholder);
}
