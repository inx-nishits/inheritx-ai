import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TeamPageView } from "@/components/pages/TeamPageView";

export const metadata: Metadata = {
  title: "Our Team — InheritX AI",
  description:
    "Meet the architects, engineers, and delivery leads building production AI systems at InheritX.",
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <TeamPageView />
      </main>
      <Footer />
    </>
  );
}
