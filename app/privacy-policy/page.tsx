import type { Metadata } from "next";
import { body, intro, lastUpdated, type LegalBlock } from "@/lib/content/privacypolicy";

export const metadata: Metadata = {
  title: "Privacy Policy — Ektar",
  description: "How Ektar collects, uses, maintains and discloses information collected from Site users.",
};

function renderBlock(block: LegalBlock, i: number) {
  switch (block.type) {
    case "h3":
      return <h3 key={i}>{block.text}</h3>;
    case "p":
      return <p key={i}>{block.text}</p>;
    case "ul":
      return (
        <ul key={i}>
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
  }
}

export default function PrivacyPolicyPage() {
  return (
    <section className="sec">
      <div className="wrap pt-10! pb-10! mt-10! mb-10!">
        <span className="kicker mono">Legal</span>
        <h1 className="h2">Privacy Policy</h1>
        <p className="doc-title">{lastUpdated}</p>
        <p className="lede">{intro}</p>

        <article className="article">{body.map(renderBlock)}</article>
      </div>
    </section>
  );
}
