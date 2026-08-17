import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";
import { IndustryCardGrid } from "@/components/Cards";
import { Reveal } from "@/components/motion/Reveal";
import { INDUSTRY_CARDS } from "@/content/routes";
import industriesContent from "@/content/pages/industries.json";
import type { PageContent } from "@/content/types";
import { RichText } from "@/lib/richText";

const content = industriesContent as PageContent;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function IndustriesHub() {
  return (
    <>
      <PageHero
        eyebrow="Who We Work With"
        h1={content.h1}
        intro={content.intro}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <IndustryCardGrid items={INDUSTRY_CARDS} />
          </Reveal>

          <div className="content-section__body" style={{ marginTop: 56 }}>
            {content.sections.map((s, i) => (
              <Reveal key={i} delay={i * 0.03} className="mini-card" style={{ marginBottom: 16 }}>
                <h3 className="mini-card__title">{s.heading}</h3>
                {s.blocks.map((b, j) =>
                  b.type === "p" ? (
                    <p className="mini-card__body" key={j}>
                      <RichText text={b.text} />
                    </p>
                  ) : null
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Don't See Your Industry?"
        body="We work with small and mid-sized businesses across nearly every sector. Tell us about your business and we'll show you how our approach applies."
        ctaLabel="Book a Free Consultation"
        ctaHref="/contact"
      />
    </>
  );
}
