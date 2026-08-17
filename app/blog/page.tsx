import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";
import { BlogCategoryGrid } from "@/components/BlogCategoryGrid";
import { BLOG_CATEGORIES } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog | GrowZap",
  description:
    "SEO guides, digital marketing tips, Google Ads strategy, social media advice, and content marketing strategies for small businesses.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        h1="The GrowZap Blog"
        intro={[
          "Practical, plain-language guides on SEO, paid advertising, social media, and content marketing — written for business owners, not marketers.",
        ]}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="section">
        <div className="container">
          <BlogCategoryGrid categories={BLOG_CATEGORIES} />

          <p className="blog-note">
            Full articles are in progress — check back soon, or subscribe to updates during your
            consultation.
          </p>
        </div>
      </section>

      <CtaBanner
        heading="Want Marketing Advice Tailored to Your Business?"
        body="Skip the search and book a free consultation instead."
        ctaLabel="Book a Free Consultation"
        ctaHref="/contact"
      />
    </>
  );
}
