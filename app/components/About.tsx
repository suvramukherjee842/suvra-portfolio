import Image from "next/image";

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Suvra Mukherjee",
    jobTitle: "Business Analyst",
    worksFor: { "@type": "Organization", name: "Quantiphi Analytics" },
  },
};

export default function About() {
  return (
    <section id="about">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <h2 className="h2" data-reveal>About me</h2>
      <div className="letter measure">
        <div className="letter-face" data-reveal>
          <Image src="/portrait.jpg" alt="" fill sizes="56px" style={{ objectFit: "cover", objectPosition: "50% 18%" }} />
        </div>
        <p data-reveal>I work where data, product and delivery meet. My job is translating what a business actually needs into requirements a team can build against, and defining the metrics that tell us whether it worked.</p>
        <p data-reveal>I began in research, on predictive analytics and published methods, then moved into analytics and enterprise AI delivery. Today I turn business needs into technical requirements and analyse data to answer real questions.</p>
        <p data-reveal>Before engineering I <span className="mark">trained for five years in fine arts</span> and earned a diploma with distinction. It shaped how I structure information and how I explain it: clearly, and with intent.</p>
        <p data-reveal>Next, I am pursuing postgraduate study and looking for Technical Business Analyst and Data Analyst roles focused on analysis, requirements and data driven products.</p>
        <p className="sign" data-reveal>
          <strong>Suvra Mukherjee</strong>
          <span>Business Analyst, Quantiphi Analytics</span>
        </p>
      </div>
    </section>
  );
}
