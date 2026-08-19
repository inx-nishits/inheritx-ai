"use client";

import { useLenis } from "lenis/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  type ComponentProps,
  type MouseEvent,
} from "react";

import {
  isSamePageNavigation,
  scrollPageToTop,
} from "@/lib/navigation";

type NavLinkProps = ComponentProps<typeof Link>;

function hrefToString(href: NavLinkProps["href"]): string {
  if (typeof href === "string") return href;
  if (typeof href === "object" && href !== null) {
    const pathname = href.pathname ?? "";
    const search =
      typeof href.search === "string"
        ? href.search.startsWith("?")
          ? href.search
          : href.search
            ? `?${href.search}`
            : ""
        : "";
    const hash = href.hash ?? "";
    return `${pathname}${search}${hash}`;
  }
  return String(href);
}

export function NavLink({ href, onClick, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const lenis = useLenis();

  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event);
      if (event.defaultPrevented) return;

      const targetHref = hrefToString(href);
      const currentSearch = window.location.search.slice(1);
      if (isSamePageNavigation(targetHref, pathname, currentSearch)) {
        event.preventDefault();
        scrollPageToTop(lenis ?? undefined);
      }
    },
    [href, onClick, pathname, lenis],
  );

  return <Link href={href} onClick={handleClick} {...props} />;
}
