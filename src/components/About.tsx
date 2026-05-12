"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const credentials = [
  {
    key: "Credential",
    value: "Licensed Massage Therapist (LMT), North Dakota",
  },
  {
    key: "Education",
    value: "Professional Institute of Massage Therapy, 2000 – 1,100 hours",
  },
  {
    key: "Certification",
    value: "Nationally Certified, Board of Therapeutic Massage & Bodywork",
  },
  {
    key: "Membership",
    value: "AMTA Insured Professional Member",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-portrait", {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-portrait",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".about-badge", {
        opacity: 0,
        scale: 0.6,
        rotation: -20,
        duration: 0.8,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".about-portrait",
          start: "top 75%",
          once: true,
        },
        delay: 0.4,
      });

      gsap.from(".about-text-inner > *", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-text-inner",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".cred-card", {
        opacity: 0,
        y: 20,
        scale: 0.96,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cred-card",
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why"
      ref={sectionRef}
      style={{ padding: "110px 0", background: "var(--bg)" }}
    >
      <div className="mx-auto px-8" style={{ maxWidth: 1280 }}>
        <div
          className="grid gap-20 items-center"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          {/* Portrait */}
          <div
            className="about-portrait relative"
            style={{
              aspectRatio: "4/5",
              borderRadius: 8,
              overflow: "visible",
              background: "var(--bg-3)",
              maxWidth: 460,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://static.wixstatic.com/media/a68ce3_637fef7fc1454153869053b4af805dd4~mv2.jpg/v1/crop/x_0,y_60,w_675,h_790/fill/w_800,h_980,al_c,q_85,enc_avif,quality_auto/jerry.jpg"
                alt="Jerry Wendel Daub, Licensed Massage Therapist"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              className="about-badge absolute flex items-center justify-center text-center"
              style={{
                right: -28,
                bottom: 36,
                width: 168,
                height: 168,
                borderRadius: "50%",
                background: "var(--accent)",
                color: "var(--accent-ink)",
                padding: 22,
                transform: "rotate(-8deg)",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-instrument-serif)",
                    fontSize: 56,
                    lineHeight: 1,
                  }}
                >
                  25
                  <span style={{ fontSize: 24 }}>+</span>
                </div>
                <div
                  style={{
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    marginTop: 6,
                  }}
                >
                  Years serving
                  <br />
                  Fargo–Moorhead
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="about-text-inner flex flex-col">
            <span
              style={{
                fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
              }}
            >
              Meet Jerry · LMT, NCBTMB
            </span>

            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(40px, 4.5vw, 68px)",
                lineHeight: 1.05,
                marginTop: 18,
              }}
            >
              Hands that{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                know
              </em>{" "}
              the difference between tense and tender.
            </h2>

            <p
              style={{
                marginTop: 24,
                color: "var(--ink-2)",
                fontSize: 18,
                lineHeight: 1.5,
              }}
            >
              Jerry Wendel Daub has been the trusted massage therapist for
              thousands of clients across Fargo and Moorhead since 2000. Whether
              you&apos;re chasing relief from chronic pain, recovering from a
              workout, prepping for a baby, or just need to exhale — you&apos;re
              in steady, experienced hands.
            </p>

            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: "1fr 1fr", marginTop: 36 }}
            >
              {credentials.map((c) => (
                <div
                  key={c.key}
                  className="cred-card"
                  style={{
                    padding: "18px 20px",
                    border: "1px solid var(--line)",
                    borderRadius: 14,
                    background: "var(--bg-2)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "var(--ink-3)",
                      marginBottom: 6,
                    }}
                  >
                    {c.key}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-instrument-serif)",
                      fontSize: 22,
                      lineHeight: 1.2,
                    }}
                  >
                    {c.value}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 32 }}>
              <a
                href="https://www.massagebyjerry.com/why"
                className="btn btn-dark"
              >
                Read why clients choose Jerry{" "}
                <span className="arr">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #why .grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .about-badge { right: -10px !important; }
        }
        @media (max-width: 540px) {
          #why .grid > div:last-child .grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
