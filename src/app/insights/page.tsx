import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InsightsHero } from "@/components/insights/InsightsHero";
import { FeaturedInsight } from "@/components/insights/FeaturedInsight";
import { InsightsSearch } from "@/components/insights/Search";
import { PopularInsights } from "@/components/insights/PopularInsights";
import { Newsletter } from "@/components/insights/Newsletter";
import { EmptyState } from "@/components/insights/EmptyState";
import { ErrorState } from "@/components/insights/ErrorState";
import { fetchInsightsListing } from "@/lib/insights/api";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Enterprise AI Insights | InheritX",
  description:
    "Enterprise AI insights on agentic systems, generative AI, RAG, LLMOps, governance, and production architecture from InheritX.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Enterprise AI Insights | InheritX",
    description:
      "Perspectives for Fortune 500 technical and executive buyers shipping production AI.",
    type: "website",
    url: "/insights",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise AI Insights | InheritX",
    description:
      "Perspectives for Fortune 500 technical and executive buyers shipping production AI.",
  },
  robots: { index: true, follow: true },
};

export default async function InsightsPage() {
  let listing;
  try {
    listing = await fetchInsightsListing();
  } catch {
    return (
      <>
        <Header />
        <main className="flex-1 bg-ink">
          <InsightsHero />
          <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8">
            <ErrorState />
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const latest = listing.latest.filter(
    (item) => item.slug !== listing.featured?.slug,
  );

  return (
    <>
      <Header />
      <main className="flex-1">
        <InsightsHero />

        {latest.length ? (
          <InsightsSearch
            insights={latest}
            categories={listing.categories}
            title="Latest enterprise AI insights"
          />
        ) : !listing.featured ? (
          <section className="bg-ink py-16 md:py-20">
            <div className="mx-auto max-w-[1400px] px-5 md:px-8">
              <EmptyState />
            </div>
          </section>
        ) : (
          <InsightsSearch
            insights={[]}
            categories={listing.categories}
            title="Latest enterprise AI insights"
          />
        )}

        {listing.featured ? (
          <FeaturedInsight insight={listing.featured} />
        ) : null}

        <PopularInsights insights={listing.popular} />

        <section className="border-t border-white/[0.06] bg-ink py-12 md:py-14">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 md:flex-row md:items-center md:justify-between md:px-8">
            <p className="text-sm text-white/45">
              Looking for a production AI roadmap, not just reading?
            </p>
            <Link
              href="/contact?intent=strategy"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan hover:text-white"
            >
              Book an AI Strategy Call
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
