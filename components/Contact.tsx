"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { portfolioLinks } from "@/data/portfolio";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Motion";
import { SmartLink } from "@/components/ui/SmartLink";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    setSending(true);
    setSubmitted(false);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Unable to send your enquiry. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      className="cinema-section cinema-contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="cinema-panel cinema-contact__panel">
        <header className="cinema-panel__header">
          <span>04 / Connect</span>
          <h2 id="contact-title">Contact</h2>
          <span>Available for freelance</span>
        </header>

        <div className="cinema-contact__layout">
          <Reveal className="cinema-contact__copy">
            <span className="eyebrow">
              Have a serious product in mind?
            </span>

            <h3>Let&apos;s make it real.</h3>

            <p>
              For web applications, APIs, AI integrations, automation,
              database systems, and digital media workflows.
            </p>

            <div className="cinema-contact__socials">
              <SmartLink href={portfolioLinks.github}>
                GitHub <ArrowUpRight />
              </SmartLink>

              <SmartLink href={portfolioLinks.linkedin}>
                LinkedIn <ArrowUpRight />
              </SmartLink>

              <SmartLink href={portfolioLinks.instagram}>
                Instagram <ArrowUpRight />
              </SmartLink>

              <SmartLink href={portfolioLinks.cv}>
                Résumé <ArrowUpRight />
              </SmartLink>
            </div>
          </Reveal>

          <form
            className="cinema-contact__form"
            onSubmit={handleSubmit}
          >
            <label>
              <span>Name</span>

              <input
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Your name"
              />
            </label>

            <label>
              <span>Email</span>

              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@company.com"
              />
            </label>

            <label>
              <span>Project</span>

              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me what you are building"
              />
            </label>

            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send enquiry"}

              {!sending && <ArrowUpRight />}
            </button>

            {submitted && (
              <small>
                ✓ Enquiry sent successfully. I&apos;ll get back to you soon.
              </small>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}