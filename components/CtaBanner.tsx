import { Button } from "./Button";
import { Reveal } from "./motion/Reveal";

interface CtaBannerProps {
  heading: string;
  body?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CtaBanner({ heading, body, ctaLabel, ctaHref, secondaryLabel, secondaryHref }: CtaBannerProps) {
  return (
    <section className="cta-banner section--dark">
      <div className="container cta-banner__inner">
        <Reveal>
          <h2 className="cta-banner__heading">{heading}</h2>
          {body && <p className="lead cta-banner__body">{body}</p>}
          <div className="cta-banner__actions">
            <Button href={ctaHref} variant="on-dark">
              {ctaLabel}
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button href={secondaryHref} variant="ghost" showArrow={false}>
                {secondaryLabel}
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
