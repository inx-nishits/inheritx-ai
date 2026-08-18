export type ConsentStateV1 = {
  v: 1;
  analytics: "granted" | "denied";
  updatedAt: string;
};

const CONSENT_COOKIE_KEY = "inx_consent_v1";
export const CONSENT_CHANGE_EVENT = "inheritx:consent-change";

function safeJsonParse<T>(value: string): T | null {
  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

export function readConsentFromCookie(): ConsentStateV1 | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${CONSENT_COOKIE_KEY}=([^;]*)`),
  );
  if (!match?.[1]) return null;
  const decoded = decodeURIComponent(match[1]);
  const parsed = safeJsonParse<ConsentStateV1>(decoded);
  if (!parsed || parsed.v !== 1) return null;
  return parsed;
}

export function writeConsentCookie(next: ConsentStateV1): void {
  if (typeof document === "undefined") return;
  const encoded = encodeURIComponent(JSON.stringify(next));
  // Keep max-age long-lived for enterprise persistence.
  document.cookie = `${CONSENT_COOKIE_KEY}=${encoded};path=/;max-age=${60 * 60 * 24 * 180};samesite=lax`;
}

export function setAnalyticsConsent(granted: boolean): void {
  const state: ConsentStateV1 = {
    v: 1,
    analytics: granted ? "granted" : "denied",
    updatedAt: new Date().toISOString(),
  };
  writeConsentCookie(state);
  try {
    window.localStorage.setItem(CONSENT_COOKIE_KEY, JSON.stringify(state));
  } catch {
    /* private mode */
  }

  emitConsentChange();
}

export function subscribeConsent(listener: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(CONSENT_CHANGE_EVENT, listener);
  window.addEventListener("storage", listener);
  return () => {
    window.removeEventListener(CONSENT_CHANGE_EVENT, listener);
    window.removeEventListener("storage", listener);
  };
}

function emitConsentChange(): void {
  try {
    window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
  } catch {
    /* ignore */
  }
}

export function hasConsentChoice(): boolean {
  return readConsent() !== null;
}

export function readConsent(): ConsentStateV1 | null {
  // Prefer localStorage for quick reads, but cookie is the source-of-truth.
  if (typeof window !== "undefined") {
    try {
      const raw = window.localStorage.getItem(CONSENT_COOKIE_KEY);
      if (raw) {
        const parsed = safeJsonParse<ConsentStateV1>(raw);
        if (parsed?.v === 1) return parsed;
      }
    } catch {
      /* private mode */
    }
  }
  return readConsentFromCookie();
}

export function isAnalyticsConsentGranted(): boolean {
  const state = readConsent();
  return state?.analytics === "granted";
}

