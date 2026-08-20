"use client";

import { whyPoints } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const cardAccents = [
  {
    border: "border-cyan/15",
    bg: "bg-gradient-to-br from-cyan/[0.04] via-paper to-paper",
    glow: "bg-[radial-gradient(ellipse_at_100%_0%,rgba(0,190,212,0.07),transparent_58%)]",
  },
  {
    border: "border-cyan-deep/12",
    bg: "bg-gradient-to-br from-[rgba(8,145,168,0.04)] via-paper to-paper",
    glow: "bg-[radial-gradient(ellipse_at_0%_100%,rgba(8,145,168,0.06),transparent_55%)]",
  },
  {
    border: "border-cyan/12",
    bg: "bg-gradient-to-tr from-paper via-cyan/[0.03] to-[rgba(0,190,212,0.04)]",
    glow: "bg-[radial-gradient(ellipse_at_80%_80%,rgba(0,190,212,0.06),transparent_52%)]",
  },
  {
    border: "border-cyan-deep/15",
    bg: "bg-gradient-to-bl from-paper via-[rgba(8,145,168,0.03)] to-cyan/[0.04]",
    glow: "bg-[radial-gradient(ellipse_at_20%_0%,rgba(0,190,212,0.07),transparent_55%)]",
  },
] as const;

export function WhyInheritX() {
  return (
    <section id="why" className="relative overflow-hidden bg-paper py-10 text-ink md:py-12">
      <div className="editorial-grid-light pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -top-16 right-0 h-[280px] w-[280px] rounded-full bg-cyan/[0.1] blur-[90px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[240px] w-[240px] rounded-full bg-cyan-deep/[0.07] blur-[80px]" />

      <div className="relative mx-auto max-w-page px-5 md:px-8">
        <div>
          <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
            Why InheritX
          </p>
          <Reveal className="overflow-visible">
            <h2 className="font-display mt-2 max-w-none overflow-visible text-[2rem] leading-[1.25] md:text-5xl lg:text-[3.25rem]">
              <span className="block text-ink">
                We don&apos;t sell software projects.
              </span>
              <span className="mt-1 block overflow-visible bg-gradient-to-r from-cyan-deep via-cyan to-[#067a8f] bg-clip-text pb-1 font-semibold leading-[1.25] text-transparent">
                We engineer enterprise AI you own.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-2.5 w-full text-[15px] leading-relaxed text-ink/55 md:text-base">
              Named architects accountable from blueprint through handover,
              systems your board can fund and your CTO can operate.
            </p>
          </Reveal>
        </div>

        <div className="mt-7 grid gap-3 md:mt-8 md:grid-cols-2 md:gap-4">
          {whyPoints.map((point, index) => {
            const accent = cardAccents[index % cardAccents.length];

            return (
              <Reveal key={point.title} delay={index * 0.05}>
                <article
                  className={cn(
                    "group relative h-full overflow-hidden rounded-[1.5rem] border px-5 py-4 transition-[border-color,box-shadow] duration-500 md:rounded-[1.75rem] md:px-7 md:py-5",
                    accent.border,
                    accent.bg,
                    "hover:border-cyan/25 hover:shadow-[0_18px_50px_rgba(0,145,168,0.08)]",
                  )}
                >
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-0 opacity-60",
                      accent.glow,
                    )}
                  />
                  <div className="relative">
                    <span className="inline-flex h-7 items-center rounded-full border border-cyan/25 bg-cyan-soft px-2.5 font-mono text-[11px] text-cyan-deep">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display mt-2 text-xl text-ink transition-colors duration-300 group-hover:text-cyan-deep md:text-2xl">
                      {point.title}
                    </h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-ink/55 md:text-[0.9375rem]">
                      {point.copy}
                    </p>
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-deep via-cyan/45 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
