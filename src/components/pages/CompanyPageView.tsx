"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  careersTeaser,
  companyHero,
  companyPrinciples,
  companyStats,
  companyTimeline,
  companyVision,
} from "@/data/pages/company";
import { PageHero } from "@/components/layout/PageHero";
import { CtaText } from "@/components/cta/CtaText";
import { PaperAtmosphere } from "@/components/ui/PaperAtmosphere";
import { Reveal } from "@/components/ui/Reveal";
import { contactHref } from "@/lib/cta";

export function CompanyPageView() {
  return (
    <>
      <PageHero
        eyebrow={companyHero.eyebrow}
        title={companyHero.title}
        description={companyHero.description}
        primaryCta={{
          label: "Book an AI strategy call",
          href: contactHref("strategy"),
        }}
        secondaryCta={{ label: "Review security", href: "/company/security" }}
      />

      <section className="bg-ink py-16 md:py-20">
        <div className="mx-auto grid max-w-page grid-cols-2 gap-4 px-5 md:grid-cols-4 md:gap-6 md:px-8">
          {companyStats.map((stat, index) => (
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
        <div className="mx-auto max-w-page px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
                Vision
              </p>
              <h2 className="font-display mt-3 text-3xl text-white md:text-5xl">
                {companyVision.title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/55">
                {companyVision.lead}
              </p>
              <Link
                href="/company/ai-vision"
                className="group mt-6 inline-flex items-center gap-2 text-sm text-cyan hover:text-white"
              >
                Read Our AI Vision
                <ArrowUpRight size={14} />
              </Link>
            </Reveal>
            <div className="space-y-6">
              {companyVision.pillars.map((pillar, index) => (
                <Reveal key={pillar.title} delay={index * 0.06}>
                  <article className="rounded-2xl border border-white/10 bg-ink-soft p-6 md:p-7">
                    <p className="font-mono text-xs text-cyan">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-display mt-3 text-2xl text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/50">
                      {pillar.copy}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper-soft py-16 text-ink md:py-20">
        <PaperAtmosphere />
        <div className="relative mx-auto max-w-page px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan-deep uppercase">
              Path
            </p>
            <h2 className="font-display mt-3 text-3xl md:text-5xl">
              From engineering craft to AI-native practice.
            </h2>
          </Reveal>
          <div className="relative mt-14">
            <div className="grid gap-8 md:grid-cols-3">
              {companyTimeline.map((item, index) => (
                <Reveal key={item.year} delay={index * 0.07}>
                  <article>
                    <div className="relative flex h-8 items-center">
                      {index < companyTimeline.length - 1 ? (
                        <span
                          aria-hidden
                          className="absolute top-1/2 left-0 hidden h-px w-[calc(100%+2rem)] -translate-y-1/2 bg-ink/10 md:block"
                        />
                      ) : null}
                      <span className="relative z-10 inline-flex rounded-full border border-ink/15 bg-paper px-3 py-1 font-mono text-xs text-cyan-deep">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="font-display mt-5 text-2xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/55">
                      {item.copy}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 md:py-20">
        <div className="mx-auto max-w-page px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Principles
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl text-white md:text-5xl">
              How we hold ourselves accountable.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {companyPrinciples.map((item, index) => (
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
            <div className="mt-10 flex flex-wrap gap-6">
              <Link
                href="/company/why-inheritx"
                className="group inline-flex items-center gap-2 text-sm text-cyan hover:text-white"
              >
                Why InheritX
                <ArrowUpRight size={14} />
              </Link>
              <Link
                href="/company/approach"
                className="group inline-flex items-center gap-2 text-sm text-white/50 hover:text-white"
              >
                Our Approach
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-ink-soft py-16 md:py-20">
        <div className="mx-auto flex max-w-page flex-col gap-8 px-5 md:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="w-full min-w-0 max-w-xl">
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Careers
            </p>
            <h2 className="font-display mt-3 text-3xl text-white md:text-4xl">
              {careersTeaser.title}
            </h2>
            <p className="mt-4 text-sm text-white/50">{careersTeaser.copy}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {careersTeaser.roles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/55"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <CtaText href="/careers" location="page.close" pattern="text-explore">
              View careers
            </CtaText>
            <CtaText href="/team" location="page.close">
              Meet the team
            </CtaText>
          </div>
        </div>
      </section>
    </>
  );
}
