import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { hero, quickContact, offices, email } from "@/lib/content/contact";

export const metadata: Metadata = {
  title: "Contact — Ektar",
  description: hero.sub,
};

export default function ContactPage() {
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
            </div>
            <div className="viz">
              <div className="vhead">
                <span>Ektar · get in touch</span>
                <span>Channel open</span>
              </div>
              <div className="vbody">
                {quickContact.map((row, i) => (
                  <div className="vrow" key={row.label}>
                    <span className="ic">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {i === 0 && (
                          <>
                            <rect x="2" y="4" width="20" height="16" />
                            <path d="m2 6 10 7 10-7" />
                          </>
                        )}
                        {i === 1 && (
                          <>
                            <path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" />
                            <circle cx="12" cy="10" r="2.5" />
                          </>
                        )}
                        {i === 2 && <path d="M12 2 3 6v6c0 5 3.5 8.5 9 10 5.5-1.5 9-5 9-10V6z" />}
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
                Tell us which layer is hurting — <b>login, app, SIM or document</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="layout">
          <div className="pane">
            <span className="kicker mono">Request a demo</span>
            <ContactForm />
          </div>
          <div className="pane">
            <span className="kicker mono">Offices</span>
            {offices.map((o) => (
              <div className="office" key={o.name}>
                <h4>{o.name}</h4>
                <p>{o.address}</p>
              </div>
            ))}
            <div className="office">
              <h4>Email</h4>
              <p>
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
