// Transcribed from PAGES.md §13 (source: protect-the-app.dc.html → /protect-the-app)

export const hero = {
  statusText: "Protect the App",
  titleLine1: "Assume the app is already",
  titleLine2: "being tampered with.",
  titleEmphasis: "We catch it while it's happening.",
  description:
    "Malware doesn't need to break in from outside — it can run right alongside a legitimate banking app. We watch the app itself, while it's running, not just at install.",
};

export const threats = {
  heading: "Three ways fraud gets inside the app",
  items: [
    { name: "Malware running alongside a trusted app", detail: "Invisible to the customer.", tag: "Runtime layer" },
    { name: "Repackaging and tampering", detail: "A modified copy of the real app.", tag: "Binary layer" },
    { name: "Remote access tools", detail: "A criminal quietly controlling the session while the customer watches.", tag: "Session layer" },
  ],
};

export const products = {
  heading: "Two products that defend the app itself",
  items: [
    { num: "01", name: "ekProtect", role: "Runtime & app integrity", description: "Detects tampering, repackaging, and malware running inside the app itself, in real time.", href: "/ekprotect" },
    { num: "02", name: "ekPulse", role: "Behavioural signals", description: "Adds an extra layer of app-level behavioural signal to catch what integrity checks alone might miss.", href: "/ekpulse" },
  ],
};

export const decisionEngineText =
  "Every signal from this page — an integrity check, a tamper flag — feeds into ekRules alongside the user and device surfaces. One engine decides in real time: allow, verify further, or block.";

export const whyNow = {
  heading: "Regulators now require real-time app defence",
  rows: [
    { market: "UAE", requirement: "CBUAE Notice 3057 requires real-time malware session suspension." },
    { market: "Saudi Arabia", requirement: "The SAMA framework requires real-time fraud monitoring at the app layer." },
  ],
};

export const closing = { heading: "Ready to stop assuming your app is safe?" };
