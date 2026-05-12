"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-brand > *", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          once: true,
        },
      });

      gsap.from(".footer-col", {
        opacity: 0,
        y: 20,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          once: true,
        },
        delay: 0.2,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      style={{
        background: "var(--ink)",
        color: "var(--bg)",
        padding: "80px 0 36px",
      }}
    >
      <div className="mx-auto px-8" style={{ maxWidth: 1280 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: 48,
            paddingBottom: 56,
            borderBottom: "1px solid oklch(0.32 0.015 60)",
          }}
        >
          {/* Brand */}
          <div className="footer-brand">
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(40px, 5vw, 72px)",
                marginBottom: 18,
                lineHeight: 1.05,
                color: "var(--bg)",
              }}
            >
              Ready to feel{" "}
              <em
                style={{ fontStyle: "italic", color: "oklch(0.78 0.10 60)" }}
              >
                better?
              </em>
            </h2>
            <p
              style={{
                color: "oklch(0.78 0.018 70)",
                maxWidth: 360,
                fontSize: 15,
              }}
            >
              Book online any time, or text Mikky to find a slot this week.
              Same hands, same room, for 25+ years.
            </p>
            <div
              style={{
                marginTop: 24,
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://www.massagebyjerry.com/bookonline"
                className="btn"
                style={{
                  background: "var(--bg)",
                  color: "var(--ink)",
                  borderColor: "transparent",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#fff")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "var(--bg)")
                }
              >
                Book now <span className="arr">→</span>
              </a>
              <a
                href="tel:7019690150"
                className="btn"
                style={{
                  background: "transparent",
                  color: "var(--bg)",
                  border: "1px solid oklch(0.42 0.015 60)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "oklch(0.30 0.015 60)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--bg)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "oklch(0.42 0.015 60)";
                }}
              >
                Call to book
              </a>
            </div>
          </div>

          {/* Site links */}
          <div className="footer-col">
            <h4
              style={{
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "oklch(0.70 0.018 70)",
                marginBottom: 18,
                fontWeight: 500,
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Site
            </h4>
            {[
              { href: "https://www.massagebyjerry.com", label: "Home" },
              {
                href: "https://www.massagebyjerry.com/services",
                label: "Services",
              },
              {
                href: "https://www.massagebyjerry.com/why",
                label: "Why Jerry",
              },
              {
                href: "https://www.massagebyjerry.com/blog",
                label: "Health Ideas",
              },
              {
                href: "https://www.massagebyjerry.com/contact",
                label: "Contact",
              },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  padding: "6px 0",
                  color: "oklch(0.86 0.018 70)",
                  fontSize: 15,
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "oklch(0.86 0.018 70)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Book & gift */}
          <div className="footer-col">
            <h4
              style={{
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "oklch(0.70 0.018 70)",
                marginBottom: 18,
                fontWeight: 500,
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Book &amp; gift
            </h4>
            {[
              {
                href: "https://www.massagebyjerry.com/bookonline",
                label: "Book online",
              },
              {
                href: "https://squareup.com/gift/CRRFQ011Q5V88/order",
                label: "Gift cards",
              },
              { href: "#gift", label: "Specials & packages" },
              { href: "#faq", label: "FAQ" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  padding: "6px 0",
                  color: "oklch(0.86 0.018 70)",
                  fontSize: 15,
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "oklch(0.86 0.018 70)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4
              style={{
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "oklch(0.70 0.018 70)",
                marginBottom: 18,
                fontWeight: 500,
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Contact
            </h4>
            {[
              {
                href: "tel:7019690150",
                label: "701-969-0150 · Mikky",
              },
              { href: "tel:7013712225", label: "701-371-2225 · Jerry" },
              {
                href: "mailto:massagebyjerry2@gmail.com",
                label: "massagebyjerry2@gmail.com",
              },
              {
                href: "https://www.facebook.com/Massage-Therapy-by-Jerry-Wendel-Daub-170540209656176/?fref=ts",
                label: "Facebook",
              },
              {
                href: "https://maps.google.com/?q=1326+25th+Street+S+Fargo+ND+58103",
                label: "1326 25th St S, Fargo, ND",
              },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  padding: "6px 0",
                  color: "oklch(0.86 0.018 70)",
                  fontSize: 15,
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "oklch(0.86 0.018 70)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
            paddingTop: 28,
            color: "oklch(0.62 0.015 70)",
            fontSize: 12,
          }}
        >
          <span>
            © 2026 Massage Therapy by Jerry Wendel Daub · Licensed Massage
            Therapist in Fargo, ND
          </span>
          <span>Site designed for clarity, speed, and easy booking.</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer .grid-footer { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 540px) {
          footer .grid-footer { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
