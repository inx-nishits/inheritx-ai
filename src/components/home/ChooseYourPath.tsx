"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Brain, CircuitBoard, LineChart } from "lucide-react";

import { audiencePaths } from "@/data/content";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal, TextReveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const icons = {
  systems: CircuitBoard,
  outcomes: LineChart,
  explore: Brain,
} as const;

export function ChooseYourPath() {
  return (
    <section
      id="path"
      className="relative overflow-hidden border-t border-white/[0.06] bg-ink py-16 md:py-20"
    >
      <div className="noise-overlay" />
      <div className="pointer-events-none absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-12 w-full md:mb-14">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              {audiencePaths.eyebrow}
            </p>
          </Reveal>
          <TextReveal
            text={audiencePaths.title}
            className="font-display mt-3 text-[2rem] leading-[1.15] text-white md:text-5xl lg:text-6xl"
          />
          <Reveal delay={0.12}>
            <p className="mt-4 w-full text-base leading-relaxed text-white/50 md:text-lg">
              {audiencePaths.description}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {audiencePaths.paths.map((path, index) => {
            const Icon = icons[path.icon];

            return (
              <Reveal key={path.id} delay={index * 0.08} className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full"
                >
                  <Link
                    href={path.href}
                    className={cn(
                      "group relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[1.5rem]",
                      "border border-white/10 bg-gradient-to-b from-ink-elevated to-ink-soft",
                      "transition-[border-color,box-shadow] duration-500",
                      "hover:border-cyan/30 hover:shadow-[0_28px_80px_rgba(0,0,0,0.35)]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50",
                    )}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,190,212,0.12),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute inset-0 editorial-grid opacity-0 transition-opacity duration-500 group-hover:opacity-25" />

                    <div className="relative flex w-full flex-1 flex-col p-5 md:p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div className="inline-flex size-10 items-center justify-center rounded-xl border border-cyan/25 bg-cyan-soft text-cyan transition-transform duration-500 group-hover:scale-105">
                          <Icon size={18} strokeWidth={1.5} />
                        </div>
                        <ArrowUpRight
                          size={16}
                          className="mt-1 shrink-0 text-white/30 transition-colors group-hover:text-cyan"
                        />
                      </div>

                      <p className="mt-4 text-[11px] tracking-[0.18em] text-white/40 uppercase">
                        {path.meta}
                      </p>

                      <h3 className="font-display mt-2 max-w-md text-lg leading-snug text-white md:text-xl">
                        {path.title}
                      </h3>

                      <p className="mt-2.5 max-w-md flex-1 text-sm leading-relaxed text-white/50">
                        {path.description}
                      </p>

                      <div className="mt-5 flex items-center justify-between gap-3">
                        <span className="font-mono text-xs text-white/30">
                          {path.label}
                        </span>
                        <span className="text-sm text-white/40 transition-colors group-hover:text-cyan">
                          {path.cta}
                        </span>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan via-cyan/40 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                  </Link>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-col items-start gap-5 border-t border-white/10 pt-8 md:mt-12 md:pt-10 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="w-full min-w-0 max-w-2xl">
              <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
                Not sure which seat fits?
              </p>
              <h3 className="font-display mt-2 text-xl leading-snug text-white md:text-2xl">
                Book a 30-minute AI strategy call
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                An architect will help you map consulting, build, or embedded
                engineering—honestly, including when AI is not the right move.
              </p>
            </div>
            <MagneticButton
              href="/contact?intent=strategy"
              className="min-h-12 shrink-0 justify-center bg-cyan px-7 py-3.5 text-sm text-white hover:bg-white hover:text-ink"
              strength={0.3}
            >
              Book an AI strategy call
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
