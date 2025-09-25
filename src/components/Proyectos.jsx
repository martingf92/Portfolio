import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';

// Importar datos desde el archivo JSON
import projectsData from '../data/projects.json';

// Importar imágenes para precargarlas
const imageImports = {
  'somos_barro.png': require('../assets/images/somos_barro.png'),
  'ecommerce.jpg': require('../assets/images/ecommerce.jpg'),
  'data.jpg': require('../assets/images/data.jpg'),
  'mosci_moreno.png': require('../assets/images/mosci_moreno.png'),
  'italar.jpg': require('../assets/images/italar.jpg'),
  'motus.png': require('../assets/images/motus.png'),
  'logo_navbar.png': require('../assets/images/logo_navbar.png')
};

// Función para obtener la ruta correcta de la imagen
const getImagePath = (imagePath) => {
  if (!imagePath) return '';
  const imageName = imagePath.split('/').pop();
  return imageImports[imageName] || '';
};

// Procesar los datos para incluir las rutas correctas de las imágenes
const processedProjects = projectsData.map(project => ({
  ...project,
  frontImage: getImagePath(project.frontImage)
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
            title={project.title}
            image={project.frontImage}
            alt={project.alt}
            description={project.description}
            stack={project.stack}
            link={project.link}
            linkText={project.linkText}
          />
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
