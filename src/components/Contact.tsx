"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactItems = [
  {
    label: "Schedule",
    value: "701-969-0150",
    href: "tel:7019690150",
    note: "Text or call Mikky to book, reschedule, or ask about packages.",
  },
  {
    label: "Ask Jerry",
    value: "701-371-2225",
    href: "tel:7013712225",
    note: "Best for technique questions, on-site bookings, and hospital/in-home visits.",
  },
  {
    label: "Email",
    value: "massagebyjerry2@gmail.com",
    href: "mailto:massagebyjerry2@gmail.com",
    note: "Replies usually within a day.",
  },
  {
    label: "Studio",
    value: "1326 25th Street S",
    href: null,
    note: "Fargo, ND 58103 · Free on-site parking",
  },
  {
    label: "Hours",
    value: "Mon–Sat by appointment",
    href: null,
    note: "Evenings available — text Mikky for the current week's openings.",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-head > *", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-head",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".contact-card", {
        opacity: 0,
        x: -50,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-grid",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".map-card", {
        opacity: 0,
        x: 50,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-grid",
          start: "top 85%",
          once: true,
        },
        delay: 0.1,
      });

      gsap.from(".ci-item", {
        opacity: 0,
        y: 15,
        stagger: 0.08,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-card",
          start: "top 85%",
          once: true,
        },
        delay: 0.3,
      });

      // Map pin drop animation
      gsap.from(".map-pin", {
        opacity: 0,
        y: -40,
        duration: 0.7,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: ".map-card",
          start: "top 85%",
          once: true,
        },
        delay: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{ padding: "110px 0", background: "var(--bg)" }}
    >
      <div className="mx-auto px-8" style={{ maxWidth: 1280 }}>
        <div
          className="contact-head flex items-end justify-between gap-8 flex-wrap"
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
              Book · Call · Text · Visit
            </span>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(40px, 4.5vw, 68px)",
                lineHeight: 1.05,
              }}
            >
              Ready to{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                book?
              </em>
            </h2>
            <p style={{ color: "var(--ink-2)", marginTop: 28, maxWidth: 540 }}>
              Studio on 25th Street South in Fargo. Free parking out front.
              Open Mon–Sat by appointment — same-week slots usually available.
            </p>
          </div>
          <a
            href="https://www.massagebyjerry.com/bookonline"
            className="btn btn-primary"
          >
            Book online <span className="arr">→</span>
          </a>
        </div>

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 56,
            alignItems: "start",
          }}
        >
          {/* Contact card */}
          <div
            className="contact-card"
            style={{
              padding: 36,
              border: "1px solid var(--line)",
              borderRadius: 22,
              background: "var(--bg-2)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: 28,
                marginBottom: 8,
              }}
            >
              Reach us
            </h3>
            <p
              style={{
                color: "var(--ink-2)",
                fontSize: 14,
                marginBottom: 28,
              }}
            >
              Text is fastest. Online booking is open around the clock.
            </p>

            {contactItems.map((ci) => (
              <div
                key={ci.label}
                className="ci-item"
                style={{
                  display: "flex",
                  gap: 16,
                  padding: "18px 0",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "var(--ink-3)",
                    flex: "0 0 120px",
                    paddingTop: 4,
                  }}
                >
                  {ci.label}
                </div>
                <div style={{ flex: 1 }}>
                  {ci.href ? (
                    <a
                      href={ci.href}
                      style={{
                        fontFamily: "var(--font-instrument-serif)",
                        fontSize: 22,
                        color: "var(--accent)",
                        borderBottom:
                          "1px solid color-mix(in oklab, var(--accent) 40%, transparent)",
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
                          "color-mix(in oklab, var(--accent) 40%, transparent)";
                      }}
                    >
                      {ci.value}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: "var(--font-instrument-serif)",
                        fontSize: 22,
                      }}
                    >
                      {ci.value}
                    </span>
                  )}
                  {ci.note && (
                    <small
                      style={{
                        display: "block",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: 13,
                        color: "var(--ink-2)",
                        marginTop: 4,
                      }}
                    >
                      {ci.note}
                    </small>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map + directions */}
          <div className="map-card">
            {/* Responsive iframe wrapper — padding-bottom drives height */}
            <div
              style={{
                position: "relative",
                paddingBottom: "80%",
                height: 0,
                borderRadius: 22,
                overflow: "hidden",
                border: "1px solid var(--line)",
              }}
              aria-label="Map showing 1326 25th Street S, Fargo, ND"
            >
              <iframe
                src="https://maps.google.com/maps?q=1326+25th+St+S,+Fargo,+ND+58103&hl=en&z=15&output=embed"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                  display: "block",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Massage by Jerry — 1326 25th St S, Fargo, ND"
              />
            </div>

            <a
              href="https://maps.google.com/?q=1326+25th+Street+S+Fargo+ND+58103"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              style={{ marginTop: 16 }}
            >
              Open in Google Maps <span className="arr">→</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
