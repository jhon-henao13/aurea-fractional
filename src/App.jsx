import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceGrid from './components/ExperienceGrid';
import SmartOwnership from './components/SmartOwnership';
import SpacesToShare from './components/SpacesToShare';
import InternalDistribution from './components/InternalDistribution';
import FractionalModel from './components/FractionalModel';
import Location from './components/Location';
import GalleryGrid from './components/GalleryGrid'
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-luxury-dark min-h-screen font-sans antialiased selection:bg-gold-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ExperienceGrid />
        <SmartOwnership />
        <SpacesToShare />
        <InternalDistribution />
        <FractionalModel />
        <Location />
        <GalleryGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;