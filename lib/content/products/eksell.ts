// Transcribed from PAGES.md §8 (source: eksell.dc.html → /eksell) — the
// thinnest of the five product pages; flagged as likely needing more
// content before launch (PAGES.md §8 note).
import type { LedgerRow } from "@/components/LedgerBackground";

export const hero = {
  statusText: "Distribution · ekSell",
  title: "Bank products, in the places customers already are.",
  description:
    "Connect banks to retail ecosystems — employers, fintechs, retailers — for cost-effective digital product distribution. Ektar's founding platform.",
};

export const ledgerRows: LedgerRow[] = [
  { a: "employer payroll · 12 400 staff", b: "queued" },
  { a: "fintech wallet · api", b: "queued" },
  { a: "retail chain · 86 stores", b: "connected · distributing", live: true },
  { a: "telco bundle", b: "queued" },
  { a: "marketplace lending", b: "queued" },
  { a: "insurance broker", b: "queued" },
  { a: "employer benefits portal", b: "queued" },
  { a: "ride-hailing platform", b: "queued" },
  { a: "grocery chain · 240 outlets", b: "queued" },
  { a: "payroll aggregator", b: "queued" },
  { a: "e-commerce marketplace", b: "queued" },
  { a: "sme accounting suite", b: "queued" },
  { a: "travel platform", b: "queued" },
  { a: "utility biller", b: "queued" },
];

export const quickFacts = [
  { k: "Connects", v: "Employers · Fintechs · Retailers" },
  { k: "Purpose", v: "Digital product distribution" },
  { k: "Status", v: "Ektar's founding platform" },
];

export const capabilities = [
  { tag: "01", t: "Reach retail ecosystems" },
  { tag: "02", t: "Cost-effective digital product distribution" },
  { tag: "03", t: "Shares the common signal layer with every Ektar product" },
];

export const closing = { heading: "Take your products to new channels." };
