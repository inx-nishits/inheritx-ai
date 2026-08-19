import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPathPage, pathPages } from "@/data/pages/pathBuyer";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PathBuyerView } from "@/components/pages/PathBuyerView";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return pathPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPathPage(slug);
  if (!page) return { title: "Choose your path | InheritX" };
  const canonical = `/path/${slug}`;
  return {
    title: page.metadata.title,
    description: page.metadata.description,
    alternates: { canonical },
    openGraph: {
      title: page.metadata.title,
      description: page.metadata.description,
      type: "website",
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: page.metadata.title,
      description: page.metadata.description,
    },
  };
}

export default async function PathBuyerPage({ params }: Props) {
  const { slug } = await params;
  const page = getPathPage(slug);
  if (!page) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <PathBuyerView
          page={page}
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Choose your path", href: "/#path" },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
