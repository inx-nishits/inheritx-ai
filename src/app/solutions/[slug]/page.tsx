import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getSolutionTopic,
  solutionTopics,
} from "@/data/pages/solutionTopics";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TopicLandingView } from "@/components/pages/TopicLandingView";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutionTopics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getSolutionTopic(slug);
  if (!topic) return { title: "Solutions | InheritX" };
  return {
    title: topic.metadata.title,
    description: topic.metadata.description,
  };
}

export default async function SolutionTopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = getSolutionTopic(slug);
  if (!topic) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <TopicLandingView
          topic={topic}
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
