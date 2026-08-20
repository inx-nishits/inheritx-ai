"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

import { whyPoints } from "@/data/content";
import { PaperAtmosphere } from "@/components/ui/PaperAtmosphere";
import { Reveal } from "@/components/ui/Reveal";

function TrustDiligencePanel() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(triggerRef, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -8% 0px",
  });

  return (
    <div
      ref={triggerRef}
      className="h-full min-h-0 w-full min-w-0 overflow-hidden lg:overflow-visible"
    >
      <motion.aside
        aria-label="Review platforms and diligence"
        className="relative flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-ink text-white shadow-[0_24px_60px_rgba(7,9,13,0.28)] will-change-transform md:rounded-[1.75rem] lg:rounded-r-none lg:border-r-0 lg:shadow-[-28px_0_60px_rgba(7,9,13,0.2)]"
        initial={reduceMotion ? false : { x: "100%" }}
        animate={reduceMotion || inView ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_0%,rgba(0,190,212,0.2),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 editorial-grid opacity-20" />

        <div className="relative px-5 pt-5 md:px-6 md:pt-5 lg:max-w-2xl lg:pr-8 xl:pr-10">
          <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
            Trust & diligence
          </p>

          <h3 className="font-display mt-2 text-xl leading-tight text-white md:text-[1.55rem]">
            Build confidence before the first call.
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/50">
            Public profiles help you check us. Enterprise trust comes from
            proof, diligence materials, and references, not logo walls.
          </p>
        </div>

        <div className="marquee-pause relative mt-4 overflow-hidden border-y border-white/10 py-3">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-ink to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-ink to-transparent lg:hidden" />
          <div className="marquee-track flex w-max will-change-transform [animation-duration:35s]">
            <ReviewLogoRow />
            <ReviewLogoRow ariaHidden />
          </div>
        </div>

        <div className="relative flex flex-col px-5 py-4 md:px-6 md:py-5 lg:pr-8 xl:pr-10">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/10">
            {[
              { value: "Proof", label: "Published case studies" },
              { value: "NDA", label: "References on request" },
              { value: "FAQ", label: "Security diligence path" },
            ].map((item) => (
              <div
                key={item.label}
                className="sm:px-3 first:sm:pl-0 last:sm:pr-0"
              >
                <p className="font-display text-[0.95rem] text-cyan md:text-base">
                  {item.value}
                </p>
                <p className="mt-1 text-[11px] leading-snug text-white/45">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <p className="max-w-md text-[13px] leading-relaxed text-white/45">
              Start with production outcomes you can inspect. For procurement
              and security review, request materials once there is mutual fit.
            </p>
            <Link
              href="/case-studies"
              className="cta-primary group inline-flex min-h-10 shrink-0 items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap text-white shadow-[0_0_28px_rgba(0,190,212,0.22)]"
            >
              View case studies
              <ArrowUpRight
                size={14}
                className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </motion.aside>
    </div>
  );
}

const reviewLogos: {
  name: string;
  node: ReactNode;
}[] = [
  {
    name: "Clutch",
    node: (
      <svg viewBox="0 0 110 36" className="h-9 w-[108px] md:h-10 md:w-[120px]" aria-hidden>
        <text
          x="0"
          y="26"
          fill="#fff"
          fontFamily="system-ui, Arial, sans-serif"
          fontSize="26"
          fontWeight="700"
          letterSpacing="-0.6"
        >
          Clutch
        </text>
        <circle cx="40" cy="18.5" r="3.4" fill="#E11B22" />
      </svg>
    ),
  },
  {
    name: "Upwork",
    node: (
      <svg viewBox="0 0 120 36" className="h-8 w-[112px] md:h-9 md:w-[124px]" aria-hidden>
        <text
          x="0"
          y="26"
          fill="#14A800"
          fontFamily="system-ui, Arial, sans-serif"
          fontSize="24"
          fontWeight="600"
          letterSpacing="-0.4"
        >
          upwork
        </text>
      </svg>
    ),
  },
  {
    name: "AWS Partner",
    node: (
      <svg viewBox="0 0 120 48" className="h-11 w-[112px] md:h-12 md:w-[124px]" aria-hidden>
        <text
          x="60"
          y="22"
          textAnchor="middle"
          fill="#fff"
          fontFamily="system-ui, Arial, sans-serif"
          fontSize="22"
          fontWeight="700"
          letterSpacing="-0.5"
        >
          aws
        </text>
        <path
          d="M28 28c14 8 50 8 64 0"
          stroke="#FF9900"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M86 26.5l6 1.5-3.5 5.5"
          stroke="#FF9900"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <text
          x="60"
          y="44"
          textAnchor="middle"
          fill="#fff"
          fontFamily="system-ui, Arial, sans-serif"
          fontSize="10"
        >
          Partner
        </text>
      </svg>
    ),
  },
  {
    name: "Google",
    node: (
      <svg viewBox="0 0 150 40" className="h-10 w-[148px] md:h-11 md:w-[160px]" aria-hidden>
        <text
          x="0"
          y="16"
          fontFamily="system-ui, Arial, sans-serif"
          fontSize="15"
          fontWeight="700"
        >
          <tspan fill="#4285F4">G</tspan>
          <tspan fill="#EA4335">o</tspan>
          <tspan fill="#FBBC05">o</tspan>
          <tspan fill="#4285F4">g</tspan>
          <tspan fill="#34A853">l</tspan>
          <tspan fill="#EA4335">e</tspan>
        </text>
        <text
          x="58"
          y="16"
          fill="#fff"
          fontFamily="system-ui, Arial, sans-serif"
          fontSize="14"
          fontWeight="500"
        >
          Reviews
        </text>
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            transform={`translate(${i * 16}, 22)`}
            d="M6 0l1.4 4.2H12l-3.5 2.6 1.3 4.2L6 8.4 2.2 11 3.5 6.8 0 4.2h4.6z"
            fill="#FABB05"
          />
        ))}
      </svg>
    ),
  },
  {
    name: "GCP",
    node: (
      <svg viewBox="0 0 140 36" className="h-9 w-[132px] md:h-10 md:w-[148px]" aria-hidden>
        <text
          x="0"
          y="25"
          fill="#fff"
          fontFamily="system-ui, Arial, sans-serif"
          fontSize="20"
          fontWeight="700"
          letterSpacing="-0.4"
        >
          Google
        </text>
        <text
          x="78"
          y="25"
          fill="#4285F4"
          fontFamily="system-ui, Arial, sans-serif"
          fontSize="20"
          fontWeight="600"
          letterSpacing="-0.3"
        >
          Cloud
        </text>
      </svg>
    ),
  },
];

function ReviewLogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  const sequence = [...reviewLogos, ...reviewLogos, ...reviewLogos];

  return (
    <div
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10 md:gap-12 md:pr-12"
    >
      {sequence.map((logo, index) => (
        <div
          key={`${logo.name}-${index}`}
          title={ariaHidden ? undefined : logo.name}
          className="flex min-h-9 shrink-0 items-center justify-center opacity-90"
        >
          {logo.node}
          {!ariaHidden ? <span className="sr-only">{logo.name}</span> : null}
        </div>
      ))}
    </div>
  );
}

export function WhyInheritX() {
  return (
    <section
      id="why"
      className="relative overflow-x-clip bg-paper-soft py-14 text-ink md:py-20"
    >
      <PaperAtmosphere />

      <div className="relative mx-auto max-w-page px-5 md:px-8">
        <div className="max-w-4xl">
          <p className="text-[11px] tracking-[0.24em] text-cyan-deep uppercase">
            Why InheritX
          </p>
          <Reveal className="overflow-visible">
            <h2 className="font-display mt-1.5 max-w-none overflow-visible text-[1.85rem] leading-[1.2] md:text-4xl lg:text-[2.75rem]">
              <span className="block text-ink">
                We don&apos;t sell software projects.
              </span>
              <span className="mt-0.5 block overflow-visible bg-gradient-to-r from-cyan-deep via-cyan to-[#067a8f] bg-clip-text pb-0.5 font-semibold leading-[1.2] text-transparent">
                We engineer enterprise AI you own.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-2 w-full text-[14px] leading-relaxed text-ink/55 md:text-[15px]">
              Named architects accountable from blueprint through handover,
              systems your board can fund and your CTO can operate.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Dual surface: glass cards stay in page; trust panel bleeds to the right edge */}
      <div className="relative mt-5 px-5 md:px-8 lg:mt-6 lg:pr-0 lg:pl-[max(2rem,calc((100vw-90rem)/2+2rem))]">
        <div className="grid gap-3 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)] lg:items-stretch lg:gap-4">
          <div className="mx-auto grid h-full w-full max-w-page gap-2.5 sm:grid-cols-2 sm:gap-3 lg:mx-0">
            {whyPoints.map((point, index) => (
              <article
                key={point.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-white/80 bg-white/75 px-4 py-3.5 shadow-[0_8px_32px_rgba(11,18,32,0.04)] backdrop-blur-xl transition-[border-color,box-shadow,background-color] duration-500 hover:border-cyan/30 hover:bg-white/90 hover:shadow-[0_18px_50px_rgba(0,145,168,0.1)] md:rounded-[1.5rem] md:px-5 md:py-4"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/90 via-white/50 to-white/30" />
                <div className="relative flex flex-col">
                  <span className="inline-flex h-6 w-fit items-center rounded-full border border-cyan/20 bg-white/80 px-2 font-mono text-[10px] text-cyan-deep shadow-sm backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-2 text-[1.15rem] leading-[1.2] tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-cyan-deep md:mt-2.5 md:text-[1.25rem]">
                    {point.title}
                  </h3>
                  <p className="mt-2.5 border-t border-ink/10 pt-2.5 text-[13px] leading-relaxed text-ink/55 md:text-sm">
                    {point.copy}
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-deep via-cyan/45 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            ))}
          </div>

          <div className="flex min-h-0 min-w-0 w-full lg:h-full">
            <TrustDiligencePanel />
          </div>
        </div>
      </div>
    </section>
  );
}
