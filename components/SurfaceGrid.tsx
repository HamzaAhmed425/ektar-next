import Link from "next/link";
import DecisionEngineCallout from "@/components/DecisionEngineCallout";
import { surfaceGrid, decisionEngineCallout } from "@/lib/content/home";

const ICONS: React.ReactNode[] = [
  <>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
  </>,
  <>
    <rect x="5" y="2" width="14" height="20" />
    <path d="M10 18h4" />
    <path d="M9 7h6" />
    <path d="M9 11h6" />
  </>,
  <>
    <path d="M8 3H5v18h14V3h-3" />
    <path d="M9 3h6v3H9z" />
    <path d="m10 13 2 2 3-4" />
  </>,
];

export default function SurfaceGrid() {
  return (
    <section className="sec" id="layers">
      <span className="kicker mono">How Ektar protects you</span>
      <h2 className="h2">{surfaceGrid.heading}</h2>
      <p className="lede">{surfaceGrid.intro}</p>

      {surfaceGrid.surfaces.map((s, i) => (
        <div className="layer" key={s.num}>
          <span className="iconbox">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {ICONS[i]}
            </svg>
          </span>
          <p className="lnum">
            Protect the
            <span>{s.label}</span>
          </p>
          <div>
            <h3 className="ltitle">{s.products}</h3>
            <p className="lcopy">{s.copy}</p>
            <ul className="dets">
              {s.threats.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="pulsebar">
              <i />
            </div>
          </div>
          <Link className="go mono" href={s.href}>
            Open →
          </Link>
        </div>
      ))}

      <DecisionEngineCallout text={decisionEngineCallout} />
    </section>
  );
}
