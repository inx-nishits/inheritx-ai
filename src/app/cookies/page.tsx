import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalPageView } from "@/components/pages/LegalPageView";
import {
  cookiesHero,
  cookiesSections,
  cookiesUpdated,
} from "@/data/pages/cookies";

export const metadata: Metadata = {
  title: "Cookies — InheritX",
  description:
    "How InheritX uses cookies and similar technologies on inheritx.com.",
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <LegalPageView
          eyebrow={cookiesHero.eyebrow}
          title={cookiesHero.title}
          description={cookiesHero.description}
          updated={cookiesUpdated}
          sections={cookiesSections}
        />
      </main>
      <Footer />
    </>
  );
}
