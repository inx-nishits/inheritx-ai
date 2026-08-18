"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Minus, Volume2, VolumeX } from "lucide-react";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

import { useCtaImpression } from "@/components/cta/useCtaImpression";
import {
  IRA_A11Y_LABEL,
  IRA_AUTO_OPEN_MS,
  IRA_AVATAR_SRC,
  IRA_CHAT_URL,
  IRA_CTA_LABEL,
  IRA_CTA_SUBLABEL,
  IRA_SCRIPT,
  IRA_VIDEO_DURATION_S,
  IRA_VIDEO_SRC,
} from "@/data/ira";
import { cn } from "@/lib/cn";
import { trackCtaIraOpen } from "@/lib/cta";

type PanelMode = "expanded" | "minimized";

const CLOSED_KEY = "inx_ira_closed";
const MUTED_KEY = "inx_ira_muted";
const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const iraTrack = {
  family: "object" as const,
  pattern: "ira-converse" as const,
  intent: "ira" as const,
  location: "ira" as const,
  label: IRA_CTA_LABEL,
  href: IRA_CHAT_URL,
};

function emptySubscribe() {
  return () => {};
}

function subscribeReducedMotion(onChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function markClosedThisSession() {
  try {
    sessionStorage.setItem(CLOSED_KEY, "1");
  } catch {
    /* private mode */
  }
}

function persistMuted(muted: boolean) {
  try {
    sessionStorage.setItem(MUTED_KEY, muted ? "1" : "0");
  } catch {
    /* private mode */
  }
}

function wasClosedThisSession() {
  try {
    return sessionStorage.getItem(CLOSED_KEY) === "1";
  } catch {
    return false;
  }
}

/**
 * Global floating IRA concierge — InheritX Research Assistant.
 * Starts as the IRA-face CTA, then opens after 10s unless the visitor
 * already closed it this session. Ask IRA still opens IRA_CHAT_URL.
 */
export function IRAChatCTA() {
  return <IRAAssistant />;
}

function IRAAssistant() {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => false,
  );
  const [mode, setMode] = useState<PanelMode>("minimized");
  const [typedLen, setTypedLen] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mutedRef = useRef(true);
  const titleId = useId();
  const impressionRef = useCtaImpression<HTMLDivElement>(iraTrack);

  const applyMute = useCallback((next: boolean) => {
    mutedRef.current = next;
    setMuted(next);
    persistMuted(next);
    const el = videoRef.current;
    if (!el) return;
    el.muted = next;
    el.defaultMuted = next;
    if (!next) {
      el.volume = 1;
      const play = el.play();
      if (play) {
        play.catch(() => {
          mutedRef.current = true;
          setMuted(true);
          el.muted = true;
          el.defaultMuted = true;
        });
      }
    }
  }, []);

  const startPlayback = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;

    const start = () => {
      try {
        el.currentTime = 0;
      } catch {
        /* metadata not ready */
      }
      el.volume = 1;
      el.muted = mutedRef.current;
      el.defaultMuted = mutedRef.current;
      const play = el.play();
      if (play) {
        play.catch(() => {
          mutedRef.current = true;
          setMuted(true);
          el.muted = true;
          el.defaultMuted = true;
          el.play().catch(() => {});
        });
      }
    };

    if (el.readyState >= 2) start();
    else el.addEventListener("loadeddata", start, { once: true });
  }, []);

  const openPanel = useCallback(() => {
    setMode("expanded");
    startPlayback();
  }, [startPlayback]);

  const closePanel = useCallback(() => {
    markClosedThisSession();
    setMode("minimized");
    const el = videoRef.current;
    if (el && !el.paused) el.pause();
  }, []);

  useEffect(() => {
    if (!isClient || wasClosedThisSession() || mode === "expanded") return;
    const timer = window.setTimeout(() => openPanel(), IRA_AUTO_OPEN_MS);
    return () => window.clearTimeout(timer);
  }, [isClient, mode, openPanel]);

  useEffect(() => {
    if (mode === "expanded") return;
    const el = videoRef.current;
    if (el && !el.paused) el.pause();
  }, [mode]);

  useEffect(() => {
    if (!isClient || mode !== "expanded" || reduceMotion) return;

    let frame = 0;
    const tick = () => {
      const video = videoRef.current;
      const duration =
        video?.duration && Number.isFinite(video.duration) && video.duration > 0
          ? video.duration
          : IRA_VIDEO_DURATION_S;
      const videoTime =
        video && !video.paused && Number.isFinite(video.currentTime)
          ? video.currentTime
          : 0;
      const start = 0.28;
      const end = Math.max(duration - 0.18, start + 0.5);
      const progress = Math.min(
        1,
        Math.max(0, (videoTime - start) / (end - start)),
      );
      setTypedLen((prev) => {
        const next = Math.round(progress * IRA_SCRIPT.length);
        return prev === next ? prev : next;
      });
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [isClient, mode, reduceMotion]);

  useEffect(() => {
    if (mode !== "expanded") return;

    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      event.preventDefault();
      closePanel();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closePanel, mode]);

  const handleAskIra = () => {
    setClicked(true);
    trackCtaIraOpen(iraTrack);
    window.setTimeout(() => setClicked(false), 220);
  };

  if (!isClient) {
    return (
      <div
        className={cn(
          "pointer-events-none fixed z-[45]",
          "right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] sm:right-5 sm:bottom-5 md:right-6 md:bottom-6",
        )}
        aria-hidden
      />
    );
  }

  const displayLen = reduceMotion ? IRA_SCRIPT.length : typedLen;
  const typedText = IRA_SCRIPT.slice(0, displayLen);
  const stillTyping = displayLen < IRA_SCRIPT.length;

  return (
    <div
      ref={impressionRef}
      className={cn(
        "ira-shell pointer-events-none fixed z-[45]",
        "right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] sm:right-5 sm:bottom-5 md:right-6 md:bottom-6",
      )}
    >
      <motion.div
        key="panel"
        role="region"
        aria-labelledby={titleId}
        aria-hidden={mode !== "expanded"}
        data-lenis-prevent
        initial={false}
        animate={
          mode === "expanded"
            ? { opacity: 1, x: 0, scale: 1 }
            : { opacity: 0, x: 16, scale: 0.98 }
        }
        transition={{ duration: reduceMotion ? 0 : 0.4, ease: EASE_OUT }}
        className={cn(
          "ira-shell-panel origin-bottom-right",
          mode === "expanded"
            ? "pointer-events-auto relative"
            : "pointer-events-none invisible absolute right-0 bottom-0",
        )}
      >
        <div
          className={cn(
            "ira-panel border-cyan/20 bg-ink-soft relative overflow-hidden rounded-2xl border",
            "shadow-[0_16px_40px_rgba(7,9,13,0.4),0_0_24px_rgba(0,190,212,0.1)]",
          )}
        >
          <div className="flex items-center gap-2 px-2.5 pt-1.5 pb-1">
            <div className="min-w-0 flex-1">
              <p
                id={titleId}
                className="text-cyan text-[10px] font-semibold tracking-[0.18em] uppercase"
              >
                IRA
              </p>
              <p className="truncate text-[10px] text-white/45">
                {IRA_CTA_SUBLABEL}
              </p>
            </div>
            <div className="flex shrink-0 items-center">
              <button
                type="button"
                onClick={() => applyMute(!muted)}
                aria-label={muted ? "Unmute IRA" : "Mute IRA"}
                aria-pressed={!muted}
                className={cn(
                  "inline-flex size-10 items-center justify-center rounded-full text-white/55",
                  "transition-colors hover:bg-white/10 hover:text-white",
                  "focus-visible:ring-cyan focus-visible:ring-offset-ink-soft focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                  !muted && "text-cyan",
                )}
              >
                {muted ? (
                  <VolumeX size={15} strokeWidth={2} />
                ) : (
                  <Volume2 size={15} strokeWidth={2} />
                )}
              </button>
              <button
                type="button"
                onClick={() => closePanel()}
                aria-label="Minimize IRA assistant"
                className={cn(
                  "inline-flex size-10 items-center justify-center rounded-full text-white/55",
                  "transition-colors hover:bg-white/10 hover:text-white",
                  "focus-visible:ring-cyan focus-visible:ring-offset-ink-soft focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                )}
              >
                <Minus size={15} strokeWidth={2} />
              </button>
            </div>
          </div>

          <div className="ira-body px-2.5 pb-2">
            <div className="ira-video-frame bg-ink relative shrink-0 overflow-hidden rounded-[1rem]">
              <video
                ref={videoRef}
                className="ira-video pointer-events-none absolute inset-0 size-full object-cover"
                src={IRA_VIDEO_SRC}
                poster={IRA_AVATAR_SRC}
                muted={muted}
                loop
                playsInline
                controls={false}
                controlsList="nodownload nofullscreen noremoteplayback"
                disablePictureInPicture
                disableRemotePlayback
                preload="auto"
                aria-label="IRA, InheritX Research Assistant, speaking"
              />
            </div>

            <div className="ira-transcript">
              <p className="sr-only">{IRA_SCRIPT}</p>
              <p
                aria-hidden
                className="ira-transcript-copy text-[12px] leading-snug break-words text-white/88"
              >
                {typedText}
                {stillTyping && !reduceMotion ? (
                  <span
                    className="ira-caret ml-px inline-block h-[0.9em] w-px translate-y-[0.12em] bg-cyan align-baseline"
                    aria-hidden
                  />
                ) : null}
              </p>
              <a
                href={IRA_CHAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={IRA_A11Y_LABEL}
                onClick={handleAskIra}
                className={cn(
                  "cta-primary group relative mt-auto inline-flex w-full shrink-0 items-center justify-between gap-1 overflow-hidden rounded-full border border-cyan px-2.5 py-1 pr-1",
                  "text-[11px] font-semibold tracking-wide text-white",
                  "shadow-[0_0_16px_rgba(0,190,212,0.18)]",
                  "focus-visible:outline-none",
                  "motion-reduce:transition-none",
                  clicked && "scale-[0.98]",
                )}
              >
                <span className="relative z-10">{IRA_CTA_LABEL}</span>
                <span className="relative z-10 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-white text-ink">
                  <ArrowUpRight size={11} strokeWidth={2.25} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence initial={false}>
        {mode !== "expanded" ? (
          <motion.div
            key="trigger"
            initial={reduceMotion ? false : { opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: reduceMotion ? 0 : 0.3, ease: EASE_OUT }}
            className="pointer-events-auto origin-bottom-right motion-safe:animate-[ira-float_5.5s_ease-in-out_infinite]"
          >
            <button
              type="button"
              onClick={() => openPanel()}
              aria-label={IRA_A11Y_LABEL}
              aria-expanded={false}
              className={cn(
                "ira-trigger group relative inline-flex size-14 items-center justify-center",
                "focus-visible:ring-cyan focus-visible:ring-offset-paper focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
              )}
            >
              <span aria-hidden className="ira-trigger-ring" />
              <span
                aria-hidden
                className="ira-trigger-ring ira-trigger-ring-delay"
              />
              <span
                className={cn(
                  "ira-trigger-face relative inline-flex size-14 overflow-hidden rounded-full",
                  "border-cyan/70 bg-ink border",
                  "shadow-[0_10px_28px_rgba(7,9,13,0.35),0_0_22px_rgba(0,190,212,0.28)]",
                  "transition-[transform,box-shadow,border-color] duration-300",
                  "group-hover:border-cyan group-hover:scale-[1.06] group-hover:shadow-[0_12px_32px_rgba(7,9,13,0.4),0_0_28px_rgba(0,190,212,0.4)]",
                  "group-active:scale-[0.98] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
                )}
              >
                <video
                  className="ira-video pointer-events-none size-full object-cover"
                  src={IRA_VIDEO_SRC}
                  poster={IRA_AVATAR_SRC}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  preload="metadata"
                  aria-hidden
                />
                <span
                  aria-hidden
                  className="ira-trigger-dot border-ink bg-cyan absolute right-0.5 bottom-0.5 size-2.5 rounded-full border-2"
                />
              </span>
              <span className="ira-trigger-tip">{IRA_CTA_LABEL}</span>
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
