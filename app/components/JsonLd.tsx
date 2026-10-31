import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "../lib/site-config";

const KNOWS_ABOUT = [
  "SQL", "Python", "Data Analysis", "Data Visualization",
  "Tableau", "Power BI", "Google Cloud Platform", "Oracle Cloud Infrastructure",
  "Generative AI", "Prompt Engineering", "Business Analysis",
  "Requirements Gathering", "Agile Methodologies", "Stakeholder Management",
];

export default function JsonLd() {
  const sameAs = Object.values(SOCIAL_LINKS).filter(Boolean);

  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Suvra Mukherjee",
    alternateName: "SM",
    jobTitle: "Business Analyst",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    image: `${SITE_URL}/portrait.jpg`,
    worksFor: {
      "@type": "Organization",
      name: "Quantiphi Analytics",
    },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "KIIT Deemed to be University" },
      { "@type": "EducationalOrganization", name: "Bangiya Sangeet Kala Kendra" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressCountry: "IN",
    },
    knowsAbout: KNOWS_ABOUT,
    ...(sameAs.length ? { sameAs } : {}),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#person` },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [person, website],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
