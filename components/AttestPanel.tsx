const CHECKS = [
  "SIM binding",
  "Network match",
  "Platform integrity",
  "Root / jailbreak check",
  "Persistent device binding",
  "Reinstall detection",
];

export default function AttestPanel() {
  return (
    <div className="attest">
      <div className="scansweep" />
      <p className="lbl mono">
        <span className="pulse-dot" />
        Device attestation
      </p>
      {CHECKS.map((c) => (
        <div className="row" key={c}>
          <span>{c}</span>
          <span className="ok">✓ verified</span>
        </div>
      ))}
      <p className="note">Verified continuously · no action needed</p>
    </div>
  );
}
