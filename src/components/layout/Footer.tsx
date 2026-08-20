import { NavLink } from "@/components/layout/NavLink";
import { Logo } from "@/components/ui/Logo";
import { footerColumns } from "@/data/navigation";
import { contactSocialLinks } from "@/data/pages/contact";

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
/** Tallest letter canvas - shared cap-height so every glyph scales the same. */
const CAP_HEIGHT = Math.max(...Object.values(LETTER_DIMS).map((d) => d.h));

function SocialIcon({
  label,
  className,
}: {
  label: (typeof contactSocialLinks)[number]["label"];
  className?: string;
}) {
  switch (label) {
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
        </svg>
      );
    case "X":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      );
  }
}

const BRAND_BG: Record<(typeof contactSocialLinks)[number]["label"], string> = {
  Facebook:  "#1877F2",
  X:         "#14171A",
  LinkedIn:  "#0A66C2",
  Instagram: "#E1306C",
};

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
              for regulated enterprises, then transfers operability to your team.
            </p>

            {/* Social icons - brand colours */}
            <div className="mt-7 flex items-center gap-3">
              {contactSocialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`InheritX on ${link.label}`}
                  style={{ backgroundColor: BRAND_BG[link.label] }}
                  className={`inline-flex size-9 items-center justify-center rounded-full text-white transition-opacity hover:opacity-85${link.label === "X" ? " ring-1 ring-white/20" : ""}`}
                >
                  <SocialIcon label={link.label} className="size-4" />
                </a>
              ))}
            </div>
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
