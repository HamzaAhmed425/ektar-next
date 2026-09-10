# SITEMAP.md — Ektar Route Tree (v3)

Derived by tracing every `href`/`onclick="location.href=…"` actually present in the latest export's `.dc.html` files. Supersedes the v2 sitemap — the nav structure changed from a flat product list to a 3-way surface-based mega-dropdown, and five new pages were added while one was removed.

---

## 1. Route tree

```
/                        Home                      index.dc.html
├── /ekshield            ekShield                  authentication.dc.html
├── /ekprotect           ekProtect                 ekprotect.dc.html
├── /ekbind              ekBind                    ekbind.dc.html
├── /eksign              ekSign                    eksign.dc.html
├── /eksell              ekSell                    eksell.dc.html
├── /ekkey               ekKey                     ekkey.dc.html            ← NEW
├── /ekpulse             ekPulse                   ekpulse.dc.html          ← NEW
├── /ekrules             ekRules                   ekrules.dc.html          ← NEW
├── /protect-the-user    Protect the User          protect-the-user.dc.html ← NEW
├── /protect-the-device  Protect the Device        protect-the-device.dc.html ← NEW
├── /protect-the-app     Protect the App           protect-the-app.dc.html  ← NEW
├── /about               About                     about.dc.html
├── /investors            Investors                 investors.dc.html       ← NEW
├── /blog                 Blog (placeholder posts) blog.dc.html
├── /join-us              Careers                  careers.dc.html
├── /contact              Contact                  contact.dc.html
├── /termsofuse            Terms of Use             (linked from footer; not in this export)
└── /privacy-policy        Privacy Policy           (linked from footer; not in this export)
```

**`/ai` is retired** — not present in this export. If it exists in a live deployment from before, treat it as removed; don't rebuild it, and remove any lingering link to it.

15 real pages now (was 10 in v2): +6 new (ekKey, ekPulse, ekRules, Protect the User/Device/App, Investors — that's actually 7 new; -1 removed (AI) nets to +6 net new routes.

Same filename-vs-route-name inconsistency as v2: the source file for ekShield is `authentication.dc.html`. Keep using `/ekshield` as the route for consistency with every nav label and cross-link — don't mirror the filename.

---

## 2. Primary navigation (topbar, every page) — restructured

```
Home
Protect the User   ▾
  ekShield   — Authentication
  ekKey      — Passkeys
  ekSign     — Document signing
  ekPulse    — Behavioural biometrics
Protect the Device ▾
  ekBind     — SIM & network trust
  ekProtect  — Device integrity
  ekShield   — Authentication
Protect the App    ▾
  ekProtect  — Runtime & app integrity
  ekPulse    — Behavioural signals
About
[theme toggle]
[Book a demo] → /contact
```

Five top-level items (was 8 flat product links + AI + About in v2), three of which open a dropdown. **ekShield, ekProtect, and ekPulse each appear in more than one dropdown** — a product can belong to multiple surfaces; model this as a many-to-many relationship in your content layer, not a single "category" field per product.

**ekKey, ekRules, ekSell, Investors are not in the primary nav at all** — reachable only via dropdown (ekKey), the homepage's "trust suite" list and cross-links from other pages (ekRules), the footer (ekSell, Investors), or in-page callouts (ekRules is linked from nearly every product/surface page's "One decision engine" callout even though it has no nav entry of its own).

---

## 3. Footer navigation (every page)

```
Products                 Company              Contact
├── ekShield  /ekshield   ├── About us  /about  ├── Talk to us → /contact
├── ekProtect /ekprotect  ├── Blog      /blog    ├── LinkedIn  (external)
├── ekBind    /ekbind     ├── Careers   /join-us └── YouTube   (external)
├── ekSign    /eksign     ├── Investors /investors
├── ekSell    /eksell     └── Contact   /contact
├── ekKey     /ekkey
├── ekPulse   /ekpulse
└── ekRules   /ekrules

Legal: Terms of Use (/termsofuse) · Privacy Policy (/privacy-policy)
Offices: Singapore · UAE · India
```

Products column now 8 items (was 5). Company column swaps AI out for Investors (was: About us/AI/Blog/Careers/Contact; now: About us/Blog/Careers/Investors/Contact).

---

## 4. In-page anchors

| Page | Anchor | Section |
|---|---|---|
| Home | `#solutions` | "The trust suite" — targeted by the hero's "See the suite" secondary CTA |

Same single-anchor pattern as v2 (the old `#layers` anchor is gone along with the homepage's old "three layers" section — its role is now split across the three `/protect-the-*` pages).

---

## 5. Cross-linking pattern

- Every product page still carries a back-link ("← All layers" or "← All products", inconsistent target as in v2 — confirm exact href per page rather than assuming).
- **New pattern: the "One decision engine" callout.** Appears on the homepage and all three `/protect-the-*` surface pages, always describing how that page's signals feed into ekRules. ekRules itself has no such callout (it *is* the destination). Model this as a reusable component that every surface-adjacent page includes, pointing at `/ekrules`.
- **New pattern: tier badges.** ekBind, ekKey, ekPulse, ekRules, and ekSell each show a small status badge ("Shipping 2026", "Building now", "Live") on their own page, matching their tier in the homepage's "trust suite" listing. ekShield and ekProtect don't show this badge (they're already-live products, signalled through their main status pill instead).
- **New pattern: explicit cross-sell.** ekProtect's page explicitly links to ekPulse ("Full malware tracking, elimination, and behavioural analysis run on ekPulse — see how →") since ekProtect's own scope narrowed. This is the only explicit product-to-product cross-sell link found in the export; don't invent similar ones for other product pairs without source backing.
- Every page still repeats the full footer and carries at least one "Book a demo" CTA to `/contact` — except Careers and Investors, whose primary CTA language is "Get in touch" (same destination, different label — see `PAGES.md` §16).

---

## 6. Pages referenced but not included in this export

- **Terms of Use** (`/termsofuse`) — footer link exists, page content doesn't
- **Privacy Policy** (`/privacy-policy`) — footer link exists, page content doesn't
- **Individual blog posts** — `/blog` exists and is honest that its three post cards are placeholders

---

## 7. Files present in the export but not routes

Unlike the v2 export, this one is leaner — no design-exploration pages, no superseded draft, no standalone bundle, no uploads/PDFs. Only tooling is non-route:

| File | What it is |
|---|---|
| `_ds/**` | The Modernist design-system foundation kit — source of the tokens in `DESIGN.md` §1, not a page |
| `support.js`, `image-slot.js` | The proprietary `.dc.html` compiler/runtime — do not port (`CLAUDE.md` §3) |

`site.js` **is** a route-relevant file — it's the real nav/theme logic, port it directly.
