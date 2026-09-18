"use client";

import { MotionConfig, motion } from "framer-motion";
import type { PropsWithChildren, ReactNode } from "react";

export const premiumEase = [0.22, 1, 0.36, 1] as const;

export function MotionProvider({ children }: PropsWithChildren) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.62, ease: premiumEase }}>
      {children}
    </MotionConfig>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.62, delay, ease: premiumEase }}
    >
      {children}
    </motion.div>
  );
}

export function MaskedWords({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      {text.split(" ").map((word, index) => (
        <span className="word-mask" aria-hidden="true" key={`${word}-${index}`}>
          <motion.span
            initial={{ y: "115%", rotate: 2 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 0.72, delay: 0.08 + index * 0.04, ease: premiumEase }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}
