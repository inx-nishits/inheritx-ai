"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import type { CaseStudy } from "@/data/caseStudies";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";

export function CaseStudyDetailView({ study }: { study: CaseStudy }) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.06] bg-ink pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="noise-overlay" />
        <div className="pointer-events-none absolute inset-0 editorial-grid opacity-30" />
        <div className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-cyan/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-white"
          >
            <ArrowLeft size={14} />
            All case studies
          </Link>
          <p className="mt-8 text-[11px] tracking-[0.28em] text-cyan uppercase">
            {study.category}
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl leading-[1.15] text-white md:text-6xl">
            {study.name}
          </h1>
          <p className="mt-3 text-lg text-white/70 md:text-xl">{study.tagline}</p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/55">
            {study.summary}
          </p>
        </div>
      </section>

      <section className="bg-ink">
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="relative aspect-[16/10] overflow-hidden rounded-b-[1.75rem] border border-t-0 border-white/10 md:aspect-[21/9]">
            <Image
              src={study.image}
              alt={study.name}
              fill
              priority
              unoptimized
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 md:py-20">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-4 px-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4 md:px-8">
          {study.results.map((result, index) => (
            <Reveal key={result.label} delay={index * 0.04}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-6">
                <p className="font-display text-3xl text-cyan md:text-4xl">
                  {result.value}
                </p>
                <p className="mt-2 text-xs text-white/40">{result.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-ink py-16 md:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 lg:grid-cols-3 lg:gap-10 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Challenge
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/55">
              {study.challenge}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Approach
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/55">
              {study.approach}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Outcome
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/55">
              {study.outcome}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-16 text-ink md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan-deep uppercase">
              Highlights
            </p>
            <h2 className="font-display mt-3 text-3xl md:text-4xl">
              What made the delivery work.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {study.highlights.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <article className="rounded-[1.25rem] border border-ink/10 bg-white p-6">
                  <p className="font-mono text-xs text-cyan-deep">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {item}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10 flex flex-wrap gap-2">
              {study.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-ink/10 px-3 py-1.5 text-xs text-ink/55"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/[0.06] bg-ink py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,190,212,0.08),transparent_60%)]" />
        <div className="relative mx-auto flex max-w-[1400px] flex-col gap-8 px-5 md:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="w-full min-w-0 max-w-xl">
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Next engagement
            </p>
            <h2 className="font-display mt-3 text-3xl text-white md:text-4xl">
              Ready for a similar outcome?
            </h2>
            <p className="mt-4 text-sm text-white/50">
              Tell us about the system, constraints, and timeline—we will map a
              practical first slice.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <MagneticButton
              href="/contact"
              className="bg-cyan px-6 py-3 text-white hover:bg-white hover:text-ink"
            >
              Book an AI Strategy Call
            </MagneticButton>
            <Link
              href="/portfolio/agent-bank"
              className="group inline-flex items-center gap-2 text-sm text-white/50 hover:text-white"
            >
              See Agent Bank
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
