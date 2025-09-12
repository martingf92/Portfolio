import React, { useRef, useEffect } from "react";

export default function ProjectsSection({ children }) {
  const ref = useRef(null);
  const isTouchDevice = typeof window !== 'undefined' && 'ontouchstart' in window;

  const updateMousePosition = (e) => {
    const el = ref.current;
    if (!el) return;
    
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  // Reset position on touch devices
  const resetPosition = () => {
    const el = ref.current;
    if (el) {
      el.style.setProperty("--mx", "50%");
      el.style.setProperty("--my", "50%");
    }
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial position
    resetPosition();

    // Add event listeners
    if (!isTouchDevice) {
      el.addEventListener('mousemove', updateMousePosition);
      el.addEventListener('mouseleave', resetPosition);
    }

    return () => {
      if (!isTouchDevice) {
        el.removeEventListener('mousemove', updateMousePosition);
        el.removeEventListener('mouseleave', resetPosition);
      }
    };
  }, [isTouchDevice]);

  return (
    <div
      ref={ref}
      className="
        relative projects-spotlight projects-mesh
        bg-[linear-gradient(120deg,#1a1a1a_0%,#0f172a_50%,#122a2f_100%)]
        bg-[length:200%_200%] motion-safe:animate-bg-pan
        py-16 md:py-24
        min-h-screen
      "
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
