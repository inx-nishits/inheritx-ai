import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { InsightCard } from "@/lib/insights/types";
import {
  excerptFrom,
  insightCategoryHref,
  insightHref,
  primaryCategory,
  resolveFeatureImage,
} from "@/lib/insights/utils";
import { CtaText } from "@/components/cta/CtaText";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Spotlight featured insight - editorial band below the library grid.
 * Image is shown at its native ratio with no overlays or letterboxing.
 */
export function FeaturedInsight({ insight }: { insight: InsightCard }) {
  const category = primaryCategory(insight.category);
  const image = resolveFeatureImage(insight.feature_image);
  const href = insightHref(insight.slug);

  return (
    <section
      aria-labelledby="featured-insight-heading"
      className="relative overflow-hidden border-t border-white/[0.06] bg-ink-soft"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,190,212,0.1),transparent_50%)]" />
      <div className="noise-overlay opacity-30" />

      <div className="relative mx-auto max-w-page px-5 py-16 md:px-8 md:py-20">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-sm text-cyan">01</span>
            <span className="text-white/20">/</span>
            <p className="text-[11px] tracking-[0.28em] text-cyan uppercase">
              Featured insight
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid items-start gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
          <Reveal delay={0.05}>
            <Link
              href={href}
              className="group relative block aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink transition-colors hover:border-cyan/35"
            >
              <Image
                src={image}
                alt=""
                fill
                priority
                unoptimized={image.startsWith("http")}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center lg:min-h-[280px] lg:py-4">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                {category ? (
                  <Link
                    href={insightCategoryHref(category.slug)}
                    className="font-mono text-[11px] tracking-[0.18em] text-cyan uppercase transition-colors hover:text-white"
                  >
                    {category.name}
                  </Link>
                ) : (
                  <span className="font-mono text-[11px] tracking-[0.18em] text-cyan uppercase">
                    Insight
                  </span>
                )}
                {insight.post_date ? (
                  <>
                    <span className="text-white/20">/</span>
                    <time className="text-sm text-white/45">
                      {insight.post_date}
                    </time>
                  </>
                ) : null}
              </div>

              <h2
                id="featured-insight-heading"
                className="font-display mt-4 text-[1.75rem] leading-[1.12] tracking-[-0.03em] text-white md:text-4xl lg:text-[2.5rem]"
              >
                <Link href={href} className="transition-colors hover:text-cyan">
                  {insight.title}
                </Link>
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/50 md:text-base">
                {excerptFrom(insight, 220)}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <CtaText href={href} location="insight" pattern="text-explore">
                  Read insight
                </CtaText>
                {category ? (
                  <Link
                    href={insightCategoryHref(category.slug)}
                    className="inline-flex min-h-12 items-center gap-1.5 text-sm font-medium text-white/45 transition-colors hover:text-white"
                  >
                    More in {category.name}
                    <ArrowUpRight size={14} />
                  </Link>
                ) : null}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
