"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Fades + lifts each .reveal element in as it enters the viewport. One
// observer, re-scanned on every route change (App Router keeps this
// component mounted across navigations, so it won't re-run on its own).
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    const raf = requestAnimationFrame(() => {
      document.querySelectorAll(".reveal:not(.in-view)").forEach((el) => io.observe(el));
    });
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
