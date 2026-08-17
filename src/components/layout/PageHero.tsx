import { CtaGhost } from "@/components/cta/CtaGhost";
import { CtaPrimary } from "@/components/cta/CtaPrimary";
import { CtaProof } from "@/components/cta/CtaProof";
import { CtaText } from "@/components/cta/CtaText";
import {
  ctaPairSecondaryFamily,
  type CtaPairSecondaryFamily,
} from "@/data/cta/families";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Insights and other low-intent heroes use text instead of fill. */
  primaryVariant?: "fill" | "text";
  /** Defaults from href: contact → ghost, proof → tint, else text. */
  secondaryVariant?: CtaPairSecondaryFamily;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  primaryVariant,
  secondaryVariant,
  className,
}: PageHeroProps) {
  const resolvedPrimaryVariant =
    primaryVariant ??
    (primaryCta &&
    (primaryCta.href.includes("/contact") ||
      primaryCta.href.startsWith("mailto:"))
      ? "fill"
      : "text");
  const secondaryFamily =
    secondaryVariant ??
    ctaPairSecondaryFamily(primaryCta?.href, secondaryCta?.href);

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
            {primaryCta &&
              (resolvedPrimaryVariant === "text" ? (
                <CtaText
                  href={primaryCta.href}
                  className="sm:justify-start"
                  location="page.hero"
                  pattern="insight-inline"
                >
                  {primaryCta.label}
                </CtaText>
              ) : (
                <CtaPrimary
                  href={primaryCta.href}
                  fullWidth
                  className="sm:w-auto"
                  location="page.hero"
                  pattern="hero-pair"
                >
                  {primaryCta.label}
                </CtaPrimary>
              ))}
            {secondaryCta &&
              (secondaryFamily === "ghost" ? (
                <CtaGhost
                  href={secondaryCta.href}
                  className="sm:w-auto"
                  location="page.hero"
                  pattern="hero-pair"
                >
                  {secondaryCta.label}
                </CtaGhost>
              ) : secondaryFamily === "tint" ? (
                <CtaProof
                  href={secondaryCta.href}
                  className="sm:w-auto"
                  location="page.hero"
                  pattern="hero-pair"
                >
                  {secondaryCta.label}
                </CtaProof>
              ) : (
                <CtaText
                  href={secondaryCta.href}
                  className="sm:justify-start"
                  location="page.hero"
                >
                  {secondaryCta.label}
                </CtaText>
              ))}
          </div>
        )}
      </div>
    </section>
  );
}
