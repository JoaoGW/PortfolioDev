"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

type Ripple = {
  x: number;
  y: number;
  createdAt: number;
};

type LogoWaterEffectProps = {
  alt: string;
  src: StaticImageData | string;
};

const RIPPLE_DURATION = 900;
const RIPPLE_INTERVAL = 70;

export function LogoWaterEffect({ alt, src }: LogoWaterEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationFrame = 0;
    let lastRippleAt = 0;
    let ripples: Ripple[] = [];

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.max(1, Math.round(width * pixelRatio));
      canvas.height = Math.max(1, Math.round(height * pixelRatio));
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const draw = (now: number) => {
      const { width, height } = container.getBoundingClientRect();

      context.clearRect(0, 0, width, height);
      ripples = ripples.filter((ripple) => now - ripple.createdAt < RIPPLE_DURATION);

      ripples.forEach((ripple) => {
        const progress = (now - ripple.createdAt) / RIPPLE_DURATION;
        const radius = 14 + Math.max(width, height) * 0.42 * progress;
        const opacity = (1 - progress) * 0.35;

        context.beginPath();
        context.arc(ripple.x, ripple.y, radius, 0, Math.PI * 2);
        context.lineWidth = 1.2;
        context.strokeStyle = `rgb(255 107 0 / ${opacity})`;
        context.stroke();

        context.beginPath();
        context.arc(ripple.x, ripple.y, radius * 0.58, 0, Math.PI * 2);
        context.lineWidth = 0.75;
        context.strokeStyle = `rgb(255 107 0 / ${opacity * 0.75})`;
        context.stroke();
      });

      if (ripples.length > 0) {
        animationFrame = window.requestAnimationFrame(draw);
      } else {
        animationFrame = 0;
      }
    };

    const addRipple = (event: PointerEvent) => {
      if (event.pointerType === "touch") {
        return;
      }

      const now = performance.now();

      if (now - lastRippleAt < RIPPLE_INTERVAL) {
        return;
      }

      const bounds = container.getBoundingClientRect();
      lastRippleAt = now;
      ripples.push({
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
        createdAt: now,
      });

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    const observer = new ResizeObserver(resize);

    resize();
    observer.observe(container);
    container.addEventListener("pointermove", addRipple);

    return () => {
      observer.disconnect();
      container.removeEventListener("pointermove", addRipple);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="group/logo relative isolate overflow-hidden border border-white/10 bg-[#121212] p-5 sm:p-8"
    >
      <Image
        src={src}
        alt={alt}
        width={1254}
        height={1254}
        priority
        className="relative z-10 mx-auto aspect-square w-full max-w-md object-contain"
      />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 h-full w-full mix-blend-screen"
      />
    </div>
  );
}
