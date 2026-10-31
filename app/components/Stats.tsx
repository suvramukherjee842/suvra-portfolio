"use client";
import { useEffect, useRef, useState } from "react";

const DEFS = [
  { target: 2, prefix: "", suffix: "+", label: "years delivering analysis and requirements, in enterprise AI and in marketing." },
  { target: 3, prefix: "$", suffix: "M", label: "enterprise data platform whose Vector Store requirements I wrote." },
  { target: 80, prefix: "", suffix: "k", label: "employees served by the AI coaching agent I defined on Copilot Studio." },
  { target: 12, prefix: "", suffix: "%", label: "lift in campaign conversion after finding the drop in Salesforce CRM data." },
  { target: 5, prefix: "", suffix: "", label: "professional certifications across Google Cloud, Oracle and IBM." },
];

export default function Stats() {
  const [counts, setCounts] = useState(DEFS.map((d) => d.target));
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setCounts(DEFS.map(() => 0));
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / 1400);
        const e = 1 - Math.pow(1 - t, 3);
        setCounts(DEFS.map((d) => d.target * e));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.35 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="stats" ref={ref}>
      <h2 className="h2" data-reveal>In numbers</h2>
      <dl className="figures">
        {DEFS.map((d, i) => (
          <div key={d.label} data-reveal style={{ ["--i" as string]: i + 1 }}>
            <dt>{d.prefix}{Math.round(counts[i])}{d.suffix}</dt>
            <dd>{d.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
