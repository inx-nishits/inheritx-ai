import { rewriteWpLinks } from "./rewriteWpLinks";
import { wpOriginalImageUrl } from "./mediaUrl";

/**
 * Conservative sanitizer for WordPress HTML before dangerouslySetInnerHTML.
 * Strips executable surfaces; keeps article markup (headings, lists, figures).
 */
export function sanitizeInsightHtml(html: string): string {
  if (!html) return "";

  let out = html;
  out = out.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  out = out.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");
  out = out.replace(/<iframe\b[^>]*>[\s\S]*?<\/iframe>/gi, "");
  out = out.replace(/<object\b[^>]*>[\s\S]*?<\/object>/gi, "");
  out = out.replace(/<embed\b[^>]*\/?>/gi, "");
  out = out.replace(/<form\b[^>]*>[\s\S]*?<\/form>/gi, "");
  out = out.replace(/<link\b[^>]*>/gi, "");
  out = out.replace(/<meta\b[^>]*>/gi, "");
  out = out.replace(/<base\b[^>]*>/gi, "");
  out = out.replace(/\son[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "");
  out = out.replace(/javascript:/gi, "");
  out = out.replace(/vbscript:/gi, "");
  out = out.replace(/data:text\/html/gi, "");

  out = out.replace(/\s(src|data-src|data-lazy-src)=["']([^"']+)["']/gi, (_, attr, url) => {
    return ` ${attr}="${wpOriginalImageUrl(url)}"`;
  });
  out = out.replace(/\ssrcset=["']([^"']+)["']/gi, (_, srcset) => {
    const upgraded = srcset
      .split(",")
      .map((part) => {
        const trimmed = part.trim();
        const space = trimmed.search(/\s/);
        if (space === -1) return wpOriginalImageUrl(trimmed);
        return `${wpOriginalImageUrl(trimmed.slice(0, space))} ${trimmed.slice(space).trim()}`;
      })
      .join(", ");
    return ` srcset="${upgraded}"`;
  });

  return rewriteWpLinks(out);
}
