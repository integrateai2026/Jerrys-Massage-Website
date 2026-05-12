"use client";

const modalities = [
  "Swedish Massage",
  "Deep Tissue",
  "Sports Massage",
  "Pregnancy Massage",
  "Cupping Therapy",
  "Neuromuscular Therapy",
  "Trigger Point",
  "Raindrop Detox",
  "Fibromyalgia Relief",
  "Geriatric Massage",
  "On-Site Chair Massage",
];

export default function Marquee() {
  const items = [...modalities, ...modalities];

  return (
    <div
      aria-hidden="true"
      style={{
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        background: "var(--bg-2)",
        overflow: "hidden",
        padding: "22px 0",
      }}
    >
      <div className="strip-track">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-[48px]">
            <span
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontStyle: "italic",
                fontSize: "clamp(22px, 2.4vw, 32px)",
                color: "var(--ink-2)",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </span>
            <span
              style={{
                color: "var(--accent-2)",
                fontStyle: "normal",
                fontSize: "clamp(22px, 2.4vw, 32px)",
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
