"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const deals = [
  {
    eyebrow: "Gift cards",
    title: "The gift they'll actually use.",
    desc: "Send a gift card instantly by email — or schedule it for a birthday or anniversary. The recipient books their own appointment at whatever service and length works for them.",
    cta: { label: "Buy a gift card", href: "https://squareup.com/gift/CRRFQ011Q5V88/order" },
    accent: true,
  },
  {
    eyebrow: "Refer a friend",
    title: "Refer a friend. Both of you save.",
    desc: "Bring someone new to Jerry and they get 50% off their first session. You get 50% off your next one. No limits on how many friends you refer.",
    cta: { label: "Book online", href: "https://www.massagebyjerry.com/bookonline" },
    accent: false,
  },
  {
    eyebrow: "7-session package",
    title: "Commit to feeling better. Save $25.",
    desc: "Prepay for 7 sessions and save $25 total. Use them on your own schedule — any service, any length, mix and match as needed.",
    cta: { label: "Book to redeem", href: "https://www.massagebyjerry.com/bookonline" },
    accent: false,
  },
];

export default function Specials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".specials-head > *", {
        opacity: 0,
        y: 24,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".specials-head", start: "top 85%", once: true },
      });

      gsap.from(".special-card", {
        opacity: 0,
        y: 40,
        stagger: 0.13,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: { trigger: ".specials-grid", start: "top 85%", once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="gift"
      ref={sectionRef}
      style={{ padding: "110px 0", background: "var(--bg)" }}
    >
      <div className="mx-auto px-8" style={{ maxWidth: 1280 }}>
        {/* Heading */}
        <div
          className="specials-head"
          style={{ marginBottom: 56 }}
        >
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
            Specials
          </span>
          <h2
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontSize: "clamp(40px, 4.5vw, 68px)",
              lineHeight: 1.05,
            }}
          >
            Save more.{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
              Feel better.
            </em>
          </h2>
        </div>

        {/* Cards */}
        <div
          className="specials-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {deals.map((deal, i) => (
            <div
              key={i}
              className="special-card"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "36px 32px 32px",
                borderRadius: 22,
                background: deal.accent ? "var(--accent)" : "var(--bg-2)",
                border: deal.accent ? "none" : "1px solid var(--line)",
                color: deal.accent ? "var(--accent-ink)" : "var(--ink)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px -20px color-mix(in oklab, var(--ink) 18%, transparent)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Eyebrow */}
              <span
                style={{
                  fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: deal.accent
                    ? "color-mix(in oklab, var(--accent-ink) 70%, transparent)"
                    : "var(--ink-3)",
                  marginBottom: 18,
                  display: "block",
                }}
              >
                {deal.eyebrow}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "clamp(26px, 2.2vw, 34px)",
                  lineHeight: 1.1,
                  fontWeight: 400,
                  marginBottom: 16,
                  color: deal.accent ? "var(--accent-ink)" : "var(--ink)",
                }}
              >
                {deal.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: deal.accent
                    ? "color-mix(in oklab, var(--accent-ink) 85%, transparent)"
                    : "var(--ink-2)",
                  flex: 1,
                  marginBottom: 32,
                }}
              >
                {deal.desc}
              </p>

              {/* CTA */}
              <a
                href={deal.cta.href}
                className="btn"
                style={{
                  alignSelf: "flex-start",
                  background: deal.accent ? "var(--bg)" : "var(--ink)",
                  color: deal.accent ? "var(--ink)" : "var(--bg)",
                  borderColor: "transparent",
                  fontSize: 14,
                  padding: "12px 22px",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = deal.accent ? "#fff" : "oklch(0.30 0.015 60)";
                  el.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = deal.accent ? "var(--bg)" : "var(--ink)";
                  el.style.transform = "translateY(0)";
                }}
              >
                {deal.cta.label} <span className="arr">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .specials-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .specials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
