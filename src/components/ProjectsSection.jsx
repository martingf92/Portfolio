import React, { useRef } from "react";

export default function ProjectsSection({ children }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className="
        relative projects-spotlight projects-mesh
        bg-[linear-gradient(120deg,#1a1a1a_0%,#0f172a_50%,#122a2f_100%)]
        bg-[length:200%_200%] motion-safe:animate-bg-pan
        py-16 md:py-24
      "
    >
      <div className="max-w-6xl mx-auto px-4">
        {children}
        {/* Elemento decorativo flotante */}
        <div className="pointer-events-none absolute -top-10 left-8 h-10 w-10 rounded-full
                      bg-accent/15 blur-xl motion-safe:animate-float-slow"></div>
      </div>
    </div>
  );
}
