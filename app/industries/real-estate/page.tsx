import type { Metadata } from "next";
import { PageTemplate } from "@/components/PageTemplate";
import content from "@/content/pages/real-estate.json";
import type { PageContent } from "@/content/types";

const pageContent = content as PageContent;

export const metadata: Metadata = {
  title: pageContent.metaTitle,
  description: pageContent.metaDescription,
};

export default function Page() {
  return (
    <PageTemplate
      content={pageContent}
      eyebrow="Industries"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Real Estate" }]}
    />
  );
}
