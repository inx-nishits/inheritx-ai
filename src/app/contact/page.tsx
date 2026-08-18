import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactPageView } from "@/components/pages/ContactPageView";

export const metadata: Metadata = {
  title: "Contact | InheritX",
  description:
    "Book an AI strategy call with InheritX—transformation programs, agentic systems, AI DevOps, and enterprise diligence.",
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
