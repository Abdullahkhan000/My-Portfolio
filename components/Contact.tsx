"use client";

import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { portfolioLinks, isPlaceholderLink } from "@/data/portfolio";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Motion";
import { SmartLink } from "@/components/ui/SmartLink";

export function Contact() {
  const disabled = isPlaceholderLink(portfolioLinks.email);
  const startedAt = useRef(0);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (disabled || status === "sending") return;

    const form = event.currentTarget;
    const values = new FormData(form);
    setStatus("sending");
    setStatusMessage("Sending securely…");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.get("name"),
          email: values.get("email"),
          message: values.get("message"),
          website: values.get("website"),
          startedAt: startedAt.current,
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Message could not be sent.");
      form.reset();
      startedAt.current = Date.now();
      setStatus("success");
      setStatusMessage("Message received. I’ll get back to you soon.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Message could not be sent right now.");
    }
  }

  return (
    <section className="cinema-section cinema-contact" id="contact" aria-labelledby="contact-title">
      <div className="cinema-panel cinema-contact__panel">
        <header className="cinema-panel__header">
          <span>04 / Connect</span><h2 id="contact-title">Contact</h2><span>Available for freelance</span>
        </header>
        <div className="cinema-contact__layout">
          <Reveal className="cinema-contact__copy">
            <span className="eyebrow">Have a serious product in mind?</span>
            <h3>Let&apos;s make it real.</h3>
            <p>For web applications, APIs, AI integrations, automation, database systems, and digital media workflows.</p>
            <div className="cinema-contact__socials">
              <SmartLink href={portfolioLinks.github}>GitHub <ArrowUpRight /></SmartLink>
              <SmartLink href={portfolioLinks.linkedin}>LinkedIn <ArrowUpRight /></SmartLink>
              <SmartLink href={portfolioLinks.instagram}>Instagram <ArrowUpRight /></SmartLink>


              <SmartLink href={portfolioLinks.cv}>Résumé <ArrowUpRight /></SmartLink>
            </div>
          </Reveal>
          <form className="cinema-contact__form" onSubmit={handleSubmit}>
            <input className="contact-trap" name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <label><span>Name</span><input name="name" type="text" autoComplete="name" required placeholder="Your name" /></label>
            <label><span>Email</span><input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label>
            <label><span>Project</span><textarea name="message" required rows={5} placeholder="Tell me what you are building" /></label>
            <button type="submit" disabled={disabled || status === "sending"}>{status === "sending" ? "Sending…" : "Send enquiry"} <ArrowUpRight /></button>
            {statusMessage && <small className={`contact-status contact-status--${status}`} aria-live="polite">{statusMessage}</small>}
            {disabled && <small>Email delivery activates after replacing EMAIL_HERE in data/portfolio.ts.</small>}
          </form>
        </div>
      </div>
    </section>
  );
}
