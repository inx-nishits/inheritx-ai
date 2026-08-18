"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type MagneticButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  className?: string;
  /** Kept for callers; magnetic pull is disabled so hover does not jump. */
  strength?: number;
};

export function MagneticButton({
  children,
  className,
  strength: _strength,
  ...props
}: MagneticButtonProps) {
  return (
    <a
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
        className,
      )}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </a>
  );
}
