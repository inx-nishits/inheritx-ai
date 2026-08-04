"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 36,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

type TextRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
};

export function TextReveal({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
}: TextRevealProps) {
  const ref = useRef<HTMLHeadingElement | HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const words = text.split(" ");

  return (
    <Tag
      ref={ref as never}
      className={cn("flex flex-wrap gap-x-[0.3em] gap-y-[0.08em]", className)}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden py-[0.22em] -my-[0.1em]"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "115%" }}
            animate={inView ? { y: "0%" } : { y: "115%" }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + index * 0.045,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
