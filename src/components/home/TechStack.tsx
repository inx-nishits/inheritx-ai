"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Cpu, Database, Cloud, Network, Activity, Workflow } from "lucide-react";

import { techLayers } from "@/data/content";
import { Reveal, TextReveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const layerIcons = [Cpu, Network, Database, Workflow, Cloud, Activity];

const partnerStrip = [
  { name: "Anthropic", src: "/images/partners/anthropic.svg" },
  { name: "Hugging Face", src: "/images/partners/huggingface.svg" },
  { name: "NVIDIA", src: "/images/partners/nvidia.svg" },
  { name: "PyTorch", src: "/images/partners/pytorch.svg" },
  { name: "LangGraph", src: "/images/partners/langgraph.svg" },
  { name: "LlamaIndex", src: "/images/partners/llamaindex.svg" },
  { name: "CrewAI", src: "/images/partners/crewai.svg" },
  { name: "Pinecone", src: "/images/partners/pinecone.svg" },
  { name: "Weaviate", src: "/images/partners/weaviate.svg" },
  { name: "Qdrant", src: "/images/partners/qdrant.svg" },
  { name: "Redis", src: "/images/partners/redis.svg" },
  { name: "Langfuse", src: "/images/partners/langfuse.svg" },
  { name: "Azure", src: "/images/partners/microsoft.svg" },
  { name: "vLLM", src: "/images/partners/vllm.svg" },
  { name: "MLflow", src: "/images/partners/mlflow.svg" },
  { name: "Docker", src: "/images/partners/docker.svg" },
  { name: "Kubernetes", src: "/images/partners/kubernetes.svg" },
  { name: "Terraform", src: "/images/partners/terraform.svg" },
];

export function TechStack() {
  const [active, setActive] = useState(0);
  const layer = techLayers[active];
  const ActiveIcon = layerIcons[active] ?? Cpu;

  return (
    <section
      id="tech"
      className="relative overflow-hidden bg-ink py-16 md:py-20"
    >
      <div className="noise-overlay" />
      <div className="pointer-events-none absolute inset-0 editorial-grid opacity-30" />
      <div className="pointer-events-none absolute top-1/4 -left-32 h-[420px] w-[420px] rounded-full bg-cyan/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[360px] w-[360px] rounded-full bg-cyan/5 blur-[100px]" />

      <div className="relative mx-auto max-w-page px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
              AI Infrastructure Stack
            </p>
            <TextReveal
              text="The operating foundation for enterprise AI."
              className="font-display mt-3 max-w-2xl text-[2rem] leading-[1.15] text-white md:text-6xl"
            />
          </div>
          <Reveal>
            <p className="max-w-md text-base leading-relaxed text-white/50 lg:justify-self-end">
              Six infrastructure layers and the tools we compose them
              with—hosted and open models, agents, retrieval, automation,
              cloud AI platforms, and AI DevOps.
            </p>
          </Reveal>
        </div>

        {/* Architecture canvas */}
        <div className="mt-12 grid gap-6 md:mt-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          {/* Layer navigator */}
          <Reveal>
            <div className="flex snap-x snap-mandatory flex-row gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-col lg:gap-2 lg:overflow-visible lg:snap-none [&::-webkit-scrollbar]:hidden">
              {techLayers.map((item, index) => {
                const Icon = layerIcons[index] ?? Cpu;
                const isActive = active === index;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    className={cn(
                      "group flex min-w-[78vw] snap-start items-center gap-4 rounded-2xl border px-4 py-4 text-left transition-all duration-400 sm:min-w-[200px] lg:min-w-0",
                      isActive
                        ? "border-cyan/35 bg-cyan-soft shadow-[0_0_40px_rgba(0,190,212,0.12)]"
                        : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors",
                        isActive
                          ? "border-cyan/40 bg-ink text-cyan"
                          : "border-white/10 bg-ink/60 text-white/45 group-hover:text-white/70",
                      )}
                    >
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-cyan/80">
                          {item.id}
                        </span>
                        <span
                          className={cn(
                            "truncate text-sm font-medium",
                            isActive ? "text-white" : "text-white/65",
                          )}
                        >
                          {item.name}
                        </span>
                      </span>
                      <span className="mt-1 block truncate text-xs text-white/35">
                        {item.tagline}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Active layer detail */}
          <div className="relative min-h-[300px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-ink-elevated via-ink-soft to-ink md:min-h-[420px] md:rounded-[2rem]">
            <Image
              src="/images/visuals/lead-tech.png"
              alt=""
              fill
              unoptimized
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-ink/90 via-ink/75 to-ink/95" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(0,190,212,0.2),transparent_50%)]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex h-full min-h-[420px] flex-col justify-between p-7 md:p-10"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan/30 bg-cyan-soft text-cyan">
                      <ActiveIcon size={22} />
                    </span>
                    <span className="font-mono text-sm text-cyan">{layer.id}</span>
                  </div>
                  <h3 className="font-display mt-8 text-3xl leading-tight text-white md:text-5xl">
                    {layer.name}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-white/55">
                    {layer.tagline}
                  </p>
                </div>

                <div>
                  <p className="mb-4 text-[11px] tracking-[0.2em] text-white/35 uppercase">
                    Technologies in this layer
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {layer.items.map((item, i) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 + i * 0.04 }}
                        className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-sm text-white/80 backdrop-blur-sm"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                  <a
                    href="/case-studies"
                    className="group mt-8 inline-flex items-center gap-2 text-sm text-cyan transition-colors hover:text-white"
                  >
                    See it in production case studies
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Partner / platform strip */}
        <Reveal delay={0.1}>
          <div className="mt-12 border-t border-white/[0.08] pt-10 md:mt-14 md:pt-12">
            <p className="mb-6 text-center text-[11px] tracking-[0.22em] text-white/35 uppercase md:text-left">
            Platforms we build enterprise AI with
          </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
              {partnerStrip.map((partner) => (
                <div
                  key={partner.name}
                  className="group flex min-h-[72px] flex-col items-center justify-center gap-2 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-3 py-4 transition-all hover:border-white/15 hover:bg-white/[0.05]"
                >
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="text-[11px] text-white/45 group-hover:text-white/70">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
