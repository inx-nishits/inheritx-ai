"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

import {
  CONSENT_CHANGE_EVENT,
  isAnalyticsConsentGranted,
} from "@/lib/consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim() ?? "";
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";

function isGtmId(value: string): boolean {
  return /^GTM-[A-Z0-9]+$/i.test(value);
}

function isGaId(value: string): boolean {
  return /^G-[A-Z0-9]+$/i.test(value);
}

/**
 * Boots GTM/GA4 only after analytics consent is granted.
 *
 * This prevents analytics cookies and event dispatching before explicit consent.
 */
export function GtmBoot() {
  const [consented, setConsented] = useState(() => isAnalyticsConsentGranted());

  useEffect(() => {
    const onChange = () => setConsented(isAnalyticsConsentGranted());
    window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
  }, []);

  // Consent-mode updates after initial consent decisions.
  // We cannot reliably "unload" already-loaded vendors in the browser,
  // but we can update consent state so analytics vendors stop recording.
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (typeof window.gtag === "function") {
        window.gtag("consent", "update", {
          analytics_storage: consented ? "granted" : "denied",
        });
      }
      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event: "inheritx_consent_update",
          analytics_storage: consented ? "granted" : "denied",
        });
      }
    } catch {
      /* ignore */
    }
  }, [consented]);

  const gtmId = isGtmId(GTM_ID) ? GTM_ID : "";
  const gaId = isGaId(GA_ID) ? GA_ID : "";

  if (!consented) return null;
  if (!gtmId && !gaId) return null;

  return (
    <>
      <Script id="cta-datalayer" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];`}
      </Script>
      {gtmId ? (
        <>
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              className="hidden"
              title="Google Tag Manager"
            />
          </noscript>
        </>
      ) : null}
      {gaId && !gtmId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('consent','update',{'analytics_storage':'granted'});gtag('config','${gaId}');`}
          </Script>
        </>
      ) : null}
    </>
  );
}

