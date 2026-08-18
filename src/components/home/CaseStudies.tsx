"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { caseStudies } from "@/data/content";
import { cn } from "@/lib/cn";

export function CaseStudies() {
  const [active, setActive] = useState(0);
  const study = caseStudies[active];
  const total = caseStudies.length;

  const goTo = useCallback(
    (index: number) => setActive((index + total) % total),
    [total],
  );

  return (
    <section
      id="cases"
      className="relative overflow-hidden bg-ink py-16 md:py-20"
    >
      <div className="noise-overlay" />

      <div className="relative mx-auto max-w-page px-5 md:px-8">
        {/* Compact first-fold block: title + tabs always together */}
        <div className="sticky top-16 z-20 -mx-5 border-b border-white/[0.06] bg-ink/92 px-5 pt-3 pb-3 backdrop-blur-xl md:static md:top-auto md:mx-0 md:border-0 md:bg-transparent md:px-0 md:pt-0 md:pb-0 md:backdrop-blur-none">
          <div className="flex items-end justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
                Enterprise outcomes
              </p>
              <h2 className="font-display mt-1.5 text-[1.75rem] leading-[1.12] text-white sm:mt-2 sm:text-4xl md:text-5xl">
                AI that moves cost, speed, and risk.
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="mb-1 hidden shrink-0 items-center gap-1.5 text-sm text-cyan transition-colors hover:text-white lg:inline-flex"
            >
              All case studies
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div
            role="tablist"
            aria-label="Case study sectors"
            className="mt-3 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-4 md:flex-wrap md:snap-none md:overflow-visible [&::-webkit-scrollbar]:hidden"
          >
            {caseStudies.map((item, index) => (
              <button
                key={item.sector}
                type="button"
                role="tab"
                aria-selected={active === index}
                onClick={() => goTo(index)}
                className={cn(
                  "inline-flex min-h-11 shrink-0 snap-start items-center rounded-full border px-3.5 py-2.5 text-left transition-all duration-300 sm:px-4",
                  active === index
                    ? "border-cyan/50 bg-cyan/15 text-white"
                    : "border-white/10 bg-white/[0.02] text-white/50 hover:border-white/25 hover:text-white/80",
                )}
              >
                <span className="font-mono text-[10px] tracking-wider text-cyan">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="ml-2 text-sm font-medium">{item.sector}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-soft sm:mt-5 md:mt-6 md:rounded-[2rem]">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[16/10] sm:aspect-[16/11] md:aspect-auto md:min-h-[380px] lg:min-h-[440px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={study.sector}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={study.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10 md:bg-gradient-to-r md:from-ink/30 md:via-ink/50 md:to-ink/70" />
              <div className="absolute right-4 bottom-4 left-4 sm:right-6 sm:bottom-6 sm:left-6">
                <div className="max-w-xs rounded-2xl border border-white/15 bg-ink/75 px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md sm:px-5 sm:py-4">
                  <p className="font-display text-4xl leading-none text-cyan drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:text-5xl md:text-6xl">
                    {study.result}
                  </p>
                  <p className="mt-2 text-sm font-medium text-white sm:text-[15px]">
                    {study.resultLabel}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between p-5 sm:p-7 md:p-9 lg:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={study.sector + "-copy"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-mono text-sm text-cyan">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(total).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-3 text-xl leading-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55 md:mt-4">
                    {study.detail}
                  </p>

                  <div className="mt-5 space-y-3 border-t border-white/10 pt-5 md:mt-6 md:space-y-4">
                    <div>
                      <p className="text-[11px] tracking-[0.16em] text-white/35 uppercase">
                        Challenge
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-white/70">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] tracking-[0.16em] text-white/35 uppercase">
                        AI Solution
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-white/70">
                        {study.solution}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => goTo(active - 1)}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-white/70 transition-colors hover:border-cyan/40 hover:text-white sm:flex-initial"
                  >
                    <ArrowLeft size={16} className="shrink-0" />
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(active + 1)}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-white/70 transition-colors hover:border-cyan/40 hover:text-white sm:flex-initial"
                  >
                    Next
                    <ArrowRight size={16} className="shrink-0" />
                  </button>
                </div>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 text-sm text-cyan lg:hidden"
                >
                  All case studies
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
