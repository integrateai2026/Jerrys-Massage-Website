"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    stars: 5,
    quote:
      "Jerry's been my therapist for almost a decade. He's the only person I trust with my back — and the only reason I'm still running.",
    name: "Dana M.",
    role: "Marathon runner · Fargo",
    initial: "D",
  },
  {
    stars: 5,
    quote:
      "Through three pregnancies he's known exactly how to help. Calm, professional, and worth every penny.",
    name: "Rachel S.",
    role: "Moorhead",
    initial: "R",
  },
  {
    stars: 5,
    quote:
      "After my shoulder surgery, Jerry's neuromuscular work shaved months off my recovery. Hands of a craftsman.",
    name: "Brett K.",
    role: "West Fargo",
    initial: "B",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reviews-head > *", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".reviews-head",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".quote-card", {
        opacity: 0,
        y: 50,
        scale: 0.96,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".quotes-grid",
          start: "top 85%",
          once: true,
        },
      });

      // Stars pop in
      gsap.from(".quote-stars", {
        opacity: 0,
        scale: 0.5,
        stagger: 0.12,
        duration: 0.5,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ".quotes-grid",
          start: "top 85%",
          once: true,
        },
        delay: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="reviews"
      ref={sectionRef}
      style={{ padding: "110px 0", background: "var(--bg-2)" }}
    >
      <div className="mx-auto px-8" style={{ maxWidth: 1280 }}>
        <div
          className="reviews-head flex items-end justify-between gap-8 flex-wrap"
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
              Client reviews
            </span>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(40px, 4.5vw, 68px)",
                lineHeight: 1.05,
              }}
            >
              What Fargo clients{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                are saying.
              </em>
            </h2>
            <p style={{ color: "var(--ink-2)", marginTop: 28, maxWidth: 540 }}>
              Over 25 years of word-of-mouth in the Fargo–Moorhead area.
              Real clients, real results.
            </p>
          </div>
          <a
            href="https://www.facebook.com/Massage-Therapy-by-Jerry-Wendel-Daub-170540209656176/?fref=ts"
            className="btn btn-ghost"
          >
            Read more on Facebook <span className="arr">→</span>
          </a>
        </div>

        <div
          className="quotes-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="quote-card"
              style={{
                padding: "32px 28px",
                background: "var(--bg)",
                border: "1px solid var(--line)",
                borderRadius: 18,
                display: "flex",
                flexDirection: "column",
                gap: 20,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 24px 48px -24px color-mix(in oklab, var(--ink) 15%, transparent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                className="quote-stars"
                style={{
                  color: "var(--accent-2)",
                  letterSpacing: 4,
                  fontSize: 14,
                }}
              >
                {"★".repeat(t.stars)}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: 24,
                  lineHeight: 1.3,
                  color: "var(--ink)",
                  flex: 1,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginTop: "auto",
                }}
              >
                <span
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "var(--bg-3)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-instrument-serif)",
                    fontSize: 18,
                    color: "var(--ink)",
                    flexShrink: 0,
                  }}
                >
                  {t.initial}
                </span>
                <div>
                  <strong style={{ fontWeight: 500, fontSize: 14, display: "block" }}>
                    {t.name}
                  </strong>
                  <span
                    style={{
                      fontSize: 12,
                      color: "var(--ink-3)",
                      display: "block",
                    }}
                  >
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .quotes-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
