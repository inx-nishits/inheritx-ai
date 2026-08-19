import { NavLink } from "@/components/layout/NavLink";

import { CtaFooterStripGate } from "@/components/cta/CtaFooterStrip";
import { Logo } from "@/components/ui/Logo";
import { footerColumns } from "@/data/navigation";

const LETTER_DIMS: Record<string, { w: number; h: number; src: string }> = {
  i: { w: 64, h: 488, src: "/images/letters/i.svg" },
  n: { w: 371, h: 374, src: "/images/letters/n.svg" },
  h: { w: 371, h: 498, src: "/images/letters/h.svg" },
  e: { w: 373, h: 372, src: "/images/letters/e.svg" },
  r: { w: 210, h: 374, src: "/images/letters/r.svg" },
  t: { w: 324, h: 498, src: "/images/letters/t.svg" },
  x: { w: 369, h: 373, src: "/images/letters/x.svg" },
};

const WORD_LETTERS = ["i", "n", "h", "e", "r", "i", "t", "x"] as const;
/** Tallest letter canvas — shared cap-height so every glyph scales the same. */
const CAP_HEIGHT = Math.max(...Object.values(LETTER_DIMS).map((d) => d.h));

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink text-white">
      <div className="noise-overlay" />
      <div className="relative mx-auto max-w-page px-5 pt-12 pb-0 md:px-8 md:pt-16">
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
                      <NavLink
                        href={link.href}
                        className="inline-flex min-h-10 items-center text-sm text-white/55 transition-colors hover:text-white"
                      >
                        {link.label}
                      </NavLink>
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
            <NavLink href="/privacy" className="hover:text-white">
              Privacy
            </NavLink>
            <NavLink href="/terms" className="hover:text-white">
              Terms
            </NavLink>
            <NavLink href="/cookies" className="hover:text-white">
              Cookies
            </NavLink>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="footer-wordmark pointer-events-none relative mt-6 w-full select-none px-5 pb-4 md:mt-8 md:px-8 md:pb-5"
      >
        <div className="footer-wordmark-text flex h-12 w-full items-end justify-between sm:h-14 md:h-16 lg:h-[4.5rem]">
          {WORD_LETTERS.map((ch, idx) => {
            const d = LETTER_DIMS[ch];
            return (
              <span
                key={`${ch}-${idx}`}
                className="footer-wordmark-glyph block"
                style={{
                  height: `${(d.h / CAP_HEIGHT) * 100}%`,
                  aspectRatio: `${d.w} / ${d.h}`,
                  ["--letter-src" as string]: `url("${d.src}")`,
                }}
              />
            );
          })}
        </div>
      </div>
    </footer>
  );
}
