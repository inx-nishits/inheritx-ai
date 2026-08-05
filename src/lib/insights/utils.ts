import type { InsightCard, InsightCategory, InsightDetail } from "./types";
import { rewriteWpLinks } from "./rewriteWpLinks";

export { insightHref, insightCategoryHref, rewriteWpLinks } from "./rewriteWpLinks";

const FALLBACK_IMAGE = "/images/visuals/lead-capabilities.png";

export function asArray<T>(value: T | T[] | null | undefined): T[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export function normalizeCategories(
  value: InsightCategory | InsightCategory[] | null | undefined,
): InsightCategory[] {
  return asArray(value).filter((c) => Boolean(c?.slug) && Boolean(c?.name));
}

export function primaryCategory(
  value: InsightCategory | InsightCategory[] | null | undefined,
): InsightCategory | null {
  return normalizeCategories(value)[0] ?? null;
}

export function stripHtml(html: string | undefined | null): string {
  if (!html) return "";
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&amp;/g, "&")
    .replace(/&hellip;/g, "…")
    .replace(/\s+/g, " ")
    .trim();
}

export function estimateReadingMinutes(html: string | undefined | null): number {
  const text = stripHtml(html);
  const words = text ? text.split(/\s+/).length : 0;
  return Math.max(1, Math.ceil(words / 220));
}

export function resolveFeatureImage(
  src: string | null | undefined,
): string {
  if (!src || !src.trim()) return FALLBACK_IMAGE;
  return src;
}

export function excerptFrom(
  card: Pick<InsightCard, "short_desc" | "title">,
  max = 160,
): string {
  const raw = stripHtml(card.short_desc) || card.title;
  if (raw.length <= max) return raw;
  return `${raw.slice(0, max - 1).trim()}…`;
}

export function prepareRichHtml(html: string | undefined | null): string {
  return rewriteWpLinks(html ?? "");
}

export function withSlug(
  item: { id: number | string; title: string; slug: string },
  enrich?: InsightCard | null,
): InsightCard {
  return {
    id: item.id,
    title: item.title,
    slug: item.slug,
    author: enrich?.author,
    post_date: enrich?.post_date,
    short_desc: enrich?.short_desc,
    category: enrich?.category,
    feature_image: enrich?.feature_image ?? null,
  };
}

export function indexCardsBySlug(cards: InsightCard[]): Map<string, InsightCard> {
  const map = new Map<string, InsightCard>();
  for (const card of cards) {
    if (card.slug) map.set(card.slug, card);
  }
  return map;
}

export function detailToCard(
  detail: InsightDetail,
  slug: string,
): InsightCard {
  return {
    id: detail.id,
    title: detail.title,
    slug: detail.slug || slug,
    author: detail.author,
    post_date: detail.post_date,
    short_desc: detail.short_desc || detail.seo_description,
    category: detail.category,
    feature_image: detail.feature_image,
  };
}

export { FALLBACK_IMAGE };
