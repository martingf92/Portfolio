import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin size={24} />,
      href: 'https://www.linkedin.com/in/martingomezfranco/',
      label: 'LinkedIn',
    },
    {
      icon: <FaGithub size={24} />,
      href: 'https://github.com/martingf92',
      label: 'GitHub',
    },
    {
      icon: <FaEnvelope size={24} />,
      href: 'mailto:marting.gf92@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-secondary text-light py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Logo o Nombre */}
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-bold text-accent">Martín Gómez Franco</p>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>

        {/* Enlaces a Redes Sociales */}
        <div className="flex space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="hover:text-accent transition-colors duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
