import type { Metadata } from "next";
import Link from "next/link";
import JoinForm from "@/components/JoinForm";
import { hero, whereWeWork } from "@/lib/content/careers";

export const metadata: Metadata = {
  title: "Careers — Ektar",
  description: hero.sub,
};

export default function CareersPage() {
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
                <span>Ektar · where we work</span>
                <span>Open applications</span>
              </div>
              <div className="vbody">
                {whereWeWork.map((row, i) => (
                  <div className="vrow" key={row.label}>
                    <span className="ic">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {i < 3 ? (
                          <>
                            <path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" />
                            <circle cx="12" cy="10" r="2.5" />
                          </>
                        ) : (
                          <>
                            <rect x="2" y="4" width="20" height="16" />
                            <path d="m2 6 10 7 10-7" />
                          </>
                        )}
                      </svg>
                    </span>
                    <span>
                      <b>{row.label}</b>
                    </span>
                    <span className="ok">{row.tag}</span>
                  </div>
                ))}
              </div>
              <div className="vnote">
                Send your details and resume — <b>we reply when a role fits</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <section className="sec">
          <span className="kicker mono">Join us</span>
          <JoinForm />
        </section>
      </div>
    </>
  );
}
