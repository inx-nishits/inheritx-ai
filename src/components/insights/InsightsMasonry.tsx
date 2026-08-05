import type { InsightCard } from "@/lib/insights/types";
import { InsightCard as Card } from "@/components/insights/InsightCard";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type InsightsMasonryProps = {
  insights: InsightCard[];
  className?: string;
  priorityCount?: number;
};

/**
 * CSS column masonry — packs cards of unequal image ratios without row gaps.
 */
export function InsightsMasonry({
  insights,
  className,
  priorityCount = 0,
}: InsightsMasonryProps) {
  if (!insights.length) return null;

  return (
    <div
      className={cn(
        "columns-1 gap-5 sm:columns-2 sm:gap-6 lg:columns-3",
        className,
      )}
    >
      {insights.map((insight, index) => (
        <Reveal
          key={insight.slug || String(insight.id)}
          delay={Math.min(index, 8) * 0.04}
          y={16}
          className="mb-5 break-inside-avoid sm:mb-6"
        >
          <Card
            insight={insight}
            priority={index < priorityCount}
          />
        </Reveal>
      ))}
    </div>
  );
}
