import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-white/[0.06] bg-ink pt-24 pb-16 md:pt-36 md:pb-20",
        className,
      )}
    >
      <div className="noise-overlay" />
      <div className="pointer-events-none absolute inset-0 editorial-grid opacity-30" />
      <div className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-cyan/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
        <p className="text-[11px] tracking-[0.28em] text-cyan uppercase">
          {eyebrow}
        </p>
        <h1 className="font-display mt-3 max-w-3xl text-[2rem] leading-[1.15] text-white md:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/55 md:text-lg">
          {description}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            {primaryCta && (
              <MagneticButton
                href={primaryCta.href}
                className="min-h-12 w-full justify-center bg-cyan px-6 py-3 text-white hover:bg-white hover:text-ink sm:w-auto"
              >
                {primaryCta.label}
              </MagneticButton>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="group inline-flex min-h-12 items-center justify-center gap-2 px-1 text-sm text-white/60 transition-colors hover:text-white sm:justify-start"
              >
                {secondaryCta.label}
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
