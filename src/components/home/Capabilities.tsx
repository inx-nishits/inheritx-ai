"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { capabilities } from "@/data/content";
import { TextReveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";
import { cn } from "@/lib/cn";

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
        "group relative h-[min(380px,48vh)] w-[min(82vw,380px)] shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-ink-soft p-7 md:w-[400px] md:p-9 lg:h-[min(420px,50vh)] lg:w-[420px] lg:p-10"
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
          <h3 className="font-display text-2xl leading-tight text-white md:text-3xl lg:text-4xl">
            {item.title}
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/50 md:mt-4 md:text-base">
            {item.copy}
          </p>
        </div>
      </div>
    </article>
  );
}

export function Capabilities() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, (value) => value * -scrollDistance);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setProgress(value);
  });

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const overflow = track.scrollWidth - window.innerWidth;
      setScrollDistance(Math.max(0, overflow));
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [isDesktop]);

  const scrollToProgress = useCallback((next: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const clamped = Math.min(1, Math.max(0, next));
    const start = section.offsetTop;
    const range = Math.max(1, section.offsetHeight - window.innerHeight);
    window.scrollTo({ top: start + clamped * range, behavior: "smooth" });
  }, []);

  const step = 1 / Math.max(1, capabilities.length - 1);
  const canPrev = progress > 0.02;
  const canNext = progress < 0.98;
  const activeIndex = Math.min(
    capabilities.length,
    Math.max(1, Math.round(progress * (capabilities.length - 1)) + 1),
  );

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="relative bg-ink md:h-[300vh]"
    >
      <div className="noise-overlay" />

      {/* Mobile: intentional vertical stack */}
      <div className="relative py-16 md:hidden">
        <div className="mx-auto max-w-[1400px] px-5">
          <div className="mb-10 flex flex-col gap-6">
            <div className="max-w-3xl">
              <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
                AI Capabilities
              </p>
              <TextReveal
                text="What we build for the AI-native enterprise."
                className="font-display mt-5 text-[2rem] leading-[1.15] text-white"
              />
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/45">
              From AI/ML engineering and agentic systems to AI DevOps, private
              platforms, and vision—production capabilities you own.
            </p>
          </div>
        </div>

        <div className="relative mt-2 space-y-4 px-5 pb-4">
          {capabilities.map((item, index) => (
            <CapabilityCard
              key={item.id}
              item={item}
              index={index}
              className="group relative min-h-[280px] w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-soft p-6"
            />
          ))}
        </div>
      </div>

      {/* Desktop: sticky pin so cards stay visible while scrolling horizontally */}
      <div className="relative hidden h-svh md:sticky md:top-0 md:block">
        <div className="flex h-full flex-col justify-start gap-8 pt-28 pb-8 lg:gap-10 lg:pt-32 lg:pb-10">
          <div className="relative mx-auto w-full max-w-[1400px] shrink-0 px-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
              <div className="max-w-3xl">
                <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
                  AI Capabilities
                </p>
                <TextReveal
                  text="What we build for the AI-native enterprise."
                  className="font-display mt-4 text-[2rem] leading-[1.15] text-white md:text-[2.75rem] lg:mt-5 lg:text-6xl"
                />
              </div>
              <div className="flex flex-col gap-5 lg:items-end">
                <p className="max-w-sm text-sm leading-relaxed text-white/45 md:text-base lg:text-right">
                  From AI/ML engineering and agentic systems to AI DevOps,
                  private platforms, and vision—production capabilities you own.
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Previous capability"
                    disabled={!canPrev}
                    onClick={() => scrollToProgress(progress - step)}
                    className={cn(
                      "inline-flex h-11 items-center gap-2 rounded-full border px-4 text-sm transition-colors",
                      canPrev
                        ? "border-white/20 text-white/80 hover:border-cyan/50 hover:text-white"
                        : "cursor-not-allowed border-white/10 text-white/25",
                    )}
                  >
                    <ArrowLeft size={16} />
                    Prev
                  </button>
                  <button
                    type="button"
                    aria-label="Next capability"
                    disabled={!canNext}
                    onClick={() => scrollToProgress(progress + step)}
                    className={cn(
                      "inline-flex h-11 items-center gap-2 rounded-full border px-4 text-sm transition-colors",
                      canNext
                        ? "border-white/20 text-white/80 hover:border-cyan/50 hover:text-white"
                        : "cursor-not-allowed border-white/10 text-white/25",
                    )}
                  >
                    Next
                    <ArrowRight size={16} />
                  </button>
                  <span className="ml-2 font-mono text-[11px] text-white/35">
                    {String(activeIndex).padStart(2, "0")} /{" "}
                    {String(capabilities.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full shrink-0 overflow-hidden">
            <motion.div
              ref={trackRef}
              style={isDesktop && scrollDistance > 0 ? { x } : undefined}
              className="flex w-max gap-7 px-8 will-change-transform"
            >
              {capabilities.map((item, index) => (
                <CapabilityCard key={item.id} item={item} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
