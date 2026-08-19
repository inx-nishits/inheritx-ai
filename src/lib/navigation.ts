import type Lenis from "lenis";

/** Normalize a path segment for same-route comparison. */
export function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  return path.replace(/\/$/, "") || "/";
}

function parseHref(href: string) {
  const hashIndex = href.indexOf("#");
  const beforeHash = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : "";

  const queryIndex = beforeHash.indexOf("?");
  const pathname =
    queryIndex >= 0 ? beforeHash.slice(0, queryIndex) : beforeHash;
  const search = queryIndex >= 0 ? beforeHash.slice(queryIndex + 1) : "";

  return { pathname: normalizePath(pathname), search, hash };
}

/**
 * True when clicking the href would stay on the current page (no route change).
 * Hash-only links are excluded so Lenis/native anchor behavior still applies.
 */
export function isSamePageNavigation(
  href: string,
  currentPathname: string,
  currentSearch: string,
): boolean {
  const { pathname, search, hash } = parseHref(href);

  if (hash) return false;
  if (normalizePath(currentPathname) !== pathname) return false;

  const curSearch = currentSearch.startsWith("?")
    ? currentSearch.slice(1)
    : currentSearch;

  if (search) return search === curSearch;
  return !curSearch;
}

export function scrollPageToTop(lenis: Lenis | undefined): void {
  if (lenis) {
    lenis.scrollTo(0, { immediate: false });
    return;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}
