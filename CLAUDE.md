# CLAUDE.md — Ektar Website (Next.js + Tailwind Rebuild) — v3

You are rebuilding the Ektar marketing site in **Next.js (App Router) + Tailwind CSS**, matching the client's latest theme export exactly. This is v3 of this documentation — the client's suite grew from 5 to 8 products and the information architecture was reorganized around three attack "surfaces" (user/device/app) since the last version.

**Read `SITEMAP.md`, `DESIGN.md`, and `PAGES.md` before writing any code**, in that order. All three were produced by directly reading the export's real files — not reconstructed from memory or a prior version. Where this version disagrees with an earlier one you may have seen, **this version is correct.**

---

## 1. Version history — what changed and when

- **v1 (discard entirely):** built from a live-site web scrape before any real export was available. Wrong product line (ekVerify/ekBank that don't exist), wrong palette, wrong font, wrong corners. Nothing in v1 should be trusted.
- **v2:** built from the client's first real theme export. Correct palette/font/radius/dark-mode system (all still correct in v3 — unchanged). Five products (ekShield, ekProtect, ekBind, ekSign, ekSell), flat nav, an AI page, a form-based Careers page.
- **v3 (this version):** built from the client's updated export. **Eight products** (adds ekKey, ekPulse, ekRules). Nav reorganized into three surface-based dropdowns (Protect the User/Device/App) instead of a flat product list. Three new surface pages. New Investors page. AI page retired. Careers rewritten as a culture page, no longer a form. ekShield, ekProtect, ekSign, and ekSell pages substantially rewritten. See `DESIGN.md` §0 and `PAGES.md`'s "What changed since v2" header for the full diff.

If you're resuming work that was built against v2, **do not assume incremental patching is enough** — the navigation IA, the homepage, and four of the five original product pages all changed materially. Re-read `PAGES.md` for every page you touch, even ones that "already exist."

---

## 2. What this project is

Ektar Technologies — B2B digital-security company for banks, founded 2022 by three ex-Standard Chartered bankers. The suite is now organized around **three surfaces fraud attacks**, each defended by a subset of the (now eight) products:

- **Protect the User** — ekShield (authentication), ekKey (passkeys), ekSign (document signing), ekPulse (behavioural biometrics)
- **Protect the Device** — ekBind (SIM & network trust), ekProtect (device integrity), ekShield (also here — binds login to device)
- **Protect the App** — ekProtect (runtime & app integrity), ekPulse (also here — app-level behavioural signal)

**ekRules** sits above all three as the shared decision engine (allow / verify further / block), explicitly called out on the homepage and every surface page but not itself part of any dropdown. **ekSell** is a separate distribution product — not part of the "trust suite" of seven, listed independently in the footer.

Products can belong to more than one surface (ekShield: User + Device; ekProtect: Device + App; ekPulse: User + App) — build this as a data relationship, not a fixed single category per product.

Tone is unchanged from v2: technical, confident, regulator-literate — real named mandates (CBUAE Notice 3057, SAMA Counter-Fraud Framework, BNM RMiT 2026, etc.), real cryptographic specifics, real proof points ("At a top-3 UAE bank", "Over 10 million authentications"). Preserve that register in any new copy.

---

## 3. Source format — unchanged guidance from v2

Same proprietary `.dc.html` template format, same caveat: the `<style>` blocks, class structure, and copy are authoritative; the `{{ }}` template expressions and the `support.js`/`image-slot.js` compiler are export tooling, not the real site — don't port them. `site.js` is real, plain JS and **is** the source of truth for nav and theme behavior — it changed in this update (new `a.top` selector, new default nav-strip copy, `getBoundingClientRect()`-based positioning) — port the *current* version, not the v2 version (`DESIGN.md` §5.3).

---

## 4. Tech stack — unchanged from v2

- **Next.js 14+, App Router**
- **Tailwind CSS**, modeled on the same semantic-token approach as v2: `ink`/`paper`/`line`/`dim`/`accent`/`accent-lt` resolving differently under `[data-theme="light"]`. Token values themselves are unchanged (`DESIGN.md` §1–2).
- **`next/font/google`** for Poppins (300–800).
- **`next/image`** for the real assets (`reference/assets/` — logo + 3 office images, same as v2, unchanged).
- **`next/link`** for internal nav.
- **Zero border-radius, everywhere** — still true, still deliberate.

---

## 5. Suggested project structure (updated)

```
app/
├── layout.tsx
├── globals.css
├── page.tsx                    Home — new hero (cycle3 visual), tiered trust-suite list,
│                                surface-grid section, condensed regulatory list
├── ekshield/page.tsx            (source: authentication.dc.html)
├── ekprotect/page.tsx
├── ekbind/page.tsx
├── eksign/page.tsx
├── eksell/page.tsx
├── ekkey/page.tsx                NEW
├── ekpulse/page.tsx              NEW
├── ekrules/page.tsx              NEW
├── protect-the-user/page.tsx     NEW — surface page
├── protect-the-device/page.tsx   NEW — surface page
├── protect-the-app/page.tsx      NEW — surface page
├── about/page.tsx                + new "Beyond banking" section
├── investors/page.tsx            NEW
├── blog/page.tsx                 unchanged — still placeholder posts
├── join-us/page.tsx              REWRITTEN — culture page, no form
├── contact/page.tsx               unchanged
├── termsofuse/page.tsx
└── privacy-policy/page.tsx
                                   NOTE: no /ai route — retired, don't rebuild

components/
├── Topbar.tsx                    'use client' — REWRITTEN for the 3-way mega-dropdown,
│                                 magnetic block now targets a.top only (DESIGN.md §5.3)
├── NavDropdown.tsx                NEW — the .pdrop panel, per top-level item that has one
├── HeroCycle.tsx                  'use client' — NEW, replaces the old hero solutions panel;
│                                 can likely be pure CSS (cycle3 keyframe) with no JS state at all
├── TieredSolutionsPanel.tsx       reused 3x on the homepage (Live today / Shipping through
│                                 2026 / Building now), each instance = the old SolutionsPanel
│                                 component with a tier header prop
├── AnnouncementStrip.tsx          + new "Secured — Over 10 million authentications" stat
├── HashTicker.tsx                 unchanged
├── SurfaceGrid.tsx                NEW — the 3-card "How Ektar protects you" section,
│                                 replaces the old flat AttackSurfaceGrid
├── RegulatoryTailwinds.tsx        content shortened on Home; full version still used on
│                                 individual surface/product pages — make the list length
│                                 a prop, don't hardcode either version
├── StatBand.tsx                   updated figures ($485B / 93% / +12x)
├── ProductHero.tsx                shared shell, unchanged pattern, now also used by ekKey/
│                                 ekPulse/ekRules
├── SurfaceHero.tsx                NEW — same shell pattern, used by the 3 surface pages,
│                                 includes an extra "tier summary" line
├── TierBadge.tsx                  NEW — small "Shipping 2026"/"Building now"/"Live" pill
├── DecisionEngineCallout.tsx      NEW — the reusable "One decision engine → ekRules" block,
│                                 used on Home + all 3 surface pages
├── ProductLedgerBackground.tsx    unchanged — ekBind/ekSign/ekSell scrolling ledgers
├── ComparisonTable.tsx            reused, now shorter on ekSign (4 rows, was 8)
├── Footer.tsx                     Server Component — updated Products (8) and Company
│                                 (Investors in, AI out) columns
├── ThemeToggle.tsx                'use client'
└── icons/                         unchanged

lib/
├── content/
│   ├── home.ts
│   ├── about.ts                  + "Beyond banking" links
│   ├── investors.ts               NEW
│   ├── products/
│   │   ├── ekshield.ts            REWRITTEN content shape (business case / breaking
│   │   │                         point / capabilities / how-it-works, no more
│   │   │                         security-architecture tables)
│   │   ├── ekprotect.ts           narrowed scope, explicit ekPulse cross-link
│   │   ├── ekbind.ts              + tier badge
│   │   ├── eksign.ts               SIMPLIFIED — don't port the old Track A/B/C shape
│   │   ├── eksell.ts               fleshed out — + how-it-works, + why-banks-use-it
│   │   ├── ekkey.ts                NEW
│   │   ├── ekpulse.ts              NEW
│   │   └── ekrules.ts              NEW
│   ├── surfaces/
│   │   ├── protect-the-user.ts     NEW
│   │   ├── protect-the-device.ts   NEW
│   │   └── protect-the-app.ts      NEW
│   ├── blog.ts                     unchanged
│   ├── careers.ts                  REWRITTEN — culture copy, no form fields
│   └── contact.ts                  unchanged
└── theme.ts                        port from the updated site.js

public/
├── ektar-logo.png
└── offices/                        unchanged
```

---

## 6. Build order (updated)

1. **Tokens first** — unchanged from v2, confirm against `DESIGN.md` §1–3 (no token values changed, but don't skip re-verifying).
2. **Theme toggle + layout shell.**
3. **Topbar, rebuilt for the mega-dropdown.** This is the biggest structural change in v3 — get the `a.top`-only magnetic block and the `.pdrop` hover/focus-within panels right before anything else, since every page depends on it.
4. **Homepage, section by section**, in the new order from `PAGES.md` §1: Hero (cycle3) → Trust suite (3 tiers) → Proof strip → How Ektar protects you (3 surface cards) → Why now (4-bullet regulatory) → Why it matters (stat band) → Closing CTA.
5. **The three surface pages** (`/protect-the-user`, `/protect-the-device`, `/protect-the-app`) — build the `SurfaceHero` shell once, reuse across all three.
6. **The eight product pages.** ekShield, ekSign, ekProtect, ekSell have new/changed content — build fresh from `PAGES.md`, don't port v2 component code for these four even if it exists. ekBind is nearly identical to v2 plus a tier badge. ekKey, ekPulse, ekRules are entirely new but share the same `ProductHero` shell pattern as the originals.
7. **About** (add "Beyond banking"), **Investors** (new), **Blog** (unchanged), **Careers** (rewrite — remove any old form component entirely), **Contact** (unchanged).
8. **Terms of Use / Privacy Policy** — still placeholders, still not in the export.
9. **Cross-link pass** — wire up the "One decision engine" callouts (Home + 3 surface pages → ekRules), the ekProtect→ekPulse cross-sell, and the tier badges, per `SITEMAP.md` §5.
10. **Responsive + reduced-motion pass**, extending the existing reduced-motion scope to also freeze `.cycle .scene` (`DESIGN.md` §4.3).

---

## 7. Hard rules (updated)

- **Eight products, three surfaces, one decision engine.** ekShield, ekProtect, ekBind, ekSign, ekSell, ekKey, ekPulse, ekRules. No ekVerify, no ekBank (those never existed — v1 hallucination). No AI page.
- **Don't port v2's ekShield/ekSign/ekProtect/ekSell content verbatim.** All four changed materially in v3 — re-read `PAGES.md`, don't assume the old sections still apply.
- **Careers has no form.** Don't add one back — it's a deliberate rewrite, not a content gap.
- **Still don't round any corners. Still don't invent blog posts. Still don't invent Terms/Privacy copy.** All v2 rules on this front carry forward unchanged.
- **A product can belong to more than one nav dropdown / surface.** Don't force a single-category data model.
- **ekRules has no nav entry of its own** — it's reachable only via cross-links and the footer. Don't add a top-level nav item for it that doesn't exist in the source.
- **"Get in touch" vs. "Book a demo" is a deliberate copy distinction** on Careers/Investors vs. everywhere else — same destination (`/contact`), different label; preserve it rather than normalizing to one CTA string everywhere.

---

## 8. Open items to flag to the client

- Terms of Use and Privacy Policy still have no source content
- Confirm the exact back-link targets ("← All layers" vs "← All products") on each product page — not unambiguous in the export
- The homepage's regulatory section dropped Malaysia (still present on `/protect-the-device` and `/ekkey`) — confirm this is intentional rather than an oversight before launch
- No pitch deck, financials, or funding data exist for the Investors page — confirm what (if anything) beyond the current relationship-starting copy is expected before launch
- `/ai` was removed in this export — confirm with the client whether this is a deliberate retirement (and whether a redirect is needed from any indexed `/ai` URLs) or an accidental omission from this particular export
