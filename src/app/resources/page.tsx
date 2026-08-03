import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ResourcesPageView } from "@/components/pages/ResourcesPageView";

export const metadata: Metadata = {
  title: "Resources — InheritX AI",
  description:
    "Insights, briefs, playbooks, case studies, and AI portfolio resources for enterprise leaders.",
};

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ResourcesPageView />
      </main>
      <Footer />
    </>
  );
}
