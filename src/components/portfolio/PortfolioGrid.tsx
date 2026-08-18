"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";

import {
  aiServices,
  portfolioProjects,
  type AiService,
} from "@/data/portfolio";
import { Reveal, TextReveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function PortfolioGrid() {
  const [active, setActive] = useState<AiService>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? portfolioProjects
        : portfolioProjects.filter((p) => p.service === active),
    [active],
  );

  return (
    <section id="grid" className="relative border-t border-white/[0.06] bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-page px-5 md:px-8">
        <div className="mb-8 max-w-3xl md:mb-12">
          <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
            Browse by AI services
          </p>
          <TextReveal
            text="Filter the work by capability."
            className="font-display mt-5 text-[2rem] leading-[1.15] text-white md:text-5xl"
          />
        </div>

        <Reveal>
          <div className="mb-10 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:mb-14 md:flex-wrap md:snap-none md:overflow-visible [&::-webkit-scrollbar]:hidden">
            {aiServices.map((service) => (
              <button
                key={service}
                type="button"
                onClick={() => setActive(service)}
                className={cn(
                  "inline-flex min-h-11 shrink-0 snap-start items-center justify-center rounded-full border px-4 py-2.5 text-sm tracking-wide transition-all md:min-h-0 md:py-2 md:text-xs",
                  active === service
                    ? "border-cyan/40 bg-cyan-soft text-cyan"
                    : "border-white/10 text-white/45 hover:border-white/25 hover:text-white/75",
                )}
              >
                {service}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project, index) => (
            <Reveal key={project.id} delay={(index % 6) * 0.04}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.02] transition-colors hover:border-white/20 hover:bg-white/[0.04]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-600 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/15 bg-ink/70 px-2.5 py-1 text-[10px] text-white/80 backdrop-blur-sm">
                      {project.industry}
                    </span>
                    <span className="rounded-full border border-cyan/25 bg-cyan-soft px-2.5 py-1 text-[10px] text-cyan backdrop-blur-sm">
                      {project.service}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="font-display text-2xl leading-tight text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/50">
                    {project.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 px-2 py-0.5 text-[10px] text-white/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-col items-start gap-3 border-t border-white/[0.06] pt-4 lg:flex-row lg:items-center lg:justify-between">
                    <p className="min-w-0 text-sm text-cyan">{project.impact}</p>
                    {project.href && (
                      <Link
                        href={project.href}
                        className="group/link inline-flex shrink-0 items-center gap-1.5 text-xs text-white/50 transition-colors hover:text-cyan"
                      >
                        View project
                        <ArrowUpRight
                          size={12}
                          className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
