import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const [copied, setCopied] = useState(false);

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
      href: 'marting.gf92@gmail.com',
      label: 'Email',
    },
  ];

  const handleLinkClick = (link) => {
    if (link.label === 'Email') {
      navigator.clipboard.writeText(link.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } else {
      window.open(link.href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="bg-secondary text-light py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Logo o Nombre */}
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-bold text-accent">Martín Gómez Franco</p>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>

        {/* Enlaces a Redes Sociales */}
        <div className="flex space-x-6 items-center">
          {socialLinks.map((link) => (
            <div
              key={link.label}
              onClick={() => handleLinkClick(link)}
              className="text-light hover:text-accent transition-colors duration-300 cursor-pointer relative"
            >
              {link.icon}
              {link.label === 'Email' && copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-accent text-white text-xs rounded py-1 px-2">
                  ¡Copiado!
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
