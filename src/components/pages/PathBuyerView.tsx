import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, Check } from "lucide-react";

import type { PathBlock, PathMidCta, PathPage } from "@/data/pages/pathBuyer";
import { PageHero } from "@/components/layout/PageHero";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type PathBuyerViewProps = {
  page: PathPage;
  crumbs?: { label: string; href: string }[];
};

function SectionShell({
  children,
  tone = "ink",
}: {
  children: ReactNode;
  tone?: "ink" | "soft";
}) {
  return (
    <section
      className={cn(
        "py-16 md:py-20",
        tone === "ink" && "bg-ink text-white",
        tone === "soft" && "border-t border-white/[0.06] bg-ink-soft text-white",
      )}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">{children}</div>
    </section>
  );
}

function PerspectiveSection({
  title,
  body,
}: {
  title: string;
  body: string[];
}) {
  return (
    <section className="w-full bg-ink py-20 text-white md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8">
        <Reveal>
          <div className="w-full">
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Perspective
            </p>
            <h2 className="font-display mt-4 w-full text-[2rem] leading-[1.12] text-white md:mt-5 md:text-5xl lg:text-[3.25rem]">
              {title}
            </h2>
            <div className="mt-6 w-full space-y-5 md:mt-8 md:columns-2 md:gap-x-12 md:space-y-0 lg:columns-3 lg:gap-x-14">
              {body.map((para) => (
                <p
                  key={para.slice(0, 48)}
                  className="mb-5 break-inside-avoid text-base leading-[1.65] text-white/80 md:text-lg"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="font-display mt-3 max-w-3xl text-3xl text-white md:text-4xl">
      {children}
    </h2>
  );
}

function SectionIntro({ children }: { children?: string }) {
  if (!children) return null;
  return (
    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/50 md:text-base">
      {children}
    </p>
  );
}

function MidCtaBand({ cta }: { cta: PathMidCta }) {
  return (
    <div className="flex flex-col gap-6 rounded-[1.5rem] border border-cyan/25 bg-cyan/[0.06] p-6 md:flex-row md:items-end md:justify-between md:p-8 lg:gap-10">
      <div className="w-full min-w-0 max-w-2xl">
        <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
          {cta.eyebrow}
        </p>
        <h3 className="font-display mt-2 text-2xl text-white md:text-3xl">
          {cta.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/55">
          {cta.description}
        </p>
      </div>
      <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
        <MagneticButton
          href={cta.primary.href}
          className="min-h-12 justify-center bg-cyan px-6 py-3 text-sm text-white hover:bg-white hover:text-ink"
        >
          {cta.primary.label}
        </MagneticButton>
        {cta.secondary ? (
          <Link
            href={cta.secondary.href}
            className="group inline-flex min-h-12 items-center justify-center gap-2 px-2 text-sm text-white/60 hover:text-white"
          >
            {cta.secondary.label}
            <ArrowUpRight size={14} />
          </Link>
        ) : null}
      </div>
    </div>
  );
}

function BarsVisual({
  title,
  intro,
  note,
  items,
}: Extract<PathBlock, { type: "bars" }>) {
  return (
    <>
      <Reveal>
        <SectionEyebrow>Executive KPI dashboard</SectionEyebrow>
        <SectionTitle>{title}</SectionTitle>
        <SectionIntro>{intro}</SectionIntro>
      </Reveal>
      <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-2">
        {items.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.04}>
            <div className="rounded-[1.25rem] border border-white/10 bg-ink p-5 md:p-6">
              <div className="flex items-end justify-between gap-3">
                <p className="text-sm font-medium text-white">{item.label}</p>
                <p className="font-mono text-xs text-cyan">
                  {item.before} → {item.after}
                </p>
              </div>
              <div className="mt-4 space-y-2">
                <div>
                  <p className="mb-1 text-[10px] tracking-[0.16em] text-white/35 uppercase">
                    Before
                  </p>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-white/25"
                      style={{ width: `${item.before}%` }}
                    />
                  </div>
                </div>
                <div>
                  <p className="mb-1 text-[10px] tracking-[0.16em] text-cyan/70 uppercase">
                    After
                  </p>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-cyan"
                      style={{ width: `${item.after}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      {note ? (
        <p className="mt-6 text-[11px] leading-relaxed text-white/35">{note}</p>
      ) : null}
    </>
  );
}

function RoiMixVisual({
  title,
  intro,
  note,
  items,
}: Extract<PathBlock, { type: "roiMix" }>) {
  return (
    <>
      <Reveal>
        <SectionEyebrow>ROI framework</SectionEyebrow>
        <SectionTitle>{title}</SectionTitle>
        <SectionIntro>{intro}</SectionIntro>
      </Reveal>
      <div className="mt-12 space-y-4 md:mt-14">
        {items.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.04}>
            <div className="grid gap-3 border-b border-white/10 pb-4 md:grid-cols-[160px_1fr_auto] md:items-center">
              <p className="text-sm font-medium text-white">{item.label}</p>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-deep to-cyan"
                  style={{ width: `${item.value}%` }}
                />
              </div>
              <p className="font-mono text-sm text-cyan md:text-right">
                {item.value}%
              </p>
              <p className="text-xs text-white/40 md:col-span-3">{item.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
      {note ? (
        <p className="mt-6 text-[11px] leading-relaxed text-white/35">{note}</p>
      ) : null}
    </>
  );
}

const CHART_COLORS = ["#00bed4", "#5ee1f0", "#0891a8", "#164e63", "#7dd3e8", "#0e7490"];

function LineChartVisual({
  title,
  intro,
  note,
  meta,
  labels,
  series,
}: Extract<PathBlock, { type: "lineChart" }>) {
  const w = 560;
  const h = 220;
  const padX = 28;
  const padY = 24;
  const max = Math.max(...series, 100);
  const points = series.map((v, i) => {
    const x = padX + (i / Math.max(series.length - 1, 1)) * (w - padX * 2);
    const y = h - padY - (v / max) * (h - padY * 2);
    return { x, y, v, label: labels[i] ?? `${i + 1}` };
  });
  const line = points.map((p) => `${p.x},${p.y}`).join(" ");
  const area = `${padX},${h - padY} ${line} ${points[points.length - 1]?.x ?? padX},${h - padY}`;

  return (
    <>
      <Reveal>
        <SectionEyebrow>Trend chart</SectionEyebrow>
        <SectionTitle>{title}</SectionTitle>
        <SectionIntro>{intro}</SectionIntro>
      </Reveal>
      <Reveal delay={0.06}>
        <div className="mt-12 overflow-hidden rounded-[1.5rem] border border-white/10 bg-ink p-5 md:mt-14 md:p-8">
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="text-[10px] tracking-[0.16em] text-white/35 uppercase">
              Illustrative
            </p>
            {meta ? (
              <p className="font-mono text-[10px] text-cyan/70">{meta}</p>
            ) : null}
          </div>
          <svg
            viewBox={`0 0 ${w} ${h}`}
            className="h-auto w-full"
            role="img"
            aria-label={title}
          >
            {[0.25, 0.5, 0.75, 1].map((t) => {
              const y = h - padY - t * (h - padY * 2);
              return (
                <line
                  key={t}
                  x1={padX}
                  x2={w - padX}
                  y1={y}
                  y2={y}
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1"
                />
              );
            })}
            <polygon points={area} fill="rgba(0,190,212,0.12)" />
            <polyline
              points={line}
              fill="none"
              stroke="#00bed4"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {points.map((p) => (
              <g key={p.label}>
                <circle cx={p.x} cy={p.y} r="4" fill="#00bed4" />
                <text
                  x={p.x}
                  y={h - 6}
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.4)"
                  fontSize="11"
                >
                  {p.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </Reveal>
      {note ? (
        <p className="mt-6 text-[11px] leading-relaxed text-white/35">{note}</p>
      ) : null}
    </>
  );
}

function DonutChartVisual({
  title,
  intro,
  note,
  items,
}: Extract<PathBlock, { type: "donutChart" }>) {
  const total = items.reduce((sum, item) => sum + item.value, 0) || 1;
  const size = 220;
  const stroke = 28;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;

  return (
    <>
      <Reveal>
        <SectionEyebrow>Portfolio chart</SectionEyebrow>
        <SectionTitle>{title}</SectionTitle>
        <SectionIntro>{intro}</SectionIntro>
      </Reveal>
      <div className="mt-12 grid items-center gap-10 md:mt-14 lg:grid-cols-[240px_1fr]">
        <Reveal>
          <div className="relative mx-auto w-[220px]">
            <svg
              viewBox={`0 0 ${size} ${size}`}
              className="h-auto w-full -rotate-90"
              role="img"
              aria-label={title}
            >
              <circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth={stroke}
              />
              {items.map((item, index) => {
                const len = (item.value / total) * c;
                const dash = `${len} ${c - len}`;
                const el = (
                  <circle
                    key={item.label}
                    cx={size / 2}
                    cy={size / 2}
                    r={r}
                    fill="none"
                    stroke={CHART_COLORS[index % CHART_COLORS.length]}
                    strokeWidth={stroke}
                    strokeDasharray={dash}
                    strokeDashoffset={-offset}
                    strokeLinecap="butt"
                  />
                );
                offset += len;
                return el;
              })}
            </svg>
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <p className="font-display text-3xl text-white">100%</p>
              <p className="text-[10px] tracking-[0.16em] text-white/40 uppercase">
                Portfolio
              </p>
            </div>
          </div>
        </Reveal>
        <div className="space-y-4">
          {items.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.04}>
              <div className="flex items-start gap-3 border-b border-white/10 pb-4">
                <span
                  className="mt-1.5 size-2.5 shrink-0 rounded-full"
                  style={{
                    background: CHART_COLORS[index % CHART_COLORS.length],
                  }}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-sm font-medium text-white">{item.label}</p>
                    <p className="font-mono text-sm text-cyan">{item.value}%</p>
                  </div>
                  <p className="mt-1 text-xs text-white/40">{item.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      {note ? (
        <p className="mt-6 text-[11px] leading-relaxed text-white/35">{note}</p>
      ) : null}
    </>
  );
}

function FunnelChartVisual({
  title,
  intro,
  note,
  items,
}: Extract<PathBlock, { type: "funnelChart" }>) {
  return (
    <>
      <Reveal>
        <SectionEyebrow>Funnel chart</SectionEyebrow>
        <SectionTitle>{title}</SectionTitle>
        <SectionIntro>{intro}</SectionIntro>
      </Reveal>
      <div className="mt-12 space-y-3 md:mt-14">
        {items.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.04}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
              <p className="w-full shrink-0 text-sm text-white/70 sm:w-40">
                {item.label}
              </p>
              <div className="min-w-0 flex-1">
                <div
                  className="flex items-center justify-between gap-3 rounded-lg border border-cyan/25 bg-gradient-to-r from-cyan/25 to-cyan/5 px-4 py-3"
                  style={{ width: `${Math.max(item.value, 28)}%` }}
                >
                  <span className="truncate text-xs text-white/55">
                    {item.detail}
                  </span>
                  <span className="font-mono text-sm text-cyan">
                    {item.value}%
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      {note ? (
        <p className="mt-6 text-[11px] leading-relaxed text-white/35">{note}</p>
      ) : null}
    </>
  );
}

function ScoreChartVisual({
  title,
  intro,
  note,
  items,
}: Extract<PathBlock, { type: "scoreChart" }>) {
  return (
    <>
      <Reveal>
        <SectionEyebrow>Score chart</SectionEyebrow>
        <SectionTitle>{title}</SectionTitle>
        <SectionIntro>{intro}</SectionIntro>
      </Reveal>
      <div className="mt-12 grid gap-4 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.04}>
            <div className="rounded-[1.25rem] border border-white/10 bg-ink p-5 md:p-6">
              <div className="flex items-end justify-between gap-3">
                <p className="text-sm font-medium text-white">{item.label}</p>
                <p className="font-display text-3xl text-cyan">{item.value}</p>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-deep to-cyan"
                  style={{ width: `${item.value}%` }}
                />
              </div>
              <p className="mt-2 font-mono text-[10px] text-white/35">
                Target posture / 100
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      {note ? (
        <p className="mt-6 text-[11px] leading-relaxed text-white/35">{note}</p>
      ) : null}
    </>
  );
}

function PipelineChartVisual({
  title,
  intro,
  note,
  items,
}: Extract<PathBlock, { type: "pipelineChart" }>) {
  const max = Math.max(...items.map((i) => i.value), 1);

  return (
    <>
      <Reveal>
        <SectionEyebrow>Pipeline chart</SectionEyebrow>
        <SectionTitle>{title}</SectionTitle>
        <SectionIntro>{intro}</SectionIntro>
      </Reveal>
      <Reveal delay={0.06}>
        <div className="mt-12 overflow-hidden rounded-[1.5rem] border border-white/10 bg-ink p-5 md:mt-14 md:p-8">
          <div className="flex h-48 items-end gap-3 md:h-56 md:gap-4">
            {items.map((item) => (
              <div
                key={item.label}
                className="flex min-w-0 flex-1 flex-col items-center gap-2"
              >
                <p className="font-mono text-xs text-cyan">
                  {item.value}
                  {item.unit ?? ""}
                </p>
                <div className="flex w-full flex-1 items-end">
                  <div
                    className="w-full rounded-t-md bg-gradient-to-t from-cyan-deep to-cyan"
                    style={{ height: `${(item.value / max) * 100}%` }}
                  />
                </div>
                <p className="text-center text-[11px] text-white/45">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      {note ? (
        <p className="mt-6 text-[11px] leading-relaxed text-white/35">{note}</p>
      ) : null}
    </>
  );
}

function MaturityVisual({
  title,
  intro,
  stages,
}: Extract<PathBlock, { type: "maturity" }>) {
  return (
    <>
      <Reveal>
        <SectionEyebrow>Maturity model</SectionEyebrow>
        <SectionTitle>{title}</SectionTitle>
        <SectionIntro>{intro}</SectionIntro>
      </Reveal>
      <div className="mt-12 grid gap-4 md:mt-14 md:grid-cols-2 lg:grid-cols-4">
        {stages.map((stage, index) => (
          <Reveal key={stage.stage} delay={index * 0.05}>
            <div className="relative h-full overflow-hidden rounded-[1.25rem] border border-white/10 bg-ink p-5 md:p-6">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan via-cyan/40 to-transparent" />
              <p className="font-mono text-sm text-cyan">{stage.stage}</p>
              <h3 className="font-display mt-3 text-xl text-white">
                {stage.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                {stage.copy}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}

function LayersVisual({
  title,
  intro,
  layers,
}: Extract<PathBlock, { type: "layers" }>) {
  return (
    <>
      <Reveal>
        <SectionEyebrow>Architecture</SectionEyebrow>
        <SectionTitle>{title}</SectionTitle>
        <SectionIntro>{intro}</SectionIntro>
      </Reveal>
      <div className="mt-12 space-y-3 md:mt-14">
        {layers.map((layer, index) => (
          <Reveal key={layer.name} delay={index * 0.04}>
            <div className="grid gap-4 rounded-[1.25rem] border border-white/10 bg-ink px-5 py-4 md:grid-cols-[200px_1fr] md:items-center md:px-6">
              <p className="text-sm font-semibold text-cyan">{layer.name}</p>
              <div className="flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/65"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}

function ChecklistVisual({
  title,
  intro,
  items,
}: Extract<PathBlock, { type: "checklist" }>) {
  return (
    <>
      <Reveal>
        <SectionEyebrow>Readiness</SectionEyebrow>
        <SectionTitle>{title}</SectionTitle>
        <SectionIntro>{intro}</SectionIntro>
      </Reveal>
      <div className="mt-12 grid gap-3 md:mt-14 md:grid-cols-2">
        {items.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.03}>
            <div className="flex gap-3 rounded-[1.25rem] border border-white/10 bg-ink p-5">
              <Check size={16} className="mt-0.5 shrink-0 text-cyan" />
              <div>
                <p className="text-sm font-medium text-white">{item.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/50">
                  {item.detail}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}

function TimelineVisual({
  title,
  intro,
  items,
}: Extract<PathBlock, { type: "timeline" }>) {
  return (
    <>
      <Reveal>
        <SectionEyebrow>Roadmap</SectionEyebrow>
        <SectionTitle>{title}</SectionTitle>
        <SectionIntro>{intro}</SectionIntro>
      </Reveal>
      <div className="mt-12 grid gap-6 md:mt-14 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <Reveal key={item.phase} delay={index * 0.05}>
            <div className="border-t border-cyan/40 pt-5">
              <p className="font-mono text-xs text-cyan">{item.phase}</p>
              <h3 className="font-display mt-3 text-xl text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                {item.copy}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}

function DecisionMatrixVisual({
  title,
  intro,
  columns,
  rows,
}: Extract<PathBlock, { type: "decisionMatrix" }>) {
  return (
    <>
      <Reveal>
        <SectionEyebrow>Decision matrix</SectionEyebrow>
        <SectionTitle>{title}</SectionTitle>
        <SectionIntro>{intro}</SectionIntro>
      </Reveal>
      <div className="mt-12 overflow-x-auto md:mt-14">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-white/15">
              <th className="py-3 pr-4 text-[11px] font-medium tracking-[0.16em] text-white/40 uppercase">
                Need
              </th>
              {columns.map((col) => (
                <th
                  key={col}
                  className="py-3 pr-4 text-[11px] font-medium tracking-[0.16em] text-white/40 uppercase"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.need} className="border-b border-white/10">
                <td className="py-4 pr-4 align-top font-medium text-white">
                  {row.need}
                </td>
                <td className="py-4 pr-4 align-top text-white/55">{row.a}</td>
                <td className="py-4 pr-4 align-top text-white/55">{row.b}</td>
                <td className="py-4 align-top">
                  {row.c.startsWith("/") ? (
                    <Link
                      href={row.c}
                      className="inline-flex items-center gap-1 text-cyan hover:text-white"
                    >
                      Open
                      <ArrowUpRight size={13} />
                    </Link>
                  ) : (
                    <span className="text-white/55">{row.c}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function ChipsVisual({
  title,
  intro,
  groups,
}: Extract<PathBlock, { type: "chips" }>) {
  return (
    <>
      <Reveal>
        <SectionEyebrow>Capability map</SectionEyebrow>
        <SectionTitle>{title}</SectionTitle>
        <SectionIntro>{intro}</SectionIntro>
      </Reveal>
      <div className="mt-12 grid gap-6 md:mt-14 lg:grid-cols-3">
        {groups.map((group, index) => (
          <Reveal key={group.label} delay={index * 0.05}>
            <div className="h-full rounded-[1.25rem] border border-white/10 bg-ink p-5 md:p-6">
              <p className="text-[11px] tracking-[0.18em] text-cyan uppercase">
                {group.label}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}

function CompareVisual({
  title,
  leftTitle,
  leftItems,
  rightTitle,
  rightItems,
}: Extract<PathBlock, { type: "compare" }>) {
  return (
    <>
      <Reveal>
        <SectionEyebrow>Dual view</SectionEyebrow>
        <SectionTitle>{title}</SectionTitle>
      </Reveal>
      <div className="mt-12 grid gap-6 md:mt-14 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-[1.75rem] border border-white/10 bg-ink p-7 md:p-9">
            <h3 className="font-display text-2xl text-white">{leftTitle}</h3>
            <ul className="mt-5 space-y-3">
              {leftItems.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-white/50"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="h-full rounded-[1.75rem] border border-cyan/25 bg-cyan/5 p-7 md:p-9">
            <h3 className="font-display text-2xl text-white">{rightTitle}</h3>
            <ul className="mt-5 space-y-3">
              {rightItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-white/65"
                >
                  <Check size={16} className="mt-0.5 shrink-0 text-cyan" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </>
  );
}

function RiskVisual({
  title,
  intro,
  rows,
}: Extract<PathBlock, { type: "risk" }>) {
  return (
    <>
      <Reveal>
        <SectionEyebrow>Risk matrix</SectionEyebrow>
        <SectionTitle>{title}</SectionTitle>
        <SectionIntro>{intro}</SectionIntro>
      </Reveal>
      <div className="mt-12 overflow-x-auto md:mt-14">
        <table className="w-full min-w-[680px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-white/15">
              <th className="py-3 pr-4 text-[11px] tracking-[0.16em] text-white/40 uppercase">
                Risk
              </th>
              <th className="py-3 pr-4 text-[11px] tracking-[0.16em] text-white/40 uppercase">
                Without production design
              </th>
              <th className="py-3 text-[11px] tracking-[0.16em] text-white/40 uppercase">
                With InheritX approach
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.risk} className="border-b border-white/10">
                <td className="py-4 pr-4 align-top font-medium text-cyan">
                  {row.risk}
                </td>
                <td className="py-4 pr-4 align-top text-white/45">
                  {row.without}
                </td>
                <td className="py-4 align-top text-white/70">{row.with}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function renderBlock(block: PathBlock, index: number) {
  if (block.type === "narrative") {
    return (
      <PerspectiveSection
        key={`narrative-${index}`}
        title={block.title}
        body={block.body}
      />
    );
  }

  const tone: "ink" | "soft" = index % 2 === 0 ? "ink" : "soft";

  if (block.type === "midCta") {
    return (
      <SectionShell key={`midCta-${index}`} tone={tone}>
        <MidCtaBand cta={block} />
      </SectionShell>
    );
  }

  const inner = (() => {
    switch (block.type) {
      case "bullets":
        return (
          <>
            <Reveal>
              <SectionEyebrow>Decision signals</SectionEyebrow>
              <SectionTitle>{block.title}</SectionTitle>
              <SectionIntro>{block.intro}</SectionIntro>
            </Reveal>
            <div className="mt-12 grid gap-4 md:mt-14 md:grid-cols-2">
              {block.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.04}>
                  <article className="h-full rounded-[1.5rem] border border-white/10 bg-ink p-6 md:p-7">
                    <h3 className="font-display text-xl text-white md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/50">
                      {item.copy}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </>
        );
      case "steps":
        return (
          <>
            <Reveal>
              <SectionEyebrow>How we engage</SectionEyebrow>
              <SectionTitle>{block.title}</SectionTitle>
              <SectionIntro>{block.intro}</SectionIntro>
            </Reveal>
            <div className="mt-12 grid gap-6 md:mt-14 md:grid-cols-2 lg:grid-cols-4">
              {block.items.map((item, i) => (
                <Reveal key={item.step} delay={i * 0.05}>
                  <div className="border-t border-white/10 pt-6">
                    <p className="font-mono text-sm text-cyan">{item.step}</p>
                    <h3 className="font-display mt-3 text-2xl text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/50">
                      {item.copy}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </>
        );
      case "faq":
        return (
          <>
            <Reveal>
              <SectionEyebrow>FAQ</SectionEyebrow>
              <SectionTitle>{block.title}</SectionTitle>
            </Reveal>
            <div className="mt-12 max-w-3xl divide-y divide-white/10 border-y border-white/10 md:mt-14">
              {block.items.map((item) => (
                <div key={item.q} className="py-5">
                  <h3 className="text-base font-medium text-white md:text-lg">
                    {item.q}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </>
        );
      case "related":
        return (
          <>
            <Reveal>
              <SectionEyebrow>Continue</SectionEyebrow>
              <SectionTitle>{block.title}</SectionTitle>
            </Reveal>
            <div className="mt-10 flex flex-wrap gap-3 md:mt-12">
              {block.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink px-4 py-2.5 text-sm text-white/65 transition-colors hover:border-cyan/40 hover:text-white"
                >
                  {link.label}
                  <ArrowUpRight
                    size={14}
                    className="text-cyan transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              ))}
            </div>
          </>
        );
      case "bars":
        return <BarsVisual {...block} />;
      case "roiMix":
        return <RoiMixVisual {...block} />;
      case "lineChart":
        return <LineChartVisual {...block} />;
      case "donutChart":
        return <DonutChartVisual {...block} />;
      case "funnelChart":
        return <FunnelChartVisual {...block} />;
      case "scoreChart":
        return <ScoreChartVisual {...block} />;
      case "pipelineChart":
        return <PipelineChartVisual {...block} />;
      case "maturity":
        return <MaturityVisual {...block} />;
      case "layers":
        return <LayersVisual {...block} />;
      case "checklist":
        return <ChecklistVisual {...block} />;
      case "timeline":
        return <TimelineVisual {...block} />;
      case "decisionMatrix":
        return <DecisionMatrixVisual {...block} />;
      case "chips":
        return <ChipsVisual {...block} />;
      case "compare":
        return <CompareVisual {...block} />;
      case "risk":
        return <RiskVisual {...block} />;
      default:
        return null;
    }
  })();

  if (!inner) return null;

  return (
    <SectionShell key={`${block.type}-${index}`} tone={tone}>
      {inner}
    </SectionShell>
  );
}

export function PathBuyerView({ page, crumbs }: PathBuyerViewProps) {
  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        primaryCta={page.primaryCta}
        secondaryCta={page.secondaryCta}
      />

      {crumbs && crumbs.length > 0 ? (
        <div className="border-b border-white/[0.06] bg-ink">
          <nav
            aria-label="Breadcrumb"
            className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-2 px-5 py-4 text-xs text-white/35 md:px-8 md:py-5"
          >
            {crumbs.map((crumb, i) => (
              <span key={crumb.href} className="inline-flex items-center gap-2">
                {i > 0 && <span aria-hidden>/</span>}
                <Link href={crumb.href} className="hover:text-white/70">
                  {crumb.label}
                </Link>
              </span>
            ))}
            <span aria-hidden>/</span>
            <span className="text-white/55">{page.eyebrow}</span>
          </nav>
        </div>
      ) : null}

      <section className="border-b border-white/[0.06] bg-ink">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-white/[0.06] md:grid-cols-4">
          {page.proof.map((item) => (
            <div key={item.label} className="bg-ink px-5 py-8 md:px-8 md:py-10">
              <p className="font-display text-3xl text-cyan md:text-4xl">
                {item.value}
              </p>
              <p className="mt-2 text-xs text-white/40 md:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {page.blocks.map((block, index) => renderBlock(block, index))}

      <section className="border-t border-white/[0.06] bg-ink-soft py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <MidCtaBand cta={page.closing} />
        </div>
      </section>
    </>
  );
}
