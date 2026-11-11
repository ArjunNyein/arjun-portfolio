import { ImageResponse } from "next/og";

export const alt = "Arjun Nyein — Software Developer Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function SocialImage() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#101d2e", color: "#ffffff", padding: 72, fontFamily: "sans-serif", position: "relative", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ display: "flex", color: "#78d7c5", fontSize: 24, letterSpacing: 4 }}>SOFTWARE DEVELOPER PORTFOLIO</div>
      <div style={{ display: "flex", marginTop: 28, fontSize: 88, fontWeight: 700, letterSpacing: -3 }}>Arjun Nyein</div>
      <div style={{ display: "flex", marginTop: 20, color: "#d6e5f1", fontSize: 32 }}>Manufacturing · Security · Full-stack applications</div>
      <div style={{ display: "flex", marginTop: 44, alignItems: "center" }}>
        {["Data", "Code", "Interface"].map((label, index) => (
          <div key={label} style={{ display: "flex", alignItems: "center" }}>
            {index > 0 && <div style={{ width: 48, height: 2, background: "#78d7c5" }} />}
            <div style={{ display: "flex", padding: "16px 28px", borderRadius: 14, border: "1px solid #345068", background: "#1c3047", color: "#78d7c5", fontSize: 24 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
