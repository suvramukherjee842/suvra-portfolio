export default function Research() {
  return (
    <section id="research" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "#101312" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "96px 28px", scrollMarginTop: 88 }}>
        <p style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C3E75B", margin: "0 0 14px" }}>Research</p>
        <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 600, letterSpacing: "-0.01em", margin: "0 0 40px" }}>Published work</h2>
        <article style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 40, background: "#151917", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 20, padding: "clamp(28px, 3.4vw, 44px)" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(20px, 2.4vw, 26px)", fontWeight: 600, lineHeight: 1.25, margin: "0 0 20px", maxWidth: "30ch" }}>
              Cardiologist Recommendation Framework using Predictive Analytics
            </h3>
            <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "#D4D9CF", margin: "0 0 20px", maxWidth: "60ch" }}>
              A Naive Bayes classifier reaching 90.7% accuracy, combined with CoreNLP sentiment analysis, benchmarked against Logistic Regression, Decision Tree, SVM, and KNN.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 14.5, color: "#9BA39A" }}>
              <div>Presented at ICCCNet 2024, Manchester Metropolitan University, United Kingdom.</div>
              <div>In collaboration with Xi&apos;an Jiaotong Liverpool University and University of South Wales.</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 16, borderLeft: "1px solid rgba(255,255,255,0.08)", paddingLeft: 36 }}>
            <div>
              <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "clamp(34px, 4.5vw, 48px)", fontWeight: 500, color: "#C3E75B", lineHeight: 1 }}>90.7%</div>
              <div style={{ fontSize: 14, color: "#9BA39A", marginTop: 8 }}>Model accuracy, Naive Bayes classifier</div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Naive Bayes", "CoreNLP", "Sentiment Analysis"].map((t) => (
                <span key={t} style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, padding: "6px 12px", borderRadius: 999, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#B7BEB2" }}>{t}</span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
