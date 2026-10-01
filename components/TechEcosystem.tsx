"use client";

import { motion } from "framer-motion";
import { technologies } from "@/data/portfolio";
import { premiumEase, Reveal } from "@/components/ui/Motion";
import { SectionMeta } from "@/components/ui/SectionMeta";

export function TechEcosystem() {
  return (
    <section className="reference-section ecosystem" id="skills" aria-labelledby="skills-title">
      <div className="reference-grid" aria-hidden="true" />
      <SectionMeta number="07" label="Technology" />
      <Reveal><h2 id="skills-title">Technical<br />ecosystem</h2></Reveal>
      <div className="reference-markers" aria-hidden="true"><span>º</span><span>∞</span><span>º</span></div>
      <div className="ecosystem__constellation">
        {technologies.map((technology, index) => (
          <motion.article
            key={technology.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.55, delay: (index % 4) * 0.05, ease: premiumEase }}
          >
            <span>0{index + 1}</span><h3>{technology.name}</h3><p>{technology.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
