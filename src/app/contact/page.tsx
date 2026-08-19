import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactPageView } from "@/components/pages/ContactPageView";

export const metadata: Metadata = {
  title: "Contact | InheritX",
  description:
    "Contact InheritX—share your project details and we will respond within one business day.",
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
