"use client";

import { useEffect, useRef } from "react";

import type { CtaAnalyticsPayload } from "@/data/cta/analytics";
import { trackCtaImpression } from "@/lib/cta";

type ImpressionPayload = Omit<CtaAnalyticsPayload, "event">;

/** Fires `cta_impression` once when the node is at least 40% visible. */
export function useCtaImpression<T extends HTMLElement = HTMLElement>(
  payload: ImpressionPayload,
) {
  const ref = useRef<T>(null);
  const sent = useRef(false);
  const payloadRef = useRef(payload);

  useEffect(() => {
    payloadRef.current = payload;
  }, [payload]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || sent.current) return;
        sent.current = true;
        trackCtaImpression(payloadRef.current);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}
