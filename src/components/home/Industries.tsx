"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { industries } from "@/data/content";
import { TextReveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function Industries() {
  const [active, setActive] = useState(0);

  return (
    <section id="industries" className="relative bg-paper py-16 text-ink md:py-20">
      <div className="mx-auto max-w-page px-5 md:px-8">
        <div className="mb-12 flex max-w-3xl flex-col gap-4 md:mb-14 md:max-w-none lg:flex-row lg:items-end lg:justify-between">
          <div className="w-full min-w-0 max-w-3xl">
            <p className="text-[11px] tracking-[0.24em] text-cyan-deep uppercase">
              Industries
            </p>
            <TextReveal
              text="Sector fluency. AI systems that survive regulation."
              className="font-display mt-3 text-[2rem] leading-[1.15] md:text-6xl"
            />
          </div>
          <Link
            href="/case-studies"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-cyan-deep transition-colors hover:text-ink"
          >
            View case studies
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="flex h-auto flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#070b12] md:h-[560px] md:flex-row md:items-stretch md:rounded-[2rem]">
          {industries.map((industry, index) => {
            const isActive = active === index;
            return (
              <Link
                key={industry.name}
                href={industry.href}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                className={cn(
                  "relative overflow-hidden border-white/[0.06] text-left text-white outline-none transition-[flex-grow,min-height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:min-h-0 md:h-full md:border-r md:last:border-r-0",
                  isActive
                    ? "min-h-[240px] flex-[2.6] md:min-h-0"
                    : "min-h-[72px] flex-[0.7] md:min-h-0",
                  index !== industries.length - 1 && "border-b md:border-b-0",
                )}
              >
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#070b12]/0.72" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,18,0.35)_0%,rgba(7,11,18,0.55)_40%,rgba(7,11,18,0.92)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_15%,rgba(0,190,212,0.22),transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_90%,rgba(0,80,120,0.25),transparent_50%)]" />

                <div
                  className={cn(
                    "absolute inset-0 z-10 p-4 md:p-6",
                    isActive
                      ? "flex flex-col justify-end"
                      : "flex flex-row items-center justify-between md:flex-col md:items-center md:justify-end",
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-[11px]",
                      isActive ? "text-cyan" : "mb-3 text-cyan/55 md:mb-4",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={cn(
                      "font-display leading-tight",
                      isActive
                        ? "mt-3 whitespace-normal text-3xl text-white md:whitespace-nowrap md:text-5xl"
                        : "mt-2 whitespace-normal text-xl text-white/85 md:mt-0 md:whitespace-nowrap md:text-2xl lg:[writing-mode:vertical-rl] lg:rotate-180",
                    )}
                  >
                    {industry.name}
                  </h3>
                  {isActive && industry.proof ? (
                    <p className="mt-2 text-[11px] tracking-[0.16em] text-cyan/80 uppercase">
                      {industry.proof}
                    </p>
                  ) : null}
                  <p
                    className={cn(
                      "max-w-sm text-sm leading-relaxed text-white/70 transition-opacity duration-300",
                      isActive
                        ? "mt-4 opacity-100"
                        : "pointer-events-none mt-0 h-0 overflow-hidden opacity-0",
                    )}
                  >
                    {industry.focus}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
