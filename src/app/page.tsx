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
import { TransformationJourney } from "@/components/home/TransformationJourney";
import { TechStack } from "@/components/home/TechStack";
import { ProcurementTrustStrip } from "@/components/home/ProcurementTrustStrip";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Testimonials } from "@/components/testimonials/TestimonialsSection";
import { HomeInsightsPreview } from "@/components/insights/HomeInsightsPreview";
import { fetchInsightsListing } from "@/lib/insights/api";

/**
 * Homepage story arc (enterprise buyer psychology):
 * Attention → soft trust → tech strength → convert → choose path →
 * why us → what we build → proof → sector depth → process → tech →
 * voices → thought leadership → diligence → close.
 */
export default async function Home() {
  const insights = await fetchInsightsListing().catch(() => null);

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <TrustBar />
        <MidPageCTA />
        <ChooseYourPath />
        <WhyInheritX />
        <Capabilities />
        <FeaturedCaseStudy />
        <Industries />
        <TransformationJourney />
        <TechStack />
        <Testimonials />
        {insights ? (
          <HomeInsightsPreview
            featured={insights.featured}
            latest={insights.latest}
          />
        ) : null}
        <ProcurementTrustStrip />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
