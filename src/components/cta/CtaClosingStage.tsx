"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import type { CtaLocation } from "@/data/cta/analytics";
import { cn } from "@/lib/cn";

import { CtaGhost } from "./CtaGhost";
import { CtaPrimary } from "./CtaPrimary";
import { CtaText } from "./CtaText";
import type { CtaAction } from "./track";
import { intentFromHref } from "./track";

type CtaClosingStageProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  primary: CtaAction;
  secondary?: CtaAction;
  links?: CtaAction[];
  media?: ReactNode;
  id?: string;
  location?: CtaLocation | (string & {});
  className?: string;
};

export function CtaClosingStage({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  links,
  media,
  id,
  location = "page.close",
  className,
}: CtaClosingStageProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden bg-ink py-16 md:py-20",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,190,212,0.18),transparent_55%)]" />
      <div className="editorial-grid absolute inset-0 opacity-25" />
      <div className="noise-overlay" />

      <div
        className={cn(
          "relative mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:gap-12 md:px-8",
          media && "lg:grid-cols-[0.85fr_1.15fr]",
        )}
      >
        {media ? (
          <div className="relative order-2 mx-auto aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-[1.75rem] md:max-w-xs lg:order-1 lg:mx-0 lg:max-w-sm">
            {media}
          </div>
        ) : null}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className={cn(
            "text-center",
            media ? "order-1 lg:order-2 lg:text-left" : "mx-auto max-w-3xl",
          )}
        >
          <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
            {eyebrow}
          </p>
          <div className="mt-3">{title}</div>
          <p
            className={cn(
              "mt-4 max-w-xl text-[15px] text-white/50 md:text-lg",
              media ? "mx-auto lg:mx-0" : "mx-auto",
            )}
          >
            {description}
          </p>
          <div className="mt-5 flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:max-w-none">
            <CtaPrimary
              href={primary.href}
              size="lg"
              fullWidth
              className="sm:w-auto"
              location={location}
              intent={intentFromHref(primary.href)}
              pattern="closing-stage"
              strength={0.45}
            >
              {primary.label}
            </CtaPrimary>
            {secondary ? (
              <CtaGhost
                href={secondary.href}
                location={location}
                intent={intentFromHref(secondary.href)}
                pattern="closing-stage"
              >
                {secondary.label}
              </CtaGhost>
            ) : null}
          </div>
          {links && links.length > 0 ? (
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-start">
              {links.map((link) => (
                <CtaText
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  tone="quiet"
                  location={location}
                  intent={intentFromHref(link.href)}
                  pattern="text-explore"
                >
                  {link.label}
                </CtaText>
              ))}
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
