"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { caseStudiesPage } from "@/data/caseStudies";

const AUTO_MS = 7000;
const featuredStudies = caseStudiesPage.slice(0, 5);

const ease = [0.22, 1, 0.36, 1] as const;

export function FeaturedCaseStudy() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const total = featuredStudies.length;
  const study = featuredStudies[active];
  const primary = study.results[0];
  const secondary = study.results[1];

  const goTo = useCallback(
    (index: number, dir?: number) => {
      const next = ((index % total) + total) % total;
      setDirection(dir ?? (next > active || (active === total - 1 && next === 0) ? 1 : -1));
      setActive(next);
    },
    [active, total],
  );

  const goNext = useCallback(() => goTo(active + 1, 1), [active, goTo]);
  const goPrev = useCallback(() => goTo(active - 1, -1), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => goTo(active + 1, 1), AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, active, goTo]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  return (
    <section
      id="cases"
      aria-roledescription="carousel"
      aria-label="Case studies"
      className="relative overflow-hidden border-t border-white/[0.06] bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
      }}
    >
      {/* Full-bleed stage */}
      <div className="relative min-h-[min(92vh,820px)] w-full">
        <AnimatePresence mode="sync" custom={direction}>
          <motion.div
            key={study.id}
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease }}
            className="absolute inset-0"
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 7.2, ease: "linear" }}
            >
              <Image
                src={study.image}
                alt=""
                fill
                unoptimized
                priority={active === 0}
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-ink/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/30" />
          </motion.div>
        </AnimatePresence>

        <div className="noise-overlay opacity-40" />

        <div className="relative z-10 mx-auto flex min-h-[min(92vh,820px)] max-w-[1400px] flex-col px-5 py-10 md:px-8 md:py-14 lg:py-16">
          {/* Top bar */}
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-[11px] tracking-[0.28em] text-cyan uppercase">
                Case studies
              </p>
              <p className="mt-2 max-w-md text-sm text-white/45 md:text-base">
                Production outcomes—not pilot theater.
              </p>
            </div>
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
            >
              View all case studies
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Main story content */}
          <div className="mt-auto grid max-w-4xl gap-8 pt-16 pb-4 md:gap-10 md:pt-20">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={study.id + "-body"}
                custom={direction}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.55, ease }}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-cyan uppercase">
                    {String(active + 1).padStart(2, "0")} — {study.category}
                  </span>
                  <span className="text-white/25">/</span>
                  <span className="text-sm text-white/45">{study.name}</span>
                </div>

                <p className="font-display mt-5 text-[clamp(3.5rem,12vw,8.5rem)] leading-[0.9] tracking-[-0.04em] text-cyan">
                  {primary.value}
                </p>
                <p className="mt-3 text-lg text-white/70 md:text-xl">
                  {primary.label}
                  {secondary ? (
                    <span className="text-white/35">
                      {" "}
                      · {secondary.value} {secondary.label.toLowerCase()}
                    </span>
                  ) : null}
                </p>

                <h3 className="font-display mt-8 max-w-3xl text-[1.85rem] leading-[1.15] text-white md:mt-10 md:text-5xl lg:text-[3.25rem]">
                  {study.tagline}
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
                  {study.summary}
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/case-studies/${study.id}`}
                    className="group inline-flex min-h-12 items-center gap-2.5 rounded-full bg-cyan px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_32px_rgba(0,190,212,0.25)] transition-colors hover:bg-white hover:text-ink"
                  >
                    Read full case study
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      aria-label="Previous case study"
                      onClick={goPrev}
                      className="inline-flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-white/80 backdrop-blur-sm transition-colors hover:border-cyan/50 hover:text-white"
                    >
                      <ArrowLeft size={18} />
                    </button>
                    <button
                      type="button"
                      aria-label="Next case study"
                      onClick={goNext}
                      className="inline-flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-white/80 backdrop-blur-sm transition-colors hover:border-cyan/50 hover:text-white"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
