"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { caseStudiesPage, featuredCaseStudyIds } from "@/data/caseStudies";
import { CtaProof } from "@/components/cta/CtaProof";
import { CtaText } from "@/components/cta/CtaText";
import { cn } from "@/lib/cn";

const AUTO_MS = 7000;
const CASE_STUDY_BG = "/images/actual/actual-casestudy.jpg";
const featuredStudies = featuredCaseStudyIds
  .map((id) => caseStudiesPage.find((study) => study.id === id))
  .filter((study): study is NonNullable<typeof study> => Boolean(study));

export function FeaturedCaseStudy() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const total = featuredStudies.length;
  const study = featuredStudies[active];

  const goTo = useCallback(
    (index: number) => {
      const next = ((index % total) + total) % total;
      setActive(next);
    },
    [total],
  );

  const goNext = useCallback(() => goTo(active + 1), [active, goTo]);
  const goPrev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => goTo(active + 1), AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, active, goTo]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as Node | null;
      if (!sectionRef.current?.contains(target)) return;
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  return (
    <section
      ref={sectionRef}
      id="cases"
      aria-roledescription="carousel"
      aria-label="Case Studies"
      className="relative overflow-hidden border-t border-white/[0.06] bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
      }}
    >
      {/* Compact stage — full viewport height on md+; standard section spacing on mobile */}
      <div className="relative w-full md:min-h-[min(62vh,520px)]">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 7.2, ease: "linear" }}
        >
          <Image
            src={CASE_STUDY_BG}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/30" />

        <div className="noise-overlay opacity-40" />

        <div className="relative z-10 mx-auto flex max-w-page flex-col px-5 py-16 md:min-h-[min(62vh,520px)] md:px-8 md:py-9 lg:py-10">
          {/* Top bar — stack on mobile/tablet so copy keeps full width */}
          <div className="flex flex-col items-start gap-4 lg:flex-row lg:justify-between lg:gap-6">
            <div className="w-full min-w-0 lg:max-w-md">
              <p className="text-[11px] tracking-[0.28em] text-cyan uppercase">
                Case Studies
              </p>
              <p className="mt-1.5 text-sm text-white/45">
                Measured production outcomes with published methodology. Named
                references available under NDA for qualified opportunities.
              </p>
            </div>
            <CtaText href="/case-studies" location="home" className="shrink-0">
              View case studies
            </CtaText>
          </div>

          {/* Main story — all slides stacked so height stays on the tallest copy. */}
          <div className="mt-auto max-w-4xl pt-8 pb-1 md:pt-10">
            <div className="grid">
              {featuredStudies.map((item, index) => {
                const itemPrimary = item.results[0];
                const itemSecondary = item.results[1];
                const isActive = index === active;

                return (
                  <div
                    key={item.id}
                    className={cn(
                      "col-start-1 row-start-1 transition-opacity duration-500 ease-out",
                      isActive
                        ? "relative z-10 opacity-100"
                        : "pointer-events-none opacity-0",
                    )}
                    aria-hidden={!isActive}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-[11px] tracking-[0.18em] text-cyan uppercase">
                        {String(index + 1).padStart(2, "0")} — {item.category}
                      </span>
                      <span className="text-white/25">/</span>
                      <span className="text-sm text-white/45">{item.name}</span>
                    </div>

                    <p className="font-display mt-3 text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.9] tracking-[-0.04em] text-cyan">
                      {itemPrimary.value}
                    </p>
                    <p className="mt-2 text-base text-white/70 md:text-lg">
                      {itemPrimary.label}
                      {itemSecondary ? (
                        <span className="text-white/35">
                          {" "}
                          · {itemSecondary.value}{" "}
                          {itemSecondary.label.toLowerCase()}
                        </span>
                      ) : null}
                    </p>

                    <h3 className="font-display mt-5 max-w-3xl text-[1.55rem] leading-[1.15] text-white md:mt-6 md:text-4xl lg:text-[2.75rem]">
                      {item.tagline}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
                      {item.summary}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-7">
              <CtaProof
                href={`/case-studies/${study.id}`}
                location="home"
                pattern="proof-band"
              >
                Read full case study
              </CtaProof>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous case study"
                  onClick={goPrev}
                  className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-white/80 backdrop-blur-sm transition-colors hover:border-cyan/50 hover:text-white"
                >
                  <ArrowLeft size={17} />
                </button>
                <button
                  type="button"
                  aria-label="Next case study"
                  onClick={goNext}
                  className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-white/80 backdrop-blur-sm transition-colors hover:border-cyan/50 hover:text-white"
                >
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
