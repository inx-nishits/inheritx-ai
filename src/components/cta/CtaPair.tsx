import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type CtaPairProps = {
  children: ReactNode;
  align?: "start" | "center";
  className?: string;
};

/** Hero pair layout: one fill + proof/text/chip. Never two fills. */
export function CtaPair({
  children,
  align = "start",
  className,
}: CtaPairProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 md:gap-4",
        align === "center" && "items-center sm:justify-center",
        className,
      )}
    >
      {children}
    </div>
  );
}
