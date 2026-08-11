# DESIGN.md — Ektar Design System (verified from source)

Every value below is read directly from the uploaded theme export (`ektar_com.zip`) — specifically `_ds/modernist-.../styles.css` for tokens and each `.dc.html` page's inline `<style>` for the site-specific chrome and animation. Nothing here is reconstructed or guessed. Where the export has a real value, that value is quoted; where something is a live-only effect I can describe but not screenshot pixel-for-pixel, that's flagged.

Referenced by `CLAUDE.md`. Read this before writing any component.

---

## 0. What kind of file this design came from

The export's page files (`index.dc.html`, `about.dc.html`, etc.) are not plain HTML — they're authored in a proprietary component/template format (`.dc.html`) compiled at runtime by a bundled JS engine (`support.js`, `image-slot.js`). That engine is **not** part of the site's real front end and should not be ported. Treat the `.dc.html` files purely as **content and structure source** — the copy, the CSS, the class names, and the animation intent are real and authoritative; the `{{ }}` template expressions and the compiler that resolves them are tooling artifacts specific to the export, not something to reproduce in Next.js. `site.js`, by contrast, **is** real, plain, dependency-free JS the live site actually runs (nav magnetism + theme toggle) — port its behavior faithfully.

---

## 1. Color tokens

Source: `_ds/modernist-e24f7682-45d3-44d7-95f7-6ac30dfcadde/styles.css`, confirmed byte-for-byte against the embedded `:root` block in `Ektar - Digital Security (standalone).html` and visually against `screenshots/ekshield-hero.png` and `screenshots/footer-check2.png`.

### 1.1 Base tokens

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#f3f2f2` | Warm off-white — the *light-mode* page ground |
| `--color-surface` | `#eae9e9` | Slightly deeper neutral — cards, inputs |
| `--color-text` | `#201e1d` | Near-black ink — the *light-mode* text color |
| `--color-accent` | `#ec3013` | The one brand accent — orange-red |
| `--color-accent-2` | `#e15b47` | Secondary accent, close to the primary, slightly warmer |
| `--color-divider` | `color-mix(in srgb, #201e1d 40%, transparent)` | Hairline rule, opacity-mixed from ink |

### 1.2 Neutral ramp (9 steps, OKLCH-generated for even visual value)

| Step | Hex |
|---|---|
| 100 | `#f8f4f4` |
| 200 | `#eae7e7` |
| 300 | `#d7d3d3` |
| 400 | `#bab6b6` |
| 500 | `#9b9797` |
| 600 | `#7d7979` |
| 700 | `#605d5d` |
| 800 | `#444141` |
| 900 | `#2d2b2b` |

### 1.3 Accent ramp + Accent-2 ramp (9 steps each)

| Step | Accent | Accent-2 |
|---|---|---|
| 100 | `#fff2ef` | `#fff2ef` |
| 200 | `#ffe0d9` | `#ffe0da` |
| 300 | `#ffc4b8` | `#ffc4b9` |
| 400 | `#ff9783` | `#ff9784` |
| 500 | `#ff563c` | `#ef6853` |
| 600 | `#dd2b0f` | `#c94b39` |
| 700 | `#ae1800` | `#9e3526` |
| 800 | `#7c1405` | `#71261b` |
| 900 | `#4d170e` | `#471d16` |

### 1.4 Shadows

| Token | Value |
|---|---|
| `--shadow-sm` | `0 1px 2px color-mix(in srgb, #2d2b2b 14%, transparent)` |
| `--shadow-md` | `0 3px 10px color-mix(in srgb, #2d2b2b 16%, transparent)` |
| `--shadow-lg` | `0 12px 32px color-mix(in srgb, #2d2b2b 22%, transparent)` |

Shadows are ink-tinted (`#2d2b2b`, i.e. `--color-neutral-900`), not pure black — keep that tint in the Tailwind port rather than a generic `rgba(0,0,0,…)`.

---

## 2. The dark/light inversion — this is the whole ballgame

**The site's default state is dark**, and it gets there by *inverting the roles* of the two base tokens, not by defining a separate dark palette:

```css
:root {
  --ink: var(--color-text);   /* #201e1d — near-black */
  --paper: var(--color-bg);   /* #f3f2f2 — warm off-white */
}
body {
  background: var(--ink);     /* page ground = the "text" color → dark */
  color: var(--paper);        /* body text = the "bg" color → light */
}
```

Toggling to light mode (`html[data-theme="light"]` / `body[data-theme="light"]`, set by `site.js`, persisted to `localStorage` key `ektar-theme`) swaps them back:

```css
html[data-theme="light"] {
  --ink: var(--color-bg);       /* now the ground really is the light color */
  --paper: var(--color-text);   /* now text really is dark */
  --line: color-mix(in srgb, var(--color-text) 18%, transparent);
  --line-soft: color-mix(in srgb, var(--color-text) 9%, transparent);
  --dim: color-mix(in srgb, var(--color-text) 76%, transparent);
  --accent-lt: var(--color-accent-700);   /* darker accent reads on a light ground */
}
```

In dark mode (the default, no attribute), `--accent-lt` resolves to `--color-accent-400` (`#ff9783`) — light enough to read on the near-black ground. In light mode it swaps to `--color-accent-700` (`#ae1800`) — dark enough to read on the off-white ground. **Every accent-colored label, link, and status dot on the page uses `--accent-lt`, never the raw `--color-accent`, for exactly this reason.**

Derived tokens built on top of `--ink`/`--paper` every page reuses:

| Token | Formula (dark mode) | Purpose |
|---|---|---|
| `--line` | `color-mix(in srgb, var(--paper) 16%, transparent)` | Standard hairline border |
| `--line-soft` | `color-mix(in srgb, var(--paper) 8%, transparent)` | Faint grid/mesh lines |
| `--dim` | `color-mix(in srgb, var(--paper) 74%, transparent)` | Secondary/muted text |

**Next.js port note:** implement this as a CSS custom-property flip on a `data-theme` attribute exactly as the source does — don't build two separate Tailwind color sets. One set of semantic tokens (`ink`, `paper`, `line`, `dim`, `accent-lt`) that resolve differently under `[data-theme="light"]` is both what the source does and the only way the existing component CSS (built entirely on those tokens) keeps working unmodified.

---

## 3. Typography

**Poppins**, weights 300–800, loaded from Google Fonts (`family=Poppins:wght@300;400;500;600;700;800`) — used for **both** heading and body (`--font-heading` and `--font-body` both resolve to `'Poppins', sans-serif` at the page level, overriding the base design system's Archivo). Use `next/font/google` for this, not a `<link>` tag.

Note the Modernist foundation system (`_ds/.../styles.css`) itself defaults to **Archivo** — the live Ektar pages override that with a page-level `:root` block setting Poppins instead. **Poppins is correct for the shipped site; Archivo is a design-system default that was overridden and should not be used.**

### 3.1 Scale in use on the homepage

| Element | Size | Weight | Notes |
|---|---|---|---|
| `.display` (hero H1) | `clamp(38px, 5vw, 70px)` | 700 | `line-height:1.14; letter-spacing:-.03em` |
| `.protect` (rotator line above H1) | `clamp(26px, 3vw, 40px)` | 600 | `letter-spacing:-.02em`; the rotating word itself is italic and colored `--color-accent` |
| Section H2 (e.g. "The attack surface") | ~32–40px | 700 | consistent with base `h2{font-size:32px}` from the design system, scaled up contextually per section |
| `.sub` (hero subhead) | `17.5px` | 400 | `line-height:28px (--leading); max-width:52ch; color:var(--dim)` |
| `.mono` utility | inherits size | — | `font-feature-settings:"tnum" 1; letter-spacing:.12em; text-transform:uppercase` — used for every small eyebrow/label/status string site-wide |
| Body base | `15px` | 400 | `line-height:1.55` (design-system base, still in effect for prose blocks) |

### 3.2 Base heading scale (from the Modernist foundation, still active where not overridden)

| Tag | Size |
|---|---|
| h1 | 42px |
| h2 | 32px |
| h3 | 25px |
| h4 | 20px |
| h5 | 16px |
| h6 | 13px, `letter-spacing:.08em; text-transform:uppercase` |

All headings: `font-weight: 800` (`--font-heading-weight`), `line-height: 1.12`, `letter-spacing: -0.015em`.

---

## 4. Layout primitives

| Token | Value |
|---|---|
| `--leading` | `28px` — the base line-rhythm unit; margins/paddings are frequently expressed as multiples of it (`calc(1.4 * var(--leading))`, etc.) |
| `--half` | `14px` — half-leading, used for tight vertical gaps |
| `--edge` | `clamp(20px, 5vw, 72px)` — page-edge horizontal padding |
| `.wrap` | `max-width:1280px; margin:0 auto; padding:0 var(--edge)` — the site's container |
| `--space-1…8` | `4 / 8 / 12 / 16 / 24 / 32px` — the Modernist spacing scale, still used inside components (cards, buttons, forms) |
| `--radius-sm/md/lg` | **`0px` — all three.** The entire site is hard-cornered. No rounded corners anywhere, including buttons, cards, inputs, tags, or the dialog. |

**Do not introduce border-radius anywhere in the Next.js port unless a future design revision explicitly asks for it.** This is one of the most visually distinctive, deliberate choices in the system (paired with the "engineered/technical" tone of the copy) — rounding any corner breaks the brand read immediately.

---

## 5. Animation catalog

Nine named keyframe animations are defined site-wide (`index.dc.html`'s `<style>` block; the same set is available to every page). This is the authoritative list — implement each as CSS keyframes in the Next.js port, and respect the site's own `prefers-reduced-motion` rule (see §5.10).

| Keyframe | Used on | Effect |
|---|---|---|
| `blink` | Status dots (`.topbar .pill .dot`, `.status .dot`) | Opacity steps to 0.12 and back, `1.5s steps(2, jump-none) infinite` — a hard digital blink, not a smooth fade |
| `sweep` | `.scanline` | A horizontal gradient line travels top→bottom across the hero, `7s linear infinite` |
| `caretblink` | `.protect .caret` | The block-cursor after the rotating hero word blinks, `1.06s steps(2, jump-none) infinite` |
| `ringout` | `.ring` (device/shield visual) | Concentric rings expand outward and fade, `4s ease-out infinite` |
| `fpsweep` | fingerprint/biometric scan visual | A scan-line sweeps across a fingerprint glyph |
| `pulse` | risk-score / signal indicators | A soft opacity or scale pulse marking "live" state |
| `flow` | data-flow lines (signal layer, auth flow diagrams) | Directional movement along a path, suggesting data/signal transit |
| `drift` | background mesh/grid or particle texture | Slow ambient movement so the background never feels static |
| `navfade` | `.navstrip .val` (magnetic nav description line) | Fades the role/description text in when the active nav item changes |

### 5.1 The hero rotator ("Protect the User / the App / the Device")

Above the H1, a single line reads **"Protect "** followed by a word that cycles through **the User → the App → the Device → the User…**. Implementation: a fixed-height, overflow-hidden "reel" (`.reel`) containing all words stacked vertically (`.rin`), translated by `transform: translateY(-Nem)` on an interval, with `transition-duration: .85s` and easing `cubic-bezier(.65,0,.2,1)`. The reel's wrapper width (`.swap`) animates to match the widest current word so the layout never jumps. A blinking block caret (`.caret`, using `caretblink`) sits after the whole line, terminal-style. The cycling word itself renders in italic, `color: var(--color-accent)`.

This exact treatment — "1a · Poppins italic · blur dissolve" — was one of four options explored (see `Protect Line Options.dc.html`) and is the one shipped. The alternates (Archivo mask-wipe, Playfair Display rise & fade, Poppins-light terminal cut) were **not** chosen; don't resurrect them.

### 5.2 Scanline + glow + mesh (hero background)

Three layered effects sit behind the hero content, in this stacking order:
1. **`.mesh`** — a faint repeating-linear-gradient grid (`--line-soft`, 72px cells), both axes.
2. **`.glow`** — a large radial gradient in `--color-accent` at low opacity, positioned top-right, giving the hero an ambient warm light source.
3. **`.hrain`** — a canvas element (`class="hrain"`) rendering a column of scrolling hex/hash-like characters (visible faintly in `screenshots/ekshield-hero.png` on the right side of the page — small monospace strings like hash fragments drifting behind the content), masked with a left-to-right fade so it's strongest on the right edge and invisible on the left where the text sits. This is genuinely canvas-rendered, not a static image — port it as a lightweight canvas or SVG-text animation, not a photograph.
4. **`.scanline`** — the `sweep` keyframe travels over the top of all of this.

### 5.3 Magnetic product navigation

The top nav (`.pnav`) is five product links plus AI and About. A solid accent-colored block (`.pblock`) physically slides and resizes to sit behind whichever link is hovered or focused, animated with an overshoot easing (`cubic-bezier(.34,1.4,.44,1)`, `.46s`) — it "springs" into place rather than sliding linearly. Simultaneously, a strip below the nav (`.navstrip`) swaps its two-line content (`.key` = role, e.g. "Authentication"; `.val` = one-line description) to match the hovered item, with the `navfade` fade-in on the description line. On mouse-leave, everything resets to a default state ("Five products" / "One signal layer — each product sharpens the others."). This is implemented in plain JS in `site.js` (`wireNav()`), not the proprietary template runtime — **port this logic directly**, it's real, dependency-free, and already idiomatic (measure `offsetWidth`/`offsetLeft`, position via `transform: translateX()`).

Two rejected alternate nav directions exist for reference (`Nav Options.dc.html`): a tracking-underline treatment (1a) and a mega-panel with all five products expanding on one "Products" trigger (1b). **Neither shipped — the magnetic block (1c) is what's live.**

### 5.4 Product-specific hero background treatments

Each of the five product pages has its own distinct animated background motif behind the hero, all in the same "technical/ciphertext" visual language:

| Page | Motif |
|---|---|
| ekShield (`authentication.dc.html`) | Rotating ciphertext — hex/hash fragments cycling, one line shown "decrypted" at a time |
| ekProtect (`ekprotect.dc.html`) | An "intrusion grid" — a cell grid where random cells flag and fade, suggesting scanning/detection |
| ekBind (`ekbind.dc.html`) | A vertical ledger of masked phone numbers (`+971 •• ••• 4821` style), most tagged `sim [hash]`, one tagged `sna verified · operator confirmed`, one tagged `swap detected`, one tagged `reverse sms · sent from device` — this literally illustrates the product's job (verifying real SIMs, catching swaps) as a passive background animation |
| ekSign (`eksign.dc.html`) | A vertical ledger of document types (loan agreement, FATCA declaration, mandate change, etc.) each tagged with a short hash and a signing state, one marked "signed · sha-256 sealed" |
| ekSell (`eksell.dc.html`) | A vertical ledger of channel partners (employer payroll, fintech wallet, retail chain, etc.), each tagged `queued` except one marked `connected · distributing` |

All five ledgers duplicate their content once in the DOM (for a seamless vertical loop, same technique as a horizontal marquee) and are marked decorative/`aria-hidden`.

### 5.5 The crypto/signing visual (homepage "Cryptographic proof" section)

A three-step Sign → Seal → Verify sequence illustrated with a document card showing a live-looking signature block: `sha256 9c4e·f17b·a208·31dd`, `sig r/s 3f9a·c2e1`, status "Signature valid." This is the same visual language reused on the ekSign product page at much greater depth (signature blocks per signatory, a full audit-record layout).

### 5.6 Attack-surface tile grid ("Six ways into a banking app")

Six cards (SMS OTP interception, overlay attacks, rooted devices/RATs, malware in-app, forged documents, deepfakes/synthetic IDs), each naming which product closes that vector. Static grid, no motion beyond standard hover states — the motion budget on this page is already spent on the hero and the per-product ledgers.

### 5.7 The "three layers" section

Three numbered layer cards (Layer 01 ekShield/ekBind, Layer 02 ekProtect, Layer 03 ekSign), each with an "Open →" link to its product page, plus a callout that all three feed one shared signal layer. This is a legitimate sequential numbering (three real, load-bearing product tiers) — appropriate use of numbered markers, not decorative.

### 5.8 Stat / metrics band ("The problem")

Three large stat cards: **~$485B** banking fraud losses (2023), **+1,210%** AI-enabled fraud growth (2025), **93%** still using SMS OTP. Labelled `Data / 01`, `Data / 02`, `Data / 03` in the mono eyebrow style. No counter-up animation implied by the CSS — treat as static large numerals unless a future revision asks for a count-up.

### 5.9 Theme toggle

A single button (`.themebtn`) with a sun icon (shown in light mode) and a moon icon (shown in dark mode, default), swapped via the same `[data-theme="light"]` attribute selector as the color tokens. Preference persists to `localStorage` under the key `ektar-theme`. Implementation is idempotent and safe to re-run (see `site.js` — it's written defensively against being re-invoked while the page streams/re-renders, which matters less in a normal Next.js app but the persistence + attribute-toggle logic should be ported as-is).

### 5.10 Reduced motion

The source explicitly disables `.scanline`, `.topbar .pill .dot`, `.ring`, `.fpscan`, `.flowbar`, and `.pulsebar i` animations under `@media (prefers-reduced-motion: reduce)`, and the hero rotator's `transition` collapses to `none` (instant word swap, no caret blink) under the same query. **Port this accessibility floor exactly — it's already correctly scoped in the source, don't drop it or broaden/narrow the selector list.**

---

## 6. Component inventory

| Component | Where used | Notes |
|---|---|---|
| `Topbar` | Every page | Logo, magnetic product nav (`.pnav`), theme toggle, "Book a demo" button, live-status pill (blinking dot + "Layer 01 secured"–style label that changes per page) |
| `HeroRotator` | Homepage only | See §5.1 |
| `SolutionsPanel` (`.solpanel` / `.sol`) | Homepage hero, right column | Numbered list (01–05) of all five products with name, role tag, one-line description; hover slides content right and tints background |
| `AnnouncementStrip` | Homepage | Client/compliance proof line: "Deployed — UAE's 3rd largest bank", "Contracted — Oman's 3rd largest bank", "Aligned with CBUAE · RBI · SAMA · FIDO Member" |
| `HashTicker` | Homepage, decorative | A horizontal marquee of hex fragments + crypto terms (`ecdsa p-256 · sha-256 · fido2 · device-bound`) — same duplicate-content loop technique as the vertical ledgers |
| `AttackSurfaceGrid` | Homepage | See §5.6 |
| `ThreeLayersSection` | Homepage | See §5.7 |
| `CryptoProofVisual` | Homepage | See §5.5 |
| `ProductGrid` | Homepage ("Our products") | Five cards, name + category + description + "Learn more →" |
| `RegulatoryTailwinds` | Homepage | Six country/regulator entries (UAE, Saudi Arabia, India, Singapore, Philippines, Malaysia), each naming the specific notice/circular and mandate |
| `StatBand` | Homepage | See §5.8 |
| `ProductHero` | Each of the 5 product pages | Layer number + product name eyebrow, headline, description, CTA row, back-link, plus the product-specific animated visual (§5.4) |
| `CapabilitiesList` | Each product page | Numbered 01–06 (varies by product) list of what the product does |
| `ComparisonTable` | ekSign, ekShield | "ekSign vs a third-party portal" / "Hardware-backed vs PIN-only" — two-column comparison tables, real content, not placeholder |
| `SigningTrackCards` | ekSign | Three lettered tracks (A/B/C) each with a numbered step sequence |
| `Footer` | Every page | Products column, Company column, Contact column, legal links, three office addresses with flag icons, copyright |
| `Dialog` | Design-system component, available but not confirmed wired to a specific page trigger in this export | `.dialog-backdrop` / `.dialog` — top elevation, `--shadow-lg`, `0px` radius like everything else |
| `Buttons` | Everywhere | `.btn-primary` (solid accent fill), `.btn-secondary` (outlined), `.btn-ghost` (text-only, accent color), `.btn-icon` (square icon button), `.btn-onink` (outline variant tuned for the dark hero — border/text in `--paper` instead of accent) |
| `Tags` | Product pages, stat labels | `.tag-accent`, `.tag-accent-2`, `.tag-neutral`, `.tag-outline` — all pull from the 100/800 ramp steps per §1.3 |

---

## 7. Buttons (verified from `styles.css`)

```css
.btn { padding: var(--space-2) calc(var(--space-3)*1.2); border-radius: var(--radius-md); /* = 0 */
       font-family: var(--font-heading); font-weight: 800; font-size: 14px; }
.btn-primary   { background: var(--color-accent); color: var(--color-bg); }
.btn-primary:hover  { background: var(--color-accent-600); }
.btn-primary:active { background: var(--color-accent-700); }
.btn-secondary { border: 1px solid var(--color-divider); }
.btn-ghost     { color: var(--color-accent); padding-inline: var(--space-1); }
.btn-icon      { width:36px; height:36px; padding:0; }
```

All buttons: **zero border-radius**, Poppins at weight 800 (not the site's usual 700 heading weight — buttons are deliberately the heaviest text on the page), 14px.

---

## 8. Icons

Per the design-system manifest (`foundations/icons.html`): **Lucide**, used as inline SVG on `currentColor` — no icon font, no sprite sheet. Port with the `lucide-react` package (or hand-author the small set actually used: sun/moon for the theme toggle, a handful of glyphs on the ekShield channel-coverage list — mobile, globe, headset/call-centre, ATM/terminal).

---

## 9. What's unverifiable without a browser

I can read every CSS rule and every line of copy directly from the export, but the following are genuinely dynamic/data-driven and I can only describe their *intended* behavior from the code, not hand you a verified pixel output:

- The exact interval/cadence of the hex-fragment ledgers on ekBind/ekSign/ekSell (they're JS-driven loops inside the proprietary `.dc.html` runtime, not fixed CSS animations)
- The precise easing feel of the magnetic nav block in motion (the cubic-bezier values are exact; how it *feels* is worth a real QA pass once built)
- Whether `ai.dc.html`'s "Two places" cards, or any other page, has interaction states beyond what static CSS shows

Flag these for a design QA pass once the Next.js build is running, rather than treating my description as pixel-final.
