"use client";

import { useState } from "react";

import { ctaFamilyClasses } from "@/data/cta/families";
import { isAnalyticsConsentGranted, setAnalyticsConsent } from "@/lib/consent";

export function CookieConsentControls() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(() =>
    isAnalyticsConsentGranted(),
  );

  return (
    <section className="bg-ink pb-20 md:pb-24">
      <div className="mx-auto max-w-[800px] px-5 md:px-8">
        <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-ink-soft/60 p-6 md:p-8">
          <h2 className="font-display text-2xl text-white md:text-3xl">
            Your cookie choice
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/60 md:text-[15px]">
            Analytics cookies are currently{" "}
            <span className="text-cyan">{analyticsEnabled ? "enabled" : "disabled"}</span>.
            Your choice controls whether analytics vendors are allowed to load and whether
            analytics events are sent.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              className={ctaFamilyClasses.tint}
              onClick={() => {
                setAnalyticsConsent(true);
                setAnalyticsEnabled(true);
              }}
            >
              Enable analytics
            </button>
            <button
              type="button"
              className={ctaFamilyClasses.ghost}
              onClick={() => {
                setAnalyticsConsent(false);
                setAnalyticsEnabled(false);
              }}
            >
              Disable analytics
            </button>

            <button
              type="button"
              className={ctaFamilyClasses.text}
              onClick={() => {
                // Show the user a deterministic state without changing UI copy.
                // (Banner is hidden when consent is stored.)
                setAnalyticsConsent(false);
                setAnalyticsEnabled(false);
              }}
            >
              Revoke choice
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

