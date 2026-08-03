"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const partners = [
  { name: "OpenAI", src: "/images/partners/openai.svg" },
  { name: "Microsoft", src: "/images/partners/microsoft.svg" },
  { name: "AWS", src: "/images/partners/amazonaws.svg" },
  { name: "Google Cloud", src: "/images/partners/googlecloud.svg" },
  { name: "NVIDIA", src: "/images/partners/nvidia.svg" },
  { name: "Anthropic", src: "/images/partners/anthropic.svg" },
  { name: "LangChain", src: "/images/partners/langchain.svg" },
  { name: "Pinecone", src: "/images/partners/pinecone.svg" },
  { name: "Vercel", src: "/images/partners/vercel.svg" },
  { name: "Stripe", src: "/images/partners/stripe.svg" },
];

export function TrustedBy() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-ink py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,190,212,0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-[11px] tracking-[0.22em] text-white/40 uppercase">
              AI ecosystem &amp; technology partners
            </p>
            <a
              href="/solutions"
              className="group inline-flex items-center gap-1.5 text-sm text-cyan transition-colors hover:text-white"
            >
              Explore Enterprise AI Solutions
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mt-12 md:gap-5 lg:grid-cols-5">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6% 0px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.035,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "group flex min-h-[96px] items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.03] px-5 py-6 backdrop-blur-sm transition-all duration-400",
                "hover:border-white/15 hover:bg-white/[0.06] hover:shadow-[0_0_28px_rgba(255,255,255,0.06)]",
              )}
            >
              <div className="flex flex-col items-center gap-2.5 transition-transform duration-300 group-hover:scale-[1.05]">
                <Image
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
                />
                <span className="text-[12px] font-medium tracking-tight text-white/70 md:text-[13px]">
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
