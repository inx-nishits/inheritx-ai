"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
      {initials || "—"}
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
                  alt=""
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
  title = "Trusted by leaders who ship production AI.",
  description = "What enterprise leaders say about shipping production AI with InheritX.",
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

  const trackRef = useRef<HTMLDivElement>(null);
  const looping = useRef(false);
  const [paused, setPaused] = useState(false);

  const setWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track || total === 0) return 0;
    return trackMetrics(track).step * total;
  }, [total]);

  const normalizeLoop = useCallback(() => {
    const track = trackRef.current;
    if (!track || looping.current || total < 2) return;
    const width = setWidth();
    if (width <= 0) return;
    if (track.scrollLeft < width * 0.5) {
      looping.current = true;
      track.scrollLeft += width;
      looping.current = false;
    } else if (track.scrollLeft >= width * 1.5) {
      looping.current = true;
      track.scrollLeft -= width;
      looping.current = false;
    }
  }, [setWidth, total]);

  const scrollByCard = useCallback((direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const { step } = trackMetrics(track);
    if (step <= 0) return;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || total === 0) return;

    const placeInLoop = () => {
      const width = setWidth();
      if (width <= 0) return;
      looping.current = true;
      if (track.scrollLeft === 0) {
        track.scrollLeft = width;
      } else {
        const offset = track.scrollLeft % width;
        track.scrollLeft = width + offset;
      }
      looping.current = false;
    };

    placeInLoop();
    const raf = requestAnimationFrame(placeInLoop);

    let frame = 0;
    const onScroll = () => {
      if (looping.current) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(normalizeLoop);
    };
    const onScrollEnd = () => normalizeLoop();

    track.addEventListener("scroll", onScroll, { passive: true });
    track.addEventListener("scrollend", onScrollEnd);
    window.addEventListener("resize", placeInLoop);

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
      track.removeEventListener("scrollend", onScrollEnd);
      window.removeEventListener("resize", placeInLoop);
    };
  }, [normalizeLoop, setWidth, total]);

  useEffect(() => {
    if (paused || total < 2) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const timer = window.setInterval(() => scrollByCard(1), AUTO_MS);
    return () => window.clearInterval(timer);
  }, [paused, scrollByCard, total]);

  if (total === 0) return null;

  return (
    <section
      id={id}
      aria-roledescription="carousel"
      aria-label="Enterprise testimonials"
      className={cn(
        "relative overflow-hidden border-t border-white/[0.06] bg-ink py-16 md:py-20",
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
      <div className="noise-overlay opacity-40" />
      <div className="pointer-events-none absolute inset-0 editorial-grid opacity-25" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[70%] -translate-x-1/2 rounded-full bg-cyan/[0.07] blur-[120px]" />

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
                className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-white/80 backdrop-blur-sm transition-colors hover:border-cyan/50 hover:text-white"
              >
                <ArrowLeft size={17} />
              </button>
              <button
                type="button"
                aria-label="Next testimonials"
                onClick={() => scrollByCard(1)}
                className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-white/80 backdrop-blur-sm transition-colors hover:border-cyan/50 hover:text-white"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          ) : null}
        </div>
      </div>

      <div className="relative mt-8 w-full md:mt-12">
        <div
          ref={trackRef}
          className="testimonial-track flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] touch-pan-x sm:gap-4 md:gap-5 lg:gap-6 [&::-webkit-scrollbar]:hidden"
          data-lenis-prevent-horizontal
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => {
            window.setTimeout(() => setPaused(false), 2500);
          }}
        >
          {looped.map(({ item, copy }, index) => (
            <div
              key={`${item.id}-${copy}-${index}`}
              data-testimonial-card
              className="w-[min(85vw,22rem)] shrink-0 snap-start sm:w-[min(62vw,24rem)] md:w-[min(48vw,26rem)] lg:w-[min(36vw,28rem)]"
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
