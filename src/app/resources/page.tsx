import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ResourcesPageView } from "@/components/pages/ResourcesPageView";

export const metadata: Metadata = {
  title: "Resources | InheritX",
  description:
    "Decision material for CEOs and CTOs, insights, governance, diligence, and frameworks for industrializing enterprise AI.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Resources | InheritX",
    description:
      "Decision material for CEOs and CTOs, insights, governance, diligence, and frameworks for industrializing enterprise AI.",
    type: "website",
    url: "/resources",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | InheritX",
    description:
      "Decision material for CEOs and CTOs, insights, governance, diligence, and frameworks for industrializing enterprise AI.",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ResourcesPageView />
      </main>
      <Footer />
    </>
  );
}
