import React from 'react';
import useInView from '../hooks/useInView';

// Data for the skills section
const tech1 = ["Python", "React.js", "TypeScript", "JavaScript", "Tailwind CSS", "PyTorch"];
const dataTools = ["Power BI", "Pandas", "Seaborn", "Procesos ETL", "Limpieza de datos", "Visualización"];
const dbs = ["MySQL", "PostgreSQL", "SQL"];

const soft = [
  { icon: "🤝", title: "Trabajo en equipo", text: "Colaboración con foco en metas comunes." },
  { icon: "🗣️", title: "Comunicación efectiva", text: "Claridad para públicos técnicos y no técnicos." },
  { icon: "👂", title: "Escucha activa", text: "Comprensión real de requerimientos y feedback." },
  { icon: "💛", title: "Empatía", text: "Confianza y buen clima de trabajo." },
  { icon: "⚡", title: "Bajo presión", text: "Prioridades claras y entrega a tiempo." },
  { icon: "⏱️", title: "Multitasking/tiempo", text: "Paralelismo sin perder calidad." }
];

const SkillsSection = () => {
  const [refSection, inViewSection] = useInView();

  return (
    <section 
      id="skills" 
      ref={refSection} 
      className="py-16 px-4 bg-gradient-to-b from-primary/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center text-accent font-sans">
          🛠️ Habilidades y Tecnologías
        </h2>
        <p className="text-center text-light/80 mb-12 max-w-3xl mx-auto">
          Conocimientos técnicos y habilidades blandas que he desarrollado a lo largo de mi carrera.
        </p>

        <div className="space-y-12">
          <Block title="Lenguajes & Frameworks" chips={tech1} inView={inViewSection} />
          <Block title="Análisis de Datos" chips={dataTools} inView={inViewSection} />
          <Block title="Bases de datos" chips={dbs} inView={inViewSection} />

          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-accent font-sans">
              💬 Habilidades Blandas
            </h2>
            <p className="text-center text-light/80 mb-8 max-w-3xl mx-auto">
              Además del conocimiento técnico, he desarrollado habilidades clave muy valoradas en el entorno laboral.
            </p>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {soft.map((s, i) => (
                <SoftCard 
                  key={s.title} 
                  {...s} 
                  delay={i} 
                  inView={inViewSection} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Block = ({ title, chips, inView }) => {
  return (
    <div className="bg-secondary/20 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/5">
      <h3 className="text-xl font-medium mb-4 text-light/90">{title}</h3>
      <div className="flex flex-wrap items-start gap-3">
        {chips.map((chip, i) => (
          <div 
            key={chip}
            className={`reveal ${inView ? "motion-safe:animate-fade-up" : ""}`}
            style={{ 
              animationDelay: `${i * 100}ms`,
              display: 'inline-block',
              margin: '0.25rem 0' // Ensure consistent vertical spacing
            }}
          >
            <span
              className={`inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent/90
                        transition-all duration-300 transform hover:scale-110 hover:bg-accent/20 hover:shadow-md hover:shadow-accent/20
                        ${i === 0 ? "motion-safe:animate-glow" : ""}`}
              style={{
                backdropFilter: 'blur(4px)',
                willChange: 'transform, box-shadow, background-color',
                whiteSpace: 'nowrap' // Prevent text wrapping
              }}
            >
              {chip}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SoftCard = ({ icon, title, text, delay, inView }) => {
  return (
    <article
      className={`reveal rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl hover:border-accent/30 hover:bg-accent/5
                ${inView ? "motion-safe:animate-flip-in" : ""}`}
      style={{ 
        animationDelay: `${delay * 100}ms`,
        willChange: 'transform, box-shadow, border-color, background-color'
      }}
      aria-label={title}
      tabIndex={0}
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h4 className="text-lg font-semibold mb-2 text-light">{title}</h4>
      <p className="text-light/70">{text}</p>
    </article>
  );
};

export default SkillsSection;
