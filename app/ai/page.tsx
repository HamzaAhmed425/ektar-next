import type { Metadata } from "next";
import Link from "next/link";
import { hero, whereAiSits, closing } from "@/lib/content/ai";

export const metadata: Metadata = {
  title: "AI at Ektar",
  description: hero.sub,
};

export default function AiPage() {
  return (
    <>
      <section className="stage">
        <div className="mesh" />
        <div className="glow" />
        <div className="scan" />
        <div className="wrap">
          <div className="hero">
            <div>
              <p className="status mono">
                <span className="dot" />
                {hero.statusText}
              </p>
              <h1 className="display">{hero.title}</h1>
              <p className="sub">{hero.sub}</p>
              <div className="row">
                <Link href="/contact" className="btn btn-primary">
                  Book a demo
                </Link>
                <Link href="/" className="btn btn-ghost btn-onink">
                  ← Home
                </Link>
              </div>
            </div>
            <div className="viz">
              <div className="vhead">
                <span>AI at Ektar</span>
                <span>Two places</span>
              </div>
              <div className="vbody">
                <div className="vrow">
                  <span className="ic">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 2H6v20h12V7z" />
                      <path d="M14 2v5h5" />
                    </svg>
                  </span>
                  <span>
                    <b>ekSign — fraud pattern detection</b>
                  </span>
                  <span className="ok">AI-assisted</span>
                </div>
                <div className="vrow">
                  <span className="ic">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <rect x="5" y="2" width="14" height="20" />
                      <path d="M9 18h6" />
                    </svg>
                  </span>
                  <span>
                    <b>RASP SDK — behavioural analysis</b>
                  </span>
                  <span className="ok">Runtime</span>
                </div>
                <div className="vrow">
                  <span className="ic">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <rect x="6" y="6" width="12" height="12" />
                      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
                    </svg>
                  </span>
                  <span>
                    <b>Fraud &amp; Risk Engine</b>
                  </span>
                  <span className="ok">ML-driven</span>
                </div>
                <div className="vrow">
                  <span className="ic">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2 3 6v6c0 5 3.5 8.5 9 10 5.5-1.5 9-5 9-10V6z" />
                    </svg>
                  </span>
                  <span>
                    <b>Engineering practice</b>
                  </span>
                  <span className="ok">AI-assisted</span>
                </div>
              </div>
              <div className="vnote">
                <b>Human engineers accountable</b> for every design decision, security control and integration point
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <section className="sec">
          <span className="kicker mono">Where AI sits</span>
          <div className="cards two">
            {whereAiSits.map((c) => (
              <div className="card2" key={c.tag}>
                <p className="tag mono">{c.tag}</p>
                <p className="t">{c.t}</p>
                <p className="d">{c.d}</p>
              </div>
            ))}
          </div>
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
