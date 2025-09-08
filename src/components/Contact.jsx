import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const contacts = [
    {
      name: 'Email',
      icon: <FaEnvelope size={32} />,
      link: 'marting.gf92@gmail.com',
      text: 'marting.gf92@gmail.com',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={32} />,
      link: 'https://www.linkedin.com/in/martingomezfranco/',
      text: 'linkedin.com/in/martingomezfranco',
    },
    {
      name: 'GitHub',
      icon: <FaGithub size={32} />,
      link: 'https://github.com/martingf92',
      text: 'github.com/martingf92',
    },
    {
      name: 'Descargar mi currículum',
      icon: <FaDownload size={32} />,
      link: '/cv-MartinGomezFranco.pdf',
      text: '',
    },
  ];

  const handleContactClick = (contact) => {
    if (contact.name === 'Email') {
      navigator.clipboard.writeText(contact.link);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (contact.name === 'Descargar mi currículum') {
      // Usar una ruta absoluta para la descarga
      const baseUrl = window.location.origin;
      const cvUrl = `${baseUrl}/cv-MartinGomezFranco.pdf`;
      
      // Verificar si el archivo existe
      fetch(cvUrl, { method: 'HEAD' })
        .then(res => {
          if (res.ok) {
            // Si el archivo existe, proceder con la descarga
            const link = document.createElement('a');
            link.href = cvUrl;
            link.setAttribute('download', 'CV-MartinGomezFranco.pdf');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          } else {
            console.error('El archivo no se encontró en la ruta:', cvUrl);
            alert('Lo sentimos, el archivo no está disponible en este momento.');
          }
        })
        .catch(error => {
          console.error('Error al intentar acceder al archivo:', error);
          alert('Ocurrió un error al intentar descargar el archivo.');
        });
    } else {
      window.open(contact.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="contacto" ref={ref} className="py-16 md:py-24 bg-light text-dark">
      <div className="container mx-auto px-6 text-center">
        <h2 className={`text-4xl font-bold text-accent mb-4 tracking-wider ${inView ? 'animate-fade-in-down' : 'opacity-0'}`}>
          ¿Hablamos?
        </h2>
        <p className={`text-lg text-gray-600 mb-12 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          Estoy disponible para nuevos proyectos y colaboraciones. ¡No dudes en contactarme!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {contacts.map((contact, index) => (
            <div
              key={contact.name}
              onClick={() => handleContactClick(contact)}
              className={`flex items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 cursor-pointer ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <span className="text-primary">{contact.icon}</span>
              <div className={`text-left ${!contact.text ? 'flex items-center' : ''}`}>
                <h3 className="font-bold text-lg text-dark">{contact.name}</h3>
                {contact.text && (
                  <p className="text-gray-500 text-sm">
                    {contact.name === 'Email' && copiedEmail ? '¡Email copiado!' : contact.text}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
