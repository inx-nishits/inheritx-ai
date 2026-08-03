"use client";

import { AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { navigation, type NavItem } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/Logo";
import { MagneticButton } from "@/components/ui/MagneticButton";

import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openMenu = (item: NavItem) => {
    if (item.columns) setActive(item.label);
    else setActive(null);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      onMouseLeave={() => setActive(null)}
    >
      <div
        className={cn(
          "transition-[background-color,backdrop-filter,border-color,box-shadow] duration-500",
          scrolled || active || mobileOpen
            ? "border-b border-white/[0.06] bg-ink/55 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-2xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-[4.5rem] md:px-8">
          <Logo variant="light" />

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            {navigation.map((item) => {
              const hasMega = Boolean(item.columns);
              const isOpen = active === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => openMenu(item)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "group relative inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-medium tracking-[0.03em] transition-all duration-300",
                      isOpen
                        ? "bg-white/[0.08] text-white"
                        : "text-white/70 hover:bg-white/[0.06] hover:text-white",
                    )}
                    aria-expanded={hasMega ? isOpen : undefined}
                    aria-haspopup={hasMega ? "true" : undefined}
                    onFocus={() => openMenu(item)}
                  >
                    {item.label}
                    {hasMega && (
                      <ChevronDown
                        size={14}
                        className={cn(
                          "opacity-70 transition-transform duration-300 group-hover:opacity-100",
                          isOpen && "rotate-180 opacity-100",
                        )}
                      />
                    )}
                    <span
                      className={cn(
                        "absolute inset-x-3.5 -bottom-0.5 h-px origin-center bg-cyan transition-transform duration-300",
                        isOpen
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100",
                      )}
                    />
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <MagneticButton
              href="/contact"
              className="hidden bg-cyan px-5 py-2.5 text-[13px] font-semibold text-ink transition-colors duration-300 hover:bg-white sm:inline-flex"
            >
              Book Strategy Call
            </MagneticButton>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-white/30 hover:bg-white/5 active:bg-white/10 lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <MegaMenu
            item={navigation.find((n) => n.label === active)!}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>

      <MobileNav
        open={mobileOpen}
        expanded={mobileExpanded}
        onExpandedChange={setMobileExpanded}
        onClose={closeMobile}
      />
    </header>
  );
}
