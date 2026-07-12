import { useState, useEffect, useRef } from 'react';
import mapaEstilizado from '../assets/mapa-estilizado-gpt.png';

export default function Location() {
  const [isHovered, setIsHovered] = useState(false);

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
    <section id="ubicacion" className="bg-[#F4F1EA] py-12 md:py-20 px-6 md:px-16 overflow-hidden relative group">
      
      {/* Sutil textura o línea sutil de acento editorial */}
      <div className="absolute top-0 left-6 md:left-16 right-6 md:right-16 h-[1px] bg-black/[0.06]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* AGREGAR ESTE BLOQUE AQUÍ */}
        <div className="space-y-6 mb-10 md:mb-14">
          <h2 className="text-[#2C352E] font-serif text-4xl md:text-[47px] !font-extralight tracking-wide leading-tight">
            Ubicación.
          </h2>
          <p className="text-gold-600 font-serif font-light italic text-2xl md:text-[42px] tracking-wider leading-none block">
            Bosque. privacidad. Desconexión
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-11 gap-12 lg:gap-10 items-start">
          
          {/* COLUMNA IZQUIERDA: Textos y narrativa editorial (7 de 12 columnas) */}
          <div className="lg:col-span-5 flex flex-col space-y-2 md:space-y-4">
            
            {/* Encabezados fluidos estilo revista de lujo */}
            

            {/* Párrafo Introductorio */}
            <p className="text-black/60 font-sans font-normal text-lg md:text-[23px] leading-relaxed max-w-2xl">
              A menos de 2 horas de Guadalajara encuentras Tapalpa, Pueblo Mágico de bosques y clima templado en el sur de Jalisco.
            </p>

            {/* Lista de viñetas premium personalizadas con micro-interacciones */}
            <ul className="space-y-1 max-w-xl pl-2">
              <li className="group/item flex items-start space-x-4 cursor-default">
                <span className="text-black/80 font-serif text-3xl md:text-5xl pt-0.5 transform transition-transform duration-300 group-hover/item:translate-x-1">
                  ·
                </span>
                <p className="text-[#4A534D] font-sans font-light text-base md:text-[23px] leading-relaxed">
                  <strong className="font-semibold text-black/60 transition-colors duration-300 group-hover/item:text-gold-600">
                    Cabaña Pastores:
                  </strong>{" "}
                  se encuentra en Rincón de los Pastores, un fraccionamiento campestre rodeado de montañas, a solo 10 minutos del centro. 
                </p>
              </li>

              <li className="group/item flex items-start space-x-4 cursor-default">
                <span className="text-black/80 font-serif text-3xl md:text-5xl pt-0.5 transform transition-transform duration-300 group-hover/item:translate-x-1">
                  ·
                </span>
                <p className="text-[#4A534D] font-sans font-light text-base md:text-[23px] leading-relaxed">
                  <strong className="font-semibold text-black/60 transition-colors duration-300 group-hover/item:text-gold-600">
                    Casas espaciadas entre sí:
                  </strong>{" "}
                  para que la privacidad no dependa solo de las paredes de tu cabaña.
                </p>
              </li>
            </ul>

            {/* Párrafo de Cierre Poético */}
            <p className="text-[#4A534D] font-sans font-normal text-lg md:text-[23px] leading-relaxed max-w-2xl pt-2 border-t border-black/[0.04]">
              Lo suficientemente retirada del pueblo, lo suficientemente cerca para visitarlo cuando quieras.
            </p>
          </div>

          {/* COLUMNA DERECHA: Frame del Mapa Estilizado (5 de 12 columnas) */}
          <div className="lg:col-span-6 w-full lg:pt-4">
            <div 
              className="w-full h-full relative overflow-hidden bg-[#2C352E] rounded-[2px] shadow-2xl transition-all duration-700 cubic-bezier(0.25, 1, 0.5, 1)"
              style={{
                transform: isHovered ? 'scale(1.02) translateY(-4px)' : 'scale(1) translateY(0px)'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Imagen del mapa con transición de zoom premium */}
              <img
                src={mapaEstilizado}
                alt="Mapa estilizado de ubicación en Tapalpa"
                className="w-full h-full object-cover transform transition-transform duration-[4s] ease-out"
                style={{
                  transform: isHovered ? 'scale(1.06)' : 'scale(1)'
                }}
                loading="lazy"
              />

              {/* Capa de overlay elegante para fundir la imagen con la estética del proyecto */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C352E]/30 via-transparent to-transparent pointer-events-none mix-blend-multiply" />
              <div className="absolute inset-0 border border-black/[0.03] pointer-events-none" />
              
              {/* Tooltip flotante minimalista que aparece al hacer hover */}
              <div 
                className={`absolute bottom-6 right-6 bg-[#F4F1EA] py-2 px-4 shadow-xl border border-black/[0.05] transition-all duration-500 flex items-center space-x-2 ${
                  isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                }`}
              >
                <span className="text-[10px] tracking-widest uppercase font-sans font-medium text-[#2C352E]">
                  Ver en Google Maps
                </span>
                <svg className="w-3 h-3 text-gold-600 transform transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>

        </div>

        {/* Isotipo del árbol centrado exactamente como en image_d4fbf0.png */}
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