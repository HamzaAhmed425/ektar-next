import Link from "next/link";
import HeroRotator from "@/components/HeroRotator";
import SolutionsPanel from "@/components/SolutionsPanel";
import HashRain from "@/components/HashRain";
import AnnouncementStrip from "@/components/AnnouncementStrip";
import AttackSurfaceGrid from "@/components/AttackSurfaceGrid";
import ThreeLayersSection from "@/components/ThreeLayersSection";
import CryptoProofVisual from "@/components/CryptoProofVisual";
import ProductGrid from "@/components/ProductGrid";
import TeamSection from "@/components/TeamSection";
import RegulatoryTailwinds from "@/components/RegulatoryTailwinds";
import StatBand from "@/components/StatBand";
import { hero, closingCta } from "@/lib/content/home";

export default function Home() {
  return (
    <>
      <section className="stage">
        <HashRain />
        <div className="mesh" />
        <div className="glow" />
        <div className="scanline" />
        <div className="wrap">
          <div className="hero">
            <div className="reveal">
              <HeroRotator words={hero.rotatorWords} />
              <h1 className="display">
                <span className="line">{hero.h1Lines[0]}</span>
                <span className="line">{hero.h1Lines[1]}</span>
                <span className="line">
                  <em>{hero.h1Lines[2]}</em>
                </span>
              </h1>
              <p className="sub">{hero.subhead}</p>
              <div className="row">
                <Link href={hero.primaryCta.href} className="btn btn-primary">
                  {hero.primaryCta.label}
                </Link>
                <Link href={hero.secondaryCta.href} className="btn btn-ghost btn-onink">
                  {hero.secondaryCta.label}
                </Link>
              </div>
            </div>
            <div className="reveal">
              <SolutionsPanel />
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <AnnouncementStrip />
        <div className="reveal">
          <AttackSurfaceGrid />
        </div>
        <div className="reveal">
          <ThreeLayersSection />
        </div>
        <div className="reveal">
          <CryptoProofVisual />
        </div>
        <div className="reveal">
          <ProductGrid />
        </div>
        <div className="reveal">
          <RegulatoryTailwinds />
        </div>
        <div className="reveal">
          <StatBand />
        </div>
      </div>

      <div className="wrap reveal">
        <TeamSection />
      </div>

      <section className="close reveal">
        <div className="wrap">
          <h3>{closingCta.heading}</h3>
          <div className="row">
            <Link href={closingCta.cta.href} className="btn btn-primary">
              {closingCta.cta.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
