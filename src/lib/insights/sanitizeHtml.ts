import { rewriteWpLinks } from "./rewriteWpLinks";

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

  return rewriteWpLinks(out);
}
