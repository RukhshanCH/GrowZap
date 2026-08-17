import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Testimonials | GrowZap",
  description: "What it's like to work with GrowZap, and what to expect from a client relationship.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Reviews"
        h1="What Clients Say About Working With GrowZap"
        intro={[
          "We're collecting verified reviews as engagements complete — this page will fill in with real client testimonials soon. Here's what you can expect from working with us in the meantime.",
        ]}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
      />

      <section className="section">
        <div className="container">
          <Reveal className="content-section__body">
            <ul className="feature-list">
              <li className="feature-list__item">
                <span className="feature-list__icon" aria-hidden="true">
                  <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                    <path d="M1 5L4.5 8.5L12 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>
                  <strong>Direct communication.</strong> You&rsquo;ll talk to the people actually doing
                  the work, not a relay through account managers.
                </span>
              </li>
              <li className="feature-list__item">
                <span className="feature-list__icon" aria-hidden="true">
                  <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                    <path d="M1 5L4.5 8.5L12 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>
                  <strong>Plain-language reporting.</strong> Every report explains what we did, why,
                  and what it produced.
                </span>
              </li>
              <li className="feature-list__item">
                <span className="feature-list__icon" aria-hidden="true">
                  <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                    <path d="M1 5L4.5 8.5L12 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>
                  <strong>Honest expectations.</strong> We won&rsquo;t promise guaranteed rankings or
                  overnight results — because no legitimate agency can.
                </span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <Reveal className="coming-soon">
            <h2 className="coming-soon__title">Reviews Coming Soon</h2>
            <p className="coming-soon__body">
              Want to hear from a current client directly? Ask us for a reference during your free
              consultation.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        heading="Ready to Start Your Own Story?"
        ctaLabel="Book a Free Consultation"
        ctaHref="/contact"
      />
    </>
  );
}
