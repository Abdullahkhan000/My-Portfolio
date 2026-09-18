"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navigation } from "@/data/portfolio";
import { premiumEase } from "@/components/ui/Motion";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -45%", threshold: [0, 0.2, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="cinema-nav">
        <a className="cinema-nav__mark" href="#top" aria-label="Abdullah Ibrahim — home"><span>AI</span><i /></a>
        <button className={`cinema-nav__toggle ${open ? "is-open" : ""}`} type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="cinema-menu" onClick={() => setOpen((current) => !current)}>
          <span /><span /><span />
        </button>
      </header>

      <aside className="cinema-rail" aria-label="Section navigation">
        <span className="cinema-rail__line" />
        <nav>
          {navigation.map((item) => (
            <a className={active === item.href ? "is-active" : ""} href={item.href} key={item.href} aria-label={item.label}><i /></a>
          ))}
        </nav>
      </aside>

      <div className="cinema-signature" aria-hidden="true"><span>Available</span><span>for selected projects</span></div>

      <AnimatePresence>
        {open && (
          <motion.div id="cinema-menu" className="cinema-menu" initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} transition={{ duration: 0.8, ease: premiumEase }}>
            <div className="cinema-menu__noise" aria-hidden="true" />
            <nav aria-label="Primary navigation">
              {navigation.map((item, index) => (
                <motion.a href={item.href} onClick={() => setOpen(false)} key={item.href} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.18 + index * 0.07, duration: 0.6, ease: premiumEase }}>
                  <small>0{index + 1}</small><span>{item.label}</span>
                </motion.a>
              ))}
            </nav>
            <p>Backend systems • APIs • AI integration • Automation</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
