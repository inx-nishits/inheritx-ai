"use client";

import Image from "next/image";

import { portfolioProjects } from "@/data/portfolio";
import { Reveal, TextReveal } from "@/components/ui/Reveal";

const stories = portfolioProjects.filter((p) => p.editorial).slice(0, 3);

export function SuccessStories() {
  return (
    <section className="relative overflow-hidden bg-paper py-16 text-ink md:py-20">
      <div className="editorial-grid-light absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-page px-5 md:px-8">
        <div className="mb-14 max-w-3xl md:mb-20">
          <p className="text-[11px] tracking-[0.24em] text-cyan-deep uppercase">
            Enterprise AI outcomes
          </p>
          <TextReveal
            text="How AI transforms cost, speed, and operating risk."
            className="font-display mt-5 text-4xl leading-[1.15] md:text-6xl"
          />
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink/55 md:text-base">
            Capability narratives across AI/ML, Agentic AI, and AI DevOps.
            Named client outcomes live in Case studies.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {stories.map((story, index) => {
            const reverse = index % 2 === 1;
            return (
              <Reveal key={story.id}>
                <article
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-ink/10">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                    <p className="absolute bottom-5 left-5 font-mono text-xs text-cyan">
                      {String(index + 1).padStart(2, "0")} — {story.industry}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.2em] text-cyan-deep uppercase">
                      {story.service}
                    </p>
                    <h3 className="font-display mt-4 text-3xl leading-tight md:text-5xl">
                      {story.title}
                    </h3>
                    <p className="mt-6 text-base leading-relaxed text-ink/60 md:text-lg">
                      {story.summary}
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-ink/50">
                      <span className="font-medium text-ink">The turn:</span>{" "}
                      {story.solution}
                    </p>
                    <p className="mt-8 border-l-2 border-cyan pl-4 text-lg text-cyan-deep md:text-xl">
                      {story.outcome}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
