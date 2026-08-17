import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Reveal } from "@/components/motion/Reveal";
import faqsContent from "@/content/pages/faqs.json";
import type { PageContent } from "@/content/types";

const content = faqsContent as PageContent;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        h1={content.h1}
        intro={
          content.intro.length
            ? content.intro
            : ["Answers to the questions we hear most from businesses evaluating GrowZap."]
        }
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQs" }]}
      />

      {content.sections.map((section, i) => (
        <section className={`section ${i % 2 === 1 ? "section--muted" : ""}`} key={i}>
          <div className="container">
            <Reveal>
              <h2 className="content-section__heading">{section.heading}</h2>
            </Reveal>
            <Reveal delay={0.06} className="content-section__body">
              {section.blocks.map((b, j) =>
                b.type === "faqs" ? <FaqAccordion items={b.items} key={j} /> : null
              )}
            </Reveal>
          </div>
        </section>
      ))}

      <CtaBanner
        heading="Still Have Questions?"
        body="Book a free consultation and we'll walk through anything specific to your business."
        ctaLabel="Book a Free Consultation"
        ctaHref="/contact"
      />
    </>
  );
}
