"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    elements.forEach((el) => {
      const direction = el.dataset.reveal || "up";
      const delay = parseFloat(el.dataset.delay || "0");

      const from = { opacity: 0 } as gsap.TweenVars;
      if (direction === "up") from.y = 24;
      if (direction === "down") from.y = -24;
      if (direction === "left") from.x = 24;
      if (direction === "right") from.x = -24;

      gsap.fromTo(el, from, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return null;
}
