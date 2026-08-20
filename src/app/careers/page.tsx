import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CareersPageView } from "@/components/pages/CareersPageView";

export const metadata: Metadata = {
  title: "Careers | InheritX",
  description:
    "Join InheritX to build production Enterprise AI, agents, platforms, LLMOps, and transformation delivery.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers | InheritX",
    description:
      "Join InheritX to build production Enterprise AI, agents, platforms, LLMOps, and transformation delivery.",
    type: "website",
    url: "/careers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | InheritX",
    description:
      "Join InheritX to build production Enterprise AI, agents, platforms, LLMOps, and transformation delivery.",
  },
};

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <CareersPageView />
      </main>
      <Footer />
    </>
  );
}
