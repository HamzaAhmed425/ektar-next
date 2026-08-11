import { hashTicker, proofStrip } from "@/lib/content/home";

export default function AnnouncementStrip() {
  const tickerText = `${hashTicker} · `;
  return (
    <>
      <div className="strip mono">
        {proofStrip.map((item) => (
          <div key={item.k}>
            <span className="k">{item.k}</span>
            <span className="v">{item.v}</span>
          </div>
        ))}
      </div>
      <div className="hexband" aria-hidden="true">
        <span>{tickerText.repeat(2)}</span>
      </div>
    </>
  );
}
