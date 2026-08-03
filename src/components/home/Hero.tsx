"use client";

import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowDownRight } from "lucide-react";
import { useRef } from "react";

import { HeroAtmosphere } from "@/components/canvas/HeroAtmosphere";
import {
  HeroAgentStrip,
  HeroStage,
} from "@/components/home/HeroAgentMesh";
import { MagneticButton } from "@/components/ui/MagneticButton";

const lines = [
  { words: ["Enterprise", "AI."], accent: false },
  { words: ["You", "own", "the", "code."], accent: true },
];

export function Hero() {
  const copyRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!copyRef.current) return;
      gsap.from(".hero-word", {
        yPercent: 110,
        duration: 0.95,
        ease: "power4.out",
        stagger: 0.06,
        delay: 0.12,
      });
      gsap.from(".hero-fade", {
        y: 16,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.07,
        delay: 0.55,
      });
    },
    { scope: copyRef },
  );

  return (
    <HeroStage>
      <section
        id="top"
        className="relative flex h-dvh max-h-dvh flex-col overflow-hidden"
      >
        <HeroAtmosphere className="absolute inset-0 z-0 h-full w-full opacity-45" />

        <div className="pointer-events-none absolute inset-0 z-[1]">
          <motion.div
            className="absolute top-[-10%] right-[-5%] h-[42vw] max-h-[420px] w-[42vw] max-w-[420px] rounded-full bg-cyan/[0.08] blur-[120px]"
            animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.06, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[-15%] left-[20%] h-[36vw] max-h-[360px] w-[36vw] max-w-[360px] rounded-full bg-[#0891a8]/10 blur-[130px]"
            animate={{ opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="noise-overlay opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink/70" />
        </div>

        <div
          ref={copyRef}
          className="relative z-20 mx-auto grid h-full w-full max-w-[1400px] grid-cols-1 items-center px-5 pt-20 pb-6 md:px-8 md:pt-24 md:pb-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8 lg:pt-28 lg:pb-10"
        >
          {/* Left: primary content */}
          <div className="relative z-30 max-w-xl xl:max-w-2xl">
            <p className="hero-fade mb-3 text-[11px] tracking-[0.28em] text-cyan uppercase md:mb-4">
              Enterprise AI Solutions · Full IP ownership
            </p>

            <h1 className="font-display text-[clamp(2.4rem,5.2vw,4.85rem)] leading-[1.08] tracking-[-0.03em] text-white">
              {lines.map((line) => (
                <span key={line.words.join("-")} className="block">
                  {line.words.map((word) => (
                    <span
                      key={word}
                      className="mr-[0.28em] inline-block overflow-hidden pt-[0.08em] pb-[0.22em] align-bottom last:mr-0"
                    >
                      <span
                        className={`hero-word inline-block ${
                          line.accent ? "italic text-cyan" : ""
                        }`}
                      >
                        {word}
                      </span>
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            <p className="hero-fade mt-5 max-w-md text-sm leading-relaxed text-white/60 md:mt-6 md:text-base">
              We build custom AI agents, multi-agent systems, and computer vision
              platforms for enterprises in healthcare, finance, logistics, and
              manufacturing—then hand over the IP and deploy into your private
              cloud. Production systems, not rented platforms.
            </p>

            <div className="hero-fade mt-7 flex w-full flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-nowrap sm:items-center sm:gap-5">
              <MagneticButton
                href="/contact"
                className="min-h-12 w-full shrink-0 justify-center whitespace-nowrap bg-cyan px-6 py-3.5 text-ink shadow-[0_0_36px_rgba(0,190,212,0.22)] hover:bg-white sm:w-auto"
                strength={0.35}
              >
                Book a 30-min strategy call
              </MagneticButton>
              <a
                href="/case-studies"
                className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 whitespace-nowrap px-1 text-sm text-white/70 transition-colors hover:text-white sm:justify-start"
              >
                See Case Studies
                <ArrowDownRight
                  size={16}
                  className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>
            </div>

            <HeroAgentStrip />
          </div>

          {/* Right: visual weight reserved for mesh (rendered by HeroStage) */}
          <div
            className="pointer-events-none relative hidden h-full min-h-0 lg:block"
            aria-hidden
          />
        </div>
      </section>
    </HeroStage>
  );
}
