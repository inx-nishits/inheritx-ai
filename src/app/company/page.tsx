import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CompanyPageView } from "@/components/pages/CompanyPageView";

export const metadata: Metadata = {
  title: "Company | InheritX",
  description:
    "InheritX is an AI-native enterprise partner, AI vision, ownership principles, and how we industrialize AI systems enterprises own.",
  alternates: { canonical: "/company" },
  openGraph: {
    title: "Company | InheritX",
    description:
      "InheritX is an AI-native enterprise partner, AI vision, ownership principles, and how we industrialize AI systems enterprises own.",
    type: "website",
    url: "/company",
  },
  twitter: {
    card: "summary_large_image",
    title: "Company | InheritX",
    description:
      "InheritX is an AI-native enterprise partner, AI vision, ownership principles, and how we industrialize AI systems enterprises own.",
  },
};

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <CompanyPageView />
      </main>
      <Footer />
    </>
  );
}
