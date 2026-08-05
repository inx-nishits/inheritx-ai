"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { InsightCategory } from "@/lib/insights/types";
import { insightCategoryHref } from "@/lib/insights/utils";
import { cn } from "@/lib/cn";

type CategoryTabsProps = {
  categories: InsightCategory[];
  activeSlug?: string;
  limit?: number;
  /** When true, renders without its own section chrome (for embedding in Library). */
  embedded?: boolean;
  className?: string;
};

function prioritize(categories: InsightCategory[]) {
  return [...categories]
    .filter((c) => c.slug && c.name)
    .sort((a, b) => {
      const score = (c: InsightCategory) =>
        /artificial|intelligence|devops|technology|software|cloud|security/i.test(
          `${c.name} ${c.slug}`,
        )
          ? 0
          : 1;
      return score(a) - score(b);
    });
}

export function CategoryTabs({
  categories,
  activeSlug,
  limit = 16,
  embedded = false,
  className,
}: CategoryTabsProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const items = prioritize(categories).slice(0, limit);

  const syncArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(max > 4 && el.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    syncArrows();
    el.addEventListener("scroll", syncArrows, { passive: true });
    const ro = new ResizeObserver(syncArrows);
    ro.observe(el);
    window.addEventListener("resize", syncArrows);
    return () => {
      el.removeEventListener("scroll", syncArrows);
      ro.disconnect();
      window.removeEventListener("resize", syncArrows);
    };
  }, [syncArrows, items.length]);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.max(220, Math.floor(el.clientWidth * 0.65));
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  if (!items.length) return null;

  const tabs = (
    <div className={cn("relative", className)}>
      {!embedded ? (
        <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
          Explore by topic
        </p>
      ) : null}

      <div className={cn("flex items-center gap-2", !embedded && "mt-5")}>
        <button
          type="button"
          aria-label="Scroll topics left"
          disabled={!canLeft}
          onClick={() => scrollByDir(-1)}
          className={cn(
            "inline-flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors",
            canLeft
              ? "border-white/20 text-white hover:border-cyan/50 hover:text-cyan"
              : "pointer-events-none border-white/10 text-white/20",
          )}
        >
          <ChevronLeft size={18} />
        </button>

        <div
          ref={scrollerRef}
          className="flex min-w-0 flex-1 snap-x snap-mandatory gap-2 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <Link
            href="/insights"
            className={cn(
              "inline-flex min-h-11 shrink-0 snap-start items-center rounded-full border px-4 text-sm transition-colors",
              !activeSlug
                ? "border-cyan/40 bg-cyan-soft text-cyan"
                : "border-white/10 text-white/50 hover:border-white/25 hover:text-white/80",
            )}
          >
            All insights
          </Link>
          {items.map((category) => {
            const active = activeSlug === category.slug;
            return (
              <Link
                key={category.slug}
                href={insightCategoryHref(category.slug)}
                className={cn(
                  "inline-flex min-h-11 shrink-0 snap-start items-center rounded-full border px-4 text-sm transition-colors",
                  active
                    ? "border-cyan/40 bg-cyan-soft text-cyan"
                    : "border-white/10 text-white/50 hover:border-white/25 hover:text-white/80",
                )}
              >
                {category.name}
                {typeof category.count === "number" ? (
                  <span className="ml-2 text-white/30">{category.count}</span>
                ) : null}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Scroll topics right"
          disabled={!canRight}
          onClick={() => scrollByDir(1)}
          className={cn(
            "inline-flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors",
            canRight
              ? "border-white/20 text-white hover:border-cyan/50 hover:text-cyan"
              : "pointer-events-none border-white/10 text-white/20",
          )}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );

  if (embedded) return tabs;

  return (
    <section className="border-t border-white/[0.06] bg-ink py-10 md:py-12">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">{tabs}</div>
    </section>
  );
}
