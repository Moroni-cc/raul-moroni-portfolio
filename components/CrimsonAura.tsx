"use client";

import { useEffect, useRef } from "react";

export default function CrimsonAura() {
  const auraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const aura = auraRef.current;
    if (!aura) return;

    // Check prefers-reduced-motion or touch devices
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isTouch) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const render = () => {
      // Smooth lerp follow
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      if (aura) {
        aura.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Interactive Crimson Aura Cursor Light */}
      <div
        ref={auraRef}
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0 opacity-25 blur-[100px] transition-opacity duration-700 hidden md:block"
        style={{
          background: "radial-gradient(circle, rgba(255, 77, 90, 0.4) 0%, rgba(155, 17, 30, 0.15) 45%, rgba(0, 0, 0, 0) 70%)",
          willChange: "transform",
        }}
        aria-hidden="true"
      />
      {/* Film Grain Texture for Luxury Depth */}
      <div className="fixed inset-0 pointer-events-none z-40 bg-grain opacity-60" aria-hidden="true" />
    </>
  );
}
