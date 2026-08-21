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
  // Partner / platform logos still present as assets (inferred from public asset paths)
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
