// Transcribed from PAGES.md §4 (source: authentication.dc.html → /ekshield)

export const hero = {
  statusText: "Layer 01 — Authentication · ekShield",
  title: "Kill SMS OTP. Keep the login.",
  description:
    "Replace SMS OTP with phishing-resistant, device-bound authentication across every channel — mobile, web, call centre, ATM, and 3DS. Compliant with CBUAE, RBI, SAMA, BSP, and MAS mandates. White-labelled and live at UAE's 3rd largest bank.",
};

export const quickFacts = [
  { k: "Channels", v: "Mobile · Web · Call Centre · ATM · 3DS" },
  { k: "Compliance", v: "CBUAE · RBI · SAMA · BSP · MAS" },
  { k: "Live at", v: "UAE's 3rd largest bank" },
];

export const capabilities = [
  { tag: "01", t: "Device-bound, phishing-resistant credentials" },
  { tag: "02", t: "One system across mobile, web, call centre, ATM, and 3DS" },
  { tag: "03", t: "Compliant with CBUAE, RBI, SAMA, BSP, and MAS" },
];

export const securityArchitecture = {
  heading: "Secrets that never leave the phone's security chip.",
  intro:
    "The secret behind every one-time code is created on Ektar's servers, delivered once during registration, and stored only after every check passes. It belongs to one customer, on one device, for one bank — and it is never written down in readable form anywhere on the phone.",
  rows: [
    {
      what: "The one-time code secret",
      how: "Held inside the phone's dedicated security chip, encrypted, and marked so it cannot sync to the cloud, be backed up, or be restored onto another device. On Android the code is calculated inside the chip itself, so the secret is never handed to the app at all.",
    },
    {
      what: "Registration details and PIN",
      how: "Encrypted at rest with bank-grade AES-256 encryption, using a key that also lives in hardware. The PIN is stored one-way wherever it does not need to be recovered.",
    },
    {
      what: "Biometric approval",
      how: "Bound to the customer's current fingerprint or face enrolment. If a new biometric is added or the set changes, the binding is invalidated and the customer must re-authenticate.",
    },
    {
      what: "What it takes to unlock",
      how: "Two independent factors together: something only that specific handset holds, and something only the customer knows — their device passcode. Biometric approval adds a third. None of the key material can be exported, copied, or read by software.",
    },
    {
      what: "Data in transit",
      how: "Encrypted in transit as standard, with optional end-to-end encryption on top. Secrets and PINs never appear in API responses or logs.",
    },
  ],
  note: "Full technical whitepaper — including platform flows, enforcement points and risk assessment — available under NDA.",
};

export const applicationControls = [
  {
    tag: "PIN policy",
    t: "Rejected before it is accepted",
    d: "The PIN must match its confirmation, meet the bank's required length, be numeric, and avoid sequences or three or more repeated digits. Old PINs cannot be reused.",
  },
  {
    tag: "Retry & lockout",
    t: "Per-registration retry counter",
    d: "Each failed verification decrements the counter; when retries are exhausted the PIN state locks and further attempts are blocked. A successful verification resets it.",
  },
  {
    tag: "Session gating",
    t: "Local auth, with a reuse window",
    d: "Biometric availability is checked when the app starts, changes to the customer's biometrics end the trusted state, and once the bank's reuse window expires the customer authenticates again.",
  },
];

export const deviceLock = {
  heading: "Without a device lock screen, the model degrades to one factor.",
  intro:
    "ekShield checks that the customer's phone has a passcode or lock screen set, and requires one before registration completes. Ektar recommends enforcing this in production: without a device lock, protection falls back to possession of the handset alone, which no longer meets strong customer authentication or card-industry expectations.",
  columns: ["Dimension", "Hardware-backed", "PIN-only"],
  rows: [
    ["Physical security", "Secrets isolated in the phone's security chip", "No hardware barrier — 80% weaker"],
    ["Attack resistance", "Keys cannot be copied off the device", "Secrets reachable by software — 80% weaker"],
    ["Authentication assurance", "Hardware proof that the customer was present", "The app's word for it — 60% weaker"],
    ["Key protection", "Bound to the handset, non-exportable", "Exportable if the PIN is known — 60% weaker"],
    ["Compliance readiness", "Meets strong-authentication and card-industry expectations", "Complete loss"],
  ],
};

export const regulatory = [
  { market: "UAE", regulation: "CBUAE Notice 3057", requirement: "SMS OTP and email OTP banned. In-app verification, passkeys, and biometrics mandated." },
  { market: "Saudi Arabia", regulation: "SAMA Counter-Fraud Framework", requirement: "FIDO2 device-bound credentials mandated. Penalties up to SAR 5M per breach." },
  { market: "India", regulation: "RBI Authentication Directions 2025", requirement: "Sole reliance on SMS OTP banned for high-risk transactions." },
  { market: "Singapore", regulation: "MAS/ABS Directive", requirement: "SMS OTP phased out for all retail bank digital token users." },
  { market: "Philippines", regulation: "BSP Circular 1213", requirement: "Direct prohibition on SMS/email OTP for high-risk banking transactions." },
  { market: "Malaysia", regulation: "BNM RMiT 2026", requirement: "Device binding and risk-based authentication mandated for all licensed banks." },
];

export const closing = { heading: "Ready to retire SMS OTP?" };
