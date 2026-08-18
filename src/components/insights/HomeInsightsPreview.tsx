import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { InsightCard } from "@/lib/insights/types";
import {
  excerptFrom,
  insightHref,
  primaryCategory,
  resolveFeatureImage,
} from "@/lib/insights/utils";
import { InsightsMasonry } from "@/components/insights/InsightsMasonry";
import { Reveal, TextReveal } from "@/components/ui/Reveal";

export function HomeInsightsPreview({
  featured,
  latest,
}: {
  featured: InsightCard | null;
  latest: InsightCard[];
}) {
  const cards = latest.filter((c) => c.slug !== featured?.slug).slice(0, 3);
  if (!featured && cards.length === 0) return null;

  const category = featured ? primaryCategory(featured.category) : null;
  const image = featured
    ? resolveFeatureImage(featured.feature_image)
    : null;

  return (
    <section
      id="insights"
      className="relative overflow-hidden border-t border-white/[0.06] bg-ink"
    >
      <div className="noise-overlay opacity-40" />

      <div className="relative mx-auto max-w-page px-5 pt-16 md:px-8 md:pt-20">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.28em] text-cyan uppercase">
              Insights
            </p>
            <TextReveal
              text="Enterprise AI perspectives from production."
              className="font-display mt-3 text-[2rem] leading-[1.15] text-white md:text-5xl"
            />
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/50 md:text-base">
                Agentic systems, LLMOps, governance, and architecture—written for
                buyers who ship, not spectators.
              </p>
            </Reveal>
          </div>
          <Link
            href="/insights"
            className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-cyan/55 bg-cyan/10 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(0,190,212,0.12)] transition-colors hover:border-cyan hover:bg-cyan/20"
          >
            View all insights
            <ArrowUpRight
              size={14}
              className="shrink-0 text-cyan transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>

      {featured && image ? (
        <Reveal delay={0.08}>
          <Link
            href={insightHref(featured.slug)}
            className="group relative mt-10 block overflow-hidden"
          >
            <div className="relative">
              <Image
                src={image}
                alt=""
                width={1920}
                height={1080}
                priority
                unoptimized={image.startsWith("http")}
                className="block h-auto w-full"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-ink/45" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/15" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
            </div>

            <div className="relative z-10 -mt-20 px-5 pb-12 md:-mt-32 md:px-8 md:pb-14">
              <div className="mx-auto max-w-page">
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-cyan uppercase">
                      {category?.name ?? "Insight"}
                    </span>
                    {featured.post_date ? (
                      <>
                        <span className="text-white/25">/</span>
                        <time className="text-sm text-white/45">
                          {featured.post_date}
                        </time>
                      </>
                    ) : null}
                  </div>
                  <h3 className="font-display mt-3 text-2xl leading-[1.15] text-white md:text-4xl">
                    {featured.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55 md:text-base">
                    {excerptFrom(featured, 160)}
                  </p>
                  <span className="cta-primary mt-6 inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(0,190,212,0.22)]">
                    Read insight
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </Reveal>
      ) : null}

      {cards.length ? (
        <div className="relative mx-auto max-w-page px-5 pb-16 md:px-8 md:pb-20">
          <div className="border-t border-white/[0.06] pt-10">
            <InsightsMasonry insights={cards} />
          </div>
        </div>
      ) : (
        <div className="pb-10" />
      )}
    </section>
  );
}
