import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SolutionsPageView } from "@/components/pages/SolutionsPageView";

export const metadata: Metadata = {
  title: "Solutions | InheritX",
  description:
    "Production AI/ML, agents, and AI DevOps—plus transformation, consulting, and dedicated squads for enterprise buyers.",
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
