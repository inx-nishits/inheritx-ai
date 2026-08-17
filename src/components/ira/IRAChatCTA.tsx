"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import {
  IRA_A11Y_LABEL,
  IRA_AVATAR_SRC,
  IRA_CHAT_URL,
  IRA_CTA_LABEL,
} from "@/data/ira";
import { trackCtaIraOpen } from "@/lib/cta";
import { cn } from "@/lib/cn";
import { useCtaImpression } from "@/components/cta/useCtaImpression";

const BUBBLE_MESSAGES = [
  "Hi, I'm IRA",
  "Need answers? Ask IRA.",
  "Ask about AI systems",
  "Talk to IRA",
] as const;

/**
 * Global floating CTA for IRA — InheritX Research Assistant.
 * Opens the live chatbot in a new tab. Isolated from page layout/content.
 * Hidden until NEXT_PUBLIC_IRA_CHAT_URL points at a production host.
 */
export function IRAChatCTA() {
  if (!IRA_CHAT_URL) return null;
  return <IRAChatCTAActive />;
}

function IRAChatCTAActive() {
  const [entered, setEntered] = useState(false);
  const [bubbleIndex, setBubbleIndex] = useState(0);
  const [messageVisible, setMessageVisible] = useState(true);
  const [clicked, setClicked] = useState(false);
  const impressionRef = useCtaImpression<HTMLDivElement>({
    family: "object",
    pattern: "ira-converse",
    intent: "ira",
    location: "ira",
    label: IRA_CTA_LABEL,
    href: IRA_CHAT_URL,
  });

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const enterTimer = window.setTimeout(
      () => setEntered(true),
      reduceMotion ? 0 : 600,
    );

    // Always keep a tooltip; rotate copy for attention.
    // Reduced motion: slower swap, no fade flicker.
    const rotateMs = reduceMotion ? 10000 : 4500;
    const fadeMs = reduceMotion ? 0 : 180;
    let fadeTimer: number | undefined;

    const interval = window.setInterval(() => {
      if (fadeMs > 0) {
        setMessageVisible(false);
        if (fadeTimer) window.clearTimeout(fadeTimer);
        fadeTimer = window.setTimeout(() => {
          setBubbleIndex((i) => (i + 1) % BUBBLE_MESSAGES.length);
          setMessageVisible(true);
        }, fadeMs);
      } else {
        setBubbleIndex((i) => (i + 1) % BUBBLE_MESSAGES.length);
      }
    }, rotateMs);

    return () => {
      window.clearTimeout(enterTimer);
      window.clearTimeout(fadeTimer);
      window.clearInterval(interval);
    };
  }, []);

  const handleClick = () => {
    setClicked(true);
    trackCtaIraOpen({
      family: "object",
      pattern: "ira-converse",
      intent: "ira",
      location: "ira",
      label: IRA_CTA_LABEL,
      href: IRA_CHAT_URL,
    });
    window.setTimeout(() => setClicked(false), 220);
  };

  return (
    <div
      ref={impressionRef}
      className={cn(
        "pointer-events-none fixed z-[45]",
        "right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] sm:right-5 sm:bottom-5 md:right-6 md:bottom-6",
      )}
    >
      <div
        className={cn(
          "pointer-events-auto relative flex flex-col items-end gap-1.5",
          "transition-[opacity,transform] duration-500 ease-out",
          "motion-reduce:transition-none",
          entered
            ? "translate-y-0 opacity-100 motion-safe:animate-[ira-pop_0.55s_ease-out] motion-reduce:animate-none"
            : "translate-y-3 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100",
        )}
      >
        <div
          role="status"
          aria-live="off"
          aria-hidden
          className="pointer-events-none relative max-w-[11rem] rounded-xl border border-cyan/40 bg-ink px-2.5 py-1.5 text-left shadow-[0_10px_28px_rgba(7,9,13,0.28)]"
        >
          <p
            className={cn(
              "min-h-[1.1rem] text-[11px] leading-snug font-medium text-white/90 transition-opacity duration-200",
              "motion-reduce:transition-none",
              messageVisible ? "opacity-100" : "opacity-0",
            )}
          >
            {BUBBLE_MESSAGES[bubbleIndex]}
          </p>
          <span
            aria-hidden
            className="absolute right-4 -bottom-1.5 size-2.5 rotate-45 border-r border-b border-cyan/40 bg-ink"
          />
        </div>

        <div
          className={cn(
            "motion-safe:animate-[ira-float_5.5s_ease-in-out_infinite]",
            "motion-reduce:animate-none",
          )}
        >
          <a
            href={IRA_CHAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={IRA_A11Y_LABEL}
            onClick={handleClick}
            className={cn(
              "group relative inline-flex min-h-11 items-center gap-2 rounded-full border border-cyan/55 bg-ink py-1 pr-3 pl-1",
              "shadow-[0_10px_28px_rgba(7,9,13,0.28),0_0_20px_rgba(0,190,212,0.12)]",
              "transition-[transform,box-shadow,border-color] duration-300",
              "hover:scale-[1.03] hover:border-cyan hover:shadow-[0_12px_32px_rgba(7,9,13,0.32),0_0_24px_rgba(0,190,212,0.2)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
              "active:scale-[0.98]",
              "motion-reduce:transition-none motion-reduce:hover:scale-100",
              clicked && "scale-[0.97]",
            )}
          >
            <span className="relative size-9 shrink-0 overflow-hidden rounded-full ring-1 ring-cyan/50 sm:size-10">
              <Image
                src={IRA_AVATAR_SRC}
                alt=""
                width={80}
                height={80}
                className="size-full object-cover object-[center_18%] transition-transform duration-300 group-hover:scale-[1.04] motion-reduce:transition-none"
                priority={false}
              />
              <span
                aria-hidden
                className="absolute right-0 bottom-0 size-2 rounded-full border-2 border-ink bg-cyan"
              />
            </span>

            <span className="pr-0.5 text-[12px] font-semibold tracking-wide text-white sm:text-[13px]">
              {IRA_CTA_LABEL}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
