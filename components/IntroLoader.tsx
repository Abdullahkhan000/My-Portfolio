"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { premiumEase } from "@/components/ui/Motion";

export function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), reduceMotion ? 80 : 1450);
    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.015 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.75, ease: premiumEase }}
          aria-hidden="true"
        >
          <div className="intro-loader__identity"><span>Abdullah</span><span>Ibrahim</span><small>Python • Django • AI Builder</small></div>
          <div className="intro-loader__rings"><i /><i /><i /></div>
          <span className="intro-loader__count">00 — 100</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
