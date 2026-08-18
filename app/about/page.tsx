import type { Metadata } from "next";
import Link from "next/link";
import { hero, atAGlance, liveNotTheoretical, vision, mission, closing } from "@/lib/content/about";
import TeamSection from "@/components/TeamSection";

export const metadata: Metadata = {
  title: "About — Ektar",
  description: hero.sub,
};

export default function AboutPage() {
  return (
    <>
      <section className="stage">
        <div className="mesh" />
        <div className="glow" />
        <div className="scan" />
        <div className="wrap pt-10! pb-10! mt-10! mb-10!">
          <div className="hero">
            <div className="reveal">
              <p className="status mono">
                <span className="dot" />
                {hero.statusText}
              </p>
              <h1 className="display">{hero.title}</h1>
              <p className="sub">{hero.sub}</p>
            </div>
            <div className="viz reveal">
              <div className="vhead">
                <span>Ektar · at a glance</span>
                <span>Since 2022</span>
              </div>
              <div className="vbody">
                <div className="vrow">
                  <span className="ic">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2 3 6v6c0 5 3.5 8.5 9 10 5.5-1.5 9-5 9-10V6z" />
                    </svg>
                  </span>
                  <span>
                    <b>Founded</b>
                  </span>
                  <span className="ok">2022</span>
                </div>
                <div className="vrow">
                  <span className="ic">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <rect x="5" y="2" width="14" height="20" />
                      <path d="M9 18h6" />
                    </svg>
                  </span>
                  <span>
                    <b>Founders</b>
                  </span>
                  <span className="ok">3 ex-bankers</span>
                </div>
                <div className="vrow">
                  <span className="ic">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3 12h18" />
                      <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" />
                    </svg>
                  </span>
                  <span>
                    <b>Markets</b>
                  </span>
                  <span className="ok">GCC · South Asia · SEA</span>
                </div>
                <div className="vrow">
                  <span className="ic">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>
                  <span>
                    <b>Offices</b>
                  </span>
                  <span className="ok">Dubai · Singapore · Chennai</span>
                </div>
              </div>
              <div className="vnote">
                Standard Chartered leadership backgrounds — <b>we have run the channels we now secure</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap pt-10! pb-10! mt-10! mb-10!">
        <div className="strip mono">
          {atAGlance.map((f) => (
            <div key={f.k}>
              <span className="k">{f.k}</span>
              <span className="v">{f.v}</span>
            </div>
          ))}
        </div>

        <section className="sec reveal">
          <div className="split">
            <div>
              <h3>{liveNotTheoretical.heading}</h3>
              <p>{liveNotTheoretical.body}</p>
            </div>
            <img className="ss-img-afbe" src="/Group-27-1-1024x294-1.webp" alt="Placeholder" />
          </div>
        </section>

        <section className="sec reveal">
          <span className="kicker mono">Vision &amp; mission</span>
          <div className="vm-grid">
            <div>
              <h3>Our Vision</h3>
              <p>{vision}</p>
            </div>
            <div>
              <h3>Our Mission</h3>
              <p>{mission}</p>
            </div>
          </div>
        </section>

        <div className="reveal">
          <TeamSection />
        </div>
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
