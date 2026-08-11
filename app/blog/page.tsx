import type { Metadata } from "next";
import Link from "next/link";
import { hero, whatWeWriteAbout, placeholderPosts } from "@/lib/content/blog";

export const metadata: Metadata = {
  title: "Blog — Ektar",
  description: hero.sub,
};

export default function BlogPage() {
  return (
    <>
      <section className="stage">
        <div className="mesh" />
        <div className="glow" />
        <div className="scan" />
        <div className="wrap">
          <div className="hero">
            <div className="reveal">
              <p className="status mono">
                <span className="dot" />
                {hero.statusText}
              </p>
              <h1 className="display">{hero.title}</h1>
              <p className="sub">{hero.sub}</p>
              <div className="row">
                <Link href="/contact" className="btn btn-primary">
                  Book a demo
                </Link>
                <Link href="/" className="btn btn-ghost btn-onink">
                  ← Home
                </Link>
              </div>
            </div>
            <div className="viz reveal">
              <div className="vhead">
                <span>What we write about</span>
                <span>Notes</span>
              </div>
              <div className="vbody">
                {whatWeWriteAbout.map((row, i) => (
                  <div className="vrow" key={row.label}>
                    <span className="ic">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {i === 0 && <path d="M12 2 3 6v6c0 5 3.5 8.5 9 10 5.5-1.5 9-5 9-10V6z" />}
                        {i === 1 && (
                          <>
                            <path d="M15 2H6v20h12V7z" />
                            <path d="M14 2v5h5" />
                          </>
                        )}
                        {i === 2 && (
                          <>
                            <rect x="6" y="6" width="12" height="12" />
                            <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
                          </>
                        )}
                      </svg>
                    </span>
                    <span>
                      <b>{row.label}</b>
                    </span>
                    <span className="ok">{row.tag}</span>
                  </div>
                ))}
              </div>
              <div className="vnote">
                Posts are <b>placeholders</b> until real entries are published
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <section className="sec reveal">
          <span className="kicker mono">Placeholder entries — replace with real posts</span>
          <div className="posts">
            {placeholderPosts.map((p, i) => (
              <div className="post" key={i}>
                <p className="meta">{p.meta}</p>
                <h3>{p.title}</h3>
                <p>{p.standfirst}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
