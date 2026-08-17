import { RichText } from "@/lib/richText";
import { resolveHref } from "@/content/routes";
import { Button } from "./Button";
import { FaqAccordion } from "./FaqAccordion";
import type { ContentBlock, Subsection } from "@/content/types";

function isProcessHeading(heading: string) {
  return /process|how (it|we) work|steps|roadmap|onboarding/i.test(heading);
}

export function BlockRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p className="prose__p" key={i}>
                <RichText text={block.text} />
              </p>
            );
          case "bullets":
            return (
              <ul className="feature-list" key={i}>
                {block.items.map((item, j) => (
                  <li className="feature-list__item" key={j}>
                    <span className="feature-list__icon" aria-hidden="true">
                      <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                        <path d="M1 5L4.5 8.5L12 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>
                      {item.lead && <strong>{item.lead}. </strong>}
                      <RichText text={item.text} />
                    </span>
                  </li>
                ))}
              </ul>
            );
          case "steps":
            return (
              <ol className="step-list" key={i}>
                {block.items.map((item, j) => (
                  <li className="step-list__item" key={j}>
                    <span className="step-list__index">{String(j + 1).padStart(2, "0")}</span>
                    <span className="step-list__body">
                      {item.lead && <strong className="step-list__lead">{item.lead}</strong>}
                      <span className="step-list__text">
                        <RichText text={item.text} />
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            );
          case "table":
            return (
              <div className="data-table__wrap" key={i}>
                <table className="data-table">
                  <thead>
                    <tr>
                      {block.headers.map((h, hi) => (
                        <th key={hi}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={ri}>
                        {row.map((cell, ci) => (
                          <td key={ci}>
                            <RichText text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "faqs":
            return <FaqAccordion items={block.items} key={i} />;
          case "cta":
            return (
              <div className="block-cta" key={i}>
                <Button href={resolveHref(block.label)}>{block.label}</Button>
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
}

export function SubsectionGrid({ items, variant }: { items: Subsection[]; variant?: "cards" | "steps" }) {
  if (items.length === 0) return null;

  if (variant === "steps") {
    return (
      <ol className="step-list">
        {items.map((s, i) => (
          <li className="step-list__item" key={i}>
            <span className="step-list__index">{String(i + 1).padStart(2, "0")}</span>
            <span className="step-list__body">
              <strong className="step-list__lead">{s.title}</strong>
              <span className="step-list__text">
                <RichText text={s.body} />
              </span>
            </span>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <div className="card-grid">
      {items.map((s, i) => (
        <div className="mini-card" key={i}>
          <h4 className="mini-card__title">{s.title}</h4>
          <p className="mini-card__body">
            <RichText text={s.body} />
          </p>
        </div>
      ))}
    </div>
  );
}

export { isProcessHeading };
