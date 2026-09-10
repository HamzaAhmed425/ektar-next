// Transcribed from PAGES.md §4 (source: ekprotect.dc.html → /ekprotect)
// Scope narrowed — behavioural analysis and full malware tracking have
// moved to ekPulse; ekProtect no longer claims its own risk-decisioning
// output, that's explicitly ekRules' (or the bank's existing system's) job.

export const hero = {
  statusText: "ekProtect · Protect the Device & App",
  title: "Attest the device. Read the behaviour. Kill the session.",
  description:
    "ekProtect embeds in the banking app. It attests device and app integrity, detects overlay attacks, malware, rooted devices, and remote access tools in real time, and suspends the session automatically when a threat is found. Every signal feeds into your risk decisioning — your existing system, or ekRules.",
};

export const capabilities = {
  heading: "What ekProtect detects and stops",
  items: [
    { tag: "01", t: "Device & app attestation", d: "Confirms the app is genuine and unmodified, and the device is in a state the bank can trust." },
    { tag: "02", t: "Overlay attacks & basic malware detection", d: "Detects fake screens drawn over the real app and flags malicious code running alongside it, from inside the app itself." },
    { tag: "03", t: "Rooted and jailbroken devices", d: "Compromised operating systems are identified before a session is trusted." },
    { tag: "04", t: "Remote access tools (RATs)", d: "Detects sessions being driven remotely while the customer watches." },
    { tag: "05", t: "Automatic session suspension", d: "When a threat is found the session is suspended automatically — no manual review in the path.", span2: true },
  ],
  crossSell: "Full malware tracking, elimination, and behavioural analysis run on ekPulse —",
};

export const feedingDecision = {
  heading: "One signal, wherever your decisioning lives",
  intro:
    "ekProtect's device and app signals feed straight into your risk decisioning — plugging into the fraud and risk system you already run, or into ekRules if you'd rather bring every layer under one engine.",
  cards: [
    { tag: "Inputs", t: "User, device, and app signals", d: "Every layer the bank deploys." },
    { tag: "Output", t: "One real-time decision, made by your risk engine — existing system or ekRules", d: "Decisioned in the transaction path, not after the fact." },
  ],
};

export const closing = { heading: "See ekProtect catch a live threat." };
