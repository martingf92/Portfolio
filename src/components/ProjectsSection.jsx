"use client";

import React, { useRef, useEffect, useState } from "react";

export default function ProjectsSection({ children }) {
  const ref = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    ref.current.style.setProperty('--mx', `${Math.max(0, Math.min(100, x))}%`);
    ref.current.style.setProperty('--my', `${Math.max(0, Math.min(100, y))}%`);
  };

  const handleTouchMove = (e) => {
    if (!ref.current || !e.touches[0]) return;
    
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = ((e.touches[0].clientX - left) / width) * 100;
    const y = ((e.touches[0].clientY - top) / height) * 100;
    
    ref.current.style.setProperty('--mx', `${Math.max(0, Math.min(100, x))}%`);
    ref.current.style.setProperty('--my', `${Math.max(0, Math.min(100, y))}%`);
  };

  const resetPosition = () => {
    if (ref.current) {
      ref.current.style.setProperty('--mx', '50%');
      ref.current.style.setProperty('--my', '50%');
    }
  };

  useEffect(() => {
    const el = ref.current;
    if (!el || !isClient) return;

    // Set initial position
    resetPosition();

    // Add event listeners
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', resetPosition);
    el.addEventListener('touchmove', handleTouchMove, { passive: true });
    el.addEventListener('touchend', resetPosition);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', resetPosition);
      el.removeEventListener('touchmove', handleTouchMove);
      el.removeEventListener('touchend', resetPosition);
    };
  }, [isClient]);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={resetPosition}
      className="relative projects-spotlight projects-mesh
        bg-[linear-gradient(120deg,#1a1a1a_0%,#0f172a_50%,#122a2f_100%)]
        bg-[length:200%_200%] motion-safe:animate-bg-pan
        py-16 md:py-24 min-h-screen"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {children}
      </div>
      
      {/* Floating decorative element */}
      <div className="pointer-events-none absolute -top-10 left-8 h-10 w-10 rounded-full
                    bg-accent/15 blur-xl motion-safe:animate-float-slow"></div>
    </div>
  );
}
  );
}
