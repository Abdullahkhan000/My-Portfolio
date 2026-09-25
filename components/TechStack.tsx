"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { premiumEase, Reveal } from "@/components/ui/Motion";

const toolGroups = [
  {
    label: "Build / Code",
    tools: [
      {
        name: "Python",
        detail: "Backend systems, automation, and data workflows",
        icon: "python",
        tone: "python",
      },
      {
        name: "Django",
        detail: "Web applications and server architecture",
        icon: "django",
        tone: "django",
      },
      {
        name: "Django REST Framework",
        detail: "Structured APIs and service delivery",
        code: "DRF",
        tone: "drf",
      },
      {
        name: "JavaScript",
        detail: "Responsive product interfaces",
        icon: "javascript",
        tone: "javascript",
      },
      {
        name: "Tailwind CSS",
        detail: "Consistent interface systems",
        icon: "tailwind",
        tone: "tailwind",
      },
    ],
  },
  {
    label: "Data / Infrastructure",
    tools: [
      {
        name: "PostgreSQL",
        detail: "Relational data modeling and persistence",
        icon: "postgresql",
        tone: "postgresql",
      },
      {
        name: "Redis",
        detail: "Caching, queues, and fast data access",
        icon: "redis",
        tone: "redis",
      },
      {
        name: "Celery",
        detail: "Background jobs and scheduled workflows",
        code: "CEL",
        tone: "celery",
      },
      {
        name: "Docker",
        detail: "Reproducible development and delivery",
        icon: "docker",
        tone: "docker",
      },
    ],
  },
  {
    label: "Developer Tools",
    tools: [
      {
        name: "PyCharm",
        detail: "Python development and project navigation",
        icon: "pycharm",
        tone: "pycharm",
      },
      {
        name: "Visual Studio Code",
        detail: "Flexible daily code editor",
        icon: "vscode",
        tone: "vscode",
      },
      {
        name: "Git",
        detail: "Version control and clean collaboration",
        icon: "git",
        tone: "git",
      },
      {
        name: "GitHub",
        detail: "Repositories, issues, and delivery",
        icon: "github",
        tone: "github",
      },
    ],
  },
  {
    label: "Media / Intelligence",
    tools: [
      {
        name: "FFmpeg",
        detail: "Encoding, transcoding, and media processing",
        icon: "ffmpeg",
        tone: "ffmpeg",
      },
      {
        name: "AI API Integration",
        detail: "Useful intelligence inside products",
        code: "AI",
        tone: "ai",
      },
      {
        name: "DaVinci Resolve",
        detail: "Color, finishing, and cinematic post-production",
        icon: "davinci-resolve",
        tone: "resolve",
      },
      {
        name: "API Design",
        detail: "Clear contracts for dependable integrations",
        code: "API",
        tone: "api",
      },
      {
        name: "HandBrake",
        detail: "Practical video transcoding and compression workflows",
        icon: "handbrake",
        tone: "handbrake",
      },
      {
        name: "StaxRip",
        detail: "Advanced encoding workflows and source preparation",
        icon: "staxrip",
        tone: "staxrip",
      },
    ],
  },
] as const;

export function TechStack() {
  return (
    <section
      className="tech-stack cinema-section"
      id="skills"
      aria-labelledby="tech-stack-title"
    >
      <div className="cinema-panel tech-stack__panel">
        <header className="cinema-panel__header">
          <span>04 / Toolkit</span>
          <h2 id="tech-stack-title">Tech Stack</h2>
          <span>Tools I build with</span>
        </header>

        <Reveal className="tech-stack__intro">
          <span className="eyebrow">The working system behind the work</span>

          <p>
            From the first model to the final deployment, these are the
            languages, platforms, and tools used across my projects.
          </p>
        </Reveal>

        <div className="tech-stack__groups">
          {toolGroups.map((group, groupIndex) => (
            <div className="tech-stack__group" key={group.label}>
              <div className="tech-stack__group-heading">
                <span>0{groupIndex + 1}</span>
                <h3>{group.label}</h3>
              </div>

              <div className="tech-stack__grid">
                {group.tools.map((tool, index) => (
                  <motion.article
                    className={`tech-tool tech-tool--${tool.tone}`}
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      amount: 0.15,
                      margin: "0px 0px -10% 0px",
                    }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.045,
                      ease: premiumEase,
                    }}
                  >
                    <div className="tech-tool__icon" aria-hidden="true">
                      {"icon" in tool ? (
                        <Image
                          src={`/icons/tech/${tool.icon}.svg`}
                          alt=""
                          width={46}
                          height={46}
                        />
                      ) : (
                        <span>{tool.code}</span>
                      )}
                    </div>

                    <div className="tech-tool__copy">
                      <h4>{tool.name}</h4>
                      <p>{tool.detail}</p>
                    </div>

                    <span className="tech-tool__signal">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}