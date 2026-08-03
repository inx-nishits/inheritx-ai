import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SolutionsPageView } from "@/components/pages/SolutionsPageView";

export const metadata: Metadata = {
  title: "Solutions — InheritX AI",
  description:
    "Enterprise AI Solutions: governed platforms, multi-agent systems, intelligent automation, AI transformation, consulting, and Hire AI Engineers.",
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
