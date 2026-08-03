"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

type HeroAtmosphereProps = {
  className?: string;
};

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  pulse: number;
};

type Stream = {
  x: number;
  y: number;
  tx: number;
  ty: number;
  progress: number;
  speed: number;
};

type Beam = {
  x: number;
  y: number;
  angle: number;
  length: number;
  alpha: number;
  speed: number;
};

const CONNECTION_DIST = 140;
const CONNECTION_DIST_SQ = CONNECTION_DIST * CONNECTION_DIST;
const MOUSE_INFLUENCE = 220;
const MOUSE_INFLUENCE_SQ = MOUSE_INFLUENCE * MOUSE_INFLUENCE;

export function HeroAtmosphere({ className }: HeroAtmosphereProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999, active: false });
  const nodes = useRef<Node[]>([]);
  const streams = useRef<Stream[]>([]);
  const beams = useRef<Beam[]>([]);
  const raf = useRef(0);
  const time = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let running = false;
    let inView = true;
    let pageVisible = document.visibilityState !== "hidden";

    const createStream = (w: number, h: number): Stream => {
      const x = Math.random() * w;
      const y = Math.random() * h;
      const angle = Math.random() * Math.PI * 2;
      const dist = 80 + Math.random() * 180;
      return {
        x,
        y,
        tx: x + Math.cos(angle) * dist,
        ty: y + Math.sin(angle) * dist,
        progress: Math.random(),
        speed: 0.004 + Math.random() * 0.008,
      };
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.floor((width * height) / 9000);
      nodes.current = Array.from({ length: Math.max(55, count) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.8 + 0.5,
        pulse: Math.random() * Math.PI * 2,
      }));

      streams.current = Array.from({ length: 28 }, () => createStream(width, height));
      beams.current = Array.from({ length: 5 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        angle: Math.random() * Math.PI * 2,
        length: 180 + Math.random() * 260,
        alpha: 0.04 + Math.random() * 0.05,
        speed: 0.0008 + Math.random() * 0.0012,
      }));
    };

    const drawConnections = (pts: Node[]) => {
      const cellSize = CONNECTION_DIST;
      const cols = Math.max(1, Math.ceil(width / cellSize));
      const rows = Math.max(1, Math.ceil(height / cellSize));
      const bucketCount = cols * rows;
      const buckets: number[][] = Array.from({ length: bucketCount }, () => []);

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const col = Math.min(cols - 1, Math.max(0, Math.floor(p.x / cellSize)));
        const row = Math.min(rows - 1, Math.max(0, Math.floor(p.y / cellSize)));
        buckets[row * cols + col].push(i);
      }

      ctx.lineWidth = 1;

      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        const col = Math.min(cols - 1, Math.max(0, Math.floor(a.x / cellSize)));
        const row = Math.min(rows - 1, Math.max(0, Math.floor(a.y / cellSize)));

        for (let oy = -1; oy <= 1; oy++) {
          const ny = row + oy;
          if (ny < 0 || ny >= rows) continue;
          for (let ox = -1; ox <= 1; ox++) {
            const nx = col + ox;
            if (nx < 0 || nx >= cols) continue;
            const bucket = buckets[ny * cols + nx];
            for (let b = 0; b < bucket.length; b++) {
              const j = bucket[b];
              if (j <= i) continue;
              const other = pts[j];
              const dx = a.x - other.x;
              const dy = a.y - other.y;
              const distSq = dx * dx + dy * dy;
              if (distSq >= CONNECTION_DIST_SQ || distSq === 0) continue;
              const d = Math.sqrt(distSq);
              const alpha = 0.22 * (1 - d / CONNECTION_DIST);
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(other.x, other.y);
              ctx.strokeStyle = `rgba(0, 190, 212, ${alpha})`;
              ctx.stroke();
            }
          }
        }
      }
    };

    const draw = () => {
      if (!running) return;

      time.current += 0.016;
      ctx.clearRect(0, 0, width, height);

      // Soft moving aurora wash
      const gx = width * 0.5 + Math.sin(time.current * 0.18) * width * 0.12;
      const gy = height * 0.35 + Math.cos(time.current * 0.14) * height * 0.08;
      const aurora = ctx.createRadialGradient(
        gx,
        gy,
        0,
        gx,
        gy,
        Math.max(width, height) * 0.55,
      );
      aurora.addColorStop(0, "rgba(0, 190, 212, 0.14)");
      aurora.addColorStop(0.45, "rgba(8, 145, 168, 0.05)");
      aurora.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = aurora;
      ctx.fillRect(0, 0, width, height);

      // Mouse glow
      if (mouse.current.active) {
        const glow = ctx.createRadialGradient(
          mouse.current.x,
          mouse.current.y,
          0,
          mouse.current.x,
          mouse.current.y,
          220,
        );
        glow.addColorStop(0, "rgba(0, 190, 212, 0.16)");
        glow.addColorStop(0.5, "rgba(0, 190, 212, 0.05)");
        glow.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);
      }

      // Light beams
      for (const beam of beams.current) {
        beam.angle += beam.speed;
        beam.x += Math.cos(beam.angle) * 0.15;
        beam.y += Math.sin(beam.angle) * 0.12;
        if (beam.x < -100) beam.x = width + 100;
        if (beam.x > width + 100) beam.x = -100;
        if (beam.y < -100) beam.y = height + 100;
        if (beam.y > height + 100) beam.y = -100;

        const ex = beam.x + Math.cos(beam.angle) * beam.length;
        const ey = beam.y + Math.sin(beam.angle) * beam.length;
        const grad = ctx.createLinearGradient(beam.x, beam.y, ex, ey);
        grad.addColorStop(0, `rgba(0, 190, 212, 0)`);
        grad.addColorStop(0.5, `rgba(0, 190, 212, ${beam.alpha})`);
        grad.addColorStop(1, `rgba(0, 190, 212, 0)`);
        ctx.beginPath();
        ctx.moveTo(beam.x, beam.y);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      const pts = nodes.current;
      const mouseActive = mouse.current.active;
      const mx = mouse.current.x;
      const my = mouse.current.y;
      const t = time.current;

      for (const p of pts) {
        if (mouseActive) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < MOUSE_INFLUENCE_SQ && distSq > 0) {
            const dist = Math.sqrt(distSq);
            p.vx += (dx / dist) * 0.018;
            p.vy += (dy / dist) * 0.018;
          }
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.992;
        p.vy *= 0.992;
        p.pulse += 0.02;

        // Gentle drift
        p.vx += Math.sin(t * 0.4 + p.y * 0.01) * 0.002;
        p.vy += Math.cos(t * 0.35 + p.x * 0.01) * 0.002;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));
      }

      drawConnections(pts);

      // Nodes
      for (const p of pts) {
        const breathe = 0.55 + Math.sin(p.pulse) * 0.35;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * breathe, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 190, 212, 0.75)";
        ctx.fill();

        if (p.r > 1.4) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 4.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 190, 212, ${0.06 * breathe})`;
          ctx.fill();
        }
      }

      // Data streams
      for (const s of streams.current) {
        s.progress += s.speed;
        if (s.progress >= 1) {
          Object.assign(s, createStream(width, height), { progress: 0 });
        }
        const x = s.x + (s.tx - s.x) * s.progress;
        const y = s.y + (s.ty - s.y) * s.progress;
        const trail = ctx.createRadialGradient(x, y, 0, x, y, 8);
        trail.addColorStop(0, "rgba(255, 255, 255, 0.7)");
        trail.addColorStop(0.4, "rgba(0, 190, 212, 0.45)");
        trail.addColorStop(1, "rgba(0, 190, 212, 0)");
        ctx.fillStyle = trail;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();
      }

      raf.current = requestAnimationFrame(draw);
    };

    const start = () => {
      if (running || !inView || !pageVisible) return;
      running = true;
      raf.current = requestAnimationFrame(draw);
    };

    const stop = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(raf.current);
      raf.current = 0;
    };

    const syncRunning = () => {
      if (inView && pageVisible) start();
      else stop();
    };

    const onMove = (event: PointerEvent) => {
      if (!running) return;
      const rect = canvas.getBoundingClientRect();
      mouse.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      };
    };

    const onLeave = () => {
      mouse.current.active = false;
    };

    const onVisibility = () => {
      pageVisible = document.visibilityState !== "hidden";
      syncRunning();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        syncRunning();
      },
      { threshold: 0, rootMargin: "0px" },
    );

    resize();
    observer.observe(canvas);
    syncRunning();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      aria-hidden
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
    />
  );
}
