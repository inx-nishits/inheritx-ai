import sanitizeHtml from "sanitize-html";

import { rewriteWpLinks } from "./rewriteWpLinks";
import { wpOriginalImageUrl } from "./mediaUrl";

function safeSplitSrcSet(srcset: string): string {
  // Keep semantics of `1x, 2x` etc by rewriting each URL in the comma-separated list.
  return srcset
    .split(",")
    .map((part) => {
      const trimmed = part.trim();
      if (!trimmed) return trimmed;
      const space = trimmed.search(/\s/);
      if (space === -1) return wpOriginalImageUrl(trimmed);
      const url = trimmed.slice(0, space);
      const descriptor = trimmed.slice(space).trim();
      return `${wpOriginalImageUrl(url)} ${descriptor}`;
    })
    .join(", ");
}

/**
 * Parser-based sanitizer for WordPress HTML before `dangerouslySetInnerHTML`.
 *
 * Security posture goals:
 * - allow only a strict set of safe tags/attributes
 * - remove executable surfaces (script/style/iframe/object/embed/form/link/meta/base)
 * - block dangerous URL schemes (javascript:, vbscript:, data:text/html, etc.)
 * - prevent event handlers (on*)
 * - discard SVG content (SVG is a common XSS surface)
 *
 * Formatting goals:
 * - preserve article markup (headings, lists, tables, figures, etc.)
 * - rewrite WP image URLs and internal WP links
 */
export function sanitizeInsightHtml(html: string): string {
  if (!html) return "";

  const sanitized = sanitizeHtml(html, {
    // Explicit allowlist: keep content semantics, not scripting surfaces.
    allowedTags: [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "br",
      "hr",
      "strong",
      "em",
      "b",
      "i",
      "u",
      "s",
      "sub",
      "sup",
      "code",
      "pre",
      "blockquote",
      "ul",
      "ol",
      "li",
      "figure",
      "figcaption",
      "table",
      "thead",
      "tbody",
      "tfoot",
      "tr",
      "th",
      "td",
      "span",
      "div",
      "a",
      "img",
      "dl",
      "dt",
      "dd",
      "kbd",
      "mark",
      "small",
      "cite",
    ],
    // Keep CSS class/id for styling + TOC anchor stability.
    allowedAttributes: {
      "*": ["class", "id"],
      a: ["href", "title", "name"],
      img: ["src", "srcset", "alt", "title", "width", "height", "loading", "decoding"],
    },
    // URL schemes: sanitizer validates href/src protocols; relative is allowed by default.
    allowedSchemes: ["http", "https", "mailto"],
    disallowedTagsMode: "discard",
    // Remove dangerous URL-based surfaces even if a tag would otherwise be allowed.
    transformTags: {
      img: function (tagName: string, attribs: Record<string, unknown>) {
        const next: Record<string, unknown> = { ...attribs };
        const src =
          typeof attribs.src === "string" ? (attribs.src as string) : null;
        if (src && src.trim()) next.src = wpOriginalImageUrl(src.trim());
        const srcset =
          typeof attribs.srcset === "string"
            ? (attribs.srcset as string)
            : null;
        if (srcset && srcset.trim()) next.srcset = safeSplitSrcSet(srcset.trim());
        return { tagName, attribs: next };
      },
    },
    // Ensure we don't accidentally preserve malformed boundaries.
    enforceHtmlBoundary: true,
  });

  return rewriteWpLinks(sanitized);
}
