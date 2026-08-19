/** Canonical public origin. Used for metadataBase, sitemap, and robots. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://inheritx.ai"
).replace(/\/$/, "");
