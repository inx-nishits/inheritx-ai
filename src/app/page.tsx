import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TrustedBy } from "@/components/home/TrustedBy";
import { TrustBar } from "@/components/home/TrustBar";
import { ChooseYourPath } from "@/components/home/ChooseYourPath";
import { Capabilities } from "@/components/home/Capabilities";
import { TransformationJourney } from "@/components/home/TransformationJourney";
import { Solutions } from "@/components/home/Solutions";
import { Industries } from "@/components/home/Industries";
import { TechStack } from "@/components/home/TechStack";
import { CaseStudies } from "@/components/home/CaseStudies";
import { WhyInheritX } from "@/components/home/WhyInheritX";
import { Process } from "@/components/home/Process";
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
        <Capabilities />
        <TransformationJourney />
        <Solutions />
        <Industries />
        <TechStack />
        <CaseStudies />
        <WhyInheritX />
        <Process />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
