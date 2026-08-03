"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  BarChart3,
  Bot,
  Cog,
  Landmark,
  Search,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import {
  useRef,
  type MouseEvent,
  type ReactNode,
} from "react";

type Agent = {
  id: string;
  name: string;
  role: string;
  icon: LucideIcon;
  x: number;
  y: number;
  delay: number;
  depth: number;
};

const agents: Agent[] = [
  {
    id: "planning",
    name: "Planning Agent",
    role: "Strategy & orchestration",
    icon: Sparkles,
    x: 18,
    y: 16,
    delay: 0.1,
    depth: 1.1,
  },
  {
    id: "research",
    name: "Research Agent",
    role: "Knowledge synthesis",
    icon: Search,
    x: 82,
    y: 18,
    delay: 0.18,
    depth: 0.85,
  },
  {
    id: "finance",
    name: "Finance Agent",
    role: "Decision intelligence",
    icon: Landmark,
    x: 10,
    y: 52,
    delay: 0.26,
    depth: 1,
  },
  {
    id: "support",
    name: "Support Agent",
    role: "Service automation",
    icon: Bot,
    x: 90,
    y: 54,
    delay: 0.34,
    depth: 0.9,
  },
  {
    id: "analytics",
    name: "Analytics Agent",
    role: "Signal detection",
    icon: BarChart3,
    x: 30,
    y: 86,
    delay: 0.42,
    depth: 1.15,
  },
  {
    id: "automation",
    name: "Automation Agent",
    role: "Workflow execution",
    icon: Cog,
    x: 70,
    y: 88,
    delay: 0.5,
    depth: 0.95,
  },
];

const connections: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
  [3, 5],
  [4, 5],
];

const paths = connections.map(([from, to], index) => {
  const a = agents[from];
  const b = agents[to];
  return {
    id: `${a.id}-${b.id}`,
    d: `M ${a.x} ${a.y} Q 50 ${index % 2 === 0 ? 40 : 60} ${b.x} ${b.y}`,
    delay: index * 0.32,
  };
});

type HeroAgentMeshProps = {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
};

export function HeroAgentMesh({ mouseX, mouseY }: HeroAgentMeshProps) {
  const parallaxX = useSpring(useTransform(mouseX, [0, 1], [12, -12]), {
    stiffness: 60,
    damping: 24,
  });
  const parallaxY = useSpring(useTransform(mouseY, [0, 1], [8, -8]), {
    stiffness: 60,
    damping: 24,
  });
  const coreX = useSpring(useTransform(mouseX, [0, 1], [6, -6]), {
    stiffness: 50,
    damping: 22,
  });
  const coreY = useSpring(useTransform(mouseY, [0, 1], [5, -5]), {
    stiffness: 50,
    damping: 22,
  });

  return (
    <motion.div
      className="pointer-events-none absolute top-[18%] right-4 bottom-8 left-[48%] z-[2] hidden lg:block xl:left-[50%] xl:right-8"
      style={{ x: parallaxX, y: parallaxY }}
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="agent-link" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0,190,212,0)" />
            <stop offset="50%" stopColor="rgba(0,190,212,0.45)" />
            <stop offset="100%" stopColor="rgba(0,190,212,0)" />
          </linearGradient>
        </defs>

        {paths.map((path) => (
          <g key={path.id}>
            <path
              d={path.d}
              fill="none"
              stroke="rgba(0,190,212,0.1)"
              strokeWidth="0.14"
            />
            <motion.path
              d={path.d}
              fill="none"
              stroke="url(#agent-link)"
              strokeWidth="0.26"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 0], opacity: [0, 0.85, 0] }}
              transition={{
                duration: 6.5,
                delay: path.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </g>
        ))}

        {agents.map((agent, index) => (
          <motion.line
            key={`core-${agent.id}`}
            x1="50"
            y1="50"
            x2={agent.x}
            y2={agent.y}
            stroke="rgba(0,190,212,0.1)"
            strokeWidth="0.12"
            strokeDasharray="0.6 1.2"
            animate={{ opacity: [0.12, 0.35, 0.12] }}
            transition={{
              duration: 4.5,
              delay: index * 0.25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      <motion.div
        className="absolute top-1/2 left-1/2 z-10 w-[148px] -translate-x-1/2 -translate-y-1/2 xl:w-[168px]"
        style={{ x: coreX, y: coreY }}
      >
        <div className="relative flex aspect-square w-full items-center justify-center">
          <motion.div
            className="absolute inset-0 rounded-full border border-cyan/25"
            animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.15, 0.4] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-[12%] rounded-full border border-dashed border-cyan/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative z-10 flex h-[68%] w-[68%] flex-col items-center justify-center rounded-full border border-white/12 bg-ink/80 text-center shadow-[0_0_50px_rgba(0,190,212,0.16)] backdrop-blur-xl">
            <Workflow className="mb-1 text-cyan" size={16} />
            <span className="text-[9px] tracking-[0.2em] text-cyan uppercase">
              Core
            </span>
            <span className="mt-1 px-2 text-[11px] font-medium text-white">
              Orchestrator
            </span>
          </div>
        </div>
      </motion.div>

      {agents.map((agent, index) => (
        <AgentNode key={agent.id} agent={agent} index={index} />
      ))}
    </motion.div>
  );
}

function AgentNode({ agent, index }: { agent: Agent; index: number }) {
  const Icon = agent.icon;

  return (
    <motion.div
      className="absolute z-20"
      style={{ left: `${agent.x}%`, top: `${agent.y}%` }}
      initial={{ opacity: 0, scale: 0.85, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: 0.5 + agent.delay,
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="relative -translate-x-1/2 -translate-y-1/2"
        animate={{ y: [0, index % 2 === 0 ? -5 : 5, 0] }}
        transition={{
          duration: 6.5 + index * 0.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-[128px] rounded-xl border border-white/10 bg-ink/75 p-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.3)] backdrop-blur-md xl:w-[140px] xl:p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan/25 bg-cyan/10 text-cyan">
              <Icon size={13} />
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-cyan/80" />
          </div>
          <p className="text-[11px] font-medium text-white xl:text-xs">
            {agent.name}
          </p>
          <p className="mt-0.5 text-[10px] leading-snug text-white/40">
            {agent.role}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/** Compact mobile visualization */
export function HeroAgentStrip() {
  return (
    <div className="relative z-[2] mt-7 flex max-w-md flex-wrap gap-2 lg:hidden">
      {agents.slice(0, 4).map((agent, index) => {
        const Icon = agent.icon;
        return (
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.05 }}
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-ink/70 px-2.5 py-1.5 backdrop-blur-md"
          >
            <Icon size={11} className="text-cyan" />
            <span className="text-[10px] text-white/75">{agent.name}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

type HeroStageProps = {
  children: ReactNode;
};

export function HeroStage({ children }: HeroStageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const glowX = useSpring(mouseX, { stiffness: 45, damping: 20 });
  const glowY = useSpring(mouseY, { stiffness: 45, damping: 20 });

  const glowXPercent = useTransform(glowX, (v) => `${v * 100}%`);
  const glowYPercent = useTransform(glowY, (v) => `${v * 100}%`);
  const glowBackground = useMotionTemplate`
    radial-gradient(
      520px circle at ${glowXPercent} ${glowYPercent},
      rgba(0, 190, 212, 0.1),
      transparent 55%
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
      className="relative flex h-dvh max-h-dvh flex-col overflow-hidden bg-ink"
      onMouseMove={onMove}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: glowBackground }}
      />
      <HeroAgentMesh mouseX={mouseX} mouseY={mouseY} />
      {children}
    </div>
  );
}
