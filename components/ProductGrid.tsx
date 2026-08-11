import Link from "next/link";
import { products, productsSection } from "@/lib/content/home";

export default function ProductGrid() {
  return (
    <section className="sec">
      <span className="kicker mono">Our products</span>
      <h2 className="h2">{productsSection.heading}</h2>
      <p className="lede">{productsSection.intro}</p>
      <div className="prodgrid">
        {products.map((p) => (
          <div className="prod" key={p.href}>
            <p className="nm">{p.name}</p>
            <p className="role">{p.category}</p>
            <p className="d">{p.description}</p>
            <Link href={p.href}>Learn more →</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
