import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-luxury-dark min-h-screen font-sans antialiased selection:bg-gold-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        {/* Aquí irán las secciones de Co-Propiedad, Proyecto, etc. */}
      </main>
      <Footer />
    </div>
  );
}

export default App;