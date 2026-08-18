export type VerificationStatus =
  | "VERIFIED"
  | "PENDING_EXTERNAL_CONFIRMATION"
  | "UNVERIFIED";

export type LogoProvenanceRecord = {
  brand: string;
  whereUsed: string;
  usageContext?: string;
  impliedClaim?: string;
  assetType: "svg" | "png";
  assetPath: string;
  officialAssetOrRecreated: "OFFICIAL_ASSET" | "RECREATED_IN_REPO" | "UNKNOWN";
  source?: string;
  profileUrl?: string;
  partnershipStatus?: string;
  certificationStatus?: string;
  licenseGuidelineStatus?: string;
  verificationStatus: VerificationStatus;
  externalEvidenceRequired?: string;
};

// NOTE: This repository contains logo assets (often recreated SVGs).
// We intentionally do NOT mark any logo as VERIFIED unless in-repo evidence exists.
export const logoProvenanceVerificationRegistry: LogoProvenanceRecord[] = [
  // Trust / reviews
  {
    brand: "ISO",
    whereUsed: "/trusted-by + cookies/legal trust sections",
    assetType: "svg",
    assetPath: "/images/trust/iso.svg",
    officialAssetOrRecreated: "UNKNOWN",
    verificationStatus: "UNVERIFIED",
    externalEvidenceRequired:
      "ISO certification ownership + logo usage rights (e.g., certificate reference + brand guideline approval).",
  },
  {
    brand: "Google Reviews",
    whereUsed: "src/components/home/TrustedBy.tsx",
    assetType: "svg",
    assetPath: "/images/trust/google-reviews.svg",
    officialAssetOrRecreated: "UNKNOWN",
    verificationStatus: "UNVERIFIED",
    externalEvidenceRequired:
      "Review platform endorsement/logo usage permissions (and any rating context if claimed publicly).",
  },
  {
    brand: "Clutch",
    whereUsed: "src/components/home/TrustedBy.tsx",
    assetType: "svg",
    assetPath: "/images/trust/clutch.svg",
    officialAssetOrRecreated: "UNKNOWN",
    verificationStatus: "UNVERIFIED",
    externalEvidenceRequired:
      "Clutch logo usage permission + confirmation that the displayed trust positioning is allowed.",
  },
  {
    brand: "Upwork",
    whereUsed: "src/components/home/TrustedBy.tsx",
    assetType: "svg",
    assetPath: "/images/trust/upwork.svg",
    officialAssetOrRecreated: "UNKNOWN",
    verificationStatus: "UNVERIFIED",
    externalEvidenceRequired:
      "Upwork logo usage permission + confirmation that claims (if any) are allowed.",
  },
  {
    brand: "Trustpilot",
    whereUsed: "src/components/home/TrustedBy.tsx",
    assetType: "svg",
    assetPath: "/images/trust/trustpilot.svg",
    officialAssetOrRecreated: "UNKNOWN",
    verificationStatus: "UNVERIFIED",
    externalEvidenceRequired:
      "Trustpilot logo usage permission + confirmation that the trust positioning is allowed.",
  },

  // Partner / platform logos (inferred from public asset paths)
  {
    brand: "AWS Partner",
    whereUsed: "src/components/home/TrustedBy.tsx",
    assetType: "svg",
    assetPath: "/images/trust/aws-partner.svg",
    officialAssetOrRecreated: "UNKNOWN",
    verificationStatus: "UNVERIFIED",
    externalEvidenceRequired:
      "AWS partner program status + permission to use AWS partner logo.",
  },
  {
    brand: "Redis",
    whereUsed: "src/components/home/TechStack.tsx",
    assetType: "svg",
    assetPath: "/images/partners/redis.svg",
    officialAssetOrRecreated: "UNKNOWN",
    verificationStatus: "UNVERIFIED",
    externalEvidenceRequired:
      "Redis logo usage permission (and confirmation that no endorsement beyond logo placement is implied).",
  },
  {
    brand: "VLLM",
    whereUsed: "src/components/home/TechStack.tsx",
    assetType: "svg",
    assetPath: "/images/partners/vllm.svg",
    officialAssetOrRecreated: "UNKNOWN",
    verificationStatus: "UNVERIFIED",
  },
  {
    brand: "Weaviate",
    whereUsed: "src/components/home/TechStack.tsx",
    assetType: "svg",
    assetPath: "/images/partners/weaviate.svg",
    officialAssetOrRecreated: "UNKNOWN",
    verificationStatus: "UNVERIFIED",
  },
  {
    brand: "Hugging Face",
    whereUsed: "src/components/home/TechStack.tsx",
    assetType: "svg",
    assetPath: "/images/partners/huggingface.svg",
    officialAssetOrRecreated: "UNKNOWN",
    verificationStatus: "UNVERIFIED",
  },
  {
    brand: "Pinecone",
    whereUsed: "src/components/home/TechStack.tsx",
    assetType: "svg",
    assetPath: "/images/partners/pinecone.svg",
    officialAssetOrRecreated: "UNKNOWN",
    verificationStatus: "UNVERIFIED",
  },
  {
    brand: "Anthropic",
    whereUsed: "src/components/home/TechStack.tsx",
    assetType: "svg",
    assetPath: "/images/partners/anthropic.svg",
    officialAssetOrRecreated: "UNKNOWN",
    verificationStatus: "UNVERIFIED",
  },
  {
    brand: "NVIDIA",
    whereUsed: "src/components/home/TechStack.tsx",
    assetType: "svg",
    assetPath: "/images/partners/nvidia.svg",
    officialAssetOrRecreated: "UNKNOWN",
    verificationStatus: "UNVERIFIED",
  },
  {
    brand: "PyTorch",
    whereUsed: "src/components/home/TechStack.tsx",
    assetType: "svg",
    assetPath: "/images/partners/pytorch.svg",
    officialAssetOrRecreated: "UNKNOWN",
    verificationStatus: "UNVERIFIED",
  },
];

