import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustriesPageView } from "@/components/pages/IndustriesPageView";

export const metadata: Metadata = {
  title: "Industries | InheritX",
  description:
    "Enterprise AI for healthcare, finance, manufacturing, retail, insurance, logistics, and government—where accuracy and auditability matter.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries | InheritX",
    description:
      "Enterprise AI for healthcare, finance, manufacturing, retail, insurance, logistics, and government—where accuracy and auditability matter.",
    type: "website",
    url: "/industries",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries | InheritX",
    description:
      "Enterprise AI for healthcare, finance, manufacturing, retail, insurance, logistics, and government—where accuracy and auditability matter.",
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
