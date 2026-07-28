"use client";
import Image from "next/image";
import GridBg from "./GridBg";

export default function Hero() {
  return (
    <section style={{ position: "relative", maxWidth: 1180, margin: "0 auto", padding: "150px 28px 40px" }}>
      <GridBg heroMask />
      <div style={{
        position: "relative", zIndex: 1,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 48, alignItems: "center",
      }}>
        <div>
          <p style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase",
            color: "#C3E75B", margin: "0 0 20px",
          }}>Technical Business Analyst</p>

          <h1 style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(48px, 7.4vw, 88px)", lineHeight: 1.0,
            fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 22px",
          }}>Suvra<br />Mukherjee</h1>

          <p style={{
            fontSize: "clamp(18px, 2.4vw, 23px)", lineHeight: 1.5,
            color: "#EDF0EA", maxWidth: "36ch", margin: "0 0 16px",
          }}>
            I turn business questions into data driven analysis and clear technical requirements that move decisions forward.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a
              href="#about"
              style={{
                padding: "13px 24px", borderRadius: 999, background: "#C3E75B",
                color: "#0d0f0e", fontWeight: 600, fontSize: 15,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#d6f07f")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#C3E75B")}
            >View resume</a>
            <a
              href="#contact"
              style={{
                padding: "13px 24px", borderRadius: 999, background: "transparent",
                border: "1px solid rgba(255,255,255,0.18)", color: "#EDF0EA",
                fontWeight: 500, fontSize: 15, transition: "border-color .2s, background .2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#C3E75B"; e.currentTarget.style.background = "rgba(195,231,91,0.06)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; e.currentTarget.style.background = "transparent"; }}
            >Get in touch</a>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", width: "min(340px, 80%)" }}>
            <div style={{
              position: "absolute", inset: -1,
              border: "1px solid rgba(195,231,91,0.4)", borderRadius: 22,
              transform: "translate(14px, 14px)", zIndex: 0,
            }} />
            <div style={{
              position: "relative", zIndex: 1,
              aspectRatio: "4/5", borderRadius: 20, overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)", background: "#151917",
            }}>
              <Image src="/portrait.png" alt="Suvra Mukherjee" fill sizes="340px" style={{ objectFit: "cover", objectPosition: "center top" }} priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
