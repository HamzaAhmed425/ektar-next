import Link from "next/link";
import { solutions } from "@/lib/content/home";

export default function SolutionsPanel() {
  return (
    <div className="solpanel">
      <div className="sp-head">
        Five products · one security layer
      </div>
      {solutions.map((s) => (
        <Link key={s.href} href={s.href} className="sol">
          <span className="num mono">{s.num}</span>
          <span className="nm">{s.name}</span>
          <span className="role">{s.role}</span>
          <span className="d">{s.description}</span>
        </Link>
      ))}
    </div>
  );
}
