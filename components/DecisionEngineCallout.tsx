// Reusable "One decision engine" callout — appears on the homepage and all
// three /protect-the-* surface pages, always pointing at ekRules.
export default function DecisionEngineCallout({ text }: { text: string }) {
  return (
    <div className="signal">
      <div>
        <p className="lbl">One decision engine</p>
        <p>{text}</p>
      </div>
      <div className="flowbar" />
    </div>
  );
}
