"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";

type Node = {
  id: string;
  x: number;
  y: number;
  r: number;
  delay: number;
};

/**
 * Edge-weighted constellation — center reserved for typography.
 * Balanced visibility: noticeable ambient intelligence, never primary.
 */
const nodes: Node[] = [
  { id: "n1", x: 9, y: 15, r: 2.1, delay: 0.1 },
  { id: "n2", x: 91, y: 13, r: 1.7, delay: 0.25 },
  { id: "n3", x: 93, y: 50, r: 2.3, delay: 0.4 },
  { id: "n4", x: 86, y: 86, r: 1.6, delay: 0.55 },
  { id: "n5", x: 14, y: 88, r: 2.0, delay: 0.7 },
  { id: "n6", x: 6, y: 48, r: 1.5, delay: 0.85 },
  { id: "n7", x: 24, y: 10, r: 1.3, delay: 0.2 },
  { id: "n8", x: 76, y: 90, r: 1.4, delay: 0.65 },
];

const links: [number, number][] = [
  [0, 6],
  [6, 1],
  [1, 2],
  [2, 3],
  [3, 7],
  [7, 4],
  [4, 5],
  [5, 0],
];

type ConstellationProps = {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
};

export function HeroConstellation({ mouseX, mouseY }: ConstellationProps) {
  const parallaxX = useSpring(useTransform(mouseX, [0, 1], [10, -10]), {
    stiffness: 30,
    damping: 32,
  });
  const parallaxY = useSpring(useTransform(mouseY, [0, 1], [7, -7]), {
    stiffness: 30,
    damping: 32,
  });

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-[2] opacity-[0.7] will-change-transform [mask-image:linear-gradient(to_bottom,black_0%,black_68%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_68%,transparent_100%)]"
      style={{ x: parallaxX, y: parallaxY }}
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hero-link" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0,190,212,0)" />
            <stop offset="50%" stopColor="rgba(0,190,212,0.58)" />
            <stop offset="100%" stopColor="rgba(0,190,212,0)" />
          </linearGradient>
        </defs>

        {/* Quiet orbital rings — perimeter, no bright core behind type */}
        <motion.g
          animate={{ rotate: 360 }}
          style={{ transformOrigin: "50px 48px" }}
          transition={{ duration: 130, repeat: Infinity, ease: "linear" }}
        >
          <circle
            cx="50"
            cy="48"
            r="36"
            fill="none"
            stroke="rgba(0,190,212,0.17)"
            strokeWidth="0.075"
            strokeDasharray="1.6 3.2"
          />
        </motion.g>
        <motion.g
          animate={{ rotate: -360 }}
          style={{ transformOrigin: "50px 48px" }}
          transition={{ duration: 95, repeat: Infinity, ease: "linear" }}
        >
          <circle
            cx="50"
            cy="48"
            r="30"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.055"
          />
        </motion.g>

        {links.map(([from, to], index) => {
          const a = nodes[from];
          const b = nodes[to];
          const midY = index % 2 === 0 ? 16 : 84;
          const d = `M ${a.x} ${a.y} Q 50 ${midY} ${b.x} ${b.y}`;
          return (
            <g key={`${a.id}-${b.id}`}>
              <path
                d={d}
                fill="none"
                stroke="rgba(0,190,212,0.12)"
                strokeWidth="0.085"
              />
              <motion.path
                d={d}
                fill="none"
                stroke="url(#hero-link)"
                strokeWidth="0.18"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 0], opacity: [0, 0.82, 0] }}
                transition={{
                  duration: 12,
                  delay: index * 0.75,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </g>
          );
        })}

        {nodes.map((node) => (
          <g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.r * 2.0}
              fill="rgba(0,190,212,0.1)"
              animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.1, 1] }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
              transition={{
                duration: 7.5 + node.delay,
                delay: node.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r * 0.26}
              fill="rgba(0,190,212,0.82)"
            />
          </g>
        ))}
      </svg>
    </motion.div>
  );
}

type HeroStageProps = {
  children: ReactNode;
};

export function HeroStage({ children }: HeroStageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const glowX = useSpring(mouseX, { stiffness: 30, damping: 28 });
  const glowY = useSpring(mouseY, { stiffness: 30, damping: 28 });

  const glowXPercent = useTransform(glowX, (v) => `${v * 100}%`);
  const glowYPercent = useTransform(glowY, (v) => `${v * 100}%`);
  const glowBackground = useMotionTemplate`
    radial-gradient(
      560px circle at ${glowXPercent} ${glowYPercent},
      rgba(0, 190, 212, 0.09),
      transparent 60%
    )
  `;

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width);
    mouseY.set((event.clientY - rect.top) / rect.height);
  };

  return (
    <div
      ref={ref}
      className="relative flex h-auto flex-col overflow-hidden bg-ink md:h-dvh md:max-h-dvh"
      onMouseMove={onMove}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: glowBackground }}
      />
      <HeroConstellation mouseX={mouseX} mouseY={mouseY} />
      {children}
    </div>
  );
}
