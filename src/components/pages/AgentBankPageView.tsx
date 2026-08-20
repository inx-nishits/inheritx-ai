"use client";

import Image from "next/image";

import { agentBankProject } from "@/data/pages/agentBank";
import { CtaPrimary } from "@/components/cta/CtaPrimary";
import { CtaProof } from "@/components/cta/CtaProof";
import { CtaText } from "@/components/cta/CtaText";
import { PaperAtmosphere } from "@/components/ui/PaperAtmosphere";
import { Reveal } from "@/components/ui/Reveal";
import { contactHref } from "@/lib/cta";

export function AgentBankPageView() {
  const p = agentBankProject;

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.06] bg-ink pt-28 pb-0 md:pt-36">
        <div className="noise-overlay" />
        <div className="pointer-events-none absolute inset-0 editorial-grid opacity-30" />
        <div className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-cyan/10 blur-[120px]" />

        <div className="relative mx-auto max-w-page px-5 md:px-8">
          <p className="text-[11px] tracking-[0.28em] text-cyan uppercase">
            {p.eyebrow}
          </p>
          <p className="mt-3 text-sm text-white/40">{p.category}</p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl leading-[1.15] text-white md:text-6xl">
            {p.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
            {p.summary}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CtaPrimary
              href={contactHref("strategy")}
              location="case-study"
              intent="strategy"
              pattern="case-convert"
            >
              Discuss a similar build
            </CtaPrimary>
            <CtaText href="/portfolio" location="case-study" pattern="text-explore">
              Back to portfolio
            </CtaText>
          </div>
        </div>

        <div className="relative mx-auto mt-12 max-w-page px-5 md:mt-16 md:px-8">
          <div className="relative aspect-[16/10] overflow-hidden rounded-t-[1.75rem] border border-b-0 border-white/10 md:aspect-[21/9]">
            <Image
              src={p.heroImage}
              alt={p.name}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
            <div className="absolute right-5 bottom-5 left-5 md:right-8 md:bottom-8 md:left-8">
              <p className="font-display text-2xl text-white md:text-3xl">
                {p.name}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 md:py-20">
        <div className="mx-auto grid max-w-page grid-cols-2 gap-4 px-5 md:grid-cols-4 md:gap-6 md:px-8">
          {p.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.04}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-6">
                <p className="font-display text-3xl text-cyan md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs text-white/40">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-ink py-16 md:py-20">
        <div className="mx-auto grid max-w-page gap-12 px-5 lg:grid-cols-2 lg:gap-20 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Challenge
            </p>
            <h2 className="font-display mt-3 text-3xl text-white md:text-4xl">
              {p.challenge.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/55">
              {p.challenge.copy}
            </p>
            <ul className="mt-6 space-y-3">
              {p.challenge.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-white/45"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Solution
            </p>
            <h2 className="font-display mt-3 text-3xl text-white md:text-4xl">
              {p.solution.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/55">
              {p.solution.copy}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper-soft py-16 text-ink md:py-20">
        <PaperAtmosphere />
        <div className="relative mx-auto max-w-page px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan-deep uppercase">
              Capabilities
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl md:text-5xl">
              Specialized agents. Shared governance.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {p.capabilities.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="rounded-[1.5rem] border border-ink/10 bg-white p-6 md:p-8">
                  <p className="font-mono text-xs text-cyan-deep">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-3 text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/55">
                    {item.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 md:py-20">
        <div className="mx-auto max-w-page px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              User journey
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl text-white md:text-5xl">
              From signal to governed action.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {p.journey.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.05}>
                <article>
                  <p className="font-mono text-xs text-cyan">{item.step}</p>
                  <h3 className="font-display mt-3 text-xl text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">
                    {item.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-ink-soft py-16 md:py-20">
        <div className="mx-auto grid max-w-page gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Architecture
            </p>
            <h2 className="font-display mt-3 text-3xl text-white md:text-4xl">
              Built for regulated environments.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/50">
              Agent Bank assumes private cloud, scoped tools, and evaluation as
              first-class product requirements, not afterthoughts.
            </p>
          </Reveal>
          <ul className="space-y-4">
            {p.architecture.map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <li className="flex items-start gap-4 rounded-2xl border border-white/10 bg-ink px-5 py-4">
                  <span className="font-mono text-xs text-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-white/70">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper-soft py-16 text-ink md:py-20">
        <PaperAtmosphere />
        <div className="relative mx-auto max-w-page px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan-deep uppercase">
              Outcomes
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl md:text-5xl">
              What changes when agents own the routine.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {p.outcomes.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article>
                  <div className="mb-4 h-px w-10 bg-cyan-deep/40" />
                  <h3 className="font-display text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/55">
                    {item.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 flex flex-wrap gap-2">
              {p.stack.map((tech) => (
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
        <div className="relative mx-auto max-w-page px-5 text-center md:px-8">
          <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
            Next
          </p>
          <h2 className="font-display mx-auto mt-3 max-w-2xl text-3xl text-white md:text-5xl">
            Need a governed agent platform for your operations?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm text-white/50">
            We will map your highest-volume workflows, control requirements, and
            a first production slice, without demo theater.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CtaPrimary
              href={contactHref("strategy")}
              location="page.close"
              intent="strategy"
              pattern="case-convert"
            >
              Start a similar engagement
            </CtaPrimary>
            <CtaProof href="/case-studies" location="page.close" pattern="proof-band">
              View case studies
            </CtaProof>
          </div>
        </div>
      </section>
    </>
  );
}
