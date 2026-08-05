"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink py-16 md:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,190,212,0.18),transparent_55%)]" />
      <div className="editorial-grid absolute inset-0 opacity-25" />
      <div className="noise-overlay" />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:gap-12 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative order-2 mx-auto aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-[1.75rem] md:max-w-xs lg:order-1 lg:mx-0 lg:max-w-sm">
          <VisualFrame
            src="/images/visuals/cta-transformation.png"
            alt="Enterprise leaders beginning an AI transformation"
            className="absolute inset-0"
            priority
          />
        </div>

        <div className="order-1 text-center lg:order-2 lg:text-left">
          <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
            Start your AI transformation
          </p>
          <TextReveal
            text="Ready to industrialize enterprise AI?"
            className="font-display mt-3 text-[2rem] leading-[1.15] text-white md:text-6xl lg:justify-start lg:text-6xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-4 flex flex-col items-center gap-5 lg:items-start"
          >
            <p className="max-w-xl text-[15px] text-white/50 md:text-lg">
              Book a 30-minute AI strategy call with an architect. We’ll pressure-
              test your use case, say honestly whether AI is the right move, and
              outline a delivery roadmap—NDA and diligence materials available for
              qualified opportunities.
            </p>
            <div className="flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:max-w-none">
              <MagneticButton
                href="/contact?intent=strategy"
                className="min-h-12 w-full justify-center bg-cyan px-8 py-4 text-base text-white hover:bg-white hover:text-ink sm:w-auto"
                strength={0.45}
              >
                Book an AI strategy call
              </MagneticButton>
              <Link
                href="/contact?intent=assessment"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm text-white/70 transition-colors hover:border-cyan/40 hover:text-white"
              >
                Request AI assessment
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/40 lg:justify-start">
              <Link
                href="/contact?intent=security"
                className="inline-flex items-center gap-1 transition-colors hover:text-cyan"
              >
                Security / diligence
                <ArrowUpRight size={13} />
              </Link>
              <Link
                href="/resources/security-faq"
                className="inline-flex items-center gap-1 transition-colors hover:text-cyan"
              >
                Security FAQ
                <ArrowUpRight size={13} />
              </Link>
              <Link
                href="/resources/diligence-pack"
                className="inline-flex items-center gap-1 transition-colors hover:text-cyan"
              >
                Diligence pack
                <ArrowUpRight size={13} />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-1 transition-colors hover:text-cyan"
              >
                Case studies
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
