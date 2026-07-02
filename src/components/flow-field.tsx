"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  px: number;
  py: number;
  life: number;
  maxLife: number;
  hue: number; // 0 -> cyan, 1 -> violet
};

const CYAN = [45, 224, 250];
const VIOLET = [163, 122, 255];
const AMBER = [251, 191, 36];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/**
 * Cheap, smooth, deterministic angle field built from layered trig.
 * Produces organic streamlines without a noise table or any deps.
 */
function fieldAngle(x: number, y: number, t: number) {
  const a =
    Math.sin(x * 0.0016 + t) +
    Math.cos(y * 0.0019 - t * 0.8) +
    Math.sin((x + y) * 0.0011 + t * 0.5) +
    Math.cos((x - y) * 0.0014 - t * 0.3);
  return a * 1.2;
}

export default function FlowField({
  className,
}: {
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    const pointer = { x: -9999, y: -9999, active: false };
    let raf = 0;
    let t = 0;

    const spawn = (p: Particle) => {
      p.x = Math.random() * width;
      p.y = Math.random() * height;
      p.px = p.x;
      p.py = p.y;
      p.maxLife = 120 + Math.random() * 220;
      p.life = Math.random() * p.maxLife;
      p.hue = Math.random();
    };

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = Math.min(
        Math.floor((width * height) / 9500),
        560,
      );
      particles = new Array(target).fill(0).map(() => {
        const p: Particle = {
          x: 0,
          y: 0,
          px: 0,
          py: 0,
          life: 0,
          maxLife: 0,
          hue: 0,
        };
        spawn(p);
        return p;
      });

      // Prime the background so reduced-motion has a filled frame.
      ctx.fillStyle = "#070b16";
      ctx.fillRect(0, 0, width, height);
    };

    const step = () => {
      t += 0.0016;

      // Fade previous frame slightly -> trails become flowing lines.
      // Lower alpha = trails persist longer and read brighter.
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(7, 11, 22, 0.035)";
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = "lighter";
      ctx.lineCap = "round";

      for (const p of particles) {
        let angle = fieldAngle(p.x, p.y, t);
        let speed = 1.15;
        let nearPointer = 0;

        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const dist = Math.hypot(dx, dy);
          const R = 190;
          if (dist < R) {
            // swirl tangentially around the cursor
            nearPointer = 1 - dist / R;
            const tangent = Math.atan2(dy, dx) + Math.PI / 2;
            angle = lerp(angle, tangent, nearPointer * 0.85);
            speed += nearPointer * 1.6;
          }
        }

        p.px = p.x;
        p.py = p.y;
        p.x += Math.cos(angle) * speed;
        p.y += Math.sin(angle) * speed;
        p.life += 1;

        const off =
          p.x < -20 ||
          p.x > width + 20 ||
          p.y < -20 ||
          p.y > height + 20 ||
          p.life > p.maxLife;
        if (off) {
          spawn(p);
          continue;
        }

        const fade = Math.sin((p.life / p.maxLife) * Math.PI); // 0..1..0
        let r = lerp(CYAN[0], VIOLET[0], p.hue);
        let g = lerp(CYAN[1], VIOLET[1], p.hue);
        let b = lerp(CYAN[2], VIOLET[2], p.hue);

        if (nearPointer > 0.15) {
          // warm the stream where the human touches it
          r = lerp(r, AMBER[0], nearPointer);
          g = lerp(g, AMBER[1], nearPointer);
          b = lerp(b, AMBER[2], nearPointer);
        }

        const ri = r | 0;
        const gi = g | 0;
        const bi = b | 0;
        const core = 0.45 + fade * 0.5 + nearPointer * 0.4;

        // Soft wide halo underneath -> the glow that makes each line read.
        ctx.lineWidth = 5;
        ctx.strokeStyle = `rgba(${ri}, ${gi}, ${bi}, ${(core * 0.16).toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(p.px, p.py);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();

        // Bright thin core on top.
        ctx.lineWidth = 1.8;
        ctx.strokeStyle = `rgba(${ri}, ${gi}, ${bi}, ${core.toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(p.px, p.py);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }

      raf = requestAnimationFrame(step);
    };

    const renderStatic = () => {
      // one calm pass for reduced-motion users
      for (let i = 0; i < 200; i++) {
        for (const p of particles) {
          const angle = fieldAngle(p.x, p.y, 0);
          p.px = p.x;
          p.py = p.y;
          p.x += Math.cos(angle) * 1.2;
          p.y += Math.sin(angle) * 1.2;
          p.life += 1;
          if (
            p.x < 0 ||
            p.x > width ||
            p.y < 0 ||
            p.y > height ||
            p.life > p.maxLife
          ) {
            spawn(p);
            continue;
          }
          const r = lerp(CYAN[0], VIOLET[0], p.hue);
          const g = lerp(CYAN[1], VIOLET[1], p.hue);
          const b = lerp(CYAN[2], VIOLET[2], p.hue);
          ctx.strokeStyle = `rgba(${r | 0}, ${g | 0}, ${b | 0}, 0.26)`;
          ctx.lineWidth = 1.3;
          ctx.beginPath();
          ctx.moveTo(p.px, p.py);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        }
      }
    };

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        build();
        if (reduced) renderStatic();
      }, 180);
    };

    const onVisibility = () => {
      if (reduced) return;
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        raf = requestAnimationFrame(step);
      }
    };

    build();
    if (reduced) {
      renderStatic();
    } else {
      raf = requestAnimationFrame(step);
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerleave", onLeave);
      document.addEventListener("visibilitychange", onVisibility);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
    />
  );
}
