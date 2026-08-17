import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";
import { BlockRenderer } from "@/components/ContentBlocks";
import { Reveal } from "@/components/motion/Reveal";
import aboutContent from "@/content/pages/about.json";
import type { PageContent } from "@/content/types";

const content = aboutContent as PageContent;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

const TEAM_ROLES = [
  {
    title: "Strategists",
    desc: "Set the plan behind every engagement — channel mix, priorities, and what success actually looks like for your business.",
  },
  {
    title: "SEO Specialists",
    desc: "Handle technical, on-page, and off-page SEO, keyword research, and ongoing optimization.",
  },
  {
    title: "Paid Media Managers",
    desc: "Build and manage Google Ads and Meta Ads campaigns, watching spend and performance closely.",
  },
  {
    title: "Content & Design Team",
    desc: "Write website and blog copy, design visuals, and edit video and reels — all built around your brand.",
  },
];

const editorial = content.sections.filter((s) => s.heading !== "Meet the Team" && s.heading !== "Let's Talk About Your Business");
const closing = content.sections.find((s) => s.heading === "Let's Talk About Your Business");
const closingCta = closing?.blocks.find((b) => b.type === "cta");
const closingP = closing?.blocks.find((b) => b.type === "p");

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About GrowZap"
        h1={content.h1}
        intro={content.intro}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {editorial.map((section, i) => (
        <section className={`section content-section ${i % 2 === 1 ? "section--muted" : ""}`} key={i}>
          <div className="container">
            <Reveal>
              <h2 className="content-section__heading">{section.heading}</h2>
            </Reveal>
            <Reveal delay={0.06} className="content-section__body">
              <BlockRenderer blocks={section.blocks} />
            </Reveal>
          </div>
        </section>
      ))}

      <section className="section section--muted">
        <div className="container">
          <Reveal>
            <h2 className="content-section__heading">Meet the Team</h2>
          </Reveal>
          <Reveal delay={0.06} className="content-section__body">
            <p className="prose__p">
              GrowZap is run by a small, dedicated team organized around the channels we manage —
              so you always know who&rsquo;s actually working on your account.
            </p>
            <div className="team-grid" style={{ marginTop: 24 }}>
              {TEAM_ROLES.map((role) => (
                <div className="team-role" key={role.title}>
                  <h3 className="team-role__title">{role.title}</h3>
                  <p className="team-role__desc">{role.desc}</p>
                </div>
              ))}
            </div>
            <p className="team-note">Full team bios and photos coming soon.</p>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        heading={closing?.heading ?? "Let's Talk About Your Business"}
        body={closingP && closingP.type === "p" ? closingP.text : undefined}
        ctaLabel={closingCta && closingCta.type === "cta" ? closingCta.label : "Book a Free Consultation"}
        ctaHref="/contact"
      />
    </>
  );
}
