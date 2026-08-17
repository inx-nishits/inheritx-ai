import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, Check } from "lucide-react";

import type { TopicPage, TopicSection } from "@/data/pages/topic";
import { CTA_LABELS } from "@/data/cta/copy";
import { CtaGhost } from "@/components/cta/CtaGhost";
import { CtaPrimary } from "@/components/cta/CtaPrimary";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { contactHref } from "@/lib/cta";
import { cn } from "@/lib/cn";

type TopicLandingViewProps = {
  topic: TopicPage;
  crumbs?: { label: string; href: string }[];
};

function SectionShell({
  children,
  tone = "ink",
  className,
}: {
  children: ReactNode;
  tone?: "ink" | "soft" | "paper";
  className?: string;
}) {
  return (
    <section
      className={cn(
        "py-16 md:py-20",
        tone === "ink" && "bg-ink text-white",
        tone === "soft" && "border-t border-white/[0.06] bg-ink-soft text-white",
        tone === "paper" && "bg-paper text-ink",
        className,
      )}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">{children}</div>
    </section>
  );
}

function ProofStrip({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <section className="border-b border-white/[0.06] bg-ink">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-white/[0.06] md:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="bg-ink px-5 py-8 md:px-8 md:py-10">
            <p className="font-display text-3xl text-cyan md:text-4xl">
              {item.value}
            </p>
            <p className="mt-2 text-xs text-white/40 md:text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function NarrativeBlock({
  title,
  body,
  light,
}: {
  title: string;
  body: string[];
  light?: boolean;
}) {
  return (
    <Reveal>
      <p
        className={cn(
          "text-[11px] tracking-[0.24em] uppercase",
          light ? "text-cyan-deep" : "text-cyan",
        )}
      >
        Perspective
      </p>
      <h2
        className={cn(
          "font-display mt-3 max-w-3xl text-3xl md:text-5xl",
          light ? "text-ink" : "text-white",
        )}
      >
        {title}
      </h2>
      <div className="mt-4 max-w-3xl space-y-4">
        {body.map((para) => (
          <p
            key={para.slice(0, 40)}
            className={cn(
              "text-sm leading-relaxed md:text-base",
              light ? "text-ink/60" : "text-white/55",
            )}
          >
            {para}
          </p>
        ))}
      </div>
    </Reveal>
  );
}

function BulletsBlock({
  title,
  intro,
  items,
  light,
}: {
  title: string;
  intro?: string;
  items: { title: string; copy: string }[];
  light?: boolean;
}) {
  return (
    <>
      <Reveal>
        <p
          className={cn(
            "text-[11px] tracking-[0.24em] uppercase",
            light ? "text-cyan-deep" : "text-cyan",
          )}
        >
          Capabilities
        </p>
        <h2
          className={cn(
            "font-display mt-3 max-w-3xl text-3xl md:text-4xl",
            light ? "text-ink" : "text-white",
          )}
        >
          {title}
        </h2>
        {intro && (
          <p
            className={cn(
              "mt-4 max-w-2xl text-sm",
              light ? "text-ink/55" : "text-white/50",
            )}
          >
            {intro}
          </p>
        )}
      </Reveal>
      <div className="mt-12 grid gap-4 md:mt-14 md:grid-cols-2">
        {items.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.04}>
            <article
              className={cn(
                "h-full rounded-[1.5rem] border p-6 md:p-7",
                light
                  ? "border-ink/10 bg-white"
                  : "border-white/10 bg-ink",
              )}
            >
              <h3
                className={cn(
                  "font-display text-xl md:text-2xl",
                  light ? "text-ink" : "text-white",
                )}
              >
                {item.title}
              </h3>
              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed",
                  light ? "text-ink/55" : "text-white/50",
                )}
              >
                {item.copy}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}

function StepsBlock({
  title,
  intro,
  items,
}: {
  title: string;
  intro?: string;
  items: { step: string; title: string; copy: string }[];
}) {
  return (
    <>
      <Reveal>
        <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
          How we engage
        </p>
        <h2 className="font-display mt-3 max-w-3xl text-3xl text-white md:text-4xl">
          {title}
        </h2>
        {intro && (
          <p className="mt-4 max-w-2xl text-sm text-white/50">{intro}</p>
        )}
      </Reveal>
      <div className="mt-12 grid gap-6 md:mt-14 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <Reveal key={item.step} delay={index * 0.05}>
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
}

function SplitBlock({
  title,
  leftTitle,
  leftBody,
  rightTitle,
  rightItems,
}: {
  title: string;
  leftTitle: string;
  leftBody: string[];
  rightTitle: string;
  rightItems: string[];
}) {
  return (
    <>
      <Reveal>
        <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
          Dual view
        </p>
        <h2 className="font-display mt-3 max-w-3xl text-3xl text-white md:text-4xl">
          {title}
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:mt-14 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-[1.75rem] border border-white/10 bg-ink p-7 md:p-9">
            <h3 className="font-display text-2xl text-white">{leftTitle}</h3>
            <div className="mt-5 space-y-3">
              {leftBody.map((para) => (
                <p
                  key={para.slice(0, 36)}
                  className="text-sm leading-relaxed text-white/55"
                >
                  {para}
                </p>
              ))}
            </div>
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

function MatrixBlock({
  title,
  intro,
  rows,
  light,
}: {
  title: string;
  intro?: string;
  rows: { need: string; approach: string }[];
  light?: boolean;
}) {
  return (
    <>
      <Reveal>
        <p
          className={cn(
            "text-[11px] tracking-[0.24em] uppercase",
            light ? "text-cyan-deep" : "text-cyan",
          )}
        >
          Fit
        </p>
        <h2
          className={cn(
            "font-display mt-3 max-w-3xl text-3xl md:text-4xl",
            light ? "text-ink" : "text-white",
          )}
        >
          {title}
        </h2>
        {intro && (
          <p
            className={cn(
              "mt-4 max-w-2xl text-sm",
              light ? "text-ink/55" : "text-white/50",
            )}
          >
            {intro}
          </p>
        )}
      </Reveal>
      <div
        className={cn(
          "mt-12 divide-y border-y md:mt-14",
          light ? "divide-ink/10 border-ink/10" : "divide-white/10 border-white/10",
        )}
      >
        {rows.map((row) => (
          <div
            key={row.need}
            className="grid gap-3 py-5 md:grid-cols-[1fr_1.1fr] md:gap-10"
          >
            <p
              className={cn(
                "text-sm font-medium md:text-base",
                light ? "text-ink" : "text-white",
              )}
            >
              {row.need}
            </p>
            <p
              className={cn(
                "text-sm leading-relaxed",
                light ? "text-ink/55" : "text-white/50",
              )}
            >
              {row.approach}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

function RelatedBlock({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <>
      <Reveal>
        <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
          Continue
        </p>
        <h2 className="font-display mt-3 text-3xl text-white md:text-4xl">
          {title}
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-3 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
        {links.map((link, index) => (
          <Reveal key={link.href + link.label} delay={index * 0.03}>
            <Link
              href={link.href}
              className="group flex min-h-14 items-center justify-between gap-3 rounded-2xl border border-white/10 bg-ink px-5 py-4 text-sm text-white/70 transition-colors hover:border-cyan/35 hover:text-white"
            >
              {link.label}
              <ArrowUpRight
                size={14}
                className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}

function FaqBlock({
  title,
  items,
  light,
}: {
  title: string;
  items: { q: string; a: string }[];
  light?: boolean;
}) {
  return (
    <>
      <Reveal>
        <p
          className={cn(
            "text-[11px] tracking-[0.24em] uppercase",
            light ? "text-cyan-deep" : "text-cyan",
          )}
        >
          FAQ
        </p>
        <h2
          className={cn(
            "font-display mt-3 text-3xl md:text-4xl",
            light ? "text-ink" : "text-white",
          )}
        >
          {title}
        </h2>
      </Reveal>
      <div
        className={cn(
          "mt-12 max-w-3xl divide-y border-y md:mt-14",
          light ? "divide-ink/10 border-ink/10" : "divide-white/10 border-white/10",
        )}
      >
        {items.map((item) => (
          <div key={item.q} className="py-5">
            <h3
              className={cn(
                "text-base font-medium md:text-lg",
                light ? "text-ink" : "text-white",
              )}
            >
              {item.q}
            </h3>
            <p
              className={cn(
                "mt-2 text-sm leading-relaxed",
                light ? "text-ink/55" : "text-white/50",
              )}
            >
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

function renderSection(
  section: TopicSection,
  index: number,
  layout: TopicPage["layout"],
) {
  const usePaper =
    layout === "library"
      ? index % 2 === 1
      : layout === "narrative"
        ? index % 3 === 1
        : false;
  const light = usePaper;
  const tone = usePaper ? "paper" : index % 2 === 0 ? "ink" : "soft";

  if (section.type === "proof") {
    return <ProofStrip key={`proof-${index}`} items={section.items} />;
  }

  const inner = (() => {
    switch (section.type) {
      case "narrative":
        return (
          <NarrativeBlock
            title={section.title}
            body={section.body}
            light={light}
          />
        );
      case "bullets":
        return (
          <BulletsBlock
            title={section.title}
            intro={section.intro}
            items={section.items}
            light={light}
          />
        );
      case "steps":
        return (
          <StepsBlock
            title={section.title}
            intro={section.intro}
            items={section.items}
          />
        );
      case "split":
        return (
          <SplitBlock
            title={section.title}
            leftTitle={section.leftTitle}
            leftBody={section.leftBody}
            rightTitle={section.rightTitle}
            rightItems={section.rightItems}
          />
        );
      case "matrix":
        return (
          <MatrixBlock
            title={section.title}
            intro={section.intro}
            rows={section.rows}
            light={light}
          />
        );
      case "related":
        return <RelatedBlock title={section.title} links={section.links} />;
      case "faq":
        return (
          <FaqBlock title={section.title} items={section.items} light={light} />
        );
      default:
        return null;
    }
  })();

  if (!inner) return null;

  // Steps/split/related stay on dark surfaces for contrast
  const forcedTone =
    section.type === "steps" ||
    section.type === "split" ||
    section.type === "related"
      ? index % 2 === 0
        ? "ink"
        : "soft"
      : tone;

  return (
    <SectionShell key={`${section.type}-${index}`} tone={forcedTone}>
      {inner}
    </SectionShell>
  );
}

export function TopicLandingView({ topic, crumbs }: TopicLandingViewProps) {
  const showIndustryImage = topic.layout === "industry" && topic.image;

  const breadcrumb =
    crumbs && crumbs.length > 0 ? (
      <div
        className={cn(
          "bg-ink",
          showIndustryImage
            ? "border-b-0 pt-20 md:pt-24"
            : "border-b border-white/[0.06]",
        )}
      >
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
          <span className="text-white/55">{topic.eyebrow}</span>
        </nav>
      </div>
    ) : null;

  const industryBanner = showIndustryImage ? (
    <section className="bg-ink pt-5 pb-8 md:pt-6 md:pb-10 lg:pt-8 lg:pb-12">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="relative aspect-[21/9] overflow-hidden rounded-[1.5rem] border border-white/10 md:rounded-[2rem]">
          <Image
            src={topic.image!}
            alt=""
            fill
            unoptimized
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        </div>
      </div>
    </section>
  ) : null;

  const convertHref = topic.primaryCta.href.includes("/contact")
    ? topic.primaryCta.href
    : contactHref("strategy");
  const convertLabel = topic.primaryCta.href.includes("/contact")
    ? topic.primaryCta.label
    : CTA_LABELS.startConversation;
  const primaryIsConvert = topic.primaryCta.href.includes("/contact");

  return (
    <>
      {showIndustryImage ? (
        <>
          {breadcrumb}
          {industryBanner}
          <PageHero
            eyebrow={topic.eyebrow}
            title={topic.title}
            description={topic.description}
            primaryCta={topic.primaryCta}
            secondaryCta={topic.secondaryCta}
            primaryVariant={primaryIsConvert ? "fill" : "text"}
            className="border-b border-white/[0.06] pt-10 pb-16 md:pt-14 md:pb-20"
          />
        </>
      ) : (
        <>
          <PageHero
            eyebrow={topic.eyebrow}
            title={topic.title}
            description={topic.description}
            primaryCta={topic.primaryCta}
            secondaryCta={topic.secondaryCta}
            primaryVariant={primaryIsConvert ? "fill" : "text"}
          />
          {breadcrumb}
        </>
      )}

      {topic.sections.map((section, index) =>
        renderSection(section, index, topic.layout),
      )}

      <section className="border-t border-white/[0.06] bg-ink-soft py-16 md:py-20">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 md:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="w-full min-w-0 max-w-xl">
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              Next step
            </p>
            <h2 className="font-display mt-3 text-3xl text-white md:text-4xl">
              Map this capability to your mandate.
            </h2>
            <p className="mt-4 text-sm text-white/50">
              A focused strategy conversation—constraints, systems, and what
              production readiness looks like for your organization.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <CtaPrimary
              href={convertHref}
              location="page.close"
              pattern="closing-stage"
            >
              {convertLabel}
            </CtaPrimary>
            <CtaGhost
              href={contactHref("assessment")}
              location="page.close"
              intent="assessment"
              pattern="closing-stage"
            >
              Request AI assessment
            </CtaGhost>
          </div>
        </div>
      </section>
    </>
  );
}
