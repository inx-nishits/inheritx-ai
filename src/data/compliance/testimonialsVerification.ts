import {
  getPublishedTestimonials,
  testimonials,
  type Testimonial,
} from "@/data/testimonials";

export type VerificationStatus =
  | "VERIFIED"
  | "PENDING_EXTERNAL_CONFIRMATION"
  | "UNVERIFIED";

export type TestimonialVerificationRecord = {
  testimonialId: string;
  name: string;
  title?: string;
  company?: string;
  quote: string;
  portraitAsset?: string;
  // Status fields intentionally default to UNVERIFIED unless we have an
  // in-repo evidence reference (approval docs, ticket IDs, signed emails, etc.).
  approvalStatus: VerificationStatus;
  quoteApprovalStatus: VerificationStatus;
  portraitPermissionStatus: VerificationStatus;
  companyNamePermissionStatus: VerificationStatus;
  evidenceReference?: string;
  verificationDate?: string;
  verifier?: string;
};

function recordFor(t: Testimonial): TestimonialVerificationRecord {
  return {
    testimonialId: t.id,
    name: t.name,
    title: t.title,
    company: t.company,
    quote: t.quote,
    portraitAsset: t.avatarSrc,
    approvalStatus: "UNVERIFIED",
    quoteApprovalStatus: "UNVERIFIED",
    portraitPermissionStatus: "UNVERIFIED",
    companyNamePermissionStatus: "UNVERIFIED",
    evidenceReference: "External evidence required: written testimonial approval + asset permissions.",
    verificationDate: undefined,
    verifier: undefined,
  };
}

// Export a stable internal registry for enterprise readiness reviews.
export const testimonialsVerificationRegistry: TestimonialVerificationRecord[] = [
  ...getPublishedTestimonials(testimonials).map(recordFor),
];

