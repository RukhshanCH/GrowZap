export interface BlogCategory {
  slug: string;
  title: string;
  h1: string;
  description: string;
  suggestedPosts: string[];
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: "seo-guides",
    title: "SEO Guides",
    h1: "Everything you need to know about getting found on Google",
    description:
      "Whether you're just starting to explore SEO or trying to understand why your rankings aren't moving, these guides break down the most important concepts in plain language.",
    suggestedPosts: [
      "What Is SEO? A Plain-Language Guide for Small Business Owners",
      "Local SEO vs Organic SEO: What's the Difference?",
      "How to Do an SEO Audit Yourself (And What to Look For)",
      "Why Your Website Isn't Ranking on Google — 8 Common Reasons",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing Tips",
    h1: "Practical strategies for growing your business online",
    description:
      "From choosing the right marketing channels to measuring ROI on a limited budget, this category covers the strategic side of digital marketing for small business owners.",
    suggestedPosts: [
      "How to Build a Digital Marketing Strategy on a Small Business Budget",
      "SEO vs. Google Ads: Which Should You Invest in First?",
      "Why Hiring a Digital Marketing Agency Is (and Isn't) Right for Your Business",
      "How to Measure Whether Your Digital Marketing Is Actually Working",
    ],
  },
  {
    slug: "google-ads",
    title: "Google Ads Guides",
    h1: "Learn how to get more from your ad budget",
    description:
      "Understanding how Google Ads actually works before you spend money on it saves a lot of wasted budget. These guides cover essential concepts, common mistakes, and advanced tactics.",
    suggestedPosts: [
      "Google Ads for Beginners: What You Need to Know Before You Start",
      "How to Structure a Google Ads Campaign That Actually Converts",
      "Why Your Google Ads Aren't Working (And How to Fix It)",
      "How Much Should You Spend on Google Ads? A Budget Guide",
    ],
  },
  {
    slug: "social-media",
    title: "Social Media Marketing Tips",
    h1: "What works and what doesn't",
    description:
      "Social media advice is everywhere but often contradictory. This category cuts through the noise with practical, tested strategies for small businesses building a real social presence.",
    suggestedPosts: [
      "How Often Should a Small Business Post on Social Media?",
      "Instagram Reels vs. Static Posts: What's Actually Worth Your Time?",
      "How to Build a Social Media Content Calendar in One Hour",
      "Which Social Media Platform Is Right for Your Business?",
    ],
  },
  {
    slug: "content-marketing",
    title: "Content Marketing Strategies",
    h1: "How to create content that actually brings in business",
    description:
      "Content marketing only works if the right content reaches the right people at the right time. This category covers strategy, production, and measurement for small business content.",
    suggestedPosts: [
      "What Is Topical Authority? (And Why It Matters for Your SEO)",
      "How to Write a Blog Post That Ranks on Google",
      "How to Repurpose One Blog Post Into 10 Pieces of Content",
      "The Difference Between Content Writing and Copywriting",
    ],
  },
];
