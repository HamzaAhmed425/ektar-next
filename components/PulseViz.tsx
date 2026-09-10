// ekPulse hero visual — a scrolling behavioural waveform, crossfading
// between a "normal" pattern and a flagged "spike" pattern.
const NORMAL_PATH = "M0,35 L34,35 L42,15 L50,55 L58,35 L100,35 L108,20 L116,50 L124,35 L166,35 L174,15 L182,55 L190,35 L232,35 L240,35";
const SPIKE_PATH = "M0,35 L34,35 L40,5 L46,62 L52,10 L58,58 L64,35 L100,35 L106,8 L112,60 L118,35 L166,35 L172,5 L178,62 L184,10 L190,58 L196,35 L232,35 L240,35";

export default function PulseViz() {
  return (
    <div className="shield-stack">
      <span className="ring r1" />
      <span className="ring r2" />
      <span className="ring r3" />
      <div className="device">
        <div className="dev-top mono">
          <span>09:41</span>
          <span className="bars">
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="dev-body pulseviz">
          <p className="dev-label">Continuous behaviour check</p>
          <svg width="100%" height="70" viewBox="0 0 240 70">
            <defs>
              <path id="wnorm" d={NORMAL_PATH} fill="none" />
            </defs>
            <g className="scrollgrp wave-normal">
              <use href="#wnorm" x="0" stroke="var(--accent-lt)" strokeWidth={2} />
              <use href="#wnorm" x="240" stroke="var(--accent-lt)" strokeWidth={2} />
            </g>
            <defs>
              <path id="wspike" d={SPIKE_PATH} fill="none" />
            </defs>
            <g className="scrollgrp wave-spike">
              <use href="#wspike" x="0" stroke="var(--color-accent)" strokeWidth={2.5} />
              <use href="#wspike" x="240" stroke="var(--color-accent)" strokeWidth={2.5} />
            </g>
          </svg>
          <p className="pv-label pv-normal">Pattern matched</p>
          <p className="pv-label pv-spike">Reviewing signal…</p>
        </div>
      </div>
    </div>
  );
}
