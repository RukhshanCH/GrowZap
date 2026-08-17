import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal } from "@/components/motion/Reveal";
import { MethodologyGrid } from "@/components/MethodologyGrid";

export const metadata: Metadata = {
  title: "Case Studies | GrowZap",
  description:
    "How GrowZap approaches every client engagement — from audit to strategy to measurable results.",
};

const METHOD = [
  {
    title: "The Challenge",
    body: "We start every engagement by understanding where a business actually stands — current traffic, rankings, ad performance, and the specific goals that matter to that business, not generic industry benchmarks.",
  },
  {
    title: "The Strategy",
    body: "From there, we build a plan around the channels most likely to move the needle for that business's budget, industry, and competitive landscape — SEO, paid ads, content, social, or a combination.",
  },
  {
    title: "The Results",
    body: "We track what we said we would track from day one, and report on it in plain language — what moved, what didn't yet, and what we're adjusting next.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        h1="How We Approach Every Project"
        intro={[
          "We're building out a library of detailed, verified case studies from current client work. In the meantime, here's exactly how we approach every engagement — the same process behind every result we'll be able to show.",
        ]}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case Studies" }]}
      />

      <section className="section">
        <div className="container">
          <MethodologyGrid items={METHOD} />
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <Reveal className="coming-soon">
            <h2 className="coming-soon__title">Case Studies Coming Soon</h2>
            <p className="coming-soon__body">
              We publish results only once they&rsquo;re verified and the client has approved sharing
              them — so this page will fill in as engagements complete. If you&rsquo;d like to talk to
              a current client directly as a reference, just ask during your consultation.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        heading="Want to Be Our Next Case Study?"
        body="Book a free consultation and let's talk about what growth could look like for your business."
        ctaLabel="Book a Free Consultation"
        ctaHref="/contact"
      />
    </>
  );
}
