"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CtaFloating } from "@/components/cta/CtaFloating";
import { cn } from "@/lib/cn";

type PathFloatingCtaProps = {
  teaser: string;
  label: string;
  href: string;
};

export function PathFloatingCta({ teaser, label, href }: PathFloatingCtaProps) {
  const [pastHero, setPastHero] = useState(false);
  const [nearClose, setNearClose] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const closing = document.getElementById("path-closing");
    const observer = closing
      ? new IntersectionObserver(
          ([entry]) => setNearClose(entry.isIntersecting),
          { threshold: 0.25 },
        )
      : null;
    if (closing) observer?.observe(closing);

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  const visible = pastHero && !nearClose;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "pointer-events-none fixed z-40",
            "bottom-[calc(7.25rem+env(safe-area-inset-bottom))] left-4 right-4",
            "sm:bottom-6 sm:left-6 sm:right-auto",
          )}
        >
          <CtaFloating teaser={teaser} label={label} href={href} />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
