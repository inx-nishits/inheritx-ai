"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { portfolioStats } from "@/data/portfolio";
import { CtaText } from "@/components/cta/CtaText";
import { Reveal, TextReveal } from "@/components/ui/Reveal";

export function PortfolioHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-ink pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="noise-overlay" />
      <div className="pointer-events-none absolute inset-0 editorial-grid opacity-40" />
      <div className="pointer-events-none absolute -top-24 right-0 h-[520px] w-[520px] rounded-full bg-cyan/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-cyan/5 blur-[80px]" />

      <div className="relative mx-auto grid max-w-page items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="text-[11px] tracking-[0.28em] text-cyan uppercase">
              AI portfolio
            </p>
          </Reveal>
          <TextReveal
            text="Enterprise AI systems, mapped by capability."
            className="font-display mt-3 max-w-2xl text-4xl leading-[1.15] text-white md:text-6xl lg:text-[4.25rem]"
          />
          <Reveal delay={0.12}>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/55 md:text-lg">
              How we deliver AI/ML engineering, Agentic AI, and AI DevOps—
              generative applications, vision, automation, and transformation—
              organized by capability. Named client outcomes live in Case studies.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaText href="#grid" location="nav" pattern="text-explore">
                Browse AI work
              </CtaText>
              <CtaText href="/portfolio/agent-bank" location="nav">
                Featured: Agent Bank
              </CtaText>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src="/images/actual/actual-portfolio-banner.png"
              alt="Enterprise AI portfolio visual"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(0,190,212,0.25),transparent_55%)]" />
            <div className="absolute right-5 bottom-5 left-5 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-md md:p-5">
              <p className="text-[11px] tracking-[0.2em] text-cyan uppercase">
                AI-native delivery
              </p>
              <p className="mt-2 text-sm text-white/75">
                Agents, platforms, and automation designed for governed
                enterprise scale.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-16 grid max-w-page grid-cols-2 gap-4 px-5 md:mt-20 md:grid-cols-4 md:gap-6 md:px-8">
        {portfolioStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.45 }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-6 backdrop-blur-sm"
          >
            <p className="font-display text-3xl text-cyan md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs tracking-wide text-white/45">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
