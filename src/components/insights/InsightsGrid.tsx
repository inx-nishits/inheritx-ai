import type { InsightCard } from "@/lib/insights/types";
import { InsightsMasonry } from "@/components/insights/InsightsMasonry";
import { Reveal } from "@/components/ui/Reveal";

type InsightsGridProps = {
  insights: InsightCard[];
  title?: string;
  eyebrow?: string;
};

export function InsightsGrid({
  insights,
  title = "Latest insights",
  eyebrow = "Library",
}: InsightsGridProps) {
  if (!insights.length) return null;

  return (
    <section className="border-t border-white/[0.06] bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-page px-5 md:px-8">
        <Reveal>
          <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
            {eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl text-white md:text-4xl">
            {title}
          </h2>
        </Reveal>
        <InsightsMasonry insights={insights} className="mt-10" priorityCount={3} />
      </div>
    </section>
  );
}
