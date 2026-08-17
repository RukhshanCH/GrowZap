import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";
import { ServiceCardGrid } from "@/components/Cards";
import { Reveal } from "@/components/motion/Reveal";
import { SERVICE_CARDS } from "@/content/routes";

export const metadata: Metadata = {
  title: "Services | Full-Service Digital Marketing",
  description:
    "Explore GrowZap's full marketing stack — SEO, Google Ads, Meta Ads, social media management, content writing, graphic design, and video editing.",
};

export default function ServicesHub() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        h1="One Team, Every Marketing Channel You Need"
        intro={[
          "Instead of stitching together disconnected freelancers and vendors, GrowZap runs your SEO, paid ads, social, content, and creative under one coordinated strategy — so every channel works toward the same goal.",
        ]}
        heroCta="Get Your Free Marketing Audit"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <ServiceCardGrid items={SERVICE_CARDS} />
          </Reveal>
        </div>
      </section>

      <CtaBanner
        heading="Not Sure Which Service You Need?"
        body="Book a free consultation and we'll recommend the right starting point for your goals and budget — no upsells, no pressure."
        ctaLabel="Book a Free Consultation"
        ctaHref="/contact"
      />
    </>
  );
}
