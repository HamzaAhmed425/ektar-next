"use client";

export default function ContactForm() {
  return (
    <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
      <div className="field">
        <label htmlFor="c-name">Name</label>
        <input className="input" id="c-name" type="text" placeholder="Jane Doe" />
      </div>
      <div className="field">
        <label htmlFor="c-email">Email</label>
        <input className="input" id="c-email" type="email" placeholder="jane@bank.com" />
      </div>
      <div className="field">
        <label htmlFor="c-phone">Phone Number</label>
        <input className="input" id="c-phone" type="tel" placeholder="+971 00 000 0000" />
      </div>
      <div className="field">
        <label htmlFor="c-company">Company Name</label>
        <input className="input" id="c-company" type="text" placeholder="Your bank" />
      </div>
      <div className="field full">
        <label htmlFor="c-message">Message</label>
        <textarea className="input" id="c-message" rows={5} placeholder="What are you looking to solve?" />
      </div>
      <div className="field full">
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </div>
    </form>
  );
}
