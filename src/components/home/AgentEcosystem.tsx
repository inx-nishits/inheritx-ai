"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import { agents } from "@/data/content";
import { Reveal, TextReveal } from "@/components/ui/Reveal";

gsap.registerPlugin(ScrollTrigger);

const positions = [
  "left-[6%] top-[16%]",
  "right-[6%] top-[14%]",
  "left-[10%] bottom-[14%]",
  "right-[8%] bottom-[12%]",
  "left-1/2 top-[6%] -translate-x-1/2",
];

export function AgentEcosystem() {
  const stageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!stageRef.current) return;
      gsap.from(".agent-node", {
        opacity: 0,
        scale: 0.85,
        y: 24,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: stageRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: stageRef },
  );

  return (
    <section id="agents" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="editorial-grid absolute inset-0 opacity-30" />
      <div className="noise-overlay" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
            Agentic AI
          </p>
          <TextReveal
            text="Autonomous agents. Orchestrated as one enterprise system."
            className="font-display mt-5 justify-center text-4xl leading-[1.15] text-white md:text-6xl"
          />
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/50">
              Multi-agent systems with MCP, tool calling, memory, and human
              gates—AI employees that research, decide, execute, and escalate
              under enterprise control.
            </p>
          </Reveal>
        </div>

        <div
          ref={stageRef}
          className="relative mx-auto mt-16 h-[560px] max-w-5xl md:mt-20 md:h-[640px]"
        >
          <div className="absolute top-1/2 left-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          <div className="absolute top-1/2 left-1/2 h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/20" />
          <div className="absolute top-1/2 left-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-cyan/40 bg-ink-soft/80 text-center backdrop-blur-md">
            <span className="text-[10px] tracking-[0.2em] text-cyan uppercase">
              Core
            </span>
            <span className="mt-1 text-sm font-medium text-white">
              Orchestrator
            </span>
          </div>
          <div className="pulse-ring absolute top-1/2 left-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/40" />

          {agents.map((agent, index) => (
            <div
              key={agent.name}
              className={`agent-node absolute ${positions[index]} float-soft w-[190px] rounded-2xl border border-white/10 bg-ink-soft/90 p-4 backdrop-blur-md md:w-[220px]`}
              style={{ animationDelay: `${index * 0.4}s` }}
            >
              <p className="text-sm font-medium text-white">{agent.name}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/45">
                {agent.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
