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
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;

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

    const draw = () => {
      time.current += 0.016;
      ctx.clearRect(0, 0, width, height);

      // Soft moving aurora wash
      const gx = width * 0.5 + Math.sin(time.current * 0.18) * width * 0.12;
      const gy = height * 0.35 + Math.cos(time.current * 0.14) * height * 0.08;
      const aurora = ctx.createRadialGradient(gx, gy, 0, gx, gy, Math.max(width, height) * 0.55);
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

      for (const p of pts) {
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.hypot(dx, dy);

        if (mouse.current.active && dist < 220) {
          p.vx += (dx / dist) * 0.018;
          p.vy += (dy / dist) * 0.018;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.992;
        p.vy *= 0.992;
        p.pulse += 0.02;

        // Gentle drift
        p.vx += Math.sin(time.current * 0.4 + p.y * 0.01) * 0.002;
        p.vy += Math.cos(time.current * 0.35 + p.x * 0.01) * 0.002;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));
      }

      // Connections
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i];
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 140) {
            const alpha = 0.22 * (1 - d / 140);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0, 190, 212, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

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

    const onMove = (event: PointerEvent) => {
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

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
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
