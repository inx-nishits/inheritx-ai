import Link from "next/link";

import { Logo } from "@/components/ui/Logo";
import { footerColumns } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink text-white">
      <div className="noise-overlay" />
      <div className="relative mx-auto max-w-[1400px] px-5 pt-12 pb-0 md:px-8 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1.8fr] lg:gap-14">
          <div>
            <Logo variant="light" />
            <p className="font-display mt-6 max-w-sm text-[1.75rem] leading-snug text-white/90 md:mt-7 md:text-4xl">
              Enterprise AI systems. You own the code.
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/45">
              InheritX builds agents, RAG platforms, LLMOps, and vision
              systems—then hands over the IP and deploys into your private
              cloud.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 sm:gap-10">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="text-[11px] tracking-[0.2em] text-cyan uppercase">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-0.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="inline-flex min-h-10 items-center text-sm text-white/55 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/35 sm:mt-14 sm:flex-row sm:items-center sm:justify-between md:pt-7">
          <p>© {new Date().getFullYear()} InheritX. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="footer-wordmark pointer-events-none relative mt-8 w-full select-none px-5 pb-5 md:mt-10 md:px-8 md:pb-7"
      >
        <svg
          viewBox="0 0 1200 140"
          className="footer-wordmark-svg h-auto w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient
              id="footer-wordmark-grad"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="0"
              x2="480"
              y2="0"
            >
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="35%" stopColor="rgba(0,190,212,0.55)" />
              <stop offset="50%" stopColor="rgba(180,245,255,0.72)" />
              <stop offset="65%" stopColor="rgba(0,190,212,0.55)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="-480 0;1200 0;-480 0"
                dur="6s"
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>
          <text
            x="600"
            y="112"
            textAnchor="middle"
            textLength="1160"
            lengthAdjust="spacing"
            fill="url(#footer-wordmark-grad)"
            className="footer-wordmark-text font-mono text-[110px] font-semibold uppercase"
            style={{
              fontFamily:
                "var(--font-geist-mono), ui-monospace, monospace",
            }}
          >
            InheritX
          </text>
        </svg>
      </div>
    </footer>
  );
}
