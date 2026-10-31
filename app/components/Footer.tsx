export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "32px 28px", display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: 600, fontSize: 15 }}>
          Suvra Mukherjee
        </div>
        <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12.5, color: "#6c746b" }}>
          Analyst, {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
