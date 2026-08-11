import { regulatorySection } from "@/lib/content/home";

export default function RegulatoryTailwinds() {
  return (
    <section className="sec">
      <span className="kicker mono">Regulatory tailwinds</span>
      <h2 className="h2">{regulatorySection.heading}</h2>
      <p className="lede">{regulatorySection.intro}</p>
      <div className="mgrid">
        {regulatorySection.rows.map((row) => (
          <div className="mrow" key={row.market}>
            <span className="sq" />
            <p>
              <strong>
                {row.market} — {row.regulation}.
              </strong>{" "}
              {row.requirement}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
