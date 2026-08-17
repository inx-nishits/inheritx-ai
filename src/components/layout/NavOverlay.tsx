"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Brain,
  Briefcase,
  Building2,
  ChevronDown,
  Eye,
  Factory,
  FileText,
  HeartPulse,
  Landmark,
  Network,
  Shield,
  ShoppingBag,
  Sparkles,
  Target,
  Truck,
  Users,
  Workflow,
  X,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { navigation, type NavItem } from "@/data/navigation";
import { CtaPrimary } from "@/components/cta/CtaPrimary";
import { contactHref } from "@/lib/cta";
import { cn } from "@/lib/cn";

const iconMap: Record<string, LucideIcon> = {
  "Enterprise AI": Building2,
  "AI Agents": Bot,
  "AI Automation": Workflow,
  "AI Consulting": Sparkles,
  "AI Transformation": Target,
  "Embedded AI Engineering": Users,
  "Dedicated AI Squads": Briefcase,
  "Generative AI": Network,
  "Computer Vision": Eye,
  Healthcare: HeartPulse,
  Finance: Landmark,
  Retail: ShoppingBag,
  Manufacturing: Factory,
  Insurance: Shield,
  Logistics: Truck,
  Government: Landmark,
  Insights: FileText,
  "All Insights": FileText,
  "AI Portfolio": Network,
  "Case Studies": FileText,
  Research: Brain,
  Whitepapers: FileText,
  "Engagement models": Briefcase,
  "About InheritX": Building2,
  "Our AI Vision": Sparkles,
  "Why InheritX": Target,
  "Our Approach": Workflow,
  "Security & Compliance": Shield,
  "IP Ownership": FileText,
  "Our Team": Users,
  "Culture & Values": Sparkles,
  Careers: Briefcase,
  Contact: Sparkles,
  "Book a strategy call": Sparkles,
  "Agent Bank": Bot,
  "Enterprise References": Building2,
  "Production readiness": Target,
  "Security FAQ": Shield,
  "Diligence pack": FileText,
  "AI Governance": Shield,
  "Architecture principles": Network,
};

type NavOverlayProps = {
  open: boolean;
  onClose: () => void;
};

function SectionContent({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-8 max-w-2xl">
        <p className="text-[11px] tracking-[0.22em] text-cyan uppercase">
          {item.label}
        </p>
        {item.overview ? (
          <p className="mt-3 text-base leading-relaxed text-white/55 md:text-lg">
            {item.overview}
          </p>
        ) : null}
        <Link
          href={item.href}
          onClick={onClose}
          className="mt-4 inline-flex items-center gap-1.5 text-sm text-cyan transition-colors hover:text-white"
        >
          View all {item.label.toLowerCase()}
          <ArrowUpRight size={14} />
        </Link>
      </div>

      <div
        className={cn(
          "grid flex-1 gap-8",
          item.featured
            ? "xl:grid-cols-[minmax(0,1.4fr)_minmax(260px,0.85fr)]"
            : "",
        )}
      >
        <div
          className={cn(
            "grid gap-8",
            (item.columns?.length ?? 0) >= 2 ? "md:grid-cols-2" : "",
            (item.columns?.length ?? 0) >= 3 ? "lg:grid-cols-3" : "",
          )}
        >
          {item.columns?.map((column) => (
            <div key={column.label}>
              <p className="mb-4 text-[11px] font-medium tracking-[0.2em] text-white/35 uppercase">
                {column.label}
              </p>
              <ul className="space-y-1">
                {column.items.map((link) => {
                  const Icon = iconMap[link.title] ?? Sparkles;
                  return (
                    <li key={`${column.label}-${link.title}-${link.href}`}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="group flex items-start gap-3 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
                      >
                        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan transition-colors group-hover:border-cyan/40 group-hover:bg-cyan-soft">
                          <Icon size={16} strokeWidth={1.5} />
                        </span>
                        <span className="min-w-0 pt-0.5">
                          <span className="flex items-center gap-1.5 text-sm font-medium text-white transition-colors group-hover:text-cyan">
                            {link.title}
                            <ArrowUpRight
                              size={12}
                              className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-70"
                            />
                          </span>
                          <span className="mt-1 block text-[13px] leading-relaxed text-white/45">
                            {link.description}
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {item.featured ? (
          <Link
            href={item.featured.href}
            onClick={onClose}
            className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-ink-elevated via-ink-soft to-ink p-7 transition-colors hover:border-cyan/35"
          >
            <div className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-cyan/20 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 editorial-grid opacity-20" />
            <div className="relative">
              <p className="text-[11px] tracking-[0.2em] text-cyan uppercase">
                {item.featured.eyebrow}
              </p>
              <h3 className="font-display mt-4 text-2xl leading-tight text-white md:text-3xl">
                {item.featured.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
                {item.featured.description}
              </p>
            </div>
            {item.featured.stats ? (
              <div className="relative mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
                {item.featured.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-xl text-cyan">{stat.value}</p>
                    <p className="mt-1 text-[10px] tracking-wide text-white/40 uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
            <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan">
              {item.featured.cta ?? "Explore"}
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </Link>
        ) : null}
      </div>

      {item.quickLinks && item.quickLinks.length > 0 ? (
        <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-white/[0.06] pt-6">
          <span className="mr-2 text-[10px] tracking-[0.18em] text-white/30 uppercase">
            Quick links
          </span>
          {item.quickLinks.map((link) => (
            <Link
              key={`${link.title}-${link.href}`}
              href={link.href}
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-white/70 transition-colors hover:border-cyan/30 hover:text-white"
            >
              {link.title}
              <ArrowUpRight size={12} className="text-cyan/80" />
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function NavOverlay({ open, onClose }: NavOverlayProps) {
  const [activeLabel, setActiveLabel] = useState(navigation[0]?.label ?? "");
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(
    navigation[0]?.label ?? null,
  );
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const desktopScrollRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const activeItem =
    navigation.find((item) => item.label === activeLabel) ?? navigation[0];

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const host = panelRef.current;
    if (!host) return;

    const onWheel = (event: WheelEvent) => {
      const desktop = desktopScrollRef.current;
      const mobile = mobileScrollRef.current;
      const el = desktop ?? mobile;
      if (!el) return;
      if (Math.abs(event.deltaY) < 1) return;
      event.preventDefault();
      el.scrollTop += event.deltaY;
    };

    // passive:false is required for preventDefault to work for wheel events.
    host.addEventListener("wheel", onWheel, { passive: false });
    return () => host.removeEventListener("wheel", onWheel);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 50);

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      // Keyboard support for scrolling through the overlay content.
      // This is important when scrollbars are visually hidden.
      if (
        event.key === "PageDown" ||
        event.key === "PageUp" ||
        event.key === "Home" ||
        event.key === "End" ||
        event.key === "ArrowDown" ||
        event.key === "ArrowUp"
      ) {
        const el =
          desktopScrollRef.current ??
          mobileScrollRef.current ??
          panelRef.current?.querySelector<HTMLElement>(
            '[data-nav-overlay-scroll="desktop"],[data-nav-overlay-scroll="mobile"]',
          ) ??
          null;
        if (!el) return;

        event.preventDefault();

        const line = 56; // comfortable step
        const page = Math.max(240, el.clientHeight * 0.9);

        switch (event.key) {
          case "PageDown":
            el.scrollTop += page;
            break;
          case "PageUp":
            el.scrollTop -= page;
            break;
          case "Home":
            el.scrollTop = 0;
            break;
          case "End":
            el.scrollTop = el.scrollHeight;
            break;
          case "ArrowDown":
            el.scrollTop += line;
            break;
          case "ArrowUp":
            el.scrollTop -= line;
            break;
        }
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKey);
      previouslyFocused.current?.focus?.();
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setActiveLabel(navigation[0]?.label ?? "");
      setMobileExpanded(navigation[0]?.label ?? null);
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
          onMouseDown={(event) => {
            // Close only when clicking the backdrop, not when interacting inside the menu.
            if (event.target === event.currentTarget) onClose();
          }}
          className="fixed inset-0 z-[80] flex flex-col bg-ink"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,190,212,0.14),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 editorial-grid opacity-25" />

          <div className="relative z-10 flex items-center justify-between gap-3 border-b border-white/[0.06] px-5 py-4 pt-[max(1rem,env(safe-area-inset-top))] md:px-8 md:py-5">
            <div className="min-w-0">
              <p
                id={titleId}
                className="text-[11px] tracking-[0.24em] text-cyan uppercase"
              >
                Navigate
              </p>
              <p className="mt-1 text-sm text-white/45">
                AI-native enterprise solutions, industries, and proof
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2.5">
              <CtaPrimary
                href={contactHref("strategy")}
                location="header"
                intent="strategy"
                pattern="header-convert"
                onClick={onClose}
                strength={0}
                className="hidden min-h-11 lg:inline-flex"
              >
                Book an AI strategy call
              </CtaPrimary>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close navigation"
                className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-cyan/40 hover:bg-white/5"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="relative z-10 hidden min-h-0 w-full flex-1 grid-cols-[220px_minmax(0,1fr)] gap-0 overflow-hidden px-5 py-6 lg:grid xl:grid-cols-[260px_minmax(0,1fr)]">
            <aside
              className="min-h-0 overflow-y-auto overscroll-contain border-r border-white/[0.06] pr-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <nav aria-label="Sections" className="space-y-1">
                {navigation.map((item, index) => {
                  const isActive = item.label === activeLabel;
                  return (
                    <motion.button
                      key={item.label}
                      type="button"
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + index * 0.03 }}
                      onClick={() => setActiveLabel(item.label)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-left transition-colors",
                        isActive
                          ? "bg-white/[0.07] text-white"
                          : "text-white/55 hover:bg-white/[0.04] hover:text-white",
                      )}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span className="font-display text-xl leading-none">
                        {item.label}
                      </span>
                      <span
                        className={cn(
                          "size-1.5 shrink-0 rounded-full transition-colors",
                          isActive ? "bg-cyan" : "bg-transparent",
                        )}
                      />
                    </motion.button>
                  );
                })}
              </nav>
            </aside>

            <div
              ref={desktopScrollRef}
              data-nav-overlay-scroll="desktop"
              style={{ touchAction: "pan-y" }}
              className="min-h-0 overflow-y-auto overscroll-contain pl-4 pr-1 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <AnimatePresence mode="wait">
                {activeItem ? (
                  <motion.div
                    key={activeItem.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <SectionContent item={activeItem} onClose={onClose} />
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile accordion layout */}
          <div className="relative z-10 flex min-h-0 flex-1 flex-col lg:hidden">
            <div
              ref={mobileScrollRef}
              data-nav-overlay-scroll="mobile"
              style={{ touchAction: "pan-y" }}
              className="flex-1 overflow-y-auto overscroll-contain px-5 py-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <ul className="space-y-2">
                {navigation.map((item, index) => {
                  const isExpanded = mobileExpanded === item.label;
                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 + index * 0.03 }}
                      className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]"
                    >
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        onClick={() =>
                          setMobileExpanded(isExpanded ? null : item.label)
                        }
                        className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
                      >
                        <span className="font-display text-2xl leading-none text-white">
                          {item.label}
                        </span>
                        <ChevronDown
                          size={18}
                          className={cn(
                            "shrink-0 text-white/50 transition-transform duration-300",
                            isExpanded && "rotate-180 text-cyan",
                          )}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isExpanded ? (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.32,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-white/[0.06] px-4 pb-5 pt-4">
                              <SectionContent item={item} onClose={onClose} />
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
            <div className="border-t border-white/[0.06] px-5 py-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
              <CtaPrimary
                href={contactHref("strategy")}
                fullWidth
                location="mobile-nav"
                intent="strategy"
                pattern="header-convert"
                onClick={onClose}
                strength={0}
                className="min-h-11 py-3.5 font-semibold"
              >
                Book an AI strategy call
              </CtaPrimary>
              <p className="mt-2.5 text-center text-[11px] text-white/35">
                30 minutes · Strategy-first · No pitch theater
              </p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
