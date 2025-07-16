import React from 'react';

const ProjectCard = ({ project, inView, index }) => {
  // Destructuramos las nuevas propiedades del proyecto
  const { title, frontImage, description, stack, link, linkText } = project;

  return (
    <div 
      className={`flip-card transform transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flip-card-inner">
        {/* Cara Frontal: Muestra la imagen del proyecto */}
        <div className="flip-card-front bg-secondary flex items-center justify-center p-4">
          <img src={frontImage} alt={`Vista previa de ${title}`} className="max-w-full max-h-full object-contain rounded-lg" />
        </div>

        {/* Cara Trasera: Muestra los detalles del proyecto */}
        <div className="flip-card-back bg-primary p-6 flex flex-col justify-between items-center text-center">
          <div className="flex-grow flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-accent mb-2 font-sans">{title}</h3>
            <p className="text-light mb-4 font-body text-sm">{description}</p>
            <p className="font-body text-light text-xs">
              <strong className="font-bold text-accent">Stack:</strong> {stack}
            </p>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-dark font-bold py-2 px-6 rounded-full hover:bg-yellow-500 transition-colors duration-300 mt-4 self-stretch"
          >
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
