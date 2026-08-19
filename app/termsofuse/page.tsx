import type { Metadata } from "next";
import { body, intro, lastUpdated, type LegalBlock } from "@/lib/content/termsofuse";

export const metadata: Metadata = {
  title: "Terms of Use — Ektar",
  description: "The terms governing access to and use of the Ektar website.",
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

export default function TermsOfUsePage() {
  return (
    <section className="sec">
      <div className="wrap pt-10! pb-10! mt-10! mb-10!">
        <span className="kicker mono">Legal</span>
        <h1 className="h2">Terms of Use</h1>
        <p className="doc-title">{lastUpdated}</p>
        <p className="lede">{intro}</p>

        <article className="article">{body.map(renderBlock)}</article>
      </div>
    </section>
  );
}
