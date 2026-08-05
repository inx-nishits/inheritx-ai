import type { InsightCard } from "@/lib/insights/types";
import { InsightCard as Card } from "@/components/insights/InsightCard";
import { Reveal } from "@/components/ui/Reveal";

export function RelatedInsights({ insights }: { insights: InsightCard[] }) {
  if (!insights.length) return null;

  return (
    <section className="border-t border-white/[0.06] bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <Reveal>
          <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
            Continue reading
          </p>
          <h2 className="font-display mt-3 text-3xl text-white md:text-4xl">
            Related insights
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {insights.slice(0, 3).map((insight, index) => (
            <Reveal key={insight.slug || String(insight.id)} delay={index * 0.04}>
              <Card insight={insight} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
