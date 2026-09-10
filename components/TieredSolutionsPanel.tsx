import Link from "next/link";

type Product = { num: string; name: string; role: string; description: string; href: string };

export default function TieredSolutionsPanel({ tier, count, products }: { tier: string; count: string; products: Product[] }) {
  return (
    <div className="solpanel" style={{ marginBottom: 2 }}>
      <div className="sp-head mono">
        <span>{tier}</span>
        <b>{count}</b>
      </div>
      {products.map((p) => (
        <Link key={p.href} href={p.href} className="sol">
          <span className="num mono">{p.num}</span>
          <span className="nm">{p.name}</span>
          <span className="role">{p.role}</span>
          <p className="d">{p.description}</p>
        </Link>
      ))}
    </div>
  );
}
