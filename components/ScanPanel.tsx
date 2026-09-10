const CHECKS = [
  { label: "binary_integrity", dots: "·····", status: "clear" },
  { label: "debugger_hook", dots: "········", status: "clear" },
  { label: "overlay_scan", dots: "··········", status: "clear" },
  { label: "malware_signature", dots: "·····", status: "none" },
  { label: "code_integrity", dots: "········", status: "clear" },
  { label: "deny_list_check", dots: "·······", status: "clear" },
];

export default function ScanPanel() {
  return (
    <div className="scanpanel">
      <div className="scansweep" />
      <p className="lbl mono">
        <span className="pulse-dot" />
        Runtime integrity scan
      </p>
      {CHECKS.map((c, i) => (
        <p className="scanline" key={c.label}>
          {c.label} {c.dots} <span className="ok">{c.status}</span>
          {i === CHECKS.length - 1 && <span className="cursor" />}
        </p>
      ))}
      <p className="note">Scanning continuously · in real time</p>
    </div>
  );
}
