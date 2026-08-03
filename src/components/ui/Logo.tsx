"use client";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  priority?: boolean;
};

export function Logo({
  variant = "light",
  className,
  priority = false,
}: LogoProps) {
  const src =
    variant === "light"
      ? "/images/inx-logo.svg"
      : "/images/inx-logo-dark.svg";

  return (
    <Link
      href="/"
      aria-label="InheritX home"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src={src}
        alt="InheritX"
        width={148}
        height={21}
        priority={priority}
        className="h-5 w-auto md:h-6"
      />
    </Link>
  );
}
