"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import {
  caseStudiesPage,
  caseStudyCategories,
  caseStudyIntro,
} from "@/data/caseStudies";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/cn";

export function CaseStudiesHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-ink pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="noise-overlay" />
      <div className="pointer-events-none absolute inset-0 editorial-grid opacity-30" />
      <div className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-cyan/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] text-cyan uppercase">
            {caseStudyIntro.eyebrow}
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl leading-[1.15] text-white md:text-6xl">
            {caseStudyIntro.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
            {caseStudyIntro.copy}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticButton
              href="/contact"
              className="bg-cyan px-6 py-3 text-white hover:bg-white hover:text-ink"
            >
              Discuss a similar project
            </MagneticButton>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 px-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              View AI portfolio
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 border-t border-white/[0.08] pt-8 sm:grid-cols-4 md:mt-14">
          {[
            { value: "14+", label: "Years DNA for AI programs" },
            { value: "600+", label: "Engagements informing delivery" },
            { value: "AI/ML", label: "Agents · Vision · LLMOps" },
            { value: "Owned", label: "IP at handover" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl text-cyan md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-white/40">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudiesListing() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? caseStudiesPage
        : caseStudiesPage.filter((c) => c.category === active),
    [active],
  );

  return (
    <section className="relative bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-10 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:mb-12 md:flex-wrap md:snap-none md:overflow-visible [&::-webkit-scrollbar]:hidden">
          {caseStudyCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "inline-flex min-h-11 shrink-0 snap-start items-center justify-center rounded-full border px-4 py-2.5 text-sm tracking-wide transition-all md:min-h-0 md:py-2 md:text-xs",
                active === cat
                  ? "border-cyan/40 bg-cyan-soft text-cyan"
                  : "border-white/10 text-white/45 hover:border-white/25 hover:text-white/75",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((study, index) => (
            <Reveal key={study.id} delay={(index % 4) * 0.05}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-soft transition-colors hover:border-white/20">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={study.image}
                    alt=""
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-600 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full border border-white/15 bg-ink/70 px-3 py-1 text-[10px] tracking-[0.14em] text-cyan uppercase backdrop-blur-sm">
                    {study.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h2 className="font-display text-2xl text-white md:text-3xl">
                    {study.name}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-cyan/90">
                    {study.tagline}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/50">
                    {study.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 px-2 py-0.5 text-[10px] text-white/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/[0.08] pt-5">
                    {study.results.map((result) => (
                      <div key={result.label}>
                        <p className="font-display text-xl text-cyan md:text-2xl">
                          {result.value}
                        </p>
                        <p className="mt-1 text-[11px] leading-snug text-white/40">
                          {result.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/case-studies/${study.id}`}
                    className="group/cta mt-6 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-cyan"
                  >
                    Read case study
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudiesCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-ink py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,190,212,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-[1400px] px-5 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl text-white md:text-5xl">
            Planning an AI transformation like these?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-white/50 md:text-base">
            Share the workflow, constraint, and outcome you need—we will map
            whether consulting, a production build, or embedded AI talent is the
            right first move.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              href="/contact"
              className="bg-cyan px-7 py-3.5 text-white hover:bg-white hover:text-ink"
            >
              Book an AI Strategy Call
            </MagneticButton>
            <Link
              href="/portfolio"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              Explore AI capability portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
