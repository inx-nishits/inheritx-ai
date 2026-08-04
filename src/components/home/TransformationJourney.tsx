"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { journey } from "@/data/content";
import { Reveal, TextReveal } from "@/components/ui/Reveal";

export function TransformationJourney() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="journey"
      ref={ref}
      className="relative bg-paper text-ink"
    >
      <div className="editorial-grid-light absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-[1400px] gap-16 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-[11px] tracking-[0.24em] text-cyan-deep uppercase">
            AI Transformation Journey
          </p>
          <TextReveal
            text="From strategy call to AI systems you own."
            className="font-display mt-5 text-4xl leading-[1.15] md:text-6xl"
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/55">
              Discover why AI matters now, architect for scale, deploy into your
              private cloud, and industrialize across departments—with IP
              handover built in.
            </p>
          </Reveal>
        </div>

          <div className="relative">
            <div className="absolute top-3 bottom-3 left-[15px] w-px bg-ink/10 md:left-[19px]" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-3 left-[15px] w-px origin-top bg-cyan md:left-[19px]"
            />

            <ol className="space-y-10 md:space-y-14">
              {journey.map((item, index) => (
                <Reveal key={item.step} delay={index * 0.05}>
                  <li className="relative grid grid-cols-[40px_1fr] gap-5 md:grid-cols-[48px_1fr] md:gap-8">
                    <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-ink/15 bg-paper text-[11px] font-medium md:h-10 md:w-10">
                      {item.step}
                    </div>
                    <div className="rounded-[1.75rem] border border-ink/10 bg-white/70 p-6 shadow-[0_20px_60px_rgba(11,18,32,0.04)] backdrop-blur-sm md:p-8">
                      <h3 className="font-display text-3xl md:text-4xl">
                        {item.title}
                      </h3>
                      <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/55 md:text-base">
                        {item.copy}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
      </div>
    </section>
  );
}
