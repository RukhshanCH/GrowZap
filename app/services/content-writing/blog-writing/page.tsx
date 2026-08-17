import type { Metadata } from "next";
import { PageTemplate } from "@/components/PageTemplate";
import content from "@/content/pages/blog-writing.json";
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
      eyebrow="Content / Blog Writing"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Content Writing", href: "/services/content-writing" }, { label: "Blog Writing" }]}
    />
  );
}
