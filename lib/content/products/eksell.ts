// Transcribed from PAGES.md §8 (source: eksell.dc.html → /eksell)
// Fleshed out in v3 — new H1, updated description (mentions insurers),
// a Live tier badge, and two new sections (how it works / why banks use it).
import type { LedgerRow } from "@/components/LedgerBackground";

export const hero = {
  statusText: "Distribution · ekSell",
  title: "Bank and insurance products, in the places customers already are",
  description:
    "ekSell connects banks and insurers to the retailers, employers, and platforms people already use — so a customer can apply for a card, account, or policy through a channel they already trust, instead of only through the bank's own website or a sales agent.",
  badge: "Live",
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

export const howItWorks = {
  heading: "One connection, many channels",
  intro: "A bank or insurer connects once, and ekSell handles reaching customers through whichever channel a partner already has — no separate integration per partner.",
  items: [
    { tag: "01", t: "Banks and insurers connect via API", d: "Credit cards, accounts, mortgages, and insurance products all flow through the same connection." },
    { tag: "02", t: "Channel partners reach their own customers", d: "Retailers, employers, and associations offer these products through their own app, website, email, or in-store QR code — no separate build required on their side." },
    { tag: "03", t: "Applications happen inside a channel people already trust", d: "A customer applies through a retailer's app or an employer's benefits portal, not a cold digital ad or an unfamiliar bank sign-up page." },
  ],
};

export const whyBanksUseIt = {
  heading: "A cheaper, safer way to reach new customers",
  items: [
    { tag: "01", t: "Lower cost per new customer", d: "Compared to direct sales agents and paid digital acquisition." },
    { tag: "02", t: "Less exposure handling customer data in the field", d: "A channel partner's own app handles the interaction, not a door-to-door agent." },
    { tag: "03", t: "Reaches customers earlier in their decision", d: "Through a channel they already use daily, not only when they think to visit a bank's website." },
  ],
};

export const closing = { heading: "Take your products to new channels." };
