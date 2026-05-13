"use client";

const stats = [
  { value: "25+",    label: "Years in practice" },
  { value: "1,100",  label: "Hours trained" },
  { value: "LMT",    label: "Licensed · North Dakota" },
  { value: "NCBTMB", label: "Nationally certified" },
  { value: "AMTA",   label: "Insured professional member" },
  { value: "2000",   label: "In practice since" },
  { value: "12",     label: "Massage modalities" },
  { value: "PIMT",   label: "Professional Institute of Massage Therapy" },
];

export default function Marquee() {
  // Duplicate for seamless loop
  const items = [...stats, ...stats];

  return (
    <div
      aria-hidden="true"
      style={{
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        background: "var(--bg-2)",
        overflow: "hidden",
        padding: "20px 0",
      }}
    >
      <div className="strip-track">
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "baseline",
              gap: 10,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {/* Stat value */}
            <span
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontStyle: "italic",
                fontSize: "clamp(20px, 2vw, 28px)",
                color: "var(--ink)",
                letterSpacing: "-0.01em",
              }}
            >
              {item.value}
            </span>

            {/* Stat label */}
            <span
              style={{
                fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
                fontSize: "clamp(10px, 1vw, 12px)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
              }}
            >
              {item.label}
            </span>

            {/* Separator */}
            <span
              style={{
                color: "var(--accent-2)",
                fontSize: "clamp(16px, 1.6vw, 22px)",
                marginLeft: 24,
                marginRight: 4,
              }}
            >
              ✺
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
