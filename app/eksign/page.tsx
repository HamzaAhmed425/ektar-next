import type { Metadata } from "next";
import Link from "next/link";
import ProductHero from "@/components/ProductHero";
import LedgerBackground from "@/components/LedgerBackground";
import {
  hero,
  ledgerRows,
  quickFacts,
  whyInHouse,
  whatItIs,
  tracks,
  signingOrder,
  signatureLook,
  signerTypes,
  useCases,
  comparison,
  closing,
} from "@/lib/content/products/eksign";

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
        <div className="strip mono">
          {quickFacts.map((f) => (
            <div key={f.k}>
              <span className="k">{f.k}</span>
              <span className="v">{f.v}</span>
            </div>
          ))}
        </div>

        <section className="sec">
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

        <section className="sec">
          <span className="kicker mono">What ekSign is</span>
          <h2 className="h2">{whatItIs.heading}</h2>
          <div className="cards two">
            {whatItIs.cards.map((c) => (
              <div className="card2" key={c.tag}>
                <p className="tag">{c.tag}</p>
                <p className="t">{c.t}</p>
                <p className="d">{c.d}</p>
                <ul>
                  {c.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="sec">
          <span className="kicker mono">Signing journeys</span>
          <h2 className="h2">Three tracks, depending on who has to sign.</h2>
          {tracks.map((t) => (
            <div className="track" key={t.name}>
              <p className="tname">
                <b>{t.name}</b>
                <span>{t.subtitle}</span>
              </p>
              <ol className="steps">
                {t.steps.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>
            </div>
          ))}
        </section>

        <section className="sec">
          <span className="kicker mono">Signing order</span>
          <h2 className="h2">{signingOrder.heading}</h2>
          <p className="lede">{signingOrder.intro}</p>
          <div className="modes">
            {signingOrder.modes.map((m) => (
              <div className="mode" key={m.name}>
                <b>{m.name}</b>
                <p>{m.d}</p>
                <code>{m.example}</code>
              </div>
            ))}
          </div>
        </section>

        <section className="sec">
          <span className="kicker mono">What the signature looks like</span>
          <h2 className="h2">{signatureLook.heading}</h2>
          <div className="sigwrap">
            <div>
              <p className="lede" style={{ marginBottom: "var(--leading)" }}>
                {signatureLook.intro}
              </p>
              <table className="tbl">
                <tbody>
                  {signatureLook.rows.map((row) => (
                    <tr key={row[0]}>
                      <td>{row[0]}</td>
                      <td>{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="sigblock">
              <div className="head">
                <span>{signatureLook.sample.seq}</span>
                <span>{signatureLook.sample.role}</span>
              </div>
              <div className="sigrow">
                <span>Signed by</span>
                <span>{signatureLook.sample.signedBy}</span>
              </div>
              <div className="sigrow">
                <span>Date &amp; time</span>
                <span>{signatureLook.sample.date}</span>
              </div>
              <div className="sigrow">
                <span>Authenticated via</span>
                <span>{signatureLook.sample.auth}</span>
              </div>
              <div className="sigrow">
                <span>Reference</span>
                <span>{signatureLook.sample.ref}</span>
              </div>
              <div className="sigrow ok">
                <span>Status</span>
                <span>{signatureLook.sample.status}</span>
              </div>
              <div className="sealrow">
                Document hash (SHA-256) <b>{signatureLook.sample.hash}</b>
                <br />
                Tamper-evident seal over all content and signatures
              </div>
            </div>
          </div>
        </section>

        <section className="sec">
          <span className="kicker mono">Authentication by signer type</span>
          <h2 className="h2">{signerTypes.heading}</h2>
          <table className="tbl">
            <thead>
              <tr>
                {signerTypes.columns.map((c) => (
                  <th key={c}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {signerTypes.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="sec">
          <span className="kicker mono">Priority use cases</span>
          <h2 className="h2">{useCases.heading}</h2>
          <table className="tbl">
            <thead>
              <tr>
                {useCases.columns.map((c) => (
                  <th key={c}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {useCases.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="sec">
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

      <section className="close">
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
