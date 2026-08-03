import Image from "next/image";

import { cn } from "@/lib/cn";

type VisualFrameProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  tone?: "dark" | "light";
  unoptimized?: boolean;
};

export function VisualFrame({
  src,
  alt,
  className,
  priority = false,
  tone = "dark",
  unoptimized = false,
}: VisualFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.75rem]",
        tone === "dark" ? "border border-white/10" : "border border-ink/10",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        unoptimized={unoptimized}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          tone === "dark"
            ? "bg-gradient-to-t from-ink/55 via-transparent to-ink/10"
            : "bg-gradient-to-t from-paper/30 via-transparent to-transparent",
        )}
      />
    </div>
  );
}

type SectionLeadProps = {
  src: string;
  alt: string;
  tone?: "dark" | "light";
  className?: string;
};

export function SectionLead({
  src,
  alt,
  tone = "dark",
  className,
}: SectionLeadProps) {
  return (
    <VisualFrame
      src={src}
      alt={alt}
      tone={tone}
      className={cn(
        "mb-10 aspect-[16/7] w-full md:mb-14 md:aspect-[21/8]",
        className,
      )}
    />
  );
}
