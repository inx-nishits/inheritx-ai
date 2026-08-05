"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/cn";

type TocItem = { id: string; text: string; level: number };

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

function extractHeadings(html: string): TocItem[] {
  const matches = html.matchAll(/<h([23])[^>]*>([\s\S]*?)<\/h\1>/gi);
  const items: TocItem[] = [];
  for (const match of matches) {
    const level = Number(match[1]);
    const text = match[2].replace(/<[^>]+>/g, "").trim();
    if (!text) continue;
    items.push({ id: slugify(text), text, level });
  }
  return items;
}

function TocList({
  items,
  activeId,
  onNavigate,
}: {
  items: TocItem[];
  activeId: string;
  onNavigate?: () => void;
}) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={`${item.level}-${item.id}`}>
          <a
            href={`#${item.id}`}
            onClick={onNavigate}
            className={cn(
              "block py-0.5 text-sm leading-snug transition-colors",
              item.level === 3 ? "pl-3 text-white/40" : "text-white/55",
              activeId === item.id && "text-cyan",
            )}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function TableOfContents({
  html,
  variant = "all",
}: {
  html: string;
  variant?: "mobile" | "desktop" | "all";
}) {
  const items = useMemo(() => extractHeadings(html), [html]);
  const [activeId, setActiveId] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const root = document.getElementById("insight-article");
    if (!root || items.length < 3) return;

    const headingEls = Array.from(root.querySelectorAll("h2, h3"));
    headingEls.forEach((el) => {
      if (!el.id) {
        const text = el.textContent?.trim() ?? "";
        if (text) el.id = slugify(text);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    headingEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  if (items.length < 3) return null;

  const showMobile = variant === "mobile" || variant === "all";
  const showDesktop = variant === "desktop" || variant === "all";

  return (
    <>
      {showMobile ? (
        <details
          className={cn(
            "rounded-[1.25rem] border border-white/10 bg-ink-soft/80",
            variant === "all" && "lg:hidden",
          )}
          open={open}
          onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
        >
          <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-white [&::-webkit-details-marker]:hidden">
            <span className="text-[11px] tracking-[0.2em] text-cyan uppercase">
              On this page
            </span>
            <ChevronDown
              size={16}
              className={cn(
                "shrink-0 text-white/45 transition-transform",
                open && "rotate-180",
              )}
            />
          </summary>
          <div className="border-t border-white/[0.06] px-4 pt-3 pb-4">
            <TocList
              items={items}
              activeId={activeId}
              onNavigate={() => setOpen(false)}
            />
          </div>
        </details>
      ) : null}

      {showDesktop ? (
        <nav
          aria-label="Table of contents"
          className={cn(
            "rounded-[1.5rem] border border-white/10 bg-ink-soft/80 p-5",
            variant === "all" && "hidden lg:block",
          )}
        >
          <p className="text-[11px] tracking-[0.24em] text-cyan uppercase">
            On this page
          </p>
          <div className="mt-4">
            <TocList items={items} activeId={activeId} />
          </div>
        </nav>
      ) : null}
    </>
  );
}
