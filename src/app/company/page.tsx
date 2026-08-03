import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CompanyPageView } from "@/components/pages/CompanyPageView";

export const metadata: Metadata = {
  title: "Company — InheritX AI",
  description:
    "InheritX is an Enterprise AI Solutions company—AI vision, principles, evolution story, and how we build owned intelligence systems.",
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
