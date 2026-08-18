import type { CtaAnalyticsPayload } from "@/data/cta/analytics";
import { CTA_EVENTS } from "@/data/cta/analytics";
import { isAnalyticsConsentGranted } from "@/lib/consent";

export {
  contactHref,
  isOfficialContactIntent,
  resolveContactIntent,
} from "@/data/cta/intents";
export { isBannedCtaLabel } from "@/data/cta/copy";
export { CTA_EVENTS } from "@/data/cta/analytics";
export type { CtaAnalyticsPayload } from "@/data/cta/analytics";

type AnalyticsWindow = Window & {
  dataLayer?: Record<string, unknown>[];
  gtag?: (...args: unknown[]) => void;
};

function analyticsWindow(): AnalyticsWindow | null {
  if (typeof window === "undefined") return null;
  return window as AnalyticsWindow;
}

function ensureDataLayer(win: AnalyticsWindow): Record<string, unknown>[] {
  if (!Array.isArray(win.dataLayer)) {
    win.dataLayer = [];
  }
  return win.dataLayer;
}

function toVendorParams(payload: CtaAnalyticsPayload): Record<string, unknown> {
  return {
    event: payload.event,
    cta_family: payload.family,
    cta_pattern: payload.pattern,
    cta_intent: payload.intent,
    cta_location: payload.location,
    cta_label: payload.label,
    cta_href: payload.href,
    ...(payload.variant ? { cta_variant: payload.variant } : {}),
  };
}

/**
 * Typed CTA analytics. Always dispatches `inheritx:cta`.
 * Pushes to `dataLayer` (GTM) and `gtag` when those vendors are present.
 */
export function trackCta(payload: CtaAnalyticsPayload): void {
  const win = analyticsWindow();
  if (!win) return;

  window.dispatchEvent(new CustomEvent("inheritx:cta", { detail: payload }));

  if (!isAnalyticsConsentGranted()) return;

  const params = toVendorParams(payload);
  ensureDataLayer(win).push(params);

  if (typeof win.gtag === "function") {
    win.gtag("event", payload.event, {
      cta_family: payload.family,
      cta_pattern: payload.pattern,
      cta_intent: payload.intent,
      cta_location: payload.location,
      cta_label: payload.label,
      cta_href: payload.href,
      ...(payload.variant ? { cta_variant: payload.variant } : {}),
    });
  }
}

export function trackCtaClick(
  payload: Omit<CtaAnalyticsPayload, "event">,
): void {
  trackCta({ ...payload, event: CTA_EVENTS.click });
}

export function trackCtaImpression(
  payload: Omit<CtaAnalyticsPayload, "event">,
): void {
  trackCta({ ...payload, event: CTA_EVENTS.impression });
}

export function trackCtaFormStart(
  payload: Omit<CtaAnalyticsPayload, "event">,
): void {
  trackCta({ ...payload, event: CTA_EVENTS.formStart });
}

export function trackCtaFormSubmit(
  payload: Omit<CtaAnalyticsPayload, "event">,
): void {
  trackCta({ ...payload, event: CTA_EVENTS.formSubmit });
}

export function trackCtaIraOpen(
  payload: Omit<CtaAnalyticsPayload, "event">,
): void {
  trackCta({ ...payload, event: CTA_EVENTS.iraOpen });
}

/** Last CTA click in this tab — used to stitch form_start / form_submit. */
export function readLastCtaClick(): Partial<
  Omit<CtaAnalyticsPayload, "event">
> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem("inx_cta_last");
    if (!raw) return null;
    return JSON.parse(raw) as Partial<Omit<CtaAnalyticsPayload, "event">>;
  } catch {
    return null;
  }
}
