import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { SuccessStories } from "@/components/portfolio/SuccessStories";
import {
  BusinessImpact,
  PortfolioCapabilities,
  PortfolioCTA,
} from "@/components/portfolio/PortfolioCapabilities";

export const metadata: Metadata = {
  title: "AI Portfolio | InheritX",
  description:
    "Enterprise AI capability patterns—AI/ML, agentic systems, computer vision, automation, and LLMOps—from InheritX.",
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PortfolioHero />
        <SuccessStories />
        <PortfolioGrid />
        <PortfolioCapabilities />
        <BusinessImpact />
        <PortfolioCTA />
      </main>
      <Footer />
    </>
  );
}
