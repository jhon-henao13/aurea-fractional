import { useState, useEffect, useRef } from 'react';
import logoColor from '../assets/logo-color.png';

export default function ContactCTA() {

  const [offsetY, setOffsetY] = useState(0);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const rect = parallaxRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculamos el desplazamiento solo cuando el contenedor entra en el viewport
      if (rect.top < viewportHeight && rect.bottom > 0) {
        // Multiplicador 0.15 para que baje progresivamente con el scroll
        const scrollPosition = (viewportHeight - rect.top) * 0.15;
        setOffsetY(scrollPosition);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="contacto" className="bg-[#F4F1EA] pt-24 pb-14 px-6 md:px-16 overflow-hidden relative group">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* ENCABEZADO EDITORIAL: Alineado al centro visualmente usando ancho completo */}
        <div className="w-full text-center space-y-6 mb-14 md:mb-20">
          <h2 className="text-[#2C352E] font-serif text-3xl md:text-[43px] !font-extralight tracking-wide leading-tight">
            Solicitar Información.
          </h2>
          <p className="text-gold-600 font-serif !font-light italic text-3xl md:text-[45px] tracking-wide leading-none">
            Ya sabes cómo funciona. Lo difícil, ya lo resolvimos nosotros.
          </p>
        </div>

        {/* NÚCLEO CENTRAL DE CONVERSIÓN */}
        <div className="space-y-6 max-w-xl w-full flex flex-col items-center">
          <h3 className="text-black/70 font-serif font-light text-xl md:text-[26px] tracking-wide">
            ¿Listo para ser dueño de Cabaña Pastores?
          </h3>

            <p className="text-black/60 font-sans font-light text-base md:text-[20px] leading-relaxed">
                Sólo 8/10 fracciones disponibles.
            </p>
          

          {/* Botón Premium Interactivo */}
          <button className="w-full sm:w-auto min-w-[260px] bg-[#2C352E] text-[#F4F1EA] text-xs md:text-sm font-sans font-semibold uppercase tracking-[0.2em] py-5 px-10 rounded-[3px] shadow-xl hover:bg-[#1E2922] transition-all duration-500 hover:scale-[1.02] active:scale-[0.99] border border-white/5 relative overflow-hidden group/btn">
            <span className="relative z-10">Recibe el brochure</span>
            {/* Destello satinado interno al hover */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
          </button>

          {/* Enlace Directo */}
          <p className="text-[#4A534D] font-sans font-light text-sm md:text-base tracking-wide pt-2">
            O escribe a{" "}
            <a 
              href="mailto:hola@aureafractional.com" 
              className="font-medium text-[#2C352E] hover:text-gold-600 border-b border-[#2C352E]/30 hover:border-gold-600 transition-colors duration-300"
            >
              hola@aureafractional.com
            </a>
          </p>
        </div>

        {/* Isotipo del Árbol de corte exacto */}
        <div 
          ref={parallaxRef}
          className="w-full flex justify-center pt-14 pb-4 relative z-10 pointer-events-none overflow-visible"
        >
          {/* Contenedor con físicas de scroll reactivas */}
          <div 
            className="flex flex-col items-center transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translateY(${offsetY}px)` }}
          >
            {/* Animación de rebote ralentizada a 3 segundos para máxima elegancia */}
            <div className="flex flex-col items-center justify-center animate-[bounce_3s_infinite]">
              
              {/* Flechita Superior (Chevron indicador copiado del concepto de navegación del Hero) */}
              <svg className="w-3.5 h-3.5 text-gold-600/70 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>

              {/* Icono de Pino Estilizado, más visible y nítido (Sin bordes ni fondos intermediarios) */}
              <svg className="w-6 h-6 text-gold-600 filter drop-shadow-[0_2px_4px_rgba(44,53,46,0.08)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.1} d="M12 2L5 12h4v4h3v4h2v-4h3v-4h4L12 2z" />
              </svg>
              
              {/* Línea de fuga arquitectónica vertical degradada */}
              <div className="w-[1px] h-14 bg-gradient-to-b from-gold-600 via-gold-600/30 to-transparent mt-2.5"></div>
              
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}