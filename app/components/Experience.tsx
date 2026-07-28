const EXPERIENCE = [
  {
    org: "Quantiphi Analytics", role: "Business Analyst", period: "Jan 2025 to Present", dot: "#C3E75B",
    bullets: [
      "Wrote the data and functional requirements for the Vector Store component of a $3M enterprise data platform, and coordinated with the engineering teams building around it.",
      "Defined how an AI coaching agent for more than 80,000 employees should work on Microsoft Copilot Studio, including intent routing and how it connects to company knowledge sources.",
      "Turned business requests into clear user stories and acceptance criteria that engineers could build and test against.",
      "Ran requirement gathering sessions with business and technical teams to agree on what to build and in what order.",
      "Analyzed usage and performance data to answer questions from the product and delivery teams.",
      "Ran sprint planning, daily standups, and backlog grooming to keep the work organized and on track.",
      "Wrote 4 analysis documents, more than 15 proposals, more than 25 slide decks, and more than 6 SOWs for client and internal leadership.",
    ],
  },
  {
    org: "Highradius Corporation", role: "Marketing Intern", period: "Jun 2024 to Dec 2024", dot: "#6c746b",
    bullets: [
      "Analyzed Salesforce CRM data with SQL to find where campaign conversion was dropping, which led to a 12% improvement in conversion rate.",
      "Built and ran reports on campaign and funnel performance so the marketing team could see what was working and what was not.",
      "Planned and wrote content across more than 30 SEO articles, which brought in more than 4,000 organic visitors.",
      "Tracked how each article and channel performed and used that to decide what content to produce next.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ maxWidth: 1180, margin: "0 auto", padding: "96px 28px", scrollMarginTop: 88 }}>
      <p style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C3E75B", margin: "0 0 14px" }}>Experience</p>
      <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 600, letterSpacing: "-0.01em", margin: "0 0 48px" }}>Where I have delivered</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {EXPERIENCE.map((e) => (
          <div key={e.org} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px 48px", padding: "28px 0", borderTop: "1px solid rgba(255,255,255,0.09)" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: e.dot, flexShrink: 0 }} />
                <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 20, fontWeight: 600, margin: 0 }}>{e.org}</h3>
              </div>
              <div style={{ fontSize: 15, color: "#C3E75B", marginLeft: 18 }}>{e.role}</div>
              <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12.5, color: "#7f8a7d", marginLeft: 18, marginTop: 6 }}>{e.period}</div>
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {e.bullets.map((b, i) => (
                <li key={i} style={{ position: "relative", paddingLeft: 20, fontSize: 15.5, lineHeight: 1.6, color: "#D4D9CF" }}>
                  <span style={{ position: "absolute", left: 0, top: 9, width: 6, height: 6, borderRadius: 2, background: "rgba(195,231,91,0.6)", transform: "rotate(45deg)" }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
