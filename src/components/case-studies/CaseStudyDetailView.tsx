"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import type { CaseStudy, CaseStudyLink } from "@/data/caseStudies";
import { CASE_STUDY_METRICS_NOTE, resultQualifier } from "@/data/caseStudies";
import { CtaPrimary } from "@/components/cta/CtaPrimary";
import { CtaText } from "@/components/cta/CtaText";
import { Reveal } from "@/components/ui/Reveal";
import { contactHref } from "@/lib/cta";

function LinkRow({
  title,
  links,
}: {
  title: string;
  links: CaseStudyLink[];
}) {
  return (
    <div>
      <p className="text-[11px] tracking-[0.24em] text-cyan-deep uppercase">
        {title}
      </p>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-1.5 text-sm text-ink/65 transition-colors hover:text-ink"
            >
              {link.label}
              <ArrowUpRight
                size={12}
                className="opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CaseStudyDetailView({ study }: { study: CaseStudy }) {
  const hasJourney =
    Boolean(study.whyAi) ||
    Boolean(study.architecture?.length) ||
    Boolean(study.aiCapabilities?.length) ||
    Boolean(study.deliveryApproach) ||
    Boolean(study.businessOutcomes?.length) ||
    Boolean(study.lessonsLearned?.length);

  const hasRelated =
    Boolean(study.relatedSolutions?.length) ||
    Boolean(study.relatedIndustries?.length) ||
    Boolean(study.relatedResources?.length) ||
    Boolean(study.relatedProjectHref);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.06] bg-ink pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="noise-overlay" />
        <div className="pointer-events-none absolute inset-0 editorial-grid opacity-30" />
        <div className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-cyan/10 blur-[120px]" />

        <div className="relative mx-auto max-w-page px-5 md:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-white"
          >
            <ArrowLeft size={14} />
            View case studies
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
          {study.relatedProjectHref ? (
            <Link
              href={study.relatedProjectHref}
              className="group mt-6 inline-flex items-center gap-2 text-sm text-cyan transition-colors hover:text-white"
            >
              {study.relatedProjectLabel ?? "View related project"}
              <ArrowUpRight size={14} />
            </Link>
          ) : null}
        </div>
      </section>

      <section className="bg-ink">
        <div className="relative mx-auto max-w-page px-5 md:px-8">
          <div className="relative aspect-[16/10] overflow-hidden rounded-b-[1.75rem] border border-t-0 border-white/10 md:aspect-[21/9]">
            <Image
              src={study.image}
              alt={study.name}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 md:py-20">
        <div className="mx-auto grid max-w-page grid-cols-2 gap-4 px-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4 md:px-8">
          {study.results.map((result, index) => (
            <Reveal key={result.label} delay={index * 0.04}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-6">
                <p className="font-display text-3xl text-cyan md:text-4xl">
                  {result.value}
                </p>
                <p className="mt-2 text-xs text-white/40">{result.label}</p>
                <p className="mt-2 text-[10px] tracking-wide text-white/30 uppercase">
                  {resultQualifier(result.kind)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-page px-5 text-xs leading-relaxed text-white/35 md:px-8">
          {CASE_STUDY_METRICS_NOTE}
        </p>
      </section>

      <section className="border-t border-white/[0.06] bg-ink py-16 md:py-20">
        <div className="mx-auto grid max-w-page gap-12 px-5 lg:grid-cols-3 lg:gap-10 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Business challenge
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/55">
              {study.challenge}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              {study.whyAi ? "Why AI" : "Approach"}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/55">
              {study.whyAi ?? study.approach}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Business outcomes
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/55">
              {study.outcome}
            </p>
          </Reveal>
        </div>
      </section>

      {hasJourney ? (
        <section className="border-t border-white/[0.06] bg-ink py-16 md:py-20">
          <div className="mx-auto max-w-page space-y-14 px-5 md:px-8 md:space-y-16">
            {study.whyAi ? (
              <Reveal>
                <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
                  Delivery approach
                </p>
                <h2 className="font-display mt-3 max-w-2xl text-3xl text-white md:text-4xl">
                  How the solution was implemented.
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/55">
                  {study.deliveryApproach ?? study.approach}
                </p>
              </Reveal>
            ) : null}

            {study.architecture?.length ? (
              <Reveal>
                <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
                  Solution architecture
                </p>
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {study.architecture.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm leading-relaxed text-white/60"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}

            {study.aiCapabilities?.length ? (
              <Reveal>
                <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
                  AI capabilities delivered
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {study.aiCapabilities.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-cyan/20 bg-cyan/[0.04] px-5 py-4 text-sm leading-relaxed text-white/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}

            {study.businessOutcomes?.length ? (
              <Reveal>
                <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
                  Outcome detail
                </p>
                <ul className="mt-6 space-y-3">
                  {study.businessOutcomes.map((item) => (
                    <li
                      key={item}
                      className="border-l border-cyan/40 pl-4 text-sm leading-relaxed text-white/55"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="bg-paper py-16 text-ink md:py-20">
        <div className="mx-auto max-w-page px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan-deep uppercase">
              Technical highlights
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
            <p className="mt-12 text-[11px] tracking-[0.24em] text-cyan-deep uppercase">
              Enterprise technologies used
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
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

          {study.lessonsLearned?.length ? (
            <Reveal>
              <p className="mt-14 text-[11px] tracking-[0.24em] text-cyan-deep uppercase">
                Lessons learned
              </p>
              <ul className="mt-5 max-w-3xl space-y-4">
                {study.lessonsLearned.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-ink/60 md:text-[0.9375rem]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}

          {hasRelated ? (
            <div className="mt-14 grid gap-10 border-t border-ink/10 pt-12 md:grid-cols-3">
              {study.relatedSolutions?.length ? (
                <Reveal>
                  <LinkRow title="Related solutions" links={study.relatedSolutions} />
                </Reveal>
              ) : null}
              {study.relatedIndustries?.length ? (
                <Reveal delay={0.04}>
                  <LinkRow
                    title="Related industries"
                    links={study.relatedIndustries}
                  />
                </Reveal>
              ) : null}
              {study.relatedResources?.length ? (
                <Reveal delay={0.08}>
                  <LinkRow
                    title="Related resources"
                    links={study.relatedResources}
                  />
                </Reveal>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/[0.06] bg-ink py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,190,212,0.08),transparent_60%)]" />
        <div className="relative mx-auto flex max-w-page flex-col gap-8 px-5 md:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="w-full min-w-0 max-w-xl">
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Next engagement
            </p>
            <h2 className="font-display mt-3 text-3xl text-white md:text-4xl">
              Discuss a similar AI initiative.
            </h2>
            <p className="mt-4 text-sm text-white/50">
              Thirty minutes with an architect to pressure-test fit, constraints,
              and a practical first slice, NDA available for qualified
              opportunities.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <CtaPrimary
              href={contactHref("strategy")}
              location="case-study"
              intent="strategy"
              pattern="case-convert"
            >
              Start a similar engagement
            </CtaPrimary>
            <CtaText href="/solutions" location="case-study" pattern="text-explore">
              Explore AI solutions
            </CtaText>
          </div>
        </div>
      </section>
    </>
  );
}
