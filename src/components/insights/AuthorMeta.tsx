import Link from "next/link";

import type { InsightCategory } from "@/lib/insights/types";
import { insightCategoryHref } from "@/lib/insights/utils";

type AuthorMetaProps = {
  author?: string;
  date?: string;
  readingMinutes?: number;
  category?: InsightCategory | null;
};

export function AuthorMeta({
  author,
  date,
  readingMinutes,
  category,
}: AuthorMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/45">
      {category ? (
        <Link
          href={insightCategoryHref(category.slug)}
          className="max-w-full rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-[10px] tracking-[0.14em] text-cyan uppercase transition-colors hover:border-cyan/50 sm:text-xs"
        >
          {category.name}
        </Link>
      ) : null}
      {author ? <span className="break-words">{author}</span> : null}
      {author && date ? <span className="text-white/20">·</span> : null}
      {date ? <time className="whitespace-nowrap">{date}</time> : null}
      {(author || date) && readingMinutes ? (
        <span className="text-white/20">·</span>
      ) : null}
      {readingMinutes ? (
        <span className="whitespace-nowrap">{readingMinutes} min read</span>
      ) : null}
    </div>
  );
}
