"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    name: "Swedish Massage",
    desc: "The classic full-body massage for stress relief and relaxation. Long, smooth strokes that ease tension from head to toe.",
    tag: "Relaxation · Stress relief",
    glyph: "S",
    t: 1,
    img: "/images/swedish-massage.jpg",
    imgAlt: "Swedish massage – long flowing strokes on the back",
  },
  {
    num: "02",
    name: "Deep Tissue & Trigger Point",
    desc: "Firm, focused pressure for chronic back pain, tight shoulders, and knots that won't go away on their own.",
    tag: "Back pain · Chronic tension",
    glyph: "D",
    t: 2,
    img: "/images/deep-tissue.jpg",
    imgAlt: "Deep tissue and trigger point massage",
  },
  {
    num: "03",
    name: "Sports Massage",
    desc: "Faster recovery, less soreness, better range of motion. Pre-event, post-event, or regular maintenance.",
    tag: "Recovery · Performance",
    glyph: "Sp",
    t: 3,
    img: "/images/sports-massage.jpg",
    imgAlt: "Sports massage for athlete recovery",
  },
  {
    num: "04",
    name: "Pregnancy Massage",
    desc: "Safe, side-lying massage for expecting mothers at any stage. Relieves back pain, hip tension, and swelling.",
    tag: "Prenatal · All trimesters",
    glyph: "P",
    t: 4,
    img: "/images/pregnancy-massage.jpg",
    imgAlt: "Prenatal pregnancy massage",
  },
  {
    num: "05",
    name: "Cupping Therapy",
    desc: "Suction therapy that lifts tight fascia, boosts circulation, and releases deep muscle tension.",
    tag: "Fascia release · Circulation",
    glyph: "C",
    t: 5,
    img: "/images/cupping.jpg",
    imgAlt: "Cupping therapy – glass cups on the back",
  },
  {
    num: "06",
    name: "Neuromuscular Therapy",
    desc: "The St. John method for nerve pain, posture problems, and injuries that haven't responded to other treatment.",
    tag: "Nerve pain · Injury recovery",
    glyph: "N",
    t: 6,
    img: "/images/neuromuscular.jpg",
    imgAlt: "St. John neuromuscular therapy session",
  },
  {
    num: "07",
    name: "Fibromyalgia Therapy",
    desc: "Gentle, adapted massage for fibromyalgia and chronic pain. Designed to soothe — never aggravate.",
    tag: "Fibromyalgia · Gentle care",
    glyph: "F",
    t: 7,
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80",
    imgAlt: "Gentle massage for fibromyalgia clients",
  },
  {
    num: "08",
    name: "Geriatric Massage",
    desc: "Light, careful massage for older adults managing arthritis, joint stiffness, or reduced mobility.",
    tag: "Seniors · Arthritis",
    glyph: "G",
    t: 8,
    img: "/images/geriatric-massage.jpg",
    imgAlt: "Gentle massage for an older client",
  },
  {
    num: "09",
    name: "Raindrop Detox",
    desc: "Young Living essential oils applied along the spine with feather-light strokes. Aromatic and deeply calming.",
    tag: "Aromatherapy · Relaxation",
    glyph: "R",
    t: 9,
    img: "/images/raindrop-detox.jpg",
    imgAlt: "Raindrop detox aromatherapy technique",
  },
  {
    num: "10",
    name: "Consegrity Energy Work",
    desc: "Light-touch energy work that supports the body's natural healing. Add it to any session or book it solo.",
    tag: "Energy work · Add-on",
    glyph: "Ce",
    t: 10,
    img: "/images/consegrity.jpg",
    imgAlt: "Consegrity energy work session",
  },
  {
    num: "11",
    name: "On-Site Chair Massage",
    desc: "Jerry comes to you. Perfect for office wellness days, corporate events, and employee appreciation.",
    tag: "Corporate wellness · Events",
    glyph: "O",
    t: 11,
    img: "/images/onsite-massage.jpg",
    imgAlt: "On-site chair massage at a business event",
  },
  {
    num: "12",
    name: "In-Home, Hospital & Nursing",
    desc: "Jerry travels to your home, hospital room, or care facility — professional and compassionate care, wherever you are.",
    tag: "In-home · Bedside care",
    glyph: "H",
    t: 12,
    img: "/images/inhome-massage.jpg",
    imgAlt: "In-home and nursing home massage care",
  },
];

const pricing = [
  {
    dur: "30 minutes",
    amt: "$45",
    note: "Best for a single problem area or your first visit with Jerry.",
    feat: false,
  },
  {
    dur: "60 minutes · Most booked",
    amt: "$80",
    note: "Full-body session with dedicated time for your biggest problem areas.",
    feat: true,
  },
  {
    dur: "90 minutes",
    amt: "$110",
    note: "Unhurried work across multiple areas — ideal for chronic pain or combined modalities.",
    feat: false,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-head > *", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-head",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".svc-card", {
        opacity: 0,
        y: 40,
        stagger: 0.07,
        duration: 0.65,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".svc-grid",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".price-card", {
        opacity: 0,
        y: 30,
        scale: 0.95,
        stagger: 0.1,
        duration: 0.7,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ".pricing-grid",
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{ padding: "110px 0", background: "var(--ink)", color: "var(--bg)" }}
    >
      <div className="mx-auto px-8" style={{ maxWidth: 1280 }}>
        {/* Header */}
        <div
          className="services-head flex items-end justify-between gap-8 flex-wrap"
          style={{ marginBottom: 56 }}
        >
          <div style={{ maxWidth: 720 }}>
            <span
              style={{
                fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "oklch(0.78 0.018 70)",
                display: "block",
                marginBottom: 22,
              }}
            >
              Services
            </span>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(40px, 4.5vw, 68px)",
                lineHeight: 1.05,
                color: "var(--bg)",
              }}
            >
              Every type of massage{" "}
              <em style={{ fontStyle: "italic", color: "oklch(0.78 0.10 60)" }}>
                you need
              </em>{" "}
              — in one place.
            </h2>
            <p
              style={{
                color: "oklch(0.82 0.018 70)",
                marginTop: 28,
                maxWidth: 540,
              }}
            >
              Swedish, deep tissue, sports, pregnancy, cupping, and more.
              Every session is customized — no two are the same.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div
          className="svc-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
        >
          {services.map((s) => (
            <div
              key={s.num}
              className="svc-card"
              style={{
                border: "1px solid oklch(0.32 0.015 60)",
                borderRadius: 16,
                display: "flex",
                flexDirection: "column",
                transition: "background 0.2s ease",
                overflow: "hidden",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "oklch(0.26 0.015 60)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "transparent";
              }}
            >
              {/* Image area */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "5/3",
                  overflow: "hidden",
                  background: "oklch(0.26 0.015 60)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.img}
                  alt={s.imgAlt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.6s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform =
                      "scale(1.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform =
                      "scale(1)";
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    right: -10,
                    bottom: -18,
                    fontFamily: "var(--font-instrument-serif)",
                    fontStyle: "italic",
                    fontSize: 200,
                    lineHeight: 1,
                    color: "color-mix(in oklab, var(--accent-ink) 28%, transparent)",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  {s.glyph}
                </span>
                <span
                  style={{
                    position: "absolute",
                    left: 20,
                    top: 18,
                    fontFamily: "ui-monospace, monospace",
                    fontSize: 11,
                    color: "var(--accent-ink)",
                    letterSpacing: "0.14em",
                    background: "color-mix(in oklab, oklch(0 0 0) 22%, transparent)",
                    backdropFilter: "blur(6px)",
                    padding: "6px 10px",
                    borderRadius: 999,
                    border: "1px solid color-mix(in oklab, var(--accent-ink) 22%, transparent)",
                  }}
                >
                  {s.num}
                </span>
              </div>

              {/* Body */}
              <div
                style={{
                  padding: "24px 26px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  flex: 1,
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-instrument-serif)",
                    fontSize: 26,
                    color: "var(--bg)",
                  }}
                >
                  {s.name}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "oklch(0.78 0.018 70)",
                    flex: 1,
                  }}
                >
                  {s.desc}
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 8 }}>
                  <span
                    style={{
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "oklch(0.78 0.10 60)",
                    }}
                  >
                    {s.tag}
                  </span>
                  <a
                    href="https://www.massagebyjerry.com/bookonline"
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      letterSpacing: "0.04em",
                      color: "oklch(0.86 0.018 70)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      padding: "6px 14px",
                      borderRadius: 999,
                      border: "1px solid oklch(0.38 0.015 60)",
                      transition: "all 0.18s ease",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "oklch(0.32 0.015 60)";
                      el.style.borderColor = "oklch(0.50 0.015 60)";
                      el.style.color = "#fff";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "transparent";
                      el.style.borderColor = "oklch(0.38 0.015 60)";
                      el.style.color = "oklch(0.86 0.018 70)";
                    }}
                  >
                    Book <span style={{ transition: "transform 0.18s ease", display: "inline-block" }}>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div style={{ marginTop: 96 }}>
          <span
            style={{
              fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "oklch(0.78 0.018 70)",
              display: "block",
              marginBottom: 14,
            }}
          >
            Simple pricing
          </span>
          <h3
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontSize: "clamp(32px, 3vw, 44px)",
              color: "var(--bg)",
              lineHeight: 1.1,
            }}
          >
            One flat rate. Every service. No surprises.
          </h3>

          <div
            className="pricing-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
              marginTop: 56,
            }}
          >
            {pricing.map((p) => (
              <div
                key={p.dur}
                className="price-card"
                style={{
                  padding: 28,
                  borderRadius: 16,
                  background: p.feat
                    ? "var(--accent)"
                    : "oklch(0.26 0.015 60)",
                  border: `1px solid ${
                    p.feat ? "var(--accent)" : "oklch(0.32 0.015 60)"
                  }`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  color: p.feat ? "var(--accent-ink)" : "var(--bg)",
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    opacity: 0.8,
                  }}
                >
                  {p.dur}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-instrument-serif)",
                    fontSize: 68,
                    lineHeight: 1,
                  }}
                >
                  {p.amt}
                </span>
                <span style={{ fontSize: 13, opacity: 0.75, marginTop: 8 }}>
                  {p.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .svc-grid { grid-template-columns: 1fr !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 700px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
