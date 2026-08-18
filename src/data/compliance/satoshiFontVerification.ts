export type VerificationStatus =
  | "VERIFIED"
  | "PENDING_EXTERNAL_CONFIRMATION"
  | "UNVERIFIED";

export type FontProvenanceRecord = {
  fontName: string;
  assetPaths: string[];
  licenseStatus: VerificationStatus;
  evidenceReference?: string;
  externalEvidenceRequired?: string;
  notes?: string;
};

export const satoshiFontVerificationRegistry: FontProvenanceRecord[] = [
  {
    fontName: "Satoshi",
    assetPaths: [
      "/src/fonts/satoshi/Satoshi-*.woff2 (actual files present in repo)",
    ],
    licenseStatus: "UNVERIFIED",
    evidenceReference:
      "No license statement verified from repository metadata/files in this audit pass.",
    externalEvidenceRequired:
      "Font license proof from Fontshare (or the original distributor), plus permission for commercial use and any required attribution/NOTICE text.",
    notes:
      "This registry is intentionally conservative to avoid fabricating license evidence.",
  },
];

