import Link from "next/link";
import type { ReactNode } from "react";
import { resolveHref } from "@/content/routes";

/**
 * Parses a small markdown-lite subset used throughout GrowZap's content:
 * **bold** and [Link label →] (rendered as an inline text link, href resolved
 * by best-guess match against the site's route registry).
 */
export function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\*\*(.+?)\*\*|\[([^\]]+?)\s*(?:→|->)\]/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[1] !== undefined) {
      nodes.push(<strong key={key++}>{match[1]}</strong>);
    } else if (match[2] !== undefined) {
      const label = match[2].trim();
      nodes.push(
        <Link key={key++} href={resolveHref(label)} className="inline-link">
          {label} →
        </Link>
      );
    }
    lastIndex = pattern.lastIndex;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

export function RichText({ text }: { text: string }) {
  return <>{renderInline(text)}</>;
}
