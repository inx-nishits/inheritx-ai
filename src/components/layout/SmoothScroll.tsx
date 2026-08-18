"use client";

import "lenis/dist/lenis.css";
import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";

type SmoothScrollProps = {
  children: ReactNode;
};

function LenisRouteSync() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    if (lenis.isStopped) lenis.start();
    lenis.resize();
  }, [pathname, lenis]);

  return null;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        smoothWheel: true,
        autoRaf: true,
        anchors: true,
        allowNestedScroll: true,
        naiveDimensions: true,
        stopInertiaOnNavigate: true,
        overscroll: true,
        gestureOrientation: "vertical",
        virtualScroll: ({ deltaX, deltaY }) =>
          Math.abs(deltaY) >= Math.abs(deltaX),
      }}
    >
      <LenisRouteSync />
      {children}
    </ReactLenis>
  );
}
