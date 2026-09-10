// Transcribed from PAGES.md §6 (source: eksign.dc.html → /eksign)
// Substantially condensed from v2 — the old three-lettered signing-track
// breakdown, sequential/parallel/mixed table, signature-block table,
// priority-use-cases table, and authentication-by-signer-type table are
// all removed and consolidated into three short card sections + one table.
import type { LedgerRow } from "@/components/LedgerBackground";

export const hero = {
  statusText: "Document signing & integrity · ekSign",
  title: "Signing inside your own channel. Proof that outlives the session.",
  description:
    "ekSign brings document signing back inside the bank. Customers sign in your own app or branded page — with the MFA they already use, and a signature that's cryptographically bound to the document so tampering is detectable forever.",
};

export const ledgerRows: LedgerRow[] = [
  { a: "sig 1 of 3 · borrower", b: "a3f9·c2d1" },
  { a: "sig 2 of 3 · co-borrower", b: "e4b8·f7c0" },
  { a: "sig 3 of 3 · guarantor", b: "signed · sha-256 sealed", live: true },
  { a: "mandate change · single", b: "918d·5b6e" },
  { a: "fatca declaration", b: "a417·f0c3" },
  { a: "suitability form", b: "92bb·7de4" },
  { a: "policy acceptance", b: "1a58·04af" },
  { a: "joint account opening", b: "7b21·e5c9" },
  { a: "credit card agreement", b: "3f9a·c2e1" },
  { a: "loan agreement · sequential", b: "88d0·5b6e" },
  { a: "crs declaration", b: "a208·31dd" },
  { a: "mandate change · joint", b: "f17b·9c4e" },
  { a: "bancassurance terms", b: "04af·1a58" },
  { a: "suitability review", b: "7de4·92bb" },
];

export const whyInHouse = {
  heading: "A third-party portal breaks the journey and holds your record.",
  intro:
    "Most banks sign through an external e-signature platform. That means a customer receives an email that is not from the bank, is redirected to another brand's portal, and verifies with that platform's own SMS OTP — an event with no link to their banking identity. The signed documents and the audit trail then live in the vendor's platform, where the bank is a tenant and pricing or availability changes affect access to its own records.",
  cards: [
    { tag: "Experience", t: "The journey leaves the bank", d: "Another brand's email, domain and portal sit in the middle of a regulated banking action." },
    { tag: "Identity", t: "Signing is not tied to the customer", d: "A vendor OTP proves access to an inbox or a phone number, not that your verified customer signed." },
    { tag: "Custody & cost", t: "The bank does not own the record", d: "Audit trail held externally, priced per envelope. ekSign replaces that with a marginal cost per signing event on infrastructure the bank already runs." },
  ],
};

export const howItWorks = {
  heading: "Two capabilities, joined into one product",
  intro: "Every signature is mathematically bound to the exact document and to a verified identity — so nothing about it can be faked, altered, or disputed later.",
  items: [
    { tag: "01", t: "Tamper-evident by design", d: "Alter one character after signing, and verification fails immediately." },
    { tag: "02", t: "Bound to a verified identity", d: "The bank's existing MFA fires at the moment of signing, so the signature is tied to a real, verified customer." },
    { tag: "03", t: "Non-customers verified too", d: "Guarantors and co-applicants sign using national digital ID — no bank account or new app required." },
    { tag: "04", t: "One complete audit record", d: "Every signature, chained to the ones before it, held entirely on the bank's own systems.", span2: true },
  ],
};

export const whoCanSign = {
  heading: "One customer, many parties, one process",
  items: [
    { tag: "01", t: "A single customer", d: "A push notification, a review inside the banking app, and one authentication step — the same MFA already used for transfers." },
    { tag: "02", t: "Multiple signatories", d: "Loan agreements, joint accounts, and mandate changes often need more than one signature. ekSign supports signing in sequence, in parallel, or a mix of both — the bank's workflow decides the order." },
    { tag: "03", t: "Guarantors and other non-customers", d: "A secure link sent from the bank's own domain, opened on a bank-branded page, verified with national digital ID — no bank account or app required." },
  ],
};

export const comparison = {
  heading: "The same signature, on your side of the wall.",
  columns: ["Third-party e-signature platform", "ekSign"],
  rows: [
    ["Customer redirected to another brand's portal", "Customer signs inside your own app or branded page"],
    ["Authenticated by vendor SMS OTP or email", "Authenticated by the bank's own MFA, or national digital ID"],
    ["Audit trail held by the vendor — the bank is a tenant", "Full audit trail owned and held by the bank"],
    ["Fixed per-envelope licence fee", "Marginal cost per signing event, on infrastructure the bank already runs"],
  ],
};

export const closing = { heading: "Replace a recurring licence with a capability you own." };
