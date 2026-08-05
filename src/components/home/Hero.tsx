"use client";

import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { HeroAtmosphere } from "@/components/canvas/HeroAtmosphere";
import { HeroStage } from "@/components/home/HeroConstellation";
import { MagneticButton } from "@/components/ui/MagneticButton";

const verbs = ["Scale", "Automate", "Orchestrate", "Transform"] as const;

export function Hero() {
  const copyRef = useRef<HTMLDivElement>(null);
  const [verbIndex, setVerbIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setVerbIndex((i) => (i + 1) % verbs.length);
    }, 3600);
    return () => window.clearInterval(id);
  }, []);

  useGSAP(
    () => {
      if (!copyRef.current) return;

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-eyebrow", {
        y: 14,
        opacity: 0,
        duration: 0.85,
        delay: 0.12,
      })
        .from(
          ".hero-line-1 .hero-mask-inner",
          {
            yPercent: 110,
            duration: 1.05,
            stagger: 0.06,
          },
          "-=0.45",
        )
        .from(
          ".hero-line-2",
          {
            y: 18,
            opacity: 0,
            duration: 0.85,
          },
          "-=0.55",
        )
        .from(
          ".hero-fade",
          {
            y: 16,
            opacity: 0,
            duration: 0.8,
            stagger: 0.08,
          },
          "-=0.4",
        );
    },
    { scope: copyRef },
  );

  return (
    <HeroStage>
      <section
        id="top"
        className="relative flex h-dvh max-h-dvh flex-col overflow-hidden"
      >
        {/* Layer 3 — soft particles (noticeable, still secondary) */}
        <HeroAtmosphere className="absolute inset-0 z-0 h-full w-full opacity-[0.48] [mask-image:linear-gradient(to_bottom,black_0%,black_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_70%,transparent_100%)]" />

        {/* Layer 1 — ambient gradient environment */}
        <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_38%,#0c1520_0%,#07090d_55%,#05070a_100%)]" />

          {/* Soft corner ambience — restored depth, still quiet */}
          <div
            className="absolute -top-[12%] right-[-10%] h-[48vw] max-h-[460px] w-[48vw] max-w-[460px]"
            style={{
              background:
                "radial-gradient(circle, rgba(8,145,168,0.17) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-[-18%] left-[-8%] h-[44vw] max-h-[400px] w-[44vw] max-w-[400px]"
            style={{
              background:
                "radial-gradient(circle, rgba(0,190,212,0.125) 0%, transparent 72%)",
            }}
          />

          {/* Soft horizon depth band */}
          <div
            className="absolute inset-x-0 top-[44%] h-[26%] -translate-y-1/2"
            style={{
              background:
                "radial-gradient(ellipse 75% 100% at 50% 50%, rgba(22,28,39,0.55) 0%, transparent 75%)",
            }}
          />

          <div className="noise-overlay opacity-28" />

          {/* Edge vignette — keeps edges quiet, center readable */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_28%,rgba(7,9,13,0.34)_70%,rgba(7,9,13,0.86)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/78" />
        </div>

        {/* Soft scrim — protects content without flattening the field */}
        <div
          className="pointer-events-none absolute inset-0 z-[3]"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 62% 48% at 50% 48%, rgba(7,9,13,0.22) 0%, transparent 74%)",
          }}
        />

        {/* Bottom feather — soft fade so bg lines/particles don't hard-clip */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-[34%] md:h-[38%]"
          aria-hidden
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(7,9,13,0.35) 38%, rgba(7,9,13,0.82) 72%, #07090d 100%)",
          }}
        />

        {/* Layer 4 — content (highest priority) */}
        <div
          ref={copyRef}
          className="relative z-20 mx-auto flex h-full w-full max-w-[1100px] flex-col items-center justify-center px-5 pt-16 pb-16 text-center md:px-8"
        >
          {/* Content spotlight — soft lift so type stays primary */}
          <div
            className="pointer-events-none absolute left-1/2 top-[46%] h-[min(72vw,520px)] w-[min(96vw,820px)] -translate-x-1/2 -translate-y-1/2"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, rgba(22,28,39,0.32) 40%, transparent 72%)",
            }}
          />

          <div className="relative">
            <p className="hero-eyebrow hero-eyebrow-shimmer mx-auto max-w-[min(92vw,44rem)] text-center text-sm font-semibold tracking-[0.22em] uppercase md:text-base md:tracking-[0.26em]">
              AI-Native Enterprise Partner
            </p>

            <h1 className="font-display mt-6 text-[clamp(2.6rem,7.5vw,5.75rem)] leading-[1.12] tracking-[-0.04em] text-white md:mt-8">
              <span className="hero-line-1 block">
                {"Enterprise AI.".split(" ").map((word) => (
                  <span
                    key={word}
                    className="mr-[0.22em] inline-block overflow-hidden py-[0.2em] -my-[0.08em] align-bottom last:mr-0"
                  >
                    <span className="hero-mask-inner inline-block drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]">
                      {word}
                    </span>
                  </span>
                ))}
              </span>

              <span className="hero-line-2 mt-1 flex flex-wrap items-baseline justify-center gap-x-[0.28em]">
                <span className="text-white/90">Built to</span>
                <span
                  className="relative inline-flex h-[1.35em] min-w-[11ch] items-center justify-center overflow-hidden align-bottom sm:min-w-[12ch]"
                  aria-live="polite"
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={verbs[verbIndex]}
                      className="absolute inset-x-0 text-cyan"
                      initial={{ y: "110%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {verbs[verbIndex]}.
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </h1>

            <p className="hero-fade mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/60 md:mt-8 md:text-lg">
              AI/ML engineering, Generative AI, Agentic AI, and AI
              DevOps—deployed in your private cloud with full IP ownership.
            </p>

            <div className="hero-fade mt-10 flex flex-col items-center gap-4 sm:mt-12 sm:flex-row sm:justify-center sm:gap-6">
              <MagneticButton
                href="/contact?intent=strategy"
                className="min-h-12 bg-cyan px-8 py-3.5 text-white shadow-[0_0_32px_rgba(0,190,212,0.22)] hover:bg-white hover:text-ink"
                strength={0.2}
              >
                Book an AI Strategy Call
              </MagneticButton>
              <Link
                href="#cases"
                className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-cyan/55 bg-cyan/10 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(0,190,212,0.12)] transition-colors hover:border-cyan hover:bg-cyan/20"
              >
                See production outcomes
                <span className="text-cyan transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </HeroStage>
  );
}
