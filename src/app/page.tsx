import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TrustedBy } from "@/components/home/TrustedBy";
import { TrustBar } from "@/components/home/TrustBar";
import { WhyInheritX } from "@/components/home/WhyInheritX";
import { Capabilities } from "@/components/home/Capabilities";
import { FeaturedCaseStudy } from "@/components/home/FeaturedCaseStudy";
import { MidPageCTA } from "@/components/home/MidPageCTA";
import { ChooseYourPath } from "@/components/home/ChooseYourPath";
import { Industries } from "@/components/home/Industries";
import { ProcurementTrustStrip } from "@/components/home/ProcurementTrustStrip";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Testimonials } from "@/components/testimonials/TestimonialsSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

/**
 * Homepage story arc (enterprise buyer psychology):
 * Attention → soft trust → tech strength → convert → choose path →
 * why us → what we build → proof → sector depth → process → tech →
 * voices → diligence → close.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyInheritX />
        <FeaturedCaseStudy />
        <ChooseYourPath />
        <Capabilities />
        <TrustedBy />
        <TrustBar />
        <MidPageCTA />
        <Industries />
        <Testimonials />
        <ProcurementTrustStrip />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
