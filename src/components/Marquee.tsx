"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const stats = [
  { value: "25+",    label: "Years in practice" },
  { value: "1,100",  label: "Hours trained" },
  { value: "LMT",    label: "Licensed · North Dakota" },
  { value: "NCBTMB", label: "Nationally certified" },
  { value: "AMTA",   label: "Insured professional" },
  { value: "2000",   label: "In practice since" },
  { value: "12",     label: "Massage modalities" },
  { value: "PIMT",   label: "Professional Institute of Massage Therapy" },
];

// Massage-feel SVG: two curved strokes suggesting a hand glide
function MassageIcon() {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0, opacity: 0.65 }}
    >
      <path
        d="M1 5 C4 2, 8 2, 11 5 C14 8, 18 8, 21 5"
        stroke="var(--accent-2)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M1 11 C4 8, 8 8, 11 11 C14 14, 18 14, 21 11"
        stroke="var(--accent-2)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Measure one full set width for a pixel-perfect seamless loop
    const totalWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: -totalWidth,
      duration: 32,
      ease: "none",
      repeat: -1,       // infinite
      modifiers: {
        // Force pixel-perfect loop with no jump
        x: (x) => `${parseFloat(x) % totalWidth}px`,
      },
    });

    return () => { tween.kill(); };
  }, []);

  // Triple-duplicate for very wide screens
  const items = [...stats, ...stats, ...stats];

  return (
    <div
      aria-hidden="true"
      style={{
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        background: "var(--bg-2)",
        overflow: "hidden",
        padding: "20px 0",
        position: "relative",
      }}
    >
      {/* Fade edges */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        background: "linear-gradient(90deg, var(--bg-2) 0%, transparent 6%, transparent 94%, var(--bg-2) 100%)",
      }} />

      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: 48,
          alignItems: "center",
          whiteSpace: "nowrap",
          willChange: "transform",
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              flexShrink: 0,
            }}
          >
            {/* Value */}
            <span
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontStyle: "italic",
                fontSize: "clamp(18px, 1.8vw, 24px)",
                color: "var(--ink)",
                letterSpacing: "-0.01em",
              }}
            >
              {item.value}
            </span>

            {/* Label */}
            <span
              style={{
                fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
                fontSize: "clamp(9px, 0.9vw, 11px)",
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
              }}
            >
              {item.label}
            </span>

            {/* Separator */}
            <span style={{ marginLeft: 12, marginRight: 4, display: "inline-flex", alignItems: "center" }}>
              <MassageIcon />
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
