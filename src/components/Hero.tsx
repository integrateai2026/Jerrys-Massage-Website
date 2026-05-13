"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(SplitText);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Eyebrow
      tl.from(".hero-eyebrow", {
        opacity: 0,
        y: 16,
        duration: 0.6,
        ease: "power3.out",
      });

      // Split headline lines
      const split = new SplitText(".hero-headline", { type: "lines" });
      tl.from(
        split.lines,
        {
          opacity: 0,
          y: 60,
          duration: 0.8,
          stagger: 0.12,
          ease: "power4.out",
        },
        "-=0.3"
      );

      // Lede text
      tl.from(
        ".hero-lede",
        { opacity: 0, y: 20, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      );

      // CTA buttons
      tl.from(
        ".hero-cta",
        {
          opacity: 0,
          y: 16,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      );

      // Meta stats
      tl.from(
        ".hero-stat",
        {
          opacity: 0,
          y: 20,
          stagger: 0.08,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      );

      // Hero image
      tl.from(
        ".hero-art-wrap",
        {
          opacity: 0,
          scale: 0.94,
          y: 30,
          duration: 1,
          ease: "power3.out",
        },
        0.5
      );

      // Quick book card
      tl.from(
        ".quick-book-card",
        {
          opacity: 0,
          y: -24,
          scale: 0.97,
          duration: 0.7,
          ease: "power3.out",
        },
        0.6
      );

      // Tag floats in
      tl.from(
        ".hero-tag",
        {
          opacity: 0,
          x: -20,
          duration: 0.6,
          ease: "back.out(1.4)",
        },
        1.2
      );

      // Floating parallax on image
      gsap.to(".hero-art-inner", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-art-wrap",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);



  return (
    <header
      id="top"
      ref={heroRef}
      className="relative"
      style={{ padding: "56px 0 80px" }}
    >
      <div
        className="mx-auto px-8"
        style={{ maxWidth: 1280 }}
      >
        <div
          className="hero-grid grid items-end"
          style={{
            gridTemplateColumns: "1.2fr 1fr",
            gap: 64,
          }}
        >
          {/* Left column */}
          <div>
            <span
              className="hero-eyebrow block"
              style={{
                fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
                marginBottom: 22,
              }}
            >
              Licensed Massage Therapy · Fargo, ND
            </span>

            <h1
              className="hero-headline"
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(60px, 8.5vw, 132px)",
                lineHeight: 0.96,
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              25 years of helping
              <br />
              Fargo{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                feel better.
              </em>
            </h1>

            <p
              className="hero-lede"
              style={{
                maxWidth: 460,
                color: "var(--ink-2)",
                fontSize: 18,
                marginTop: 28,
              }}
            >
              Jerry has helped thousands of Fargo–Moorhead clients get out of
              pain and stay that way. Deep tissue, Swedish, sports, pregnancy,
              cupping, and more — every session built around what your body
              needs that day.
            </p>

            <div
              className="flex flex-wrap gap-3 items-center"
              style={{ marginTop: 32 }}
            >
              <a
                href="tel:7019690150"
                className="hero-cta btn btn-ghost"
              >
                ✆ Text or call Mikky · 701-969-0150
              </a>
              <a
                href="#services"
                className="btn btn-ghost"
              >
                View services <span className="arr">→</span>
              </a>
            </div>

          </div>

          {/* Right column — quick book card + arch image */}
          <div className="hero-right-col" style={{ display: "flex", flexDirection: "column", gap: 20, width: "100%" }}>

            {/* Quick Book card */}
            <div
              className="quick-book-card"
              style={{
                background: "var(--bg-2)",
                border: "1px solid var(--line)",
                borderRadius: 22,
                padding: "28px 28px 24px",
              }}
            >
              {/* Eyebrow */}
              <span style={{
                fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
                display: "block",
                marginBottom: 14,
              }}>
                Quick Book
              </span>

              {/* Heading */}
              <h3 style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(22px, 2.4vw, 30px)",
                fontWeight: 400,
                lineHeight: 1.1,
                marginBottom: 22,
                color: "var(--ink)",
              }}>
                Book this week
              </h3>

              {/* Pricing rows */}
              {[
                { label: "30 min — focus session",  price: "$45" },
                { label: "60 min — full body",       price: "$80" },
                { label: "90 min — deep work",       price: "$110" },
              ].map((row, i) => (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 0",
                  borderTop: "1px solid var(--line)",
                }}>
                  <span style={{ fontSize: 15, color: "var(--ink-2)" }}>
                    {row.label}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-instrument-serif)",
                    fontSize: 20,
                    color: "var(--accent)",
                    fontWeight: 400,
                  }}>
                    {row.price}
                  </span>
                </div>
              ))}

              {/* CTA */}
              <a
                href="https://www.massagebyjerry.com/bookonline"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  marginTop: 20,
                  padding: "16px 24px",
                  borderRadius: 999,
                  background: "var(--ink)",
                  color: "var(--bg)",
                  fontSize: 15,
                  fontWeight: 500,
                  letterSpacing: "0.01em",
                  textDecoration: "none",
                  transition: "background 0.18s ease, transform 0.1s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "oklch(0.30 0.015 60)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "var(--ink)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                Book online
              </a>
            </div>

          {/* Arch image */}
          <div className="hero-art-wrap relative" style={{ aspectRatio: "4/3", borderRadius: "280px 280px 24px 24px", overflow: "hidden", background: "var(--bg-3)", width: "100%" }}>
            <div
              className="hero-art-inner absolute inset-0 scale-110"
              style={{ transformOrigin: "center center" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://static.wixstatic.com/media/a68ce3_a84a5eeceedd48d889ac5cd41b531631~mv2.jpg/v1/crop/x_260,y_124,w_1506,h_1152/fill/w_900,h_900,al_c,q_85,enc_avif,quality_auto/Back%20massage%20therapy_edited.jpg"
                alt="Back massage therapy session"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Tag */}
            <div
              className="hero-tag absolute"
              style={{
                left: -12,
                bottom: 36,
                background: "var(--bg)",
                border: "1px solid var(--line)",
                borderRadius: 999,
                padding: "12px 18px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 13,
                boxShadow: "0 12px 28px -16px rgba(0,0,0,0.25)",
                zIndex: 2,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  boxShadow:
                    "0 0 0 4px color-mix(in oklab, var(--accent) 20%, transparent)",
                  flexShrink: 0,
                  animation: "heroPulse 2s ease-in-out infinite",
                }}
              />
              <span>
                <strong>Open today</strong> · Same-week appointments
              </span>
            </div>
          </div>
          {/* end hero-art-wrap */}
          </div>
          {/* end hero-right-col */}
        </div>
      </div>

      <style>{`
        @keyframes heroPulse {
          0%, 100% { box-shadow: 0 0 0 4px color-mix(in oklab, var(--accent) 20%, transparent); }
          50% { box-shadow: 0 0 0 8px color-mix(in oklab, var(--accent) 8%, transparent); }
        }
        @media (max-width: 980px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-art-wrap { max-width: 460px; margin: 0 auto; }
        }
      `}</style>
    </header>
  );
}
