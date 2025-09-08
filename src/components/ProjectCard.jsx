import React from 'react';

const ProjectCard = ({ project, inView, index }) => {
  // Destructuramos las nuevas propiedades del proyecto
  const { title, frontImage, alt, description, stack, link, linkText } = project;

  return (
    <div 
      className={`flip-card w-full h-80 transform transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flip-card-inner w-full h-full">
        {/* Cara Frontal: Muestra la imagen del proyecto */}
        <div className="flip-card-front bg-secondary/20 backdrop-blur-sm border border-white/5 rounded-xl p-4 flex items-center justify-center h-full">
          <img src={frontImage} alt={alt} className="max-w-full max-h-full object-contain rounded-lg" />
        </div>

        {/* Cara Trasera: Muestra los detalles del proyecto */}
        <div className="flip-card-back bg-primary/90 backdrop-blur-sm border border-white/5 rounded-xl p-6 flex flex-col justify-between items-center text-center h-full">
          <div className="flex-grow flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-accent mb-3 font-sans">{title}</h3>
            <p className="text-light/90 mb-4 font-body text-sm">{description}</p>
            <p className="font-body text-light/80 text-xs">
              <strong className="font-bold text-accent">Stack:</strong> {stack}
            </p>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent/90 hover:bg-accent text-dark font-bold py-2 px-6 rounded-full transition-all duration-300 mt-4 self-stretch transform hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
          >
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
