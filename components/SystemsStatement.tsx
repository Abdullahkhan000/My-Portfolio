"use client";

import { systemRisks } from "@/data/portfolio";
import { motion } from "framer-motion";
import { premiumEase, Reveal } from "@/components/ui/Motion";
import { SectionMeta } from "@/components/ui/SectionMeta";

export function SystemsStatement() {
  return (
    <section className="reference-section systems-statement" aria-labelledby="systems-title">
      <div className="reference-grid" aria-hidden="true" />
      <SectionMeta number="02" label="The standard" />
      <div className="systems-statement__center">
        <Reveal><h2 id="systems-title">Serious products shouldn&apos;t feel fragile</h2></Reveal>
        <div className="systems-statement__lines">
          {systemRisks.map(([lead, result], index) => (
            <motion.p key={lead} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05, duration: 0.5, ease: premiumEase }}>
              <span>¬ {lead}</span> <strong>{result}</strong>
            </motion.p>
          ))}
        </div>
        <Reveal delay={0.15}><p className="systems-statement__result">= Clear architecture. Dependable delivery. Useful outcomes.</p></Reveal>
      </div>
    </section>
  );
}
