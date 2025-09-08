import React from 'react';

export default function SectionDivider() {
  return (
    <div className="relative">
      {/* Wave superior */}
      <svg 
        className="w-full -mb-1 block" 
        viewBox="0 0 1440 80" 
        preserveAspectRatio="none" 
        aria-hidden="true"
      >
        <path 
          fill="currentColor" 
          className="text-primary/50"
          d="M0,32 C240,96 480,0 720,32 C960,64 1200,0 1440,32 L1440,80 L0,80 Z"
        />
      </svg>

      {/* Micro-CTA */}
      <div className="bg-primary/50 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-center gap-3">
          <span className="inline-flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
          <p className="text-sm md:text-base text-light/90">
            ¿Listo para ver cómo aplico estas habilidades en proyectos reales?
            <a 
              href="#proyectos" 
              className="ml-2 underline decoration-accent/60 underline-offset-4 hover:text-accent transition-colors duration-200"
            >
              Ir a <strong>Mis Proyectos</strong> ↓
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
