import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InsightsHero } from "@/components/insights/InsightsHero";
import { InsightsSearch } from "@/components/insights/Search";
import { Newsletter } from "@/components/insights/Newsletter";
import { ErrorState } from "@/components/insights/ErrorState";
import { InsightCard } from "@/components/insights/InsightCard";
import {
  fetchInsightsByCategory,
  fetchInsightsListing,
} from "@/lib/insights/api";
import { isEnterpriseInsightCategory } from "@/lib/insights/categories";

type Props = {
  params: Promise<{ category_slug: string }>;
  searchParams: Promise<{ page?: string }>;
};

export const revalidate = 300;

export async function generateStaticParams() {
  try {
    const listing = await fetchInsightsListing();
    return listing.categories.map((c) => ({
      category_slug: c.slug,
    }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { category_slug } = await params;
  const query = await searchParams;
  const page = Math.max(1, Number(query.page) || 1);
  const enterprise = isEnterpriseInsightCategory(category_slug);

  if (!enterprise) {
    return {
      title: "Insights | InheritX",
      robots: { index: false, follow: false },
    };
  }

  try {
    const data = await fetchInsightsByCategory(category_slug, 1);
    if (!data.categoryName) {
      return { title: "Insights Category | InheritX", robots: { index: false } };
    }
    const title = `${data.categoryName} Insights | InheritX`;
    const description = `Enterprise AI insights on ${data.categoryName}—production perspectives from InheritX.`;
    return {
      title,
      description,
      alternates: { canonical: `/insights/category/${category_slug}` },
      openGraph: {
        title,
        description,
        type: "website",
        url: `/insights/category/${category_slug}`,
      },
      robots: { index: page === 1, follow: true },
    };
  } catch {
    return {
      title: "Insights Category | InheritX",
      robots: { index: false },
    };
  }
}

export default async function InsightCategoryPage({
  params,
  searchParams,
}: Props) {
  const { category_slug } = await params;
  const query = await searchParams;
  const page = Math.max(1, Number(query.page) || 1);

  if (!isEnterpriseInsightCategory(category_slug)) {
    redirect("/insights");
  }

  let data;
  try {
    data = await fetchInsightsByCategory(category_slug, page);
  } catch {
    return (
      <>
        <Header />
        <main className="flex-1 bg-ink">
          <InsightsHero title="Insights by topic." />
          <div className="mx-auto max-w-page px-5 py-16 md:px-8">
            <ErrorState title="Category unavailable" />
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (page === 1 && !data.posts.length && !data.categoryName) {
    notFound();
  }

  const totalPages = data.pagination?.total_pages ?? 1;

  return (
    <>
      <Header />
      <main className="flex-1">
        <InsightsHero
          title={`${data.categoryName}.`}
          description={`Enterprise AI insights in ${data.categoryName}—for technical leaders and buyers industrializing intelligence.`}
        />

        <InsightsSearch
          insights={data.posts}
          categories={data.categories}
          activeCategorySlug={category_slug}
          eyebrow={data.categoryName}
          title={`Latest in ${data.categoryName}`}
        />

        {totalPages > 1 ? (
          <nav
            aria-label="Category pagination"
            className="border-t border-white/[0.06] bg-ink py-10"
          >
            <div className="mx-auto flex max-w-page items-center justify-center gap-3 px-5 md:px-8">
              {page > 1 ? (
                <Link
                  href={`/insights/category/${category_slug}?page=${page - 1}`}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/60 hover:border-cyan/40 hover:text-white"
                >
                  Previous
                </Link>
              ) : null}
              <span className="font-mono text-xs text-white/35">
                {page} / {totalPages}
              </span>
              {page < totalPages ? (
                <Link
                  href={`/insights/category/${category_slug}?page=${page + 1}`}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/60 hover:border-cyan/40 hover:text-white"
                >
                  Next
                </Link>
              ) : null}
            </div>
          </nav>
        ) : null}

        {data.featuredSidebar.length ? (
          <section className="border-t border-white/[0.06] bg-ink-soft py-16 md:py-20">
            <div className="mx-auto max-w-page px-5 md:px-8">
              <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
                Featured
              </p>
              <h2 className="font-display mt-3 text-3xl text-white md:text-4xl">
                More to explore
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {data.featuredSidebar.slice(0, 4).map((item) => (
                  <InsightCard key={item.slug} insight={item} variant="compact" />
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
