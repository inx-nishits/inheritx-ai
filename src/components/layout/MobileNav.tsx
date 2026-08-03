"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import { navigation } from "@/data/navigation";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

type MobileNavProps = {
  open: boolean;
  expanded: string | null;
  onExpandedChange: (label: string | null) => void;
  onClose: () => void;
};

export function MobileNav({
  open,
  expanded,
  onExpandedChange,
  onClose,
}: MobileNavProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close menu backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] bg-ink/70 backdrop-blur-md lg:hidden"
            onClick={onClose}
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-[70] flex w-[min(100%,24rem)] flex-col border-l border-white/[0.08] bg-ink shadow-[-24px_0_80px_rgba(0,0,0,0.45)] lg:hidden"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,190,212,0.12),transparent_55%)]" />
            <div className="pointer-events-none absolute inset-0 editorial-grid opacity-20" />

            <div className="relative flex items-center justify-between border-b border-white/[0.06] px-5 py-4 pt-[max(1rem,env(safe-area-inset-top))]">
              <Logo variant="light" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors active:bg-white/10"
              >
                <span className="font-display text-2xl leading-none">×</span>
              </button>
            </div>

            <nav
              aria-label="Mobile"
              className="relative flex-1 overflow-y-auto overscroll-contain px-5 py-6"
            >
              <p className="mb-5 text-[11px] tracking-[0.24em] text-cyan uppercase">
                Navigate
              </p>

              <ul className="space-y-1">
                {navigation.map((item, index) => {
                  const hasChildren = Boolean(item.columns);
                  const isExpanded = expanded === item.label;

                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.08 + index * 0.04,
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="border-b border-white/[0.06]"
                    >
                      <div className="flex items-center gap-2 py-1">
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="min-h-14 flex-1 py-3 font-display text-[1.75rem] leading-none text-white transition-colors active:text-cyan"
                        >
                          {item.label}
                        </Link>
                        {hasChildren && (
                          <button
                            type="button"
                            aria-expanded={isExpanded}
                            aria-label={`${isExpanded ? "Collapse" : "Expand"} ${item.label}`}
                            onClick={() =>
                              onExpandedChange(isExpanded ? null : item.label)
                            }
                            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors active:border-cyan/40 active:text-cyan"
                          >
                            <ChevronDown
                              size={18}
                              className={cn(
                                "transition-transform duration-300",
                                isExpanded && "rotate-180",
                              )}
                            />
                          </button>
                        )}
                      </div>

                      <AnimatePresence initial={false}>
                        {hasChildren && isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.35,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-5 pb-5 pl-1">
                              {item.columns!.map((column) => (
                                <div key={column.label}>
                                  <p className="mb-2 text-[10px] tracking-[0.2em] text-cyan uppercase">
                                    {column.label}
                                  </p>
                                  <div className="space-y-0.5">
                                    {column.items.map((link) => (
                                      <Link
                                        key={link.title}
                                        href={link.href}
                                        onClick={onClose}
                                        className="flex min-h-12 items-center justify-between gap-3 rounded-xl px-2 text-[15px] text-white/65 transition-colors active:bg-white/[0.04] active:text-white"
                                      >
                                        <span>{link.title}</span>
                                        <ArrowUpRight
                                          size={14}
                                          className="shrink-0 text-white/35"
                                        />
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}

                              {item.featured && (
                                <Link
                                  href={item.featured.href}
                                  onClick={onClose}
                                  className="block rounded-2xl border border-cyan/20 bg-cyan-soft/40 p-4 active:border-cyan/40"
                                >
                                  <p className="text-[10px] tracking-[0.18em] text-cyan uppercase">
                                    {item.featured.eyebrow}
                                  </p>
                                  <p className="mt-2 text-sm font-medium leading-snug text-white">
                                    {item.featured.title}
                                  </p>
                                  {item.featured.cta && (
                                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-cyan">
                                      {item.featured.cta}
                                      <ArrowUpRight size={12} />
                                    </span>
                                  )}
                                </Link>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <div className="relative border-t border-white/[0.06] px-5 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
              <MagneticButton
                href="/contact"
                className="w-full bg-cyan py-3.5 font-semibold text-ink"
                onClick={onClose}
                strength={0}
              >
                Book a 30-Min Strategy Call
              </MagneticButton>
              <p className="mt-3 text-center text-[11px] text-white/35">
                30 minutes · Strategy-first · No pitch deck theater
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
