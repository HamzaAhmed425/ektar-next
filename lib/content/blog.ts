// Blog hero copy transcribed from PAGES.md §9 (source: blog.dc.html → /blog).
// Post content below is transcribed from the live posts published at
// https://ektar.com/blog/ — the export's three placeholder cards have been
// filled with the site's real published articles, fetched 2026-08-18.

export const hero = {
  statusText: "Blog",
  title: "Notes on fraud, devices, and regulation.",
  sub: "Where the threat is moving, what regulators are ordering next, and what it means for a bank with a deadline.",
};

export const whatWeWriteAbout = [
  { label: "Fraud tactics in digital channels", tag: "Analysis" },
  { label: "Regulation and deadlines", tag: "Briefings" },
  { label: "Engineering notes", tag: "Practice" },
];

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO
  dateLabel: string;
  tag: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "ektar-hitachi-payment-services-partnership",
    title:
      "ektar Technologies and Hitachi Payment Services Partnership: Advancing Secure Digital Transactions in India and the GCC",
    date: "2026-02-27",
    dateLabel: "27 Feb 2026",
    tag: "Partnership",
    excerpt:
      "ektar Technologies partners with Hitachi Payment Services to bring next-generation digital banking, payments, and multi-factor authentication to institutions across India and the GCC.",
    image: "/blog/hitachi-partnership.jpeg",
    imageAlt: "ektar Technologies and Hitachi Payment Services partnership announcement",
    body: [
      { type: "h3", text: "Overview" },
      {
        type: "p",
        text: "Ektar Technologies announced a strategic collaboration with Hitachi Payment Services to broaden access to cutting-edge digital banking, payments, and security features. Ektar's product suite will be offered to Hitachi Payment Services' banking and financial institution clients in India and other international markets, while payment solutions flow the opposite direction into GCC institutions.",
      },
      { type: "h3", text: "Strengthening the Digital Payments Ecosystem" },
      {
        type: "p",
        text: "Hitachi Payment Services contributes extensive capabilities including acquiring, issuance, payment gateways, real-time payment platforms, and ATM solutions. Combined with ektar's innovations, this partnership enables financial institutions to upgrade their technology infrastructure, enhance resilience, and improve customer experiences.",
      },
      { type: "h3", text: "ekShield: Omnichannel Multi-Factor Authentication for Modern Banking" },
      {
        type: "p",
        text: "ekShield serves as an enterprise-grade authentication platform tackling digital fraud. Traditional verification approaches are no longer sufficient against social engineering and account takeover threats. The platform employs cryptographic methods, risk-based controls, and seamless experiences across multiple channels.",
      },
      { type: "h3", text: "Ektar's Digital Banking Product Suite" },
      {
        type: "ul",
        items: [
          "ekBank — a digital banking accelerator enabling rapid deployment of modern, scalable channels",
          "ekSell — a digital distribution platform supporting customer acquisition, onboarding, and retail product portfolio expansion",
        ],
      },
      { type: "h3", text: "Driving the Future of Secure Financial Services" },
      {
        type: "p",
        text: "The partnership combines Hitachi's infrastructure scale with ektar's digital banking and authentication expertise to deliver secure, seamless financial services.",
      },
      { type: "p", text: "Contact: customer@ektar.com" },
    ],
  },
  {
    slug: "banking-at-your-fingertips-digital-self-service-uae",
    title: "Banking at Your Fingertips: How Digital Self-Service is Transforming Banking in the UAE",
    date: "2025-08-13",
    dateLabel: "13 Aug 2025",
    tag: "Distribution",
    excerpt:
      "Not long ago, opening a bank account or applying for a credit card meant a branch visit and a stack of paperwork. Here's how digital self-service — and ekSell's B2B2C model — is rewriting that experience in the UAE.",
    image: "/blog/digital-self-service-uae.webp",
    imageAlt: "Digital banking and global connectivity",
    body: [
      { type: "h3", text: "Introduction" },
      {
        type: "p",
        text: "Previously, UAE customers needed to visit banks in person to open accounts or apply for credit products, involving time off work, extensive documentation, and lengthy wait times. This experience is now being replaced by fully digital financial services that are faster, simpler, and more rewarding.",
      },
      { type: "h3", text: "The Shift to Digital-First Banking" },
      {
        type: "p",
        text: "In the UAE's digitally engaged market, consumers expect banking to offer the same convenience as other online services. This transformation requires:",
      },
      {
        type: "ul",
        items: [
          "Speed through minute-long onboarding",
          "Transparent product comparisons with visible fees and terms",
          "Personalized recommendations based on individual habits",
        ],
      },
      {
        type: "p",
        text: "It fundamentally reimagines the entire distribution model rather than simply digitizing existing forms.",
      },
      { type: "h3", text: "The Transitional Phase: Direct Sales Representatives (DSRs)" },
      {
        type: "p",
        text: "Banks initially relied on DSRs to bring services to customers, reducing branch visits. However, this approach introduced significant risks including data breaches, unethical selling practices, misrepresentation of product details, and inadequate product knowledge among sales teams, ultimately creating customer dissatisfaction.",
      },
      { type: "h3", text: "Digital Self-Service Evolution" },
      {
        type: "p",
        text: "Banking products like accounts, credit cards, mortgages, and insurance can now be explored and applied entirely online, empowering customers to independently review information, compare offers, and apply directly without intermediaries while maintaining data security.",
      },
      { type: "h3", text: "The B2B2C Model" },
      {
        type: "p",
        text: "Ektar's platform connects banks offering financial products with channel partners (retailers, e-commerce platforms, employer portals) and consumers. Ektar's ekSell platform acts as an aggregator in the UAE financial landscape, enabling customers to discover and apply for products within platforms they already use daily.",
      },
      { type: "h3", text: "Customer Journey" },
      {
        type: "ol",
        items: [
          "Browse existing apps",
          "Discover tailored financial products with comparisons",
          "Apply digitally and securely",
          "Receive application status confirmation",
          "Obtain exclusive rewards for redemption",
        ],
      },
      { type: "h3", text: "Benefits Summary" },
      {
        type: "p",
        text: "For consumers: convenience integrated into daily digital life, transparent comparisons that build trust, multiple product options from various banks, and exclusive instant-redemption rewards.",
      },
      {
        type: "p",
        text: "For banks: expanded customer reach through trusted partners, reduced customer acquisition costs and faster onboarding, and personalized offerings in appropriate contexts.",
      },
      {
        type: "p",
        text: "For channel partners: financial product integration without development, commission revenue and customer engagement improvement, and enhanced platform positioning beyond core services.",
      },
      { type: "h3", text: "Conclusion" },
      {
        type: "p",
        text: "Digital banking represents a fundamental shift in discovering, delivering, and consuming financial services. The transformation delivers instant, secure banking experiences readily accessible to users.",
      },
    ],
  },
  {
    slug: "why-weak-authentication-is-a-serious-threat-to-banks",
    title: "Why weak authentication is a serious threat to banks?",
    date: "2025-05-27",
    dateLabel: "27 May 2025",
    tag: "Authentication",
    excerpt:
      "If your bank still relies on passwords, SMS OTPs, or email OTPs, now is the time to strengthen your digital security — here's why weak authentication puts fraud, compliance, and customer trust at risk.",
    image: "/blog/weak-authentication.webp",
    imageAlt: "Weak authentication risk in digital banking",
    body: [
      {
        type: "p",
        text: "In today's digital-first banking environment, customers expect seamless, secure access to their accounts — anytime, anywhere. But behind this convenience lies a growing threat: weak authentication methods that leave financial institutions vulnerable to cyberattacks, fraud, and regulatory penalties.",
      },
      {
        type: "p",
        text: "If your bank still relies on outdated methods like passwords, SMS OTPs, or email OTPs, now is the time to strengthen your digital security.",
      },
      { type: "h3", text: "What Is Weak Authentication in Banking?" },
      {
        type: "p",
        text: "Weak authentication refers to methods that are easily compromised or inadequate for high-risk financial environments. Common examples include:",
      },
      {
        type: "ul",
        items: [
          "Password-only logins",
          "One-time passwords (OTP) sent via SMS",
          "OTPs sent over email",
          "Static security questions",
        ],
      },
      {
        type: "p",
        text: "In the high-stakes world of banking — where sensitive data and real-time transactions are routine — these methods no longer provide adequate protection.",
      },
      { type: "h3", text: "The Dangers of Weak Authentication for Banks" },
      {
        type: "p",
        text: "Increased risk of financial fraud: cybercriminals exploit weak authentication to perform account takeovers, phishing attacks, and SIM-swap fraud. Financial institutions are frequent and lucrative targets.",
      },
      {
        type: "p",
        text: "Non-compliance with regulations: banking regulators increasingly mandate strong customer authentication (SCA). Non-compliance may lead to fines, restrictions, or legal consequences.",
      },
      {
        type: "p",
        text: "Loss of customer trust: one breach can cause long-term reputational damage. Customers expect their banks to use modern, reliable security — not outdated systems that fail under pressure.",
      },
      {
        type: "p",
        text: "Escalating costs: the average cost of a data breach in the financial sector is among the highest of all industries. Preventing fraud is far more cost-effective than dealing with the aftermath.",
      },
      { type: "h3", text: "What Strong Authentication Looks Like in Modern Banking" },
      {
        type: "p",
        text: "To mitigate risks of weak authentication, banks must adopt multi-layered authentication that is both secure and user-friendly:",
      },
      {
        type: "ul",
        items: [
          "Multi-Factor Authentication (MFA) — combines two or more factors (e.g., password, device, biometrics, TOTP) to verify user identity and prevent unauthorized access",
          "Soft tokens with TOTP — time-based OTPs generated securely through a soft token solution like ekShield offer a much stronger alternative to SMS OTPs: device-bound, encrypted, work offline, and can't be intercepted",
          "Risk-based authentication — adaptive checks that evaluate device, location, and risk level, applying dynamic security without affecting legitimate users",
          "Runtime Application Self-Protection (RASP) — defends the banking app from tampering, rooting, and malware attacks, ensuring secure operation even in hostile environments",
        ],
      },
      { type: "h3", text: "Zero Trust Is the Future of Banking Security" },
      {
        type: "p",
        text: "The move toward Zero Trust Architecture is inevitable in digital banking. Trust must be verified continuously — and that starts with strong identity verification at every access point. Soft tokens, biometric authentication, and device-bound credentials are critical to achieving that.",
      },
      { type: "h3", text: "Final Thoughts" },
      {
        type: "p",
        text: "In the digital age, authentication is your bank's first line of defense. Weak authentication methods expose your customers and your business to serious risks.",
      },
      {
        type: "p",
        text: "With ekShield, your bank can reduce fraud with TOTP-based soft tokens, meet global compliance standards, secure both low-risk and high-risk transactions, and win customer trust through transparent, secure access.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
