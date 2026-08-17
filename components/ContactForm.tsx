"use client";

import { useState, type FormEvent } from "react";
import { Button } from "./Button";

const SERVICES = [
  "Not Sure",
  "SEO",
  "Google Ads",
  "Meta Ads",
  "Social Media Management",
  "Content Writing",
  "Graphic Design",
  "Video / Reels",
  "Full-Service",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // No backend endpoint was provided with the source content — wire this
    // up to your form handler / CRM / email service of choice.
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  }

  if (submitted) {
    return (
      <div className="contact-form__success" role="status">
        <h3>Thanks — message received.</h3>
        <p>We respond to every inquiry within one business day. Talk soon.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="name">Name *</label>
          <input id="name" name="name" type="text" required autoComplete="name" />
        </div>
        <div className="contact-form__field">
          <label htmlFor="business">Business Name</label>
          <input id="business" name="business" type="text" autoComplete="organization" />
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="contact-form__field">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="service">Service(s) You're Interested In</label>
        <select id="service" name="service" defaultValue="Not Sure">
          {SERVICES.map((s) => (
            <option value={s} key={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="contact-form__field">
        <label htmlFor="goals">Tell us about your business and goals</label>
        <textarea id="goals" name="goals" rows={5} />
      </div>

      <div className="contact-form__field">
        <label htmlFor="referral">How did you hear about GrowZap?</label>
        <input id="referral" name="referral" type="text" />
      </div>

      <Button variant="primary" block>
        {loading ? "Sending…" : "Submit"}
      </Button>
    </form>
  );
}
