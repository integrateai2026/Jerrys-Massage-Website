"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FloatingCTA() {
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(btnRef.current, {
        y: 80,
        opacity: 0,
        duration: 0.7,
        ease: "back.out(1.3)",
        delay: 1.5,
      });

      ScrollTrigger.create({
        trigger: "#services",
        start: "top 80%",
        onEnter: () =>
          gsap.to(btnRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }),
        onLeaveBack: () =>
          gsap.to(btnRef.current, { opacity: 0, y: 20, duration: 0.3 }),
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <a
      ref={btnRef}
      href="tel:7019690150"
      className="float-cta"
      style={{
        position: "fixed",
        bottom: 16,
        left: "50%",
        transform: "translateX(-50%)",
        background: "var(--accent)",
        color: "var(--accent-ink)",
        padding: "14px 22px",
        borderRadius: 999,
        fontWeight: 500,
        fontSize: 15,
        zIndex: 40,
        boxShadow: "0 14px 30px -10px color-mix(in oklab, var(--accent) 70%, transparent)",
        whiteSpace: "nowrap",
        textDecoration: "none",
      }}
    >
      ✆ Call us
    </a>
  );
}
