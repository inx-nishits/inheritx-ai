"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CircuitBoard, LineChart } from "lucide-react";

import { audiencePaths } from "@/data/content";
import { Reveal, TextReveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const icons = {
  systems: CircuitBoard,
  outcomes: LineChart,
} as const;

export function ChooseYourPath() {
  return (
    <section
      id="path"
      className="relative overflow-hidden border-t border-white/[0.06] bg-ink py-16 md:py-28"
    >
      <div className="noise-overlay" />
      <div className="pointer-events-none absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-12 max-w-2xl md:mb-14">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              {audiencePaths.eyebrow}
            </p>
          </Reveal>
          <TextReveal
            text={audiencePaths.title}
            className="font-display mt-4 text-[2rem] leading-[1.08] text-white md:text-5xl lg:text-6xl"
          />
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/50">
              {audiencePaths.description}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
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
                      "group relative flex h-full min-h-0 flex-col overflow-hidden rounded-[1.75rem]",
                      "border border-white/10 bg-gradient-to-b from-ink-elevated to-ink-soft p-6 md:min-h-[360px] md:p-9",
                      "transition-[border-color,box-shadow] duration-500",
                      "hover:border-cyan/30 hover:shadow-[0_28px_80px_rgba(0,0,0,0.35)]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50",
                    )}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,190,212,0.12),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute inset-0 editorial-grid opacity-0 transition-opacity duration-500 group-hover:opacity-25" />

                    <div className="relative flex items-start justify-between gap-4">
                      <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-cyan/25 bg-cyan-soft text-cyan transition-transform duration-500 group-hover:scale-105">
                        <Icon size={22} strokeWidth={1.5} />
                      </div>
                      <span className="font-mono text-xs text-white/30">
                        {path.label}
                      </span>
                    </div>

                    <p className="relative mt-6 text-[11px] tracking-[0.18em] text-white/40 uppercase md:mt-8">
                      {path.meta}
                    </p>

                    <h3 className="font-display relative mt-3 max-w-md text-2xl leading-tight text-white md:text-3xl lg:text-[2rem]">
                      {path.title}
                    </h3>

                    <p className="relative mt-4 max-w-md flex-1 text-sm leading-relaxed text-white/50 md:text-[15px]">
                      {path.description}
                    </p>

                    <div className="relative mt-8 inline-flex items-center gap-2 text-sm text-cyan">
                      <span className="transition-colors duration-300 group-hover:text-white">
                        {path.cta}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan via-cyan/40 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                  </Link>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
