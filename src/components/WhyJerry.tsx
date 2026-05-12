"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: "✦",
    title: "Experience that shows",
    desc: "25+ years and thousands of clients later, Jerry can read a body in the first 90 seconds.",
  },
  {
    icon: "✌",
    title: "Built for real bodies",
    desc: "Athletes, expecting moms, seniors, post-surgical clients — pressure and pacing tuned to you.",
  },
  {
    icon: "◉",
    title: "One therapist, one room",
    desc: "You see Jerry every time. Same hands, same space, same quiet attention.",
  },
  {
    icon: "✺",
    title: "Fair, flat pricing",
    desc: "Every modality, every time, the same rate. Refer a friend or grab a package to save more.",
  },
];

export default function WhyJerry() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-head > *", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-head",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".val-card", {
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".vals-grid",
          start: "top 85%",
          once: true,
        },
      });

      // Icon spin on scroll enter
      gsap.from(".val-icon", {
        rotation: -180,
        scale: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ".vals-grid",
          start: "top 85%",
          once: true,
        },
        delay: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ padding: "110px 0", background: "var(--bg-2)" }}
    >
      <div className="mx-auto px-8" style={{ maxWidth: 1280 }}>
        <div
          className="why-head flex items-end justify-between gap-8 flex-wrap"
          style={{ marginBottom: 56 }}
        >
          <div style={{ maxWidth: 720 }}>
            <span
              style={{
                fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
                display: "block",
                marginBottom: 22,
              }}
            >
              Why Jerry
            </span>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(40px, 4.5vw, 68px)",
                lineHeight: 1.05,
              }}
            >
              Not your typical{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                spa massage.
              </em>
            </h2>
            <p style={{ color: "var(--ink-2)", marginTop: 28, maxWidth: 540 }}>
              Clinically informed, deeply experienced bodywork — at neighborhood
              prices, in a quiet, private setting.
            </p>
          </div>
        </div>

        <div
          className="vals-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            background: "var(--line)",
            border: "1px solid var(--line)",
            borderRadius: 18,
            overflow: "hidden",
          }}
        >
          {values.map((v, i) => (
            <div
              key={i}
              className="val-card"
              style={{
                background: "var(--bg)",
                padding: "32px 26px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                minHeight: 200,
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "var(--bg-2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--bg)";
              }}
            >
              <span
                className="val-icon"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  background: "var(--bg-3)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-instrument-serif)",
                  fontStyle: "italic",
                  fontSize: 22,
                  color: "var(--ink)",
                }}
              >
                {v.icon}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: 24,
                  marginTop: 8,
                }}
              >
                {v.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--ink-2)" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .vals-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .vals-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
