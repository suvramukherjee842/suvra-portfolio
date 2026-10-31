const SKILL_GROUPS = [
  { title: "Data analysis and querying", subtitle: "Extract, clean and shape data", skills: ["SQL", "Advanced SQL", "Python", "Advanced Excel", "Google Sheets"] },
  { title: "Visualisation and BI", subtitle: "Turn data into decisions", skills: ["Tableau", "Power BI", "Dashboard Design", "Interactive Dashboards", "KPI Dashboards", "Data Storytelling"] },
  { title: "Cloud and AI", subtitle: "Build and deploy with care", skills: ["Google Cloud Platform", "Oracle Cloud Infrastructure", "Generative AI and LLMs", "Prompt Engineering", "AI Workflow Automation", "Microsoft Copilot Studio"] },
  { title: "Business analysis", subtitle: "Frame the problem before the build", skills: ["KPI Framework Development", "Gap Analysis", "Success Metrics Definition", "Opportunity Identification", "First Principles Problem Solving"] },
  { title: "Delivery", subtitle: "From sprint to sign-off", skills: ["Jira", "Agile Methodologies", "Scrum Ceremonies", "Sprint Planning", "Backlog Grooming", "UAT Support", "User Training and Enablement", "Stakeholder Management", "Cross Functional Collaboration", "Multi Project Management"] },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="sheet" data-reveal>
        <h2>Skills</h2>
        <p>Thirty-two tools and methods, in five groups</p>
        {SKILL_GROUPS.map((g) => (
          <div key={g.title} className="sheet-group">
            <h3>{g.title}</h3>
            <p>{g.subtitle}</p>
            <div className="tags">
              {g.skills.map((s) => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
        ))}
        <p className="sheet-foot">Open to Technical Business Analyst<br />and Data Analyst roles</p>
      </div>
    </section>
  );
}
