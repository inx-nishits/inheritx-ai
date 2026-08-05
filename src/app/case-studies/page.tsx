import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  CaseStudiesCTA,
  CaseStudiesHero,
  CaseStudiesListing,
} from "@/components/case-studies/CaseStudiesPage";

export const metadata: Metadata = {
  title: "Case studies — InheritX AI",
  description:
    "Measured enterprise AI outcomes—AI/ML, agentic systems, computer vision, and platforms—from InheritX production engagements.",
};

export default function CaseStudiesRoute() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <CaseStudiesHero />
        <CaseStudiesListing />
        <CaseStudiesCTA />
      </main>
      <Footer />
    </>
  );
}
