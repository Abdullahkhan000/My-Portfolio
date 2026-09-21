"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { portfolioImages, processSteps } from "@/data/portfolio";
import { premiumEase } from "@/components/ui/Motion";
import { SectionMeta } from "@/components/ui/SectionMeta";

const processImages = [
  portfolioImages.processDiscover,
  portfolioImages.processArchitect,
  portfolioImages.processBuild,
  portfolioImages.processRefine,
];

function ProcessPanel({ step, image, index }: { step: (typeof processSteps)[number]; image: string | null; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.05]);

  return (
    <article ref={ref} className={`process-panel process-panel--${index + 1}`} style={{ zIndex: index + 1 }}>
      <motion.div className="process-panel__media" style={{ scale: imageScale }}>
        {image ? <Image src={image} alt={`${step.title} phase visual`} fill sizes="100vw" /> : <div className="process-panel__placeholder" role="img" aria-label={step.placeholder}><span>[{step.placeholder}]</span></div>}
      </motion.div>
      <motion.div className="process-panel__title" initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.12, margin: "0px 0px -10% 0px" }} transition={{ duration: 0.65, ease: premiumEase }}>
        <span>{step.number}</span><h3>{step.title}</h3>
      </motion.div>
      <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12, margin: "0px 0px -10% 0px" }} transition={{ duration: 0.6, delay: 0.1, ease: premiumEase }}>{step.text}</motion.p>
    </article>
  );
}

export function Process() {
  return (
    <section className="reference-process" aria-labelledby="process-title">
      <div className="reference-section reference-process__intro">
        <div className="reference-grid" aria-hidden="true" />
        <SectionMeta number="05" label="My process" />
        <h2 id="process-title">A clear path from idea to dependable release.</h2>
      </div>
      {processSteps.map((step, index) => <ProcessPanel step={step} image={processImages[index]} index={index} key={step.number} />)}
    </section>
  );
}
