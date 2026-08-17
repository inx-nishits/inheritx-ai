import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";
import { solutionTopics } from "@/data/pages/solutionTopics";
import { industryTopics } from "@/data/pages/industryTopics";
import { companyTopics } from "@/data/pages/companyTopics";
import { resourceTopics } from "@/data/pages/resourceTopics";
import { pathPages } from "@/data/pages/pathBuyer";
import { caseStudiesPage } from "@/data/caseStudies";
import { fetchAllInsightSlugs, fetchInsightsListing } from "@/lib/insights/api";
import { filterEnterpriseCategories } from "@/lib/insights/categories";

function loc(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/solutions",
    "/industries",
    "/company",
    "/resources",
    "/case-studies",
    "/portfolio",
    "/portfolio/agent-bank",
    "/insights",
    "/contact",
    "/careers",
    "/team",
    "/team/culture",
    "/privacy",
    "/terms",
    "/cookies",
  ].map((path) => ({
    url: loc(path || "/"),
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/insights" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/contact" ? 0.8 : 0.7,
  }));

  const topicRoutes: MetadataRoute.Sitemap = [
    ...solutionTopics.map((topic) => `/solutions/${topic.slug}`),
    ...industryTopics.map((topic) => `/industries/${topic.slug}`),
    ...companyTopics.map((topic) => `/company/${topic.slug}`),
    ...resourceTopics
      .filter((topic) => topic.slug !== "insights")
      .map((topic) => `/resources/${topic.slug}`),
    ...pathPages.map((page) => `/path/${page.slug}`),
    ...caseStudiesPage.map((study) => `/case-studies/${study.id}`),
  ].map((path) => ({
    url: loc(path),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  let insightRoutes: MetadataRoute.Sitemap = [];
  try {
    const [slugs, listing] = await Promise.all([
      fetchAllInsightSlugs(),
      fetchInsightsListing(),
    ]);
    insightRoutes = [
      ...slugs.map((slug) => ({
        url: loc(`/insights/${slug}`),
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.5,
      })),
      ...filterEnterpriseCategories(listing.categories).map((category) => ({
        url: loc(`/insights/category/${category.slug}`),
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.4,
      })),
    ];
  } catch {
    insightRoutes = [];
  }

  return [...staticRoutes, ...topicRoutes, ...insightRoutes];
}
