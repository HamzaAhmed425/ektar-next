"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toggleTheme } from "@/lib/theme";

const PRODUCT_NAV = [
  {
    href: "/ekshield",
    label: "ekShield",
    role: "Authentication",
    line: "Device-bound, phishing-resistant login across mobile, web, call centre, ATM and 3DS.",
  },
  {
    href: "/ekprotect",
    label: "ekProtect",
    role: "Attest & risk",
    line: "Malware, overlays, rooted devices and RATs, caught inside the app.",
  },
  {
    href: "/ekbind",
    label: "ekBind",
    role: "SIM binding",
    line: "Operator-verified SIM checks via Silent Network Authentication and Reverse SMS.",
  },
  {
    href: "/eksign",
    label: "ekSign",
    role: "Signing",
    line: "In-channel document signing, bound to the document and sealed with SHA-256.",
  },
  {
    href: "/eksell",
    label: "ekSell",
    role: "Distribution",
    line: "Bank products into employer, fintech and retail channels.",
  },
  {
    href: "/ai",
    label: "AI",
    role: "AI at Ektar",
    line: "Inside the products that detect fraud, and inside how we build them.",
  },
  {
    href: "/about",
    label: "About",
    role: "About Ektar",
    line: "Founded 2022 by three ex-bankers. Dubai · Singapore · Chennai.",
  },
];

const DEFAULT_ROLE = "Five products";
const DEFAULT_LINE = "One signal layer — each product sharpens the others.";

const STATUS_BY_PATH: Record<string, string> = {
  "/": "Systems live",
  "/ekshield": "Layer 01 secured",
  "/ekprotect": "Layer 02 secured",
  "/ekbind": "SIM verified",
  "/eksign": "Signatures valid",
  "/eksell": "Founding platform",
  "/ai": "AI at Ektar",
  "/about": "Since 2022",
  "/blog": "Notes",
  "/join-us": "We are hiring",
  "/contact": "Channel open",
};

export default function Topbar() {
  const pathname = usePathname();
  const statusLabel = STATUS_BY_PATH[pathname] ?? "Systems live";
  const navRef = useRef<HTMLElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);
  const keyRef = useRef<HTMLSpanElement>(null);
  const valRef = useRef<HTMLSpanElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close the mobile menu whenever the route changes, or on Escape.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  useEffect(() => {
    const nav = navRef.current;
    const block = blockRef.current;
    if (!nav || !block) return;

    function links() {
      return Array.from(nav!.querySelectorAll<HTMLAnchorElement>("a"));
    }
    function current() {
      return links().find((a) => a.getAttribute("aria-current")) ?? null;
    }
    function clear() {
      block!.style.width = "0px";
      block!.style.opacity = "0";
      if (keyRef.current) keyRef.current.textContent = DEFAULT_ROLE;
      if (valRef.current) valRef.current.textContent = DEFAULT_LINE;
    }
    function move(el: HTMLAnchorElement) {
      if (!el.offsetWidth) return;
      block!.style.opacity = "1";
      block!.style.width = el.offsetWidth + "px";
      block!.style.transform = "translateX(" + el.offsetLeft + "px)";
    }
    function fill(el: HTMLAnchorElement) {
      if (keyRef.current) keyRef.current.textContent = el.dataset.role || "";
      if (valRef.current) {
        valRef.current.textContent = el.dataset.line || "";
        valRef.current.classList.remove("fade");
        void valRef.current.offsetWidth;
        valRef.current.classList.add("fade");
      }
    }
    function settle() {
      const c = current();
      if (!c) {
        clear();
        return;
      }
      move(c);
      fill(c);
    }

    function onOver(e: Event) {
      const a = (e.target as HTMLElement).closest?.("a");
      if (a && nav!.contains(a)) {
        move(a as HTMLAnchorElement);
        fill(a as HTMLAnchorElement);
      }
    }
    function onFocusIn(e: Event) {
      const a = (e.target as HTMLElement).closest?.("a");
      if (a && nav!.contains(a)) {
        move(a as HTMLAnchorElement);
        fill(a as HTMLAnchorElement);
      }
    }

    nav.addEventListener("mouseover", onOver);
    nav.addEventListener("focusin", onFocusIn);
    nav.addEventListener("mouseleave", settle);
    window.addEventListener("resize", settle);

    let ro: ResizeObserver | undefined;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(settle);
      ro.observe(nav);
    }

    const raf = requestAnimationFrame(settle);
    const t1 = setTimeout(settle, 400);
    const t2 = setTimeout(settle, 1200);
    document.fonts?.ready?.then(settle);

    return () => {
      nav.removeEventListener("mouseover", onOver);
      nav.removeEventListener("focusin", onFocusIn);
      nav.removeEventListener("mouseleave", settle);
      window.removeEventListener("resize", settle);
      ro?.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname]);

  return (
    <>
      <header className="topbar">
        <Link href="/" aria-label="Ektar home">
          <Image src="/ektar-logo.png" alt="Ektar" width={72} height={20} priority />
        </Link>
        <span className="pill">
          <span className="dot" aria-hidden="true" />
          {statusLabel}
        </span>
        <nav className="pnav" ref={navRef} data-default-role={DEFAULT_ROLE} data-default-line={DEFAULT_LINE}>
          <div className="pblock" ref={blockRef} aria-hidden="true" />
          {PRODUCT_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-role={item.role}
              data-line={item.line}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button type="button" className="themebtn" aria-label="Toggle theme" onClick={() => toggleTheme()}>
          <svg className="sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
          <svg className="moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>
        <Link href="/contact" className="btn btn-primary">
          Book a demo
        </Link>
        <button
          type="button"
          className="menubtn"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line className="bar-top" x1="3" y1="6" x2="21" y2="6" />
            <line className="bar-mid" x1="3" y1="12" x2="21" y2="12" />
            <line className="bar-bot" x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div id="mobile-nav" className={mobileOpen ? "mobilenav open" : "mobilenav"}>
          <div className="mobilenav-inner">
            <nav className="mobilenav-list">
              {PRODUCT_NAV.map((item) => (
                <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="btn btn-primary">
                Book a demo
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <div className="navstrip">
        <span className="dot" aria-hidden="true" />
        <span className="key" ref={keyRef}>
          {DEFAULT_ROLE}
        </span>
        <span className="sep" aria-hidden="true" />
        <span className="val" ref={valRef}>
          {DEFAULT_LINE}
        </span>
      </div>
    </>
  );
}
