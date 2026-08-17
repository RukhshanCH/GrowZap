import type { Metadata } from "next";
import type { ReactElement } from "react";
import { PageHero } from "@/components/PageHero";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/motion/Reveal";
import contactContent from "@/content/pages/contact.json";
import type { PageContent } from "@/content/types";

const content = contactContent as PageContent;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

const faqSection = content.sections.find((s) => s.heading.startsWith("Frequently Asked"));

const CONTACT_DETAILS = [
  { label: "hello@growzap.llc", icon: "mail" },
  { label: "growzap.llc", icon: "globe" },
  { label: "Serving Colorado, Montana, UAE & Pakistan — remote-first team", icon: "pin" },
  { label: "Response within 1 business day", icon: "clock" },
];

function DetailIcon({ type }: { type: string }) {
  const paths: Record<string, ReactElement> = {
    mail: <path d="M2 4h16v12H2z M2 4l8 7 8-7" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
    globe: <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />,
    pin: <path d="M10 18s6-5.5 6-10a6 6 0 10-12 0c0 4.5 6 10 6 10z M10 10a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
    clock: <><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" /><path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" /></>,
  };
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      {paths[type]}
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        h1={content.h1}
        intro={content.intro}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section">
        <div className="container contact-layout">
          <Reveal>
            <p className="eyebrow">Book a Free Consultation</p>
            <h2 className="content-section__heading" style={{ marginTop: 12 }}>
              The fastest way to get started
            </h2>
            <p className="contact-panel__body" style={{ marginTop: 16 }}>
              A free 30-minute consultation. We&rsquo;ll ask about your business, your goals, and
              your current marketing situation — and give you honest, specific feedback, even if
              that means telling you something you weren&rsquo;t expecting to hear.
            </p>
            <div className="contact-panel__cta">
              <Button href="/contact">Book a Consultation</Button>
            </div>

            <ul className="contact-details">
              {CONTACT_DETAILS.map((d) => (
                <li className="contact-details__item" key={d.label}>
                  <span className="contact-details__icon">
                    <DetailIcon type={d.icon} />
                  </span>
                  {d.label}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {faqSection && (
        <section className="section section--muted">
          <div className="container">
            <Reveal>
              <h2 className="content-section__heading">{faqSection.heading}</h2>
            </Reveal>
            <Reveal delay={0.06} className="content-section__body">
              {faqSection.blocks.map((b, i) =>
                b.type === "faqs" ? <FaqAccordion items={b.items} key={i} /> : null
              )}
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}
