"use client";
import GridBg from "./GridBg";

export default function Contact() {
  return (
    <section id="contact" style={{ position: "relative", overflow: "hidden", maxWidth: 1180, margin: "0 auto", padding: "110px 28px", scrollMarginTop: 88, textAlign: "center" }}>
      <GridBg contactMask />
      <div style={{ position: "relative", zIndex: 1 }}>
        <p style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C3E75B", margin: "0 0 18px" }}>Contact</p>
        <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(34px, 6vw, 60px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.05, margin: "0 auto 22px", maxWidth: "16ch" }}>Let us solve something measurable</h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "#9BA39A", maxWidth: "48ch", margin: "0 auto 36px" }}>Open to Technical Business Analyst and Data Analyst roles. If you have a problem worth digging into the data for, I would like to hear about it.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
          <a href="mailto:suvramukherjee166@gmail.com" style={{ padding: "14px 26px", borderRadius: 999, background: "#C3E75B", color: "#0d0f0e", fontWeight: 600, fontSize: 15, transition: "background .2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#d6f07f")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#C3E75B")}>Email me</a>
          {[{ label: "LinkedIn", href: "#" }, { label: "GitHub", href: "#" }, { label: "Resume", href: "#" }].map(({ label, href }) => (
            <a key={label} href={href} style={{ padding: "14px 26px", borderRadius: 999, background: "transparent", border: "1px solid rgba(255,255,255,0.18)", color: "#EDF0EA", fontWeight: 500, fontSize: 15, transition: "border-color .2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C3E75B")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)")}>{label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}
