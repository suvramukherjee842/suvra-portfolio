"use client";
import { useEffect, useRef } from "react";

const EDUCATION = [
  { period: "2021 to 2025", school: "KIIT Deemed to be University", detail: "B.Tech, Computer Science and Engineering", meta: "CGPA 8.04 / 10" },
  { period: "Five year diploma", school: "Bangiya Sangeet Kala Kendra, Kolkata", detail: "Fine Arts Diploma", meta: "First Division with Distinction" },
  { period: "2019 to 2021", school: "Zoom International School, Durgapur", detail: "Class 12", meta: "92.7%" },
  { period: "2019", school: "Carmel School, Steel Township, Durgapur", detail: "Class 10, ICSE", meta: "84.83%" },
];

export default function Education() {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const secRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const update = () => {
      const sec = secRef.current;
      const track = trackRef.current;
      const fill = fillRef.current;
      const arrow = arrowRef.current;
      if (!sec || !track || !fill || !arrow) return;
      const rect = sec.getBoundingClientRect();
      const vh = window.innerHeight;
      let p = (vh * 0.5 - rect.top) / rect.height;
      p = Math.max(0, Math.min(1, p));
      const h = track.offsetHeight;
      fill.style.height = `${p * h}px`;
      arrow.style.top = `${p * h}px`;
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  return (
    <section id="education" ref={secRef} style={{ maxWidth: 1180, margin: "0 auto", padding: "96px 28px", scrollMarginTop: 88 }}>
      <p style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C3E75B", margin: "0 0 14px" }}>Education</p>
      <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 600, letterSpacing: "-0.01em", margin: "0 0 40px" }}>Academic background</h2>

      <div ref={trackRef} style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: 19, top: 8, bottom: 8, width: 2, background: "rgba(255,255,255,0.1)" }} />
        <div ref={fillRef} style={{ position: "absolute", left: 19, top: 0, width: 2, height: 0, background: "#C3E75B", zIndex: 1 }} />
        <div ref={arrowRef} style={{ position: "absolute", left: 20, top: 0, transform: "translate(-50%, -50%)", width: 30, height: 30, borderRadius: "50%", background: "#C3E75B", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 3, boxShadow: "0 0 0 6px rgba(195,231,91,0.14)" }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0d0f0e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v13M6 12l6 6 6-6" />
          </svg>
        </div>

        {EDUCATION.map((ed) => (
          <div key={ed.school} style={{ position: "relative", paddingLeft: 56, paddingBottom: 26 }}>
            <span style={{ position: "absolute", left: 20, top: 9, transform: "translateX(-50%)", width: 13, height: 13, borderRadius: "50%", background: "#0d0f0e", border: "2px solid #C3E75B", zIndex: 2 }} />
            <div style={{ background: "#151917", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 16, padding: "22px 24px", display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, color: "#7f8a7d" }}>{ed.period}</div>
              <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 18, fontWeight: 600, margin: 0, lineHeight: 1.3 }}>{ed.school}</h3>
              <div style={{ fontSize: 14.5, color: "#B7BEB2", lineHeight: 1.5 }}>{ed.detail}</div>
              <div style={{ paddingTop: 4, fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 13, color: "#C3E75B" }}>{ed.meta}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
