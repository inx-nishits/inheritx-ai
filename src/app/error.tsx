"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaText } from "@/components/cta/CtaText";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <Header />
      <main className="flex-1 bg-ink">
        <section className="mx-auto max-w-[800px] px-5 pt-32 pb-20 md:px-8 md:pt-40 md:pb-28">
          <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
            Something went wrong
          </p>
          <h1 className="font-display mt-3 text-4xl text-white md:text-5xl">
            This page could not be loaded.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/50">
            Please try again. If the problem continues, email hello@inheritx.com
            or start from the homepage.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-cyan px-7 text-sm font-medium text-white transition-colors hover:bg-white hover:text-ink"
            >
              Try again
            </button>
            <CtaText href="/" location="nav" pattern="text-explore">
              Back to homepage
            </CtaText>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
