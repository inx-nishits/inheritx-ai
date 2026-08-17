/** Single place to swap IRA CTA destination or avatar asset. */

function resolveIraChatUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_IRA_CHAT_URL?.trim() ?? "";
  if (!fromEnv) return "";
  try {
    const url = new URL(fromEnv);
    if (url.protocol !== "https:") return "";
    if (url.hostname.endsWith("vercel.app")) return "";
    return url.toString();
  } catch {
    return "";
  }
}

export const IRA_CHAT_URL = resolveIraChatUrl();

export const IRA_AVATAR_SRC = "/images/ira/avatar.png" as const;

export const IRA_CTA_LABEL = "Ask IRA" as const;

export const IRA_CTA_SUBLABEL = "InheritX Research Assistant" as const;

export const IRA_A11Y_LABEL =
  "Open IRA — InheritX Research Assistant" as const;
