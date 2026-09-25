"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

interface AnimeTextProps {
  text: string;
  className?: string;
}

export default function AnimeText({
  text,
  className = "",
}: AnimeTextProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    animate(ref.current.querySelectorAll(".anime-char"), {
      opacity: [0, 1],
      translateY: ["100%", "0%"],
      delay: stagger(35),
      duration: 900,
      ease: "out(3)",
    });
  }, []);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="anime-char inline-block"
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}