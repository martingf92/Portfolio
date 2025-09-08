import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cierra el menú al hacer clic en un enlace
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-secondary shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-accent font-sans">
          {/* Al hacer clic en el logo, también se cierra el menú y va al inicio */}
          <a href="#" onClick={handleLinkClick}>MGF</a>
        </div>

        {/* Menú para Escritorio */}
        <div className="hidden md:flex items-center">
          <nav className="flex space-x-6">
            <a href="#about" className="text-light hover:text-accent transition-colors duration-300 font-body">Sobre Mí</a>
            <a href="#proyectos" className="text-light hover:text-accent transition-colors duration-300 font-body">Proyectos</a>
            <a href="#contacto" className="text-light hover:text-accent transition-colors duration-300 font-body">Contacto</a>
            <a 
              href="/cv-MartinGomezFranco.pdf" 
              download="CV-MartinGomezFranco.pdf" 
              className="text-light hover:text-accent transition-colors duration-300 font-body flex items-center"
              onClick={(e) => {
                e.preventDefault();
                const baseUrl = window.location.origin;
                const cvUrl = `${baseUrl}/cv-MartinGomezFranco.pdf`;
                const link = document.createElement('a');
                link.href = cvUrl;
                link.setAttribute('download', 'CV-MartinGomezFranco.pdf');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <FaDownload className="mr-2" /> CV
            </a>
          </nav>
          <div className="flex items-center space-x-4 ml-6">
            <a href="https://www.linkedin.com/in/martingomezfranco/" target="_blank" rel="noopener noreferrer" className="text-light hover:text-accent transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/martingf92" target="_blank" rel="noopener noreferrer" className="text-light hover:text-accent transition-colors duration-300">
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Botón del Menú Móvil */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-light focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                // Ícono de 'X' cuando el menú está abierto
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Ícono de hamburguesa cuando el menú está cerrado
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú Desplegable para Móviles */}
      {/* Se muestra u oculta con una transición suave */}
      <div className={`transition-all duration-300 ease-in-out overflow-hidden md:hidden ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-secondary flex flex-col items-center">
          <a href="#about" onClick={handleLinkClick} className="text-light hover:text-accent block px-3 py-2 rounded-md text-base font-medium font-body">Sobre Mí</a>
          <a href="#proyectos" onClick={handleLinkClick} className="text-light hover:text-accent block px-3 py-2 rounded-md text-base font-medium font-body">Proyectos</a>
          <a href="#contacto" onClick={handleLinkClick} className="text-light hover:text-accent block px-3 py-2 rounded-md text-base font-medium font-body">Contacto</a>
          <a 
            href="/cv-MartinGomezFranco.pdf" 
            download="CV-MartinGomezFranco.pdf" 
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(e);
              const baseUrl = window.location.origin;
              const cvUrl = `${baseUrl}/cv-MartinGomezFranco.pdf`;
              const link = document.createElement('a');
              link.href = cvUrl;
              link.setAttribute('download', 'CV-MartinGomezFranco.pdf');
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }} 
            className="text-light hover:text-accent block px-3 py-2 rounded-md text-base font-medium font-body flex items-center"
          >
            <FaDownload className="mr-2" /> CV
          </a>
          <div className="flex items-center space-x-6 pt-4">
            <a href="https://www.linkedin.com/in/martingomezfranco/" target="_blank" rel="noopener noreferrer" className="text-light hover:text-accent transition-colors duration-300">
              <FaLinkedin size={28} />
            </a>
            <a href="https://github.com/martingf92" target="_blank" rel="noopener noreferrer" className="text-light hover:text-accent transition-colors duration-300">
              <FaGithub size={28} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
