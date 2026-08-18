import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPostBySlug, type PostBlock } from "@/lib/content/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Ektar Blog`,
    description: post.excerpt,
  };
}

function renderBlock(block: PostBlock, i: number) {
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
    case "ol":
      return (
        <ol key={i}>
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ol>
      );
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const morePosts = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="stage">
        <div className="mesh" />
        <div className="glow" />
        <div className="scanline" />
        <div className="wrap pt-10! pb-10! mt-10! mb-10!">
          <div className="postmeta reveal">
            <p className="status mono">
              <span className="dot" />
              {post.tag} · {post.dateLabel}
            </p>
            <h1 className="h2">{post.title}</h1>
            <p className="lede">{post.excerpt}</p>
            <div className="row">
              <Link href="/blog" className="btn btn-ghost btn-onink">
                ← All posts
              </Link>
              <Link href="/contact" className="btn btn-primary">
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap pt-10! pb-10! mt-10! mb-10!">
        <section className="sec reveal">
          <div className="article-figure">
            <Image src={post.image} alt={post.imageAlt} width={1024} height={576} priority />
          </div>
          <article className="article">{post.body.map(renderBlock)}</article>

          <div className="postfoot">
            <Link href="/blog" className="btn btn-secondary">
              ← All posts
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Book a demo
            </Link>
          </div>
        </section>

        {morePosts.length > 0 && (
          <section className="sec reveal">
            <span className="kicker mono">More posts</span>
            <div className="posts two">
              {morePosts.map((p) => (
                <Link className="post" key={p.slug} href={`/blog/${p.slug}`}>
                  <div className="post-thumb">
                    <Image src={p.image} alt={p.imageAlt} fill sizes="(max-width: 1000px) 100vw, 50vw" />
                  </div>
                  <div className="post-body">
                    <p className="meta">
                      {p.dateLabel} · {p.tag}
                    </p>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <span className="read">Read the post →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
