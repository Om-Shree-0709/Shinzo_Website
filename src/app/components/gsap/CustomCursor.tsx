"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current || !followerRef.current) return;

    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
    gsap.set(followerRef.current, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current!, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(followerRef.current!, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div
        ref={followerRef}
        className="fixed pointer-events-none z-50 w-12 h-12 rounded-full border-2 border-white mix-blend-difference"
      />
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50 w-3 h-3 bg-white rounded-full mix-blend-difference"
      />
    </>
  );
}
