"use client";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    [...NAV_ITEMS.map((n) => n.id), "certifications", "stats", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="nav" aria-label="Primary">
      {NAV_ITEMS.map(({ id, label }) => (
        <a key={id} href={`#${id}`} aria-current={active === id || (id === "education" && active === "certifications") ? "true" : undefined}>
          {label}
        </a>
      ))}
      <a href="#contact" className="nav-cta">Contact</a>
    </nav>
  );
}
