"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { isPlaceholderLink } from "@/data/portfolio";

type SmartLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  magnetic?: boolean;
  download?: boolean;
  label?: string;
};

export function SmartLink({ href, children, className, magnetic = false, download, label }: SmartLinkProps) {
  const disabled = isPlaceholderLink(href);
  const resolvedHref = href.includes("@") && !href.startsWith("mailto:") ? `mailto:${href}` : href;
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 20, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 220, damping: 20, mass: 0.35 });

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    if (!magnetic || reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.16);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.16);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={disabled ? undefined : resolvedHref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={(event) => disabled && event.preventDefault()}
      aria-label={label}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      download={!disabled && download ? true : undefined}
      target={!disabled && !resolvedHref.startsWith("#") && !resolvedHref.startsWith("mailto:") ? "_blank" : undefined}
      rel={!disabled && !resolvedHref.startsWith("#") && !resolvedHref.startsWith("mailto:") ? "noreferrer" : undefined}
    >
      {children}
    </motion.a>
  );
}
