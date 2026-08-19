import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { caseStudiesPage, getCaseStudy } from "@/data/caseStudies";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CaseStudyDetailView } from "@/components/case-studies/CaseStudyDetailView";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudiesPage.map((study) => ({ slug: study.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case Studies | InheritX" };
  const title = `${study.name} | InheritX`;
  const canonical = `/case-studies/${slug}`;
  return {
    title,
    description: study.summary,
    alternates: { canonical },
    openGraph: {
      title,
      description: study.summary,
      type: "website",
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: study.summary,
    },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <CaseStudyDetailView study={study} />
      </main>
      <Footer />
    </>
  );
}
