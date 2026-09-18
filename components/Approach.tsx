"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { approach } from "@/data/portfolio";
import { premiumEase, Reveal } from "@/components/ui/Motion";

export function Approach() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [80, -120]);

  return (
    <section ref={ref} className="approach" aria-labelledby="approach-heading">
      <motion.div className="approach__watermark" style={{ x }} aria-hidden="true">METHOD / METHOD / METHOD</motion.div>
      <div className="section-shell approach__inner">
        <Reveal className="approach__title-block">
          <span>05 — Development approach</span>
          <h2 id="approach-heading">FROM AN AMBIGUOUS IDEA TO A SYSTEM PEOPLE CAN RELY ON.</h2>
        </Reveal>
        <div className="approach__steps">
          {approach.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.75, delay: index * 0.08, ease: premiumEase }}
            >
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.article>
          ))}
        </div>
        <Reveal className="approach__capabilities">
          <span>Architecture</span><span>API contracts</span><span>Data modeling</span><span>AI workflows</span><span>Quality assurance</span><span>Delivery</span>
        </Reveal>
      </div>
    </section>
  );
}
