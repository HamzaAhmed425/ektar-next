"use client";

export default function JoinForm() {
  return (
    <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
      <div className="field">
        <label htmlFor="j-name">Name</label>
        <input className="input" id="j-name" type="text" placeholder="Your name" />
      </div>
      <div className="field">
        <label htmlFor="j-email">Email</label>
        <input className="input" id="j-email" type="email" placeholder="you@email.com" />
      </div>
      <div className="field full">
        <label htmlFor="j-file">Attach your resume</label>
        <input className="input" id="j-file" type="file" />
      </div>
      <div className="field full">
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </div>
    </form>
  );
}
