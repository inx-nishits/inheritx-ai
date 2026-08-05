/**
 * WordPress Insights API types — mapped to the live wpadmin.inheritx.com responses.
 *
 * Known live quirks (verified Phase 1):
 * - Detail uses `feturedPost` (typo), not `featuredPost`.
 * - Category listing returns `bloginfo` + `pagination`, not `recentBlog`/`singleBlog`.
 * - Detail `bloginfo` has no `post_date`; listing cards do.
 */

export type InsightCategory = {
  id?: number;
  name: string;
  slug: string;
  count?: number;
};

export type InsightCard = {
  id: number | string;
  title: string;
  slug: string;
  author?: string;
  post_date?: string;
  short_desc?: string;
  category?: InsightCategory | InsightCategory[];
  feature_image?: string | null;
};

export type InsightDetail = {
  id: number | string;
  title: string;
  slug: string;
  author?: string;
  post_date?: string;
  category?: InsightCategory | InsightCategory[];
  feature_image?: string | null;
  content: string;
  seo_title?: string;
  seo_keyword?: string;
  seo_description?: string;
  cta_content?: string;
  short_desc?: string;
};

export type InsightsListingResponse = {
  status: number | string;
  message?: string;
  singleBlog?: InsightCard | InsightCard[];
  recentBlog?: InsightCard[];
  popularPost?: InsightCard[];
  trendingPost?: InsightCard[];
  categories?: InsightCategory[];
  topics?: unknown;
};

export type InsightDetailResponse = {
  status: number | string;
  message?: string;
  bloginfo?: InsightDetail | InsightDetail[];
  relatedPost?: Array<{ id: number | string; title: string; slug: string }>;
  /** Live API typo — featured posts */
  feturedPost?: Array<{ id: number | string; title: string; slug: string }>;
  categories?: InsightCategory[];
};

export type InsightCategoryResponse = {
  status: number | string;
  message?: string;
  categoryName?: string;
  bloginfo?: InsightCard[];
  feturedPost?: Array<{ id: number | string; title: string; slug: string }>;
  categories?: InsightCategory[];
  total_post?: number;
  pagination?: {
    current_page: number;
    total_pages: number;
    total_posts: number;
    next_page: number | null;
    prev_page: number | null;
    next_page_url?: string | null;
    prev_page_url?: string | null;
  };
};

export type NormalizedListing = {
  featured: InsightCard | null;
  latest: InsightCard[];
  popular: InsightCard[];
  trending: InsightCard[];
  categories: InsightCategory[];
};

export type NormalizedDetail = {
  post: InsightDetail;
  related: InsightCard[];
  featuredSidebar: InsightCard[];
  categories: InsightCategory[];
};

export type NormalizedCategoryListing = {
  categoryName: string;
  categorySlug: string;
  posts: InsightCard[];
  featuredSidebar: InsightCard[];
  categories: InsightCategory[];
  totalPosts: number;
  pagination: InsightCategoryResponse["pagination"];
};
