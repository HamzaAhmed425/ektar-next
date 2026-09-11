import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import SurfaceHero from "@/components/SurfaceHero";
import AttestPanel from "@/components/AttestPanel";
import DecisionEngineCallout from "@/components/DecisionEngineCallout";
import RegulatoryTailwinds from "@/components/RegulatoryTailwinds";
import { hero, threats, products, decisionEngineText, whyNow, closing } from "@/lib/content/surfaces/protect-the-device";

export const metadata: Metadata = {
  title: "Protect the Device — Ektar",
  description: hero.description,
};

const THREAT_ICONS: ReactNode[] = [
  <>
    <path d="M6 3h8l4 4v14H6z" />
    <rect x="9" y="12" width="6" height="5" />
  </>,
  <>
    <path d="M4 6h16v10H4z" />
    <path d="M8 20h8" />
    <path d="m10 10 4 2-4 2z" />
  </>,
  <>
    <rect x="5" y="2" width="14" height="20" />
    <path d="m9 12 6 6" />
    <path d="m15 12-6 6" />
  </>,
  <>
    <rect x="3" y="4" width="14" height="12" />
    <rect x="8" y="9" width="13" height="11" />
  </>,
];

export default function ProtectTheDevicePage() {
  return (
    <>
      <SurfaceHero
        statusText={hero.statusText}
        title={
          <>
            <span className="line">{hero.titleLine1}</span>
            <span className="line">{hero.titleLine2}</span>
            <span className="line">
              <em>{hero.titleEmphasis}</em>
            </span>
          </>
        }
        description={hero.description}
        visual={<AttestPanel />}
        titleClassName="pdev-title"
      />

      <div className="wrap">
        <section className="sec reveal">
          <span className="kicker mono">The threats</span>
          <h2 className="h2">{threats.heading}</h2>
          <div className="threats" style={{ gridTemplateColumns: "repeat(2, minmax(0,1fr))" }}>
            {threats.items.map((t, i) => (
              <div className="threat" key={t.name}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {THREAT_ICONS[i]}
                </svg>
                <p className="n">{t.name}</p>
                <p className="d">{t.detail}</p>
                <p className="st">{t.tag}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sec reveal">
          <span className="kicker mono">The products</span>
          <h2 className="h2">{products.heading}</h2>
          <div className="solpanel">
            {products.items.map((p) => (
              <Link key={p.href} href={p.href} className="sol">
                <span className="num mono">{p.num}</span>
                <span className="nm">{p.name}</span>
                <span className="role">{p.role}</span>
                <p className="d">{p.description}</p>
              </Link>
            ))}
          </div>
          <DecisionEngineCallout text={decisionEngineText} />
        </section>

        <div className="reveal">
          <RegulatoryTailwinds heading={whyNow.heading} rows={whyNow.rows} />
        </div>
      </div>

      <section className="close reveal">
        <div className="wrap">
          <h3>{closing.heading}</h3>
          <div className="row">
            <Link href="/contact" className="btn btn-primary">
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
