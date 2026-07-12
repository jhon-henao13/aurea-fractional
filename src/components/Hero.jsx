import { useState, useEffect, useRef } from 'react';
import bgHero from '../assets/bg-hero-diego.jpeg';

export default function Hero() {

  const [offsetY, setOffsetY] = useState(0);
  const heroParallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroParallaxRef.current) return;
      const rect = heroParallaxRef.current.getBoundingClientRect();
      
      // Dado que el Hero está al inicio, calculamos desde el punto cero del scroll
      if (rect.bottom > 0) {
        // Multiplicador 0.15 para mantener consistencia exacta con la velocidad de distribución
        const scrollPosition = window.scrollY * 0.15;
        setOffsetY(scrollPosition);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="relative h-screen w-full overflow-hidden bg-luxury-dark">
      {/* Background Image with Parallax & Ken Burns Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-[subtle-zoom_20s_ease-out_infinite]"
        style={{ backgroundImage: `url(${bgHero})` }}
      />
      
      {/* Premium Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-black/40" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between pt-32 pb-16 z-10">
        
        {/* Main Typography Block */}
        <div className="max-w-3xl mt-auto md:mb-12 animate-fade-in-up">
          <span className="text-gold-500 uppercase tracking-[0.3em] text-base md:text-xl font-medium inline-block mb-8">
            COPROPIEDAD DE LUJO
          </span>
          <h1 className="flex flex-col gap-2 text-slate-200 font-serif text-6xl md:text-7xl !font-extralight leading-tight tracking-wide">
            Cabaña Pastores
            <span className="block text-gold-500/90 font-serif font-extralight italic mt-1 text-4xl md:text-6xl">
              Tapalpa, Jalisco
            </span>
          </h1>
          <p className="text-white/80 font-light text-lg md:text-2xl mt-8 max-w-lg leading-relaxed border-l border-gold-500/40 pl-4">
            El lujo no es tener más. Es tener un lugar al que siempre quieras volver.
          </p>
        </div>

        {/* Bottom indicator / Ornament */}
        {/* Bottom indicator / Ornament con Scroll Parallax Estilo Hero Avanzado */}
        <div 
          ref={heroParallaxRef}
          className="w-full flex justify-center mt-auto relative z-10 pointer-events-none overflow-visible"
        >
          {/* Contenedor con físicas de scroll acopladas */}
          <div 
            className="flex flex-col items-center transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translateY(${offsetY}px)` }}
          >
            {/* Animación de rebote premium ralentizada a 3 segundos */}
            <div className="flex flex-col items-center justify-center animate-[bounce_3s_infinite]">
              
              {/* Flechita Superior (Chevron indicador) */}
              <svg className="w-3.5 h-3.5 text-gold-500/70 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>

              {/* Icono de Pino Estilizado, más visible y nítido (Sin bordes ni marcos pesados) */}
              <svg className="w-6 h-6 text-gold-500 filter drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 2L5 12h4v4h3v4h2v-4h3v-4h4L12 2z" />
              </svg>
              
              {/* Línea de fuga arquitectónica vertical de alta gama */}
              <div className="w-[1px] h-14 bg-gradient-to-b from-gold-500 via-gold-500/30 to-transparent mt-2.5"></div>
              
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}