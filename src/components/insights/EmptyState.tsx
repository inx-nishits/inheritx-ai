import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { MagneticButton } from "@/components/ui/MagneticButton";

export function EmptyState({
  title = "No insights found",
  description = "Try another topic or return to the full Insights library.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-ink-soft px-6 py-16 text-center md:px-10">
      <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">Insights</p>
      <h2 className="font-display mt-3 text-3xl text-white md:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
        {description}
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <MagneticButton
          href="/insights"
          className="bg-cyan px-6 py-3 text-white hover:bg-white hover:text-ink"
        >
          Browse all insights
        </MagneticButton>
        <Link
          href="/contact?intent=strategy"
          className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white"
        >
          Talk to an architect
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  );
}
