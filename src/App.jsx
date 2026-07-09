import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceGrid from './components/ExperienceGrid';
import SmartOwnership from './components/SmartOwnership';
import SpacesToShare from './components/SpacesToShare';
import InternalDistribution from './components/InternalDistribution';
import FractionalModel from './components/FractionalModel';
import Location from './components/Location';
import GalleryGrid from './components/GalleryGrid';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

// Importación del nuevo componente de revelación premium
import ScrollReveal from './components/ScrollReveal';

function App() {
  return (
    <div className="bg-luxury-dark min-h-screen font-sans antialiased selection:bg-gold-500/30 selection:text-white">
      <Navbar />
      
      <main>
        {/* El Hero actúa como ancla de inicio */}
        <div id="hero">
          <Hero />
        </div>

        <ScrollReveal>
          <ExperienceGrid />
        </ScrollReveal>

        {/* Sección: Co-Propiedad */}
        <ScrollReveal id="co-propiedad">
          <SmartOwnership />
        </ScrollReveal>

        {/* Sección: Proyecto */}
        <ScrollReveal id="proyecto">
          <SpacesToShare />
        </ScrollReveal>

        <ScrollReveal>
          <InternalDistribution />
        </ScrollReveal>

        {/* Sección: Fraccional */}
        <ScrollReveal id="fraccional">
          <FractionalModel />
        </ScrollReveal>

        {/* Secciones de Cierre Visual y Ubicación */}
        <ScrollReveal id="ubicacion">
          <Location />
        </ScrollReveal>

        <ScrollReveal>
          <GalleryGrid />
        </ScrollReveal>

        <ScrollReveal>
          <ContactCTA />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}

export default App;