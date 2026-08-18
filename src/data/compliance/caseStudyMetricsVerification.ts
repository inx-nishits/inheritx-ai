import { caseStudiesPage } from "@/data/caseStudies";

export type VerificationStatus =
  | "VERIFIED"
  | "PENDING_EXTERNAL_CONFIRMATION"
  | "UNVERIFIED";

export type CaseStudyMetricClaimRecord = {
  caseStudyId: string;
  page: string;
  claim: string;
  metricLabel: string;
  // Enterprise verification fields (kept empty/unknown unless the repo includes evidence).
  baseline?: string;
  measurementPeriod?: string;
  measurementMethod?: string;
  source?: string;
  clientProjectOwner?: string;
  approvalStatus: VerificationStatus;
  evidenceReference?: string;
  dateVerified?: string;
  qualificationContext?: string;
  riskClassification?: "LOW" | "MEDIUM" | "HIGH";
};

function recordForMetric(
  caseStudyId: string,
  claim: string,
  metricLabel: string,
): CaseStudyMetricClaimRecord {
  return {
    caseStudyId,
    page: `/case-studies/${caseStudyId}`,
    claim,
    metricLabel,
    baseline: undefined,
    measurementPeriod: undefined,
    measurementMethod: undefined,
    source: undefined,
    clientProjectOwner: undefined,
    approvalStatus: "UNVERIFIED",
    evidenceReference:
      "External evidence required: signed measurement/methodology memo or client export backing the stated metric (baseline + time window + calculation method).",
    dateVerified: undefined,
    qualificationContext: undefined,
    riskClassification: "MEDIUM",
  };
}

export const caseStudyMetricsVerificationRegistry: CaseStudyMetricClaimRecord[] =
  caseStudiesPage.flatMap((cs) =>
    cs.results.map((r) =>
      recordForMetric(cs.id, r.value, r.label),
    ),
  );

