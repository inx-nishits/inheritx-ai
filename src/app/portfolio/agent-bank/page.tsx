import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AgentBankPageView } from "@/components/pages/AgentBankPageView";

export const metadata: Metadata = {
  title: "Agent Bank | InheritX",
  description:
    "Agent Bank: a governed multi-agent platform for banking operations—with policy controls, audit trails, and human approval gates.",
  alternates: { canonical: "/portfolio/agent-bank" },
  openGraph: {
    title: "Agent Bank | InheritX",
    description:
      "Agent Bank: a governed multi-agent platform for banking operations—with policy controls, audit trails, and human approval gates.",
    type: "website",
    url: "/portfolio/agent-bank",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent Bank | InheritX",
    description:
      "Agent Bank: a governed multi-agent platform for banking operations—with policy controls, audit trails, and human approval gates.",
  },
};

export default function AgentBankPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <AgentBankPageView />
      </main>
      <Footer />
    </>
  );
}
