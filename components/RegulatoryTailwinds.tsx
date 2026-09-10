type Row = { market: string; requirement: string; fullWidth?: boolean };

export default function RegulatoryTailwinds({
  kicker = "Why now",
  heading,
  intro,
  rows,
  blink = false,
}: {
  kicker?: string;
  heading: string;
  intro?: string;
  rows: Row[];
  blink?: boolean;
}) {
  return (
    <section className="sec">
      <span className="kicker mono">{kicker}</span>
      <h2 className="h2">{heading}</h2>
      {intro && <p className="lede">{intro}</p>}
      <div className={blink ? "mgrid problem-grid" : "mgrid"}>
        {rows.map((row) => (
          <div className="mrow" key={row.market} style={row.fullWidth ? { gridColumn: "1/-1" } : undefined}>
            <span className="sq" />
            <p>
              <strong>{row.market}.</strong> {row.requirement}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
