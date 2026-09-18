"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "@/components/ui/Icons";
import { MaskedWords, premiumEase } from "@/components/ui/Motion";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const nameY = useTransform(scrollYProgress, [0, 0.16], [0, -70]);
  const orbScale = useTransform(scrollYProgress, [0, 0.16], [1, 1.45]);

  return (
    <section className="cinema-hero" id="top" aria-labelledby="hero-title">
      <div className="cinema-hero__coordinate cinema-hero__coordinate--top">N 33° 41&apos; / E 73° 03&apos;</div>
      <div className="cinema-hero__coordinate cinema-hero__coordinate--bottom">Digital systems / 2026</div>

      <motion.div className="cinema-hero__identity" style={{ y: nameY }}>
        <p>Independent developer / backend systems</p>
        <h1 id="hero-title"><MaskedWords text="Abdullah Ibrahim" /></h1>
        <span>Python • Django • AI Builder • Media Engineer</span>
      </motion.div>

      <motion.div className="signal-orb" style={{ scale: orbScale }} aria-hidden="true">
        <i /><i /><i /><i />
        <span>AI</span>
      </motion.div>

      <motion.a className="cinema-hero__cta" href="#work" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15, duration: 0.7, ease: premiumEase }}>
        <span>Enter selected work</span><ArrowUpRight />
      </motion.a>

      <motion.a className="cinema-scroll" href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.35 }}>
        <span>Scroll to explore</span><ArrowDown />
      </motion.a>
    </section>
  );
}
