"use client";
import { useEffect } from "react";

// Section entrances. Content is only hidden once this has run (.js on <html>),
// so the page reads fine without script.
export default function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); }
      }),
      { threshold: 0.01 }
    );
    els.forEach((el) => obs.observe(el));
    document.documentElement.classList.add("js");
    return () => obs.disconnect();
  }, []);
  return null;
}
