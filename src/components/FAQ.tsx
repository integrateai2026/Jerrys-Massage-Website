"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "How do I book a massage in Fargo?",
    a: "Book online anytime at massagebyjerry.com, or text Mikky at 701-969-0150. New clients are always welcome — Jerry will spend a couple minutes with you when you arrive to make sure the session addresses exactly what you came in for.",
    open: true,
  },
  {
    q: "What's the difference between Swedish and deep tissue massage?",
    a: "Swedish uses long, smooth strokes designed to relax — great for stress relief or a first visit. Deep tissue uses slower, firmer pressure to reach deeper muscle layers and break up chronic tension. Most sessions blend both, and Jerry adjusts pressure throughout.",
  },
  {
    q: "Do you accept insurance or HSA/FSA cards?",
    a: "Insurance isn't billed directly, but Jerry can provide a receipt for HSA or FSA reimbursement. Most health savings accounts cover licensed massage therapy — check with your plan administrator.",
  },
  {
    q: "Do I need to fully undress?",
    a: "Only to your comfort level. You'll be fully draped with a sheet the entire session — only the area being worked on is ever uncovered. Most clients undress fully, but you're always in control.",
  },
  {
    q: "Is pregnancy massage safe?",
    a: "Yes. Jerry uses safe, side-lying positioning and pregnancy-appropriate techniques. Many clients book through all three trimesters for back pain, hip discomfort, leg cramps, and swelling.",
  },
  {
    q: "How early should I arrive for my appointment?",
    a: "Five minutes works for returning clients. New clients should arrive 10 minutes early for a quick intake conversation. Parking is free and right out front.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Please give 24 hours' notice when possible. The schedule fills quickly, and early notice lets another client take the spot.",
  },
  {
    q: "Can Jerry come to my office or event?",
    a: "Yes — on-site chair massage is available for corporate offices, employee wellness days, and events throughout the Fargo–Moorhead area. Email Jerry to check availability and get a quote.",
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
              Common{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                questions.
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
