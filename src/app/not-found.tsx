import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaPrimary } from "@/components/cta/CtaPrimary";
import { CtaText } from "@/components/cta/CtaText";
import { contactHref } from "@/lib/cta";

export const metadata: Metadata = {
  title: "Page Not Found | InheritX",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-ink">
        <section className="mx-auto max-w-[800px] px-5 pt-32 pb-20 md:px-8 md:pt-40 md:pb-28">
          <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
            404
          </p>
          <h1 className="font-display mt-3 text-4xl text-white md:text-5xl">
            This page is not available.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/50">
            The link may be outdated, or the page may have moved. Continue from
            the homepage, solutions, or a strategy call with an architect.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaPrimary href="/" location="nav" pattern="hero-pair">
              Back to homepage
            </CtaPrimary>
            <CtaText href="/solutions" location="nav" pattern="text-explore">
              Explore solutions
            </CtaText>
            <CtaText
              href={contactHref("strategy")}
              location="nav"
              intent="strategy"
              pattern="text-explore"
            >
              Book an AI strategy call
            </CtaText>
          </div>
          <p className="mt-10 text-sm text-white/35">
            Or go to{" "}
            <Link href="/case-studies" className="text-cyan hover:text-white">
              Case Studies
            </Link>
            {" · "}
            <Link href="/insights" className="text-cyan hover:text-white">
              Insights
            </Link>
            {" · "}
            <Link href="/contact" className="text-cyan hover:text-white">
              Contact
            </Link>
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
