"use client";

import { portfolioLinks, technologies } from "@/data/portfolio";
import { ArrowDown, ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Motion";
import { SectionMeta } from "@/components/ui/SectionMeta";
import { SmartLink } from "@/components/ui/SmartLink";

export function Resume() {
  return (
    <section className="reference-section reference-resume" id="resume" aria-labelledby="resume-title">
      <div className="reference-grid" aria-hidden="true" />
      <SectionMeta number="06" label="Résumé" />
      <div className="reference-resume__grid">
        <Reveal className="resume-panel">
          <span className="resume-panel__toggle"><i /><i /></span>
          <h2 id="resume-title">¬ Profile</h2>
          <p>Backend-focused developer building web applications, APIs, AI-enabled products, automation systems, database applications, and digital media workflows.</p>
          <h3>Abdullah<br />Ibrahim</h3>
          <SmartLink className="reference-button" href={portfolioLinks.cv} download>Download CV <ArrowDown /></SmartLink>
        </Reveal>
        <Reveal className="resume-panel resume-panel--dark" delay={0.08}>
          <span className="resume-panel__toggle"><i /><i /></span>
          <h2>¬ Technical core</h2>
          <p>Focused tools for building useful products from backend architecture through delivery.</p>
          <ul>{technologies.slice(0, 6).map((technology) => <li key={technology.name}>º {technology.name}</li>)}</ul>
          <SmartLink className="reference-button" href="#work">View work <ArrowUpRight /></SmartLink>
        </Reveal>
      </div>
      <div className="reference-markers" aria-hidden="true"><span>º</span><span>∞</span><span>º</span></div>
    </section>
  );
}
