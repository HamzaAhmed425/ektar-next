// Transcribed from PAGES.md §12 (source: protect-the-device.dc.html → /protect-the-device)

export const hero = {
  statusText: "Protect the Device",
  titleLine1: "A stolen password is useless",
  titleLine2: "without the right phone.",
  titleEmphasis: "We make sure it stays that way.",
  description:
    "A SIM swap, a rooted phone, or a hijacked session can undo even a strong login. These products prove it's still the customer's own device.",
};

export const threats = {
  heading: "Four ways fraud takes over the device itself",
  items: [
    { name: "SIM swap and re-issue", detail: "A criminal takes over the customer's phone number.", tag: "Network layer" },
    { name: "Hijacked sessions", detail: "A session continues on hardware it was never meant to.", tag: "Session layer" },
    { name: "Rooted and jailbroken phones", detail: "The phone's own protections are disabled.", tag: "Platform layer" },
    { name: "Overlay attacks", detail: "A fake screen drawn over the real app to capture credentials.", tag: "Runtime layer" },
  ],
};

export const products = {
  heading: "Three products that prove the device",
  items: [
    { num: "01", name: "ekBind", role: "SIM & network trust", description: "Confirms the SIM is still the one the customer enrolled with, catching a swap or re-issue before a transaction goes through.", href: "/ekbind" },
    { num: "02", name: "ekProtect", role: "Device integrity", description: "Detects rooted or jailbroken phones and platform-level tampering in real time.", href: "/ekprotect" },
    { num: "03", name: "ekShield", role: "Authentication", description: "Also binds the login itself to the enrolled device, closing the gap a stolen credential alone can't get through.", href: "/ekshield" },
  ],
};

export const decisionEngineText =
  "Every signal from this page — a SIM check, a device-integrity read — feeds into ekRules alongside the user and app surfaces. One engine decides in real time: allow, verify further, or block.";

export const whyNow = {
  heading: "Regulators are mandating device-level proof",
  rows: [
    { market: "Saudi Arabia", requirement: "The SAMA framework mandates FIDO2 device-bound credentials, with penalties up to SAR 5 million per breach." },
    { market: "Malaysia", requirement: "BNM RMiT 2026 mandates device binding for every licensed bank." },
  ],
};

export const closing = { heading: "Ready to stop trusting the device by default?" };
