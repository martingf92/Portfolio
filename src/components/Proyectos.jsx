import React from 'react';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';

// Importar imágenes desde la carpeta de assets
import fundacionImage from '../assets/images/somos_barro.png';
import ecommerceImage from '../assets/images/ecommerce.jpg';
import dataAnalysisImage from '../assets/images/data.jpg';
import mosciMorenoImage from '../assets/images/mosci_moreno.png';
import italarImage from '../assets/images/italar.jpg';
import motusImage from '../assets/images/motus.png';
import logo_navbar from '../assets/images/logo_navbar.png';

const projectsData = [
  {
    id: 1,
    title: 'Fundación Somos Barro',
    frontImage: fundacionImage,
    alt: 'Captura de pantalla del sitio web para la Fundación Somos Barro',
    description: 'Sitio institucional completo para una fundación cultural, con estructura modular, formulario de contacto, diseño responsive y SEO básico.',
    stack: 'HTML, CSS, Python, Django, Bootstrap',
    link: 'https://github.com/martingf92/fundacion-somos-barro',
    linkText: 'Ver en GitHub'
  },
  {
    id: 2,
    title: 'E-commerce',
    frontImage: ecommerceImage,
    alt: 'Página de inicio del proyecto E-commerce hecho con React',
    description: 'E-commerce moderno con React y TypeScript, consumo de API externa, sistema de navegación, carrito y filtros dinámicos.',
    stack: 'React, TypeScript, API Fetch',
    link: 'https://github.com/martingf92/e-commerce',
    linkText: 'Ver en GitHub'
  },
  {
    id: 3,
    title: 'Análisis de Datos',
    frontImage: dataAnalysisImage,
    alt: 'Dashboard de Power BI del proyecto de Análisis de Datos',
    description: 'Análisis exploratorio de datos con Python. Limpieza, visualización y extracción de insights mediante Pandas, Matplotlib y Power BI.',
    stack: 'Python, Pandas, Power BI',
    link: 'https://github.com/martingf92/Data_Prueba_Uno',
    linkText: 'Ver en GitHub'
  },
  {
    id: 4,
    title: 'MOSCI & MORENO',
    frontImage: mosciMorenoImage,
    alt: 'Página principal del sitio web de MOSCI & MORENO',
    description: 'Sitio web corporativo para una empresa de forraje hidropónico. Incluye estructura de módulos, blog informativo y landing del curso online.',
    stack: 'WordPress, Colibri, PHP, CSS',
    link: 'https://moscimoreno.com.ar/', // Asumo este link, si es otro me corriges
    linkText: 'Visitar Sitio'
  },
  {
    id: 5,
    title: 'ITALAR',
    frontImage: italarImage,
    alt: 'Sitio web institucional de la empresa agroindustrial ITALAR',
    description: 'Web institucional para empresa agroindustrial, incluye secciones de productos, maquinaria y una nueva sección “Desmotadora” hecha a medida.',
    stack: 'WordPress, Colibri, HTML/CSS',
    link: 'https://italar.com.ar/', // Asumo este link
    linkText: 'Visitar Sitio'
  },
  {
    id: 6,
    title: 'Consultora Motus',
    frontImage: motusImage,
    alt: 'Página de inicio del sitio rediseñado de Consultora Motus',
    description: 'Optimización y rediseño parcial del sitio existente, con ajustes de estilos, estructura y navegación.',
    stack: 'WordPress, Elementor',
    link: 'https://consultoramotus.cl/',
    linkText: 'Visitar Sitio'
  },
  {
    id: 7,
    title: 'Agrox',
    frontImage: logo_navbar,
    alt: 'Sitio web de Agrox servicios agrícolas con drones',
    description: 'Sitio web institucional para empresa de relevamiento agricola con drones.',
    stack: 'WordPress, Colibri, HTML/CSS',
    link: 'https://agroxdroneservice.com.ar/', // Asumo este link
    linkText: 'Visitar Sitio'
  }
];

const Proyectos = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <h2 className={`text-4xl md:text-5xl font-semibold text-center mb-12 text-accent tracking-wider ${inView ? 'animate-fade-in-down' : 'opacity-0'}`}>
        Mis Proyectos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            inView={inView} 
            index={index} 
            className="w-full h-full"
          />
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
