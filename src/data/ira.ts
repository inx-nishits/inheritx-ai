/** Single place to swap IRA CTA destination, avatar, or video asset. */

export const IRA_CHAT_DEFAULT_URL =
  "https://ira-chatbot-nine.vercel.app/" as const;

function resolveIraChatUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_IRA_CHAT_URL?.trim() ?? "";
  const candidate = fromEnv || IRA_CHAT_DEFAULT_URL;
  try {
    const url = new URL(candidate);
    if (url.protocol !== "https:") return IRA_CHAT_DEFAULT_URL;
    return url.toString();
  } catch {
    return IRA_CHAT_DEFAULT_URL;
  }
}

export const IRA_CHAT_URL = resolveIraChatUrl();

export const IRA_AVATAR_SRC = "/images/actual/Ira-icon.png" as const;

export const IRA_VIDEO_SRC = "/images/actual/IRA.mp4" as const;

/** Measured from IRA.mp4 (720×1280, 8.0s). Used to sync transcript if metadata is late. */
export const IRA_VIDEO_DURATION_S = 8;

/** First-visit delay before the concierge panel opens. `0` = no auto-open. */
export const IRA_AUTO_OPEN_MS = 0;

export const IRA_SCRIPT =
  "Hi, thank you for connecting with InheritX Solutions. I am IRA, your AI assistant. I am here to guide you through your project requirements. Let’s get started." as const;

export const IRA_CTA_LABEL = "Ask IRA" as const;

export const IRA_CTA_SUBLABEL = "InheritX Research Assistant" as const;

export const IRA_A11Y_LABEL = "Open IRA - InheritX Research Assistant" as const;

/**
 * Existing IRA clickable mapping - UI may change, destination must not:
 *   Ask IRA → IRA_CHAT_URL (new tab, noopener)
 */
export const IRA_CTA = {
  label: IRA_CTA_LABEL,
  href: IRA_CHAT_URL,
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
