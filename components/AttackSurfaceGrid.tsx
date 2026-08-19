import { attackSurface } from "@/lib/content/home";

const ICONS: Record<string, React.ReactNode> = {
  "SMS OTP interception": (
    <path d="M7 10V7a5 5 0 0 1 10 0v3M3 10h18v11H3z" />
  ),
  "Overlay attacks": <path d="M3 3h12v12H3zM9 9h12v12H9z" />,
  "Rooted devices & RATs": <path d="M5 2h14v20H5zM9 18h6M8 8l3 3-3 3" />,
  "Malware in the app": <path d="M12 2 3 6v6c0 5 3.5 8.5 9 10 5.5-1.5 9-5 9-10V6zM12 8v4M12 16h.01" />,
  "Forged documents": <path d="M15 2H6v20h12V7zM14 2v5h5M9 14l2 2 4-4" />,
  "Deepfakes & synthetic IDs": <path d="M12 8a4 4 0 1 0 0-8M4 21c0-4 3.6-6 8-6s8 2 8 6M3 3l18 18" />,
};

export default function AttackSurfaceGrid() {
  return (
    <section className="sec">
      <span className="kicker mono">The attack surface</span>
      <h2 className="h2">{attackSurface.heading}</h2>
      <p className="lede">{attackSurface.intro}</p>
      <div className="threats">
        {attackSurface.vectors.map((v) => (
          <div className="threat" key={v.name}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {ICONS[v.name]}
            </svg>
            <p className="n">{v.name}</p>
            <p className="d">{v.description}</p>
            <p className="st"> {v.closedBy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
