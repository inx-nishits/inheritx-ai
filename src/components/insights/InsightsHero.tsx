import { PageHero } from "@/components/layout/PageHero";

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
      primaryCta={{ label: "Book an AI Strategy Call", href: "/contact?intent=strategy" }}
      secondaryCta={{ label: "Explore solutions", href: "/solutions" }}
    />
  );
}
