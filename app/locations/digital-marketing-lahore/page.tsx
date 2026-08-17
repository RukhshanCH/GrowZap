import type { Metadata } from "next";
import { PageTemplate } from "@/components/PageTemplate";
import content from "@/content/pages/marketing-lahore.json";
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
      eyebrow="Location"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Locations" }, { label: "Digital Marketing in Lahore" }]}
    />
  );
}
