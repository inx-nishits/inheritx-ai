import type { Metadata } from "next";

import { cultureTopic } from "@/data/pages/cultureTopic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TopicLandingView } from "@/components/pages/TopicLandingView";

export const metadata: Metadata = {
  title: cultureTopic.metadata.title,
  description: cultureTopic.metadata.description,
};

export default function CulturePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <TopicLandingView
          topic={cultureTopic}
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Our Team", href: "/team" },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
