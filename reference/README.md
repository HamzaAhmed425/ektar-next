# reference/ — real source files, unaltered

Everything in this folder is copied verbatim from the client's theme export (`ektar_com.zip`). Nothing here has been rewritten, resolved, or "cleaned up" — treat it as ground truth to check against, not something to render directly (see `CLAUDE.md` §3 on why the `.dc.html` format needs its own proprietary runtime to actually execute).

- **`pages/`** — the 10 real, live site pages (`.dc.html`) plus `site.js`, the real plain-JS nav/theme logic. This is what `PAGES.md` and `DESIGN.md` were transcribed from.
- **`design-exploration/`** — the superseded "Home v1 (light)" draft and three internal option-exploration pages (nav, hero background, hero rotator). Historical reference only — see `PAGES.md` §12–13 for what shipped instead.
- **`design-tokens.css`** — the real, complete design-system stylesheet every color/spacing/radius value in `DESIGN.md` §1–4 was read from.
- **`assets/`** — the real logo and office-flag images.
- **`screenshots/`** — four real rendered screenshots (ekShield hero, footer, and two others) used to visually verify the CSS reading — cross-reference these against `DESIGN.md` when in doubt about how something actually looks.
