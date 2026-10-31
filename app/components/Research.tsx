"use client";
import Image from "next/image";
import { useState } from "react";

const scholarlyArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  name: "Cardiologist Recommendation Framework using Predictive Analytics",
  author: { "@type": "Person", name: "Suvra Mukherjee" },
  datePublished: "2024",
  isPartOf: {
    "@type": "Event",
    name: "ICCCNet 2024",
    location: {
      "@type": "Place",
      name: "Manchester Metropolitan University, United Kingdom",
    },
  },
  // publisher / DOI / url omitted — unconfirmed, see SEO-AUDIT.md blocking questions
  about: "Predictive analytics for cardiology recommendations using a Naive Bayes classifier and CoreNLP sentiment analysis",
};

const TABS = {
  Method: {
    img: { src: "/places/bayes-tab.jpg", alt: "Blue plaque for Thomas Bayes, originator of the statistical theory of probability", position: "28% 50%" },
    body: "A Naive Bayes classifier, combined with CoreNLP sentiment analysis of patient feedback, benchmarked against Logistic Regression, Decision Tree, SVM and KNN.",
  },
  Result: {
    img: null,
    body: "The Naive Bayes model reached 90.7% accuracy in recommending a cardiologist, ahead of the four other classifiers it was compared with.",
  },
  Venue: {
    img: { src: "/places/manchester-metropolitan-university-geograph-org-uk-4349234.jpg", alt: "Manchester Metropolitan University building", position: "40% 50%" },
    body: "Presented at ICCCNet 2024, Manchester Metropolitan University, United Kingdom. Written with Xi'an Jiaotong Liverpool University and the University of South Wales.",
  },
} as const;
type Tab = keyof typeof TABS;

export default function Research() {
  const [tab, setTab] = useState<Tab>("Method");
  const cur = TABS[tab];

  return (
    <section id="research" className="plate-band">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarlyArticleJsonLd) }}
      />
      <div className="plate">
        <div className="plate-pic" data-reveal>
          <div className="plate-square">
            {(Object.keys(TABS) as Tab[]).map((k) => {
              const img = TABS[k].img;
              return img ? (
                <Image key={k} src={img.src} alt={img.alt} fill sizes="(max-width: 860px) 100vw, 50vw"
                  style={{ objectPosition: img.position, opacity: k === tab ? 1 : 0, transition: "opacity .5s" }} />
              ) : null;
            })}
            {tab === "Result" && (
              <div className="plate-figure"><strong>90.7%</strong><span>accuracy, Naive Bayes</span></div>
            )}
          </div>
        </div>

        <div className="plate-text">
          <div className="tabs" role="tablist" aria-label="About the paper" data-reveal>
            {(Object.keys(TABS) as Tab[]).map((k) => (
              <button key={k} role="tab" id={`tab-${k}`} aria-selected={k === tab} aria-controls="research-panel" onClick={() => setTab(k)}>{k}</button>
            ))}
          </div>

          <div data-reveal style={{ ["--i" as string]: 1 }}>
            <h2 className="h2" style={{ marginBottom: 0 }}>Published research</h2>
            <p className="plate-title">Cardiologist Recommendation Framework using Predictive Analytics</p>
            <p className="plate-body" id="research-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>{cur.body}</p>
          </div>

          <div className="cells" data-reveal style={{ ["--i" as string]: 2 }}>
            <a href="mailto:suvramukherjee166@gmail.com?subject=Your%20ICCCNet%202024%20paper">Request the paper</a>
            <a href="#skills">The tools behind it</a>
          </div>
        </div>
      </div>
    </section>
  );
}
