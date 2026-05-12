"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "How do I book my first massage in Fargo?",
    a: "Book online in about a minute, or text Mikky at 701-969-0150. New clients are welcome — Jerry will ask a few quick questions when you arrive so the session is built around what you actually need.",
    open: true,
  },
  {
    q: "What's the difference between Swedish and deep tissue?",
    a: "Swedish is long, gliding strokes meant to relax. Deep tissue uses slower, more focused pressure to reach stubborn muscle layers. Most sessions blend both — Jerry adjusts in real time.",
  },
  {
    q: "Do you take insurance or HSA/FSA?",
    a: "Jerry doesn't bill insurance directly, but receipts can be provided for HSA/FSA reimbursement. Check with your plan administrator first.",
  },
  {
    q: "What should I wear, and do I need to undress?",
    a: "Undress to your level of comfort — you'll be fully draped throughout the session and only the area being worked on is uncovered. Wear what you like; comfort always comes first.",
  },
  {
    q: "Is pregnancy massage safe in every trimester?",
    a: "Yes. Jerry uses side-lying positioning and pregnancy-safe techniques. Many clients book throughout the second and third trimesters for lower-back, hip, and swelling relief.",
  },
  {
    q: "How early should I arrive?",
    a: "Five minutes is plenty for a returning client. New clients, give yourself ten so there's time for a quick chat before the session starts. Parking is easy and right on site.",
  },
  {
    q: "What's your cancellation policy?",
    a: "Life happens — just give at least 24 hours' notice when you can. The schedule fills up, so an early heads-up lets someone else get in.",
  },
  {
    q: "Can Jerry come to my office or event?",
    a: "Yes. On-site chair massage is available for offices, wellness days, and events around Fargo–Moorhead. Email Jerry to put a date on the calendar.",
  },
];

function FaqItem({
  faq,
  index,
}: {
  faq: { q: string; a: string; open?: boolean };
  index: number;
}) {
  const [open, setOpen] = useState(!!faq.open);
  const bodyRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    if (!bodyRef.current) return;
    const el = bodyRef.current;

    if (open) {
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power3.inOut",
      });
    } else {
      gsap.set(el, { height: "auto" });
      const h = el.offsetHeight;
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        { height: h, opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    }
    setOpen(!open);
  };

  return (
    <div
      className="faq-item"
      style={{ borderBottom: "1px solid var(--line)" }}
    >
      <button
        onClick={toggle}
        style={{
          cursor: "pointer",
          padding: "26px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          width: "100%",
          background: "none",
          border: "none",
          fontFamily: "var(--font-instrument-serif)",
          fontSize: 24,
          color: "var(--ink)",
          textAlign: "left",
        }}
        aria-expanded={open}
      >
        <span>{faq.q}</span>
        <span
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: open ? "var(--accent)" : "var(--bg-2)",
            border: `1px solid ${open ? "var(--accent)" : "var(--line)"}`,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            fontSize: 18,
            color: open ? "var(--accent-ink)" : "var(--ink-2)",
            lineHeight: 1,
            flexShrink: 0,
          }}
        >
          +
        </span>
      </button>
      <div
        ref={bodyRef}
        style={{
          overflow: "hidden",
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
      >
        <p
          style={{
            padding: "0 60px 28px 0",
            color: "var(--ink-2)",
            fontSize: 15,
            lineHeight: 1.6,
          }}
        >
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-left > *", {
        opacity: 0,
        x: -30,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faq-wrap",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".faq-item", {
        opacity: 0,
        x: 30,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faq-wrap",
          start: "top 85%",
          once: true,
        },
        delay: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      style={{ padding: "110px 0", background: "var(--bg)" }}
    >
      <div className="mx-auto px-8" style={{ maxWidth: 1280 }}>
        <div
          className="faq-wrap"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 64,
          }}
        >
          <div className="faq-left">
            <span
              style={{
                fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
                display: "block",
              }}
            >
              FAQ
            </span>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(40px, 4.5vw, 68px)",
                lineHeight: 1.05,
                marginTop: 14,
              }}
            >
              Questions,{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                answered.
              </em>
            </h2>
            <p
              style={{
                color: "var(--ink-2)",
                marginTop: 18,
                fontSize: 15,
                lineHeight: 1.6,
              }}
            >
              Don&apos;t see yours here? Email Jerry directly at{" "}
              <a
                href="mailto:massagebyjerry2@gmail.com"
                style={{
                  color: "var(--accent)",
                  borderBottom: "1px solid var(--accent)",
                }}
              >
                massagebyjerry2@gmail.com
              </a>{" "}
              or text Mikky at{" "}
              <a
                href="sms:7019690150"
                style={{
                  color: "var(--accent)",
                  borderBottom: "1px solid var(--accent)",
                }}
              >
                701-969-0150
              </a>
              .
            </p>
          </div>

          <div
            style={{
              borderTop: "1px solid var(--line)",
            }}
          >
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .faq-wrap { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
