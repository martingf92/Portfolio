"use client";

import React, { useRef, useEffect } from "react";

export default function ProjectsSection({ children }) {
  const containerRef = useRef(null);

  const updateSpotlightPosition = (x, y) => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty('--spotlight-x', `${x}%`);
    containerRef.current.style.setProperty('--spotlight-y', `${y}%`);
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    updateSpotlightPosition(x, y);
    containerRef.current.style.setProperty('--spotlight-opacity', '1');
  };

  const handleMouseLeave = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty('--spotlight-opacity', '0');
    }
  };

  // Initialize spotlight in the center
  useEffect(() => {
    if (containerRef.current) {
      updateSpotlightPosition(50, 50);
    }
  }, []);

  return (
    <div 
      id="proyectos"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="projects-section min-h-screen py-16 md:py-24 bg-gray-900"
    >
      <div className="spotlight"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {children}
      </div>
    </div>
  );
}
