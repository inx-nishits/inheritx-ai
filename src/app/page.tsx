import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TrustedBy } from "@/components/home/TrustedBy";
import { TrustBar } from "@/components/home/TrustBar";
import { ChooseYourPath } from "@/components/home/ChooseYourPath";
import { FeaturedCaseStudy } from "@/components/home/FeaturedCaseStudy";
import { Capabilities } from "@/components/home/Capabilities";
import { MidPageCTA } from "@/components/home/MidPageCTA";
import { TransformationJourney } from "@/components/home/TransformationJourney";
import { Solutions } from "@/components/home/Solutions";
import { Industries } from "@/components/home/Industries";
import { TechStack } from "@/components/home/TechStack";
import { WhyInheritX } from "@/components/home/WhyInheritX";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <TrustBar />
        <ChooseYourPath />
        <FeaturedCaseStudy />
        <Capabilities />
        <MidPageCTA />
        <TransformationJourney />
        <Solutions />
        <Industries />
        <TechStack />
        <WhyInheritX />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
