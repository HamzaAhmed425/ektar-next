import Image from "next/image";
import type { CSSProperties } from "react";
import { founders, advisors } from "@/lib/content/team";

function TeamGrid({ people }: { people: typeof founders }) {
  return (
    <div
      className={people.length === 3 ? "team team-3col" : "team"}
      style={{ "--team-cols": people.length } as CSSProperties}
    >
      {people.map((p) => (
        <div className="teamcard" tabIndex={0} key={p.name}>
          <div className="teamcard-inner">
            <div className="teamcard-front">
              <Image src={p.image} alt={p.name} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw" style={{ objectFit: "cover" }} />
              <div className="teamcard-tag lg:text-xs">
                <b>{p.name}</b>
              </div>
            </div>
            <div className="teamcard-back">
              <b>{p.name}</b>
              <span className="role">{p.role}</span>
              <p>{p.bio}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function TeamSection() {
  return (
    <section className="sec">
      <span className="kicker mono">Founders &amp; advisory board</span>
      <h2 className="h2">The team behind Ektar.</h2>
      <p className="lede">Ex-bankers and industry veterans who lived the problem before they built the fix.</p>

      <h3 className="team-group-title">Our Founders</h3>
      <TeamGrid people={founders} />

      <h3 className="team-group-title">Our Advisory Board</h3>
      <TeamGrid people={advisors} />
    </section>
  );
}
