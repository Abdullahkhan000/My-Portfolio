"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

interface AnimeTextRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimeTextReveal({
  children,
  className = "",
}: AnimeTextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    element.style.opacity = "1";

    animate(element.children, {
      opacity: [0, 1],
      translateY: ["1em", "0em"],
      delay: stagger(45),
      duration: 900,
      ease: "out(4)",
    });
  }, []);

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  );
}