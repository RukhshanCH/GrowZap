import type { Metadata } from "next";
import { PageTemplate } from "@/components/PageTemplate";
import content from "@/content/pages/google-ads.json";
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
      eyebrow="Paid Advertising"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Google Ads" }]}
    />
  );
}
