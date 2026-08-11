// Scrolling ledger background for ekBind/ekSign/ekSell heroes (DESIGN.md §5.4)
// — masked phone numbers, document types, or channel partners, one row
// tagged "live". Content is duplicated once in the DOM for a seamless loop
// (matches the source's own technique), and is decorative/aria-hidden.
export type LedgerRow = { a: string; b: string; live?: boolean };

export default function LedgerBackground({ rows }: { rows: LedgerRow[] }) {
  const doubled = [...rows, ...rows];
  return (
    <div className="ledgerbg" aria-hidden="true">
      <div className="roll">
        {doubled.map((row, i) => (
          <div className={row.live ? "lr live" : "lr"} key={i}>
            <span>{row.a}</span>
            <span>{row.b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
