"use client";

import { whyPoints } from "@/data/content";
import { Reveal, TextReveal } from "@/components/ui/Reveal";

export function WhyInheritX() {
  return (
    <section id="why" className="relative overflow-hidden bg-paper py-16 text-ink md:py-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div>
          <p className="text-[11px] tracking-[0.24em] text-cyan-deep uppercase">
            Why InheritX
          </p>
          <TextReveal
            text="We don't sell software projects. We engineer enterprise AI you own."
            className="font-display mt-3 max-w-none text-[2rem] leading-[1.15] md:text-6xl"
          />
          <Reveal delay={0.15}>
            <p className="mt-4 w-full text-[15px] leading-relaxed text-ink/55 md:text-lg">
              InheritX is an AI-native enterprise partner. We design, build, and
              industrialize AI/ML systems, agentic workforces, and AI DevOps
              platforms—with named architects accountable from blueprint through
              production LLMOps.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[1.75rem] border border-ink/10 bg-ink/10 md:mt-14 md:grid-cols-2 md:rounded-[2rem]">
          {whyPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.05}>
              <article className="h-full bg-paper px-5 py-4 md:px-8 md:py-5">
                <span className="font-mono text-xs text-cyan-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-1.5 text-xl md:mt-2 md:text-2xl">
                  {point.title}
                </h3>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink/55 md:mt-2 md:text-[0.9375rem]">
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
