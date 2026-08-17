import type {
  InsightCard,
  InsightCategoryResponse,
  InsightDetailResponse,
  InsightsListingResponse,
  NormalizedCategoryListing,
  NormalizedDetail,
  NormalizedListing,
} from "./types";
import {
  asArray,
  detailToCard,
  indexCardsBySlug,
  prepareRichHtml,
  withSlug,
} from "./utils";
import {
  filterEnterpriseCategories,
  filterEnterpriseInsightCards,
} from "./categories";

const DEFAULT_WP_BASE = "https://wpadmin.inheritx.com";

function wpBase(): string {
  return (
    process.env.WP_API_BASE?.replace(/\/$/, "") ||
    process.env.NEXT_PUBLIC_WP_API_BASE?.replace(/\/$/, "") ||
    DEFAULT_WP_BASE
  );
}

async function wpFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const url = `${wpBase()}${path.startsWith("/") ? path : `/${path}`}`;
  const res = await fetch(url, {
    ...init,
    next: init?.next ?? { revalidate: 300 },
    headers: {
      Accept: "application/json",
      ...(init?.headers ?? {}),
    },
  });

  if (!res.ok) {
    throw new Error(`Insights API ${res.status} for ${path}`);
  }

  return (await res.json()) as T;
}

export async function fetchInsightsListing(): Promise<NormalizedListing> {
  const data = await wpFetch<InsightsListingResponse>("/wp-json/api/v1/inxblog");

  const latest = filterEnterpriseInsightCards(asArray(data.recentBlog));
  const popular = filterEnterpriseInsightCards(asArray(data.popularPost));
  const trending = filterEnterpriseInsightCards(asArray(data.trendingPost));
  const featuredPool = filterEnterpriseInsightCards(asArray(data.singleBlog));

  return {
    featured: featuredPool[0] ?? latest[0] ?? null,
    latest,
    popular,
    trending,
    categories: filterEnterpriseCategories(asArray(data.categories)),
  };
}

export async function fetchInsightBySlug(
  slug: string,
): Promise<NormalizedDetail | null> {
  const encoded = encodeURIComponent(slug);
  let data: InsightDetailResponse;
  try {
    data = await wpFetch<InsightDetailResponse>(
      `/wp-json/api/v1/inxblogdetails/${encoded}`,
    );
  } catch {
    return null;
  }

  const post = asArray(data.bloginfo)[0];
  if (!post?.title || !post?.content) return null;

  const listing = await fetchInsightsListing().catch(() => null);
  const enrichMap = indexCardsBySlug([
    ...(listing?.latest ?? []),
    ...(listing?.popular ?? []),
    ...(listing?.trending ?? []),
    ...(listing?.featured ? [listing.featured] : []),
  ]);

  const related = asArray(data.relatedPost).map((item) =>
    withSlug(item, enrichMap.get(item.slug)),
  );
  const featuredSidebar = asArray(data.feturedPost).map((item) =>
    withSlug(item, enrichMap.get(item.slug)),
  );

  const enrichedDate = enrichMap.get(slug)?.post_date ?? post.post_date;

  return {
    post: {
      ...post,
      slug: post.slug || slug,
      post_date: enrichedDate,
      content: prepareRichHtml(post.content),
    },
    related,
    featuredSidebar,
    categories: filterEnterpriseCategories(
      asArray(data.categories).length
        ? asArray(data.categories)
        : listing?.categories ?? [],
    ),
  };
}

export async function fetchInsightsByCategory(
  categorySlug: string,
  page = 1,
): Promise<NormalizedCategoryListing> {
  const safePage = Math.max(1, page);
  const data = await wpFetch<InsightCategoryResponse>(
    `/wp-json/api/v1/inxblog/${safePage}/?category_slug=${encodeURIComponent(categorySlug)}`,
  );

  const listing = await fetchInsightsListing().catch(() => null);
  const enrichMap = indexCardsBySlug([
    ...(listing?.latest ?? []),
    ...(listing?.popular ?? []),
    ...(listing?.trending ?? []),
  ]);

  const posts = asArray(data.bloginfo);
  const featuredSidebar = asArray(data.feturedPost).map((item) =>
    withSlug(item, enrichMap.get(item.slug)),
  );

  return {
    categoryName: data.categoryName?.trim() || "",
    categorySlug,
    posts,
    featuredSidebar,
    categories: filterEnterpriseCategories(
      asArray(data.categories).length
        ? asArray(data.categories)
        : listing?.categories ?? [],
    ),
    totalPosts: data.total_post ?? data.pagination?.total_posts ?? posts.length,
    pagination: data.pagination,
  };
}

export async function fetchAllInsightSlugs(): Promise<string[]> {
  const listing = await fetchInsightsListing();
  const set = new Set<string>();
  for (const card of [
    ...(listing.featured ? [listing.featured] : []),
    ...listing.latest,
    ...listing.popular,
    ...listing.trending,
  ]) {
    if (card.slug) set.add(card.slug);
  }

  // Pull first page of top AI-ish categories for broader static params
  const priority = listing.categories
    .filter((c) =>
      /ai|agent|llm|machine|cloud|devops|security|automation/i.test(c.slug),
    )
    .slice(0, 8);

  await Promise.all(
    priority.map(async (cat) => {
      try {
        const page = await fetchInsightsByCategory(cat.slug, 1);
        for (const post of page.posts) {
          if (post.slug) set.add(post.slug);
        }
      } catch {
        /* ignore category failures for static params */
      }
    }),
  );

  return Array.from(set);
}

export function cardKey(card: InsightCard): string {
  return String(card.slug || card.id);
}
