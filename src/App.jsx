import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Proyectos from './components/Proyectos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

// Importar las imágenes de portada
import portadaUno from './assets/images/portada_uno.png';
import portadaDos from './assets/images/portada_dos.jpeg';

const coverImages = [portadaUno, portadaDos];

function App() {
  return (
    <div className="bg-primary text-light font-sans">
      <Navbar />

      {/* Hero Section Dinámico */}
      <Hero images={coverImages} />

      {/* Main Title Section */}
      <section className="bg-secondary text-center p-12 md:p-16 shadow-lg">
        <h1 className="text-4xl md:text-5xl text-accent font-bold tracking-wider font-sans">Mi Portafolio Profesional</h1>
        <p className="text-light mt-4 text-lg md:text-xl font-body">Una selección de mis mejores trabajos</p>
      </section>

      {/* Main Content Sections */}
      <main>
        <AboutMe />
        <Proyectos />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
