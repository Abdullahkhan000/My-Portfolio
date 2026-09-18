"use client";

import { motion } from "framer-motion";
import { services } from "@/data/portfolio";
import { ArrowUpRight } from "@/components/ui/Icons";
import { premiumEase, Reveal } from "@/components/ui/Motion";

export function Services() {
  return (
    <section className="cinema-section cinema-services" id="services" aria-labelledby="services-title">
      <div className="cinema-panel cinema-services__panel">
        <header className="cinema-panel__header">
          <span>02 / Capability</span><h2 id="services-title">Services</h2><span>Systems that deliver</span>
        </header>
        <Reveal className="cinema-services__intro">
          <p>From an early technical decision to a production-ready release, every layer is designed to support the product—not complicate it.</p>
        </Reveal>
        <div className="cinema-services__grid">
          {services.map((service, index) => (
            <motion.article key={service.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, delay: (index % 3) * 0.07, ease: premiumEase }}>
              <div className="service-glyph" aria-hidden="true"><i /><i /><span>{service.code}</span></div>
              <div><small>0{index + 1}</small><h3>{service.title}</h3><p>{service.detail}</p></div>
              <ArrowUpRight />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
