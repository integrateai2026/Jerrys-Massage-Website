"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPInit() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({ markers: false });
    gsap.ticker.lagSmoothing(0);

    // Global default: always clear inline opacity + transform after every tween
    // completes so elements can never be permanently stuck invisible.
    gsap.defaults({ clearProps: "opacity,transform,x,y,scale" });

    // Page-load curtain reveal
    gsap.fromTo("body",
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power2.out", clearProps: "opacity" }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
