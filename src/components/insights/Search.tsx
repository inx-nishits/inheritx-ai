"use client";

import { useMemo, useState } from "react";
import { Search as SearchIcon } from "lucide-react";

import type { InsightCard, InsightCategory } from "@/lib/insights/types";
import { CategoryTabs } from "@/components/insights/CategoryTabs";
import { EmptyState } from "@/components/insights/EmptyState";
import { InsightsMasonry } from "@/components/insights/InsightsMasonry";
import { Reveal } from "@/components/ui/Reveal";
import { stripHtml } from "@/lib/insights/utils";

type InsightsSearchProps = {
  insights: InsightCard[];
  categories?: InsightCategory[];
  activeCategorySlug?: string;
  title?: string;
  eyebrow?: string;
};

export function InsightsSearch({
  insights,
  categories = [],
  activeCategorySlug,
  title = "Latest enterprise AI insights",
  eyebrow = "Library",
}: InsightsSearchProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return insights;
    return insights.filter((item) => {
      const haystack = [
        item.title,
        item.author,
        stripHtml(item.short_desc),
        Array.isArray(item.category)
          ? item.category.map((c) => c.name).join(" ")
          : item.category?.name,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [insights, query]);

  return (
    <section className="border-t border-white/[0.06] bg-ink py-14 md:py-16">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <Reveal>
          <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
            {eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl text-white md:text-4xl">
            {query.trim() ? `Results for “${query.trim()}”` : title}
          </h2>
        </Reveal>

        {categories.length ? (
          <CategoryTabs
            categories={categories}
            activeSlug={activeCategorySlug}
            embedded
            className="mt-6"
          />
        ) : null}

        <label className="relative mt-6 block max-w-md">
          <span className="sr-only">Search insights</span>
          <SearchIcon
            size={16}
            className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-white/35"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search insights…"
            autoComplete="off"
            className="w-full rounded-full border border-white/12 bg-ink-soft py-3 pr-4 pl-11 text-sm text-white outline-none transition-colors placeholder:text-white/35 hover:border-white/20 focus:border-cyan/50"
          />
        </label>

        {filtered.length ? (
          <InsightsMasonry
            insights={filtered}
            className="mt-10"
            priorityCount={3}
          />
        ) : (
          <div className="mt-10">
            <EmptyState
              title="No matching insights"
              description="Try another keyword, or clear search to browse the full library."
            />
          </div>
        )}
      </div>
    </section>
  );
}
