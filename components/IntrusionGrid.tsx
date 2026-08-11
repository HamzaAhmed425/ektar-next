"use client";

import { useEffect, useRef } from "react";

// ekProtect hero background — a cell grid where random cells flag and fade,
// suggesting scanning/detection (DESIGN.md §5.4). Ported from the export's
// `.cellbg` grid of <i> cells with per-cell inline style, originally driven
// by a JS loop that periodically "flags" a handful of cells.
const CELL_COUNT = 160;

export default function IntrusionGrid() {
  const cellRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      const flagCount = 1 + Math.floor(Math.random() * 3);
      for (let n = 0; n < flagCount; n++) {
        const i = Math.floor(Math.random() * CELL_COUNT);
        const el = cellRefs.current[i];
        if (!el) continue;
        el.style.background = "color-mix(in srgb, var(--color-accent) 22%, transparent)";
        el.style.borderColor = "var(--color-accent)";
        el.style.boxShadow = "0 0 0 1px color-mix(in srgb, var(--color-accent) 40%, transparent)";
        setTimeout(() => {
          if (!el) return;
          el.style.background = "";
          el.style.borderColor = "";
          el.style.boxShadow = "";
        }, 1600);
      }
    }, 450);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="cellbg" aria-hidden="true">
      {Array.from({ length: CELL_COUNT }, (_, i) => (
        <i key={i} ref={(el) => { cellRefs.current[i] = el; }} />
      ))}
    </div>
  );
}
