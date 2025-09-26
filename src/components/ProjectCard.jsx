import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const ProjectCard = ({ project, inView, index }) => {
  const { title, frontImage, alt, description, stack, link, linkText } = project;
  const [isLoading, setIsLoading] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);

  // Preload de imágenes
  useEffect(() => {
    console.log('Image path:', frontImage);
    if (!frontImage) {
      console.error('No image path provided');
      setIsLoading(false);
      return;
    }
    
    // Asegurarse de que la ruta de la imagen sea correcta
    let imagePath = frontImage;
    if (frontImage.startsWith('/')) {
      // Si la ruta comienza con /, asumimos que es relativa a la carpeta public
      imagePath = frontImage.startsWith('/images') ? frontImage : `/images${frontImage}`;
    }
    
    const img = new Image();
    img.src = imagePath;
    console.log('Loading image from:', img.src);
    
    img.onload = () => {
      console.log('Image loaded successfully:', imagePath);
      setIsLoading(false);
    };
    
    img.onerror = (e) => {
      console.error('Error loading image:', imagePath, e);
      // Intentar cargar una imagen de respaldo
      img.src = '/images/placeholder.jpg';
      img.onload = () => {
        console.log('Using fallback image');
        setIsLoading(false);
      };
    };
  }, [frontImage]);

  return (
    <div 
      className={`flip-card w-full h-80 transform transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onFocus={() => setIsFlipped(true)}
      onBlur={() => setIsFlipped(false)}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalles de ${title}`}
    >
      <div className={`flip-card-inner w-full h-full ${isFlipped ? 'flipped' : ''}`}>
        {/* Cara Frontal: Muestra la imagen del proyecto */}
        <div className="flip-card-front bg-secondary/20 backdrop-blur-sm border border-white/5 rounded-xl p-4 flex items-center justify-center h-full">
          {isLoading ? (
            <div className="w-full h-full bg-gray-800/50 animate-pulse rounded-lg"></div>
          ) : (
            <LazyLoadImage
              src={frontImage.startsWith('/') ? frontImage : `/images/${frontImage}`}
              alt={alt || `Imagen del proyecto ${title}`}
              effect="opacity"
              className="max-w-full max-h-full object-contain rounded-lg"
              placeholderSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="
              onError={(e) => {
                console.error('Error loading image in LazyLoadImage:', frontImage);
                e.target.src = '/images/placeholder.jpg';
              }}
            />
          )}
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
