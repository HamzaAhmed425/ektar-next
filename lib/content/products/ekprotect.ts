// Transcribed from PAGES.md §5 (source: ekprotect.dc.html → /ekprotect)

export const hero = {
  statusText: "Layer 02 — App & Device Protection · ekProtect",
  title: "Attest the device. Read the behaviour. Kill the session.",
  description:
    "ekProtect embeds in the banking app. It attests device and app integrity, detects malware, overlay attacks, rooted devices, and remote access tools in real time, and suspends the session automatically when a threat is found. Behavioural analysis distinguishes legitimate users from malware at runtime, and ML-driven per-transaction risk decisioning turns signals from every layer into a real-time risk score. CBUAE-mandated.",
};

export const quickFacts = [
  { k: "Detects", v: "Malware · Overlays · Root · RATs" },
  { k: "Response", v: "Automatic session suspension" },
  { k: "Mandate", v: "CBUAE" },
];

export const capabilities = [
  { tag: "01", t: "Device & app attestation", d: "Confirms the app is genuine and unmodified, and the device is in a state the bank can trust." },
  { tag: "02", t: "Malware and overlay attacks", d: "Detects injection and fake screens drawn over the real app, from inside the app itself." },
  { tag: "03", t: "Rooted and jailbroken devices", d: "Compromised operating systems are identified before a session is trusted." },
  { tag: "04", t: "Remote access tools (RATs)", d: "Detects sessions being driven remotely while the customer watches." },
  { tag: "05", t: "Automatic session suspension", d: "When a threat is found the session is suspended automatically — no manual review in the path." },
  { tag: "06", t: "Behavioural analysis at runtime", d: "Distinguishes legitimate users from malware by how the session behaves, not just what it declares." },
];

export const riskDecisioning = {
  heading: "One risk score, per transaction.",
  intro:
    "ML-driven per-transaction risk decisioning ingests signals from every security layer — authentication, device, and document — and returns a real-time risk score the bank can act on.",
  cards: [
    { tag: "Inputs", t: "Authentication, device, and document signals", d: "Every layer a bank deploys makes the score more accurate." },
    { tag: "Output", t: "A real-time score, per transaction", d: "Decisioned in the transaction path, not after the fact." },
  ],
};

export const closing = { heading: "See ekProtect catch a live threat." };
