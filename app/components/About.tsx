const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Suvra Mukherjee",
    jobTitle: "Business Analyst",
    worksFor: { "@type": "Organization", name: "Quantiphi Analytics" },
  },
};

export default function About() {
  return (
    <section id="about" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "#101312" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <div style={{
        maxWidth: 1180, margin: "0 auto", padding: "96px 28px", scrollMarginTop: 88,
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 56,
      }}>
        <div>
          <p style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C3E75B", margin: "0 0 14px" }}>About</p>
          <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 600, letterSpacing: "-0.01em", margin: "0 0 28px", maxWidth: "18ch" }}>From research questions to data driven delivery</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, fontSize: 16.5, lineHeight: 1.7, color: "#C6CCC0", maxWidth: "58ch" }}>
            <p style={{ margin: 0 }}>I am an analyst who works where data, product, and delivery meet. My focus is translating what a business actually needs into requirements a team can build against, and defining the metrics that tell us whether it worked.</p>
            <p style={{ margin: 0 }}>I began in research, working on predictive analytics and published methods, then moved into analytics and enterprise AI delivery. Today I work across enterprise AI and analytics, turning business needs into technical requirements, analyzing data to answer real questions, and defining the success metrics that show whether it worked.</p>
            <p style={{ margin: 0 }}>Before engineering I trained for five years in fine arts and earned a diploma with distinction. That background shaped how I structure information and communicate it, clearly and with intent.</p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: "#171b19", border: "1px solid rgba(195,231,91,0.22)", borderRadius: 18, padding: 26 }}>
            <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C3E75B", marginBottom: 12 }}>What&apos;s next</div>
            <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: "#D4D9CF" }}>Pursuing postgraduate study and targeting Technical Business Analyst and Data Analyst roles, focused on analysis, technical requirements, and data driven products.</p>
          </div>

          <div style={{ background: "#151917", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 18, padding: 26, display: "flex", flexDirection: "column", gap: 18 }}>
            {[
              { label: "Focus", value: "Data analysis and technical requirements" },
              { label: "Currently", value: "Business Analyst at Quantiphi Analytics" },
              { label: "Open to", value: "Technical Business Analyst and Data Analyst roles" },
            ].map(({ label, value }) => (
              <div key={label}>
                <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7f8a7d", marginBottom: 5 }}>{label}</div>
                <div style={{ fontSize: 15, color: "#EDF0EA" }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
