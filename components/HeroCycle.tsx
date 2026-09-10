export type CycleScene = {
  label: string;
  context: string;
  verifiedTitle: string;
  verifiedDetail: string;
  chips: { text: string; flag: string }[];
};

// The cycle3/cycle2 cross-fade hero visual (DESIGN.md §4.1) — pure CSS
// animation, no JS state needed. `variant="cycle2"` is the 2-scene surface-
// page version (protect-the-user); default is the homepage's 3-scene loop.
export default function HeroCycle({ scenes, variant = "cycle" }: { scenes: CycleScene[]; variant?: "cycle" | "cycle2" }) {
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
        <div className={`dev-body ${variant}`}>
          {scenes.map((scene) => (
            <div className="scene" key={scene.label}>
              <p className="dev-label">{scene.label}</p>
              <p className="dev-app">{scene.context}</p>
              <div className="verified">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 13 4 4 10-11" />
                </svg>
                <div>
                  <b>{scene.verifiedTitle}</b>
                  <span>{scene.verifiedDetail}</span>
                </div>
              </div>
              <div className="chips">
                {scene.chips.map((chip) => (
                  <div className="chip" key={chip.text}>
                    <span className="x" />
                    {chip.text}
                    <b>{chip.flag}</b>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
