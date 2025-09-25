import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cierra el menú al hacer clic en un enlace
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Manejador para teclado
  const handleKeyDown = (e, handler) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handler();
    }
  };

  return (
    <nav className="bg-secondary shadow-lg sticky top-0 z-50" role="navigation" aria-label="Navegación principal">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-accent font-sans">
          <a 
            href="#" 
            onClick={handleLinkClick}
            className="focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary rounded"
            aria-label="Ir al inicio"
          >
            MGF
          </a>
        </div>

        {/* Menú para Escritorio */}
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-6 list-none m-0 p-0">
            <li>
              <a 
                href="#about" 
                className="text-light hover:text-accent transition-colors duration-300 font-body focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary focus:rounded px-2 py-1"
                onClick={handleLinkClick}
                onKeyDown={(e) => handleKeyDown(e, handleLinkClick)}
              >
                Sobre Mí
              </a>
            </li>
            <li>
              <a 
                href="#proyectos" 
                className="text-light hover:text-accent transition-colors duration-300 font-body focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary focus:rounded px-2 py-1"
                onClick={handleLinkClick}
                onKeyDown={(e) => handleKeyDown(e, handleLinkClick)}
              >
                Proyectos
              </a>
            </li>
            <li>
              <a 
                href="#contacto" 
                className="text-light hover:text-accent transition-colors duration-300 font-body focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary focus:rounded px-2 py-1"
                onClick={handleLinkClick}
                onKeyDown={(e) => handleKeyDown(e, handleLinkClick)}
              >
                Contacto
              </a>
            </li>
            <li>
              <button 
                className="text-light hover:text-accent transition-colors duration-300 font-body flex items-center focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary focus:rounded px-2 py-1"
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
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const baseUrl = window.location.origin;
                    const cvUrl = `${baseUrl}/cv-MartinGomezFranco.pdf`;
                    const link = document.createElement('a');
                    link.href = cvUrl;
                    link.setAttribute('download', 'CV-MartinGomezFranco.pdf');
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }
                }}
                aria-label="Descargar CV"
              >
                <FaDownload className="mr-2" /> CV
              </button>
            </li>
          </ul>
          <ul className="flex items-center space-x-4 ml-6 list-none m-0 p-0">
            <li>
              <a 
                href="https://www.linkedin.com/in/martingomezfranco/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary rounded-full p-1"
                aria-label="Perfil de LinkedIn (se abre en una nueva pestaña)"
              >
                <FaLinkedin size={24} />
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/martingf92" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary rounded-full p-1"
                aria-label="Perfil de GitHub (se abre en una nueva pestaña)"
              >
                <FaGithub size={24} />
              </a>
            </li>
          </ul>
        </div>

        {/* Botón de menú móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-light hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary rounded p-1"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú Desplegable para Móviles */}
      {/* Se muestra u oculta con una transición suave */}
      <div 
        id="mobile-menu"
        className={`md:hidden absolute top-16 left-0 right-0 bg-secondary shadow-lg py-2 px-4 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0 overflow-hidden'}`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="mobile-menu-button"
      >
        <ul className="list-none m-0 p-0">
          <li role="none">
            <a
              href="#about"
              className="block py-3 text-light hover:text-accent transition-colors duration-300 font-body focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary focus:rounded px-2"
              onClick={handleLinkClick}
              onKeyDown={(e) => handleKeyDown(e, handleLinkClick)}
              role="menuitem"
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Sobre Mí
            </a>
          </li>
          <li role="none">
            <a
              href="#proyectos"
              className="block py-3 text-light hover:text-accent transition-colors duration-300 font-body focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary focus:rounded px-2"
              onClick={handleLinkClick}
              onKeyDown={(e) => handleKeyDown(e, handleLinkClick)}
              role="menuitem"
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Proyectos
            </a>
          </li>
          <li role="none">
            <a
              href="#contacto"
              className="block py-3 text-light hover:text-accent transition-colors duration-300 font-body focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary focus:rounded px-2"
              onClick={handleLinkClick}
              onKeyDown={(e) => handleKeyDown(e, handleLinkClick)}
              role="menuitem"
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Contacto
            </a>
          </li>
          <li role="none">
            <button
              className="w-full text-left py-3 text-light hover:text-accent transition-colors duration-300 font-body flex items-center focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary focus:rounded px-2"
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
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  const baseUrl = window.location.origin;
                  const cvUrl = `${baseUrl}/cv-MartinGomezFranco.pdf`;
                  const link = document.createElement('a');
                  link.href = cvUrl;
                  link.setAttribute('download', 'CV-MartinGomezFranco.pdf');
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }
              }}
              role="menuitem"
              tabIndex={isMenuOpen ? 0 : -1}
            >
              <FaDownload className="mr-2 inline" /> Descargar CV
            </button>
          </li>
        </ul>
        <div className="flex space-x-6 py-4 justify-center">
          <a
            href="https://www.linkedin.com/in/martingomezfranco/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary rounded-full p-1"
            aria-label="Perfil de LinkedIn (se abre en una nueva pestaña)"
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/martingf92"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary rounded-full p-1"
            aria-label="Perfil de GitHub (se abre en una nueva pestaña)"
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
