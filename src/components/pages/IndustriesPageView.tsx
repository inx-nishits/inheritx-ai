"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import {
  crossIndustryPatterns,
  industriesHero,
  industryProfiles,
} from "@/data/pages/industries";
import { PageHero } from "@/components/layout/PageHero";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function IndustriesPageView() {
  const [active, setActive] = useState(0);
  const industry = industryProfiles[active];

  return (
    <>
      <PageHero
        eyebrow={industriesHero.eyebrow}
        title={industriesHero.title}
        description={industriesHero.description}
        primaryCta={{ label: "Discuss your sector", href: "/contact" }}
        secondaryCta={{ label: "Read case studies", href: "/case-studies" }}
      />

      <section className="bg-ink py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="sticky top-16 z-20 -mx-5 border-b border-white/[0.06] bg-ink/92 px-5 py-3 backdrop-blur-xl md:static md:mx-0 md:border-0 md:bg-transparent md:px-0 md:py-0 md:backdrop-blur-none">
            <div
              role="tablist"
              className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:flex-wrap md:snap-none md:overflow-visible [&::-webkit-scrollbar]:hidden"
            >
              {industryProfiles.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  aria-selected={active === index}
                  onClick={() => setActive(index)}
                  className={cn(
                    "min-h-11 shrink-0 snap-start rounded-full border px-4 py-2.5 text-sm transition-all",
                    active === index
                      ? "border-cyan/45 bg-cyan/15 text-white"
                      : "border-white/10 text-white/45 hover:text-white/80",
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-white/10 md:mt-8 md:rounded-[2rem]">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[520px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={industry.image}
                      alt=""
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
                <div className="absolute right-5 bottom-5 left-5">
                  <div className="rounded-2xl border border-white/15 bg-ink/80 px-4 py-3 backdrop-blur-md">
                    <p className="text-[11px] tracking-[0.16em] text-cyan uppercase">
                      Signal outcome
                    </p>
                    <p className="font-display mt-1 text-2xl text-white">
                      {industry.metric}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-ink-soft p-6 sm:p-8 md:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={industry.name + "-body"}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="font-mono text-sm text-cyan">
                      {String(active + 1).padStart(2, "0")} /{" "}
                      {String(industryProfiles.length).padStart(2, "0")}
                    </p>
                    <h2 className="font-display mt-3 text-3xl text-white md:text-5xl">
                      {industry.name}
                    </h2>
                    <p className="mt-3 text-base text-cyan/90">{industry.mandate}</p>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                      <div>
                        <p className="text-[11px] tracking-[0.16em] text-white/35 uppercase">
                          Pressures
                        </p>
                        <ul className="mt-3 space-y-2">
                          {industry.pressures.map((p) => (
                            <li
                              key={p}
                              className="text-sm leading-relaxed text-white/60"
                            >
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[11px] tracking-[0.16em] text-white/35 uppercase">
                          InheritX plays
                        </p>
                        <ul className="mt-3 space-y-2">
                          {industry.plays.map((p) => (
                            <li
                              key={p}
                              className="flex gap-2 text-sm text-white/75"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="group mt-8 inline-flex items-center gap-2 text-sm text-cyan hover:text-white"
                    >
                      Open {industry.name} page
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

      <section className="border-t border-white/[0.06] bg-paper py-20 text-ink md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan-deep uppercase">
              Across sectors
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl md:text-5xl">
              Patterns that travel. Details that don’t.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {crossIndustryPatterns.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="h-full border-t border-ink/15 pt-6">
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
          <div className="mt-12 flex flex-wrap gap-4">
            <MagneticButton
              href="/contact"
              className="bg-ink px-6 py-3 text-white hover:bg-cyan hover:text-white"
            >
              Brief us on your industry
            </MagneticButton>
            <Link
              href="/solutions"
              className="group inline-flex items-center gap-2 text-sm text-ink/50 hover:text-ink"
            >
              Explore solutions
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
