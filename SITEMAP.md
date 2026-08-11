# SITEMAP.md — Ektar Route Tree

Derived by tracing every `href` actually present in the export's `.dc.html` files (verified with `grep` across the source, not assumed). Referenced by `CLAUDE.md`.

---

## 1. Route tree

```
/                       Home                     index.dc.html
├── /ekshield           ekShield (Authentication) authentication.dc.html
├── /ekprotect          ekProtect                 ekprotect.dc.html
├── /ekbind             ekBind                    ekbind.dc.html
├── /eksign             ekSign                    eksign.dc.html
├── /eksell             ekSell                    eksell.dc.html
├── /ai                 AI at Ektar               ai.dc.html
├── /about              About                     about.dc.html
├── /blog                Blog (placeholder posts) blog.dc.html
├── /join-us             Careers                  careers.dc.html
├── /contact             Contact                  contact.dc.html
├── /termsofuse           Terms of Use             (linked from footer; not in this export)
└── /privacy-policy       Privacy Policy           (linked from footer; not in this export)
```

Ten real pages exist in the export; two footer legal links (Terms of Use, Privacy Policy) are referenced but their page content isn't in this export — flag to the client, don't fabricate legal copy.

**Route naming note:** the source filenames use `authentication.dc.html` for the ekShield page and `eksell.dc.html`/`ekbind.dc.html`/etc. for the others — i.e. the *file* for ekShield doesn't match its own product name the way the other four do. For the Next.js route, prefer the consistent, predictable pattern (`/ekshield`) over mirroring the source filename (`/authentication`) — every nav link, footer link, and cross-page reference in the source already points at consistent product names in its *link text* ("ekShield"), it's only this one filename that's inconsistent.

---

## 2. Primary navigation (topbar, every page)

Order as it appears in the DOM, left to right:

1. Logo → `/`
2. ekShield → `/ekshield`
3. ekProtect → `/ekprotect`
4. ekBind → `/ekbind`
5. ekSign → `/eksign`
6. ekSell → `/eksell`
7. AI → `/ai`
8. About → `/about`
9. Theme toggle (not a route — see `DESIGN.md` §5.9)
10. "Book a demo" button → `/contact`

**Blog, Careers, and Contact are not in the primary nav** — they're footer-only, plus Contact is also reachable via every "Book a demo" CTA (which appears in the hero and again at the bottom of every single page in this export).

---

## 3. Footer navigation (every page)

```
Products                Company              Contact
├── ekShield  /ekshield  ├── About us  /about  ├── Talk to us → /contact
├── ekProtect /ekprotect ├── AI        /ai      ├── LinkedIn  (external)
├── ekBind    /ekbind    ├── Blog      /blog    └── YouTube   (external)
├── ekSign    /eksign    ├── Careers   /join-us
└── ekSell    /eksell    └── Contact   /contact

Legal: Terms of Use (/termsofuse) · Privacy Policy (/privacy-policy)
Offices: Singapore · UAE · India (addresses in PAGES.md, not links)
```

---

## 4. In-page anchors

| Page | Anchor | Section |
|---|---|---|
| Home | `#layers` | "The three layers" — targeted by the hero's "See the three layers" secondary CTA |

No other in-page anchors were found linked-to in the source (the product pages are long but are not internally anchor-navigated — no sticky in-page sub-nav was found in the export, unlike the assumption in the earlier, incorrect version of this documentation).

---

## 5. Cross-linking pattern

Every product page links back to the product list via a "← All layers" or "← All products" back-link (varies by page — ekShield and ekProtect say "← All layers", ekBind/ekSign/ekSell say "← All products"; both point at `/#layers` or `/` — confirm the exact target with the client, the export doesn't make this 100% unambiguous). Every page — without exception — repeats the full footer, and every page carries at least one "Book a demo" CTA to `/contact`. AI (`/ai`) is the only page with a plain "← Home" back-link instead of a product-list one.

---

## 6. Pages referenced but not included in this export

- **Terms of Use** (`/termsofuse`) — footer link exists, page content doesn't
- **Privacy Policy** (`/privacy-policy`) — footer link exists, page content doesn't
- **Individual blog posts** — `/blog` exists and is honest that its three post cards are placeholders (see `PAGES.md` §9); no post detail route/content exists yet

---

## 7. Non-route files in the export (exclude from the Next.js build entirely)

| File | What it is |
|---|---|
| `Home v1 (light).dc.html` | Superseded design draft — see `PAGES.md` §12 |
| `Nav Options.dc.html` | Internal nav-treatment exploration — see `PAGES.md` §13 |
| `Background Options.dc.html` | Internal hero-background exploration — see `PAGES.md` §13 |
| `Protect Line Options.dc.html` | Internal hero-rotator exploration — see `PAGES.md` §13 |
| `Ektar - Digital Security (standalone).html` | A pre-bundled, self-contained export of the whole `.dc` runtime + all pages, used for offline viewing of the design tool itself — not a page, not a route |
| `.thumbnail` | Export tool's own thumbnail image |
| `_ds/**` | The Modernist design-system foundation kit this site's tokens were derived from (see `DESIGN.md` §0) |
| `support.js`, `image-slot.js` | The proprietary `.dc.html` compiler/runtime — do not port |
| `uploads/*.pdf` | Real supporting collateral (ekShield whitepaper, an ADCB-specific ekSign concept note) — link to these as downloads from their respective product pages if the client wants them live, don't inline their content |
