"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // NOTE: Never animate opacity on nav elements — they must always be visible.
    // Only animate position (x/y) so elements are visible even if GSAP fails.
    const ctx = gsap.context(() => {
      gsap.from(".nav-logo", {
        x: -16,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.1,
      });
      gsap.from(".nav-link", {
        y: -8,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
        delay: 0.2,
        clearProps: "transform",
      });
      gsap.from(".nav-cta-btn", {
        x: 16,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.25,
        clearProps: "transform",
      });
    }, navRef);

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
      gsap.from(".mobile-nav-link", {
        opacity: 0,
        x: -20,
        stagger: 0.06,
        duration: 0.4,
        ease: "power3.out",
        delay: 0.1,
      });
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#why", label: "Why Jerry" },
    { href: "#faq", label: "FAQ" },
    { href: "https://www.massagebyjerry.com/blog", label: "Health Ideas" },
    { href: "#contact", label: "Contact" },
  ];

  const allLinks = [
    { href: "#services", label: "Services" },
    { href: "#how", label: "How it works" },
    { href: "#why", label: "Why Jerry" },
    { href: "#reviews", label: "Reviews" },
    { href: "#faq", label: "FAQ" },
    { href: "https://www.massagebyjerry.com/blog", label: "Health Ideas" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className="sticky top-0 z-50 border-b transition-all duration-300"
        style={{
          background: scrolled
            ? "color-mix(in oklab, var(--bg) 94%, transparent)"
            : "color-mix(in oklab, var(--bg) 88%, transparent)",
          backdropFilter: "blur(10px)",
          borderColor: "var(--line)",
        }}
      >
        <div
          className="mx-auto px-8 flex items-center justify-between gap-6"
          style={{ maxWidth: 1280, height: 78 }}
        >
          {/* Logo */}
          <a href="#top" className="nav-logo flex items-center gap-3">
            <span
              className="flex items-center justify-center rounded-full"
              style={{
                width: 36,
                height: 36,
                background: "var(--accent)",
                color: "var(--accent-ink)",
                fontFamily: "var(--font-instrument-serif)",
                fontSize: 22,
                fontStyle: "italic",
                flexShrink: 0,
              }}
            >
              J
            </span>
            <span
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: 24,
                letterSpacing: "-0.01em",
              }}
            >
              Massage by{" "}
              <em style={{ fontStyle: "italic", color: "var(--ink-2)" }}>
                Jerry
              </em>
            </span>
          </a>

          {/* Desktop links */}
          <div className="nav-desktop-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link rounded-full px-3 py-2 text-sm transition-all duration-150 hover:opacity-100"
                style={{
                  color: "var(--ink-2)",
                  fontSize: 14,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "var(--bg-2)";
                  (e.currentTarget as HTMLElement).style.color = "var(--ink)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.color = "var(--ink-2)";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex items-center gap-3">
            <a
              href="tel:7019690150"
              className="nav-cta-btn btn btn-ghost nav-call-btn"
              style={{ padding: "10px 18px", fontSize: 14 }}
            >
              ✆ Call
            </a>
            <a
              href="https://www.massagebyjerry.com/bookonline"
              className="nav-cta-btn btn btn-primary"
              style={{ padding: "10px 18px", fontSize: 14 }}
            >
              Book online <span className="arr">→</span>
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="nav-burger-btn flex items-center justify-center rounded-full border transition-all hover:opacity-90"
              style={{
                width: 42,
                height: 42,
                borderColor: "var(--line)",
                background: "transparent",
                cursor: "pointer",
              }}
              aria-label="Open menu"
            >
              <svg width="18" height="14" fill="none" viewBox="0 0 18 14">
                <line
                  x1="0"
                  y1="1"
                  x2="18"
                  y2="1"
                  stroke="var(--ink)"
                  strokeWidth="1.5"
                />
                <line
                  x1="0"
                  y1="7"
                  x2="18"
                  y2="7"
                  stroke="var(--ink)"
                  strokeWidth="1.5"
                />
                <line
                  x1="0"
                  y1="13"
                  x2="18"
                  y2="13"
                  stroke="var(--ink)"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-60 flex flex-col gap-1 p-8"
          style={{ background: "var(--bg)", zIndex: 60 }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute right-6 top-6 flex items-center justify-center rounded-full border transition-colors"
            style={{
              width: 42,
              height: 42,
              borderColor: "var(--line)",
              background: "transparent",
              fontSize: 22,
              color: "var(--ink)",
              cursor: "pointer",
            }}
            aria-label="Close menu"
          >
            ×
          </button>
          <div className="mt-8">
            {allLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="mobile-nav-link block border-b py-3"
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: 38,
                  borderColor: "var(--line)",
                  color: "var(--ink)",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="https://www.massagebyjerry.com/bookonline"
              onClick={() => setMenuOpen(false)}
              className="btn btn-primary text-center justify-center"
              style={{ padding: "18px 22px" }}
            >
              Book online →
            </a>
            <a
              href="tel:7019690150"
              onClick={() => setMenuOpen(false)}
              className="btn btn-ghost text-center justify-center"
              style={{ padding: "18px 22px" }}
            >
              ✆ Call 701-969-0150
            </a>
          </div>
        </div>
      )}
    </>
  );
}
