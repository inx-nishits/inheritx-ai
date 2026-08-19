import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  CaseStudiesCTA,
  CaseStudiesHero,
  CaseStudiesListing,
} from "@/components/case-studies/CaseStudiesPage";

export const metadata: Metadata = {
  title: "Case Studies | InheritX",
  description:
    "Measured enterprise AI outcomes—AI/ML, agentic systems, computer vision, and platforms—from InheritX production engagements.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies | InheritX",
    description:
      "Measured enterprise AI outcomes—AI/ML, agentic systems, computer vision, and platforms—from InheritX production engagements.",
    type: "website",
    url: "/case-studies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | InheritX",
    description:
      "Measured enterprise AI outcomes—AI/ML, agentic systems, computer vision, and platforms—from InheritX production engagements.",
  },
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
