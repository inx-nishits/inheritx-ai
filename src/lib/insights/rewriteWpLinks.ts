const WP_HOSTS = new Set([
  "wpadmin.inheritx.com",
  "www.inheritx.com",
  "inheritx.com",
  "blog.inheritx.com",
]);

/**
 * Rewrite WordPress / legacy InheritX links to public Insights routes.
 * Never expose wp-admin, wp-login, or query permalinks to buyers.
 */
export function rewriteWpLinks(html: string): string {
  if (!html) return "";

  let out = html;

  out = out.replace(
    /href=(["'])(?:https?:\/\/[^"']+)?\/(?:wp-admin|wp-login\.php)[^"']*\1/gi,
    'href="/insights"',
  );

  out = out.replace(
    /href=(["'])[^"']*[?&](?:p|post)=\d+[^"']*\1/gi,
    'href="/insights"',
  );

  out = out.replace(
    /href=(["'])https?:\/\/(?:www\.)?inheritx\.com\/(?:blog\/)?([^"'?#/]+)\/?(?:[?#][^"']*)?\1/gi,
    (_m, quote: string, slug: string) => {
      const clean = slug.toLowerCase();
      if (clean === "contact") return `href=${quote}/contact${quote}`;
      if (
        clean === "blog" ||
        clean === "insights" ||
        clean === "about" ||
        clean === "services" ||
        clean === "portfolio"
      ) {
        return `href=${quote}/insights${quote}`;
      }
      return `href=${quote}/insights/${slug}${quote}`;
    },
  );

  out = out.replace(
    /href=(["'])https?:\/\/wpadmin\.inheritx\.com\/(?:\d{4}\/\d{2}\/)?([^"'?#]+)\/?(?:[?#][^"']*)?\1/gi,
    (_m, quote: string, path: string) => {
      const parts = path.split("/").filter(Boolean);
      const slug = parts[parts.length - 1] ?? "";
      if (!slug || slug.startsWith("wp-") || slug === "wp-content") {
        return `href=${quote}/insights${quote}`;
      }
      return `href=${quote}/insights/${slug}${quote}`;
    },
  );

  out = out.replace(
    /href=(["'])\/blog\/([^"'?#]+)\/?\1/gi,
    (_m, quote: string, slug: string) => `href=${quote}/insights/${slug}${quote}`,
  );

  return out;
}

export function isWpHost(hostname: string): boolean {
  const host = hostname.replace(/^www\./i, "").toLowerCase();
  return WP_HOSTS.has(hostname.toLowerCase()) || WP_HOSTS.has(host);
}

export function insightHref(slug: string): string {
  return `/insights/${encodeURIComponent(slug)}`;
}

export function insightCategoryHref(slug: string): string {
  return `/insights/category/${encodeURIComponent(slug)}`;
}
