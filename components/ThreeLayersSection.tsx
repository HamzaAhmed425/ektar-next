import React from "react";
import Link from "next/link";
import { threeLayers } from "@/lib/content/home";

const ICONS: React.ReactNode[] = [
  <React.Fragment key="shield">
    <path d="M7 10V7a5 5 0 0 1 10 0v3" />
    <rect x="3" y="10" width="18" height="11" />
    <circle cx="12" cy="15.5" r="1.5" />
  </React.Fragment>,
  <React.Fragment key="protect">
    <rect x="5" y="2" width="14" height="20" />
    <path d="M9 18h6" />
    <path d="M9 8h6" />
    <path d="M9 12h6" />
  </React.Fragment>,
  <React.Fragment key="sign">
    <path d="M15 2H6v20h12V7zM14 2v5h5" />
    <path d="m9 14 2 2 4-4" />
  </React.Fragment>,
];

export default function ThreeLayersSection() {
  return (
    <section className="sec" id="layers">
      <span className="kicker mono">The three layers</span>
      <h2 className="h2">{threeLayers.heading}</h2>
      <p className="lede">{threeLayers.intro}</p>

      {threeLayers.layers.map((layer, i) => (
        <div className="layer [padding-left:0px]! [padding-right:0px]!" key={layer.num}>
          <span className="iconbox">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {ICONS[i]}
            </svg>
          </span>
          <p className="lnum">
            Layer {layer.num}
            <span>{layer.title}</span>
          </p>
          <div>
            <h3 className="ltitle">{layer.subtitle}</h3>
            <p className="lcopy">{layer.copy}</p>
            <div className="pulsebar">
              <i />
            </div>
          </div>
          <Link className="go mono" href={layer.href}>
            Open →
          </Link>
        </div>
      ))}

      <div className="signal">
        <div>
          <p className="lbl">Shared signal layer</p>
          <p>{threeLayers.signal.replace("Shared signal layer — ", "")}</p>
        </div>
        <div className="flowbar" />
      </div>
    </section>
  );
}
