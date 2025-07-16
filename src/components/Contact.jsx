import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const contacts = [
    {
      name: 'Email',
      icon: <FaEnvelope size={32} />,
      link: 'mailto:marting.gf92@gmail.com',
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
  ];

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
            <a
              key={contact.name}
              href={contact.link}
              target={contact.name !== 'Email' ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className={`flex items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <span className="text-primary">{contact.icon}</span>
              <div>
                <h3 className="font-bold text-lg text-dark">{contact.name}</h3>
                <p className="text-gray-500 text-sm">{contact.text}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
