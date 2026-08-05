"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useState } from "react";

import { solutions } from "@/data/content";
import { TextReveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";
import { cn } from "@/lib/cn";

export function Solutions() {
  const [active, setActive] = useState(0);
  const current = solutions[active];
  const total = solutions.length;

  const goTo = useCallback(
    (index: number) => setActive((index + total) % total),
    [total],
  );

  return (
    <section id="solutions" className="relative overflow-hidden bg-ink py-16 md:py-20">
      <div className="noise-overlay" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-10 max-w-3xl md:mb-12">
          <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
            Enterprise AI Solutions
          </p>
            <TextReveal
              text="AI systems that create measurable business outcomes."
              className="font-display mt-5 text-4xl leading-[1.15] text-white md:text-6xl"
            />
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/45 md:text-base">
              Outcome-led solution lanes mapped to enterprise mandates—from
              engineering and automation to DevOps and industry systems.
            </p>
        </div>

        <div
          role="tablist"
          aria-label="Enterprise solutions"
          className="mb-8 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:mb-10 md:flex-wrap md:snap-none md:overflow-visible [&::-webkit-scrollbar]:hidden"
        >
          {solutions.map((item, index) => (
            <button
              key={item.index}
              type="button"
              role="tab"
              aria-selected={active === index}
              onClick={() => setActive(index)}
              className={cn(
                "min-h-11 shrink-0 snap-start rounded-full border px-4 py-2.5 text-left transition-all duration-300",
                active === index
                  ? "border-cyan/50 bg-cyan/15 text-white"
                  : "border-white/10 bg-white/[0.02] text-white/50 hover:border-white/25 hover:text-white/80",
              )}
            >
              <span className="font-mono text-[10px] tracking-wider text-cyan">
                {item.index}
              </span>
              <span className="ml-2 text-sm font-medium">{item.title}</span>
            </button>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-soft">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative order-2 flex flex-col justify-between p-7 md:p-10 lg:order-1 lg:min-h-[420px] lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="font-mono text-sm text-cyan">
                    {current.index} / {String(total).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-5 text-3xl leading-tight text-white md:text-5xl">
                    {current.title}
                  </h3>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-white/60 md:mt-6 md:text-lg">
                    {current.copy}
                  </p>
                  <div className="mt-8 flex items-center gap-3 text-sm text-white/40">
                    <span className="h-2 w-2 rounded-full bg-cyan" />
                    Built for regulated enterprise environments
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-10 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                <button
                  type="button"
                  onClick={() => goTo(active - 1)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-white/70 transition-colors hover:border-cyan/40 hover:text-white"
                >
                  <ArrowLeft size={16} />
                  Previous
                </button>
                <div className="hidden items-center gap-1.5 sm:flex">
                  {solutions.map((item, index) => (
                    <button
                      key={item.index}
                      type="button"
                      onClick={() => setActive(index)}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        active === index ? "w-6 bg-cyan" : "w-1.5 bg-white/25",
                      )}
                      aria-label={item.title}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => goTo(active + 1)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm text-white transition-colors hover:border-cyan/40 hover:bg-cyan/10"
                >
                  Next
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="relative order-1 min-h-[200px] lg:order-2 lg:min-h-full">
              <VisualFrame
                src="/images/visuals/lead-solutions.png"
                alt=""
                className="absolute inset-0 rounded-none border-0"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink-soft via-ink/40 to-transparent lg:bg-gradient-to-l" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
