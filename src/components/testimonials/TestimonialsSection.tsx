"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
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
    <article className="group relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-ink-elevated to-ink-soft p-5 transition-[border-color,transform] duration-300 sm:min-h-[300px] sm:rounded-[1.75rem] sm:p-6 md:min-h-[340px] md:rounded-[2rem] md:p-7 lg:p-8 motion-safe:md:hover:-translate-y-1 motion-safe:md:hover:border-cyan/30">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-500 md:group-hover:opacity-100"
      />

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
    </article>
  );
}

/**
 * Premium enterprise testimonials slider — mobile-first snap carousel.
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
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [paused, setPaused] = useState(false);

  const syncScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = Math.max(0, track.scrollWidth - track.clientWidth);
    setCanPrev(track.scrollLeft > 8);
    setCanNext(track.scrollLeft < max - 8);

    const cards = Array.from(
      track.querySelectorAll<HTMLElement>("[data-testimonial-card]"),
    );
    if (cards.length === 0) return;

    const trackRect = track.getBoundingClientRect();
    const focusX = trackRect.left + track.clientWidth * 0.35;
    let nearest = 0;
    let best = Number.POSITIVE_INFINITY;
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const mid = rect.left + rect.width / 2;
      const dist = Math.abs(mid - focusX);
      if (dist < best) {
        best = dist;
        nearest = index;
      }
    });
    setActive(nearest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || total === 0) return;
    syncScrollState();
    track.addEventListener("scroll", syncScrollState, { passive: true });
    window.addEventListener("resize", syncScrollState);
    return () => {
      track.removeEventListener("scroll", syncScrollState);
      window.removeEventListener("resize", syncScrollState);
    };
  }, [syncScrollState, total]);

  const scrollByCard = useCallback((direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-testimonial-card]");
    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "16") || 16;
    const amount = card ? card.offsetWidth + gap : track.clientWidth * 0.88;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>("[data-testimonial-card]");
    const card = cards[index];
    if (!card) return;
    const trackRect = track.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const nextLeft = track.scrollLeft + (cardRect.left - trackRect.left);
    track.scrollTo({ left: nextLeft, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (paused || total < 2) return;
    const timer = window.setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      const max = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= max - 12) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollByCard(1);
      }
    }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [paused, total, scrollByCard]);

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

      <div className="relative mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-5 px-5 md:gap-6 md:px-8 lg:flex-row lg:items-end lg:justify-between">
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
            <div className="hidden shrink-0 items-center gap-2 sm:flex">
              <button
                type="button"
                aria-label="Previous testimonials"
                disabled={!canPrev}
                onClick={() => scrollByCard(-1)}
                className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-white/80 backdrop-blur-sm transition-colors hover:border-cyan/50 hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ArrowLeft size={17} />
              </button>
              <button
                type="button"
                aria-label="Next testimonials"
                disabled={!canNext}
                onClick={() => scrollByCard(1)}
                className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-white/80 backdrop-blur-sm transition-colors hover:border-cyan/50 hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          ) : null}
        </div>

        <div className="relative mt-8 md:mt-12">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-px-5 px-5 pb-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] touch-pan-x sm:gap-4 sm:scroll-px-8 md:gap-5 md:px-8 lg:gap-6 [&::-webkit-scrollbar]:hidden"
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => {
              window.setTimeout(() => setPaused(false), 2500);
            }}
          >
            {published.map((item, index) => (
              <div
                key={item.id}
                data-testimonial-card
                className="w-[calc(100vw-2.75rem)] max-w-[340px] shrink-0 snap-center sm:w-[min(70vw,380px)] sm:max-w-none sm:snap-start md:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3rem)/3)]"
              >
                <TestimonialCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>

        {total > 1 ? (
          <div className="mt-5 flex items-center justify-between gap-3 px-5 sm:mt-8 sm:justify-center md:px-8">
            <div className="flex items-center gap-2 sm:hidden">
              <button
                type="button"
                aria-label="Previous testimonials"
                disabled={!canPrev}
                onClick={() => scrollByCard(-1)}
                className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-white/80 disabled:opacity-35"
              >
                <ArrowLeft size={17} />
              </button>
              <button
                type="button"
                aria-label="Next testimonials"
                disabled={!canNext}
                onClick={() => scrollByCard(1)}
                className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-white/80 disabled:opacity-35"
              >
                <ArrowRight size={17} />
              </button>
            </div>

            <div
              className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2"
              role="tablist"
              aria-label="Select testimonial"
            >
              {published.map((entry, index) => (
                <button
                  key={entry.id}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-label={`Show testimonial ${index + 1}`}
                  onClick={() => scrollToIndex(index)}
                  className="inline-flex min-h-11 min-w-11 items-center justify-center sm:min-h-0 sm:min-w-0"
                >
                  <span
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      index === active
                        ? "w-7 bg-cyan sm:w-8"
                        : "w-1.5 bg-white/25",
                    )}
                  />
                </button>
              ))}
            </div>

            <p className="font-mono text-[11px] tracking-wide text-white/35 sm:hidden">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export const Testimonials = TestimonialsSection;
