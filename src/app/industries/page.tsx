import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustriesPageView } from "@/components/pages/IndustriesPageView";

export const metadata: Metadata = {
  title: "Industries | InheritX",
  description:
    "Enterprise AI for healthcare and finance with published proof, plus capability pages for manufacturing, insurance, and government.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries | InheritX",
    description:
      "Enterprise AI for healthcare and finance with published proof, plus capability pages for manufacturing, insurance, and government.",
    type: "website",
    url: "/industries",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries | InheritX",
    description:
      "Enterprise AI for healthcare and finance with published proof, plus capability pages for manufacturing, insurance, and government.",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <IndustriesPageView />
      </main>
      <Footer />
    </>
  );
}
