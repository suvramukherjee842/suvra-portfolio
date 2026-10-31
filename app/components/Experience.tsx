const EXPERIENCE = [
  {
    org: "Quantiphi Analytics", role: "Business Analyst", period: "Jan 2025 to now",
    items: [
      ["Vector Store requirements, $3M data platform", "Requirements", "Wrote the data and functional requirements for the Vector Store component of a $3M enterprise data platform, and coordinated with the engineering teams building around it."],
      ["AI coaching agent for 80,000 employees", "Product definition", "Defined how an AI coaching agent for more than 80,000 employees should work on Microsoft Copilot Studio, including intent routing and how it connects to company knowledge sources."],
      ["User stories and acceptance criteria", "Delivery", "Turned business requests into clear user stories and acceptance criteria that engineers could build and test against."],
      ["Requirement gathering sessions", "Workshops", "Ran requirement gathering sessions with business and technical teams to agree on what to build and in what order."],
      ["Usage and performance analysis", "Analysis", "Analyzed usage and performance data to answer questions from the product and delivery teams."],
      ["Sprint planning, standups, grooming", "Agile", "Ran sprint planning, daily standups, and backlog grooming to keep the work organized and on track."],
      ["Proposals, decks and SOWs", "Writing", "Wrote 4 analysis documents, more than 15 proposals, more than 25 slide decks, and more than 6 SOWs for client and internal leadership."],
    ],
  },
  {
    org: "HighRadius Corporation", role: "Marketing Intern", period: "Jun to Dec 2024",
    items: [
      ["Campaign conversion, up 12%", "SQL analysis", "Analyzed Salesforce CRM data with SQL to find where campaign conversion was dropping, which led to a 12% improvement in conversion rate."],
      ["Campaign and funnel reporting", "Reporting", "Built and ran reports on campaign and funnel performance so the marketing team could see what was working and what was not."],
      ["30 SEO articles, 4,000 visitors", "Content", "Planned and wrote content across more than 30 SEO articles, which brought in more than 4,000 organic visitors."],
      ["Channel performance tracking", "Measurement", "Tracked how each article and channel performed and used that to decide what content to produce next."],
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="h2" data-reveal>Experience</h2>
      {EXPERIENCE.map((e) => (
        <div key={e.org} className="ledger-group">
          <div className="ledger-head" data-reveal>
            <h3>{e.org}</h3>
            <p>{e.role}<br />{e.period}</p>
          </div>
          <div className="ledger">
            {e.items.map(([name, kind, detail], i) => (
              <details key={name} data-reveal style={{ ["--i" as string]: i % 4 }}>
                <summary><span>{name}</span><span>{kind}</span></summary>
                <p>{detail}</p>
              </details>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
