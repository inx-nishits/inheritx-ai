import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowUpRight, Check } from "lucide-react";

import type { PathBlock, PathMidCta, PathPage } from "@/data/pages/pathBuyer";
import { getCaseStudy } from "@/data/caseStudies";
import { CtaConversionBand } from "@/components/cta/CtaConversionBand";
import { PageHero } from "@/components/layout/PageHero";
import { PathFloatingCta } from "@/components/pages/PathFloatingCta";
import { Reveal } from "@/components/ui/Reveal";
import { ctaPairSecondaryFamily } from "@/data/cta/families";
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
      <div className="mx-auto max-w-page px-5 md:px-8">{children}</div>
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
  const [lead, ...rest] = body;

  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-ink py-20 text-white md:py-28 lg:py-32">
      <div className="noise-overlay" />
      <div className="pointer-events-none absolute inset-0 editorial-grid opacity-20" />
      <div className="pointer-events-none absolute -top-32 right-0 h-[380px] w-[380px] rounded-full bg-cyan/[0.07] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-page px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16 xl:gap-24">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Perspective
            </p>
            <h2 className="font-display mt-4 max-w-xl text-[2rem] leading-[1.12] text-white md:mt-5 md:text-5xl lg:text-[3.15rem]">
              {title}
            </h2>
            <div
              className="mt-8 hidden h-px w-24 bg-gradient-to-r from-cyan to-transparent lg:block"
              aria-hidden
            />
          </Reveal>

          <div className="min-w-0">
            {lead ? (
              <Reveal delay={0.08}>
                <p className="border-l-2 border-cyan pl-5 text-lg leading-[1.65] text-white/85 md:pl-6 md:text-xl md:leading-[1.6]">
                  {lead}
                </p>
              </Reveal>
            ) : null}

            {rest.length > 0 ? (
              <div className="mt-8 space-y-6 border-t border-white/10 pt-8 md:mt-10 md:pt-10">
                {rest.map((para, index) => (
                  <Reveal key={para.slice(0, 48)} delay={0.12 + index * 0.04}>
                    <p className="text-base leading-[1.7] text-white/55 md:text-lg">
                      {para}
                    </p>
                  </Reveal>
                ))}
              </div>
            ) : null}
          </div>
        </div>
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

function proofFocusLines(
  study: NonNullable<ReturnType<typeof getCaseStudy>>,
  focus: "business" | "engineering" | "ai",
) {
  if (focus === "business") {
    return (study.businessOutcomes ?? study.highlights).slice(0, 2);
  }
  if (focus === "engineering") {
    return (study.architecture ?? study.highlights).slice(0, 2);
  }
  return (study.aiCapabilities ?? study.highlights).slice(0, 2);
}

function ProofCasesVisual({
  title,
  intro,
  cases,
}: Extract<PathBlock, { type: "proofCases" }>) {
  const studies = cases
    .map((item) => {
      const study = getCaseStudy(item.id);
      if (!study) return null;
      return { ...item, study };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  if (studies.length === 0) return null;

  return (
    <>
      <Reveal>
        <SectionEyebrow>Production proof</SectionEyebrow>
        <SectionTitle>{title}</SectionTitle>
        <SectionIntro>{intro}</SectionIntro>
      </Reveal>
      <div className="mt-12 grid gap-6 md:mt-14 md:grid-cols-2">
        {studies.map(({ study, focus }, index) => {
          const href = study.relatedProjectHref ?? `/case-studies/${study.id}`;
          const lines = proofFocusLines(study, focus);
          const metrics = study.results.slice(0, 2);

          return (
            <Reveal key={study.id} delay={index * 0.05}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink transition-colors hover:border-white/20">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={study.image}
                    alt=""
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-600 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full border border-white/15 bg-ink/70 px-3 py-1 text-[10px] tracking-[0.14em] text-cyan uppercase backdrop-blur-sm">
                    {study.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="font-display text-2xl text-white md:text-3xl">
                    {study.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-cyan/90">
                    {study.tagline}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {lines.map((line) => (
                      <li
                        key={line}
                        className="text-sm leading-relaxed text-white/50"
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/[0.08] pt-5">
                    {metrics.map((result) => (
                      <div key={result.label}>
                        <p className="font-display text-xl text-cyan md:text-2xl">
                          {result.value}
                        </p>
                        <p className="mt-1 text-[11px] leading-snug text-white/40">
                          {result.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={href}
                    className="group/cta mt-6 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-cyan"
                  >
                    {study.relatedProjectLabel ?? "Read the case study"}
                    <ArrowUpRight
                      size={14}
                      className="text-cyan transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </>
  );
}

function VizHeader({
  eyebrow,
  title,
  insight,
  intro,
}: {
  eyebrow: string;
  title: string;
  insight?: string;
  intro?: string;
}) {
  return (
    <Reveal>
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <SectionTitle>{title}</SectionTitle>
      {insight ? (
        <p className="mt-4 max-w-2xl border-l-2 border-cyan pl-4 text-base leading-relaxed text-white/80 md:text-lg">
          {insight}
        </p>
      ) : null}
      <SectionIntro>{intro}</SectionIntro>
    </Reveal>
  );
}

function ConceptualNote({ note }: { note?: string }) {
  if (!note) return null;
  return (
    <p className="mt-6 text-[11px] leading-relaxed text-white/35">{note}</p>
  );
}

function MidCtaBand({ cta }: { cta: PathMidCta }) {
  return (
    <CtaConversionBand
      variant="card"
      eyebrow={cta.eyebrow}
      title={cta.title}
      description={cta.description}
      primary={cta.primary}
      secondary={cta.secondary}
      secondaryFamily={ctaPairSecondaryFamily(
        cta.primary.href,
        cta.secondary?.href,
      )}
      location="page.mid"
    />
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

function SnapshotVisual({
  title,
  intro,
  items,
}: Extract<PathBlock, { type: "snapshot" }>) {
  return (
    <>
      <Reveal>
        <SectionEyebrow>Executive snapshot</SectionEyebrow>
        <SectionTitle>{title}</SectionTitle>
        <SectionIntro>{intro}</SectionIntro>
      </Reveal>
      <div className="mt-12 grid gap-px overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4 md:mt-14">
        {items.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.04} className="h-full">
            <article className="h-full bg-ink p-5 md:p-6">
              <p className="text-[11px] tracking-[0.18em] text-white/40 uppercase">
                {item.label}
              </p>
              <p className="font-display mt-3 text-2xl text-cyan md:text-[1.65rem]">
                {item.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                {item.copy}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}

function ImpactMatrixVisual({
  title,
  intro,
  insight,
  note,
  items,
}: Extract<PathBlock, { type: "impactMatrix" }>) {
  const quadrants: {
    key: string;
    impact: "high" | "medium";
    effort: "low" | "high";
    label: string;
    hint: string;
  }[] = [
    {
      key: "start",
      impact: "high",
      effort: "low",
      label: "Start here",
      hint: "High impact · lower complexity",
    },
    {
      key: "bets",
      impact: "high",
      effort: "high",
      label: "Platform bets",
      hint: "High impact · higher complexity",
    },
    {
      key: "later",
      impact: "medium",
      effort: "low",
      label: "Later / optional",
      hint: "Lower impact · lower complexity",
    },
    {
      key: "avoid",
      impact: "medium",
      effort: "high",
      label: "Do not fund first",
      hint: "Lower impact · higher complexity",
    },
  ];

  return (
    <>
      <VizHeader
        eyebrow="Conceptual framework"
        title={title}
        insight={insight}
        intro={intro}
      />
      <div className="mt-10 md:mt-12">
        <div className="mb-3 flex items-center justify-between gap-3 text-[10px] tracking-[0.16em] text-white/35 uppercase">
          <span>Lower implementation complexity</span>
          <span className="hidden sm:inline">Higher complexity</span>
        </div>
        <div
          className="grid gap-3 md:grid-cols-2"
          role="list"
          aria-label={`${title}. Conceptual opportunity map, not measured client data.`}
        >
          {quadrants.map((quad, index) => {
            const quadItems = items.filter(
              (item) => item.impact === quad.impact && item.effort === quad.effort,
            );
            if (quadItems.length === 0) return null;
            const emphasize = quad.key === "start";
            return (
              <Reveal key={quad.key} delay={index * 0.04}>
                <div
                  role="listitem"
                  className={cn(
                    "h-full rounded-[1.25rem] border p-5 md:p-6",
                    emphasize
                      ? "border-cyan/35 bg-cyan/[0.06]"
                      : "border-white/10 bg-ink",
                  )}
                >
                  <p
                    className={cn(
                      "text-[11px] tracking-[0.18em] uppercase",
                      emphasize ? "text-cyan" : "text-white/40",
                    )}
                  >
                    {quad.label}
                  </p>
                  <p className="mt-1 text-[11px] text-white/35">{quad.hint}</p>
                  <ul className="mt-4 space-y-4">
                    {quadItems.map((item) => (
                      <li key={item.title}>
                        <p className="text-sm font-medium text-white">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-white/50">
                          {item.copy}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-3 text-[10px] tracking-[0.16em] text-white/35 uppercase">
          Business impact: higher at top · lower at bottom
        </p>
      </div>
      <ConceptualNote note={note} />
    </>
  );
}

function FlowVisual({
  title,
  intro,
  insight,
  note,
  items,
}: Extract<PathBlock, { type: "flow" }>) {
  const compact = items.length > 5;

  return (
    <>
      <VizHeader
        eyebrow="Conceptual framework"
        title={title}
        insight={insight}
        intro={intro}
      />
      <ol
        className={cn(
          "mt-12 md:mt-14",
          compact
            ? "grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
            : "flex flex-col gap-3 lg:flex-row lg:items-stretch",
        )}
      >
        {items.map((item, index) => (
          <li key={item.step} className="min-w-0 flex-1">
            <Reveal delay={index * 0.04} className="h-full">
              <div className="flex h-full flex-col rounded-[1.25rem] border border-white/10 bg-ink p-5 md:p-6">
                <p className="font-mono text-xs text-cyan">{item.step}</p>
                <h3 className="font-display mt-3 text-xl text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {item.copy}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
      <ConceptualNote note={note} />
    </>
  );
}

function RankChartVisual({
  title,
  intro,
  insight,
  note,
  items,
}: Extract<PathBlock, { type: "rankChart" }>) {
  const max = Math.max(...items.map((item) => item.value), 1);

  return (
    <>
      <VizHeader
        eyebrow="Executive chart"
        title={title}
        insight={insight}
        intro={intro}
      />
      <div className="mt-12 space-y-4 md:mt-14">
        {items.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.04}>
            <div className="grid gap-2 sm:grid-cols-[minmax(0,200px)_1fr] sm:items-center sm:gap-5">
              <div>
                <p className="text-sm font-medium text-white">{item.label}</p>
                <p className="mt-0.5 text-xs text-white/40">{item.detail}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2.5 min-w-0 flex-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-cyan"
                    style={{ width: `${(item.value / max) * 100}%` }}
                  />
                </div>
                <span className="w-6 shrink-0 font-mono text-xs text-cyan">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <ConceptualNote note={note} />
    </>
  );
}

function TrendChartVisual({
  title,
  intro,
  insight,
  note,
  yLabel,
  labels,
  series,
}: Extract<PathBlock, { type: "trendChart" }>) {
  const w = 640;
  const h = 240;
  const padX = 36;
  const padY = 28;
  const max = Math.max(...series, 100);
  const points = series.map((v, i) => {
    const x = padX + (i / Math.max(series.length - 1, 1)) * (w - padX * 2);
    const y = h - padY - (v / max) * (h - padY * 2);
    return { x, y, label: labels[i] ?? `${i + 1}` };
  });
  const line = points.map((p) => `${p.x},${p.y}`).join(" ");
  const area = `${padX},${h - padY} ${line} ${points[points.length - 1]?.x ?? padX},${h - padY}`;

  return (
    <>
      <VizHeader
        eyebrow="Executive chart"
        title={title}
        insight={insight}
        intro={intro}
      />
      <Reveal delay={0.06}>
        <div className="mt-12 overflow-hidden rounded-[1.5rem] border border-white/10 bg-ink p-5 md:mt-14 md:p-8">
          <p className="mb-4 font-mono text-[10px] tracking-[0.16em] text-white/35 uppercase">
            {yLabel} · conceptual
          </p>
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
      <ConceptualNote note={note} />
    </>
  );
}

function RadarChartVisual({
  title,
  intro,
  insight,
  note,
  items,
}: Extract<PathBlock, { type: "radarChart" }>) {
  const size = 280;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 96;
  const n = items.length || 1;
  const point = (index: number, value: number) => {
    const angle = -Math.PI / 2 + (index / n) * Math.PI * 2;
    const r = (value / 100) * radius;
    return [cx + Math.cos(angle) * r, cy + Math.sin(angle) * r] as const;
  };
  const ring = (scale: number) =>
    items
      .map((_, i) => point(i, 100 * scale).join(","))
      .join(" ");
  const shape = items.map((item, i) => point(i, item.value).join(",")).join(" ");

  return (
    <>
      <VizHeader
        eyebrow="Executive chart"
        title={title}
        insight={insight}
        intro={intro}
      />
      <div className="mt-12 grid items-center gap-10 md:mt-14 lg:grid-cols-[280px_1fr]">
        <Reveal>
          <svg
            viewBox={`0 0 ${size} ${size}`}
            className="mx-auto h-auto w-full max-w-[280px]"
            role="img"
            aria-label={title}
          >
            {[0.4, 0.7, 1].map((scale) => (
              <polygon
                key={scale}
                points={ring(scale)}
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1"
              />
            ))}
            {items.map((_, i) => {
              const [x, y] = point(i, 100);
              return (
                <line
                  key={i}
                  x1={cx}
                  y1={cy}
                  x2={x}
                  y2={y}
                  stroke="rgba(255,255,255,0.08)"
                />
              );
            })}
            <polygon
              points={shape}
              fill="rgba(0,190,212,0.16)"
              stroke="#00bed4"
              strokeWidth="2"
            />
          </svg>
        </Reveal>
        <div className="space-y-4">
          {items.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.04}>
              <div>
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-sm font-medium text-white">{item.label}</p>
                  <p className="font-mono text-xs text-cyan">Target</p>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-cyan"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <ConceptualNote note={note} />
    </>
  );
}

function StageFunnelVisual({
  title,
  intro,
  insight,
  note,
  items,
}: Extract<PathBlock, { type: "stageFunnel" }>) {
  return (
    <>
      <VizHeader
        eyebrow="Executive chart"
        title={title}
        insight={insight}
        intro={intro}
      />
      <div className="mt-12 space-y-3 md:mt-14">
        {items.map((item, index) => {
          const width = 100 - index * (52 / Math.max(items.length - 1, 1));
          return (
            <Reveal key={item.label} delay={index * 0.04}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <p className="w-full shrink-0 font-mono text-xs text-cyan sm:w-10">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div
                  className="w-full rounded-lg border border-cyan/25 bg-gradient-to-r from-cyan/20 to-cyan/5 px-4 py-3 sm:w-[var(--funnel-w)]"
                  style={{ ["--funnel-w" as string]: `${Math.max(width, 48)}%` }}
                >
                  <p className="text-sm font-medium text-white">{item.label}</p>
                  <p className="mt-1 text-xs text-white/45">{item.detail}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
      <ConceptualNote note={note} />
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
              <SectionEyebrow>{block.eyebrow ?? "Decision signals"}</SectionEyebrow>
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
      case "snapshot":
        return <SnapshotVisual {...block} />;
      case "impactMatrix":
        return <ImpactMatrixVisual {...block} />;
      case "flow":
        return <FlowVisual {...block} />;
      case "rankChart":
        return <RankChartVisual {...block} />;
      case "trendChart":
        return <TrendChartVisual {...block} />;
      case "radarChart":
        return <RadarChartVisual {...block} />;
      case "stageFunnel":
        return <StageFunnelVisual {...block} />;
      case "proofCases":
        return <ProofCasesVisual {...block} />;
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
        crumbs={crumbs}
        currentCrumb={page.eyebrow}
      />

      <section className="border-b border-white/[0.06] bg-ink">
        <div className="mx-auto grid max-w-page grid-cols-2 gap-px bg-white/[0.06] md:grid-cols-4">
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

      <section
        id="path-closing"
        className="border-t border-white/[0.06] bg-ink-soft py-16 md:py-20"
      >
        <div className="mx-auto max-w-page px-5 md:px-8">
          <MidCtaBand cta={page.closing} />
        </div>
      </section>

      <PathFloatingCta
        teaser={page.floatingCta.teaser}
        label={page.floatingCta.label}
        href={page.floatingCta.href}
      />
    </>
  );
}
