"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Gift() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Whole card slides up
      gsap.from(".gift-card", {
        opacity: 0,
        y: 60,
        scale: 0.97,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gift-card",
          start: "top 85%",
          once: true,
        },
      });

      // Left content
      gsap.from(".gift-left > *", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gift-card",
          start: "top 85%",
          once: true,
        },
        delay: 0.3,
      });

      // Specials
      gsap.from(".special-item", {
        opacity: 0,
        x: 30,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gift-card",
          start: "top 85%",
          once: true,
        },
        delay: 0.4,
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
        <div
          className="gift-card"
          style={{
            background: "var(--accent)",
            color: "var(--accent-ink)",
            borderRadius: 28,
            padding: "64px 56px",
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          {/* Left */}
          <div className="gift-left">
            <span
              style={{
                fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "color-mix(in oklab, var(--accent-ink) 80%, transparent)",
                display: "block",
                marginBottom: 14,
              }}
            >
              Gift cards &amp; specials
            </span>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(38px, 4.5vw, 60px)",
                lineHeight: 1.05,
              }}
            >
              A gift that{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "oklch(0.92 0.08 60)",
                }}
              >
                actually
              </em>{" "}
              gets used.
            </h2>
            <p
              style={{
                opacity: 0.9,
                marginTop: 16,
                maxWidth: 480,
                fontSize: 17,
                lineHeight: 1.5,
              }}
            >
              Digital gift cards are sent instantly — or scheduled to arrive on a
              birthday, anniversary, or &ldquo;you&apos;ve earned it&rdquo;
              Tuesday. Recipients book at whichever modality and duration suits
              them.
            </p>
            <div
              style={{
                marginTop: 28,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://squareup.com/gift/CRRFQ011Q5V88/order"
                className="btn"
                style={{
                  background: "var(--bg)",
                  color: "var(--ink)",
                  borderColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--bg)";
                }}
              >
                Send a gift card <span className="arr">→</span>
              </a>
              <a
                href="https://www.massagebyjerry.com/bookonline"
                className="btn"
                style={{
                  background: "transparent",
                  color: "var(--accent-ink)",
                  border: "1px solid color-mix(in oklab, var(--accent-ink) 30%, transparent)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "color-mix(in oklab, var(--accent-ink) 12%, transparent)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--accent-ink)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "color-mix(in oklab, var(--accent-ink) 30%, transparent)";
                }}
              >
                Book a session <span className="arr">→</span>
              </a>
            </div>
          </div>

          {/* Right - specials */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              className="special-item"
              style={{
                background:
                  "color-mix(in oklab, var(--accent-ink) 12%, transparent)",
                borderRadius: 14,
                padding: "20px 22px",
              }}
            >
              <strong
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: 22,
                  display: "block",
                  marginBottom: 4,
                  fontWeight: 400,
                }}
              >
                Refer a friend
              </strong>
              <span style={{ fontSize: 13, opacity: 0.85 }}>
                They get ½ off their first massage with Jerry. You get ½ off your
                next session.
              </span>
            </div>
            <div
              className="special-item"
              style={{
                background:
                  "color-mix(in oklab, var(--accent-ink) 12%, transparent)",
                borderRadius: 14,
                padding: "20px 22px",
              }}
            >
              <strong
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: 22,
                  display: "block",
                  marginBottom: 4,
                  fontWeight: 400,
                }}
              >
                7-massage package
              </strong>
              <span style={{ fontSize: 13, opacity: 0.85 }}>
                Save $25 when you buy a 7-session bundle. Use them on your own
                schedule.
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .gift-card { padding: 40px 32px !important; grid-template-columns: 1fr !important; gap: 32px !important; border-radius: 20px !important; }
        }
      `}</style>
    </section>
  );
}
