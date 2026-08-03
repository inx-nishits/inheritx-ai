"use client";

import { motion } from "framer-motion";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink py-16 md:py-40"
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
            Begin the transformation
          </p>
          <TextReveal
            text="Ready to build your AI advantage?"
            className="font-display mt-5 text-[2rem] leading-[1.08] text-white md:mt-6 md:text-6xl lg:justify-start lg:text-6xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-8 flex flex-col items-center gap-5 md:mt-10 lg:items-start"
          >
            <p className="max-w-xl text-[15px] text-white/50 md:text-lg">
              Book a 30-minute call with an AI architect. We’ll review your use
              case, tell you honestly whether AI is the right move, and outline a
              delivery roadmap—NDA available on request. No obligation.
            </p>
            <MagneticButton
              href="mailto:hello@inheritx.com"
              className="mt-1 min-h-12 w-full max-w-sm justify-center bg-cyan px-8 py-4 text-base text-ink hover:bg-white sm:w-auto"
              strength={0.45}
            >
              Book a strategy call
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
