import Link from "next/link";

import { CtaFooterStripGate } from "@/components/cta/CtaFooterStrip";
import { Logo } from "@/components/ui/Logo";
import { footerColumns } from "@/data/navigation";

export function Footer() {
  const viewW = 1200;
  const viewH = 140;
  const wordW = 1160;
  const xOffset = (viewW - wordW) / 2;

  // Letter SVG dimensions (from public/images/letters/* headers).
  // We scale each letter to the footer height, then scale horizontally to fit the wordmark width.
  const letterDims: Record<
    string,
    { w: number; h: number; src: string }
  > = {
    i: { w: 64, h: 488, src: "/images/letters/i.svg" },
    n: { w: 371, h: 374, src: "/images/letters/n.svg" },
    h: { w: 371, h: 498, src: "/images/letters/h.svg" },
    e: { w: 373, h: 372, src: "/images/letters/e.svg" },
    r: { w: 210, h: 374, src: "/images/letters/r.svg" },
    t: { w: 324, h: 498, src: "/images/letters/t.svg" },
    x: { w: 369, h: 373, src: "/images/letters/x.svg" },
  };

  const wordLetters = ["i", "n", "h", "e", "r", "i", "t", "x"] as const;
  const baseWidths = wordLetters.map((ch) => {
    const d = letterDims[ch];
    return d.w * (viewH / d.h);
  });
  const baseTotal = baseWidths.reduce((sum, v) => sum + v, 0) || 1;
  const scaleX = wordW / baseTotal;
  const widths = baseWidths.map((w) => w * scaleX);

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
              InheritX builds agents, RAG platforms, LLMOps, and vision systems
              for regulated enterprises—then transfers operability to your team.
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

        <CtaFooterStripGate />

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between md:pt-7">
          <p>© {new Date().getFullYear()} InheritX. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookies
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
            {/* Black letter SVGs → white so luminance masks reveal the wordmark */}
            <filter
              id="footer-letter-to-white"
              colorInterpolationFilters="sRGB"
            >
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1
                        0 0 0 0 1
                        0 0 0 0 1
                        0 0 0 1 0"
              />
            </filter>

            <linearGradient
              id="footer-wordmark-grad"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="0"
              x2="480"
              y2="0"
            >
              {/* Base reads white; cyan highlight sweeps across (same motion as before) */}
              <stop offset="0%" stopColor="rgba(255,255,255,0.42)" />
              <stop offset="35%" stopColor="rgba(0,190,212,0.75)" />
              <stop offset="50%" stopColor="rgba(180,245,255,0.95)" />
              <stop offset="65%" stopColor="rgba(0,190,212,0.75)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.42)" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="-480 0;1200 0;-480 0"
                dur="6s"
                repeatCount="indefinite"
              />
            </linearGradient>

            <mask
              id="footer-wordmark-mask"
              maskUnits="userSpaceOnUse"
              maskContentUnits="userSpaceOnUse"
              style={{ maskType: "luminance" }}
            >
              <rect width={viewW} height={viewH} fill="black" />
              <g filter="url(#footer-letter-to-white)">
                {wordLetters.map((ch, idx) => {
                  const left = widths
                    .slice(0, idx)
                    .reduce((sum, v) => sum + v, 0);
                  return (
                    <image
                      key={`${ch}-${idx}`}
                      href={letterDims[ch].src}
                      x={xOffset + left}
                      y={0}
                      width={widths[idx]}
                      height={viewH}
                      preserveAspectRatio="xMidYMid meet"
                    />
                  );
                })}
              </g>
            </mask>
          </defs>

          <rect
            x={0}
            y={0}
            width={viewW}
            height={viewH}
            fill="url(#footer-wordmark-grad)"
            mask="url(#footer-wordmark-mask)"
          />
        </svg>
      </div>
    </footer>
  );
}
