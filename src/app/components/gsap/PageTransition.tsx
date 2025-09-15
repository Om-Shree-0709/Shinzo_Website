"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function PageTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    gsap.set(overlay, { yPercent: 100 });

    const tl = gsap.timeline();
    tl.to(overlay, {
      yPercent: 0,
      duration: 0.45,
      ease: "power3.out",
    })
      .to(
        overlay,
        {
          yPercent: -100,
          duration: 0.6,
          ease: "power3.inOut",
          delay: 0.1,
        },
        ">"
      )
      .set(overlay, { yPercent: 100 });

    return () => {
      tl.kill();
    };
  }, [pathname]);

  return (
    <div
      ref={overlayRef}
      className="pointer-events-none fixed inset-0 z-40"
      style={{
        background:
          "radial-gradient(1200px 1200px at 50% 50%, rgba(120,140,255,0.15), rgba(30,30,40,0.95) 40%, rgba(0,0,0,1) 70%)",
        backdropFilter: "blur(2px)",
      }}
    />
  );
}
