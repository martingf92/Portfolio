import React, { useState, useEffect } from 'react';

const Hero = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Cambia la imagen cada 5 segundos
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <header className="relative w-full overflow-hidden bg-black" style={{ height: 'calc(100vh - 3.5rem)' }}>
      {/* Contenedor de las imágenes para el efecto de fundido */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}>
          
          {/* Fondo desenfocado y ampliado */}
          <div
            className="absolute inset-0 bg-cover bg-center filter blur-lg scale-110 brightness-75"
            style={{ backgroundImage: `url(${image})` }}
          />

          {/* Imagen principal contenida */}
          <img
            src={image}
            alt="Portfolio cover"
            className="relative w-full h-full object-contain drop-shadow-2xl"
          />
        </div>
      ))}
    </header>
  );
};

export default Hero;
