# GrowZap Website

Full marketing site for GrowZap — built with Next.js (App Router) + TypeScript,
plain semantic BEM CSS (no Tailwind), and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

This project was hand-scaffolded (not via `create-next-app`) because it was built
in an environment without network access, so `npm install` has not been run yet —
do that first.

## Project structure

```
app/                    Next.js App Router routes (one folder per page)
components/             Shared React components
  motion/Reveal.tsx     Framer Motion scroll-reveal wrappers
content/
  pages/*.json           Parsed page content (headings, paragraphs, bullets,
                          steps, tables, FAQs, CTAs) — one file per route
  routes.ts               Route registry, nav structure, CTA-label → URL resolver
  types.ts                 TypeScript types for page content
  blog.ts                   Blog category data
styles/                  Plain CSS, BEM naming, split into partials,
                          imported once via styles/globals.css
public/images/           Logo assets
```

## Content notes

- Content was parsed from the GrowZap Website Content document into structured
  JSON per page, then rendered through a generic `PageTemplate` component for
  most service / industry / resource / location pages, and bespoke components
  for Home, About, Pricing, FAQs, Contact, Case Studies, Testimonials, and Blog.
- **Case Studies and Testimonials** currently ship with honest "coming soon"
  copy rather than fabricated client names, quotes, or results — the source
  content document only had placeholder templates for these two pages, with no
  real client data. Replace `app/case-studies/page.tsx` and
  `app/testimonials/page.tsx` with real content when it's available.
- **Pricing** ships with tier structure (Starter / Growth / Full-Service) and
  "Custom quote" framing rather than invented dollar amounts, since the source
  content explicitly left pricing as a placeholder. Update
  `app/pricing/page.tsx`'s `TIERS` array with real numbers when ready.
- The contact form (`components/ContactForm.tsx`) is a working client-side
  form UI but isn't wired to a backend/email service yet — hook up the
  `handleSubmit` function to your form handler, CRM, or email API of choice.

## Design system

Tokens (color, type, spacing, radius, shadow, motion) live in
`styles/tokens.css` as CSS custom properties, derived from the GrowZap brand
palette and design-system SKILL.md. Headings use Playfair Display, body text
uses Inter (both loaded via `next/font/google` in `app/layout.tsx`).

The recurring "growth bars" motif (`components/GrowthBars.tsx`) echoes the
logo's built-in bar chart and animates in on scroll — used in hero sections
as a signature brand element.
