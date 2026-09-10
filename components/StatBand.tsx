"use client";

import { useEffect, useRef } from "react";
import { statBand } from "@/lib/content/home";

// Numbers count up from 0 once scrolled into view, then hold at the final
// formatted value — ported from index.dc.html's countUp() (data-count /
// data-prefix / data-suffix), which DESIGN.md flagged as unverified from
// CSS alone; the export's own component script confirms it's real.
const COUNTS: { count: number; prefix?: string; suffix?: string }[] = [
  { count: 485, prefix: "$", suffix: "B" },
  { count: 93, suffix: "%" },
  { count: 12, prefix: "+", suffix: "x" },
];

export default function StatBand() {
  const refs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const nodes = refs.current.filter((el): el is HTMLParagraphElement => !!el);
    if (!nodes.length) return;

    function run(el: HTMLParagraphElement, i: number) {
      const { count, prefix = "", suffix = "" } = COUNTS[i];
      const dur = 1100;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = prefix + Math.round(count * eased).toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = nodes.indexOf(entry.target as HTMLParagraphElement);
            run(entry.target as HTMLParagraphElement, i);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section className="sec">
      <span className="kicker mono">Why it matters</span>
      <h2 className="h2">{statBand.heading}</h2>
      <div className="metrics">
        {statBand.stats.map((s, i) => (
          <div className="metric" key={s.tag}>
            <p className="tag">{s.tag}</p>
            <p className="n" ref={(el) => { refs.current[i] = el; }}>
              {s.n}
            </p>
            <p className="lbl">{s.label}</p>
            <p className="cp">{s.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
