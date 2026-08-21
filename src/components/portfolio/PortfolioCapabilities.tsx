"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { businessImpacts, capabilityLogos } from "@/data/portfolio";
import { CTA_LABELS } from "@/data/cta/copy";
import { CtaGhost } from "@/components/cta/CtaGhost";
import { CtaPrimary } from "@/components/cta/CtaPrimary";
import { CtaText } from "@/components/cta/CtaText";
import { Reveal, TextReveal } from "@/components/ui/Reveal";
import { contactHref } from "@/lib/cta";

export function PortfolioCapabilities() {
  return (
    <section className="relative border-t border-white/[0.06] bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-page px-5 md:px-8">
        <div className="mb-12 max-w-3xl md:mb-16">
          <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
            AI Infrastructure
          </p>
          <TextReveal
            text="The stack behind production enterprise AI."
            className="font-display mt-5 text-4xl leading-[1.15] text-white md:text-5xl"
          />
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/50">
            Models, agentic orchestration, retrieval, and cloud estates we
            compose for private, production-grade systems, not demo stacks.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-6">
          {capabilityLogos.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03, duration: 0.4 }}
              className="group flex min-h-[96px] flex-col items-center justify-center gap-2.5 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-5 transition-all hover:border-white/15 hover:bg-white/[0.06]"
            >
              <Image
                src={item.src}
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-center text-xs font-medium text-white/65">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BusinessImpact() {
  return (
    <section className="relative bg-ink-soft py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,190,212,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-page px-5 md:px-8">
        <div className="mb-12 max-w-3xl md:mb-16">
          <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
            Business Impact
          </p>
          <TextReveal
            text="Outcome classes we design programs around."
            className="font-display mt-5 text-4xl leading-[1.15] text-white md:text-5xl"
          />
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/50">
            Target outcome classes across cost, speed, automation, and trust.
            Specific client metrics live in Case Studies.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {businessImpacts.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <div className="h-full rounded-[1.75rem] border border-white/10 bg-ink/60 p-7 backdrop-blur-sm transition-colors hover:border-cyan/25 md:p-8">
                <p className="font-display text-4xl text-cyan md:text-5xl">
                  {item.value}
                </p>
                <h3 className="mt-4 text-lg text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/45">
                  {item.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PortfolioCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.06] bg-ink py-16 md:py-20"
    >
      <div className="noise-overlay" />
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/actual/actual-transformation.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/70" />
      </div>

      <div className="relative mx-auto max-w-page px-5 text-center md:px-8">
        <Reveal>
          <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
            Start your AI transformation
          </p>
          <h2 className="font-display mx-auto mt-5 max-w-3xl text-4xl leading-[1.15] text-white md:text-6xl">
            Let&apos;s industrialize your next AI mandate
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/55">
            From strategy to agentic production systems, we design AI/ML,
            AI Agents, and AI DevOps platforms enterprises own.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <CtaPrimary
              href={contactHref("strategy")}
              location="page.close"
              intent="strategy"
              pattern="closing-stage"
            >
              {CTA_LABELS.similarEngagement}
            </CtaPrimary>
            <CtaGhost
              href={contactHref("assessment")}
              location="page.close"
              intent="assessment"
              pattern="closing-stage"
            >
              Request AI assessment
            </CtaGhost>
            <CtaText href="/" location="page.close">
              Back to home
            </CtaText>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
