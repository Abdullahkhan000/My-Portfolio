"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect } from "react";

export function PremiumInteractions() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const progress = document.createElement("div");
    progress.className = "scroll-progress";
    progress.setAttribute("aria-hidden", "true");
    document.body.appendChild(progress);

    if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) {
      return () => progress.remove();
    }

    const dot = document.createElement("span");
    const ring = document.createElement("span");
    dot.className = "premium-cursor";
    ring.className = "premium-cursor-ring";
    document.body.append(dot, ring);

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let ringX = pointerX;
    let ringY = pointerY;
    let frame = 0;

    const move = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      dot.style.left = `${pointerX}px`;
      dot.style.top = `${pointerY}px`;
      document.documentElement.style.setProperty("--pointer-x", `${pointerX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${pointerY}px`);
    };

    const animateRing = () => {
      ringX += (pointerX - ringX) * 0.14;
      ringY += (pointerY - ringY) * 0.14;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      frame = window.requestAnimationFrame(animateRing);
    };

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${scrollable > 0 ? window.scrollY / scrollable : 0})`;
    };

    const interactive = document.querySelectorAll<HTMLElement>("a, button, input, textarea, [data-cursor-hover]");
    const enter = () => ring.classList.add("is-hovering");
    const leave = () => ring.classList.remove("is-hovering");
    interactive.forEach((element) => {
      element.addEventListener("pointerenter", enter);
      element.addEventListener("pointerleave", leave);
    });

    const magnetic = document.querySelectorAll<HTMLElement>(".cinema-hero__cta, .cinema-contact__form button, .outline-action");
    const magneticMove = (event: PointerEvent) => {
      const element = event.currentTarget as HTMLElement;
      const rect = element.getBoundingClientRect();
      element.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * 0.12}px, ${(event.clientY - rect.top - rect.height / 2) * 0.12}px)`;
    };
    const magneticReset = (event: PointerEvent) => {
      (event.currentTarget as HTMLElement).style.transform = "";
    };
    magnetic.forEach((element) => {
      element.addEventListener("pointermove", magneticMove);
      element.addEventListener("pointerleave", magneticReset);
    });

    const tiltTargets = document.querySelectorAll<HTMLElement>(".cinema-vitoencodes__poster, .project-frame__media, .cinema-services__grid article");
    const tilt = (event: PointerEvent) => {
      const element = event.currentTarget as HTMLElement;
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      element.style.transform = `perspective(1100px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg) translateY(-4px)`;
    };
    const tiltReset = (event: PointerEvent) => {
      (event.currentTarget as HTMLElement).style.transform = "";
    };
    tiltTargets.forEach((element) => {
      element.addEventListener("pointermove", tilt);
      element.addEventListener("pointerleave", tiltReset);
    });

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    frame = window.requestAnimationFrame(animateRing);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", updateProgress);
      interactive.forEach((element) => {
        element.removeEventListener("pointerenter", enter);
        element.removeEventListener("pointerleave", leave);
      });
      magnetic.forEach((element) => {
        element.removeEventListener("pointermove", magneticMove);
        element.removeEventListener("pointerleave", magneticReset);
      });
      tiltTargets.forEach((element) => {
        element.removeEventListener("pointermove", tilt);
        element.removeEventListener("pointerleave", tiltReset);
      });
      dot.remove();
      ring.remove();
      progress.remove();
    };
  }, [reduceMotion]);

  return null;
}
