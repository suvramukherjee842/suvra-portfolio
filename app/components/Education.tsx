const GROUPS = [
  {
    name: "University", stage: "kolkata",
    rows: [{ school: "KIIT Deemed to be University", detail: "B.Tech, Computer Science and Engineering, CGPA 8.04 / 10", when: "2021–2025" }],
  },
  {
    name: "Arts", stage: "kolkata",
    rows: [{ school: "Bangiya Sangeet Kala Kendra, Kolkata", detail: "Fine Arts Diploma, First Division with Distinction", when: "5 years" }],
  },
  {
    name: "School", stage: "durgapur",
    rows: [
      { school: "Zoom International School, Durgapur", detail: "Class 12, 92.7%", when: "2019–2021" },
      { school: "Carmel School, Steel Township, Durgapur", detail: "Class 10, ICSE, 84.83%", when: "2019" },
    ],
  },
];

export default function Education() {
  return (
    <section id="education" data-stage="kolkata">
      <h2 className="h2" data-reveal>Education</h2>
      <div className="measure">
        {GROUPS.map((g) => (
          <div key={g.name} className="rows-group" data-stage={g.stage}>
            <p data-reveal>{g.name}</p>
            {g.rows.map((r, i) => (
              <div key={r.school} className="row" data-reveal style={{ ["--i" as string]: i + 1 }}>
                <i aria-hidden="true" />
                <div><b>{r.school}</b><small>{r.detail}</small></div>
                <em>{r.when}</em>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
