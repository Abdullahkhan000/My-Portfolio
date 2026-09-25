"use client";

import { motion } from "framer-motion";
import { capabilities } from "@/data/portfolio";
import { premiumEase } from "@/components/ui/Motion";
import { SectionMeta } from "@/components/ui/SectionMeta";

export function Capabilities() {
  return (
    <section className="reference-section capabilities" aria-labelledby="capabilities-title">
      <div className="reference-grid" aria-hidden="true" />
      <SectionMeta number="08" label="Capabilities" />
      <h2 className="sr-only" id="capabilities-title">Core capabilities</h2>
      <div className="capabilities__grid">
        {capabilities.map((capability, index) => (
          <motion.article key={capability.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12, margin: "0px 0px -10% 0px" }} transition={{ duration: 0.6, delay: index * 0.05, ease: premiumEase }}>
            <div className={`capability-visual capability-visual--${capability.tone}`} aria-hidden="true"><i /><i /><i /><span>{capability.code}</span></div>
            <div className="capability-dots">{Array.from({ length: 4 }, (_, dot) => <i className={dot <= index ? "is-active" : ""} key={dot} />)}</div>
            <h3>{capability.title}</h3><p>{capability.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
