import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — Ektar",
  description: "Terms of Use placeholder — content pending from the client.",
};

export default function TermsOfUsePage() {
  return (
    <section className="sec reveal">
      <div className="wrap">
        <span className="kicker mono">Legal</span>
        <h1 className="h2">Terms of Use</h1>
        <p className="lede">
          This page is a placeholder. The Terms of Use content was not included in the client&apos;s theme export
          and needs to be drafted and supplied by Ektar&apos;s legal team before launch — see the flagged open item
          in <code>SITEMAP.md</code>.
        </p>
        <p className="lede" style={{ marginBottom: 0 }}>
          <Link href="/contact">Contact us</Link> in the meantime with any questions.
        </p>
      </div>
    </section>
  );
}
