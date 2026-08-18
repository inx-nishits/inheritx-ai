import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AuthorMeta } from "@/components/insights/AuthorMeta";
import { RichContent } from "@/components/insights/RichContent";
import { RelatedInsights } from "@/components/insights/RelatedInsights";
import { Newsletter } from "@/components/insights/Newsletter";
import { ReadingProgress } from "@/components/insights/ReadingProgress";
import { TableOfContents } from "@/components/insights/TableOfContents";
import { InsightCard } from "@/components/insights/InsightCard";
import { CtaText } from "@/components/cta/CtaText";
import { contactHref } from "@/lib/cta";
import {
  fetchAllInsightSlugs,
  fetchInsightBySlug,
} from "@/lib/insights/api";
import {
  estimateReadingMinutes,
  insightCategoryHref,
  primaryCategory,
  resolveFeatureImage,
  stripHtml,
} from "@/lib/insights/utils";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 300;

export async function generateStaticParams() {
  try {
    const slugs = await fetchAllInsightSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetchInsightBySlug(slug).catch(() => null);
  if (!data) {
    return { title: "Insight | InheritX", robots: { index: false } };
  }

  const title =
    data.post.seo_title?.trim() ||
    `${data.post.title} | InheritX Insights`;
  const description =
    data.post.seo_description?.trim() ||
    stripHtml(data.post.short_desc) ||
    stripHtml(data.post.content).slice(0, 160);
  const image = resolveFeatureImage(data.post.feature_image);
  const canonical = `/insights/${slug}`;

  return {
    title,
    description,
    keywords: data.post.seo_keyword || undefined,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: "article",
      url: canonical,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: { index: true, follow: true },
  };
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = await fetchInsightBySlug(slug).catch(() => null);
  if (!data) notFound();

  const { post, related, featuredSidebar, categories } = data;
  const category = primaryCategory(post.category);
  const image = resolveFeatureImage(post.feature_image);
  const readingMinutes = estimateReadingMinutes(post.content);
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://www.inheritx.com";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description:
      post.seo_description || stripHtml(post.content).slice(0, 160),
    image: [image.startsWith("http") ? image : `${siteUrl}${image}`],
    author: post.author
      ? { "@type": "Person", name: post.author }
      : undefined,
    datePublished: post.post_date,
    dateModified: post.post_date,
    mainEntityOfPage: `${siteUrl}/insights/${slug}`,
    publisher: {
      "@type": "Organization",
      name: "InheritX",
      url: siteUrl,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Insights",
        item: `${siteUrl}/insights`,
      },
      ...(category
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: category.name,
              item: `${siteUrl}${insightCategoryHref(category.slug)}`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: post.title,
              item: `${siteUrl}/insights/${slug}`,
            },
          ]
        : [
            {
              "@type": "ListItem",
              position: 2,
              name: post.title,
              item: `${siteUrl}/insights/${slug}`,
            },
          ]),
    ],
  };

  return (
    <>
      <Header />
      <main className="flex-1 overflow-x-hidden bg-ink">
        <ReadingProgress />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        <section className="relative overflow-hidden border-b border-white/[0.06] pt-24 pb-8 md:pt-36 md:pb-14">
          <div className="noise-overlay" />
          <div className="pointer-events-none absolute inset-0 editorial-grid opacity-25" />
          <div className="relative mx-auto max-w-page px-4 sm:px-5 md:px-8">
            <Link
              href="/insights"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-white/45 transition-colors hover:text-white"
            >
              <ArrowLeft size={14} className="shrink-0" />
              Back to insights
            </Link>
            <div className="mt-6 max-w-3xl md:mt-8">
              <AuthorMeta
                author={post.author}
                date={post.post_date}
                readingMinutes={readingMinutes}
                category={category}
              />
              <h1 className="font-display mt-4 break-words text-[1.65rem] leading-[1.15] tracking-[-0.03em] text-white sm:text-[2rem] md:mt-5 md:text-5xl lg:text-6xl">
                {post.title}
              </h1>
            </div>
          </div>
        </section>

        <section className="bg-ink">
          <div className="relative mx-auto max-w-page sm:px-5 md:px-8">
            <div className="overflow-hidden border-y border-white/10 bg-ink-soft sm:rounded-2xl sm:border md:rounded-b-[1.75rem] md:rounded-t-none md:border-t-0">
              {image.startsWith("http") ? (
                // Remote CMS assets must keep intrinsic size — stretching 330–512px
                // sources to the 1440px shell is what made the hero look blurry.
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={image}
                  alt=""
                  className="mx-auto block h-auto w-auto max-w-full"
                />
              ) : (
                <Image
                  src={image}
                  alt=""
                  width={1600}
                  height={900}
                  priority
                  className="mx-auto block h-auto w-auto max-w-full object-contain"
                  sizes="(max-width: 768px) 100vw, 1440px"
                />
              )}
            </div>
          </div>
        </section>

        <section className="bg-ink py-8 sm:py-12 md:py-16">
          <div className="mx-auto grid max-w-page gap-8 px-4 sm:px-5 lg:grid-cols-[minmax(0,1fr)_minmax(240px,280px)] lg:gap-12 md:px-8">
            {/* Mobile TOC first, then article */}
            <div className="min-w-0 space-y-6 lg:col-start-1 lg:row-start-1">
              <div className="lg:hidden">
                <TableOfContents html={post.content} variant="mobile" />
              </div>

              <article id="insight-article" className="min-w-0 overflow-x-clip">
                <RichContent html={post.content} />

                {post.cta_content ? (
                  <div className="mt-10 rounded-[1.5rem] border border-cyan/25 bg-cyan/[0.06] p-5 sm:mt-12 sm:rounded-[1.75rem] sm:p-6 md:p-8">
                    <RichContent
                      html={post.cta_content}
                      className="text-white/80"
                    />
                    <div className="mt-6">
                      <CtaText
                        href={contactHref("strategy")}
                        location="insight"
                        intent="strategy"
                        pattern="insight-inline"
                      >
                        Talk to an architect about this
                      </CtaText>
                    </div>
                  </div>
                ) : (
                  <div className="mt-10 border-t border-white/[0.08] pt-6">
                    <CtaText
                      href={contactHref("strategy")}
                      location="insight"
                      intent="strategy"
                      pattern="insight-inline"
                    >
                      Talk to an architect about this
                    </CtaText>
                  </div>
                )}

                <div className="mt-8 flex flex-wrap gap-3 border-t border-white/[0.08] pt-6 sm:mt-10 sm:pt-8">
                  <p className="w-full text-[11px] tracking-[0.2em] text-white/35 uppercase">
                    Share
                  </p>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${siteUrl}/insights/${slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-4 py-2 text-sm text-white/55 transition-colors hover:border-cyan/40 hover:text-white"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${siteUrl}/insights/${slug}`)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-4 py-2 text-sm text-white/55 transition-colors hover:border-cyan/40 hover:text-white"
                  >
                    X
                  </a>
                </div>
              </article>
            </div>

            <aside className="min-w-0 space-y-5 lg:sticky lg:top-28 lg:col-start-2 lg:row-start-1 lg:self-start lg:space-y-6">
              <div className="hidden lg:block">
                <TableOfContents html={post.content} variant="desktop" />
              </div>

              {featuredSidebar.length ? (
                <div className="rounded-[1.25rem] border border-white/10 bg-ink-soft/80 p-4 sm:rounded-[1.5rem] sm:p-5">
                  <p className="text-[11px] tracking-[0.2em] text-cyan uppercase">
                    Featured
                  </p>
                  <div className="mt-4 space-y-3">
                    {featuredSidebar.slice(0, 4).map((item) => (
                      <InsightCard
                        key={item.slug}
                        insight={item}
                        variant="compact"
                      />
                    ))}
                  </div>
                </div>
              ) : null}

              {categories.length ? (
                <div className="rounded-[1.25rem] border border-white/10 bg-ink-soft/80 p-4 sm:rounded-[1.5rem] sm:p-5">
                  <p className="text-[11px] tracking-[0.2em] text-cyan uppercase">
                    Topics
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {categories.slice(0, 10).map((cat) => (
                      <Link
                        key={cat.slug}
                        href={insightCategoryHref(cat.slug)}
                        className="inline-flex min-h-9 max-w-full items-center rounded-full border border-white/10 px-3 py-1.5 text-xs break-words text-white/45 transition-colors hover:border-cyan/40 hover:text-cyan"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}

              <CtaText
                href="/solutions"
                location="insight"
                pattern="text-explore"
                className="text-white/45 hover:text-white"
              >
                Explore AI solutions
              </CtaText>
            </aside>
          </div>
        </section>

        <RelatedInsights insights={related} />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
