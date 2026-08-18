"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// Keying by pathname forces a remount on every route change, which restarts
// the CSS entrance animation — a simple, dependency-free page transition.
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
}
