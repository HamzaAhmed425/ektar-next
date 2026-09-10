# reference/ — real source files, unaltered (v3)

Everything here is copied verbatim from the client's latest export (`Copy_of_ektar_com_Website_Design.zip`). Nothing has been rewritten or resolved — see `CLAUDE.md` §3 for why the `.dc.html` format needs its own proprietary runtime and shouldn't be rendered directly.

- **`pages/`** — all 15 real, live site pages (`.dc.html`) plus `site.js`, the real plain-JS nav/theme logic (updated in this version — see `DESIGN.md` §5.3 for what changed). This is what `PAGES.md` and `DESIGN.md` were transcribed from.
- **`design-tokens.css`** — the real design-system stylesheet. Confirmed byte-for-byte identical to the previous export — no token values changed in this update.
- **`assets/`** — the real logo and office-flag images, unchanged from the previous export.

This export is leaner than the previous one — no design-exploration pages, no superseded draft, no standalone bundle, no supporting PDFs. Just the 15 live pages plus the two runtime-support scripts (`support.js`, `image-slot.js` — included alongside `site.js` in `pages/` but not to be ported; see `CLAUDE.md`).
