const WP_HOSTS = new Set([
  "wpadmin.inheritx.com",
  "www.inheritx.com",
  "inheritx.com",
  "blog.inheritx.com",
]);

/** WordPress marketing pages that are not insights posts. */
const LEGACY_PAGE_HREF: Record<string, string> = {
  contact: "/contact",
  "contact-us": "/contact",
  contactus: "/contact",
  "contact-experts": "/contact",
  "get-in-touch": "/contact",
  "talk-to-us": "/contact",
  "request-a-quote": "/contact",
  "hire-us": "/contact",
  about: "/company",
  "about-us": "/company",
  "about-inheritx": "/company",
  company: "/company",
  services: "/solutions",
  solutions: "/solutions",
  portfolio: "/portfolio",
  "case-study": "/case-studies",
  "case-studies": "/case-studies",
  careers: "/careers",
  jobs: "/careers",
  team: "/team",
  privacy: "/privacy",
  "privacy-policy": "/privacy",
  terms: "/terms",
  "terms-of-use": "/terms",
  cookies: "/cookies",
  blog: "/insights",
  insights: "/insights",
};

function hrefForLegacySlug(slug: string): string | null {
  const clean = slug.replace(/\/+$/, "").toLowerCase();
  return LEGACY_PAGE_HREF[clean] ?? null;
}

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
      const mapped = hrefForLegacySlug(slug);
      if (mapped) return `href=${quote}${mapped}${quote}`;
      return `href=${quote}/insights/${slug}${quote}`;
    },
  );

  out = out.replace(
    /href=(["'])https?:\/\/wpadmin\.inheritx\.com\/(?:\d{4}\/\d{2}\/)?([^"'?#]+)\/?(?:[?#][^"']*)?\1/gi,
    (_m, quote: string, path: string) => {
      const parts = path.split("/").filter(Boolean);
      const slug = parts[parts.length - 1] ?? "";
      const mapped = hrefForLegacySlug(slug);
      if (mapped) return `href=${quote}${mapped}${quote}`;
      if (!slug || slug.startsWith("wp-") || slug === "wp-content") {
        return `href=${quote}/insights${quote}`;
      }
      return `href=${quote}/insights/${slug}${quote}`;
    },
  );

  out = out.replace(
    /href=(["'])\/blog\/([^"'?#]+)\/?\1/gi,
    (_m, quote: string, slug: string) => {
      const mapped = hrefForLegacySlug(slug);
      if (mapped) return `href=${quote}${mapped}${quote}`;
      return `href=${quote}/insights/${slug}${quote}`;
    },
  );

  out = out.replace(
    /href=(["'])\/(contact-us|contactus|contact-experts|get-in-touch|about-us|privacy-policy)\/?\1/gi,
    (_m, quote: string, slug: string) => {
      const mapped = hrefForLegacySlug(slug) ?? "/contact";
      return `href=${quote}${mapped}${quote}`;
    },
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
