"use client";

const SKILL_GROUPS = [
  {
    title: "Data Analysis and Querying",
    subtitle: "Extract, clean, and shape data",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </svg>
    ),
    skills: ["SQL", "Advanced SQL", "Python", "Advanced Excel", "Google Sheets"],
  },
  {
    title: "Data Visualization and BI",
    subtitle: "Turn data into decisions",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M3 3v18h18" />
        <rect x="7" y="11" width="3" height="6" />
        <rect x="12" y="7" width="3" height="10" />
        <rect x="17" y="13" width="3" height="4" />
      </svg>
    ),
    skills: ["Tableau", "Power BI", "Dashboard Design", "Interactive Dashboards", "KPI Dashboards", "Data Storytelling"],
  },
  {
    title: "Cloud and AI",
    subtitle: "Build and deploy intelligently",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.3 9.4 4 4 0 0 0 7 17h10.5Z" />
      </svg>
    ),
    skills: ["Google Cloud Platform", "Oracle Cloud Infrastructure", "Generative AI and LLMs", "Prompt Engineering", "AI Workflow Automation", "Microsoft Copilot Studio"],
  },
  {
    title: "Business Analysis",
    subtitle: "Frame the problem before the build",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    ),
    skills: ["KPI Framework Development", "Gap Analysis", "Success Metrics Definition", "Opportunity Identification", "First Principles Problem Solving"],
  },
  {
    title: "Project and Delivery Management",
    subtitle: "Drive delivery from sprint to signoff",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="3" y="4" width="6" height="16" rx="1.5" />
        <rect x="10.5" y="4" width="6" height="10" rx="1.5" />
        <rect x="18" y="4" width="3" height="13" rx="1.5" />
      </svg>
    ),
    skills: ["Jira", "Agile Methodologies", "Scrum Ceremonies", "Sprint Planning", "Backlog Grooming", "UAT Support", "User Training and Enablement", "Stakeholder Management", "Cross Functional Collaboration", "Multi Project Management"],
  },
];

function SkillTag({ label }: { label: string }) {
  return (
    <span
      style={{ padding: "8px 15px", borderRadius: 999, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", fontSize: 14, color: "#D4D9CF", cursor: "default", transition: "color .2s, border-color .2s, background .2s" }}
      onMouseEnter={(e) => { const el = e.currentTarget; el.style.color = "#0d0f0e"; el.style.background = "#C3E75B"; el.style.borderColor = "#C3E75B"; }}
      onMouseLeave={(e) => { const el = e.currentTarget; el.style.color = "#D4D9CF"; el.style.background = "rgba(255,255,255,0.03)"; el.style.borderColor = "rgba(255,255,255,0.1)"; }}
    >{label}</span>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ maxWidth: 1180, margin: "0 auto", padding: "96px 28px", scrollMarginTop: 88 }}>
      <p style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C3E75B", margin: "0 0 14px" }}>Skills</p>
      <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 600, letterSpacing: "-0.01em", margin: "0 0 44px" }}>Tools and capabilities</h2>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        {SKILL_GROUPS.map((g) => (
          <div key={g.title} style={{ display: "flex", flexWrap: "wrap", gap: "20px 48px", alignItems: "flex-start", padding: "32px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ flex: "1 1 230px", minWidth: 200, display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 12, background: "rgba(195,231,91,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C3E75B" }}>
                {g.icon}
              </span>
              <div>
                <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 19, fontWeight: 600, margin: "0 0 4px", lineHeight: 1.2 }}>{g.title}</h3>
                <p style={{ margin: 0, fontSize: 13, color: "#7f8a7d", lineHeight: 1.4 }}>{g.subtitle}</p>
              </div>
            </div>
            <div style={{ flex: "2 1 340px", display: "flex", flexWrap: "wrap", gap: 9, paddingTop: 4 }}>
              {g.skills.map((s) => <SkillTag key={s} label={s} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
