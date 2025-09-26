import React from 'react';
import { useInView } from 'react-intersection-observer';
// Ruta de la imagen de perfil
const userPhoto = '/images/projects/MIA_LINKEDIN.jpeg';

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

            <p className="text-lg leading-relaxed font-body">
              Mi enfoque se centra en la creación de soluciones tecnológicas que realmente impacten positivamente en los negocios y en la vida de las personas. Me apasiona seguir aprendiendo y manteniéndome actualizado con las últimas tendencias tecnológicas.
            </p>

            <p className="text-lg leading-relaxed font-body mt-8">
              Me apasiona aprender constantemente, optimizar procesos y crear herramientas que generen impacto real en las personas y organizaciones.
            </p>
          </div>

          {/* Imagen de Perfil (Derecha) */}
          <div className={`relative w-full h-64 md:h-auto rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 ${inView ? 'animate-slide-in-right' : 'opacity-0 translate-x-full'}`}>
            <img 
              src={userPhoto} 
              alt="Foto de perfil" 
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Martín Gómez Franco</h3>
                <p className="text-accent font-medium">Software Developer & Data Analyst</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
