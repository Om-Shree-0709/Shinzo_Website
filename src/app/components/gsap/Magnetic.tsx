"use client";
import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";

interface MagneticProps {
  strength?: number;
  className?: string;
  children: ReactNode;
}

export default function Magnetic({
  strength = 0.25,
  className,
  children,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const bounds = () => el.getBoundingClientRect();

    const onMove = (e: MouseEvent) => {
      const b = bounds();
      const relX = (e.clientX - (b.left + b.width / 2)) / (b.width / 2);
      const relY = (e.clientY - (b.top + b.height / 2)) / (b.height / 2);

      gsap.to(el, {
        x: relX * b.width * strength,
        y: relY * b.height * strength,
        rotate: relX * 3,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, rotate: 0, duration: 0.6, ease: "power3.out" });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
