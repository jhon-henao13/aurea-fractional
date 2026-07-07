import { useState, useEffect } from 'react';
import logo from '../assets/logo-color.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-luxury-dark/70 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo Reemplazado */}
        <div className="cursor-pointer dynamic-logo">
          <img 
            src={logo} 
            alt="Aurea Fractional" 
            className="h-14 w-auto object-contain brightness-0 invert transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm tracking-widest text-white/80 font-light">
          {['Co-Propiedad', 'Proyecto', 'Fraccional', 'Ubicación'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-gold-500 transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-gold-500/90 hover:bg-gold-500 text-white text-xs tracking-widest uppercase px-6 py-3 rounded-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-gold-500/20">
            Recibe el brochure
          </button>
        </div>

        {/* Mobile Burger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-luxury-dark/95 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 visible h-auto py-6' : 'opacity-0 invisible h-0 overflow-hidden'
      }`}>
        <div className="flex flex-col items-center space-y-6 text-white tracking-widest font-light">
          {['Co-Propiedad', 'Proyecto', 'Fraccional', 'Ubicación'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="hover:text-gold-500">
              {item}
            </a>
          ))}
          <button className="bg-gold-500 text-white text-xs tracking-widest uppercase px-6 py-3 w-4/5 rounded-sm">
            Conocer Más
          </button>
        </div>
      </div>
    </nav>
  );
}