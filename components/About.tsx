"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { portfolioImages, portfolioLinks, technologies } from "@/data/portfolio";
import { ArrowDown } from "@/components/ui/Icons";
import { premiumEase, Reveal } from "@/components/ui/Motion";
import { SmartLink } from "@/components/ui/SmartLink";

export function About() {
  const [tab, setTab] = useState<"profile" | "stack">("profile");

  return (
    <section className="cinema-section cinema-about" id="about" aria-labelledby="about-title">
      <div className="cinema-panel cinema-about__panel">
        <header className="cinema-panel__header">
          <span>01 / Identity</span><h2 id="about-title">About</h2><span>Abdullah Ibrahim</span>
        </header>

        <Reveal className="cinema-about__statement">
          <p>“I build serious digital products where architecture, intelligence, and useful interaction work as one system.”</p>
        </Reveal>

        <div className="cinema-about__tabs" role="tablist" aria-label="About Abdullah">
          <button role="tab" aria-selected={tab === "profile"} onClick={() => setTab("profile")}><span>01</span>Profile</button>
          <button role="tab" aria-selected={tab === "stack"} onClick={() => setTab("stack")}><span>02</span>Technical core</button>
        </div>

        <div className="cinema-about__detail">
          <div className="cinema-about__portrait">
            {portfolioImages.profile ? <Image src={portfolioImages.profile} alt="Portrait of Abdullah Ibrahim" fill sizes="(max-width: 760px) 90vw, 32vw" /> : <div role="img" aria-label="Profile image placeholder"><span>[PROFILE IMAGE — INSERT HERE]</span></div>}
          </div>
          <AnimatePresence mode="wait">
            <motion.div className="cinema-about__tab-content" key={tab} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.45, ease: premiumEase }}>
              {tab === "profile" ? (
                <>
                  <span className="eyebrow">Backend developer / AI builder</span>
                  <h3>Products engineered beyond the demo.</h3>
                  <p>Focused on backend systems, REST APIs, AI-powered applications, automation, database-driven products, and digital media workflows. The goal is always the same: dependable software with a clear reason to exist.</p>
                </>
              ) : (
                <>
                  <span className="eyebrow">Selected technologies</span>
                  <ul>{technologies.map((technology, index) => <li key={technology.name}><span>0{index + 1}</span>{technology.name}<small>{technology.detail}</small></li>)}</ul>
                </>
              )}
              <SmartLink href={portfolioLinks.cv} className="outline-action" download>Download CV <ArrowDown /></SmartLink>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
