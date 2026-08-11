// Structured content for app/page.tsx, transcribed from PAGES.md §1.

export const hero = {
  statusPill: "Systems live",
  rotatorWords: ["the User", "the App", "the Device"],
  h1Lines: ["Digital security,", "engineered for ", "Banks"],
  subhead:
    "Fraud has moved to the device, the app, and the authentication layer. Ektar secures all three — with integrated solutions and proven products built by bankers who know where the gaps are.",
  primaryCta: { label: "Book a demo", href: "/contact" },
  secondaryCta: { label: "See the three layers", href: "#layers" },
};

export const solutions = [
  {
    num: "01",
    name: "ekShield",
    role: "Authentication",
    description:
      "Device-bound, phishing-resistant login across mobile, web, call centre, ATM and 3DS.",
    href: "/ekshield",
  },
  {
    num: "02",
    name: "ekProtect",
    role: "Attest & risk",
    description: "Malware, overlays, rooted devices and RATs, caught inside the app.",
    href: "/ekprotect",
  },
  {
    num: "03",
    name: "ekBind",
    role: "SIM binding",
    description:
      "Operator-verified SIM checks via Silent Network Authentication and Reverse SMS.",
    href: "/ekbind",
  },
  {
    num: "04",
    name: "ekSign",
    role: "Signing",
    description: "In-channel document signing, bound to the document and sealed with SHA-256.",
    href: "/eksign",
  },
  {
    num: "05",
    name: "ekSell",
    role: "Distribution",
    description: "Bank products into employer, fintech and retail channels.",
    href: "/eksell",
  },
];

export const proofStrip = [
  { k: "Deployed", v: "UAE's 3rd largest bank" },
  { k: "Contracted", v: "Oman's 3rd largest bank" },
  { k: "Aligned with", v: "CBUAE · RBI · SAMA · FIDO Member" },
];

export const hashTicker =
  "9c4e f17b a208 31dd 04af 7b21 e5c9 3f9a c2e1 88d0 5b6e a417 f0c3 92bb 7de4 1a58 · ecdsa p-256 · sha-256 · fido2 · device-bound";

export const attackSurface = {
  heading: "Six ways into a banking app. Ektar closes all six.",
  intro:
    "Mobile apps, internet banking portals, and payment APIs created an attack surface fraudsters can probe from anywhere, at scale, at near-zero cost. These are the vectors we shut down.",
  vectors: [
    {
      name: "SMS OTP interception",
      description:
        "The most exploited authentication method — banned or restricted in five markets.",
      closedBy: "ekShield & ekBind",
    },
    {
      name: "Overlay attacks",
      description: "A fake screen drawn over the real app captures credentials in place.",
      closedBy: "ekProtect",
    },
    {
      name: "Rooted devices & RATs",
      description: "Remote access tools drive the session while the customer watches.",
      closedBy: "ekProtect",
    },
    {
      name: "Malware in the app",
      description: "Runtime injection and tampering inside an otherwise trusted app.",
      closedBy: "ekProtect",
    },
    {
      name: "Forged documents",
      description: "Salary certificates, statements and letters altered after issuance.",
      closedBy: "ekSign",
    },
    {
      name: "Deepfakes & synthetic IDs",
      description: "AI-generated identities and documents — up 1,210% in 2025.",
      closedBy: "Closed across all three layers",
    },
  ],
};

export const threeLayers = {
  heading: "Three security challenges. Three proven solutions.",
  intro:
    "Every solution addresses a distinct layer of fraud risk in banking's digital channels. They work independently and share a common signal layer that makes each one more accurate when deployed together.",
  layers: [
    {
      num: "01",
      title: "ekShield · ekBind",
      subtitle: "Device-bound authentication, bound to a verified SIM",
      copy: "Replace SMS OTP with phishing-resistant, device-bound authentication across every channel — mobile, web, call centre, ATM, and 3DS. ekBind adds SIM binding via Silent Network Authentication and Reverse SMS, so a swapped SIM is caught before a transaction proceeds. Compliant with CBUAE, RBI, SAMA, BSP, and MAS mandates.",
      href: "/ekshield",
    },
    {
      num: "02",
      title: "ekProtect",
      subtitle: "Attestation, runtime defence and behavioural risk",
      copy: "Attest device and app integrity, detect malware, overlay attacks, rooted devices, and remote access tools — from inside the banking app — and suspend the session automatically when a threat is found. Behavioural analysis and ML-driven per-transaction risk decisioning turn every signal into a real-time score. CBUAE-mandated.",
      href: "/ekprotect",
    },
    {
      num: "03",
      title: "ekSign",
      subtitle: "In-channel signing with cryptographic proof",
      copy: "Customers sign inside the banking app or on a bank-branded page, authenticated by the MFA they already use. Each signature is bound to a SHA-256 fingerprint of the document and chained across signatories, so any later alteration fails verification — and the bank keeps the record.",
      href: "/eksign",
    },
  ],
  signal:
    "Shared signal layer — all three layers feed one signal layer — each product becomes more accurate with every other product a bank deploys.",
};

export const cryptoProof = {
  heading: "Signed at issuance. Verified in milliseconds.",
  intro:
    "Every document a bank issues is signed with an ECDSA key pair at the moment of creation. Alter one character and the signature no longer matches — tampering stops being a judgement call and becomes arithmetic.",
  steps: [
    {
      label: "Sign",
      detail: "Issuing system calls one API; ECDSA P-256 signature bound to the document's exact contents.",
    },
    {
      label: "Seal",
      detail: "A QR seal carries the signature and verification endpoint; no change to the document workflow.",
    },
    {
      label: "Verify",
      detail: "Any party scans the seal; authenticity returns in milliseconds — no login, no portal, no callback to the bank.",
    },
  ],
  card: {
    title: "Salary certificate · signed",
    sha256: "9c4e·f17b·a208·31dd",
    sig: "3f9a·c2e1",
    status: "Signature valid.",
  },
};

export const products = [
  {
    name: "ekShield",
    category: "Authentication",
    description:
      "Device-bound, phishing-resistant authentication across mobile, web, call centre, ATM, and 3DS. White-labelled and live at UAE's 3rd largest bank.",
    href: "/ekshield",
  },
  {
    name: "ekProtect",
    category: "Attest & behavioural risk",
    description:
      "Embeds in the banking app. Attests device and app integrity, detects malware, overlays, rooted devices and RATs, suspends sessions on detection, and scores risk per transaction.",
    href: "/ekprotect",
  },
  {
    name: "ekBind",
    category: "SIM binding",
    description:
      "SIM binding via Silent Network Authentication and Reverse SMS. Catches SIM swap, port-out, and device change before a transaction proceeds.",
    href: "/ekbind",
  },
  {
    name: "ekSign",
    category: "Document integrity",
    description:
      "In-channel signing authenticated by the bank's own MFA, plus ECDSA signing and a SHA-256 seal that makes tampering detectable. The bank owns the journey and the audit trail.",
    href: "/eksign",
  },
  {
    name: "ekSell",
    category: "Distribution",
    description:
      "Connect banks to retail ecosystems — employers, fintechs, retailers — for cost-effective digital product distribution. Ektar's founding platform.",
    href: "/eksell",
  },
];

export const productsSection = {
  heading: "Five products. One signal layer.",
  intro:
    "Each can be deployed independently or as part of an integrated platform. All share a common signal layer that compounds in value with every product a bank deploys.",
};

export const regulatorySection = {
  heading: "Regulators are ordering the upgrade.",
  intro:
    "Across the GCC, South Asia, and Southeast Asia, regulators have banned SMS OTP, mandated passkeys, and required real-time malware detection. Every bank in these markets needs what Ektar builds — and many have a hard deadline to decide.",
  rows: [
    {
      market: "UAE",
      regulation: "CBUAE Notice 3057",
      requirement:
        "SMS OTP and email OTP banned. In-app verification, passkeys, and biometrics mandated. Real-time malware session suspension required.",
    },
    {
      market: "Saudi Arabia",
      regulation: "SAMA Counter-Fraud Framework",
      requirement:
        "FIDO2 device-bound credentials mandated. Real-time fraud monitoring required. Penalties up to SAR 5M per breach.",
    },
    {
      market: "India",
      regulation: "RBI Authentication Directions 2025",
      requirement:
        "Sole reliance on SMS OTP banned for high-risk transactions. Real-time risk-based authentication mandatory per transaction.",
    },
    {
      market: "Singapore",
      regulation: "MAS/ABS Directive",
      requirement: "SMS OTP phased out for all retail bank digital token users.",
    },
    {
      market: "Philippines",
      regulation: "BSP Circular 1213",
      requirement: "Direct prohibition on SMS/email OTP for high-risk banking transactions.",
    },
    {
      market: "Malaysia",
      regulation: "BNM RMiT 2026",
      requirement:
        "Device binding, adaptive MFA, and risk-based authentication mandated for all licensed banks.",
    },
  ],
};

export const statBand = {
  heading: "Banking fraud has changed. Most defences haven't.",
  intro: "The tools most banks rely on were built for a different era. The threat has moved on.",
  stats: [
    {
      tag: "Data / 01",
      n: "~$485B",
      label: "Banking fraud losses (2023)",
      detail: "Part of $1.03 trillion in total consumer scam losses globally. Card fraud alone: $33.4B.",
    },
    {
      tag: "Data / 02",
      n: "+1,210%",
      label: "AI-enabled fraud (2025)",
      detail: "Deepfakes, synthetic identities, AI-generated documents. Traditional defences cannot keep pace.",
    },
    {
      tag: "Data / 03",
      n: "93%",
      label: "Still using SMS OTP",
      detail:
        "The most exploited authentication method — now banned or restricted across UAE, India, Saudi Arabia, Philippines, and Singapore.",
    },
  ],
};

export const closingCta = {
  heading: "Every bank in these markets has a deadline. Let's talk about yours.",
  cta: { label: "Book a demo", href: "/contact" },
};
