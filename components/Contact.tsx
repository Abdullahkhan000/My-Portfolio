"use client";

import type { FormEvent } from "react";
import { portfolioLinks, isPlaceholderLink } from "@/data/portfolio";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Motion";
import { SmartLink } from "@/components/ui/SmartLink";

export function Contact() {
  const disabled = isPlaceholderLink(portfolioLinks.email);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (disabled) return;
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.get("name") || "website visitor"}`);
    const body = encodeURIComponent(`${form.get("message") || ""}\n\nReply to: ${form.get("email") || ""}`);
    window.open(`${portfolioLinks.email.startsWith("mailto:") ? portfolioLinks.email : `mailto:${portfolioLinks.email}`}?subject=${subject}&body=${body}`, "_self");
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
            <label><span>Name</span><input name="name" type="text" autoComplete="name" required placeholder="Your name" /></label>
            <label><span>Email</span><input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label>
            <label><span>Project</span><textarea name="message" required rows={5} placeholder="Tell me what you are building" /></label>
            <button type="submit" disabled={disabled}>Send enquiry <ArrowUpRight /></button>
            {disabled && <small>Email delivery activates after replacing EMAIL_HERE in data/portfolio.ts.</small>}
          </form>
        </div>
      </div>
    </section>
  );
}
