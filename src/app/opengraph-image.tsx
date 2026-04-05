import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ConvertiLab - Agence de Marketing Digital";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "32px",
            padding: "60px 80px",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <span style={{ fontSize: "72px", fontWeight: 800, color: "white" }}>
              ConvertiLab
            </span>
          </div>
          <span style={{ fontSize: "28px", color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>
            Agence de Marketing Digital
          </span>
          <div style={{ display: "flex", gap: "32px", marginTop: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "rgba(255,255,255,0.15)", borderRadius: "16px", padding: "16px 24px" }}>
              <span style={{ fontSize: "32px", fontWeight: 800, color: "white" }}>150+</span>
              <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>Sites créés</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "rgba(255,255,255,0.15)", borderRadius: "16px", padding: "16px 24px" }}>
              <span style={{ fontSize: "32px", fontWeight: 800, color: "white" }}>4.9/5</span>
              <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>Satisfaction</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "rgba(255,255,255,0.15)", borderRadius: "16px", padding: "16px 24px" }}>
              <span style={{ fontSize: "32px", fontWeight: 800, color: "white" }}>+280%</span>
              <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>CA moyen</span>
            </div>
          </div>
        </div>
        <span style={{ fontSize: "18px", color: "rgba(255,255,255,0.6)", marginTop: "24px" }}>
          convertilab.com
        </span>
      </div>
    ),
    { ...size }
  );
}
