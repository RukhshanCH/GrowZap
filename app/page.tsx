import type { Metadata } from "next";
import { HomeHero } from "@/components/HomeHero";
import { Reveal } from "@/components/motion/Reveal";
import { BlockRenderer } from "@/components/ContentBlocks";
import { ServiceCardGrid, IndustryCardGrid } from "@/components/Cards";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaBanner } from "@/components/CtaBanner";
import { SERVICE_CARDS, INDUSTRY_CARDS } from "@/content/routes";
import homeContent from "@/content/pages/home.json";
import type { PageContent } from "@/content/types";

const content = homeContent as PageContent;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

function section(heading: string) {
  return content.sections.find((s) => s.heading === heading)!;
}

export default function HomePage() {
  const intro = section("What Makes GrowZap a Top-Rated Digital Marketing Agency");
  const services = section("Our Services");
  const why = section("Why Local & National Businesses Choose GrowZap");
  const process = section("How We Work — Our Growth Process");
  const industries = section("Industries We Serve");
  const faqs = section("Frequently Asked Questions");
  const closing = section("Get Your Free Marketing Audit");
  const closingCta = closing.blocks.find((b) => b.type === "cta");
  const closingP = closing.blocks.find((b) => b.type === "p");

  return (
    <>
      <HomeHero h1={content.h1} intro={content.intro[0]} heroCta={content.heroCta ?? "Get Your Free Marketing Audit"} />

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Why GrowZap</p>
            <h2 className="content-section__heading" style={{ marginTop: 12 }}>
              {intro.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="content-section__body">
            <BlockRenderer blocks={intro.blocks} />
          </Reveal>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <Reveal>
            <p className="eyebrow">What We Do</p>
            <h2 className="content-section__heading" style={{ marginTop: 12 }}>
              {services.heading}
            </h2>
            <BlockRenderer blocks={services.blocks} />
          </Reveal>
          <div className="home-services__grid">
            <ServiceCardGrid items={SERVICE_CARDS} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container home-why">
          <Reveal>
            <p className="eyebrow">Rooted Local, Grown National</p>
            <h2 className="content-section__heading" style={{ marginTop: 12 }}>
              {why.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="home-why__text">
            <BlockRenderer blocks={why.blocks} />
          </Reveal>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <Reveal>
            <p className="eyebrow">How It Works</p>
            <h2 className="content-section__heading" style={{ marginTop: 12 }}>
              {process.heading}
            </h2>
          </Reveal>
          <div className="home-process">
            <BlockRenderer blocks={process.blocks} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Who We Work With</p>
            <h2 className="content-section__heading" style={{ marginTop: 12 }}>
              {industries.heading}
            </h2>
            <BlockRenderer blocks={industries.blocks} />
          </Reveal>
          <div style={{ marginTop: 32 }}>
            <IndustryCardGrid items={INDUSTRY_CARDS} />
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Questions</p>
            <h2 className="content-section__heading" style={{ marginTop: 12 }}>
              {faqs.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="content-section__body">
            {faqs.blocks.map((b, i) =>
              b.type === "faqs" ? <FaqAccordion items={b.items} key={i} /> : null
            )}
          </Reveal>
        </div>
      </section>

      <CtaBanner
        heading={closing.heading}
        body={closingP && closingP.type === "p" ? closingP.text : undefined}
        ctaLabel={closingCta && closingCta.type === "cta" ? closingCta.label : "Book Your Free Audit"}
        ctaHref="/contact"
      />
    </>
  );
}
