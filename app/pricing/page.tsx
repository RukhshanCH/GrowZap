import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Reveal, StaggerGroup } from "@/components/motion/Reveal";
import { PricingTierCard } from "@/components/PricingTierCard";
import pricingContent from "@/content/pages/pricing.json";
import type { PageContent } from "@/content/types";

const content = pricingContent as PageContent;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

const TIERS = [
  {
    name: "Starter",
    price: "Custom quote",
    for: "Businesses just beginning to invest in digital marketing.",
    includes: ["Foundational SEO", "Google Business Profile optimization", "Basic social media management"],
    featured: false,
  },
  {
    name: "Growth",
    price: "Custom quote",
    for: "Businesses ready to invest across multiple channels.",
    includes: ["Full SEO services", "Social media management", "Google Ads or Meta Ads management"],
    featured: true,
  },
  {
    name: "Full-Service",
    price: "Custom quote",
    for: "Businesses wanting a complete, integrated marketing strategy.",
    includes: ["SEO", "Paid ads (Google + Meta)", "Social media management", "Content writing", "Design & video support"],
    featured: false,
  },
];

const howWePrice = content.sections.find((s) => s.heading === "How We Price Our Services");
const faqSection = content.sections.find((s) => s.heading === "Frequently Asked Questions");

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        h1={content.h1}
        intro={content.intro}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
      />

      {howWePrice && (
        <section className="section">
          <div className="container">
            <Reveal className="content-section__body">
              {howWePrice.blocks.map((b, i) =>
                b.type === "p" ? <p className="prose__p" key={i}>{b.text}</p> : null
              )}
            </Reveal>
          </div>
        </section>
      )}

      <section className="section section--muted">
        <div className="container">
          <StaggerGroup className="pricing-grid">
            {TIERS.map((tier) => (
              <PricingTierCard tier={tier} key={tier.name} />
            ))}
          </StaggerGroup>

          <p className="pricing-note">
            Packages are a starting framework, not a rigid limit — your exact investment depends on
            your goals, industry, and scope, confirmed together during a free consultation. For Google
            Ads and Meta Ads, ad spend is always paid directly to the platform and is separate from our
            management fee.
          </p>
        </div>
      </section>

      {faqSection && (
        <section className="section">
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

      <CtaBanner
        heading="Not Sure Which Package Fits?"
        body="Book a free consultation and we'll recommend the right starting point for your goals and budget."
        ctaLabel="Book a Free Consultation"
        ctaHref="/contact"
      />
    </>
  );
}
