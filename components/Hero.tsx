"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { animate, createTimeline, stagger } from "animejs";
import { ArrowDown, ArrowUpRight } from "@/components/ui/Icons";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll();
  const nameY = useTransform(scrollYProgress, [0, 0.16], [0, -70]);
  const orbScale = useTransform(scrollYProgress, [0, 0.16], [1, 1.45]);

  useEffect(() => {
    if (!heroRef.current) return;

    const hero = heroRef.current;

    const chars = hero.querySelectorAll<HTMLElement>(".hero-name-char");
    const eyebrow = hero.querySelector<HTMLElement>(".hero-eyebrow");
    const role = hero.querySelector<HTMLElement>(".hero-role");
    const coordinates = hero.querySelectorAll<HTMLElement>(".cinema-hero__coordinate");
    const orb = hero.querySelector<HTMLElement>(".signal-orb");
    const orbRings = hero.querySelectorAll<HTMLElement>(".signal-orb i");
    const orbLabel = hero.querySelector<HTMLElement>(".signal-orb span");
    const cta = hero.querySelector<HTMLElement>(".cinema-hero__cta");
    const scroll = hero.querySelector<HTMLElement>(".cinema-scroll");

    if (!eyebrow || !role || !orb || !orbLabel || !cta || !scroll) return;

    const timeline = createTimeline({
      defaults: {
        ease: "out(4)",
      },
    });

    timeline
      .add(eyebrow, {
        opacity: [0, 1],
        translateY: [18, 0],
        duration: 700,
      })
      .add(
        coordinates,
        {
          opacity: [0, 0.65],
          translateY: [10, 0],
          duration: 600,
          delay: stagger(80),
        },
        "-=450"
      )
      .add(
        chars,
        {
          opacity: [0, 1],
          translateY: ["110%", "0%"],
          rotateX: [55, 0],
          scale: [0.94, 1],
          delay: stagger(42),
          duration: 1050,
          ease: "out(5)",
        },
        "-=350"
      )
      .add(
        role,
        {
          opacity: [0, 1],
          translateY: [18, 0],
          duration: 850,
        },
        "-=650"
      )
      .add(
        orb,
        {
          opacity: [0, 1],
          scale: [0.72, 1],
          duration: 1100,
          ease: "out(4)",
        },
        "-=850"
      )
      .add(
        orbRings,
        {
          opacity: [0, 1],
          scale: [0.65, 1],
          rotate: [-18, 0],
          delay: stagger(70),
          duration: 900,
          ease: "out(4)",
        },
        "-=800"
      )
      .add(
        orbLabel,
        {
          opacity: [0, 1],
          scale: [0.85, 1],
          duration: 700,
        },
        "-=650"
      )
      .add(
        cta,
        {
          opacity: [0, 1],
          translateY: [22, 0],
          duration: 800,
        },
        "-=500"
      )
      .add(
        scroll,
        {
          opacity: [0, 1],
          translateY: [12, 0],
          duration: 700,
        },
        "-=500"
      );

    // Subtle continuous orbital movement.
    const orbAnimation = animate(orbRings, {
      rotate: "+=360",
      duration: 18000,
      loop: true,
      ease: "linear",
    });

    return () => {
      timeline.pause();
      orbAnimation.pause();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="cinema-hero"
      id="top"
      aria-labelledby="hero-title"
    >
      <div className="cinema-hero__coordinate cinema-hero__coordinate--top">
        N 33° 41&apos; / E 73° 03&apos;
      </div>

      <div className="cinema-hero__coordinate cinema-hero__coordinate--bottom">
        Digital systems / 2026
      </div>

      <motion.div
        className="cinema-hero__identity"
        style={{ y: nameY }}
      >
        <p className="hero-eyebrow">
          Independent developer / backend systems
        </p>

        <h1 id="hero-title" className="hero-name">
          <span aria-label="Abdullah Ibrahim">
            {"Abdullah Ibrahim".split("").map((char, index) => (
              <span
                key={`${char}-${index}`}
                className="hero-name-char"
                aria-hidden="true"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </h1>

        <span className="hero-role">
          Python • Django • AI Builder • Media Engineer
        </span>
      </motion.div>

      <motion.div
        className="signal-orb"
        style={{ scale: orbScale }}
        aria-hidden="true"
      >
        <i />
        <i />
        <i />
        <i />

        <span>AI</span>
      </motion.div>

      <motion.a
        className="cinema-hero__cta"
        href="#work"
      >
        <span>Enter selected work</span>
        <ArrowUpRight />
      </motion.a>

      <motion.a
        className="cinema-scroll"
        href="#about"
      >
        <span>Scroll to explore</span>
        <ArrowDown />
      </motion.a>
    </section>
  );
}
