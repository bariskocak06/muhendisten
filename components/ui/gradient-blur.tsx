"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface GradientBlurProps {
  radius?: number;
  opacityDecay?: number;
  backgroundColor?: string;
  color?: [number, number, number];
  colorGenerator?: () => [number, number, number];
  className?: string;
}

type Circle = {
  col: [number, number, number];
  x: number;
  y: number;
  alpha: number;
};

/** Performans: çok fazla daire × gradient = CPU şişmesi */
const MAX_BLUR_CIRCLES = 44;

export function GradientBlur({
  radius = 60,
  opacityDecay = 0.025,
  backgroundColor = "transparent",
  color,
  colorGenerator,
  className,
}: GradientBlurProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const circsRef = useRef<Circle[]>([]);
  const pausedRef = useRef(false);

  const defaultColorGenerator = (): [number, number, number] => [
    Math.floor(Math.random() * 130 + 10),
    Math.floor(0.5 * Math.random() * 50),
    Math.floor(0.5 * Math.random() * 255),
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapperRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const getColor = (): [number, number, number] =>
      color ?? colorGenerator?.() ?? defaultColorGenerator();

    const resizeCanvas = () => {
      const w = Math.max(1, wrap.clientWidth);
      const h = Math.max(1, wrap.clientHeight);
      canvas.width = w;
      canvas.height = h;
    };

    resizeCanvas();

    const cancelLoop = () => {
      pausedRef.current = true;
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const startLoop = () => {
      pausedRef.current = false;
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(draw);
    };

    const draw = () => {
      if (pausedRef.current) {
        rafRef.current = null;
        return;
      }

      const w = canvas.width;
      const h = canvas.height;
      if (w < 1 || h < 1) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      ctx.globalCompositeOperation = "source-over";
      if (backgroundColor === "transparent") {
        ctx.clearRect(0, 0, w, h);
      } else {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, w, h);
      }

      ctx.globalCompositeOperation = "lighter";

      if (circsRef.current.length >= MAX_BLUR_CIRCLES) {
        circsRef.current.shift();
      }

      circsRef.current.push({
        col: getColor(),
        x: mouseRef.current.x,
        y: mouseRef.current.y,
        alpha: 1,
      });

      const toRemove: number[] = [];
      for (let i = 0; i < circsRef.current.length; i++) {
        const circ = circsRef.current[i];
        const grdblur = ctx.createRadialGradient(
          circ.x,
          circ.y,
          0,
          circ.x,
          circ.y,
          radius
        );
        grdblur.addColorStop(
          0,
          `rgba(${circ.col[0]},${circ.col[1]},${circ.col[2]},0.95)`
        );
        grdblur.addColorStop(
          0.2,
          `rgba(${circ.col[0]},${circ.col[1]},${circ.col[2]},0.7)`
        );
        grdblur.addColorStop(
          0.5,
          `rgba(${circ.col[0]},${circ.col[1]},${circ.col[2]},0.3)`
        );
        grdblur.addColorStop(
          1,
          `rgba(${circ.col[0]},${circ.col[1]},${circ.col[2]},0)`
        );

        ctx.beginPath();
        ctx.fillStyle = grdblur;
        ctx.globalAlpha = circ.alpha;
        ctx.arc(circ.x, circ.y, radius, 0, Math.PI * 2);
        ctx.fill();

        circ.alpha -= opacityDecay;
        if (circ.alpha <= 0) toRemove.push(i);
      }

      for (let i = toRemove.length - 1; i >= 0; i--) {
        circsRef.current.splice(toRemove[i], 1);
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(draw);
    };

    const syncMouseFromEvent = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = clientX - rect.left;
      mouseRef.current.y = clientY - rect.top;
    };

    const handleMouseMove = (e: MouseEvent) => {
      syncMouseFromEvent(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) syncMouseFromEvent(t.clientX, t.clientY);
    };

    const handleTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) syncMouseFromEvent(t.clientX, t.clientY);
    };

    mouseRef.current = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleResize = () => resizeCanvas();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("resize", handleResize);

    const ro = new ResizeObserver(() => resizeCanvas());
    ro.observe(wrap);

    const io =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            ([e]) => {
              if (!e?.isIntersecting || document.hidden) cancelLoop();
              else startLoop();
            },
            { rootMargin: "140px", threshold: 0 }
          )
        : null;
    io?.observe(wrap);

    const onVisibility = () => {
      if (document.hidden) {
        cancelLoop();
        return;
      }
      const r = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      const m = 140;
      const vis =
        r.bottom > -m && r.top < vh + m && r.right > -m && r.left < vw + m;
      if (vis) startLoop();
      else cancelLoop();
    };
    document.addEventListener("visibilitychange", onVisibility);

    startLoop();

    return () => {
      ro.disconnect();
      io?.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      cancelLoop();
      circsRef.current = [];
    };
  }, [radius, opacityDecay, backgroundColor, color, colorGenerator]);

  return (
    <div
      ref={wrapperRef}
      className={cn(
        "relative w-full overflow-hidden",
        className ?? "h-screen cursor-move"
      )}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ background: "transparent" }}
      />
    </div>
  );
}
