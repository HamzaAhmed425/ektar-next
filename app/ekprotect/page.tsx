import type { Metadata } from "next";
import Link from "next/link";
import ProductHero from "@/components/ProductHero";
import IntrusionGrid from "@/components/IntrusionGrid";
import { hero, quickFacts, capabilities, riskDecisioning, closing } from "@/lib/content/products/ekprotect";

export const metadata: Metadata = {
  title: "ekProtect — Attestation & runtime defence | Ektar",
  description: hero.description,
};

export default function EkProtectPage() {
  return (
    <>
      <ProductHero
        statusText={hero.statusText}
        title={hero.title}
        description={hero.description}
        backLabel="← All layers"
        motif={<IntrusionGrid />}
        visual={
          <div className="viz">
            <div className="vhead">
              <span>ekProtect · runtime state</span>
              <span>Illustrative</span>
            </div>
            <div className="vbody">
              <div className="gauge">
                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" strokeWidth="6">
                  <circle cx="38" cy="38" r="32" stroke="color-mix(in srgb,var(--paper) 14%,transparent)" />
                  <circle
                    cx="38"
                    cy="38"
                    r="32"
                    stroke="var(--color-accent)"
                    strokeDasharray="201"
                    strokeDashoffset="177"
                    strokeLinecap="butt"
                    transform="rotate(-90 38 38)"
                  />
                </svg>
                <span>
                  <span className="num">12</span>
                  <span className="cap">Session risk score</span>
                </span>
              </div>
              <div className="vrow">
                <span className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2 3 6v6c0 5 3.5 8.5 9 10 5.5-1.5 9-5 9-10V6z" />
                  </svg>
                </span>
                <span>
                  <b>App &amp; device attestation</b>
                </span>
                <span className="ok">Pass</span>
              </div>
              <div className="vrow">
                <span className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="5" y="2" width="14" height="20" />
                    <path d="M9 18h6" />
                  </svg>
                </span>
                <span>
                  <b>Overlay attack</b>
                </span>
                <span className="ok">Blocked</span>
              </div>
              <div className="vrow">
                <span className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="6" y="6" width="12" height="12" />
                    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
                  </svg>
                </span>
                <span>
                  <b>Remote access tool</b>
                </span>
                <span className="ok">Suspended</span>
              </div>
              <div className="vrow">
                <span className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                    <rect x="3" y="10" width="18" height="11" />
                  </svg>
                </span>
                <span>
                  <b>Rooted device</b>
                </span>
                <span className="ok">Denied</span>
              </div>
            </div>
            <div className="vnote">
              Signals from every layer feed <b>one score, per transaction</b>
            </div>
          </div>
        }
      />

      <div className="wrap pt-10! pb-10! mt-10! mb-10!">
        <div className="strip mono">
          {quickFacts.map((f) => (
            <div key={f.k}>
              <span className="k">{f.k}</span>
              <span className="v">{f.v}</span>
            </div>
          ))}
        </div>

        <section className="sec reveal">
          <span className="kicker mono">Attestation &amp; detection</span>
          <h2 className="h2">What ekProtect detects and stops</h2>
          <div className="cards">
            {capabilities.map((c) => (
              <div className="card2" key={c.tag}>
                <p className="tag mono">{c.tag}</p>
                <p className="t">{c.t}</p>
                <p className="d">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sec reveal">
          <span className="kicker mono">Risk decisioning</span>
          <h2 className="h2">{riskDecisioning.heading}</h2>
          <p className="lede">{riskDecisioning.intro}</p>
          <div className="cards two">
            {riskDecisioning.cards.map((c) => (
              <div className="card2" key={c.tag}>
                <p className="tag mono">{c.tag}</p>
                <p className="t">{c.t}</p>
                <p className="d">{c.d}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="close reveal">
        <div className="wrap pt-10! pb-10! mt-10! mb-10!">
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
