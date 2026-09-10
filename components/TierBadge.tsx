// Small status pill on product pages: "Live", "Shipping 2026", "Building now".
// Seen on ekBind, ekKey, ekPulse, ekRules, ekSell — not on ekShield/ekProtect,
// which signal status through their main status pill instead.
export default function TierBadge({ label }: { label: string }) {
  return (
    <p className="status mono" style={{ margin: "calc(1.4 * var(--leading)) 0 0", letterSpacing: ".1em" }}>
      <span className="dot" />
      {label}
    </p>
  );
}
