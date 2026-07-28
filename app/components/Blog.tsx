export default function Blog() {
  return (
    <section id="blog" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "#101312" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "96px 28px", scrollMarginTop: 88 }}>
        <p style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C3E75B", margin: "0 0 14px" }}>Technical Blogs</p>
        <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 600, letterSpacing: "-0.01em", margin: "0 0 32px" }}>Writing, soon</h2>
        <div style={{ border: "1px dashed rgba(255,255,255,0.16)", borderRadius: 20, padding: "56px 32px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <span style={{ width: 48, height: 48, borderRadius: 13, background: "rgba(195,231,91,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C3E75B" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 5h16M4 10h16M4 15h10" />
            </svg>
          </span>
          <p style={{ fontSize: 17, color: "#EDF0EA", margin: 0, fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: 500 }}>Notes on analytics, scoping, and enterprise AI are on the way.</p>
          <p style={{ fontSize: 14.5, color: "#9BA39A", margin: 0, maxWidth: "44ch", lineHeight: 1.6 }}>This space will hold short, practical write ups drawn from real delivery work. Check back soon.</p>
        </div>
      </div>
    </section>
  );
}
