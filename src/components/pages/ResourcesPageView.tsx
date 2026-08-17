"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";

import {
  resourceArticles,
  resourceFaqs,
  resourceLibrary,
  resourcesHero,
} from "@/data/pages/resources";
import { PageHero } from "@/components/layout/PageHero";
import { CtaGhost } from "@/components/cta/CtaGhost";
import { CtaPrimary } from "@/components/cta/CtaPrimary";
import { Reveal } from "@/components/ui/Reveal";
import { contactHref } from "@/lib/cta";
import { cn } from "@/lib/cn";

export function ResourcesPageView() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeArticle, setActiveArticle] = useState(0);
  const article = resourceArticles[activeArticle];

  return (
    <>
      <PageHero
        eyebrow={resourcesHero.eyebrow}
        title={resourcesHero.title}
        description={resourcesHero.description}
        primaryCta={{
          label: "Book an AI strategy call",
          href: contactHref("strategy"),
        }}
        secondaryCta={{ label: "Browse AI insights", href: "/insights" }}
      />

      <section className="bg-ink py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Library
            </p>
            <h2 className="font-display mt-3 text-3xl text-white md:text-4xl">
              Start with proof and systems.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {resourceLibrary.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-ink-soft p-6 transition-colors hover:border-cyan/30 md:p-7"
                >
                  <p className="text-[11px] text-cyan">{item.meta}</p>
                  <h3 className="font-display mt-3 text-2xl text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-white/50">
                    {item.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm text-white/60 group-hover:text-cyan">
                    Open
                    <ArrowUpRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-ink-soft py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Insights & briefs
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl text-white md:text-5xl">
              Reading for operators and architects.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex flex-col gap-2">
              {resourceArticles.map((item, index) => (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setActiveArticle(index)}
                  className={cn(
                    "rounded-2xl border px-5 py-4 text-left transition-all",
                    activeArticle === index
                      ? "border-cyan/40 bg-cyan/10"
                      : "border-white/10 hover:border-white/20",
                  )}
                >
                  <span className="text-[10px] tracking-[0.16em] text-cyan uppercase">
                    {item.category} · {item.readTime}
                  </span>
                  <span className="mt-2 block text-sm font-medium text-white">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="rounded-[1.75rem] border border-white/10 bg-ink p-7 md:p-10"
              >
                <p className="text-[11px] tracking-[0.16em] text-cyan uppercase">
                  {article.category} · {article.readTime}
                </p>
                <h3 className="font-display mt-4 text-3xl text-white md:text-4xl">
                  {article.title}
                </h3>
                <p className="mt-4 text-base text-white/55">{article.excerpt}</p>
                <div className="mt-8 space-y-4 border-t border-white/10 pt-8">
                  {article.body.map((para) => (
                    <p
                      key={para.slice(0, 32)}
                      className="text-sm leading-relaxed text-white/65"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 text-ink md:py-20">
        <div className="mx-auto max-w-[900px] px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan-deep uppercase">
              FAQ
            </p>
            <h2 className="font-display mt-3 text-3xl md:text-4xl">
              Common questions about these resources.
            </h2>
          </Reveal>
          <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {resourceFaqs.map((faq, index) => {
              const open = openFaq === index;
              return (
                <div key={faq.q} className="py-5">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="text-base font-medium md:text-lg">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={cn(
                        "shrink-0 text-ink/40 transition-transform",
                        open && "rotate-180",
                      )}
                    />
                  </button>
                  {open && (
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/55">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <CtaPrimary
              href={contactHref("strategy")}
              location="page.close"
              intent="strategy"
              pattern="closing-stage"
              className="bg-ink hover:bg-cyan hover:text-white"
            >
              Request a private briefing
            </CtaPrimary>
            <CtaGhost
              href={contactHref("assessment")}
              location="page.close"
              intent="assessment"
              pattern="closing-stage"
              surface="paper"
            >
              Request AI assessment
            </CtaGhost>
          </div>
        </div>
      </section>
    </>
  );
}
