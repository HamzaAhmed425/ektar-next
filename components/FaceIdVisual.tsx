// ekKey hero visual — a two-scene cross-fade: scanning, then signed in.
export default function FaceIdVisual() {
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
        <div className="dev-body cycle2">
          <div className="scene">
            <div className="faceid">
              <span className="fring" />
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 7V5a2 2 0 0 1 2-2h2M4 17v2a2 2 0 0 0 2 2h2M20 7V5a2 2 0 0 0-2-2h-2M20 17v2a2 2 0 0 1-2 2h-2M9 10v1M15 10v1M9 16c.7.7 1.8 1 3 1s2.3-.3 3-1" />
              </svg>
            </div>
            <p className="fid-label">Verifying it&apos;s you…</p>
          </div>
          <div className="scene">
            <div className="verified">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
              </svg>
              <div>
                <b>Signed in</b>
                <span>No password used</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
