"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { processSteps } from "@/data/content";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-ink py-16 md:py-20"
    >
      <div className="noise-overlay" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-cyan/[0.07] blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between md:pb-12">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              How we deliver Enterprise AI
            </p>
            <h2 className="font-display mt-3 text-[2rem] leading-[1.15] text-white sm:text-4xl md:text-5xl lg:text-[3.4rem]">
              From mandate
              <span className="mt-1 block font-semibold text-cyan">
                to production AI.
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/45 md:text-right">
            Four stages for enterprise AI transformation. Typical path: weeks to
            a governed production system. You own everything we build.
          </p>
        </div>

        {/* All stages visible — equal weight, no hidden content */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {processSteps.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.07}>
                <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-gradient-to-b from-ink-elevated to-ink-soft p-6 md:min-h-[380px] md:p-7"
              >
                {/* Watermark number */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-4 font-display text-[7.5rem] leading-none text-white/[0.04] transition-colors duration-500 group-hover:text-cyan/[0.08] md:text-[8.5rem]"
                >
                  {item.step}
                </span>

                <div className="relative flex items-center justify-between">
                  <span className="inline-flex h-9 items-center rounded-full border border-cyan/25 bg-cyan-soft px-3 font-mono text-[11px] text-cyan">
                    Stage {item.step}
                  </span>
                  <span className="text-[11px] tracking-wide text-white/35">
                    {item.duration}
                  </span>
                </div>

                <div className="relative mt-auto pt-10 md:pt-16">
                  <h3 className="font-display text-3xl leading-tight text-white md:text-[2rem]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/50">
                    {item.copy}
                  </p>

                  <div className="mt-6 space-y-2 border-t border-white/[0.08] pt-5">
                    {item.outcomes.map((outcome) => (
                      <p
                        key={outcome}
                        className="flex items-center gap-2 text-[13px] text-white/65"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-cyan" />
                        {outcome}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Hover accent line */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan via-cyan/40 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </motion.article>
            </Reveal>
          ))}
        </div>

        {/* Closing bar */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center md:mt-12">
            <div>
              <p className="text-sm text-white/70">
                Ready to start your AI transformation?
              </p>
              <p className="mt-1 text-xs text-white/35">
                Most programs begin with a 30-minute AI strategy call.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton
                href="/contact"
                className="bg-cyan px-6 py-3 text-sm font-medium text-white hover:bg-white hover:text-ink"
              >
                Book an AI Strategy Call
              </MagneticButton>
              <a
                href="/case-studies"
                className="group inline-flex items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-white"
              >
                See enterprise outcomes
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
