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
import { cn } from "@/lib/cn";

type InsightCardProps = {
  insight: InsightCard;
  className?: string;
  priority?: boolean;
  variant?: "default" | "compact";
};

function InsightImage({
  src,
  priority,
  sizes,
  className,
}: {
  src: string;
  priority?: boolean;
  sizes: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt=""
      width={1600}
      height={900}
      priority={priority}
      unoptimized={src.startsWith("http")}
      className={cn("block h-auto w-full", className)}
      sizes={sizes}
    />
  );
}

export function InsightCard({
  insight,
  className,
  priority = false,
  variant = "default",
}: InsightCardProps) {
  const category = primaryCategory(insight.category);
  const image = resolveFeatureImage(insight.feature_image);
  const href = insightHref(insight.slug);

  if (variant === "compact") {
    return (
      <Link
        href={href}
        className={cn(
          "group flex gap-4 border-b border-white/[0.08] py-4 transition-colors last:border-b-0",
          className,
        )}
      >
        <div className="w-[5.5rem] shrink-0 overflow-hidden rounded-xl border border-white/10 sm:w-28">
          <InsightImage src={image} sizes="112px" />
        </div>
        <div className="min-w-0 flex-1 self-center">
          {category ? (
            <p className="font-mono text-[10px] tracking-[0.16em] text-cyan uppercase">
              {category.name}
            </p>
          ) : null}
          <p className="mt-1.5 line-clamp-2 text-sm font-medium leading-snug text-white transition-colors group-hover:text-cyan">
            {insight.title}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-soft transition-[border-color,box-shadow] duration-300 hover:border-cyan/40 hover:shadow-[0_0_40px_rgba(0,190,212,0.08)]",
        className,
      )}
    >
      <Link href={href} className="block overflow-hidden leading-none">
        <InsightImage
          src={image}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="align-top"
        />
      </Link>

      <div className="relative px-6 py-6 md:px-7 md:py-7">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {category ? (
            <Link
              href={insightCategoryHref(category.slug)}
              className="font-mono text-[10px] tracking-[0.18em] text-cyan uppercase transition-colors hover:text-white"
            >
              {category.name}
            </Link>
          ) : (
            <span className="font-mono text-[10px] tracking-[0.18em] text-white/35 uppercase">
              Insight
            </span>
          )}
          {insight.post_date ? (
            <>
              <span className="text-white/20" aria-hidden>
                /
              </span>
              <time className="text-xs text-white/40">{insight.post_date}</time>
            </>
          ) : null}
        </div>

        <Link href={href} className="mt-3 block">
          <h3 className="font-display text-[1.35rem] leading-[1.15] tracking-[-0.02em] text-white transition-colors group-hover:text-cyan md:text-2xl">
            {insight.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/50">
            {excerptFrom(insight)}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan">
            Read insight
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </Link>
      </div>
    </article>
  );
}
