# DESIGN.md — Ektar Design System (v3, verified from source)

Read directly from the client's latest theme export (`Copy_of_ektar_com_Website_Design.zip`). This supersedes the v2 documentation — the color/spacing/radius token system is **unchanged** from v2 (confirmed by byte-for-byte diff against the previous export's `styles.css`), but the navigation, hero, and several product pages have changed substantially. Referenced by `CLAUDE.md`.

---

## 0. What changed since v2 (read this first if you already built against v2)

- **Navigation restructured** from a flat list of product links into a 3-way mega-dropdown, organized by *surface* (Protect the User / Protect the Device / Protect the App) rather than by product. `site.js` changed to match — see §5.3.
- **One new keyframe animation**: `cycle3` (§5.1) — the homepage hero's product visual is now a cross-fading three-scene sequence, not the old numbered product list.
- **Three new pages**: ekKey, ekPulse, ekRules (new products) — see `PAGES.md`.
- **Three new "surface" pages**: `protect-the-user`, `protect-the-device`, `protect-the-app` — category pages sitting between the homepage and individual product pages.
- **New Investors page.**
- **The AI page is gone** — not in this export. Treat `/ai` as retired; don't rebuild it.
- **Careers page rewritten** — no longer a form; now a culture/pitch page. See `PAGES.md`.
- Colors, type, spacing, radius, shadows: **no change** — everything in §1–4 below is identical to v2.

---

## 1. Color tokens — unchanged from v2

Source: `_ds/modernist-e24f7682-45d3-44d7-95f7-6ac30dfcadde/styles.css`, confirmed identical byte-for-byte to the previous export.

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#f3f2f2` | Warm off-white — light-mode ground |
| `--color-surface` | `#eae9e9` | Cards, inputs |
| `--color-text` | `#201e1d` | Near-black ink — light-mode text |
| `--color-accent` | `#ec3013` | The one brand accent |
| `--color-accent-2` | `#e15b47` | Secondary accent |
| `--color-divider` | `color-mix(in srgb, #201e1d 40%, transparent)` | Hairline rule |

Neutral ramp (100→900): `#f8f4f4 · #eae7e7 · #d7d3d3 · #bab6b6 · #9b9797 · #7d7979 · #605d5d · #444141 · #2d2b2b`

Accent ramp (100→900): `#fff2ef · #ffe0d9 · #ffc4b8 · #ff9783 · #ff563c · #dd2b0f · #ae1800 · #7c1405 · #4d170e`
Accent-2 ramp (100→900): `#fff2ef · #ffe0da · #ffc4b9 · #ff9784 · #ef6853 · #c94b39 · #9e3526 · #71261b · #471d16`

Shadows: `--shadow-sm 0 1px 2px`, `--shadow-md 0 3px 10px`, `--shadow-lg 0 12px 32px`, all `color-mix(in srgb, #2d2b2b N%, transparent)` — ink-tinted, not pure black.

---

## 2. The dark/light inversion — unchanged mechanism

Still the same token-swap, not a separate palette:

```css
:root { --ink: var(--color-text); --paper: var(--color-bg); }
body { background: var(--ink); color: var(--paper); }   /* dark by default */

html[data-theme="light"] {
  --ink: var(--color-bg); --paper: var(--color-text);
  --accent-lt: var(--color-accent-700);                  /* darker accent on light ground */
}
```

Default (dark, no attribute): `--accent-lt` = `--color-accent-400` (`#ff9783`). Light mode: `--color-accent-700` (`#ae1800`). Persisted to `localStorage['ektar-theme']`. See `CLAUDE.md` for the port approach — build this as a semantic-token flip in Tailwind, not two parallel color sets.

---

## 3. Typography and layout — unchanged

Poppins (300–800), both heading and body. Hard `0px` border-radius everywhere — still true, still deliberate, still the single most distinctive visual choice in the system. `.wrap` container at `max-width:1280px`. Full scale detail in the v2 doc's §3–4 stands unchanged; the short version:

| Element | Size | Weight |
|---|---|---|
| `.display` (hero H1) | `clamp(38px,5vw,70px)` | 700 |
| `.protect` (rotator line) | `clamp(26px,3vw,40px)` | 600 |
| `.sub` (hero subhead) | 17.5px | 400 |
| `.mono` (eyebrows/labels) | inherits | — `letter-spacing:.12em; text-transform:uppercase` |
| Body | 15px | 400 |

---

## 4. Animation catalog — 10 keyframes (one new)

| Keyframe | Used on | Effect |
|---|---|---|
| `blink` | Status dots | Hard digital blink, `1.5s steps(2, jump-none) infinite` |
| `sweep` | `.scanline` | Gradient line sweeps top→bottom over the hero, `7s linear infinite` |
| `caretblink` | Hero rotator caret | `1.06s steps(2, jump-none) infinite` |
| `ringout` | Device/shield ring visual | Concentric rings expand and fade, `4s ease-out infinite` |
| `fpsweep` | Fingerprint/biometric scan | Scan-line across a fingerprint glyph |
| `pulse` | Risk/signal indicators | Soft opacity/scale pulse |
| **`cycle3`** | **New** — homepage hero product visual | See §4.1 |
| `flow` | Data-flow lines | Directional movement suggesting signal transit |
| `drift` | Background mesh/texture | Slow ambient movement |
| `navfade` | `.navstrip .val` | Fades in the nav description line on hover change |

### 4.1 `cycle3` — the new hero product visual

Replaces the old numbered-solutions-panel hero visual entirely. Three absolutely-positioned `.scene` panels cross-fade in a fixed 9-second loop, each staggered by 3 seconds:

```css
.cycle .scene { position:absolute; inset:0; opacity:0; animation: cycle3 9s infinite; }
.cycle .scene:nth-child(2) { animation-delay: 3s; }
.cycle .scene:nth-child(3) { animation-delay: 6s; }
@keyframes cycle3 { 0%,3%{opacity:0} 6%,27%{opacity:1} 30%,100%{opacity:0} }
```

Each scene is a small "session check" card: a label ("Protect the user" / "Protect the device" / "Protect the app"), a context line ("Login attempt" / "Session check" / "Runtime check"), a verified checkmark row (bold headline + detail, e.g. "Customer verified — Device-bound · no code sent"), and two "chip" rows each naming a blocked/challenged/denied threat (e.g. "SMS OTP replay — blocked"). This is a **pure CSS animation, no JS required** — much simpler to port than the old per-product ledger backgrounds, which remain unchanged on the individual product pages (see §4.2).

### 4.2 Per-product ledger backgrounds — unchanged from v2

ekBind, ekSign, and ekSell still have their scrolling vertical ledger backgrounds (masked phone numbers, document types, channel partners respectively) exactly as in v2 — these were not touched in this update.

### 4.3 Reduced motion — unchanged

Same `prefers-reduced-motion` scope as v2: `.scanline`, status dots, `.ring`, `.fpscan`, `.flowbar`, `.pulsebar i` disabled; hero rotator transition collapses to instant. Extend this list to also pause `.cycle .scene`'s animation (freeze on the first scene) under reduced motion — the source's existing query is broad enough in spirit that this is a faithful extension, not a deviation, but confirm the exact selector list against `reference/pages/index.dc.html` rather than assuming.

---

## 5. Navigation — restructured (read carefully, this is the biggest UX change)

### 5.1 New structure: 5 top-level items, 3 with dropdowns

```
Home                    → /
Protect the User    ▾   → /protect-the-user
  ekShield  · Authentication
  ekKey     · Passkeys
  ekSign    · Document signing
  ekPulse   · Behavioural biometrics
Protect the Device   ▾  → /protect-the-device
  ekBind    · SIM & network trust
  ekProtect · Device integrity
  ekShield  · Authentication
Protect the App      ▾  → /protect-the-app
  ekProtect · Runtime & app integrity
  ekPulse   · Behavioural signals
About                   → /about
```

Note **ekShield appears in two dropdowns** (User and Device) and **ekProtect** and **ekPulse** each appear in two dropdowns (Device+App, and User+App respectively) — a product can belong to more than one "surface." This is intentional and should be modeled as a many-to-many relationship in your content layer (a product has a list of surfaces, not one), not forced into a single-category structure.

### 5.2 Dropdown styling

```css
.pnav .pdrop {
  position: absolute; top: 100%; left: 0; min-width: 270px;
  border: 2px solid var(--line); border-top: 0;
  background: var(--ink);
  opacity: 0; visibility: hidden; transform: translateY(-4px);
  transition: opacity .18s ease, transform .18s ease, visibility .18s;
}
.pnav .pitem:hover .pdrop, .pnav .pitem:focus-within .pdrop { opacity:1; visibility:visible; transform:none; }
.pnav .pdrop a span { /* the role label under each product name */
  font-size:10.5px; letter-spacing:.12em; text-transform:uppercase; color:var(--accent-lt);
}
```

Hard-cornered like everything else (no radius), opens downward on hover or keyboard focus-within, each product link shows its name plus a small uppercase role label beneath it (e.g. "ekShield" / "Authentication").

### 5.3 Magnetic nav — mechanism updated for the dropdown structure

The accent-colored sliding block (`.pblock`) now measures and targets **only top-level items** (`a.top`), not every `<a>` in the nav — necessary because the dropdown links are also `<a>` tags and must not trigger the magnetic block themselves. Positioning math changed from `offsetWidth`/`offsetLeft` to `getBoundingClientRect()`-relative math (more robust with the nested dropdown layout):

```js
function links() { return [...nav.querySelectorAll('a.top')]; }
// ...on hover/focus of a.top:
var r = el.getBoundingClientRect(), nr = nav.getBoundingClientRect();
block.style.width = r.width + 'px';
block.style.transform = 'translateX(' + (r.left - nr.left) + 'px)';
```

The nav strip's default (mouse-leave) state also changed copy: was *"Five products · One signal layer — each product sharpens the others."*, now **"Seven products · One decision engine — ekRules weighs every signal the three surfaces emit."** — reflecting both the new count and ekRules' new role as the explicit decisioning layer (see `PAGES.md`).

**Port `site.js` directly again** — same as the v2 guidance, it's still real, dependency-free JS, just updated for the new structure.

---

## 6. Component inventory — updated

| Component | Status | Notes |
|---|---|---|
| `Topbar` | **Changed** | Now a 3-way mega-dropdown nav (§5) instead of a flat product list |
| `HeroCycle` | **New**, replaces `HeroRotator`'s old solutions-panel companion | The `cycle3` tri-scene visual (§4.1). The "Protect the X" rotator line above the H1 is unchanged. |
| `SolutionsPanel` (`.solpanel`/`.sol`) | **Repurposed** | No longer in the hero — now used three times further down the homepage, once per tier ("Live today", "Shipping through 2026", "Building now"), each with its own `.sp-head` tier label + product count |
| `AnnouncementStrip` | **Changed copy** | New stat added: "Secured — Over 10 million authentications" |
| `HashTicker` | Unchanged | Same decorative crypto-term marquee |
| `SurfaceGrid` ("How Ektar protects you") | **New**, replaces `AttackSurfaceGrid` | Three cards now (User/Device/App), each listing its products, a threat-vector list, and an "Open →" link to the matching `/protect-the-*` page — different shape from v2's flat six-vector grid |
| `ThreeLayersSection` | **Removed from homepage** | Its role is now split across the three `/protect-the-*` pages and the `SurfaceGrid` teaser |
| `CryptoProofVisual` | **Removed from homepage** — confirmed absent from `reference/pages/index.dc.html` (no "Sign/Seal/Verify" content remains on the homepage). Not relocated to ekSign either — ekSign's own page was simplified in this update too (`PAGES.md` §7). | |
| `ProductGrid` | **Removed from homepage as a standalone section** — confirmed no separate "Our products" heading remains; product listing now lives entirely in the tiered `SolutionsPanel` repeats (see above) | |
| `RegulatoryTailwinds` | **Condensed** | 4 bullets now (UAE with explicit March 2026 deadline, Saudi Arabia, India, Singapore & Philippines combined) vs. 6 in v2; Malaysia dropped from the homepage version but still appears on `/protect-the-device` |
| `StatBand` | **Changed figures** | `$485B` (unchanged), `93%` (unchanged), `+12x` AI-generated fraud (was "+1,210%" — same order of magnitude, reworded) |
| `ProductHero` | Unchanged pattern | Status pill + eyebrow + H1 + description + CTA row + back-link, still shared across all product pages |
| `SurfaceHero` | **New** | Same shell pattern as `ProductHero`, used on the three `/protect-the-*` pages, with a "tier summary" line under the CTA (e.g. "ekShield — live today · ekKey, ekSign — shipping through 2026 · ekPulse — building now") |
| `TierBadge` | **New** | Small status pill on product pages: "Live", "Shipping 2026", "Building now" — seen on ekBind, ekKey, ekPulse, ekRules, ekSell; not shown as a separate badge on ekShield/ekProtect (already-live products signal this via their main status pill instead) |
| `DecisionEngineCallout` | **New** | "One decision engine" — a recurring callout block on the homepage and all three surface pages, always pointing at ekRules |
| `Footer` | **Changed content** | Products list now 8 items (added ekKey, ekPulse, ekRules); Company list now has Investors (new) and no longer has AI (removed) |

---

## 7. Buttons, icons — unchanged

Same `.btn-primary`/`.btn-secondary`/`.btn-ghost`/`.btn-icon`/`.btn-onink` system, same zero-radius, same Poppins-800 button text, same Lucide-on-`currentColor` icon approach as v2. Nothing to change here.

---

## 8. What's unverifiable without a browser

Same caveat as v2: I can read every CSS rule and every line of copy, but the *feel* of the new dropdown open/close timing, the `cycle3` cross-fade in motion, and the updated magnetic-nav positioning math are worth a real QA pass once built, not just a read of the numbers.
