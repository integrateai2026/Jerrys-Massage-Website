"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    n: "1",
    title: "Pick your time",
    desc: "Book online 24/7 or text Mikky — no waiting on hold, no back-and-forth. Same-week spots are usually open.",
    actions: [
      { href: "https://www.massagebyjerry.com/bookonline", label: "Book online" },
      { href: "sms:7019690150", label: "Text 701-969-0150" },
    ],
  },
  {
    n: "2",
    title: "Tell Jerry what's bothering you",
    desc: "When you arrive, give Jerry a quick rundown — what hurts, how long, what you've tried. He builds the session around you.",
    actions: [
      { href: "mailto:massagebyjerry2@gmail.com", label: "Email Jerry first" },
    ],
  },
  {
    n: "3",
    title: "Walk out feeling better",
    desc: "Most clients rebook before they leave. Ask about the 7-session bundle to save $25 and lock in your schedule.",
    actions: [
      { href: "#gift", label: "See the bundle deal" },
    ],
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".how-head > *", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".how-head",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".step-card", {
        opacity: 0,
        y: 50,
        x: -20,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".steps-grid",
          start: "top 85%",
          once: true,
        },
      });

      // Number counter-drop animation
      gsap.from(".step-num", {
        opacity: 0,
        y: -40,
        scale: 1.4,
        stagger: 0.15,
        duration: 0.7,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".steps-grid",
          start: "top 85%",
          once: true,
        },
        delay: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how"
      ref={sectionRef}
      style={{ padding: "110px 0", background: "var(--bg)" }}
    >
      <div className="mx-auto px-8" style={{ maxWidth: 1280 }}>
        <div
          className="how-head flex items-end justify-between gap-8 flex-wrap"
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
              How it works
            </span>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(40px, 4.5vw, 68px)",
                lineHeight: 1.05,
              }}
            >
              Book in{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                under a minute.
              </em>
            </h2>
            <p style={{ color: "var(--ink-2)", marginTop: 28, maxWidth: 540 }}>
              Same-week appointments are almost always available. Pick what works for you.
            </p>
          </div>
        </div>

        <div
          className="steps-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {steps.map((s, i) => (
            <div
              key={i}
              className="step-card"
              style={{
                padding: "32px 28px",
                background: "var(--bg-2)",
                borderRadius: 18,
                border: "1px solid var(--line)",
                position: "relative",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 20px 40px -20px color-mix(in oklab, var(--ink) 15%, transparent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <span
                className="step-num"
                style={{
                  position: "absolute",
                  right: 28,
                  top: 28,
                  fontFamily: "var(--font-instrument-serif)",
                  fontStyle: "italic",
                  fontSize: 52,
                  color: "var(--accent)",
                  lineHeight: 1,
                }}
              >
                {s.n}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: 26,
                  marginBottom: 12,
                  maxWidth: "70%",
                }}
              >
                {s.title}
              </h3>
              <p style={{ color: "var(--ink-2)", fontSize: 15 }}>{s.desc}</p>
              <div
                style={{
                  marginTop: 22,
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                }}
              >
                {s.actions.map((a) => (
                  <a
                    key={a.href}
                    href={a.href}
                    style={{
                      fontSize: 13,
                      color: "var(--accent)",
                      borderBottom: "1px solid var(--accent)",
                      paddingBottom: 2,
                      transition: "color 0.15s, border-color 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--ink)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--ink)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--accent)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--accent)";
                    }}
                  >
                    {a.label} →
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
