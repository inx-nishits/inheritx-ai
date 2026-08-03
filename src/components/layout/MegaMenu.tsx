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
  Megaphone,
  Network,
  Shield,
  Sparkles,
  Target,
  Truck,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import type { NavItem } from "@/data/navigation";
import { cn } from "@/lib/cn";

const iconMap: Record<string, LucideIcon> = {
  "Enterprise AI": Building2,
  "AI Agents": Bot,
  "AI Automation": Workflow,
  "AI Consulting": Sparkles,
  "AI Transformation": Target,
  "Hire AI Engineers": Users,
  "Dedicated AI Squads": Briefcase,
  "Generative AI": Network,
  "Computer Vision": Eye,
  Healthcare: HeartPulse,
  Finance: Landmark,
  Retail: Sparkles,
  Manufacturing: Factory,
  Insurance: Shield,
  Logistics: Truck,
  Government: Landmark,
  Insights: FileText,
  "AI Portfolio": Network,
  "Case Studies": FileText,
  Research: Brain,
  Whitepapers: FileText,
  "About InheritX": Building2,
  "Our AI Vision": Sparkles,
  "Why InheritX": Target,
  "Our Approach": Workflow,
  Culture: Sparkles,
  "Our Team": Users,
  "Culture & Values": Sparkles,
  Careers: Briefcase,
  Contact: Megaphone,
  "Book a Strategy Call": Sparkles,
  "Agent Bank": Bot,
};

type MegaMenuProps = {
  item: NavItem;
  onClose: () => void;
};

export function MegaMenu({ item, onClose }: MegaMenuProps) {
  if (!item.columns) return null;

  const isCompany = item.label === "Company";
  const columnCount = item.columns.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 top-full hidden border-b border-white/[0.06] bg-ink/80 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl backdrop-saturate-150 lg:block"
    >
      <div
        className={cn(
          "mx-auto grid max-w-[1400px] gap-8 px-8 py-10",
          item.featured
            ? isCompany
              ? "lg:grid-cols-[1.55fr_0.85fr]"
              : "lg:grid-cols-[1.4fr_0.8fr]"
            : "",
        )}
      >
        <div
          className={cn(
            "grid gap-8",
            columnCount === 2 && "md:grid-cols-2",
            columnCount >= 3 && "md:grid-cols-2 xl:grid-cols-3",
          )}
        >
          {item.columns.map((column) => (
            <div key={column.label}>
              <p className="mb-4 text-[11px] font-medium tracking-[0.22em] text-cyan uppercase">
                {column.label}
              </p>
              <ul className="space-y-1.5">
                {column.items.map((link) => {
                  const Icon = iconMap[link.title] ?? Sparkles;
                  return (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        onClick={onClose}
                        className="group flex items-start gap-3.5 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
                      >
                        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan transition-colors group-hover:border-cyan/40 group-hover:bg-cyan-soft">
                          <Icon size={16} />
                        </span>
                        <span className="min-w-0">
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
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {item.featured && (
          <a
            href={item.featured.href}
            onClick={onClose}
            className={cn(
              "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 p-8 transition-colors hover:border-cyan/30",
              isCompany
                ? "min-h-[320px] bg-gradient-to-br from-[#0b1524] via-ink-elevated to-ink"
                : "bg-gradient-to-br from-ink-elevated to-ink",
            )}
          >
            <div className="pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full bg-cyan/20 blur-3xl transition-opacity group-hover:opacity-90" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-cyan/10 to-transparent opacity-60" />
            <div className="relative">
              <p className="text-[11px] tracking-[0.22em] text-cyan uppercase">
                {item.featured.eyebrow}
              </p>
              <h3 className="font-display mt-4 text-3xl leading-tight text-white">
                {item.featured.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
                {item.featured.description}
              </p>
            </div>
            <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan">
              {item.featured.cta ?? "Explore"}
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
