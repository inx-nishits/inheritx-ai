"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

import { capabilities } from "@/data/content";
import { TextReveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";

const cardLeads = [
  "/images/visuals/lead-capabilities.png",
  "/images/visuals/lead-agents.png",
  "/images/visuals/lead-solutions.png",
  "/images/visuals/lead-journey.png",
  "/images/visuals/lead-tech.png",
];

function CapabilityCard({
  item,
  index,
  className,
}: {
  item: (typeof capabilities)[number];
  index: number;
  className?: string;
}) {
  return (
    <article
      className={
        className ??
        "group relative h-[420px] w-[82vw] overflow-hidden rounded-[2rem] border border-white/10 bg-ink-soft p-8 md:h-[480px] md:w-[420px] md:p-10"
      }
    >
      <VisualFrame
        src={cardLeads[index % cardLeads.length]}
        alt=""
        className="absolute inset-0 rounded-none border-0 opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col justify-between">
        <span className="font-mono text-sm text-cyan">{item.id}</span>
        <div>
          <h3 className="font-display text-3xl leading-tight text-white md:text-4xl">
            {item.title}
          </h3>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50 md:text-base">
            {item.copy}
          </p>
        </div>
      </div>
    </article>
  );
}

export function Capabilities() {
  const ref = useRef<HTMLElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-55%"]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <section
      id="capabilities"
      ref={ref}
      className="relative overflow-hidden bg-ink py-16 md:py-32"
    >
      <div className="noise-overlay" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-10 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              AI Capabilities
            </p>
            <TextReveal
              text="What we build for the AI-native enterprise."
              className="font-display mt-5 text-[2rem] leading-[1.08] text-white md:text-6xl"
            />
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/45 md:text-base">
            Platforms, custom agents, multi-agent orchestration, computer vision,
            and document intelligence—engineered for private cloud and full IP ownership.
          </p>
        </div>
      </div>

      {/* Mobile: intentional vertical stack */}
      <div className="relative mt-2 space-y-4 px-5 pb-4 md:hidden">
        {capabilities.map((item, index) => (
          <CapabilityCard
            key={item.id}
            item={item}
            index={index}
            className="group relative min-h-[280px] w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-soft p-6"
          />
        ))}
      </div>

      {/* Desktop / tablet: existing scroll-linked horizontal track — unchanged */}
      <div className="relative mt-4 hidden overflow-hidden pb-8 md:block">
        <motion.div
          style={isDesktop ? { x } : undefined}
          className="flex w-max gap-5 px-5 md:gap-7 md:px-8"
        >
          {capabilities.map((item, index) => (
            <CapabilityCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
