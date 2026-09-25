"use client";

import { portfolioLinks } from "@/data/portfolio";
import { ArrowDown, ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Motion";
import { SectionMeta } from "@/components/ui/SectionMeta";
import { SmartLink } from "@/components/ui/SmartLink";

export function Resume() {
  return (
    <section
      className="reference-section reference-resume"
      id="resume"
      aria-labelledby="resume-title"
    >
      <div className="reference-grid" aria-hidden="true" />

      <SectionMeta number="06" label="Background" />

      <div className="reference-resume__grid">
        <Reveal className="resume-panel">
          <span className="resume-panel__toggle">
            <i />
            <i />
          </span>

          <h2 id="resume-title">¬ Profile</h2>

          <p>
            Independent backend-focused developer building web applications,
            APIs, AI-enabled products, automation systems, database-driven
            platforms, and digital media workflows.
          </p>

          <h3>
            Abdullah
              

            Ibrahim
          </h3>

          <SmartLink
            className="reference-button"
            href={portfolioLinks.cv}
            download
          >
            Download CV <ArrowDown />
          </SmartLink>
        </Reveal>

        <Reveal className="resume-panel resume-panel--dark" delay={0.08}>
          <span className="resume-panel__toggle">
            <i />
            <i />
          </span>

          <h2>¬ Selected work</h2>

          <p>
            Product-focused systems developed across backend engineering, APIs,
            AI integration, automation, and cinematic media.
          </p>

          <ul>
            <li>º CyberCarnage — Gaming intelligence platform</li>
            <li>º Linkify Media — Media API and SaaS platform</li>
            <li>º VITOENCODES — Cinematic media workflows</li>
          </ul>

          <SmartLink className="reference-button" href="#work">
            View projects <ArrowUpRight />
          </SmartLink>
        </Reveal>
      </div>

      <div className="reference-markers" aria-hidden="true">
        <span>º</span>
        <span>∞</span>
        <span>º</span>
      </div>
    </section>
  );
}
