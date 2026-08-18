import Link from "next/link";
import type { ReactNode } from "react";

export default function ProductHero({
  statusText,
  title,
  description,
  backLabel,
  motif,
  visual,
}: {
  statusText: string;
  title: string;
  description: string;
  backLabel: "← All layers" | "← All products";
  motif: ReactNode;
  visual: ReactNode;
}) {
  return (
    <section className="stage">
      {motif}
      <div className="glow" />
      <div className="scan" />
      <div className="wrap pt-10! pb-10! mt-10! mb-10!">
        <div className="hero">
          <div className="reveal">
            <p className="status mono">
              <span className="dot" />
              {statusText}
            </p>
            <h1 className="display">{title}</h1>
            <p className="sub">{description}</p>
            <div className="row">
              <Link href="/contact" className="btn btn-primary">
                Book a demo
              </Link>
              <Link href="/#layers" className="btn btn-ghost btn-onink">
                {backLabel}
              </Link>
            </div>
          </div>
          <div className="reveal">{visual}</div>
        </div>
      </div>
    </section>
  );
}
