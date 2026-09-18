"use client";

import { portfolioImages, portfolioLinks } from "@/data/portfolio";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Motion";
import { SmartLink } from "@/components/ui/SmartLink";

export function VitoEncodes() {
  return (
    <section
      className="cinema-section cinema-vitoencodes"
      id="vitoencodes"
      aria-labelledby="vitoencodes-title"
    >
      <div className="cinema-panel cinema-vitoencodes__panel">

        <header className="cinema-panel__header">
          <span>04 / Media Work</span>
          <h2 id="vitoencodes-title">VITOENCODES</h2>
          <span>Cinematic Media</span>
        </header>

        <div className="cinema-vitoencodes__layout">

          <Reveal className="cinema-vitoencodes__visual">
            <div className="cinema-vitoencodes__poster">
              <img
                src={portfolioImages.vitoencodes}
                alt="VITOENCODES cinematic media poster"
              />

              <div className="cinema-vitoencodes__poster-overlay">
                <span>VITOENCODES</span>
                <small>CINEMATIC MEDIA WORK</small>
              </div>
            </div>
          </Reveal>

          <Reveal className="cinema-vitoencodes__content">
            <span className="eyebrow">
              CINEMATIC PRESENTATIONS • RESTORATIONS • REGRADES
            </span>

            <h3>
              Cinema,
              <br />
              frame by frame.
            </h3>

            <p>
              VITOENCODES is my dedicated digital media project focused on
              handcrafted cinematic custom encodes, rare sources, IMAX presentations,
              open matte formats, restorations, regrades, and detailed frame
              comparisons.
            </p>

            <div className="cinema-vitoencodes__tags">
              <span>IMAX</span>
              <span>OPEN MATTE</span>
              <span>35MM</span>
              <span>REGRADES</span>
              <span>RESTORATIONS</span>
              <span>PURE RIPS</span>
            </div>

            <div className="cinema-vitoencodes__links">
              <SmartLink
                href={portfolioLinks.vitoencodesYoutube}
              >
                YouTube <ArrowUpRight />
              </SmartLink>

              <SmartLink
                href={portfolioLinks.vitoencodesFacebook}
              >
                Facebook <ArrowUpRight />
              </SmartLink>
            </div>

            <div className="cinema-vitoencodes__meta">
              <span>FFMPEG</span>
              <span>HANDBRAKE</span>
              <span>STAXRIP</span>
              <span>X265</span>
              <span>AV1</span>
              <span>Da Vinci Resolve</span>
              <span>Topaz AI Upscale</span>
              <span>10-BIT</span>
              <span>AV1</span>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}