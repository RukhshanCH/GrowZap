export interface RouteEntry {
  title: string;
  href: string;
  short?: string;
}

/** Canonical list of every page, used for nav building and link resolution. */
export const ROUTES: RouteEntry[] = [
  { title: "Home", href: "/" },
  { title: "SEO Services", href: "/services/seo", short: "SEO" },
  { title: "Local SEO", href: "/services/seo/local-seo" },
  { title: "Technical SEO", href: "/services/seo/technical-seo" },
  { title: "On-Page SEO", href: "/services/seo/on-page-seo" },
  { title: "Off-Page SEO", href: "/services/seo/off-page-seo" },
  { title: "Link Building", href: "/services/seo/off-page-seo" },
  { title: "SEO Audit", href: "/services/seo/audit" },
  { title: "Keyword Research", href: "/services/seo/keyword-research" },
  { title: "Competitor Analysis", href: "/services/seo/keyword-research" },
  { title: "Google Ads Management", href: "/services/google-ads", short: "Google Ads" },
  { title: "Google Ads", href: "/services/google-ads" },
  { title: "PPC Campaign Management", href: "/services/google-ads/ppc-management", short: "PPC Management" },
  { title: "PPC Management", href: "/services/google-ads/ppc-management" },
  { title: "Remarketing Campaigns", href: "/services/google-ads/remarketing", short: "Remarketing" },
  { title: "Meta Ads Management", href: "/services/meta-ads", short: "Meta Ads" },
  { title: "Meta Ads", href: "/services/meta-ads" },
  { title: "Facebook & Instagram Ads", href: "/services/meta-ads" },
  { title: "Social Media Management", href: "/services/social-media-management", short: "SMM" },
  { title: "Social Media Strategy", href: "/services/social-media-management/strategy" },
  { title: "Content Planning", href: "/services/social-media-management/content-planning" },
  { title: "Content Planning & Scheduling", href: "/services/social-media-management/content-planning" },
  { title: "Content Writing Services", href: "/services/content-writing", short: "Content Writing" },
  { title: "Content Writing", href: "/services/content-writing" },
  { title: "Blog Writing Services", href: "/services/content-writing/blog-writing", short: "Blog Writing" },
  { title: "Blog Writing", href: "/services/content-writing/blog-writing" },
  { title: "Website Copywriting", href: "/services/content-writing/website-copywriting" },
  { title: "Graphic Design Services", href: "/services/graphic-design", short: "Graphic Design" },
  { title: "Graphic Design", href: "/services/graphic-design" },
  { title: "Graphic Designing", href: "/services/graphic-design" },
  { title: "Video Editing Services", href: "/services/video-editing", short: "Video Editing" },
  { title: "Video Editing", href: "/services/video-editing" },
  { title: "Reels Creation", href: "/services/video-editing/reels" },
  { title: "Reels & Short-Form Video", href: "/services/video-editing/reels" },
  { title: "All Services", href: "/services" },
  { title: "Services", href: "/services" },

  { title: "Industries We Serve", href: "/industries", short: "Industries" },
  { title: "Industries", href: "/industries" },
  { title: "Real Estate Marketing", href: "/industries/real-estate", short: "Real Estate" },
  { title: "Healthcare Marketing", href: "/industries/healthcare", short: "Healthcare" },
  { title: "E-Commerce Marketing", href: "/industries/ecommerce", short: "E-Commerce" },
  { title: "Law Firm Marketing", href: "/industries/law-firms", short: "Law Firms" },
  { title: "Home Services Marketing", href: "/industries/home-services", short: "Home Services" },
  { title: "Restaurant Marketing", href: "/industries/restaurants", short: "Restaurants" },
  { title: "Startups & Small Business", href: "/industries/startups" },

  { title: "SEO vs Google Ads", href: "/resources/seo-vs-google-ads" },
  { title: "Why Hire a Digital Marketing Agency", href: "/resources/why-hire-a-digital-marketing-agency" },
  { title: "Affordable SEO Services", href: "/resources/affordable-seo-services" },

  { title: "SEO Services in Dubai", href: "/locations/seo-services-dubai" },
  { title: "SEO Agency in UAE", href: "/locations/seo-agency-uae" },
  { title: "Digital Marketing Services in Lahore", href: "/locations/digital-marketing-lahore" },

  { title: "About Us", href: "/about", short: "About" },
  { title: "About GrowZap", href: "/about" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Testimonials", href: "/testimonials" },
  { title: "Client Reviews", href: "/testimonials" },
  { title: "Pricing", href: "/pricing" },
  { title: "FAQs", href: "/faqs" },
  { title: "Frequently Asked Questions", href: "/faqs" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
  { title: "Contact Us", href: "/contact" },
];

const CONSULT_PHRASES = [
  "consultation",
  "free audit",
  "free marketing audit",
  "talk to us",
  "let's talk",
  "get started",
  "book a call",
  "speak with",
  "get in touch",
  "reach out",
  "quote",
  "book",
];

/** Resolve a CTA / inline link label to a best-guess route. */
export function resolveHref(label: string): string {
  const clean = label.replace(/[.,!]+$/, "").trim();
  const lower = clean.toLowerCase();

  // exact/substring match against known page titles (longest title first)
  const sorted = [...ROUTES].sort((a, b) => b.title.length - a.title.length);
  for (const r of sorted) {
    if (lower.includes(r.title.toLowerCase())) {
      return r.href;
    }
  }

  if (CONSULT_PHRASES.some((p) => lower.includes(p))) {
    return "/contact";
  }
  if (lower.includes("service")) {
    return "/services";
  }
  if (lower.includes("industr")) {
    return "/industries";
  }
  if (lower.includes("pricing") || lower.includes("package")) {
    return "/pricing";
  }
  return "/contact";
}

export interface NavChild {
  label: string;
  href: string;
  blurb?: string;
}

export interface NavGroup {
  label: string;
  href: string;
  children?: NavChild[];
}

export const MAIN_NAV: NavGroup[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "SEO Services", href: "/services/seo", blurb: "Rank higher, stay ranked" },
      { label: "Google Ads", href: "/services/google-ads", blurb: "Paid search that converts" },
      { label: "Meta Ads", href: "/services/meta-ads", blurb: "Facebook & Instagram campaigns" },
      { label: "Social Media Management", href: "/services/social-media-management", blurb: "Consistent, on-brand presence" },
      { label: "Content Writing", href: "/services/content-writing", blurb: "SEO copy that reads well" },
      { label: "Graphic Design", href: "/services/graphic-design", blurb: "Visuals that match your brand" },
      { label: "Video Editing", href: "/services/video-editing", blurb: "Reels & short-form video" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Real Estate", href: "/industries/real-estate" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "E-Commerce", href: "/industries/ecommerce" },
      { label: "Law Firms", href: "/industries/law-firms" },
      { label: "Home Services", href: "/industries/home-services" },
      { label: "Restaurants", href: "/industries/restaurants" },
      { label: "Startups & Small Business", href: "/industries/startups" },
    ],
  },
  {
    label: "Resources",
    href: "/blog",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "SEO vs Google Ads", href: "/resources/seo-vs-google-ads" },
      { label: "Why Hire an Agency", href: "/resources/why-hire-a-digital-marketing-agency" },
      { label: "Affordable SEO Services", href: "/resources/affordable-seo-services" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export const SERVICE_CARDS = [
  {
    title: "SEO Services",
    href: "/services/seo",
    description: "Local, technical, on-page, and off-page SEO built for sustainable rankings.",
  },
  {
    title: "Google Ads",
    href: "/services/google-ads",
    description: "PPC campaigns and remarketing that turn clicks into customers.",
  },
  {
    title: "Meta Ads",
    href: "/services/meta-ads",
    description: "Facebook & Instagram campaigns targeted at the right audience.",
  },
  {
    title: "Social Media Management",
    href: "/services/social-media-management",
    description: "Strategy, content planning, and consistent posting across platforms.",
  },
  {
    title: "Content Writing",
    href: "/services/content-writing",
    description: "Blog and website copy written for readers and search engines alike.",
  },
  {
    title: "Graphic Design",
    href: "/services/graphic-design",
    description: "On-brand visuals for social, web, and advertising.",
  },
  {
    title: "Video Editing",
    href: "/services/video-editing",
    description: "Reels and short-form video edited for retention and reach.",
  },
];

export const INDUSTRY_CARDS = [
  { title: "Real Estate", href: "/industries/real-estate" },
  { title: "Healthcare", href: "/industries/healthcare" },
  { title: "E-Commerce", href: "/industries/ecommerce" },
  { title: "Law Firms", href: "/industries/law-firms" },
  { title: "Home Services", href: "/industries/home-services" },
  { title: "Restaurants", href: "/industries/restaurants" },
  { title: "Startups & Small Business", href: "/industries/startups" },
];
