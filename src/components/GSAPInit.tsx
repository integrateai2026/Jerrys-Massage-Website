"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPInit() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({ markers: false });
    gsap.ticker.lagSmoothing(0);

    // Page-load curtain reveal
    gsap.from("body", {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      clearProps: "opacity",
    });

    // Subtle parallax on section eyebrows
    document.querySelectorAll(".eyebrow-parallax").forEach((el) => {
      gsap.to(el, {
        y: -20,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
