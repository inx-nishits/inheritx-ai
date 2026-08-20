"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent,
} from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { Reveal, TextReveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import {
  getPublishedTestimonials,
  type Testimonial,
} from "@/data/testimonials";

export type TestimonialsSectionProps = {
  items?: Testimonial[];
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  id?: string;
};

const AUTO_MS = 5500;
const LOOP_COPIES = 3;
const SLIDE_MS = 550;

function trackMetrics(track: HTMLDivElement) {
  const styles = window.getComputedStyle(track);
  const gap = Number.parseFloat(styles.columnGap || styles.gap || "16") || 16;
  const card = track.querySelector<HTMLElement>("[data-testimonial-card]");
  const cardWidth = card?.offsetWidth ?? 0;
  const step = cardWidth + gap;
  return { gap, cardWidth, step };
}

function InitialsAvatar({ name }: { name: string }) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <div
      className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] font-mono text-[11px] tracking-wide text-cyan"
      aria-hidden
    >
      {initials || ", "}
    </div>
  );
}

function TestimonialCard({
  item,
  index,
}: {
  item: Testimonial;
  index: number;
}) {
  return (
    <article className="testimonial-card-frame group relative h-full overflow-hidden rounded-[1.5rem] p-[1.5px] sm:rounded-[1.75rem] md:rounded-[2rem]">
      <span aria-hidden className="testimonial-card-border" />
      <div className="relative z-10 flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-[calc(1.5rem-1.5px)] bg-gradient-to-b from-ink-elevated to-ink-soft p-5 sm:min-h-[300px] sm:rounded-[calc(1.75rem-1.5px)] sm:p-6 md:min-h-[340px] md:rounded-[calc(2rem-1.5px)] md:p-7 lg:p-8">
        <div className="relative">
          <div className="flex items-start justify-between gap-3">
            <span
              aria-hidden
              className="font-display text-3xl leading-none text-cyan/40 sm:text-4xl md:text-5xl"
            >
              “
            </span>
            <span className="font-mono text-[10px] tracking-[0.18em] text-white/25 uppercase">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <blockquote className="font-display mt-2 text-[1.05rem] leading-snug text-white sm:mt-3 sm:text-lg md:text-xl md:leading-[1.35]">
            {item.quote}
          </blockquote>
        </div>

        <div className="relative mt-6 border-t border-white/[0.08] pt-4 sm:mt-8 sm:pt-5">
          <div className="flex items-center gap-3 sm:gap-3.5">
            {item.avatarSrc ? (
              <div className="relative size-11 shrink-0 overflow-hidden rounded-full border border-white/15 ring-2 ring-cyan/15 sm:size-12">
                <Image
                  src={item.avatarSrc}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
            ) : (
              <InitialsAvatar name={item.name} />
            )}

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-white">{item.name}</p>
              {(item.title || item.company) && (
                <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-white/45 sm:text-[13px]">
                  {[item.title, item.company].filter(Boolean).join(" · ")}
                </p>
              )}
            </div>
          </div>

          {item.caseStudyHref ? (
            <Link
              href={item.caseStudyHref}
              className="group/link mt-3 inline-flex min-h-10 items-center gap-1.5 text-sm font-medium text-cyan transition-colors hover:text-white sm:mt-4"
            >
              {item.caseStudyLabel ?? "Related case study"}
              <ArrowUpRight
                size={14}
                className="shrink-0 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

/**
 * Full-bleed testimonials slider with an infinite loop.
 * Renders nothing when no published testimonials exist.
 */
export function TestimonialsSection({
  items,
  eyebrow = "Enterprise voices",
  title = "What production AI buyers tell us.",
  description = "Anonymized enterprise voices until named references are approved in writing. Named proof lives in case studies and NDA diligence.",
  className,
  id = "testimonials",
}: TestimonialsSectionProps) {
  const published = getPublishedTestimonials(items);
  const total = published.length;
  const looped = useMemo(
    () =>
      Array.from({ length: LOOP_COPIES }, (_, copy) =>
        published.map((item) => ({ item, copy })),
      ).flat(),
    [published],
  );

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartYRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const pointerActiveRef = useRef(false);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);

  const setWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track || total === 0) return 0;
    return trackMetrics(track).step * total;
  }, [total]);

  const prefersReducedMotion = useCallback(() => {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const applyOffset = useCallback(
    (x: number, animate: boolean) => {
      const track = trackRef.current;
      if (!track) return;
      offsetRef.current = x;
      const useMotion = animate && !draggingRef.current && !prefersReducedMotion();
      track.style.transition = useMotion
        ? `transform ${SLIDE_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`
        : "none";
      track.style.transform = `translate3d(${-x}px, 0, 0)`;
    },
    [prefersReducedMotion],
  );

  const normalizeLoop = useCallback(
    (animate = false) => {
      if (total < 2) return;
      const width = setWidth();
      if (width <= 0) return;
      let x = offsetRef.current;
      // Keep the viewport inside the middle copy so neighbors always exist.
      while (x < width) x += width;
      while (x >= width * 2) x -= width;
      if (x !== offsetRef.current) {
        applyOffset(x, animate);
      }
    },
    [applyOffset, setWidth, total],
  );

  const scrollByCard = useCallback(
    (direction: -1 | 1) => {
      const track = trackRef.current;
      if (!track) return;
      const { step } = trackMetrics(track);
      if (step <= 0) return;
      applyOffset(offsetRef.current + direction * step, true);
      window.setTimeout(() => normalizeLoop(false), SLIDE_MS + 40);
    },
    [applyOffset, normalizeLoop],
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "15% 0px", threshold: 0.08 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || total === 0) return;

    const placeInLoop = () => {
      const width = setWidth();
      if (width <= 0) return;
      const offset = offsetRef.current > 0 ? offsetRef.current % width : 0;
      applyOffset(width + offset, false);
    };

    placeInLoop();
    const raf = requestAnimationFrame(placeInLoop);

    const onTransitionEnd = (event: TransitionEvent) => {
      if (event.propertyName !== "transform") return;
      normalizeLoop(false);
    };

    track.addEventListener("transitionend", onTransitionEnd);
    window.addEventListener("resize", placeInLoop);

    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener("transitionend", onTransitionEnd);
      window.removeEventListener("resize", placeInLoop);
    };
  }, [applyOffset, normalizeLoop, setWidth, total]);

  useEffect(() => {
    if (!inView || paused || total < 2) return;
    if (prefersReducedMotion()) return;

    const timer = window.setInterval(() => scrollByCard(1), AUTO_MS);
    return () => window.clearInterval(timer);
  }, [inView, paused, prefersReducedMotion, scrollByCard, total]);

  const onPointerDown = useCallback((event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || total < 2) return;
    pointerActiveRef.current = true;
    draggingRef.current = false;
    dragStartXRef.current = event.clientX;
    dragStartYRef.current = event.clientY;
    dragStartOffsetRef.current = offsetRef.current;
  }, [total]);

  const onPointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (!pointerActiveRef.current || total < 2) return;
      const dx = event.clientX - dragStartXRef.current;
      const dy = event.clientY - dragStartYRef.current;
      if (!draggingRef.current) {
        if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return;
        if (Math.abs(dy) >= Math.abs(dx)) {
          pointerActiveRef.current = false;
          return;
        }
        draggingRef.current = true;
        setPaused(true);
        event.currentTarget.setPointerCapture(event.pointerId);
      }
      applyOffset(dragStartOffsetRef.current - dx, false);
    },
    [applyOffset, total],
  );

  const onPointerUp = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      pointerActiveRef.current = false;
      if (!draggingRef.current) return;
      draggingRef.current = false;
      event.currentTarget.releasePointerCapture(event.pointerId);
      const track = trackRef.current;
      if (!track) return;
      const { step } = trackMetrics(track);
      if (step > 0) {
        const snapped = Math.round(offsetRef.current / step) * step;
        applyOffset(snapped, true);
      }
      window.setTimeout(() => setPaused(false), 1800);
    },
    [applyOffset],
  );

  if (total === 0) return null;

  return (
    <section
      ref={sectionRef}
      id={id}
      aria-roledescription="carousel"
      aria-label="Enterprise testimonials"
      className={cn(
        "relative overflow-hidden border-t border-white/[0.06] bg-ink py-16 md:py-20 [contain:layout_paint]",
        className,
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      <div className="pointer-events-none absolute inset-0 editorial-grid opacity-20" />
      <div className="pointer-events-none absolute -top-16 left-1/2 h-[220px] w-[40%] -translate-x-1/2 rounded-full bg-cyan/[0.06] blur-[48px]" />

      <div className="relative mx-auto max-w-page px-5 md:px-8">
        <div className="flex flex-col gap-5 md:gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="w-full min-w-0 max-w-2xl">
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              {eyebrow}
            </p>
            <TextReveal
              text={title}
              className="font-display mt-3 text-[1.75rem] leading-[1.15] text-white sm:text-[2rem] md:text-5xl lg:text-6xl"
            />
            {description ? (
              <Reveal delay={0.1}>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/50 sm:mt-4 md:text-base">
                  {description}
                </p>
              </Reveal>
            ) : null}
          </div>

          {total > 1 ? (
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                aria-label="Previous testimonials"
                onClick={() => scrollByCard(-1)}
                className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-white/80 transition-colors hover:border-cyan/50 hover:text-white"
              >
                <ArrowLeft size={17} />
              </button>
              <button
                type="button"
                aria-label="Next testimonials"
                onClick={() => scrollByCard(1)}
                className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-white/80 transition-colors hover:border-cyan/50 hover:text-white"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          ) : null}
        </div>
      </div>

      <div
        className="relative mt-8 w-full touch-pan-y overflow-hidden md:mt-12"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          ref={trackRef}
          className="testimonial-track flex w-max gap-3 [backface-visibility:hidden] sm:gap-4 md:gap-5 lg:gap-6"
        >
          {looped.map(({ item, copy }, index) => (
            <div
              key={`${item.id}-${copy}-${index}`}
              data-testimonial-card
              className="w-[min(85vw,22rem)] shrink-0 sm:w-[min(62vw,24rem)] md:w-[min(48vw,26rem)] lg:w-[min(36vw,28rem)]"
            >
              <TestimonialCard item={item} index={index % total} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Testimonials = TestimonialsSection;
