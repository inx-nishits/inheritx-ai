"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { trustTechnologies } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function TrustBar() {
  return (
    <section
      aria-label="Core AI technologies"
      className="relative overflow-hidden border-y border-[var(--line-dark)] bg-paper text-ink"
    >
      <div className="editorial-grid-light pointer-events-none absolute inset-0 opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[70%] -translate-x-1/2 rounded-full bg-cyan/10 blur-[90px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 right-[-10%] h-64 w-64 rounded-full bg-cyan/[0.08] blur-[100px]"
      />

      <div className="relative mx-auto max-w-page px-5 py-16 md:px-8 md:py-20">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal className="w-full min-w-0 max-w-xl">
            <p className="text-[11px] tracking-[0.24em] text-cyan-deep uppercase">
              Technology strength
            </p>
            <h2 className="font-display mt-3 text-[2rem] leading-[1.15] tracking-[-0.03em] text-ink md:text-5xl">
              Built on production AI systems.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/55 md:text-base">
              Enterprise AI, agents, RAG, and LLMOps—engineered for evaluation,
              observability, and governed production reliability.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              href="/solutions"
              className="group inline-flex items-center gap-2 text-sm font-medium text-cyan-deep transition-colors hover:text-ink"
            >
              Explore all solutions
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <ul className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-4 md:mt-14 md:gap-x-4 md:gap-y-5">
            {trustTechnologies.map((tech, index) => (
              <li
                key={tech.label}
                className="inline-flex items-center gap-3 md:gap-4"
              >
                <Link href={tech.href} className="group">
                  <span className="font-display text-2xl tracking-[-0.03em] text-ink transition-colors group-hover:text-cyan-deep md:text-4xl">
                    {tech.label}
                  </span>
                </Link>
                {index < trustTechnologies.length - 1 ? (
                  <span
                    aria-hidden
                    className="size-1.5 shrink-0 rounded-full bg-cyan"
                  />
                ) : null}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
