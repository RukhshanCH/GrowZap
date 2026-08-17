import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Button } from "./Button";
import { GrowthBars } from "./GrowthBars";
import { RichText } from "@/lib/richText";
import { resolveHref } from "@/content/routes";

interface PageHeroProps {
  eyebrow?: string;
  h1: string;
  intro: string[];
  heroCta?: string | null;
  breadcrumbs: Crumb[];
}

export function PageHero({ eyebrow, h1, intro, heroCta, breadcrumbs }: PageHeroProps) {
  return (
    <section className="page-hero section--dark">
      <div className="container page-hero__inner">
        <div className="page-hero__content">
          <Breadcrumbs items={breadcrumbs} />
          {eyebrow && <p className="eyebrow eyebrow--on-dark page-hero__eyebrow">{eyebrow}</p>}
          <h1 className="page-hero__title">{h1}</h1>
          {intro.map((p, i) => (
            <p className="lead page-hero__lead" key={i}>
              <RichText text={p} />
            </p>
          ))}
          {heroCta && (
            <div className="page-hero__cta">
              <Button href={resolveHref(heroCta)} variant="on-dark">
                {heroCta}
              </Button>
            </div>
          )}
        </div>
        <GrowthBars className="page-hero__bars" tone="on-dark" />
      </div>
    </section>
  );
}
