"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CircuitBoard,
  LineChart,
  Sparkles,
} from "lucide-react";

import { audiencePaths } from "@/data/content";
import { Reveal, TextReveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const icons = {
  systems: CircuitBoard,
  outcomes: LineChart,
  explore: Sparkles,
} as const;

const ceoKpis = [
  { value: "40%", label: "Cost reduction" },
  { value: "10×", label: "Decision speed" },
  { value: "65%", label: "Manual work ↓" },
  { value: "3.2×", label: "ROI multiple" },
];

const ceoGrowth = [18, 24, 31, 42, 55, 68, 79, 88];
const ceoMonths = ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8"];

const ceoCompare = [
  { label: "Productivity", before: 32, after: 78 },
  { label: "Decision speed", before: 28, after: 84 },
  { label: "AI adoption", before: 18, after: 72 },
  { label: "Ops efficiency", before: 35, after: 81 },
];

const ceoRoiMix = [
  { label: "Cost save", value: 42, color: "#00bed4" },
  { label: "Revenue", value: 28, color: "#5ee1f0" },
  { label: "Risk ↓", value: 18, color: "#0891a8" },
  { label: "Speed", value: 12, color: "#164e63" },
];

const ctoScores = [
  { label: "Security", value: 94 },
  { label: "Governance", value: 91 },
  { label: "Observability", value: 96 },
  { label: "Reliability", value: 93 },
];

const ctoLatency = [
  { stage: "Ingest", ms: 42 },
  { stage: "Retrieve", ms: 68 },
  { stage: "Reason", ms: 120 },
  { stage: "Tool", ms: 85 },
  { stage: "Deploy", ms: 35 },
];

const ctoReadiness = [
  { label: "RAG", value: 92 },
  { label: "Agents", value: 88 },
  { label: "MCP", value: 85 },
  { label: "LLMOps", value: 94 },
  { label: "VPC", value: 97 },
];

const exploreDemand = [
  { label: "AI/ML Eng.", value: 86 },
  { label: "Agentic AI", value: 92 },
  { label: "AI DevOps", value: 78 },
  { label: "Consulting", value: 74 },
  { label: "Vision", value: 61 },
];

const exploreFunnel = [
  { label: "Inquiry", value: 100 },
  { label: "Assessment", value: 72 },
  { label: "Pilot", value: 48 },
  { label: "Production", value: 31 },
];

function IllustrativeNote() {
  return (
    <p className="mb-4 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] leading-relaxed text-white/45">
      Illustrative planning metrics for buyer conversations—not audited client
      outcomes. See{" "}
      <Link href="/case-studies" className="text-cyan underline-offset-2 hover:underline">
        case studies
      </Link>{" "}
      for published results.
    </p>
  );
}

function ChartCard({
  title,
  meta,
  children,
  className,
}: {
  title: string;
  meta?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-[10px] tracking-[0.16em] text-white/35 uppercase">
          {title}
        </p>
        {meta ? (
          <p className="font-mono text-[10px] text-cyan/70">{meta}</p>
        ) : null}
      </div>
      {children}
    </div>
  );
}

function AreaGrowthChart() {
  const w = 320;
  const h = 140;
  const pad = 8;
  const max = 100;
  const points = ceoGrowth.map((v, i) => {
    const x = pad + (i / (ceoGrowth.length - 1)) * (w - pad * 2);
    const y = h - pad - (v / max) * (h - pad * 2);
    return `${x},${y}`;
  });
  const line = points.join(" ");
  const area = `${pad},${h - pad} ${line} ${w - pad},${h - pad}`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-36 w-full" aria-hidden>
      <defs>
        <linearGradient id="path-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00bed4" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#00bed4" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="path-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0891a8" />
          <stop offset="100%" stopColor="#00bed4" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((g) => (
        <line
          key={g}
          x1={pad}
          x2={w - pad}
          y1={h - pad - g * (h - pad * 2)}
          y2={h - pad - g * (h - pad * 2)}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
      ))}
      <polygon points={area} fill="url(#path-area)" />
      <polyline
        points={line}
        fill="none"
        stroke="url(#path-line)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {ceoGrowth.map((v, i) => {
        const x = pad + (i / (ceoGrowth.length - 1)) * (w - pad * 2);
        const y = h - pad - (v / max) * (h - pad * 2);
        return (
          <circle key={ceoMonths[i]} cx={x} cy={y} r="3" fill="#00bed4" />
        );
      })}
    </svg>
  );
}

function OutcomeLiftList() {
  return (
    <ul className="divide-y divide-white/[0.07]">
      {ceoCompare.map((item, index) => {
        const lift = item.after - item.before;

        return (
          <motion.li
            key={item.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: index * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center justify-between gap-4 py-3.5 first:pt-0 last:pb-0"
          >
            <div className="min-w-0">
              <p className="text-sm text-white/70">{item.label}</p>
              <p className="mt-1 font-mono text-[11px] text-white/30">
                <span>{item.before}%</span>
                <span className="mx-1.5 text-white/20">→</span>
                <span className="text-cyan/80">{item.after}%</span>
              </p>
            </div>
            <div className="shrink-0 text-right">
              <p className="font-display text-2xl leading-none text-cyan md:text-[1.75rem]">
                +{lift}
              </p>
              <p className="mt-1 text-[10px] tracking-[0.12em] text-white/30 uppercase">
                pts
              </p>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
}

function DonutChart({
  segments,
}: {
  segments: { label: string; value: number; color: string }[];
}) {
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  const r = 42;
  const c = 2 * Math.PI * r;
  let offset = 0;

  return (
    <div className="flex items-center gap-5">
      <svg viewBox="0 0 120 120" className="size-28 shrink-0" aria-hidden>
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="12"
        />
        {segments.map((seg) => {
          const len = (seg.value / total) * c;
          const el = (
            <circle
              key={seg.label}
              cx="60"
              cy="60"
              r={r}
              fill="none"
              stroke={seg.color}
              strokeWidth="12"
              strokeDasharray={`${len} ${c - len}`}
              strokeDashoffset={-offset}
              strokeLinecap="butt"
              transform="rotate(-90 60 60)"
            />
          );
          offset += len;
          return el;
        })}
        <text
          x="60"
          y="56"
          textAnchor="middle"
          className="fill-white"
          style={{ fontSize: "16px", fontWeight: 600 }}
        >
          100%
        </text>
        <text
          x="60"
          y="72"
          textAnchor="middle"
          className="fill-white/40"
          style={{ fontSize: "8px" }}
        >
          VALUE MIX
        </text>
      </svg>
      <div className="space-y-2">
        {segments.map((seg) => (
          <div key={seg.label} className="flex items-center gap-2 text-[11px]">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: seg.color }}
            />
            <span className="text-white/60">{seg.label}</span>
            <span className="font-mono text-white/40">{seg.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RadialGauge({ label, value }: { label: string; value: number }) {
  const r = 28;
  const c = 2 * Math.PI * r;
  const filled = (value / 100) * c;

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 72 72" className="size-16" aria-hidden>
        <circle
          cx="36"
          cy="36"
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="6"
        />
        <circle
          cx="36"
          cy="36"
          r={r}
          fill="none"
          stroke="#00bed4"
          strokeWidth="6"
          strokeDasharray={`${filled} ${c - filled}`}
          strokeLinecap="round"
          transform="rotate(-90 36 36)"
        />
        <text
          x="36"
          y="40"
          textAnchor="middle"
          className="fill-white"
          style={{ fontSize: "12px", fontWeight: 600 }}
        >
          {value}
        </text>
      </svg>
      <p className="mt-1.5 text-[10px] text-white/50">{label}</p>
    </div>
  );
}

function LatencyBars() {
  const max = Math.max(...ctoLatency.map((d) => d.ms));
  return (
    <div className="flex h-36 items-end gap-2">
      {ctoLatency.map((item, index) => (
        <div key={item.stage} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
          <span className="font-mono text-[10px] text-cyan">{item.ms}ms</span>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: `${(item.ms / max) * 100}%` }}
            transition={{
              duration: 0.55,
              delay: index * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full min-h-3 rounded-t-md bg-gradient-to-t from-cyan/30 to-cyan"
          />
          <span className="text-[9px] text-white/40">{item.stage}</span>
        </div>
      ))}
    </div>
  );
}

function ReadinessBars() {
  return (
    <div className="space-y-2.5">
      {ctoReadiness.map((item, index) => (
        <div key={item.label}>
          <div className="mb-1 flex justify-between text-[10px]">
            <span className="text-white/55">{item.label}</span>
            <span className="font-mono text-cyan">{item.value}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${item.value}%` }}
              transition={{
                duration: 0.6,
                delay: index * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full rounded-full bg-gradient-to-r from-cyan/50 to-cyan"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function DemandBars() {
  return (
    <div className="space-y-2.5">
      {exploreDemand.map((item, index) => (
        <div key={item.label} className="flex items-center gap-3">
          <span className="w-20 shrink-0 text-[10px] text-white/55">
            {item.label}
          </span>
          <div className="h-3 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${item.value}%` }}
              transition={{
                duration: 0.55,
                delay: index * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full rounded-full bg-cyan"
            />
          </div>
          <span className="w-8 text-right font-mono text-[10px] text-white/40">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}

function FunnelChart() {
  return (
    <div className="space-y-2">
      {exploreFunnel.map((item, index) => (
        <div key={item.label} className="flex items-center gap-3">
          <span className="w-20 shrink-0 text-[10px] text-white/50">
            {item.label}
          </span>
          <div className="flex flex-1 justify-center">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex h-8 items-center justify-center rounded-md bg-gradient-to-r from-cyan/25 to-cyan/70"
              style={{ width: `${item.value}%` }}
            >
              <span className="font-mono text-[10px] text-white">
                {item.value}%
              </span>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
}

function CeoDecisionPanel() {
  return (
    <div className="grid gap-4 lg:grid-cols-12">
      <div className="lg:col-span-12">
        <IllustrativeNote />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:col-span-12">
        {ceoKpis.map((kpi) => (
          <div key={kpi.label} className="px-0 py-1">
            <p className="font-display text-2xl leading-none text-cyan">
              {kpi.value}
            </p>
            <p className="mt-2 text-[11px] text-white/55">{kpi.label}</p>
          </div>
        ))}
      </div>

      <ChartCard
        title="AI value creation curve"
        meta="Illustrative"
        className="lg:col-span-5"
      >
        <AreaGrowthChart />
        <div className="mt-1 flex justify-between px-1 font-mono text-[9px] text-white/30">
          {ceoMonths.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </ChartCard>

      <ChartCard
        title="Outcome lift after AI"
        meta="Illustrative"
        className="lg:col-span-4"
      >
        <OutcomeLiftList />
      </ChartCard>

      <ChartCard title="Enterprise value mix" meta="Illustrative" className="lg:col-span-3">
        <DonutChart segments={ceoRoiMix} />
      </ChartCard>
    </div>
  );
}

function CtoDecisionPanel() {
  return (
    <div className="grid gap-4 lg:grid-cols-12">
      <div className="lg:col-span-12">
        <IllustrativeNote />
      </div>
      <ChartCard
        title="Production readiness score"
        meta="Illustrative"
        className="lg:col-span-4"
      >
        <div className="grid grid-cols-4 gap-2 pt-1">
          {ctoScores.map((score) => (
            <RadialGauge
              key={score.label}
              label={score.label}
              value={score.value}
            />
          ))}
        </div>
      </ChartCard>

      <ChartCard
        title="Agentic inference latency"
        meta="Illustrative · p50 ms"
        className="lg:col-span-5"
      >
        <LatencyBars />
      </ChartCard>

      <ChartCard
        title="AI capability readiness"
        meta="Illustrative"
        className="lg:col-span-3"
      >
        <ReadinessBars />
      </ChartCard>
    </div>
  );
}

function ExploreDecisionPanel() {
  return (
    <div className="grid gap-4 lg:grid-cols-12">
      <div className="lg:col-span-12">
        <IllustrativeNote />
      </div>
      <ChartCard
        title="Service demand index"
        meta="Illustrative"
        className="lg:col-span-7"
      >
        <DemandBars />
      </ChartCard>

      <ChartCard
        title="Engagement funnel"
        meta="Illustrative"
        className="lg:col-span-5"
      >
        <FunnelChart />
        <p className="mt-4 text-[11px] leading-relaxed text-white/40">
          Share your use case on a strategy call—we map consulting, build, or
          embedded AI talent to what you need next.
        </p>
      </ChartCard>
    </div>
  );
}

function PathDetails({ pathId }: { pathId: string }) {
  if (pathId === "outcomes") return <CeoDecisionPanel />;
  if (pathId === "systems") return <CtoDecisionPanel />;
  return <ExploreDecisionPanel />;
}

export function ChooseYourPath() {
  const [selected, setSelected] = useState<string | null>(null);
  const activePath = audiencePaths.paths.find((path) => path.id === selected);

  return (
    <section
      id="path"
      className="relative overflow-hidden border-t border-white/[0.06] bg-ink py-16 md:py-28"
    >
      <div className="noise-overlay" />
      <div className="pointer-events-none absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-12 w-full md:mb-14">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              {audiencePaths.eyebrow}
            </p>
          </Reveal>
          <TextReveal
            text={audiencePaths.title}
            className="font-display mt-4 text-[2rem] leading-[1.15] text-white md:text-5xl lg:text-6xl"
          />
          <Reveal delay={0.12}>
            <p className="mt-5 w-full text-base leading-relaxed text-white/50 md:text-lg">
              {audiencePaths.description}
            </p>
          </Reveal>
        </div>

        <div
          role="radiogroup"
          aria-label="Choose your path"
          className="grid gap-4 md:grid-cols-3 md:gap-5"
        >
          {audiencePaths.paths.map((path, index) => {
            const Icon = icons[path.icon];
            const isSelected = selected === path.id;

            return (
              <Reveal key={path.id} delay={index * 0.08} className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full"
                >
                  <button
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => setSelected(path.id)}
                    className={cn(
                      "group relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[1.5rem] text-left",
                      "border bg-gradient-to-b from-ink-elevated to-ink-soft p-5 md:p-6",
                      "transition-[border-color,box-shadow] duration-500",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50",
                      isSelected
                        ? "border-cyan/45 shadow-[0_28px_80px_rgba(0,0,0,0.35)]"
                        : "border-white/10 hover:border-cyan/30 hover:shadow-[0_28px_80px_rgba(0,0,0,0.35)]",
                    )}
                  >
                    <div
                      className={cn(
                        "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,190,212,0.12),transparent_55%)] transition-opacity duration-500",
                        isSelected
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100",
                      )}
                    />
                    <div
                      className={cn(
                        "pointer-events-none absolute inset-0 editorial-grid transition-opacity duration-500",
                        isSelected
                          ? "opacity-25"
                          : "opacity-0 group-hover:opacity-25",
                      )}
                    />

                    <div className="relative flex items-start justify-between gap-3">
                      <div className="inline-flex size-10 items-center justify-center rounded-xl border border-cyan/25 bg-cyan-soft text-cyan transition-transform duration-500 group-hover:scale-105">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                      <span
                        aria-hidden
                        className={cn(
                          "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors",
                          isSelected
                            ? "border-cyan bg-cyan/20"
                            : "border-white/25 bg-transparent",
                        )}
                      >
                        <span
                          className={cn(
                            "size-2 rounded-full transition-colors",
                            isSelected ? "bg-cyan" : "bg-transparent",
                          )}
                        />
                      </span>
                    </div>

                    <p className="relative mt-4 text-[11px] tracking-[0.18em] text-white/40 uppercase">
                      {path.meta}
                    </p>

                    <h3 className="font-display relative mt-2 max-w-md text-lg leading-snug text-white md:text-xl">
                      {path.title}
                    </h3>

                    <p className="relative mt-2.5 max-w-md text-sm leading-relaxed text-white/50">
                      {path.description}
                    </p>

                    <div className="relative mt-5 flex items-center justify-between gap-3">
                      <span className="font-mono text-xs text-white/30">
                        {path.label}
                      </span>
                      <span
                        className={cn(
                          "text-sm transition-colors",
                          isSelected ? "text-cyan" : "text-white/40",
                        )}
                      >
                        {isSelected ? "Selected" : "Select"}
                      </span>
                    </div>

                    <div
                      className={cn(
                        "pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-cyan via-cyan/40 to-transparent transition-transform duration-500",
                        isSelected
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100",
                      )}
                    />
                  </button>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {activePath ? (
            <motion.div
              key={activePath.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 md:mt-6"
            >
              <div className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[11px] tracking-[0.2em] text-cyan uppercase">
                    {activePath.meta}
                  </p>
                  <h4 className="font-display mt-2 text-2xl text-white md:text-3xl">
                    {activePath.title}
                  </h4>
                </div>
                <Link
                  href={activePath.href}
                  className="inline-flex items-center gap-2 text-sm text-cyan transition-colors hover:text-white"
                >
                  {activePath.cta}
                  <ArrowUpRight size={16} />
                </Link>
              </div>

              <PathDetails pathId={activePath.id} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
