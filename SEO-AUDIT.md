# SEO / AEO Audit — Suvra Mukherjee Portfolio

Date: 2026-07-28
Auditor: Claude Code (Phase 1, no code changed)

## 1. Stack detection

- **Framework**: Next.js 16.2.12, App Router, React 19, TypeScript, Tailwind v4.
- **Rendering mode**: Fully static. `npm run build` confirms `○ (Static) prerendered as static content` for `/`. No SSR/ISR in use.
- **Structure**: Single route (`app/page.tsx`) that stacks 11 section components (`Nav, Hero, Stats, About, Experience, Research, Education, Certs, Skills, Blog, Contact`) plus `Footer`, all rendered as one long scrollable page with in-page anchors (`#about`, `#experience`, etc.). There is no `/blog`, `/resume`, or other sub-route — it's a one-page site.
- **Deployment target**: git remote is `github.com/rohankarn35/suvra-portfolio` (source only). No `vercel.json`/`netlify.toml` found, so I could not confirm the hosting provider or production domain — **need this from you** for `metadataBase`, canonical URLs, and sitemap generation.
- **Note on CLAUDE.md drift**: the design-system doc lists a "Work — case study cards" section between Stats and About. It does not exist in the code (no `Work.tsx`, not imported in `page.tsx`). Flagging since it affects the site's completeness claim; not something I'll build without your go-ahead.

## 2. Current state, tag by tag

| Item | Current state |
|---|---|
| `<title>` | Static, single value: `"Suvra Mukherjee"` (app/layout.tsx:18). Not descriptive, no role/keyword. |
| Meta description | `"Technical Business Analyst"` (18 chars) — far under the 140–158 char target, no CTA. |
| Canonical | Absent. |
| Robots meta | Absent (defaults to indexable, but not explicit). |
| Open Graph | Absent entirely — no `og:title/description/url/type/image/site_name`. |
| Twitter Card | Absent. |
| JSON-LD | Absent — no Person, WebSite, ScholarlyArticle, FAQPage, or ProfilePage schema anywhere. |
| `sitemap.xml` | Absent. |
| `robots.txt` | Absent. |
| Favicon set | Only `app/favicon.ico` (16/32px, auto-served by Next). No 180 apple-touch, no 192/512 PNG, no `manifest.json`. |
| Heading hierarchy | Clean: exactly one `<h1>` ("Suvra Mukherjee", Hero), all section titles are `<h2>`, card/entry titles are `<h3>`. No skipped levels, no multiple h1s. |
| Image alt text | One real `<img>` (portrait, via `next/image`) — has `alt="Suvra Mukherjee"`. All other visuals are inline SVG icons or CSS grid backgrounds marked `aria-hidden="true"` (correct). |
| Internal linking | Nav pill only links to 5 of 11 sections (About, Experience, Research, Certifications, Skills) — Stats, Education, Blog, and Contact aren't in nav (Contact has its own CTA button, so that's fine; Education/Blog/Stats are scroll-only). All in-page anchors use descriptive link text — no "click here" instances found. |
| URL structure | Single page, hash anchors only (`/#about`, etc.) — no query strings, human-readable. |
| Dead/placeholder links | `Certs.tsx` — all 5 "View credential" links point to `href="#"`. `Contact.tsx` — LinkedIn, GitHub, Resume all point to `href="#"`. These need real URLs before Phase 3 (they're also the `sameAs` values Person schema needs). |
| Resume file | No resume PDF or HTML page exists in `public/` or `app/` at all. |
| `lang` attribute | Present and correct: `<html lang="en">`. |

## 3. Lighthouse audit (production build, local, desktop preset)

Ran `next build && next start` then `lighthouse` headless against `localhost:4173`.

| Category | Score |
|---|---|
| Performance | **100** |
| Accessibility | **96** |
| Best Practices | **100** |
| SEO | **100** |

Notes:
- SEO/Performance/Best Practices already score max locally because the page is static, has *a* title/description, isn't blocked from indexing, and has no render-blocking issues (LCP 0.6s, CLS 0, TBT 0ms). This reflects Lighthouse's mechanical checks — it doesn't know the title/description are too generic, or that OG/JSON-LD are missing (those aren't scored by Lighthouse, but do matter for Phases 3–4).
- Accessibility loses 4 points on one **color-contrast** failure: the footer's copyright line (`color: #6c746b` / `text-faint` token) on the dark background fails WCAG contrast. This is a design-system color token (`text-faint`), so I'm not touching it without your sign-off — flagging under Phase 2/accessibility gap, fix would be a token-value change, not a layout change.
- `robots-txt` and `structured-data` audits returned "not applicable" (nothing to validate yet, since neither file exists).
- Because everything is statically prerendered, a `curl`/text-only-browser check will show full content with no JS dependency — good foundation for LLM crawlers already.

## 4. Gap list (severity-ranked)

| # | Gap | Severity | Phase |
|---|---|---|---|
| 1 | No sitemap.xml | Critical | 2 |
| 2 | No robots.txt (can't currently confirm AI crawlers are allowed, since there's no policy at all) | Critical | 2 |
| 3 | No JSON-LD (Person, WebSite, ScholarlyArticle, FAQPage) — biggest lever for entity recognition / LLM citation | Critical | 3 |
| 4 | Generic `<title>` / meta description, not on-brand with target keyword ("Technical Business Analyst and Data Analyst") | High | 2 |
| 5 | No Open Graph / Twitter Card tags — site will render as a bare link when shared | High | 2 |
| 6 | No canonical URL | High | 2 |
| 7 | Dead placeholder links (LinkedIn, GitHub, Resume, 5× credential links = `href="#"`) | High | needs your input before 2/3 |
| 8 | No resume as PDF or HTML | High | 4 |
| 9 | No `llms.txt` / `llms-full.txt` | Medium | 4 |
| 10 | No FAQ block / FAQPage schema on About | Medium | 4 |
| 11 | Incomplete favicon set (no apple-touch-icon, no 192/512, no manifest.json) | Medium | 2 |
| 12 | Nav omits Stats, Education, Blog (scroll-only reachability) | Low | 6 |
| 13 | Footer color-contrast failure (`text-faint` on `bg-base`) | Low (a11y) | flag only, needs design sign-off |
| 14 | "Work" section referenced in CLAUDE.md but not implemented | Low (informational) | out of scope, flagging only |

## 5. Blocking questions before Phase 2/3 can be complete

I can write all the code/markup now, but these values are either unknown or placeholders, and the rules say no fabricated facts:

1. **Production domain** — what URL will this deploy to (e.g. `suvramukherjee.dev`)? Needed for `metadataBase`, canonical, sitemap, OG `og:url`, JSON-LD `url`.
2. **LinkedIn URL** — currently `#`.
3. **GitHub URL** — currently `#`.
4. **Resume** — do you have a PDF to drop in, or should I generate an HTML version from the About/Experience content already on the page?
5. **Credly / credential verification links** — currently `#` for all 5 certifications. Real Credly/Google/Oracle/IBM verify URLs, or should these stay unlinked for now?
6. **ICCCNet 2024 paper** — do you have a DOI or a public URL (IEEE Xplore, ResearchGate, etc.) for the ScholarlyArticle schema? Also, exact author list as it should appear (just you, or co-authors too)?
7. **Google Scholar / Credly / ORCID profile URLs** (for `sameAs`) — if any exist.
8. **Google Search Console / Bing Webmaster verification tags** — only needed at Phase 7, but let me know now if you already have accounts so I don't create placeholders.

Everything else in Phases 2–5 (meta tags, sitemap, robots.txt, favicon set, semantic fixes, structured data using facts already on the page, performance work) I can do without further input.

---

**Awaiting your approval to proceed to Phase 2**, plus answers to the blocking questions above (they can trickle in — I'll start with what's answered).
