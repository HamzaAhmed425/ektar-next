"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="c-name">Name</label>
        <input className="input" id="c-name" name="name" type="text" placeholder="Jane Doe" required />
      </div>
      <div className="field">
        <label htmlFor="c-email">Email</label>
        <input className="input" id="c-email" name="email" type="email" placeholder="jane@bank.com" required />
      </div>
      <div className="field">
        <label htmlFor="c-phone">Phone Number</label>
        <input className="input" id="c-phone" name="phone" type="tel" placeholder="+971 00 000 0000" />
      </div>
      <div className="field">
        <label htmlFor="c-company">Company Name</label>
        <input className="input" id="c-company" name="company" type="text" placeholder="Your bank" />
      </div>
      <div className="field full">
        <label htmlFor="c-message">Message</label>
        <textarea className="input" id="c-message" name="message" rows={5} placeholder="What are you looking to solve?" required />
      </div>
      <div className="field full">
        <button type="submit" className="btn btn-primary btn-block" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Submit"}
        </button>
        {status === "success" && <p className="form-note ok xl:text-[#ffffff]!">Thanks — we'll be in touch within 24 hours.</p>}
        {status === "error" && <p className="form-note error">{errorMsg}</p>}
      </div>
    </form>
  );
}
