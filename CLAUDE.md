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
- **Display/Headings**: Space Grotesk, weight 600–700, tracking -0.01em to -0.02em
- **Body**: Times New Roman, Times, serif (global default)
- **Labels/Mono**: JetBrains Mono — section kickers (12px, 0.18em letter-spacing, uppercase), stats, tags
- **Global override**: All fonts default to Times New Roman unless explicitly overridden with Space Grotesk or JetBrains Mono

### Spacing
- Section padding: `96px 28px` desktop → `64px 20px` mobile
- Max content width: `1180px` centered
- Nav: fixed pill, `min(1180px, calc(100% - 28px))` wide, `top: 16px`

### Animations
- `gridSweep`: lime grid sweeps 6s linear infinite (hero + contact bg)
- `fadeIn`: opacity 0→1
- Respect `prefers-reduced-motion`

### Grid background pattern
Two overlapping grids at 46×46px:
1. White lines at 4.5% opacity
2. Lime lines at 42%/38% opacity, masked to a spotlight

## Sections (in order)
1. Nav — floating pill, "SM" badge, active section highlight, Contact CTA
2. Hero — name, role kicker, desc, two CTAs, portrait, grid bg animation
3. Stats — animated counters (2+ years, 5 certs, 2 companies)
4. Work — case study cards
5. About — bio + status cards
6. Experience — timeline entries
7. Research — published paper card
8. Education — scroll-driven timeline
9. Certifications — badge cards
10. Skills — 5 grouped rows with hover-accent tags
11. Blog — placeholder
12. Contact — CTA with grid bg
13. Footer

## Responsiveness
- `repeat(auto-fit, minmax(..., 1fr))` grids throughout
- `clamp()` for fluid font sizes
- Nav links scroll horizontally on mobile
- Mobile section padding: `64px 20px`

## Implementation notes
- `next/font/google` for Space Grotesk and JetBrains Mono
- `scroll-margin-top: 88px` on all sections
- Intersection Observer: active nav, stat counter, education timeline fill
- Skill tags: hover → `background:#C3E75B; color:#0d0f0e`
- Selection: `background:#C3E75B; color:#0d0f0e`
