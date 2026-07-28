"use client";
import { useEffect, useRef, useState } from "react";

const DEFS = [
  { target: 2, suffix: "+", label: "Years of professional experience" },
  { target: 5, suffix: "", label: "Professional certifications completed" },
  { target: 2, suffix: "", label: "Companies worked with" },
];

export default function Stats() {
  const [counts, setCounts] = useState([0, 0, 0]);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const obs = new IntersectionObserver(([entry], o) => {
      if (entry.isIntersecting && !started) {
        setStarted(true);
        if (reduce) {
          setCounts(DEFS.map((d) => d.target));
        } else {
          const dur = 1700, start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / dur);
            const e = 1 - Math.pow(1 - t, 3);
            setCounts(DEFS.map((d) => d.target * e));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
        o.disconnect();
      }
    }, { threshold: 0.35 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  return (
    <section
      id="stats"
      ref={ref}
      aria-label="Key results"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        background: "#101312",
      }}
    >
      <div style={{
        maxWidth: 1180, margin: "0 auto", padding: "44px 28px",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 28,
      }}>
        {DEFS.map((d, i) => (
          <div key={i} style={{ padding: "4px 0" }}>
            <div style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 500,
              color: "#C3E75B", letterSpacing: "-0.02em", lineHeight: 1,
            }}>
              {Math.round(counts[i])}{d.suffix}
            </div>
            <div style={{ marginTop: 12, fontSize: 13.5, lineHeight: 1.45, color: "#9BA39A", maxWidth: "22ch" }}>
              {d.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
