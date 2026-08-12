import { NextResponse } from "next/server";
import { Resend } from "resend";

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Ektar Website <onboarding@resend.dev>";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "customer@ektar.com";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — cannot send contact form emails.");
    return NextResponse.json({ error: "Email sending isn't configured yet. Please contact us directly." }, { status: 500 });
  }

  const body = await req.json();
  const { name, email, phone, company, message } = body as Record<string, string>;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New demo request from ${name}${company ? ` (${company})` : ""}`,
      html: `
        <h2>New demo request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "—")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });
    if (error) {
      console.error("Resend rejected the contact form email:", error);
      return NextResponse.json({ error: "Could not send your message. Please try again later." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form email failed:", err);
    return NextResponse.json({ error: "Could not send your message. Please try again later." }, { status: 502 });
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}
