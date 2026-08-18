import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalPageView } from "@/components/pages/LegalPageView";
import {
  privacyHero,
  privacySections,
  privacyUpdated,
} from "@/data/pages/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | InheritX",
  description:
    "How InheritX collects, uses, and protects personal information on our websites and contact channels.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <LegalPageView
          eyebrow={privacyHero.eyebrow}
          title={privacyHero.title}
          description={privacyHero.description}
          updated={privacyUpdated}
          sections={privacySections}
        />
      </main>
      <Footer />
    </>
  );
}
