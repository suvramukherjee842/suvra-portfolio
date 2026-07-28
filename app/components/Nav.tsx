"use client";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "certifications", label: "Certifications" },
  { id: "skills", label: "Skills" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 84, behavior: "smooth" });
}

export default function Nav() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV_ITEMS.forEach(({ id }) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .nav-links-desktop { display: flex; }
        .nav-mobile-toggle { display: none; }
        @media (max-width: 720px) {
          .nav-links-desktop { display: none; }
          .nav-mobile-toggle { display: flex; }
          .nav-contact-btn { padding: 9px 14px !important; font-size: 13px !important; }
        }
      `}</style>

      <nav
        aria-label="Primary"
        style={{
          position: "fixed", top: 16, left: "50%", transform: "translateX(-50%)",
          zIndex: 50, width: "min(1180px, calc(100% - 20px))",
        }}
      >
        <div style={{
          display: "flex", alignItems: "center", gap: 6,
          padding: "7px 7px 7px 14px",
          background: "rgba(18,22,20,0.82)",
          backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 999,
          boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
        }}>
          <a
            href="#top"
            onClick={(e) => { e.preventDefault(); setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{
              flexShrink: 0, display: "flex", alignItems: "center",
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 600, color: "#EDF0EA", fontSize: 15, letterSpacing: "-0.01em",
              padding: "6px 4px",
            }}
          >
            Suvra Mukherjee
          </a>

          <div className="nav-links-desktop" style={{
            flex: 1, gap: 2, justifyContent: "center",
            overflowX: "auto", scrollbarWidth: "none", padding: "0 4px",
          }}>
            {NAV_ITEMS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                style={{
                  padding: "9px 14px", borderRadius: 999, fontSize: 14, whiteSpace: "nowrap",
                  transition: "color .2s, background .2s",
                  color: active === id ? "#C3E75B" : "#9BA39A",
                  background: active === id ? "rgba(195,231,91,0.12)" : "transparent",
                }}
              >{label}</a>
            ))}
          </div>

          <div style={{ flex: 1 }} />

          <button
            className="nav-mobile-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{
              flexShrink: 0, width: 38, height: 38, borderRadius: 999,
              background: "transparent", border: "1px solid rgba(255,255,255,0.14)",
              color: "#EDF0EA", cursor: "pointer",
              alignItems: "center", justifyContent: "center", padding: 0,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6l-12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); setOpen(false); scrollTo("contact"); }}
            className="nav-contact-btn"
            style={{
              flexShrink: 0, padding: "10px 18px", borderRadius: 999,
              background: "#C3E75B", color: "#0d0f0e", fontWeight: 600, fontSize: 14,
              transition: "background .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#d6f07f")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#C3E75B")}
          >Contact</a>
        </div>

        {open && (
          <div style={{
            marginTop: 8, padding: 8,
            background: "rgba(18,22,20,0.94)",
            backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 20,
            boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
            display: "flex", flexDirection: "column", gap: 2,
          }}>
            {NAV_ITEMS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); setOpen(false); scrollTo(id); }}
                style={{
                  padding: "12px 16px", borderRadius: 14, fontSize: 15,
                  color: active === id ? "#C3E75B" : "#EDF0EA",
                  background: active === id ? "rgba(195,231,91,0.12)" : "transparent",
                }}
              >{label}</a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
