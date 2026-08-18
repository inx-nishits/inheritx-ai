"use client";

import Link from "next/link";
import { useSyncExternalStore, type MouseEvent } from "react";
import { createPortal } from "react-dom";

import { ctaFamilyClasses } from "@/data/cta/families";
import {
  hasConsentChoice,
  setAnalyticsConsent,
  subscribeConsent,
} from "@/lib/consent";
import { cn } from "@/lib/cn";

function getConsentChoiceSnapshot() {
  return hasConsentChoice();
}

function getServerConsentChoiceSnapshot() {
  return false;
}

function subscribeClientReady() {
  return () => {};
}

function getClientReadySnapshot() {
  return true;
}

function getServerReadySnapshot() {
  return false;
}

export function CookieConsentBanner() {
  const isClient = useSyncExternalStore(
    subscribeClientReady,
    getClientReadySnapshot,
    getServerReadySnapshot,
  );
  const hasChoice = useSyncExternalStore(
    subscribeConsent,
    getConsentChoiceSnapshot,
    getServerConsentChoiceSnapshot,
  );

  if (!isClient || hasChoice) return null;

  const choose =
    (granted: boolean) => (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      setAnalyticsConsent(granted);
    };

  return createPortal(
    <section
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
      data-lenis-prevent
      onPointerDown={(event) => event.stopPropagation()}
      className="pointer-events-auto fixed inset-x-4 bottom-4 z-[9999] mx-auto max-w-3xl rounded-[1.5rem] border border-white/10 bg-ink-soft p-4 shadow-[0_16px_48px_rgba(0,0,0,0.45)] sm:p-5"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
            Cookies
          </p>
          <p className="text-sm leading-relaxed text-white/60">
            We use analytics cookies to understand site usage and improve
            enterprise UX. You can change your choice anytime.
          </p>
          <p className="mt-2 text-xs leading-relaxed text-white/45">
            See details in{" "}
            <Link
              href="/cookies"
              className="text-cyan underline underline-offset-2 hover:text-white"
            >
              our cookie policy
            </Link>
            .
          </p>
        </div>

        <div className="relative z-10 flex shrink-0 items-center gap-2 md:flex-col md:items-stretch">
          <button
            type="button"
            onClick={choose(false)}
            className={cn(ctaFamilyClasses.ghost, "cursor-pointer")}
          >
            Reject analytics
          </button>
          <button
            type="button"
            onClick={choose(true)}
            className={cn(ctaFamilyClasses.tint, "cursor-pointer")}
          >
            Accept analytics
          </button>
        </div>
      </div>
    </section>,
    document.body,
  );
}
