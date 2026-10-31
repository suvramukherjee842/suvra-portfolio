const ISSUERS = [
  {
    issuer: "Google Cloud",
    certs: [
      { name: "Associate Cloud Engineer", desc: "Deploying and managing workloads and infrastructure on Google Cloud.", when: "2025–2028" },
      { name: "Generative AI Leader", desc: "Strategy and enterprise application of generative AI on Google Cloud.", when: "2025" },
    ],
  },
  {
    issuer: "Oracle",
    certs: [
      { name: "OCI Generative AI Professional", desc: "Designing and building generative AI solutions on Oracle Cloud Infrastructure.", when: "2025" },
      { name: "OCI AI Foundations Associate", desc: "Core AI and machine learning concepts on Oracle Cloud Infrastructure.", when: "2025" },
    ],
  },
  {
    issuer: "IBM",
    certs: [
      { name: "Data Science Professional Certificate", desc: "The full data science workflow, from Python to modelling.", when: "2024" },
    ],
  },
];

export default function Certs() {
  return (
    <section id="certifications">
      <div className="giant measure" data-reveal>
        <h2>Certified</h2>
      </div>
      <div className="bars measure">
        {ISSUERS.map((g, i) => (
          <details key={g.issuer} open={i === 0} data-reveal style={{ ["--i" as string]: i + 1 }}>
            <summary>{g.issuer}</summary>
            <ul>
              {g.certs.map((c) => (
                <li key={c.name}><b>{c.name}</b><em>{c.when}</em><span>{c.desc}</span></li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </section>
  );
}
