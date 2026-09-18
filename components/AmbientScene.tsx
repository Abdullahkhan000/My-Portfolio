"use client";

import { useEffect, useRef } from "react";

type Ripple = { x: number; y: number; born: number };

export function AmbientScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const surface = canvas;
    const painter = context;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.45 };
    const target = { ...pointer };
    const ripples: Ripple[] = [];
    let frame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      surface.width = Math.floor(width * dpr);
      surface.height = Math.floor(height * dpr);
      surface.style.width = `${width}px`;
      surface.style.height = `${height}px`;
      painter.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function onPointerMove(event: PointerEvent) {
      target.x = event.clientX;
      target.y = event.clientY;
    }

    function onPointerDown(event: PointerEvent) {
      if (!reduceMotion) ripples.push({ x: event.clientX, y: event.clientY, born: performance.now() });
    }

    function draw(now: number) {
      painter.clearRect(0, 0, width, height);
      pointer.x += (target.x - pointer.x) * 0.045;
      pointer.y += (target.y - pointer.y) * 0.045;

      const glow = painter.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, Math.max(width, height) * 0.48);
      glow.addColorStop(0, "rgba(155, 174, 171, .075)");
      glow.addColorStop(0.3, "rgba(90, 107, 105, .025)");
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");
      painter.fillStyle = glow;
      painter.fillRect(0, 0, width, height);

      const time = reduceMotion ? 0 : now * 0.00032;
      const spacing = width < 700 ? 23 : 28;
      painter.lineWidth = 0.55;

      for (let baseY = -spacing; baseY < height + spacing; baseY += spacing) {
        painter.beginPath();
        for (let x = -20; x <= width + 20; x += 14) {
          const dx = x - pointer.x;
          const dy = baseY - pointer.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - distance / 360);
          const drift = Math.sin(x * 0.006 + baseY * 0.013 + time * 2) * 3.5;
          const wave = Math.sin(distance * 0.025 - time * 7) * influence * 18;
          const y = baseY + drift + wave;
          if (x === -20) painter.moveTo(x, y);
          else painter.lineTo(x, y);
        }
        const proximity = 1 - Math.min(1, Math.abs(baseY - pointer.y) / height);
        painter.strokeStyle = `rgba(176, 191, 188, ${0.025 + proximity * 0.035})`;
        painter.stroke();
      }

      for (let index = ripples.length - 1; index >= 0; index -= 1) {
        const ripple = ripples[index];
        const age = (now - ripple.born) / 1000;
        if (age > 2.2) {
          ripples.splice(index, 1);
          continue;
        }
        const radius = 24 + age * 150;
        painter.beginPath();
        painter.arc(ripple.x, ripple.y, radius, 0, Math.PI * 2);
        painter.strokeStyle = `rgba(198, 211, 208, ${0.22 * (1 - age / 2.2)})`;
        painter.lineWidth = 0.8;
        painter.stroke();
      }

      if (!reduceMotion) frame = window.requestAnimationFrame(draw);
    }

    resize();
    draw(performance.now());
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  return <canvas className="ambient-scene" ref={canvasRef} aria-hidden="true" />;
}
