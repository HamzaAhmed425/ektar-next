import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import SurfaceHero from "@/components/SurfaceHero";
import ScanPanel from "@/components/ScanPanel";
import DecisionEngineCallout from "@/components/DecisionEngineCallout";
import RegulatoryTailwinds from "@/components/RegulatoryTailwinds";
import { hero, threats, products, decisionEngineText, whyNow, closing } from "@/lib/content/surfaces/protect-the-app";

export const metadata: Metadata = {
  title: "Protect the App — Ektar",
  description: hero.description,
};

const THREAT_ICONS: ReactNode[] = [
  <>
    <rect x="6" y="8" width="12" height="10" />
    <path d="M9 8V5M15 8V5M3 13h3M18 13h3M6 18l-2 2M18 18l2 2" />
  </>,
  <>
    <path d="M12 3 3 7.5V17l9 4.5 9-4.5V7.5z" />
    <path d="M3 7.5 12 12l9-4.5M12 12v9.5" />
  </>,
  <>
    <path d="M4 5h16v11H4z" />
    <path d="M9 20h6" />
    <path d="M12 16v4" />
    <path d="m9 9 3 2 3-2" />
  </>,
];

export default function ProtectTheAppPage() {
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
        scanline={false}
        visual={<ScanPanel />}
        titleClassName="papp-title"
      />

      <div className="wrap">
        <section className="sec reveal">
          <span className="kicker mono">The threats</span>
          <h2 className="h2">{threats.heading}</h2>
          <div className="threats">
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
