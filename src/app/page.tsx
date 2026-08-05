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

/**
 * Homepage story arc (enterprise buyer psychology):
 * Attention → soft trust → sector signal → why us → what we build →
 * proof → convert → persona path → sector depth → process → tech →
 * compact diligence links → close.
 *
 * Full procurement depth lives on Contact / Security FAQ / Diligence Pack.
 * Solutions catalog lives on /solutions (avoids Capabilities duplication).
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <TrustBar />
        <WhyInheritX />
        <Capabilities />
        <FeaturedCaseStudy />
        <MidPageCTA />
        <ChooseYourPath />
        <Industries />
        <TransformationJourney />
        <TechStack />
        <ProcurementTrustStrip />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
