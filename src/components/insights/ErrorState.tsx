import Link from "next/link";

import { MagneticButton } from "@/components/ui/MagneticButton";

export function ErrorState({
  title = "Insights temporarily unavailable",
  description = "We could not load content from the Insights service. Please try again shortly.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-ink-soft px-6 py-16 text-center md:px-10">
      <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">Error</p>
      <h2 className="font-display mt-3 text-3xl text-white md:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
        {description}
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <MagneticButton
          href="/insights"
          className="bg-cyan px-6 py-3 text-white hover:bg-white hover:text-ink"
        >
          Retry Insights
        </MagneticButton>
        <Link href="/contact" className="text-sm text-white/50 hover:text-white">
          Contact us
        </Link>
      </div>
    </div>
  );
}
