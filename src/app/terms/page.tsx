import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalPageView } from "@/components/pages/LegalPageView";
import { termsHero, termsSections, termsUpdated } from "@/data/pages/terms";

export const metadata: Metadata = {
  title: "Terms of Use | InheritX",
  description:
    "Terms governing use of InheritX websites and publicly available materials.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Use | InheritX",
    description:
      "Terms governing use of InheritX websites and publicly available materials.",
    type: "website",
    url: "/terms",
  },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <LegalPageView
          eyebrow={termsHero.eyebrow}
          title={termsHero.title}
          description={termsHero.description}
          updated={termsUpdated}
          sections={termsSections}
        />
      </main>
      <Footer />
    </>
  );
}
