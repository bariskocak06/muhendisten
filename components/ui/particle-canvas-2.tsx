"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  color: string;
  Hvelocity: number;
  Vvelocity: number;
  dead: boolean;
};

type Props = {
  className?: string;
  /** Canvas background color or 'transparent' */
  background?: string;
  /** Maximum number of active particles */
  maxParticles?: number;
  /** Particles created at mount */
  initialParticles?: number;
  /** Particles generated per frame */
  particlesPerFrame?: number;
  /** Array of color strings (CSS rgba/hsla/hex) */
  colors?: string[];
  /** Range for particle size (min, max) */
  sizeRange?: [number, number];
  /** Range for particle velocity (min, max) */
  velocityRange?: [number, number];
  /** Whether particles fall down (true) or move upward (false) */
  downward?: boolean;
  /** Global opacity multiplier (0–1) */
  opacity?: number;
  /** Whether to blend with lighter effect or normal */
  blendMode?: "lighter" | "source-over";
};

export function ParticleCanvas({
  className,
  background = "transparent",
  maxParticles = 1000,
  initialParticles = 50,
  particlesPerFrame = 20,
  colors = ["rgba(255, 0, 128, 0.25)"],
  sizeRange = [2, 40],
  velocityRange = [2, 4],
  downward = true,
  opacity = 1,
  blendMode = "lighter",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const logicalSizeRef = useRef({ w: 0, h: 0 });
  const dprRef = useRef(1);
  const pausedRef = useRef(false);

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    const wrap = wrapperRef.current;
    if (!canvas) return;
    const parent = wrap ?? canvas.parentElement;
    const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
    dprRef.current = dpr;
    const width = Math.max(1, parent?.clientWidth ?? window.innerWidth);
    const height = Math.max(1, parent?.clientHeight ?? window.innerHeight);
    logicalSizeRef.current = { w: width, h: height };
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    canvas.style.display = "block";
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctxRef.current = ctx;
  };

  const drawCanvasBackground = (ctx: CanvasRenderingContext2D) => {
    const { w, h } = logicalSizeRef.current;
    const dpr = dprRef.current;
    if (w < 1 || h < 1) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    if (background !== "transparent") {
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, w, h);
    }
  };

  const randomBetween = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const generateParticle = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = randomBetween(sizeRange[0], sizeRange[1]);
    const Hvelocity = randomBetween(velocityRange[0], velocityRange[1]);
    const Vvelocity = randomBetween(velocityRange[0], velocityRange[1]);
    const particle: Particle = {
      x: Math.random() * -100,
      y: Math.random() * -100,
      size,
      color,
      Hvelocity,
      Vvelocity,
      dead: false,
    };
    particlesRef.current.push(particle);
  };

  const draw = () => {
    if (pausedRef.current) {
      rafRef.current = null;
      return;
    }

    const ctx = ctxRef.current;
    if (!ctx || !canvasRef.current) {
      rafRef.current = requestAnimationFrame(draw);
      return;
    }

    let { w, h } = logicalSizeRef.current;
    if (w < 1 || h < 1) {
      resizeCanvas();
      ({ w, h } = logicalSizeRef.current);
    }
    if (w < 1 || h < 1) {
      rafRef.current = requestAnimationFrame(draw);
      return;
    }

    drawCanvasBackground(ctx);
    const particles = particlesRef.current;
    ctx.globalCompositeOperation = blendMode;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      if (p.dead) {
        particles.splice(i, 1);
        i--;
        continue;
      }

      ctx.beginPath();
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
      gradient.addColorStop(1, "transparent");
      gradient.addColorStop(0, p.color);
      ctx.globalAlpha = opacity;
      ctx.fillStyle = gradient;
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();

      p.x += p.Hvelocity;
      p.y += downward ? p.Vvelocity : -p.Vvelocity;

      if (
        p.x - p.size > w ||
        p.y - p.size > h ||
        p.y + p.size < 0
      ) {
        p.dead = true;
      }
    }

    ctx.globalAlpha = 1;

    if (particles.length < maxParticles) {
      const n = Math.floor(particlesPerFrame);
      for (let i = 0; i < n; i++) generateParticle();
    }

    rafRef.current = requestAnimationFrame(draw);
  };

  useEffect(() => {
    let cancelled = false;

    const startLoop = () => {
      if (cancelled) return;
      resizeCanvas();
      particlesRef.current = [];
      for (let i = 0; i < initialParticles; i++) generateParticle();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(draw);
    };

    /* İlk layout tamamlansın — bazen parent 0×0 geliyor */
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(startLoop);
    });

    const handleResize = () => {
      resizeCanvas();
    };
    window.addEventListener("resize", handleResize);

    const wrap = wrapperRef.current;
    const ro =
      typeof ResizeObserver !== "undefined" && wrap
        ? new ResizeObserver(() => {
            resizeCanvas();
          })
        : null;
    if (wrap && ro) ro.observe(wrap);

    const cancelLoop = () => {
      pausedRef.current = true;
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const resumeLoop = () => {
      pausedRef.current = false;
      resizeCanvas();
      if (rafRef.current == null && !cancelled) {
        rafRef.current = requestAnimationFrame(draw);
      }
    };

    let io: IntersectionObserver | undefined;
    if (wrap && typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        ([e]) => {
          if (!e?.isIntersecting || document.hidden) cancelLoop();
          else resumeLoop();
        },
        { rootMargin: "140px", threshold: 0 }
      );
      io.observe(wrap);
    }

    const onVisibility = () => {
      if (!wrap) return;
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
      if (vis) resumeLoop();
      else cancelLoop();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelled = true;
      cancelAnimationFrame(id);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", onVisibility);
      io?.disconnect();
      ro?.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      particlesRef.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- imperative canvas loop
  }, [
    background,
    colors,
    maxParticles,
    initialParticles,
    particlesPerFrame,
    sizeRange,
    velocityRange,
    downward,
    opacity,
    blendMode,
  ]);

  return (
    <div ref={wrapperRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
