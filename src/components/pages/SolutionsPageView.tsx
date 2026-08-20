"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

import {
  engagementModels,
  solutionFitMatrix,
  solutionPillars,
  solutionProofPoints,
  solutionsHero,
} from "@/data/pages/solutions";
import { CTA_LABELS } from "@/data/cta/copy";
import { PageHero } from "@/components/layout/PageHero";
import { CtaGhost } from "@/components/cta/CtaGhost";
import { CtaText } from "@/components/cta/CtaText";
import { Reveal } from "@/components/ui/Reveal";
import { contactHref } from "@/lib/cta";
import { cn } from "@/lib/cn";

export function SolutionsPageView() {
  const [active, setActive] = useState(0);
  const pillar = solutionPillars[active];

  return (
    <>
      <PageHero
        eyebrow={solutionsHero.eyebrow}
        title={solutionsHero.title}
        description={solutionsHero.description}
        primaryCta={{
          label: CTA_LABELS.startConversation,
          href: contactHref("strategy"),
        }}
        secondaryCta={{ label: "Explore solution lanes", href: "#lanes" }}
      />

      {/* Proof strip — unique to solutions page */}
      <section className="border-b border-white/[0.06] bg-ink">
        <div className="mx-auto grid max-w-page grid-cols-2 gap-px bg-white/[0.06] md:grid-cols-4">
          {solutionProofPoints.map((item) => (
            <div
              key={item.label}
              className="bg-ink px-5 py-8 md:px-8 md:py-10"
            >
              <p className="font-display text-3xl text-cyan md:text-4xl">
                {item.value}
              </p>
              <p className="mt-2 text-xs text-white/40 md:text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillar explorer */}
      <section id="lanes" className="bg-ink py-16 md:py-20">
        <div className="mx-auto max-w-page px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Solution pillars
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl text-white md:text-5xl">
              Three pillars of enterprise AI transformation.
            </h2>
          </Reveal>

          <div className="mt-10 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:mt-12 md:flex-wrap md:snap-none md:overflow-visible [&::-webkit-scrollbar]:hidden">
            {solutionPillars.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "inline-flex min-h-11 shrink-0 snap-start items-center rounded-full border px-4 py-2.5 text-sm transition-all",
                  active === index
                    ? "border-cyan/45 bg-cyan/15 text-white"
                    : "border-white/10 text-white/45 hover:text-white/80",
                )}
              >
                <span className="font-mono text-[10px] text-cyan">{item.id}</span>
                <span className="ml-2">{item.title.split(" ").slice(0, 2).join(" ")}</span>
              </button>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-white/10 md:mt-8 md:rounded-[2rem]">
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-[16/11] lg:aspect-auto lg:min-h-[420px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={pillar.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={pillar.image}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              </div>
              <div className="bg-ink-soft p-7 md:p-10 lg:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={pillar.id + "-copy"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="font-mono text-sm text-cyan">{pillar.id}</p>
                    <h3 className="font-display mt-3 text-3xl text-white md:text-4xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 text-base text-white/55">{pillar.summary}</p>
                    <ul className="mt-8 space-y-3">
                      {pillar.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm text-white/75"
                        >
                          <Check size={16} className="mt-0.5 shrink-0 text-cyan" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={pillar.href}
                      className="group mt-8 inline-flex items-center gap-2 text-sm text-cyan hover:text-white"
                    >
                      Explore this solution
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section id="engagement" className="border-t border-white/[0.06] bg-paper py-16 text-ink md:py-20">
        <div className="mx-auto max-w-page px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan-deep uppercase">
              Engagement Models
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl md:text-5xl">
              How enterprise leaders engage us.
            </h2>
            <p className="mt-4 max-w-xl text-sm text-ink/55 md:text-base">
              Pick the motion that matches readiness, strategy when the mandate
              is unclear; production build when you are ready to industrialize.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {engagementModels.map((model, index) => (
              <Reveal key={model.title} delay={index * 0.05}>
                <Link href={model.href} className="block h-full">
                  <article className="group h-full rounded-[1.75rem] border border-ink/10 bg-white p-6 transition-shadow hover:shadow-[0_20px_50px_rgba(11,18,32,0.06)] md:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-2xl">{model.title}</h3>
                      <span className="rounded-full border border-ink/20 bg-ink/[0.06] px-3 py-1 text-[11px] font-medium text-ink/80">
                        {model.duration}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-ink/55">
                      {model.copy}
                    </p>
                    <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                      <p className="min-w-0 text-[11px] tracking-[0.14em] text-cyan-deep uppercase">
                        Best for · {model.bestFor}
                      </p>
                      <span className="inline-flex shrink-0 items-center gap-1 text-sm text-ink/40 transition-colors group-hover:text-cyan-deep">
                        Details
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fit matrix */}
      <section className="bg-ink py-16 md:py-20">
        <div className="mx-auto max-w-page px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Quick fit
            </p>
            <h2 className="font-display mt-3 text-3xl text-white md:text-4xl">
              Start from the business problem, not the buzzword.
            </h2>
          </Reveal>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {solutionFitMatrix.map((row) => (
              <div
                key={row.need}
                className="grid gap-3 py-5 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-8"
              >
                <p className="text-sm text-white/55 md:text-base">{row.need}</p>
                <p className="text-sm font-medium text-cyan md:text-right">
                  → {row.fit}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <CtaGhost
              href={contactHref("assessment")}
              location="page.close"
              intent="assessment"
              pattern="closing-stage"
            >
              Request AI assessment
            </CtaGhost>
            <CtaText href="/portfolio" location="page.close">
              View AI Portfolio
            </CtaText>
          </div>
        </div>
      </section>
    </>
  );
}
