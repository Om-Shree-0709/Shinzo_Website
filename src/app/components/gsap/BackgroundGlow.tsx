"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function BackgroundGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 50, y: 50 }); // default center

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    // gsap smooth lag for coords
    const setX = gsap.quickTo(pos.current, "x", {
      duration: 0.6,
      ease: "power3.out",
    });
    const setY = gsap.quickTo(pos.current, "y", {
      duration: 0.6,
      ease: "power3.out",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setX(x);
      setY(y);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      if (glow) {
        glow.style.background = `
          radial-gradient(
            circle at ${pos.current.x}% ${pos.current.y}%,
            rgba(255,255,255,0.22),
            transparent 55%
          ),
          radial-gradient(
            circle at ${pos.current.x}% ${pos.current.y}%,
            rgba(80,120,255,0.12),
            transparent 70%
          )
        `;
      }
      requestAnimationFrame(render);
    };
    render();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-10 mix-blend-screen"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.22), transparent 55%), radial-gradient(circle at 50% 50%, rgba(80,120,255,0.12), transparent 70%)",
        transition: "background 0.2s ease-out",
        willChange: "background",
      }}
    />
  );
}
