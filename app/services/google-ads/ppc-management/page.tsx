import type { Metadata } from "next";
import { PageTemplate } from "@/components/PageTemplate";
import content from "@/content/pages/ppc-management.json";
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
      eyebrow="Paid Advertising / PPC"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Google Ads", href: "/services/google-ads" }, { label: "PPC Management" }]}
    />
  );
}
