import React from "react";
import { cryptoProof } from "@/lib/content/home";

const STEP_ICONS: React.ReactNode[] = [
  <React.Fragment key="a">
    <circle cx="7.5" cy="15.5" r="4.5" />
    <path d="m10.5 12.5 8-8" />
    <path d="m15 4h5v5" />
  </React.Fragment>,
  <React.Fragment key="b">
    <rect x="4" y="4" width="16" height="16" />
    <path d="M8 8h3v3H8z" />
    <path d="M16 16h.01" />
    <path d="M13 13h3v3" />
  </React.Fragment>,
  <React.Fragment key="c">
    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    <path d="m8 12 3 3 5-6" />
  </React.Fragment>,
];

export default function CryptoProofVisual() {
  return (
    <section className="sec">
      <span className="kicker mono">Cryptographic proof</span>
      <h2 className="h2">{cryptoProof.heading}</h2>
      <div className="crypto">
        <div>
          <p className="lede" style={{ marginBottom: 0 }}>
            {cryptoProof.intro}
          </p>
          <div className="csteps">
            {cryptoProof.steps.map((step, i) => (
              <div className="cstep" key={step.label}>
                <span className="ic">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {STEP_ICONS[i]}
                  </svg>
                </span>
                <span>
                  <b>{step.label}</b>
                  <small>{step.detail}</small>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="doccard">
          <span className="seal" />
          <p className="doc-title">{cryptoProof.card.title}</p>
          <div className="doc-lines">
            <i />
            <i />
            <i />
          </div>
          <div className="qrrow">
            <svg width="104" height="104" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="14" height="14" />
              <rect x="6" y="6" width="6" height="6" fill="currentColor" stroke="none" />
              <rect x="40" y="2" width="14" height="14" />
              <rect x="44" y="6" width="6" height="6" fill="currentColor" stroke="none" />
              <rect x="2" y="40" width="14" height="14" />
              <rect x="6" y="44" width="6" height="6" fill="currentColor" stroke="none" />
              <g fill="currentColor" stroke="none">
                <rect x="22" y="2" width="4" height="4" />
                <rect x="30" y="2" width="4" height="4" />
                <rect x="22" y="10" width="4" height="4" />
                <rect x="34" y="10" width="4" height="4" />
                <rect x="2" y="22" width="4" height="4" />
                <rect x="10" y="22" width="4" height="4" />
                <rect x="22" y="22" width="4" height="4" />
                <rect x="30" y="26" width="4" height="4" />
                <rect x="40" y="22" width="4" height="4" />
                <rect x="48" y="26" width="4" height="4" />
                <rect x="22" y="34" width="4" height="4" />
                <rect x="34" y="30" width="4" height="4" />
                <rect x="22" y="44" width="4" height="4" />
                <rect x="30" y="40" width="4" height="4" />
                <rect x="40" y="40" width="4" height="4" />
                <rect x="48" y="48" width="4" height="4" />
                <rect x="34" y="48" width="4" height="4" />
                <rect x="44" y="34" width="4" height="4" />
              </g>
            </svg>
            <div>
              <p className="hash">
                sha256 <b>{cryptoProof.card.sha256}</b>
                <br />
                sig r/s <b>{cryptoProof.card.sig}</b>
              </p>
              <span className="valid">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 13 4 4 10-11" />
                </svg>
                {cryptoProof.card.status.replace(".", "")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
