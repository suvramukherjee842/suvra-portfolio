const MAIL = "suvramukherjee166@gmail.com";

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-row" data-reveal><h2>Contact</h2></div>
      <div className="contact-row" data-reveal>Suvra Mukherjee</div>
      <div className="contact-row" data-reveal><a className="mail" href={`mailto:${MAIL}`}>{MAIL}</a></div>
      <div className="contact-row" data-reveal>Open to analyst roles</div>
      <div className="contact-row hello" data-reveal>
        Say hello
        <a className="round" href={`mailto:${MAIL}?subject=Hello%20Suvra`} aria-label="Email Suvra">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
      </div>
    </section>
  );
}
