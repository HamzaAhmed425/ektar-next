import Link from "next/link";
import type { ReactNode } from "react";
import HashRain from "@/components/HashRain";

export default function SurfaceHero({
  statusText,
  title,
  description,
  tierLine,
  scanline = true,
  visual,
}: {
  statusText: string;
  title: ReactNode;
  description: string;
  tierLine?: string;
  scanline?: boolean;
  visual: ReactNode;
}) {
  return (
    <section className="stage">
      <HashRain />
      <div className="mesh" />
      <div className="glow" />
      {scanline && <div className="scanline" />}
      <div className="wrap">
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
            </div>
            {tierLine && (
              <p className="status mono" style={{ margin: "calc(1.4 * var(--leading)) 0 0", letterSpacing: ".1em" }}>
                {tierLine}
              </p>
            )}
          </div>
          <div className="reveal">{visual}</div>
        </div>
      </div>
    </section>
  );
}
