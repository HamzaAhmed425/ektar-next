"use client";

import { useEffect, useState } from "react";

// ekShield hero visual — simulated phone approval flow (PAGES.md §4):
// locked screen -> transfer request -> biometric check -> approved.
// Ported from the export's per-page component script (STEP_MS timing,
// rotating "blocked/denied" alert chips beneath the device).
const STEP_MS = [3000, 3400, 2600, 4200];

const EVENTS = [
  { text: "SMS OTP replay attempt", flag: "blocked" },
  { text: "Phishing proxy login", flag: "blocked" },
  { text: "Unbound device", flag: "denied" },
  { text: "Credential stuffing", flag: "blocked" },
  { text: "Call-centre impersonation", flag: "challenged" },
];

export default function PhoneApprovalFlow() {
  const [step, setStep] = useState(0);
  const [chips, setChips] = useState(() => EVENTS.slice(0, 3));
  const [chipCursor, setChipCursor] = useState(3);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const t = setTimeout(() => setStep((s) => (s + 1) % 4), STEP_MS[step]);
    return () => clearTimeout(t);
  }, [step]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setChipCursor((c) => c + 1);
      setChips((prev) => [EVENTS[chipCursor % EVENTS.length], ...prev].slice(0, 3));
    }, 2600);
    return () => clearInterval(id);
  }, [chipCursor]);

  return (
    <div className="shield-stack">
      <span className="ring r1" />
      <span className="ring r2" />
      <span className="ring r3" />
      <div className="device">
        <div className="dev-top mono">
          <span>Secure session</span>
          <span className="bars">
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="dev-body">
          <div className="screens">
            <div className={step === 0 ? "scr on" : "scr"}>
              <p className="dev-label">Ektar Bank · locked</p>
              <p className="lock-time mono">09:41</p>
              <div className="notif">
                <span className="nlogo" />
                <span className="ntext">
                  <b>Approve transfer</b>
                  <span>AED 42,500 to Al Futtaim Trading LLC — tap to review</span>
                </span>
              </div>
              <p className="scr-hint mono">Push · signed challenge delivered</p>
            </div>

            <div className={step === 1 ? "scr on" : "scr"}>
              <p className="dev-label">Transfer request</p>
              <p className="dev-app">AED 42,500.00</p>
              <div className="drow">
                <span>To</span>
                <b>Al Futtaim Trading LLC</b>
              </div>
              <div className="drow">
                <span>Account</span>
                <b>AE07 ···· 4412</b>
              </div>
              <div className="drow">
                <span>Channel</span>
                <b>Mobile banking</b>
              </div>
              <div className="approve">
                Hold to approve
                <i />
              </div>
            </div>

            <div className={step === 2 ? "scr on" : "scr"}>
              <p className="dev-label">Biometric check</p>
              <div className="fp">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "color-mix(in srgb, var(--paper) 62%, transparent)", padding: 16, boxSizing: "border-box" }}
                >
                  <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" />
                  <path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2" />
                  <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
                  <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
                  <path d="M8.65 22c.21-.66.45-1.32.57-2" />
                  <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
                  <path d="M2 16h.01" />
                  <path d="M21.8 16c.2-2 .131-5.354 0-6" />
                  <path d="M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2" />
                </svg>
                <span className="fpscan" />
              </div>
              <p className="scr-hint mono">Matching device-bound passkey…</p>
            </div>

            <div className={step === 3 ? "scr on" : "scr"}>
              <p className="dev-label">Authentication · ekShield</p>
              <p className="dev-app">Transfer approved</p>
              <div className="verified">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>
                  <b>Device-bound passkey</b>
                  <span>Verified · no OTP sent</span>
                </span>
              </div>
              <div className="drow">
                <span>Amount</span>
                <b>AED 42,500.00</b>
              </div>
              <div className="drow">
                <span>Reference</span>
                <b>TRF·88301</b>
              </div>
              <p className="hash">
                ECDSA P-256 · sig <b>3f9a·c2e1</b>
              </p>
            </div>
          </div>
          <div className="chips">
            {chips.map((chip, i) => (
              <div className="chip" key={`${chip.text}-${i}`}>
                <span className="x" />
                <span>{chip.text}</span>
                <b>{chip.flag}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
