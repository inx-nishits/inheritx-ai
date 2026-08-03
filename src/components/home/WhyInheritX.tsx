"use client";

import { whyPoints } from "@/data/content";
import { Reveal, TextReveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";

export function WhyInheritX() {
  return (
    <section id="why" className="relative overflow-hidden bg-paper py-16 text-ink md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <p className="text-[11px] tracking-[0.24em] text-cyan-deep uppercase">
              Why InheritX
            </p>
          <TextReveal
            text="We don't sell software projects. We engineer enterprise intelligence you own."
            className="font-display mt-5 text-[2rem] leading-[1.08] md:text-6xl"
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink/55 md:mt-8 md:text-lg">
              InheritX is an Enterprise AI Solutions company. We build and hand
              over—custom agents, multi-agent systems, vision, and platforms—so
              CEOs and CTOs keep the code, the models, and the data.
            </p>
          </Reveal>
          </div>

          <div className="relative grid gap-5 sm:grid-cols-[0.9fr_1.1fr] sm:items-end">
            <div className="relative mx-auto aspect-[4/5] max-h-[360px] w-full max-w-sm overflow-hidden rounded-[1.5rem] md:mx-0 md:max-h-none md:aspect-[3/4]">
              <VisualFrame
                src="/images/visuals/lead-why.png"
                alt="Why InheritX"
                tone="light"
                className="absolute inset-0"
              />
            </div>
            <div className="relative ml-0 sm:-mb-2 sm:-ml-8">
              <div className="absolute -inset-3 rounded-[2rem] bg-cyan/5 blur-2xl" />
              <blockquote className="relative rounded-[1.75rem] border border-ink/10 bg-white p-6 shadow-[0_20px_50px_rgba(11,18,32,0.06)] md:p-9">
                <p className="font-display text-xl leading-snug text-ink md:text-2xl">
                  &ldquo;The future belongs to enterprises that treat AI as
                  infrastructure—not a side project.&rdquo;
                </p>
                <footer className="mt-6 text-sm tracking-[0.12em] text-ink/40 uppercase">
                  InheritX Manifesto
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[1.75rem] border border-ink/10 bg-ink/10 md:mt-16 md:grid-cols-2 md:rounded-[2rem]">
          {whyPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.05}>
              <article className="h-full bg-paper p-6 md:p-10">
                <span className="font-mono text-xs text-cyan-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-4 text-2xl md:mt-5 md:text-3xl">
                  {point.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/55 md:mt-4 md:text-base">
                  {point.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
