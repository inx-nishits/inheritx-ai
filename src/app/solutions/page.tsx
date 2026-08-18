import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SolutionsPageView } from "@/components/pages/SolutionsPageView";

export const metadata: Metadata = {
  title: "Solutions | InheritX",
  description:
    "AI/ML engineering, AI Agents, and AI DevOps—plus transformation, consulting, and dedicated AI squads for enterprise buyers.",
};

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <SolutionsPageView />
      </main>
      <Footer />
    </>
  );
}
