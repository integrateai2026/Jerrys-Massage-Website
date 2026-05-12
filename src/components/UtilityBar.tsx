"use client";

export default function UtilityBar() {
  return (
    <div
      style={{
        background: "var(--ink)",
        color: "var(--bg)",
        fontSize: "12px",
        letterSpacing: "0.02em",
      }}
    >
      <div
        className="container mx-auto px-8 flex items-center justify-between"
        style={{ height: "34px", maxWidth: "1280px" }}
      >
        <div className="flex items-center gap-4">
          <span
            className="flex items-center gap-2"
            style={{ color: "var(--bg)" }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "var(--accent-2)",
                display: "inline-block",
              }}
            />
            Now booking · Mon–Sat
          </span>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="tel:7019690150"
            className="hover:text-white transition-colors"
            style={{ color: "var(--bg)" }}
          >
            Schedule: <strong>701-969-0150</strong>
          </a>
          <span style={{ opacity: 0.4 }}>•</span>
          <a
            href="tel:7013712225"
            className="hover:text-white transition-colors"
            style={{ color: "var(--bg)" }}
          >
            Jerry: <strong>701-371-2225</strong>
          </a>
        </div>
      </div>
    </div>
  );
}
