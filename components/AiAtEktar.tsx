import { hero as aiHero, whereAiSits } from "@/lib/content/ai";

export default function AiAtEktar() {
  return (
    <section className="sec">
      <span className="kicker mono">{aiHero.statusText}</span>
      <h2 className="h2">{aiHero.title}</h2>
      <div className="cards two">
        {whereAiSits.map((c) => (
          <div className="card2" key={c.tag}>
            <p className="tag mono">{c.tag}</p>
            <p className="t">{c.t}</p>
            <p className="d">{c.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
