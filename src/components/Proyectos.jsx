import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';

// Importar datos desde el archivo JSON
import projectsData from '../data/projects.json';

// Importar imágenes dinámicamente
const importImage = async (path) => {
  try {
    // Para imágenes en la carpeta public
    if (path.startsWith('/')) {
      return path;
    }
    // Para imágenes en src/assets
    const module = await import(`../assets/images/${path}`);
    return module.default;
  } catch (err) {
    console.error(`Error loading image: ${path}`, err);
    return '';
  }
};

// Procesar los datos para incluir las rutas correctas de las imágenes
const processedProjects = projectsData.map(project => ({
  ...project,
  // Usar la ruta directa ya que las imágenes están en la carpeta public
  frontImage: project.frontImage
}));

const Proyectos = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <h2 className={`text-4xl md:text-5xl font-semibold text-center mb-12 text-accent tracking-wider ${inView ? 'animate-fade-in-down' : 'opacity-0'}`}>
        Proyectos Destacados
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {processedProjects.map((project) => (
          <ProjectCard 
            key={project.id}
            project={project}
            inView={inView}
            index={project.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
