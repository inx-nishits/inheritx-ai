import { CtaText } from "@/components/cta/CtaText";
import { contactHref } from "@/lib/cta";

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
        <CtaText href="/insights" location="insight" pattern="text-explore">
          Browse all insights
        </CtaText>
        <CtaText
          href={contactHref("strategy")}
          location="insight"
          intent="strategy"
          pattern="insight-inline"
        >
          Talk to an architect
        </CtaText>
      </div>
    </div>
  );
}
