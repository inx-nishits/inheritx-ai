import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getIndustryTopic,
  industryTopics,
} from "@/data/pages/industryTopics";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TopicLandingView } from "@/components/pages/TopicLandingView";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industryTopics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getIndustryTopic(slug);
  if (!topic) return { title: "Industries | InheritX" };
  return {
    title: topic.metadata.title,
    description: topic.metadata.description,
  };
}

export default async function IndustryTopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = getIndustryTopic(slug);
  if (!topic) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <TopicLandingView
          topic={topic}
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Industries", href: "/industries" },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
