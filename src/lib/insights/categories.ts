import type { InsightCard, InsightCategory } from "./types";
import { normalizeCategories } from "./utils";

/** Legacy WordPress taxonomies that read as a software/app agency. */
export const AGENCY_INSIGHT_CATEGORY_SLUGS = [
  "amazon-web-technology",
  "android-application-development",
  "angular-application-development",
  "angular-js-development",
  "app-store-optimization",
  "database",
  "digital-marketing",
  "firebase-web-technology",
  "flutter-application-development",
  "ios-app-developer-guide",
  "ios-app-development",
  "iphone-mobile-application-development",
  "mobile",
  "mobile-application-development",
  "node-js-development",
  "on-demand-app-development",
  "on-demand-mobile-apps",
  "press-release",
  "react-application-development",
  "shopify-development",
  "software-development",
  "uncategorized",
  "wearable-application-development",
  "web-design",
  "web-development",
  "wordpress-website-development",
  "xamarin-app-development",
] as const;

const AGENCY_CATEGORY_SLUGS = new Set<string>(AGENCY_INSIGHT_CATEGORY_SLUGS);

const ENTERPRISE_TOPIC =
  /artificial|intelligence|\bai\b|agent|llm|mlops|llmops|devops|security|automation|governance|machine.?learn/i;

export function isEnterpriseInsightCategory(
  slug?: string,
  name?: string,
): boolean {
  const s = (slug ?? "").toLowerCase().trim();
  if (!s || AGENCY_CATEGORY_SLUGS.has(s)) return false;
  return ENTERPRISE_TOPIC.test(`${s} ${name ?? ""}`);
}

export function filterEnterpriseCategories(
  categories: InsightCategory[],
): InsightCategory[] {
  return categories.filter((category) =>
    isEnterpriseInsightCategory(category.slug, category.name),
  );
}

export function isEnterpriseInsightCard(card: InsightCard): boolean {
  const cats = normalizeCategories(card.category);
  if (cats.some((c) => isEnterpriseInsightCategory(c.slug, c.name))) {
    return true;
  }
  return /ai|agent|llm|rag|mlops|llmops|governance|production|multimodal/i.test(
    `${card.title} ${card.slug}`,
  );
}

export function filterEnterpriseInsightCards(
  cards: InsightCard[],
): InsightCard[] {
  return cards.filter(isEnterpriseInsightCard);
}
