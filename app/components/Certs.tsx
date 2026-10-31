"use client";

const CERTS = [
  { issuer: "Google Cloud", name: "Associate Cloud Engineer", desc: "Validates the ability to deploy and manage workloads and infrastructure on Google Cloud.", validity: "Mar 2025 to Mar 2028", href: "#" },
  { issuer: "Google Cloud", name: "Generative AI Leader", desc: "Covers the strategy and enterprise application of generative AI on Google Cloud.", validity: "2025", href: "#" },
  { issuer: "Oracle", name: "OCI Generative AI Professional", desc: "Advanced credential in designing and building generative AI solutions on Oracle Cloud Infrastructure.", validity: "2025", href: "#" },
  { issuer: "Oracle", name: "OCI AI Foundations Associate", desc: "Foundational credential in core AI and machine learning concepts on Oracle Cloud Infrastructure.", validity: "2025", href: "#" },
  { issuer: "IBM", name: "Data Science Professional Certificate", desc: "Applied program spanning the full data science workflow from Python to modelling.", validity: "2024", href: "#" },
];

function CertCard({ cert }: { cert: typeof CERTS[0] }) {
  return (
    <div
      style={{ flex: "0 1 340px", minWidth: 280, maxWidth: 360, background: "#151917", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 18, padding: 24, display: "flex", flexDirection: "column", gap: 16, transition: "border-color .25s, transform .25s" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(195,231,91,0.35)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; e.currentTarget.style.transform = "none"; }}
    >
      <div>
        <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#C3E75B", marginBottom: 6 }}>{cert.issuer}</div>
        <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 16.5, fontWeight: 600, margin: 0, lineHeight: 1.3 }}>{cert.name}</h3>
      </div>
      <p style={{ fontSize: 14, lineHeight: 1.55, color: "#B7BEB2", margin: 0 }}>{cert.desc}</p>
      <div style={{ marginTop: "auto", paddingTop: 6, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, color: "#7f8a7d" }}>{cert.validity}</span>
        <a href={cert.href} style={{ fontSize: 13.5, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 5 }}>
          View credential
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg>
        </a>
      </div>
    </div>
  );
}

export default function Certs() {
  return (
    <section id="certifications" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "#101312" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "96px 28px", scrollMarginTop: 88 }}>
        <p style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C3E75B", margin: "0 0 14px" }}>Certifications</p>
        <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 600, letterSpacing: "-0.01em", margin: "0 0 12px" }}>Verified credentials</h2>
        <p style={{ fontSize: 15, color: "#9BA39A", margin: "0 0 44px" }}>Certified across cloud infrastructure, AI, and data science.</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20 }}>
          {CERTS.map((c) => <CertCard key={c.name} cert={c} />)}
        </div>
      </div>
    </section>
  );
}
