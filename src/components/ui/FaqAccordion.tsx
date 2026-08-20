"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/cn";

export type FaqAccordionItem = {
  q: string;
  a: string;
};

type FaqAccordionProps = {
  items: FaqAccordionItem[];
  /** Light (paper) vs dark (ink) surfaces */
  tone?: "light" | "dark";
  /** Open the first item by default */
  defaultOpen?: number;
  className?: string;
};

export function FaqAccordion({
  items,
  tone = "dark",
  defaultOpen = 0,
  className,
}: FaqAccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const light = tone === "light";

  return (
    <div
      className={cn(
        "mt-10 w-full divide-y border-y md:mt-12",
        light ? "divide-ink/10 border-ink/10" : "divide-white/10 border-white/10",
        className,
      )}
    >
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q} className="py-5 md:py-6">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
              className="flex w-full items-start justify-between gap-4 text-left"
            >
              <span
                className={cn(
                  "text-base font-medium md:text-lg",
                  light ? "text-ink" : "text-white",
                )}
              >
                {item.q}
              </span>
              <ChevronDown
                size={18}
                className={cn(
                  "mt-1 shrink-0 transition-transform duration-300",
                  light ? "text-ink/40" : "text-white/40",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p
                  className={cn(
                    "pt-3 text-sm leading-relaxed md:max-w-4xl md:text-[0.9375rem]",
                    light ? "text-ink/55" : "text-white/50",
                  )}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
