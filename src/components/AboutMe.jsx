import React from 'react';
import { useInView } from 'react-intersection-observer';
import userPhoto from '../assets/images/MIA_LINKEDIN.jpeg';

const AboutMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación se ejecuta solo una vez
    threshold: 0.1,    // Se activa cuando el 10% del elemento es visible
  });

  return (
    <section id="about" ref={ref} className="py-16 md:py-24 bg-light text-dark overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Título de la Sección */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-sans text-primary">Sobre Mí</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
          
          {/* Columna de Texto (Izquierda) */}
          <div className={`md:col-span-2 space-y-6 transition-all duration-1000 ${inView ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-100%]'}`}>
            <p className="text-lg leading-relaxed font-body">
              Soy papá de tres (dos niños y una gata) y hace cinco años dejé mi provincia natal, Chaco, en busca de nuevas oportunidades junto a mi familia. Hoy, desde Córdoba, seguimos construyendo un camino de crecimiento personal y profesional.
            </p>
            <p className="text-lg leading-relaxed font-body">
              Me defino como un perfil multifacético y versátil, con una sólida formación técnica y una visión integral del mundo IT. Combino experiencia en desarrollo de software y análisis de datos, lo que me permite crear soluciones completas: desde la lógica del backend hasta dashboards interactivos para la toma de decisiones.
            </p>
            <p className="text-lg leading-relaxed font-body">
              Actualmente, trabajo de manera autónoma como Software Developer en Orbe Innovación, desarrollando soluciones adaptadas a necesidades reales de clientes.
            </p>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-secondary mb-4">🛠️ Tecnologías y Herramientas</h3>
              <ul className="list-disc list-inside space-y-3 font-body text-base md:text-lg">
                <li><strong>Lenguajes & Frameworks:</strong> Python, React.js, TypeScript, SQL, Tailwind CSS, PyTorch</li>
                <li><strong>Análisis de Datos:</strong> Power BI, Pandas, procesos ETL, limpieza y visualización de datos</li>
                <li><strong>Bases de datos:</strong> MySQL</li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-secondary mb-4">Habilidades Blandas</h3>
              <p className="text-lg leading-relaxed font-body mb-4">
                Además del conocimiento técnico, mis experiencias laborales me permitieron desarrollar habilidades blandas clave, altamente valoradas en el sector IT:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 list-disc list-inside font-body text-base md:text-lg">
                <li>Trabajo en equipo</li>
                <li>Comunicación efectiva</li>
                <li>Escucha activa</li>
                <li>Empatía</li>
                <li>Trabajo bajo presión</li>
                <li>Multitasking y gestión del tiempo</li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed font-body mt-8">
              Me apasiona aprender constantemente, optimizar procesos y crear herramientas que generen impacto real en las personas y organizaciones.
            </p>
          </div>

          {/* Columna de Imagen (Derecha) */}
          {/* Columna de Imagen (Derecha) - Ajustada para ocupar toda la altura */}
          <div className={`w-full h-full flex items-center justify-center transition-all duration-1000 ${inView ? 'animate-slide-in-right' : 'opacity-0 translate-x-[100%]'}`}>
            <img 
              src={userPhoto} 
              alt="Martín Gómez Franco - Desarrollador Web" 
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
