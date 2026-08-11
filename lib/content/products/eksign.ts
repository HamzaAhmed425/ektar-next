// Transcribed from PAGES.md §7 (source: eksign.dc.html → /eksign) — the
// deepest product page in the export.
import type { LedgerRow } from "@/components/LedgerBackground";

export const hero = {
  statusText: "Document signing & integrity · ekSign",
  title: "Signing inside your own channel. Proof that outlives the session.",
  description:
    "ekSign brings document signing back inside the bank. Customers review and sign in your app or on your own branded page, authenticated by the MFA they already use — and every signature is cryptographically bound to the document, so tampering is detectable forever. No third-party portal, no third-party brand, no third-party custody of your audit trail.",
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

export const quickFacts = [
  { k: "Cryptography", v: "ECDSA P-256 · SHA-256 document seal" },
  { k: "Authentication", v: "Bank MFA · national digital ID" },
  { k: "Integration", v: "One API call · no workflow change" },
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

export const whatItIs = {
  heading: "Two capabilities you already own, joined into one product.",
  cards: [
    {
      tag: "Cryptographic engine",
      t: "Tamper-evident signing and audit",
      d: "ekSign creates a SHA-256 fingerprint of the document, binds each signing event to that fingerprint with an ECDSA P-256 signature, chains multi-party signatures to one another, and produces a complete audit record the bank holds.",
      bullets: ["Signature bound to exact document contents", "Any post-signing alteration fails verification", "Audit record owned and stored by the bank"],
    },
    {
      tag: "Authentication layer",
      t: "The MFA your customers already have",
      d: "The bank's existing MFA — biometric, push approval or TOTP — fires as the signing action, so the signature is bound to a bank-verified identity. Non-customers authenticate with national digital ID (for example UAE Pass, Emirates ID-backed).",
      bullets: ["No new enrolment, app or password", "Signing event linked to the banking identity", "Step-up strength configurable per document type"],
    },
  ],
};

export const tracks = [
  {
    name: "Track A",
    subtitle: "Single signatory · existing customer",
    steps: [
      "The bank initiates a signing request; the customer receives a push notification in the banking app.",
      "The customer opens and reviews the document in full, inside the app.",
      'On "Sign", the bank\'s MFA fires an authentication challenge — biometric, push approval or TOTP.',
      "The signature is recorded, the document sealed, and a signed copy stored in the bank's systems and delivered to the customer.",
    ],
  },
  {
    name: "Track B",
    subtitle: "Multi-signatory · sequential, parallel or mixed",
    steps: [
      "The bank's workflow system initiates the request, specifying each signatory, their role, and the signing order.",
      "ekSign notifies the first signatory (sequential) or all signatories at once (parallel), each in their own channel.",
      "Each party reviews and authenticates — in the banking app for customers, on a bank-branded secure page for everyone else.",
      "Each completed signature is cryptographically chained to the previous one, and the workflow system is notified after every signature.",
      "Once all required parties have signed, the document is sealed with all signature blocks and delivered to all parties.",
    ],
  },
  {
    name: "Track C",
    subtitle: "Non-customer · guarantor, co-applicant, prospect",
    steps: [
      "The bank shares the document as a secure link sent from its own domain, by SMS or email — no third-party domain.",
      "The recipient opens it on a bank-branded signing page in the browser.",
      "They authenticate with national digital ID — no bank account or app required.",
      "The signature is recorded and sealed; the signed document is delivered to the recipient and retained by the bank.",
    ],
  },
];

export const signingOrder = {
  heading: "The bank's workflow owns the sequence.",
  intro:
    "The workflow system sets the mode when it initiates the request, and ekSign enforces it — advancing automatically in sequential mode while the bank retains the ability to pause, redirect or escalate at any point. A document is not executed until every required signature is present.",
  modes: [
    { name: "Sequential", d: "Signatories sign one at a time in a defined order; each party is notified only once the previous signature completes.", example: "Borrower → Co-borrower → Guarantor" },
    { name: "Parallel", d: "All signatories are notified simultaneously and may sign in any order. Used where no priority sequence is needed.", example: "Joint holder A ∥ Joint holder B" },
    { name: "Mixed", d: "Combines both: parties sign in parallel, then a later signatory is notified once the earlier group has completed.", example: "(Co-borrower A ∥ Co-borrower B) → Guarantor" },
  ],
};

export const signatureLook = {
  heading: "A visible block per signatory, and one seal over everything.",
  intro:
    "Each signature appears as a structured block on the document, labelled with the signatory's role and sequence position, and it travels with both digital and printed copies. Beneath them sits a SHA-256 seal covering all content and all signatures: alter one character of the document, or one field of any signature, and verification fails immediately.",
  rows: [
    ["Sequence", "Signature n of N, with the signatory's role on the document"],
    ["Signature", "ECDSA P-256, bound to the document fingerprint and chained to the prior signature"],
    ["Seal", "SHA-256 hash over document content and every signature block"],
    ["Verification", "Through the bank's own systems on request, or by QR seal where the bank wants third parties to verify an issued document unaided"],
    ["Record", "Signed copy and audit trail retained by the bank"],
  ],
  sample: {
    seq: "Signature 1 of 3",
    role: "Primary borrower",
    signedBy: "A. Al Mansoori",
    date: "23 Jul 2026 · 14:32:07 GST",
    auth: "Bank MFA (biometric)",
    ref: "SGN-2026-00891-001",
    status: "Signed",
    hash: "a3f9·c2d1·e4b8·f7…",
  },
};

export const signerTypes = {
  heading: "The right identity mechanism per signatory.",
  columns: ["Signer", "Method", "What it means"],
  rows: [
    ["Existing customer", "Bank MFA", "The same MFA used for transfers and high-risk actions. No new enrolment, and the signing event ties directly to a verified banking identity."],
    ["Non-customer (guarantor, co-applicant)", "National digital ID", "Government identity backed by a national ID document. No bank enrolment needed; covers residents and most expatriates."],
    ["Prospective customer (onboarding)", "National digital ID", "Identity is established at the point of signing and linked to the customer record once the account is opened."],
  ],
};

export const useCases = {
  heading: "Where banks start.",
  columns: ["Document type", "Signing mode", "Notes"],
  rows: [
    ["Loan & credit card agreements", "Sequential", "Highest legal weight. Borrower → co-borrower → guarantor, each party signing in order."],
    ["Joint account opening", "Parallel", "Both account holders sign simultaneously; completion triggers account activation."],
    ["Account mandate changes", "Single / sequential", "Sole mandate: single signatory. Joint mandate: sequential or parallel by mandate type."],
    ["FATCA / CRS declarations", "Single", "Regulatory identity-verified signature; national digital ID covers non-resident signers."],
    ["Investment suitability forms", "Single", "Risk appetite declaration. Biometric MFA adds evidentiary strength."],
    ["Insurance policy acceptance", "Single", "Bancassurance terms acceptance; the workflow system routes to policy issuance on completion."],
  ],
};

export const comparison = {
  heading: "The same signature, on your side of the wall.",
  columns: ["Third-party e-signature platform", "ekSign"],
  rows: [
    ["Customer redirected to the vendor's portal and brand", "Customer signs in the banking app or on a bank-branded page"],
    ["Authenticated by vendor SMS OTP or email", "Authenticated by the bank's own MFA, or national digital ID"],
    ["Signing event not linked to the banking identity", "Signing event cryptographically bound to a bank-verified identity"],
    ["Multi-signatory routing managed inside the vendor platform", "Routing defined and owned by the bank's workflow system"],
    ["No tamper detection on the signed document", "SHA-256 seal detects any alteration after signing"],
    ["Audit trail held by the vendor — the bank is a tenant", "Full audit trail owned and held by the bank"],
    ["Vendor branding throughout the experience", "Bank brand on every touchpoint — app, page, signature block, emails"],
    ["Fixed per-envelope licence fee at scale", "Marginal cost per signing event on Ektar's platform"],
  ],
};

export const closing = { heading: "Replace a recurring licence with a capability you own." };
