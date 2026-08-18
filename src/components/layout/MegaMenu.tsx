"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Brain,
  Briefcase,
  Building2,
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
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

import type { NavItem } from "@/data/navigation";
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
  "All insights": FileText,
  "AI Portfolio": Network,
  "Case Studies": FileText,
  Research: Brain,
  Whitepapers: FileText,
  "Engagement Models": Briefcase,
  "About InheritX": Building2,
  "Our AI Vision": Sparkles,
  "Why InheritX": Target,
  "Our Approach": Workflow,
  "Security & Compliance": Shield,
  "IP Ownership": FileText,
  "Our Team": Users,
  Careers: Briefcase,
  Contact: Sparkles,
  "Book an AI strategy call": Sparkles,
  "Book a strategy call": Sparkles,
  "Agent Bank": Bot,
  "Enterprise References": Building2,
  "Production Readiness": Target,
  "Security FAQ": Shield,
  "Diligence Pack": FileText,
  "AI Governance": Shield,
  "Architecture Principles": Network,
  "AI strategy call": Sparkles,
  "All solutions": Workflow,
  "All industries": Factory,
  "Culture & Values": Sparkles,
};

type MegaMenuProps = {
  item: NavItem;
  onClose: () => void;
};

export function MegaMenu({ item, onClose }: MegaMenuProps) {
  if (!item.columns) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 top-full hidden lg:block"
      role="region"
      aria-label={`${item.label} menu`}
    >
      <div className="border-b border-white/[0.06] bg-ink/90 shadow-[0_32px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl backdrop-saturate-150">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,190,212,0.1),transparent_50%)]" />

        <div className="relative mx-auto max-w-page px-8 py-10">
          <div className="mb-8 flex items-end justify-between gap-6 border-b border-white/[0.06] pb-6">
            <div className="max-w-2xl">
              <p className="text-[11px] tracking-[0.22em] text-cyan uppercase">
                {item.label}
              </p>
              {item.overview ? (
                <p className="mt-3 text-base leading-relaxed text-white/55 md:text-lg">
                  {item.overview}
                </p>
              ) : null}
            </div>
            <Link
              href={item.href}
              onClick={onClose}
              className="hidden shrink-0 items-center gap-1.5 text-sm text-cyan transition-colors hover:text-white xl:inline-flex"
            >
              View all {item.label.toLowerCase()}
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div
            className={cn(
              "grid gap-8",
              item.featured
                ? "lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.85fr)]"
                : "",
            )}
          >
            <div
              className={cn(
                "grid gap-8",
                item.columns.length >= 2 ? "md:grid-cols-2" : "",
              )}
            >
              {item.columns.map((column) => (
                <div key={column.label}>
                  <p className="mb-4 text-[11px] font-medium tracking-[0.2em] text-white/35 uppercase">
                    {column.label}
                  </p>
                  <ul className="grid gap-1">
                    {column.items.map((link) => {
                      const Icon = iconMap[link.title] ?? Sparkles;
                      return (
                        <li key={link.title}>
                          <Link
                            href={link.href}
                            onClick={onClose}
                            className="group flex items-start gap-3.5 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
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
                className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-ink-elevated via-ink-soft to-ink p-7 transition-colors hover:border-cyan/35"
              >
                <div className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-cyan/20 blur-3xl transition-opacity group-hover:opacity-90" />
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
                        <p className="font-display text-xl text-cyan">
                          {stat.value}
                        </p>
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
                  key={link.title}
                  href={link.href}
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-white/70 transition-colors hover:border-cyan/30 hover:text-white"
                >
                  {link.title}
                  <ArrowUpRight size={12} className="text-cyan/80" />
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}
