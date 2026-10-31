import Image from "next/image";

const LINKS = [
  ["About", "#about"], ["Experience", "#experience"], ["Research", "#research"],
  ["Education", "#education"], ["Skills", "#skills"], ["Contact", "#contact"],
];

const CREDITS = [
  ["Victoria Memorial Kolkata at night", "https://commons.wikimedia.org/wiki/File:Victoria_Memorial_Kolkata_at_night.jpg", "DeepanjanGhosh", "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0"],
  ["Durgapur Steel Plant", "https://commons.wikimedia.org/wiki/File:Durgapur_Steel_Plant_-_7354700090.jpg", "shankar s.", "CC BY 2.0", "https://creativecommons.org/licenses/by/2.0"],
  ["Manchester Metropolitan University", "https://commons.wikimedia.org/wiki/File:Manchester_Metropolitan_University_-_geograph.org.uk_-_4349234.jpg", "Peter McDermott", "CC BY-SA 2.0", "https://creativecommons.org/licenses/by-sa/2.0"],
  ["Bayes tab", "https://commons.wikimedia.org/wiki/File:Bayes_tab.jpg", "Simon Harriyott", "CC BY 2.0", "https://creativecommons.org/licenses/by/2.0"],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-pic">
        <Image src="/portrait.jpg" alt="" fill sizes="(max-width: 860px) 100vw, 50vw" />
      </div>
      <div className="footer-menu">
        <a href="#top" className="wordmark">Suvra Mukherjee</a>
        <nav aria-label="Footer">
          {LINKS.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="footer-blocks">
          <div><b>Email</b><a href="mailto:suvramukherjee166@gmail.com">suvramukherjee166@gmail.com</a></div>
          <div><b>Now</b>Business Analyst at Quantiphi Analytics</div>
        </div>
        <p className="credits">
          Pictures, via Wikimedia Commons:{" "}
          {CREDITS.map(([title, page, by, lic, licUrl], i) => (
            <span key={page}>
              <a href={page}>“{title}”</a> by {by}, <a href={licUrl}>{lic}</a>{i < CREDITS.length - 1 ? "; " : "."}
            </span>
          ))}{" "}
          © {new Date().getFullYear()} Suvra Mukherjee.
        </p>
      </div>
    </footer>
  );
}
