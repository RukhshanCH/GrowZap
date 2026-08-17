import { PageHero } from "./PageHero";
import { CtaBanner } from "./CtaBanner";
import { Reveal } from "./motion/Reveal";
import { BlockRenderer, SubsectionGrid, isProcessHeading } from "./ContentBlocks";
import type { Crumb } from "./Breadcrumbs";
import type { PageContent } from "@/content/types";
import { resolveHref } from "@/content/routes";

interface PageTemplateProps {
  content: PageContent;
  breadcrumbs: Crumb[];
  eyebrow?: string;
  closing?: {
    heading: string;
    body?: string;
    ctaLabel: string;
    ctaHref?: string;
  };
}

export function PageTemplate({ content, breadcrumbs, eyebrow, closing }: PageTemplateProps) {
  // The final section is very often a "let's talk" CTA-only section already
  // represented as a block; if so, skip rendering it inline and use it (or
  // the provided `closing` override) as the bottom banner instead.
  const sections = [...content.sections];
  let bannerHeading = closing?.heading ?? "Ready to Grow With GrowZap?";
  let bannerBody = closing?.body;
  let bannerCtaLabel = closing?.ctaLabel ?? "Book a Free Consultation";
  let bannerCtaHref = closing?.ctaHref ?? "/contact";

  const last = sections[sections.length - 1];
  const lastIsCtaOnly =
    last &&
    last.blocks.length > 0 &&
    last.blocks.every((b) => b.type === "cta" || b.type === "p") &&
    last.blocks.some((b) => b.type === "cta") &&
    last.subsections.length === 0;

  if (lastIsCtaOnly && !closing) {
    bannerHeading = last.heading;
    const ctaBlock = last.blocks.find((b) => b.type === "cta");
    const pBlock = last.blocks.find((b) => b.type === "p");
    if (ctaBlock && ctaBlock.type === "cta") {
      bannerCtaLabel = ctaBlock.label;
      bannerCtaHref = resolveHref(ctaBlock.label);
    }
    if (pBlock && pBlock.type === "p") {
      bannerBody = pBlock.text;
    }
    sections.pop();
  }

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        h1={content.h1}
        intro={content.intro}
        heroCta={content.heroCta}
        breadcrumbs={breadcrumbs}
      />

      {sections.map((section, i) => {
        const muted = i % 2 === 1;
        const variant = isProcessHeading(section.heading) ? "steps" : "cards";
        return (
          <section className={`section content-section ${muted ? "section--muted" : ""}`} key={i}>
            <div className="container">
              <Reveal>
                <h2 className="content-section__heading">{section.heading}</h2>
              </Reveal>
              <Reveal delay={0.06} className="content-section__body">
                <BlockRenderer blocks={section.blocks} />
                {section.subsections.length > 0 && (
                  <div className="content-section__subsections">
                    <SubsectionGrid items={section.subsections} variant={variant} />
                  </div>
                )}
              </Reveal>
            </div>
          </section>
        );
      })}

      <CtaBanner heading={bannerHeading} body={bannerBody} ctaLabel={bannerCtaLabel} ctaHref={bannerCtaHref} />
    </>
  );
}
