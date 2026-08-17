"use client";

import {
  collaborationSteps,
  coreCapabilities,
  cultureValues,
  leadership,
  teamHero,
  teamHighlights,
  whyWorkWithUs,
} from "@/data/pages/team";
import { PageHero } from "@/components/layout/PageHero";
import { TeamMembersGrid } from "@/components/team/TeamMembersGrid";
import { CtaPrimary } from "@/components/cta/CtaPrimary";
import { CtaText } from "@/components/cta/CtaText";
import { Reveal } from "@/components/ui/Reveal";
import { contactHref } from "@/lib/cta";

export function TeamPageView() {
  return (
    <>
      <PageHero
        eyebrow={teamHero.eyebrow}
        title={teamHero.title}
        description={teamHero.description}
        primaryCta={{
          label: "Book an AI strategy call",
          href: contactHref("strategy"),
        }}
        secondaryCta={{ label: "About the company", href: "/company" }}
      />

      <section className="bg-ink py-16 md:py-20">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-4 px-5 md:grid-cols-4 md:gap-6 md:px-8">
          {teamHighlights.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.04}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-6">
                <p className="font-display text-3xl text-cyan md:text-4xl">
                  {item.value}
                </p>
                <p className="mt-2 text-xs text-white/40">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-ink py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Leadership
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl text-white md:text-5xl">
              Senior judgment on every critical path.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/50">
              Leadership here is practiced through architecture decisions,
              delivery accountability, and client trust—not job titles alone.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {leadership.map((item, index) => (
              <Reveal key={item.role} delay={index * 0.05}>
                <article className="h-full rounded-[1.5rem] border border-white/10 bg-ink-soft p-6 md:p-8">
                  <p className="font-mono text-xs text-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-3 text-2xl text-white">
                    {item.role}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">
                    {item.focus}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TeamMembersGrid />

      <section className="bg-paper py-16 text-ink md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan-deep uppercase">
              Disciplines
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl md:text-5xl">
              The specialists behind production systems.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreCapabilities.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
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
        </div>
      </section>

      <section className="bg-ink py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Culture & values
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl text-white md:text-5xl">
              How we show up when stakes are high.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {cultureValues.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-6 md:p-8">
                  <h3 className="font-display text-2xl text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">
                    {item.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <CtaText href="/team/culture" location="page.body" className="mt-10">
              Explore culture & values
            </CtaText>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-ink-soft py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Why Work With Us
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl text-white md:text-5xl">
              Partnership without theater.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {whyWorkWithUs.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="rounded-2xl border border-white/10 bg-ink p-6 md:p-7">
                  <h3 className="font-display text-xl text-white">
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

      <section className="bg-paper py-16 text-ink md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan-deep uppercase">
              Collaboration Process
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl md:text-5xl">
              How engagements actually run.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {collaborationSteps.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.05}>
                <article>
                  <p className="font-mono text-xs text-cyan-deep">{item.step}</p>
                  <h3 className="font-display mt-3 text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/55">
                    {item.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/[0.06] bg-ink py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,190,212,0.08),transparent_60%)]" />
        <div className="relative mx-auto flex max-w-[1400px] flex-col gap-8 px-5 md:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="w-full min-w-0 max-w-xl">
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Join Us
            </p>
            <h2 className="font-display mt-3 text-3xl text-white md:text-4xl">
              Building with people who care about production.
            </h2>
            <p className="mt-4 text-sm text-white/50">
              Open roles for architects, ML engineers, and delivery leads who
              want ownership—not slideware.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <CtaPrimary
              href={contactHref("strategy")}
              location="page.close"
              intent="strategy"
              pattern="closing-stage"
            >
              Book an AI strategy call
            </CtaPrimary>
            <CtaText href="/company" location="page.close">
              Company story
            </CtaText>
          </div>
        </div>
      </section>
    </>
  );
}
