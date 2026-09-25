"use client";

type Blob = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  hue: number;
};

export default function fluidCursor() {
  const canvas = document.getElementById("fluid") as HTMLCanvasElement | null;
  if (!canvas) return;

  const context = canvas.getContext("2d");
  if (!context) return;

  const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const blobs: Blob[] = Array.from({ length: 14 }, (_, index) => ({
    x: pointer.x,
    y: pointer.y,
    vx: 0,
    vy: 0,
    radius: 90 - index * 3.5,
    hue: 155 + index * 2.2,
  }));

  let frame = 0;
  let running = true;

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  };

  const move = (event: MouseEvent | TouchEvent) => {
    const touch = "touches" in event ? event.touches[0] : undefined;
    pointer.x = touch?.clientX ?? (event as MouseEvent).clientX;
    pointer.y = touch?.clientY ?? (event as MouseEvent).clientY;
  };

  const draw = () => {
    if (!running) return;
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.globalCompositeOperation = "screen";

    blobs.forEach((blob, index) => {
      const target = index === 0 ? pointer : blobs[index - 1];
      blob.vx += (target.x - blob.x) * (0.16 - index * 0.004);
      blob.vy += (target.y - blob.y) * (0.16 - index * 0.004);
      blob.vx *= 0.78;
      blob.vy *= 0.78;
      blob.x += blob.vx;
      blob.y += blob.vy;

      const gradient = context.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius);
      gradient.addColorStop(0, `hsla(${blob.hue}, 45%, 68%, ${0.12 - index * 0.005})`);
      gradient.addColorStop(0.55, `hsla(${blob.hue}, 38%, 48%, ${0.05 - index * 0.002})`);
      gradient.addColorStop(1, `hsla(${blob.hue}, 35%, 35%, 0)`);
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
      context.fill();
    });

    context.globalCompositeOperation = "source-over";
    frame = window.requestAnimationFrame(draw);
  };

  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", move, { passive: true });
  window.addEventListener("touchmove", move, { passive: true });
  draw();

  return () => {
    running = false;
    window.cancelAnimationFrame(frame);
    window.removeEventListener("resize", resize);
    window.removeEventListener("mousemove", move);
    window.removeEventListener("touchmove", move);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  };
}
