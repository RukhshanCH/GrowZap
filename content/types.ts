export interface TextItem {
  lead: string | null;
  text: string;
}

export interface ParagraphBlock {
  type: "p";
  text: string;
}

export interface BulletsBlock {
  type: "bullets";
  items: TextItem[];
}

export interface StepsBlock {
  type: "steps";
  items: TextItem[];
}

export interface TableBlock {
  type: "table";
  headers: string[];
  rows: string[][];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqsBlock {
  type: "faqs";
  items: FaqItem[];
}

export interface CtaBlock {
  type: "cta";
  label: string;
}

export type ContentBlock =
  | ParagraphBlock
  | BulletsBlock
  | StepsBlock
  | TableBlock
  | FaqsBlock
  | CtaBlock;

export interface Subsection {
  title: string;
  body: string;
}

export interface PageSection {
  heading: string;
  blocks: ContentBlock[];
  subsections: Subsection[];
}

export interface PageContent {
  slug: string;
  route: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  heroCta: string | null;
  sections: PageSection[];
}
