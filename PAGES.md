# PAGES.md — Ektar Page Content & Layout (verified from source)

All copy below is transcribed from the real `.dc.html` files in `ektar_com.zip`, not reconstructed. Every page in this export has real, finished copy — this is a far more complete site than the earlier scrape suggested. Referenced by `CLAUDE.md`. See `SITEMAP.md` for the route tree and nav structure.

---

## Global chrome (every page)

### Topbar

Logo (wordmark, links home) → magnetic product nav: **ekShield · ekProtect · ekBind · ekSign · ekSell · AI · About** → theme toggle (sun/moon) → **"Book a demo"** button (links to Contact). A small live-status pill sits near the logo, its label changing per page context (e.g. "Systems live" on the homepage, "Layer 01 secured" on the ekShield page, "SIM verified" on ekBind, "Signatures valid" on ekSign, "Founding platform" on ekSell, "Since 2022" on About, "We are hiring" on Careers, "Channel open" on Contact, "Notes" on Blog).

### Footer (identical structure on every page)

**Products** — ekShield · ekProtect · ekBind · ekSign · ekSell
**Company** — About us · AI · Blog · Careers · Contact
**Contact** — Talk to us · LinkedIn · YouTube

**Offices:**

| Office | Address |
|---|---|
| Singapore | 18 Boon Lay Way #05-95 Tradehub 21, Singapore 609966 |
| UAE | Ektar Technologies LLC, 606, Latifa Towers, Near World Trade Center, Dubai, UAE |
| India | Rattha Tek Meadows, Ground Floor, Tower A, No: 51, Rajiv Gandhi Salai, Sholinganallur, Chennai, Tamil Nadu 600119, India |

**Copyright:** © Ektar 2022–2026. All rights reserved. · **Legal:** Terms of Use · Privacy Policy

---

## 1. Home (`index.dc.html` → `/`)

The canonical, current homepage. (A superseded earlier draft, "Home v1 (light)", also exists in the export — see §11.)

### 1.1 Hero
- **Status pill:** "Systems live"
- **Rotator line:** "Protect **the User** / **the App** / **the Device**" (cycling — see `DESIGN.md` §5.1)
- **H1:** "Digital security, engineered for **Banks**"
- **Subhead:** "Fraud has moved to the device, the app, and the authentication layer. Ektar secures all three — with integrated solutions and proven products built by bankers who know where the gaps are."
- **Primary CTA:** "Book a demo" → Contact
- **Secondary CTA:** "See the three layers" → `#layers` anchor
- **Right column — Solutions panel**, header "Five products · one security layer":

| # | Product | Role | Description |
|---|---|---|---|
| 01 | ekShield | Authentication | Device-bound, phishing-resistant login across mobile, web, call centre, ATM and 3DS. |
| 02 | ekProtect | Attest & risk | Malware, overlays, rooted devices and RATs, caught inside the app. |
| 03 | ekBind | SIM binding | Operator-verified SIM checks via Silent Network Authentication and Reverse SMS. |
| 04 | ekSign | Signing | In-channel document signing, bound to the document and sealed with SHA-256. |
| 05 | ekSell | Distribution | Bank products into employer, fintech and retail channels. |

### 1.2 Proof strip
- **Deployed** — UAE's 3rd largest bank
- **Contracted** — Oman's 3rd largest bank
- **Aligned with** — CBUAE · RBI · SAMA · FIDO Member
- Decorative hex/crypto-term ticker running beneath: `ecdsa p-256 · sha-256 · fido2 · device-bound` (repeating hash fragments)

### 1.3 The attack surface
**Heading:** "Six ways into a banking app. Ektar closes all six."
**Intro:** "Mobile apps, internet banking portals, and payment APIs created an attack surface fraudsters can probe from anywhere, at scale, at near-zero cost. These are the vectors we shut down."

| Vector | Description | Closed by |
|---|---|---|
| SMS OTP interception | The most exploited authentication method — banned or restricted in five markets. | ekShield & ekBind |
| Overlay attacks | A fake screen drawn over the real app captures credentials in place. | ekProtect |
| Rooted devices & RATs | Remote access tools drive the session while the customer watches. | ekProtect |
| Malware in the app | Runtime injection and tampering inside an otherwise trusted app. | ekProtect |
| Forged documents | Salary certificates, statements and letters altered after issuance. | ekSign |
| Deepfakes & synthetic IDs | AI-generated identities and documents — up 1,210% in 2025. | Closed across all three layers |

### 1.4 The three layers (id: `layers`)
**Heading:** "Three security challenges. Three proven solutions."
**Intro:** "Every solution addresses a distinct layer of fraud risk in banking's digital channels. They work independently and share a common signal layer that makes each one more accurate when deployed together."

**Layer 01 — ekShield · ekBind — "Device-bound authentication, bound to a verified SIM"**
> Replace SMS OTP with phishing-resistant, device-bound authentication across every channel — mobile, web, call centre, ATM, and 3DS. ekBind adds SIM binding via Silent Network Authentication and Reverse SMS, so a swapped SIM is caught before a transaction proceeds. Compliant with CBUAE, RBI, SAMA, BSP, and MAS mandates.
Link: "Open →" → ekShield

**Layer 02 — ekProtect — "Attestation, runtime defence and behavioural risk"**
> Attest device and app integrity, detect malware, overlay attacks, rooted devices, and remote access tools — from inside the banking app — and suspend the session automatically when a threat is found. Behavioural analysis and ML-driven per-transaction risk decisioning turn every signal into a real-time score. CBUAE-mandated.
Link: "Open →" → ekProtect

**Layer 03 — ekSign — "In-channel signing with cryptographic proof"**
> Customers sign inside the banking app or on a bank-branded page, authenticated by the MFA they already use. Each signature is bound to a SHA-256 fingerprint of the document and chained across signatories, so any later alteration fails verification — and the bank keeps the record.
Link: "Open →" → ekSign

Callout: "Shared signal layer — all three layers feed one signal layer — each product becomes more accurate with every other product a bank deploys."

### 1.5 Cryptographic proof
**Heading:** "Signed at issuance. Verified in milliseconds."
> Every document a bank issues is signed with an ECDSA key pair at the moment of creation. Alter one character and the signature no longer matches — tampering stops being a judgement call and becomes arithmetic.

Three steps: **Sign** (issuing system calls one API; ECDSA P-256 signature bound to the document's exact contents) → **Seal** (a QR seal carries the signature and verification endpoint; no change to the document workflow) → **Verify** (any party scans the seal; authenticity returns in milliseconds — no login, no portal, no callback to the bank).

Visual: a sample "Salary certificate · signed" card showing `sha256 9c4e·f17b·a208·31dd`, `sig r/s 3f9a·c2e1`, status "Signature valid."

### 1.6 Our products
**Heading:** "Five products. One signal layer."
**Intro:** "Each can be deployed independently or as part of an integrated platform. All share a common signal layer that compounds in value with every product a bank deploys."

| Product | Category | Description |
|---|---|---|
| ekShield | Authentication | Device-bound, phishing-resistant authentication across mobile, web, call centre, ATM, and 3DS. White-labelled and live at UAE's 3rd largest bank. |
| ekProtect | Attest & behavioural risk | Embeds in the banking app. Attests device and app integrity, detects malware, overlays, rooted devices and RATs, suspends sessions on detection, and scores risk per transaction. |
| ekBind | SIM binding | SIM binding via Silent Network Authentication and Reverse SMS. Catches SIM swap, port-out, and device change before a transaction proceeds. |
| ekSign | Document integrity | In-channel signing authenticated by the bank's own MFA, plus ECDSA signing and a SHA-256 seal that makes tampering detectable. The bank owns the journey and the audit trail. |
| ekSell | Distribution | Connect banks to retail ecosystems — employers, fintechs, retailers — for cost-effective digital product distribution. Ektar's founding platform. |

Each links "Learn more →" to its product page.

### 1.7 Regulatory tailwinds
**Heading:** "Regulators are ordering the upgrade."
**Intro:** "Across the GCC, South Asia, and Southeast Asia, regulators have banned SMS OTP, mandated passkeys, and required real-time malware detection. Every bank in these markets needs what Ektar builds — and many have a hard deadline to decide."

| Market | Regulation | Requirement |
|---|---|---|
| UAE | CBUAE Notice 3057 | SMS OTP and email OTP banned. In-app verification, passkeys, and biometrics mandated. Real-time malware session suspension required. |
| Saudi Arabia | SAMA Counter-Fraud Framework | FIDO2 device-bound credentials mandated. Real-time fraud monitoring required. Penalties up to SAR 5M per breach. |
| India | RBI Authentication Directions 2025 | Sole reliance on SMS OTP banned for high-risk transactions. Real-time risk-based authentication mandatory per transaction. |
| Singapore | MAS/ABS Directive | SMS OTP phased out for all retail bank digital token users. |
| Philippines | BSP Circular 1213 | Direct prohibition on SMS/email OTP for high-risk banking transactions. |
| Malaysia | BNM RMiT 2026 | Device binding, adaptive MFA, and risk-based authentication mandated for all licensed banks. |

### 1.8 The problem (stat band)
**Heading:** "Banking fraud has changed. Most defences haven't."
**Intro:** "The tools most banks rely on were built for a different era. The threat has moved on."

| # | Stat | Label | Detail |
|---|---|---|---|
| Data/01 | ~$485B | Banking fraud losses (2023) | Part of $1.03 trillion in total consumer scam losses globally. Card fraud alone: $33.4B. |
| Data/02 | +1,210% | AI-enabled fraud (2025) | Deepfakes, synthetic identities, AI-generated documents. Traditional defences cannot keep pace. |
| Data/03 | 93% | Still using SMS OTP | The most exploited authentication method — now banned or restricted across UAE, India, Saudi Arabia, Philippines, and Singapore. |

### 1.9 Closing CTA
"Every bank in these markets has a deadline. Let's talk about yours." → "Book a demo"

---

## 2. About (`about.dc.html` → `/about`)

- **Status pill:** "Since 2022"
- **Eyebrow:** "Our story — Dubai · Singapore · Chennai"
- **H1:** "We think like bankers. We build like technologists."
- **Intro:** "Ektar was founded in 2022 by three experienced ex-bankers. We build digital security solutions for banking's digital channels — and we have lived inside the institutions we now serve, which means we understand the operational constraints, compliance requirements, and procurement realities that shape how banks actually adopt technology."

**At a glance:** Founded 2022 · Founders: 3 ex-bankers (Standard Chartered) · Markets: GCC · South Asia · SEA · Offices: Dubai · Singapore · Chennai
Sub-line: "Standard Chartered leadership backgrounds — we have run the channels we now secure."
Callout: "Live, not theoretical — Our products are live. Our clients are some of the largest banks in the region. Our roadmap is defined by where the fraud threat and the regulatory landscape are going next."

**Vision:** "To make banking safer, smarter, and more trustworthy — for every bank, every channel, and every customer — until trust is no longer something people hope for, but something they simply expect from the banks they rely on each and every day."

**Mission:** "We build digital security products that close the three layers of vulnerability in banking's digital channels — protecting every device, every app, and every user interaction — so banks can serve their customers with confidence."

**Our founders** — "Three ex-bankers who lived the problem."

| Name | Role | Bio |
|---|---|---|
| Sandeep Bose | Co-Founder and CEO | 29 years at Standard Chartered Bank in Consumer Banking Leadership roles. Last role: Regional Head of Personal and Business Banking for Africa, Middle East and Europe. Board Member at Bahrain Development Bank and Advisor at Foundation Holdings. |
| Ramanathan Mullainathan | Co-Founder and CTO | 23 years of IT leadership experience consulting global banks — Standard Chartered, JPMC, Fidelity, State Street, Bear Stearns. Most recent role: Global Head, Technologies for Retail, Private & Business Banking Channels at Standard Chartered. |
| Sethu Ramaswamy | Co-founder and CPO | 26 years with Standard Chartered Bank in Consumer Banking Leadership roles, with deep expertise in Product Management and Credit Cards/Payments. Last role: Regional Head of Affluent Banking for Africa, Middle East & Europe. |

**Advisory board:**

| Name | Role | Bio |
|---|---|---|
| A. D. Ganesh | Founder & CEO, Quantum Consultants FZ LLC | 26 years of banking experience across India, Middle East, Sub-Saharan Africa and Europe. Formerly Managing Director and Regional Head of Commercial Banking, Africa and Middle East, at Standard Chartered Bank. |
| Andrew Bainbridge | Chair, Private Infrastructure Development Group | Extensive experience in commercial banking, risk management, infrastructure financing, business strategy, and acquisitions and disposals across emerging and developed markets. |
| Suvo Sarkar | Founder & CEO, 3D Advisory | Over 36 years of experience across Asia and the Middle East. Formerly Senior Executive Vice President and Group Head of Retail Banking and Wealth Management at Emirates NBD. |
| Vignesh Ramanujam | CEO, second venture | Previously a Partner at Lok Capital, overseeing investments in over 40 companies. Has personally supported over 50 startups globally, spanning technology investing, fundraising, and early-stage strategy. |

**Closing:** "Built by bankers, for bankers." → "Book a demo"

*(Note: unlike the earlier scrape's finding, the advisor list here does **not** duplicate any entry — four distinct advisors, transcribed cleanly.)*

---

## 3. AI at Ektar (`ai.dc.html` → `/ai`)

- **Status pill:** "AI at Ektar" / page eyebrow repeats as H1
- **H1:** "AI is not just in our products. It's in how we build them."
- **Intro:** "Two places AI shows up at Ektar: inside the products that detect fraud, and inside the engineering practice that ships them."
- Back-link: "← Home"

**Two places** (summary chips): ekSign — fraud pattern detection (AI-assisted) · RASP SDK — behavioural analysis (Runtime) · Fraud & Risk Engine (ML-driven) · Engineering practice (AI-assisted, "Human engineers accountable for every design decision, security control and integration point")

**Where AI sits:**

**01 — AI in our products**
> ekSign uses AI-assisted fraud pattern detection. The RASP SDK uses behavioural analysis to distinguish legitimate users from malware at runtime. The Fraud & Risk Engine will be ML driven at its core — per-transaction risk decisioning across all signal layers.

**02 — AI in how we build**
> Our engineering teams use AI-assisted development practices to accelerate delivery and maintain high code quality — with human engineers accountable for every design decision, security control, and integration point.

**Closing:** "Ask us how the risk engine decides." → "Book a demo"

*(Note: this page references a "RASP SDK" and a "Fraud & Risk Engine" as named components — RASP = runtime application self-protection, consistent with ekProtect's in-app runtime defence. Neither has its own dedicated page in this export; they appear to be sub-components of ekProtect's stack, worth confirming with the client before deciding whether they need their own routes.)*

---

## 4. ekShield — Authentication (`authentication.dc.html` → `/ekshield`)

- **Status pill:** "Layer 01 secured"
- **Eyebrow:** "Layer 01 — Authentication · ekShield"
- **H1:** "Kill SMS OTP. Keep the login."
- **Description:** "Replace SMS OTP with phishing-resistant, device-bound authentication across every channel — mobile, web, call centre, ATM, and 3DS. Compliant with CBUAE, RBI, SAMA, BSP, and MAS mandates. White-labelled and live at UAE's 3rd largest bank."
- CTA: "Book a demo" · Back-link: "← All layers"

**Hero visual:** a simulated phone approval flow — "Secure session · Ektar Bank · locked · 09:41", a push notification ("Approve transfer AED 42,500 to Al Futtaim Trading LLC — tap to review"), a transfer detail card (amount AED 42,500.00, recipient Al Futtaim Trading LLC, account AE07····4412, channel Mobile banking), a "Hold to approve" biometric check step, then "Transfer approved — Device-bound passkey · Verified · no OTP sent", reference TRF·88301, ECDSA P-256 signature.

**Quick facts:** Channels — Mobile · Web · Call Centre · ATM · 3DS. Compliance — CBUAE · RBI · SAMA · BSP · MAS. Live at — UAE's 3rd largest bank.

**Capabilities:**
01. Device-bound, phishing-resistant credentials
02. One system across mobile, web, call centre, ATM, and 3DS
03. Compliant with CBUAE, RBI, SAMA, BSP, and MAS

**Security architecture — "Secrets that never leave the phone's security chip."**
> The secret behind every one-time code is created on Ektar's servers, delivered once during registration, and stored only after every check passes. It belongs to one customer, on one device, for one bank — and it is never written down in readable form anywhere on the phone.

| What we protect | How it is protected |
|---|---|
| The one-time code secret | Held inside the phone's dedicated security chip, encrypted, and marked so it cannot sync to the cloud, be backed up, or be restored onto another device. On Android the code is calculated inside the chip itself, so the secret is never handed to the app at all. |
| Registration details and PIN | Encrypted at rest with bank-grade AES-256 encryption, using a key that also lives in hardware. The PIN is stored one-way wherever it does not need to be recovered. |
| Biometric approval | Bound to the customer's current fingerprint or face enrolment. If a new biometric is added or the set changes, the binding is invalidated and the customer must re-authenticate. |

**What it takes to unlock:** two independent factors together — something only that specific handset holds, and something only the customer knows (their device passcode). Biometric approval adds a third. None of the key material can be exported, copied, or read by software. Data in transit is encrypted as standard, with optional end-to-end encryption on top; secrets and PINs never appear in API responses or logs.

> Full technical whitepaper — including platform flows, enforcement points and risk assessment — available under NDA. *(Matches `uploads/Ektars ekShield Security Whitepaper V2 1.pdf` in the export — real supporting collateral, not a placeholder claim.)*

**Application controls — "Policy enforced on the device, not just the server."**

| Control | Label | Detail |
|---|---|---|
| PIN policy | Rejected before it is accepted | The PIN must match its confirmation, meet the bank's required length, be numeric, and avoid sequences or three or more repeated digits. Old PINs cannot be reused. |
| Retry & lockout | Per-registration retry counter | Each failed verification decrements the counter; when retries are exhausted the PIN state locks and further attempts are blocked. A successful verification resets it. |
| Session gating | Local auth, with a reuse window | Biometric availability is checked when the app starts, changes to the customer's biometrics end the trusted state, and once the bank's reuse window expires the customer authenticates again. |
| Device lock requirement | Without a device lock screen, the model degrades to one factor | ekShield checks that the customer's phone has a passcode or lock screen set, and requires one before registration completes. Ektar recommends enforcing this in production. |

**Hardware-backed vs. PIN-only comparison table:**

| Dimension | Hardware-backed | PIN-only |
|---|---|---|
| Physical security | Secrets isolated in the phone's security chip | No hardware barrier — 80% weaker |
| Attack resistance | Keys cannot be copied off the device | Secrets reachable by software — 80% weaker |
| Authentication assurance | Hardware proof that the customer was present | The app's word for it — 60% weaker |
| Key protection | Bound to the handset, non-exportable | Exportable if the PIN is known — 60% weaker |
| Compliance readiness | Meets strong-authentication and card-industry expectations | Complete loss |

**Regulatory tailwinds** section repeats (condensed, six-market version — same content as homepage §1.7, minus the Data/03 framing).

**Closing:** "Ready to retire SMS OTP?" → "Book a demo"

---

## 5. ekProtect — App & Device Protection (`ekprotect.dc.html` → `/ekprotect`)

- **Status pill:** "Layer 02 secured"
- **Eyebrow:** "Layer 02 — App & Device Protection · ekProtect"
- **H1:** "Attest the device. Read the behaviour. Kill the session."
- **Description:** "ekProtect embeds in the banking app. It attests device and app integrity, detects malware, overlay attacks, rooted devices, and remote access tools in real time, and suspends the session automatically when a threat is found. Behavioural analysis distinguishes legitimate users from malware at runtime, and ML-driven per-transaction risk decisioning turns signals from every layer into a real-time risk score. CBUAE-mandated."
- CTA: "Book a demo" · Back-link: "← All layers"

**Hero visual** (marked "Illustrative"): a runtime-state panel — Session risk score "12", App & device attestation "Pass", Overlay attack "Blocked", Remote access tool "Suspended", Rooted device "Denied". Caption: "Signals from every layer feed one score, per transaction."

**Quick facts:** Detects — Malware · Overlays · Root · RATs. Response — Automatic session suspension. Mandate — CBUAE.

**Attestation & detection — what ekProtect detects and stops:**
01. Device & app attestation — confirms the app is genuine and unmodified, and the device is in a state the bank can trust.
02. Malware and overlay attacks — detects injection and fake screens drawn over the real app, from inside the app itself.
03. Rooted and jailbroken devices — compromised operating systems are identified before a session is trusted.
04. Remote access tools (RATs) — detects sessions being driven remotely while the customer watches.
05. Automatic session suspension — when a threat is found the session is suspended automatically, no manual review in the path.
06. Behavioural analysis at runtime — distinguishes legitimate users from malware by how the session behaves, not just what it declares.

**Risk decisioning — "One risk score, per transaction."**
> ML-driven per-transaction risk decisioning ingests signals from every security layer — authentication, device, and document — and returns a real-time risk score the bank can act on.

Inputs: Authentication, device, and document signals ("every layer a bank deploys makes the score more accurate"). Output: a real-time score, per transaction ("decisioned in the transaction path, not after the fact").

**Closing:** "See ekProtect catch a live threat." → "Book a demo"

---

## 6. ekBind — SIM Binding (`ekbind.dc.html` → `/ekbind`)

- **Status pill:** "SIM verified"
- **Eyebrow:** "SIM binding · ekBind"
- **H1:** "Bind the account to the SIM. Catch the swap."
- **Description:** "ekBind verifies the SIM behind every session. Silent Network Authentication confirms the SIM directly with the mobile operator over the data connection — no code, no customer action. Reverse SMS proves possession of the SIM from the device itself. Both bind the account to a known SIM, so a swapped SIM or a moved number is caught before a transaction proceeds."
- CTA: "Book a demo" · Back-link: "← All products"

**Background ledger visual** (see `DESIGN.md` §5.4): a scrolling column of masked phone numbers across UAE/Oman/India/Singapore/Saudi/Bahrain country codes, each tagged `sim [hash]`, with one row each tagged `sna verified · operator confirmed`, `swap detected`, and `reverse sms · sent from device`.

**Hero visual:** a device→banking-app→operator flow diagram — Network check: Silent Network Authentication "Verified", Reverse SMS "Sent from device", SIM swap/port-out "None detected", Code sent to customer "None". Caption: "The SIM is proven with the operator — nothing is sent to intercept."

**Quick facts:** Methods — SNA · Reverse SMS. Catches — SIM swap · port-out · device change. Customer action — None, with SNA.

**How binding works:**
01. Silent Network Authentication — the SIM is confirmed with the mobile operator over the data connection. Nothing is sent to the customer, so there is nothing to intercept or socially engineer.
02. Reverse SMS — the device sends the message rather than receiving a code; possession of the SIM is proven by the sender, not trusted from an inbound message.
03. SIM-swap and port-out detection — a changed SIM breaks the binding. The session is re-verified before the transaction is allowed to continue.

**Closing:** "Bind every session to a verified SIM." → "Book a demo"

---

## 7. ekSign — Document Signing & Integrity (`eksign.dc.html` → `/eksign`)

The deepest page in the export by far — full production-ready product copy.

- **Status pill:** "Signatures valid"
- **Eyebrow:** "Document signing & integrity · ekSign"
- **H1:** "Signing inside your own channel. Proof that outlives the session."
- **Description:** "ekSign brings document signing back inside the bank. Customers review and sign in your app or on your own branded page, authenticated by the MFA they already use — and every signature is cryptographically bound to the document, so tampering is detectable forever. No third-party portal, no third-party brand, no third-party custody of your audit trail."
- CTA: "Book a demo" · Back-link: "← All products"

**Background ledger visual:** a scrolling column of document types (mandate change, FATCA declaration, suitability form, policy acceptance, joint account opening, credit card agreement, loan agreement, CRS declaration, bancassurance terms, suitability review), each with a short hash, one marked "signed · sha-256 sealed."

**Hero visual — execution status:** "2 of 3 signed" — Primary borrower: Signed, Co-borrower: Signed, Guarantor: Awaiting. Authentication: Bank MFA · national ID. Seal: `SHA-256 a3f9·c2d1·e4b8` — "any alteration after signing fails verification."

**Quick facts:** Cryptography — ECDSA P-256 · SHA-256 document seal. Authentication — Bank MFA · national digital ID. Integration — One API call · no workflow change.

### 7.1 "Why banks move signing in-house" — problem framing
**Heading:** "A third-party portal breaks the journey and holds your record."
> Most banks sign through an external e-signature platform. That means a customer receives an email that is not from the bank, is redirected to another brand's portal, and verifies with that platform's own SMS OTP — an event with no link to their banking identity. The signed documents and the audit trail then live in the vendor's platform, where the bank is a tenant and pricing or availability changes affect access to its own records.

| Dimension | Problem |
|---|---|
| Experience | The journey leaves the bank — another brand's email, domain and portal sit in the middle of a regulated banking action. |
| Identity | Signing is not tied to the customer — a vendor OTP proves access to an inbox or a phone number, not that your verified customer signed. |
| Custody & cost | The bank does not own the record — audit trail held externally, priced per envelope. ekSign replaces that with a marginal cost per signing event on infrastructure the bank already runs. |

### 7.2 "What ekSign is" — two capabilities

**Cryptographic engine — tamper-evident signing and audit**
> ekSign creates a SHA-256 fingerprint of the document, binds each signing event to that fingerprint with an ECDSA P-256 signature, chains multi-party signatures to one another, and produces a complete audit record the bank holds.
- Signature bound to exact document contents
- Any post-signing alteration fails verification
- Audit record owned and stored by the bank

**Authentication layer — the MFA your customers already have**
> The bank's existing MFA — biometric, push approval or TOTP — fires as the signing action, so the signature is bound to a bank-verified identity. Non-customers authenticate with national digital ID (for example UAE Pass, Emirates ID-backed).
- No new enrolment, app or password
- Signing event linked to the banking identity
- Step-up strength configurable per document type

### 7.3 Signing journeys — three tracks

**Track A — Single signatory · existing customer**
1. The bank initiates a signing request; the customer receives a push notification in the banking app.
2. The customer opens and reviews the document in full, inside the app.
3. On "Sign", the bank's MFA fires an authentication challenge — biometric, push approval or TOTP.
4. The signature is recorded, the document sealed, and a signed copy stored in the bank's systems and delivered to the customer.

**Track B — Multi-signatory · sequential, parallel or mixed**
1. The bank's workflow system initiates the request, specifying each signatory, their role, and the signing order.
2. ekSign notifies the first signatory (sequential) or all signatories at once (parallel), each in their own channel.
3. Each party reviews and authenticates — in the banking app for customers, on a bank-branded secure page for everyone else.
4. Each completed signature is cryptographically chained to the previous one, and the workflow system is notified after every signature.
5. Once all required parties have signed, the document is sealed with all signature blocks and delivered to all parties.

**Track C — Non-customer · guarantor, co-applicant, prospect**
1. The bank shares the document as a secure link sent from its own domain, by SMS or email — no third-party domain.
2. The recipient opens it on a bank-branded signing page in the browser.
3. They authenticate with national digital ID — no bank account or app required.
4. The signature is recorded and sealed; the signed document is delivered to the recipient and retained by the bank.

### 7.4 Signing order
> The bank's workflow sets the mode when it initiates the request, and ekSign enforces it — advancing automatically in sequential mode while the bank retains the ability to pause, redirect or escalate at any point. A document is not executed until every required signature is present.

| Mode | Description | Example |
|---|---|---|
| Sequential | Signatories sign one at a time in a defined order; each party is notified only once the previous signature completes. | Borrower → Co-borrower → Guarantor |
| Parallel | All signatories are notified simultaneously and may sign in any order. Used where no priority sequence is needed. | Joint holder A ∥ Joint holder B |
| Mixed | Combines both: parties sign in parallel, then a later signatory is notified once the earlier group has completed. | (Co-borrower A ∥ Co-borrower B) → Guarantor |

### 7.5 What the signature looks like
> Each signature appears as a structured block on the document, labelled with the signatory's role and sequence position, and it travels with both digital and printed copies. Beneath them sits a SHA-256 seal covering all content and all signatures: alter one character of the document, or one field of any signature, and verification fails immediately.

| Element | Detail |
|---|---|
| Sequence | Signature n of N, with the signatory's role on the document |
| Signature | ECDSA P-256, bound to the document fingerprint and chained to the prior signature |
| Seal | SHA-256 hash over document content and every signature block |
| Verification | Through the bank's own systems on request, or by QR seal where the bank wants third parties to verify an issued document unaided |
| Record | Signed copy and audit trail retained by the bank |

Sample signature-block data: Signature 1 of 3, Primary borrower, Signed by A. Al Mansoori, Date & time 23 Jul 2026 · 14:32:07 GST, Authenticated via Bank MFA (biometric), Reference SGN-2026-00891-001, Status Signed, Document hash `a3f9·c2d1·e4b8·f7…`.

### 7.6 Authentication by signer type

| Signer | Method | What it means |
|---|---|---|
| Existing customer | Bank MFA | The same MFA used for transfers and high-risk actions. No new enrolment, and the signing event ties directly to a verified banking identity. |
| Non-customer (guarantor, co-applicant) | National digital ID | Government identity backed by a national ID document. No bank enrolment needed; covers residents and most expatriates. |
| Prospective customer (onboarding) | National digital ID | Identity is established at the point of signing and linked to the customer record once the account is opened. |

### 7.7 Priority use cases

| Document type | Signing mode | Notes |
|---|---|---|
| Loan & credit card agreements | Sequential | Highest legal weight. Borrower → co-borrower → guarantor, each party signing in order. |
| Joint account opening | Parallel | Both account holders sign simultaneously; completion triggers account activation. |
| Account mandate changes | Single / sequential | Sole mandate: single signatory. Joint mandate: sequential or parallel by mandate type. |
| FATCA / CRS declarations | Single | Regulatory identity-verified signature; national digital ID covers non-resident signers. |
| Investment suitability forms | Single | Risk appetite declaration. Biometric MFA adds evidentiary strength. |
| Insurance policy acceptance | Single | Bancassurance terms acceptance; the workflow system routes to policy issuance on completion. |

### 7.8 ekSign vs. a third-party portal

| Third-party e-signature platform | ekSign |
|---|---|
| Customer redirected to the vendor's portal and brand | Customer signs in the banking app or on a bank-branded page |
| Authenticated by vendor SMS OTP or email | Authenticated by the bank's own MFA, or national digital ID |
| Signing event not linked to the banking identity | Signing event cryptographically bound to a bank-verified identity |
| Multi-signatory routing managed inside the vendor platform | Routing defined and owned by the bank's workflow system |
| No tamper detection on the signed document | SHA-256 seal detects any alteration after signing |
| Audit trail held by the vendor — the bank is a tenant | Full audit trail owned and held by the bank |
| Vendor branding throughout the experience | Bank brand on every touchpoint — app, page, signature block, emails |
| Fixed per-envelope licence fee at scale | Marginal cost per signing event on Ektar's platform |

**Closing:** "Replace a recurring licence with a capability you own." → "Book a demo"

*(This page's depth matches `uploads/ADCB ekSign Concept Note.pdf` in the export — real supporting collateral for a named bank prospect, not placeholder marketing copy.)*

---

## 8. ekSell — Distribution (`eksell.dc.html` → `/eksell`)

- **Status pill:** "Founding platform"
- **Eyebrow:** "Distribution · ekSell"
- **H1:** "Bank products, in the places customers already are."
- **Description:** "Connect banks to retail ecosystems — employers, fintechs, retailers — for cost-effective digital product distribution. Ektar's founding platform."
- CTA: "Book a demo" · Back-link: "← All products"

**Background ledger visual:** a scrolling column of channel partners (employer payroll — 12,400 staff, fintech wallet API, retail chain — 86 stores, telco bundle, marketplace lending, insurance broker, employer benefits portal, ride-hailing platform, grocery chain — 240 outlets, payroll aggregator, e-commerce marketplace, SME accounting suite, travel platform, utility biller), each tagged `queued` except the retail chain, tagged `connected · distributing`.

**Hero visual:** Bank → Digital products → Channels (Retail ecosystems) fan-out diagram: Employers "Connected", Fintechs "Connected", Retailers "Connected". Caption: "Ektar's founding platform — cost-effective digital distribution."

**Quick facts:** Connects — Employers · Fintechs · Retailers. Purpose — Digital product distribution. Status — Ektar's founding platform.

**What ekSell does:**
01. Reach retail ecosystems
02. Cost-effective digital product distribution
03. Shares the common signal layer with every Ektar product

**Closing:** "Take your products to new channels." → "Book a demo"

*(This is the thinnest of the five product pages — three one-line capability bullets versus the multi-section depth of ekShield/ekSign/ekProtect/ekBind. Flag to the client as the page most likely to need more content before launch.)*

---

## 9. Blog (`blog.dc.html` → `/blog`)

- **Status pill:** "Notes"
- **Eyebrow:** "Blog"
- **H1:** "Notes on fraud, devices, and regulation."
- **Intro:** "Where the threat is moving, what regulators are ordering next, and what it means for a bank with a deadline."
- Back-link: "← Home"

**What we write about:** Fraud tactics in digital channels (Analysis) · Regulation and deadlines (Briefings) · Engineering notes (Practice)

**The export is explicit that the three post cards shown are placeholders:** each reads "Post title" / "Standfirst goes here — two lines summarising the piece." and the page itself is labelled "Posts are placeholders until real entries are published — Placeholder entries — replace with real posts." **This is the one page in the export that is honestly, deliberately unfinished — build the placeholder state as designed, don't invent real post content.**

---

## 10. Careers (`careers.dc.html` → `/join-us`)

- **Status pill:** "We are hiring"
- **Eyebrow:** "Careers"
- **H1:** "Join us."
- **Intro:** "Send your details and we'll be in touch when a role fits. Our teams sit in Dubai, Singapore, and Chennai."
- Back-link: "← Home"

**Where we work:** Dubai, UAE (Office) · Singapore (Office) · Chennai, India (Office)

**Applications:** "Always open" — "Send your details and resume — we reply when a role fits."

**Form ("Join us"):** Name · Email · Attach your resume (file upload) · Send

No open-roles list exists in this export — the entire careers strategy is a single always-open application form, not a job board. **This is a real, deliberate design choice, not a content gap** — don't add a fabricated roles list.

---

## 11. Contact (`contact.dc.html` → `/contact`)

- **Status pill:** "Channel open"
- **Eyebrow:** "Average response under 24 hours"
- **H1:** "Let's talk about your fraud gaps."
- **Intro:** "Tell us where fraud is hitting you — the login, the app, or the document — and we'll show you what closes it."

**Quick contact block:** customer@ektar.com (Email) · Dubai · Singapore · Chennai (3 offices) · Demo request under 24h — "Tell us which layer is hurting — login, app, SIM or document."

**Form ("Request a demo"):** Name · Email · Phone Number · Company Name · Message · Submit

**Offices repeated with full addresses** (UAE, Singapore, India — same as global footer) plus email.

*(Note: this is the actual destination for every "Book a demo" CTA site-wide.)*

---

## 12. Superseded draft: "Home v1 (light)" (`Home v1 (light).dc.html`)

**Not a live route — do not build this as a page.** Included in the export as design history. Key differences from the shipped homepage, worth knowing so it isn't accidentally merged back in:

- Light theme by default (not dark), no rotating "Protect the X" line
- Only **three** solutions shown (Authentication / App & Device Protection / Document Fraud Prevention) — the pre-ekBind, pre-ekSign-as-separate-product, pre-ekSell-integration structure
- H1: "Digital security, engineered for banking channels." (note: "banking channels", not "Banks")
- Footer tagline: "Make banking safer, smarter, and more trustworthy — for every bank, every channel, and every customer." and closing line "Founded by ex-bankers from Standard Chartered."

This draft's stat band (§1.8-equivalent) and regulatory framing are near-identical to the shipped site, confirming those numbers were locked early and carried through. Everything else about product naming and count changed between this draft and the shipped version — a useful signal that the product lineup (five, not three) is a recent and deliberate decision, not something to second-guess in the rebuild.

---

## 13. Internal design-exploration pages (not routes — reference only)

Three files in the export are design-decision records, not site pages:

- **`Nav Options.dc.html`** — three navigation directions were prototyped (tracking underline, mega panel, magnetic block). The magnetic block shipped (see `DESIGN.md` §5.3).
- **`Background Options.dc.html`** — per-product animated background treatments were prototyped and refined; the versions described in `DESIGN.md` §5.4 are what shipped.
- **`Protect Line Options.dc.html`** — four type/transition treatments for the hero rotator were tested; "1a · Poppins italic · blur dissolve" shipped (see `DESIGN.md` §5.1).

Keep these three out of the Next.js route tree entirely — they exist to explain *why* the shipped choice looks the way it does, not to be built as pages themselves.
