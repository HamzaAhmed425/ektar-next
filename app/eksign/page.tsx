import type { Metadata } from "next";
import Link from "next/link";
import ProductHero from "@/components/ProductHero";
import LedgerBackground from "@/components/LedgerBackground";
import { hero, ledgerRows, whyInHouse, howItWorks, whoCanSign, comparison, closing } from "@/lib/content/products/eksign";

export const metadata: Metadata = {
  title: "ekSign — In-channel document signing | Ektar",
  description: hero.description,
};

export default function EkSignPage() {
  return (
    <>
      <ProductHero
        statusText={hero.statusText}
        title={hero.title}
        description={hero.description}
        backLabel="← All products"
        motif={<LedgerBackground rows={ledgerRows} />}
        visual={
          <div className="viz">
            <div className="vhead">
              <span>ekSign · execution status</span>
              <span>2 of 3 signed</span>
            </div>
            <div className="vbody">
              {[
                { label: "Primary borrower", status: "Signed" },
                { label: "Co-borrower", status: "Signed" },
                { label: "Guarantor", status: "Awaiting" },
              ].map((row) => (
                <div className="vrow" key={row.label}>
                  <span className="ic">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 2H6v20h12V7z" />
                      <path d="M14 2v5h5" />
                    </svg>
                  </span>
                  <span>
                    <b>{row.label}</b>
                  </span>
                  <span className="ok">{row.status}</span>
                </div>
              ))}
              <div className="vrow">
                <span className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                    <rect x="3" y="10" width="18" height="11" />
                  </svg>
                </span>
                <span>
                  <b>Authentication</b>
                </span>
                <span className="ok">Bank MFA · national ID</span>
              </div>
            </div>
            <div className="vnote">
              Seal <b>SHA-256 a3f9·c2d1·e4b8</b> — any alteration after signing fails verification
            </div>
          </div>
        }
      />

      <div className="wrap">
        <section className="sec reveal">
          <span className="kicker mono">Why banks move signing in-house</span>
          <h2 className="h2">{whyInHouse.heading}</h2>
          <p className="lede">{whyInHouse.intro}</p>
          <div className="cards">
            {whyInHouse.cards.map((c) => (
              <div className="card2" key={c.tag}>
                <p className="tag">{c.tag}</p>
                <p className="t">{c.t}</p>
                <p className="d">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sec reveal">
          <span className="kicker mono">How it works</span>
          <h2 className="h2">{howItWorks.heading}</h2>
          <p className="lede">{howItWorks.intro}</p>
          <div className="cards">
            {howItWorks.items.map((c) => (
              <div className="card2" key={c.tag} style={c.span2 ? { gridColumn: "span 2" } : undefined}>
                <p className="tag mono">{c.tag}</p>
                <p className="t">{c.t}</p>
                <p className="d">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sec reveal">
          <span className="kicker mono">Who can sign, and how</span>
          <h2 className="h2">{whoCanSign.heading}</h2>
          <div className="cards">
            {whoCanSign.items.map((c) => (
              <div className="card2" key={c.tag}>
                <p className="tag mono">{c.tag}</p>
                <p className="t">{c.t}</p>
                <p className="d">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sec reveal">
          <span className="kicker mono">ekSign vs a third-party portal</span>
          <h2 className="h2">{comparison.heading}</h2>
          <table className="tbl">
            <thead>
              <tr>
                {comparison.columns.map((c) => (
                  <th key={c}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
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
