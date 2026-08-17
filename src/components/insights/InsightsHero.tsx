import { PageHero } from "@/components/layout/PageHero";
import { CTA_LABELS } from "@/data/cta/copy";
import { contactHref } from "@/lib/cta";

export function InsightsHero({
  title = "Enterprise AI Insights.",
  description = "Perspectives on agentic systems, generative AI, LLMOps, governance, and production architecture—for Fortune 500 technical and executive buyers.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <PageHero
      eyebrow="Insights"
      title={title}
      description={description}
      primaryCta={{
        label: CTA_LABELS.talkToArchitect,
        href: contactHref("strategy"),
      }}
      secondaryCta={{
        label: CTA_LABELS.exploreSolutions,
        href: "/solutions",
      }}
      primaryVariant="text"
    />
  );
}
