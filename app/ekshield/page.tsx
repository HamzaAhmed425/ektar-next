import type { Metadata } from "next";
import Link from "next/link";
import ProductHero from "@/components/ProductHero";
import PhoneApprovalFlow from "@/components/PhoneApprovalFlow";
import HashRain from "@/components/HashRain";
import {
  hero,
  quickFacts,
  capabilities,
  securityArchitecture,
  applicationControls,
  deviceLock,
  regulatory,
  closing,
} from "@/lib/content/products/ekshield";

export const metadata: Metadata = {
  title: "ekShield — Device-bound authentication | Ektar",
  description: hero.description,
};

export default function EkShieldPage() {
  return (
    <>
      <ProductHero
        statusText={hero.statusText}
        title={hero.title}
        description={hero.description}
        backLabel="← All layers"
        motif={
          <div className="cipherbg" aria-hidden="true">
            <HashRain className="rain" />
          </div>
        }
        visual={<PhoneApprovalFlow />}
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
          <span className="kicker mono">Capabilities</span>
          <h2 className="h2">What ekShield replaces SMS OTP with</h2>
          <div className="cards">
            {capabilities.map((c) => (
              <div className="card2" key={c.tag}>
                <p className="tag mono">{c.tag}</p>
                <p className="t">{c.t}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sec reveal">
          <span className="kicker mono">Security architecture</span>
          <h2 className="h2">{securityArchitecture.heading}</h2>
          <p className="lede">{securityArchitecture.intro}</p>
          <table className="tbl">
            <thead>
              <tr>
                <th>What we protect</th>
                <th>How it is protected</th>
              </tr>
            </thead>
            <tbody>
              {securityArchitecture.rows.map((r) => (
                <tr key={r.what}>
                  <td>{r.what}</td>
                  <td>{r.how}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="confnote">{securityArchitecture.note}</p>
        </section>

        <section className="sec reveal">
          <span className="kicker mono">Application controls</span>
          <h2 className="h2">Policy enforced on the device, not just the server.</h2>
          <div className="cards">
            {applicationControls.map((c) => (
              <div className="card2" key={c.tag}>
                <p className="tag mono">{c.tag}</p>
                <p className="t">{c.t}</p>
                <p className="d">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sec reveal">
          <span className="kicker mono">Device lock requirement</span>
          <h2 className="h2">{deviceLock.heading}</h2>
          <p className="lede">{deviceLock.intro}</p>
          <table className="tbl">
            <thead>
              <tr>
                {deviceLock.columns.map((c) => (
                  <th key={c}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {deviceLock.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="sec reveal">
          <span className="kicker mono">Regulatory tailwinds</span>
          <h2 className="h2">Regulators are ordering the upgrade.</h2>
          <p className="lede">
            Across the GCC, South Asia, and Southeast Asia, regulators have banned SMS OTP, mandated passkeys, and
            required real-time malware detection. Every bank in these markets needs what Ektar builds — and many
            have a hard deadline to decide.
          </p>
          <div className="mgrid">
            {regulatory.map((r) => (
              <div className="mrow" key={r.market}>
                <span className="sq" />
                <p>
                  <strong>
                    {r.market} — {r.regulation}.
                  </strong>{" "}
                  {r.requirement}
                </p>
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
