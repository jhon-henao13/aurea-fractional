import { useState, useEffect } from 'react';
import logo from '../assets/logo-color.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Mapeo estratégico de secciones vinculando nombres con IDs específicos
  const navigationLinks = [
    { name: 'Co-Propiedad', href: '#co-propiedad' },
    { name: 'Proyecto', href: '#proyecto' },
    { name: 'Fraccional', href: '#fraccional' },
    { name: 'Ubicación', href: '#ubicacion' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquea el scroll de la web cuando el menú lateral está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-luxury-dark/85 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Corporativo */}
          <a href="#hero" className="cursor-pointer dynamic-logo">
            <img 
              src={logo} 
              alt="Aurea Fractional" 
              className="h-12 md:h-14 w-auto object-contain brightness-0 invert transition-transform duration-300 hover:scale-105"
            />
          </a>

          {/* Menú de Escritorio */}
          <div className="hidden md:flex items-center space-x-8 text-xs tracking-[0.2em] uppercase text-white/80 font-sans font-light">
            {navigationLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="hover:text-gold-500 transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Botón de Conversión de Escritorio */}
          <div className="hidden md:block">
            <a href="#contacto" className="inline-block bg-gold-500/90 hover:bg-gold-500 text-white text-[10px] tracking-[0.2em] uppercase px-6 py-3.5 rounded-none transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-gold-500/10 font-semibold">
              Recibe el brochure
            </a>
          </div>

          {/* Botón Burger de Apertura en Móvil */}
          <button 
            onClick={() => setIsOpen(true)} 
            className="md:hidden text-white focus:outline-none p-2 relative z-50"
            aria-label="Abrir menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ================= BACKGROUND OVERLAY MÓVIL ================= */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-500 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* ================= RIGHT SIDE DRAWER MÓVIL ================= */}
      <div className={`fixed top-0 right-0 h-full w-[70vw] sm:w-[360px] bg-luxury-dark/98 backdrop-blur-2xl border-l border-white/10 z-50 transform transition-transform duration-500 cubic-drawer md:hidden flex flex-col justify-between p-8 pt-24 ${
        isOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
      }`}>
        
        {/* Botón de Cierre con Animación de Rotación */}
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors duration-300 p-2"
          aria-label="Cerrar menú"
        >
          <svg className="w-6 h-6 transform hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Enlaces de Navegación Vertical con Retardo Estético */}
        <div className="flex flex-col space-y-8 text-left mt-4">
          {navigationLinks.map((item, index) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsOpen(false)} 
              className="text-white text-lg font-sans font-light tracking-[0.22em] uppercase hover:text-gold-500 transition-colors duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Acciones del pie del Menú Móvil */}
        <div className="space-y-6 w-full mb-4">
          <div className="h-[1px] bg-white/10 w-full" />
          <a 
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-gold-500 text-white text-xs tracking-[0.2em] uppercase py-4 w-full font-semibold transition-colors duration-300 hover:bg-gold-600"
          >
            Recibe el brochure
          </a>
        </div>
      </div>
    </>
  );
}