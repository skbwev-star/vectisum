# Vectisum — Astro Project

## Local development
npm install
npm run dev

## Build
npm run build      # outputs to dist/
npm run preview    # serve the production build locally

## Structure (V2 — research-institute IA)
- src/pages/
  - index.astro                — homepage: Latest Research → intro → stats → why → methodology teaser → knowledge teaser → who reads this → CTA
  - research/                  — research hub (front page of the publication)
  - deal-autopsies/            — anonymised forensic deal reviews (index + [slug])
  - case-studies/               — full structured reviews: overview/thesis/risks/evidence/decision framework/lessons/verdict (index + [slug])
  - investment-intelligence/    — short-form research notes (index + [slug])
  - why-investors-lose-money/   — flagship forensic pattern series, each page ends in Key Lessons (index + [slug])
  - decision-frameworks/        — decision trees for Should I Buy / Walk Away / Renegotiate / Hold / Exit / Diversify / Finance (index + [slug])
  - knowledge/                  — 17-category institutional knowledge library (index + [slug])
  - methodology/                — 7 proprietary frameworks, each with purpose/inputs/outputs/decision use/example (index + [slug])
  - evidence-hierarchy.astro    — standalone page ranking source quality (registry to marketing material)
  - sample-review.astro, about.astro, contact.astro

- src/data/ — all long-form content lives here as typed arrays; pages are generated from these files
  - deals.ts, caseStudies.ts, intelligence.ts, mistakes.ts, decisionFrameworks.ts, frameworks.ts, knowledge.ts
  - To add new research: add an entry to the relevant data file. The page is generated automatically via getStaticPaths.

- src/components/
  - Header (mega-nav with Research dropdown), Footer, SEO, Layout
  - EditorialCard (FT-style research card), ArticleHero (shared research/knowledge page header), StatStrip (real-work numbers, no testimonials), KnowledgeCard, DecisionTree (visual decision tree), Ledger (Bloomberg-style data strip), DecisionDial (Decision Score gauge)

- src/styles/global.css — design tokens (color, type, spacing)
- public/ — favicon, robots.txt, OG image

## Content policy reminder (per brief)
- No testimonials — StatStrip uses real/placeholder counts instead.
- No "Our Services" / "Solutions" / "Book a Call" / "Partner With Us" language anywhere — CTAs use "Commission a Review", "Read Analysis", "View Methodology".
- Every Why-Investors-Lose-Money page ends in a Key Lessons block.
- Case studies disclose no confidential client information — all figures are anonymised/illustrative.

## Notes
- Sitemap is generated automatically at build time via @astrojs/sitemap (astro.config.mjs, site: https://www.vectisum.com — update to your real domain).
- Contact form currently opens a pre-filled mailto: link (no backend). Wire it to a form service or serverless endpoint before launch.
- Replace review@vectisum.com with your real inbox in src/pages/contact.astro.
- All figures on /sample-review and /deal-autopsies are anonymised/illustrative — replace with real anonymised case data as you publish reviews.
