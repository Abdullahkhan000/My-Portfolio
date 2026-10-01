"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/portfolio";
import { ArrowUpRight } from "@/components/ui/Icons";
import { premiumEase, Reveal } from "@/components/ui/Motion";
import { SmartLink } from "@/components/ui/SmartLink";

export function Projects() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  function step(direction: number) {
    setActive((current) => (current + direction + projects.length) % projects.length);
  }

  return (
    <section className="cinema-section cinema-work" id="work" aria-labelledby="work-title">
      <div className="cinema-panel cinema-work__panel">
        <header className="cinema-panel__header">
          <span>03 / Selected</span><h2 id="work-title">Projects</h2><span>{String(active + 1).padStart(2, "0")} — {String(projects.length).padStart(2, "0")}</span>
        </header>
        <Reveal className="cinema-work__intro"><p>Selected products and systems. Drag through the archive—or use the controls—to inspect each build.</p></Reveal>

        <div className="project-stage" aria-live="polite" aria-label="Project carousel. Swipe or drag left and right to change projects.">
          {projects.map((item, index) => {
            const offset = (index - active + projects.length) % projects.length;
            const placement = offset === 0 ? "active" : offset === 1 ? "next" : "previous";
            const motionState = placement === "active"
              ? { x: "0%", scale: 1, rotateY: 0, opacity: 1, zIndex: 3 }
              : placement === "next"
                ? { x: "68%", scale: 0.72, rotateY: -17, opacity: 0.28, zIndex: 1 }
                : { x: "-68%", scale: 0.72, rotateY: 17, opacity: 0.28, zIndex: 1 };
            return (
              <motion.article
                className={`project-frame is-${placement}`}
                key={item.title}
                animate={motionState}
                initial={false}
                drag={placement === "active" ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.24}
                whileTap={placement === "active" ? { cursor: "grabbing" } : undefined}
                onDragEnd={(_, info) => {
                  if (Math.abs(info.offset.x) > 55 || Math.abs(info.velocity.x) > 260) {
                    step(info.offset.x < 0 || info.velocity.x < 0 ? 1 : -1);
                  }
                }}
                transition={{ duration: 0.75, ease: premiumEase }}
              >
                <div className="project-frame__media">
                  {item.image ? <Image src={item.image} alt={`${item.title} project interface`} fill sizes="(max-width: 760px) 92vw, 68vw" /> : <div className={`project-frame__placeholder project-frame__placeholder--${index + 1}`} role="img" aria-label={item.imagePlaceholder}><span>[{item.imagePlaceholder}]</span><i /><i /><i /></div>}
                  <div className="project-frame__scan" aria-hidden="true" />
                  <span className="project-frame__year">{item.year}</span>
                  {placement !== "active" && <button className="project-frame__activate" type="button" onClick={() => setActive(index)} aria-label={`View ${item.title}`} />}
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="project-detail">
          <motion.div key={project.title} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: premiumEase }}>
            <span>{project.category}</span><h3>{project.title}</h3><p>{project.description}</p>
            <div className="project-detail__stack">{project.technologies.map((technology) => <small key={technology}>{technology}</small>)}</div>
          </motion.div>
          <div className="project-detail__links">
            <SmartLink href={project.liveUrl}>Live project <ArrowUpRight /></SmartLink>
            <SmartLink href={project.githubUrl}>Source code <ArrowUpRight /></SmartLink>
          </div>
        </div>

        <div className="project-controls">
          <button type="button" onClick={() => step(-1)} aria-label="Previous project">← <span>Previous</span></button>
          <div>{projects.map((item, index) => <button className={index === active ? "is-active" : ""} key={item.title} onClick={() => setActive(index)} type="button" aria-label={`Show ${item.title}`} />)}</div>
          <button type="button" onClick={() => step(1)} aria-label="Next project"><span>Next</span> →</button>
        </div>
      </div>
    </section>
  );
}
