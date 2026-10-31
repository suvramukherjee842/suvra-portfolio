# Suvra Mukherjee Portfolio

## Role
Act as a senior frontend engineer. Build pixel-faithful, fully responsive implementations from the design system below. Mobile-first, semantic HTML, accessible.

## Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| bg-base | `#0d0f0e` | Page background |
| bg-alt | `#101312` | Alternate section bg |
| bg-card | `#151917` | Card background |
| accent | `#C3E75B` | Primary accent, CTAs |
| accent-hover | `#d6f07f` | Hover state for accent |
| text-primary | `#EDF0EA` | Primary text |
| text-body | `#D4D9CF` | Body/paragraph text |
| text-sub | `#C6CCC0` | Slightly dimmer body |
| text-muted | `#9BA39A` | Muted/secondary text |
| text-dim | `#7f8a7d` | Labels/captions |
| text-faint | `#6c746b` | Very faint meta |
| text-tag | `#B7BEB2` | Tag/chip text |
| border-subtle | `rgba(255,255,255,0.08)` | Section dividers |
| border-card | `rgba(255,255,255,0.09)` | Card borders |
| border-accent | `rgba(195,231,91,0.22)` | Accent-tinted borders |

### Typography
- **Display/Headings**: Space Grotesk 400–600, tracking -0.02em (name: -0.045em, lowercase)
- **Body**: Times New Roman, Times, serif, 18px / 1.55
- No monospace, no uppercase letter-spaced labels, no eyebrow kickers above headings
- Six size tokens in `app/globals.css` (`--fs-display` … `--fs-small`); nothing under 15px

### Layout: "split stage" (tasteskill direction, seed 310023236)
- 47/53 split: left half is a sticky full-height photo (`Stage`), right half scrolls
- Split 1: portrait beside Hero, Stats, About, Experience
- Research breaks full width (square plate + tabs: Method / Result / Venue)
- Split 2: Education beside Kolkata → Durgapur photos (swap via `data-stage`)
- Credentials band: Certifications (giant word + `<details>` bars) beside the Skills paper sheet
- Contact: full-width display rows; Footer: photo half + large menu, picture credits
- Phone (<860px): splits stack, stage becomes a static picture
- Margins `--margin`, section gap `--gap-section`; square corners, square buttons

### House rules (taste-skill)
No gradients, hairline rules, 1px outlined boxes, shadows at rest, glass/blur, pill nav,
icon cards, index numbering. Separate surfaces by tone steps (`--tone-1/2/3`).
Check with `node .claude/skills/design-taste-frontend/scripts/inspect.mjs <url>` on a production build.

### Motion
- Hero name shrinks on scroll (`animation-timeline: view()`, static fallback)
- `[data-reveal]` staggered entrances via `Reveal` (only hidden once `.js` is set)
- Stage photos drift slowly; stat counters count up
- Respect `prefers-reduced-motion`

## Sections (in order)
1. Nav: plain fixed bar over the right half, active link in accent, Contact action
2. Hero: lowercase name, one sentence, Email me
3. Stats: figure lines
4. About: letter with sign-off
5. Experience: ledger rows that open (`<details>`)
6. Research
7. Education
8. Certifications
9. Skills (hover tag → `background:#C3E75B; color:#0d0f0e`)
10. Contact
11. Footer (credits for the Wikimedia pictures in `public/places/credits.json`)

## Implementation notes
- `next/font/google` for Space Grotesk only
- `scroll-margin-top: 88px` on all sections
- Intersection Observer: active nav, stat counter, stage swap, entrances
- Selection: `background:#C3E75B; color:#0d0f0e`
