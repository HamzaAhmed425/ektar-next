# CLAUDE.md — Ektar Website (Next.js + Tailwind Rebuild)

You are rebuilding the Ektar marketing site — a five-product B2B digital-security platform for banks (ekShield, ekProtect, ekBind, ekSign, ekSell) — in **Next.js (App Router) + Tailwind CSS**, matching the real, finished design and copy captured in the client's theme export (`ektar_com.zip`) exactly.

**Read `SITEMAP.md`, `DESIGN.md`, and `PAGES.md` before writing any code**, in that order — sitemap for the shape of the site, design for the system it's built from, pages for the real content that fills it in. All three were produced by directly reading the export's real files (`.dc.html` pages, `styles.css` tokens, `site.js` behavior, and cross-checked against the real screenshots) — not reconstructed from a live-site scrape or general knowledge of what a bank-security site "probably" looks like. Treat them as ground truth.

---

## 1. Correction notice — read this first

An earlier pass at this documentation was built from a **web scrape of live ektar.com**, before the client's actual theme export was available. That earlier version was wrong in essentially every material way: it invented a four-product lineup (ekShield/ekVerify/ekBank/ekSell) that doesn't exist, a light navy-on-white palette that isn't the real one, Inter instead of the real Poppins, and rounded corners instead of the real hard 0px-radius system. **If any prior context, memory, or half-finished code references ekVerify, ekBank, a light default theme, or Inter — discard it.** The real product line is ekShield, ekProtect, ekBind, ekSign, ekSell; the real site is dark-by-default with a light-mode toggle; the real font is Poppins; the real corners are sharp. This file and its two companions are the corrected replacement.

---

## 2. What this project is

Ektar Technologies is a B2B digital-security company, founded 2022 by three ex-Standard Chartered bankers, selling five products that each close a distinct fraud vector in banking's digital channels:

- **ekShield** — device-bound authentication, replacing SMS OTP
- **ekProtect** — in-app attestation, malware/overlay/RAT detection, session risk scoring
- **ekBind** — SIM binding via Silent Network Authentication and Reverse SMS
- **ekSign** — in-channel, cryptographically sealed document signing
- **ekSell** — distribution of bank products into employer/fintech/retail channels (the company's founding platform)

The tone throughout is technical, confident, and regulator-literate — copy leans on real named mandates (CBUAE Notice 3057, SAMA Counter-Fraud Framework, RBI Authentication Directions 2025, etc.), real cryptographic specifics (ECDSA P-256, SHA-256), and real client proof points (UAE's 3rd largest bank, Oman's 3rd largest bank), not generic SaaS marketing language. Preserve that register in any new copy you're asked to write.

---

## 3. Source format — what you're actually reading

The export's page files (`index.dc.html`, `about.dc.html`, etc.) are authored in a proprietary component/template format compiled by a bundled JS engine (`support.js`). **That engine is tooling, not the real site — do not port it.** What's real and authoritative in each `.dc.html` file:

- The copy (transcribed in full into `PAGES.md`)
- The CSS (`<style>` blocks — read directly into `DESIGN.md`)
- The class structure and component boundaries
- The animation intent (keyframe names, easing, what triggers what)

What's *not* real and should be ignored: the `{{ expression }}` template placeholders and whatever compiles them. Four such placeholders exist on the homepage alone (`rainRef`, `shift`, `spinDur`, `swapW` — all driving the hero rotator and its canvas ref); implement their *behavior* per `DESIGN.md` §5.1 using normal React state, not by trying to reverse-engineer the export's template syntax.

`site.js`, separately, **is** real: plain, dependency-free JS the live site actually runs for nav magnetism and the theme toggle. Port its logic directly (see `DESIGN.md` §5.3 and §5.9) — it's already idiomatic and doesn't need reinterpreting.

---

## 4. Tech stack

- **Next.js 14+, App Router** (`app/` directory)
- **Tailwind CSS** for styling. The source's entire design system is CSS-custom-property-driven (see `DESIGN.md` §1–2) — model that in Tailwind as semantic color tokens (`ink`, `paper`, `line`, `dim`, `accent`, `accent-lt`, etc.) that resolve differently under `[data-theme="light"]`, rather than hardcoding two parallel light/dark class sets. This is not optional stylistic preference — it's how every single component's CSS in the source is actually written, and matching it is what makes the theme toggle work with zero per-component light/dark branching.
- **`next/font/google`** for Poppins (weights 300–800) — not a `<link>` tag.
- **`next/image`** for the real assets in the export (`assets/ektar-logo.png`, `assets/office-{india,singapore,uae}.png`) once copied into `public/`.
- **`next/link`** for all internal navigation.
- **Zero border-radius, everywhere**, per `DESIGN.md` §4. Do not let Tailwind's default `rounded` utilities creep in anywhere — buttons, cards, inputs, tags, dialogs are all hard-cornered in the source.

---

## 5. Suggested project structure

```
app/
├── layout.tsx              Root layout — next/font Poppins, theme-toggle script (inline,
│                            pre-hydration, to avoid a flash of the wrong theme), Topbar, Footer
├── globals.css              Tailwind directives + the full token set from DESIGN.md §1–2,
│                            including the [data-theme="light"] override block
├── page.tsx                 Home (/) — see PAGES.md §1 for exact section order and copy
├── ekshield/page.tsx         (source file: authentication.dc.html — see SITEMAP.md naming note)
├── ekprotect/page.tsx
├── ekbind/page.tsx
├── eksign/page.tsx
├── eksell/page.tsx
├── ai/page.tsx
├── about/page.tsx
├── blog/page.tsx             Placeholder post cards — see PAGES.md §9, don't invent real posts
├── join-us/page.tsx          Careers — single always-open application form, no job board
├── contact/page.tsx
├── termsofuse/page.tsx       Content not in the export — placeholder + flag to client
└── privacy-policy/page.tsx   Content not in the export — placeholder + flag to client

components/
├── Topbar.tsx                'use client' — magnetic nav, theme toggle, status pill
├── HeroRotator.tsx            'use client' — the "Protect the X" cycling line
├── SolutionsPanel.tsx         Homepage hero's numbered product list
├── AnnouncementStrip.tsx      Client/compliance proof line
├── HashTicker.tsx              Decorative crypto-term marquee
├── AttackSurfaceGrid.tsx
├── ThreeLayersSection.tsx
├── CryptoProofVisual.tsx
├── ProductGrid.tsx
├── RegulatoryTailwinds.tsx
├── StatBand.tsx
├── ProductHero.tsx             Shared shell for the 5 product-page heroes; takes the
│                              product-specific background motif as a prop/child (DESIGN.md §5.4)
├── ProductLedgerBackground.tsx 'use client' — the scrolling ciphertext/SIM/signature/
│                              partner ledgers behind ekShield/ekBind/ekSign/ekSell heroes
├── CapabilitiesList.tsx
├── ComparisonTable.tsx
├── SigningTrackCards.tsx       ekSign-specific — three lettered tracks
├── Footer.tsx                  Server Component — static content, no interactivity
├── ThemeToggle.tsx              'use client'
└── icons/                      lucide-react per DESIGN.md §8

lib/
├── content/
│   ├── home.ts                 Port PAGES.md §1 into structured data
│   ├── about.ts
│   ├── ai.ts
│   ├── products/
│   │   ├── ekshield.ts
│   │   ├── ekprotect.ts
│   │   ├── ekbind.ts
│   │   ├── eksign.ts           This one is large — PAGES.md §7 has 8 sub-sections
│   │   └── eksell.ts
│   ├── blog.ts
│   ├── careers.ts
│   └── contact.ts
└── theme.ts                    Theme-toggle logic ported from site.js — get/set/apply,
                                 localStorage key 'ektar-theme', dark as the unset default

public/
├── ektar-logo.png               Copy from assets/ in the export
└── offices/                     office-{india,singapore,uae}.png from assets/
```

---

## 6. Build order

1. **Tokens first.** Port `DESIGN.md` §1–4 into `globals.css`/`tailwind.config` — the full color system including the `[data-theme="light"]` inversion, the Poppins font, the spacing scale, and confirm zero border-radius is the default everywhere before building a single component.
2. **Theme toggle + layout shell.** Get `data-theme` persistence and the dark-default working in `app/layout.tsx` first — every subsequent component depends on the token flip working correctly, and it's much harder to retrofit than to build first.
3. **Topbar, including the magnetic nav.** This is the single most distinctive interactive element on the site (`DESIGN.md` §5.3) — get it right early since it's present on every page.
4. **Homepage, section by section**, in the exact order in `PAGES.md` §1 (Hero → Proof strip → Attack surface → Three layers → Crypto proof → Products → Regulatory tailwinds → Stat band → Closing CTA).
5. **The five product pages.** Build a shared `ProductHero` shell first (status pill, eyebrow, H1, description, CTA row, back-link, background-motif slot), then fill each page's body per its `PAGES.md` section — ekSign (§7) is by far the largest, budget accordingly.
6. **AI, About, Blog, Careers, Contact.** Content-only pages, no novel components beyond what the homepage/product pages already established.
7. **Terms of Use / Privacy Policy.** Build as clearly-labeled placeholders — content isn't in the export (`SITEMAP.md` §6) — and flag to the client rather than drafting legal text yourself.
8. **Responsive + reduced-motion pass.** Confirm the `prefers-reduced-motion` behavior in `DESIGN.md` §5.10 is implemented exactly, not approximately — the source is specific about which animations it disables.

---

## 7. Hard rules

- **Don't reintroduce the wrong product line.** Five products — ekShield, ekProtect, ekBind, ekSign, ekSell. No ekVerify, no ekBank.
- **Don't reintroduce a light default theme or Inter.** Dark is the default; Poppins is the font. See §1.
- **Don't round any corners.** `DESIGN.md` §4 — this is deliberate and site-wide.
- **Don't invent blog posts.** The export is explicit that the three post cards on `/blog` are placeholders (`PAGES.md` §9) — build the placeholder state, not fabricated articles.
- **Don't invent a careers job board.** The real page is a single always-open application form (`PAGES.md` §10) — that's a deliberate design choice, not missing content.
- **Don't invent Terms of Use / Privacy Policy copy.** Not in the export — placeholder + flag (`SITEMAP.md` §6).
- **Don't port the `.dc.html` compiler.** `support.js` and `image-slot.js` are export tooling, not the site (§3).
- **Do port `site.js`'s logic directly** — it's real, and it's the source of truth for exactly how the magnetic nav and theme toggle behave.
- **Route naming**: use `/ekshield` (not `/authentication`) for consistency with every nav label and cross-link in the source — see the naming note in `SITEMAP.md` §1.

---

## 8. Open items to flag to the client

- Terms of Use and Privacy Policy have no source content
- `/ai` references a "RASP SDK" and a "Fraud & Risk Engine" as named sub-components of ekProtect's stack, with no dedicated page — confirm whether these need their own routes before launch
- ekSell's product page (`PAGES.md` §8) is markedly thinner than ekShield/ekProtect/ekBind/ekSign — likely needs more content before launch
- The exact target of each product page's "← All layers"/"← All products" back-link isn't unambiguous in the export (homepage root vs. a specific anchor) — confirm with the client
- Two real PDFs exist as supporting collateral (`uploads/Ektars ekShield Security Whitepaper V2 1.pdf`, `uploads/ADCB ekSign Concept Note.pdf`) — decide whether/how these get linked from their respective product pages
