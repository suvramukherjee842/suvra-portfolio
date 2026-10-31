export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <h1>Suvra<br />Mukherjee</h1>
      <div className="hero-foot">
        <p className="hero-lead">
        Technical business analyst at Quantiphi. I turn business questions into requirements and data analysis that teams can build and measure.
      </p>
      <div>
        <a className="btn" href="mailto:suvramukherjee166@gmail.com?subject=Hello%20Suvra">
          Email me
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
        </div>
      </div>
    </section>
  );
}
