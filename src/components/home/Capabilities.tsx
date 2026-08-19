"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";

import { capabilities } from "@/data/content";
import { TextReveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";
import { cn } from "@/lib/cn";

const cardLeads = [
  "/images/actual/actual-lead-capabilities.jpg",
  "/images/actual/actual-lead-solutions.jpg",
  "/images/actual/actual-lead-agents.jpg",
  "/images/actual/actual-lead-journey.jpg",
  "/images/actual/actual-lead-tech.jpg",
  "/images/actual/actual-lead-capabilities.jpg",
];

function CapabilityCard({
  item,
  index,
  className,
  contentAtBottom = false,
}: {
  item: (typeof capabilities)[number];
  index: number;
  className?: string;
  contentAtBottom?: boolean;
}) {
  return (
    <Link
      href={item.href}
      data-capability-card
      aria-label={`${item.title} — open details`}
      className={
        className ??
        "group relative h-[min(380px,48vh)] w-[min(82vw,380px)] shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-ink-soft p-7 md:w-[400px] md:p-9 lg:h-[min(420px,50vh)] lg:w-[420px] lg:p-10"
      }
    >
      <VisualFrame
        src={cardLeads[index % cardLeads.length]}
        alt=""
        className="absolute inset-0 rounded-none border-0 opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div
        className={cn(
          "relative flex flex-1 flex-col",
          contentAtBottom ? "justify-end" : "h-full justify-between",
        )}
      >
        <span className="font-mono text-sm text-cyan">{item.id}</span>
        <div className={cn(contentAtBottom && "mt-3")}>
          <h3 className="font-display text-2xl leading-tight text-white md:text-3xl lg:text-4xl">
            {item.title}
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/50 md:mt-4 md:text-base">
            {item.copy}
          </p>
        </div>
      </div>
    </Link>
  );
}

export function Capabilities() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [progress, setProgress] = useState(0);
  const [cardOffsets, setCardOffsets] = useState<number[]>([]);
  const targetIndex = useRef(0);
  const animating = useRef(false);
  const lenis = useLenis();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, (value) => value * -scrollDistance);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const styles = window.getComputedStyle(track);
      setScrollDistance(Math.max(0, track.scrollWidth - window.innerWidth));

      // Compute where each lane starts within the translated track.
      // We use these offsets so Prev/Next always lands on the exact lane title
      // (no skipping due to viewport clipping).
      const cards = Array.from(
        track.querySelectorAll("[data-capability-card]"),
      ) as HTMLElement[];
      const offsets = cards.map((el) => el.offsetLeft);
      setCardOffsets(offsets);
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [isDesktop]);

  const laneCount = capabilities.length;
  const lastIndex = laneCount - 1;

  const goToProgress = useCallback(
    (clampedProgress: number) => {
      const section = sectionRef.current;
      if (!section) return;
      const clamped = Math.min(1, Math.max(0, clampedProgress));
      // Use getBoundingClientRect + current scroll position for accuracy
      // instead of offsetTop which can be wrong inside sticky/transform contexts.
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY;
      const range = Math.max(1, section.offsetHeight - window.innerHeight);
      const top = sectionTop + clamped * range;
      if (lenis) {
        lenis.scrollTo(top, { duration: 0.8, easing: (t) => 1 - Math.pow(1 - t, 3) });
        return;
      }
      window.scrollTo({ top, behavior: "smooth" });
    },
    [lenis],
  );

  const goToCard = useCallback(
    (index: number) => {
      const next = Math.min(lastIndex, Math.max(0, index));
      targetIndex.current = next;
      animating.current = true;
      // Keep ref in sync immediately so rapid button presses don't accumulate
      // past the boundary before activeIndex state catches up.

      if (scrollDistance <= 0 || cardOffsets.length !== laneCount) {
        goToProgress(next / Math.max(1, lastIndex));
        return;
      }

      const offset = cardOffsets[next] ?? 0;
      const desiredProgress = Math.min(1, Math.max(0, offset / scrollDistance));
      goToProgress(desiredProgress);

      window.setTimeout(() => {
        animating.current = false;
      }, 700);
    },
    [
      cardOffsets,
      goToProgress,
      laneCount,
      lastIndex,
      scrollDistance,
    ],
  );

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setProgress(value);
    if (animating.current || scrollDistance <= 0 || cardOffsets.length !== laneCount) return;

    // Pick the nearest lane to the current translate progress.
    let bestIndex = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    for (let i = 0; i < laneCount; i++) {
      const offset = cardOffsets[i] ?? 0;
      const laneProgress = Math.min(1, Math.max(0, offset / scrollDistance));
      const dist = Math.abs(laneProgress - value);
      if (dist < bestDist) {
        bestDist = dist;
        bestIndex = i;
      }
    }
    targetIndex.current = bestIndex;
  });

  const activeIndex = (() => {
    if (scrollDistance <= 0 || cardOffsets.length !== laneCount) return 0;
    if (laneCount <= 1) return 0;

    let bestIndex = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    for (let i = 0; i < laneCount; i++) {
      const offset = cardOffsets[i] ?? 0;
      const laneProgress = Math.min(1, Math.max(0, offset / scrollDistance));
      const dist = Math.abs(laneProgress - progress);
      if (dist < bestDist) {
        bestDist = dist;
        bestIndex = i;
      }
    }
    return bestIndex;
  })();

  const canPrev = activeIndex > 0;
  const canNext = activeIndex < lastIndex;
  const prevTitle = capabilities[activeIndex - 1]?.title;
  const nextTitle = capabilities[activeIndex + 1]?.title;

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="relative bg-ink md:h-[300vh]"
    >
      <div className="noise-overlay" />

      {/* Mobile: intentional vertical stack */}
      <div className="relative py-16 md:hidden">
        <div className="mx-auto max-w-page px-5">
          <div className="mb-10 flex flex-col gap-6">
            <div className="max-w-3xl">
              <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
                AI capabilities
              </p>
              <TextReveal
                text="Capability lanes from mandate to production."
                className="font-display mt-3 text-[2rem] leading-[1.15] text-white"
              />
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/45">
              Six capability lanes—each engineered for governed production
              delivery.
            </p>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1.5 text-sm text-cyan transition-colors hover:text-white"
            >
              Explore solution lanes
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="relative mt-2 space-y-4 px-5 pb-4">
          {capabilities.map((item, index) => (
            <CapabilityCard
              key={item.id}
              item={item}
              index={index}
              contentAtBottom
              className="group relative flex min-h-[280px] w-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-soft p-6"
            />
          ))}
        </div>
      </div>

      {/* Desktop: sticky pin so cards stay visible while scrolling horizontally */}
      <div className="relative hidden h-svh md:sticky md:top-0 md:block">
        <div className="flex h-full flex-col justify-start gap-8 pt-28 pb-8 lg:gap-10 lg:pt-32 lg:pb-10">
          <div className="relative mx-auto w-full max-w-page shrink-0 px-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
              <div className="max-w-3xl">
                <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
                  AI capabilities
                </p>
                <TextReveal
                  text="Capability lanes from mandate to production."
                  className="font-display mt-3 text-[2rem] leading-[1.15] text-white md:text-[2.75rem] lg:text-6xl"
                />
              </div>
              <div className="flex flex-col gap-5 lg:items-end">
                <p className="max-w-sm text-sm leading-relaxed text-white/45 md:text-base lg:text-right">
                  Six capability lanes—each engineered for governed production
                  delivery.
                </p>
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-1.5 text-sm text-cyan transition-colors hover:text-white lg:justify-end"
                >
                  Explore solution lanes
                  <ArrowUpRight size={14} />
                </Link>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label={
                      prevTitle ? `Previous: ${prevTitle}` : "Previous capability"
                    }
                    disabled={!canPrev}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (canPrev) goToCard(activeIndex - 1);
                    }}
                    className={cn(
                      "inline-flex h-11 items-center gap-2 rounded-full border px-4 text-sm transition-colors",
                      canPrev
                        ? "border-white/20 text-white/80 hover:border-cyan/50 hover:text-white"
                        : "cursor-not-allowed border-white/10 text-white/25",
                    )}
                  >
                    <ArrowLeft size={16} />
                    Prev
                  </button>
                  <button
                    type="button"
                    aria-label={
                      nextTitle ? `Next: ${nextTitle}` : "Next capability"
                    }
                    disabled={!canNext}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (canNext) goToCard(activeIndex + 1);
                    }}
                    className={cn(
                      "inline-flex h-11 items-center gap-2 rounded-full border px-4 text-sm transition-colors",
                      canNext
                        ? "border-white/20 text-white/80 hover:border-cyan/50 hover:text-white"
                        : "cursor-not-allowed border-white/10 text-white/25",
                    )}
                  >
                    Next
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full shrink-0 overflow-hidden">
            <motion.div
              ref={trackRef}
              style={isDesktop && scrollDistance > 0 ? { x } : undefined}
              className="flex w-max gap-7 px-8 will-change-transform"
            >
              {capabilities.map((item, index) => (
                <CapabilityCard key={item.id} item={item} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
