"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { navigation } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/Logo";

import { NavOverlay } from "./NavOverlay";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={cn(
            "transition-[background-color,border-color,box-shadow] duration-500",
            scrolled || menuOpen
              ? "border-b border-white/[0.08] bg-ink shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
              : "border-b border-transparent bg-transparent",
          )}
        >
          <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-5 md:h-[4.5rem] md:px-8">
            <Logo variant="light" />

            <div className="flex items-center gap-2.5 md:gap-3">
              <Link
                href="/contact"
                className={cn(
                  "group relative inline-flex h-10 items-center gap-2 overflow-hidden rounded-full",
                  "border border-cyan bg-cyan pl-4 pr-3.5",
                  "text-[12px] font-semibold tracking-wide text-white sm:text-[13px]",
                  "shadow-[0_0_24px_rgba(0,190,212,0.22)]",
                  "transition-[background-color,border-color,box-shadow,color] duration-300",
                  "hover:border-white hover:bg-white hover:text-ink hover:shadow-[0_0_28px_rgba(255,255,255,0.18)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
                )}
              >
                <span className="sm:hidden">Strategy Call</span>
                <span className="hidden sm:inline">Book an AI Strategy Call</span>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-white">
                  <ArrowUpRight size={13} strokeWidth={2.25} />
                </span>
              </Link>

              <button
                type="button"
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-full border text-white transition-colors",
                  menuOpen
                    ? "border-cyan/40 bg-cyan/10 text-cyan"
                    : "border-white/15 hover:border-white/30 hover:bg-white/5 active:bg-white/10",
                )}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-haspopup="dialog"
                onClick={() => setMenuOpen((open) => !open)}
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* SEO / crawlable destinations (visually hidden) */}
        <nav className="sr-only" aria-label="Site">
          {navigation.map((item) => (
            <div key={item.label}>
              <Link href={item.href}>{item.label}</Link>
              {item.columns?.map((column) =>
                column.items.map((link) => (
                  <Link
                    key={`${item.label}-${column.label}-${link.href}-${link.title}`}
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                )),
              )}
            </div>
          ))}
        </nav>
      </header>

      <NavOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
