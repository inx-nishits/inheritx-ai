"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { industries } from "@/data/content";
import { industryCaseLinks } from "@/data/enterpriseProof";
import { TextReveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function Industries() {
  const [active, setActive] = useState(0);
  const activeIndustry = industries[active];
  const proof = industryCaseLinks[activeIndustry.name];

  return (
    <section id="industries" className="relative bg-paper py-16 text-ink md:py-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-12 flex max-w-3xl flex-col gap-4 md:mb-14 md:max-w-none md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
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
            Browse all outcomes
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="flex h-auto flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#070b12] md:h-[560px] md:flex-row md:items-stretch md:rounded-[2rem]">
          {industries.map((industry, index) => {
            const isActive = active === index;
            return (
              <button
                key={industry.name}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
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
                  unoptimized
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
              </button>
            );
          })}
        </div>

        {proof ? (
          <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-ink/10 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-6">
            <div>
              <p className="text-[11px] tracking-[0.16em] text-ink/40 uppercase">
                {activeIndustry.name} — published outcomes
              </p>
              <p className="mt-1 text-sm text-ink/55">
                {proof.cases.length > 0
                  ? "Linked only to published case studies for this sector."
                  : "Sector page available; browse all case studies for related patterns."}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {proof.cases.map((item) => (
                <Link
                  key={item.id}
                  href={`/case-studies/${item.id}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-cyan-deep hover:text-ink"
                >
                  {item.name}
                  <ArrowUpRight size={13} />
                </Link>
              ))}
              <Link
                href={proof.sectorHref}
                className="inline-flex items-center gap-1 text-sm text-ink/55 hover:text-ink"
              >
                Sector page
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
