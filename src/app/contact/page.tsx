import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactPageView } from "@/components/pages/ContactPageView";

export const metadata: Metadata = {
  title: "Contact — InheritX AI",
  description:
    "Contact InheritX for strategy calls, Hire AI Engineers, partnerships, and enterprise AI engagements.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ContactPageView />
      </main>
      <Footer />
    </>
  );
}
