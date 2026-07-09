import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceGrid from './components/ExperienceGrid';
import SmartOwnership from './components/SmartOwnership';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-luxury-dark min-h-screen font-sans antialiased selection:bg-gold-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ExperienceGrid />
        <SmartOwnership />
        {/* Próximas secciones aquí */}
      </main>
      <Footer />
    </div>
  );
}

export default App;