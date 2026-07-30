import { useState, useEffect, useRef } from 'react';
import plantaBaja from '../assets/planta-baja.jpeg';
import plantaAlta from '../assets/planta-alta.png';

export default function InternalDistribution() {
  const [activeTab, setActiveTab] = useState('baja'); // 'baja' o 'alta'
  const [offsetY, setOffsetY] = useState(0);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const rect = parallaxRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const scrollPosition = (viewportHeight - rect.top) * 0.15;
        setOffsetY(scrollPosition);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // DATOS PLANTA BAJA (Divididos para columna izquierda y derecha)
  const bajaFeaturesLeft = [
    { num: "1", title: "Acceso y vestíbulo" },
    { num: "2", title: "Sala Principal" },
    { num: "3", title: "Comedor" },
    { num: "4", title: "Cocina de Alta Gama" },
    { num: "5", title: "Bar & Lounge" },
    { num: "6", title: "Sala de billar" },
    { num: "7", title: "Sala de TV (Family room)" },
    { num: "8", title: "Terraza Techada" }
  ];

  const bajaFeaturesRight = [
    { num: "9", title: "Área de Lavado" },
    { num: "10", title: "Cuarto de Servicio" },
    { num: "11", title: "Bodega" },
    { num: "12", title: "Recámaras Secundarias" },
    { num: "13", title: "Jardín Central" }
  ];

  // DATOS PLANTA ALTA
  const altaFeatures = [
    { num: "1", title: "Recámara Principal (Master Suite)" },
    { num: "2", title: "Recámaras Secundarias" },
    { num: "3", title: "Rooftop" },
    { num: "4", title: "Estudio" },
    { num: "5", title: "Cochera Techada" }
  ];

  return (
    <section id="distribucion" className="bg-[#f4f0e8] py-10 md:py-16 px-6 md:px-12 overflow-hidden relative font-serif text-[#2C352E]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* CONTROL DE INTERFAZ: Toggle de Plantas */}
        <div className="flex flex-col items-center space-y-4 w-full mb-8 relative z-20">
          <span className="text-[#b89c66] font-sans text-xs uppercase tracking-[0.25em] font-semibold">
            Distribución Arquitectónica
          </span>
          
          <div className="inline-flex p-1 border border-[#b89c66]/30 bg-white/50 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('baja')}
              className={`px-6 py-2 text-xs md:text-sm font-sans font-medium uppercase tracking-widest transition-all duration-500 min-w-[130px] md:min-w-[160px] ${
                activeTab === 'baja'
                  ? 'bg-[#2C352E] text-[#d4af37] shadow-md'
                  : 'text-black/60 hover:text-black hover:bg-black/[0.03]'
              }`}
            >
              Planta Baja
            </button>
            <button
              onClick={() => setActiveTab('alta')}
              className={`px-6 py-2 text-xs md:text-sm font-sans font-medium uppercase tracking-widest transition-all duration-500 min-w-[130px] md:min-w-[160px] ${
                activeTab === 'alta'
                  ? 'bg-[#2C352E] text-[#d4af37] shadow-md'
                  : 'text-black/60 hover:text-black hover:bg-black/[0.03]'
              }`}
            >
              Planta Alta
            </button>
          </div>
        </div>

        {/* CONTENEDOR CON ANIMACIÓN DE TRANSICIÓN */}
        <div className="w-full relative min-h-[1250px] sm:min-h-[1200px] lg:min-h-[720px] mt-2">
          
          {/* ================= PLANTA BAJA BLOCK ================= */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start absolute inset-0 w-full h-full transition-all duration-700 cubic-bezier(0.25, 1, 0.5, 1) ${
              activeTab === 'baja'
                ? 'opacity-100 translate-x-0 pointer-events-auto scale-100'
                : 'opacity-0 -translate-x-8 pointer-events-none scale-[0.98]'
            }`}
          >
            {/* Columna Izquierda: Título y Lista 1 a 8 */}
            <div className="lg:col-span-4 space-y-6 order-1">
              <div>
                <h2 className="text-5xl lg:text-6xl font-light text-[#1a1a1a] tracking-tight">
                  Diseñada
                </h2>
                <span className="text-4xl lg:text-5xl italic text-[#b89c66] font-normal block mt-1 mb-4">
                  para recibir
                </span>
                <p className="text-sm md:text-base text-black/70 font-sans !leading-relaxed max-w-xs mb-6">
                  Espacios para compartir momentos memorables, rodeados de naturaleza y confort.
                </p>
              </div>

              <div className="space-y-3">
                {bajaFeaturesLeft.map((item) => (
                  <div key={item.num} className="flex items-baseline border-b border-[#c8beaa]/70 pb-2">
                    <span className="text-[#b89c66] font-serif text-sm md:text-base w-8 shrink-0">
                      {item.num}
                    </span>
                    <span className="text-black/80 font-serif text-sm md:text-lg tracking-wide">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna Central: Etiqueta e Imagen Plano */}
            <div className="lg:col-span-5 flex flex-col items-center order-2">
              <span className="text-[#b89c66] font-serif uppercase tracking-[0.2em] text-sm md:text-base font-medium mb-4 text-center">
                PLANTA BAJA
              </span>
              <div className="w-full max-w-[22rem] md:max-w-[26rem] relative overflow-hidden group">
                <img
                  src={plantaBaja}
                  alt="Plano Planta Baja"
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Columna Derecha: Lista 9 a 13 y Nota Legal */}
            <div className="lg:col-span-3 flex flex-col justify-between h-full order-3 lg:pt-28">
              <div className="space-y-3">
                {bajaFeaturesRight.map((item) => (
                  <div key={item.num} className="flex items-baseline border-b border-[#c8beaa]/80 pb-2">
                    <span className="text-[#b89c66] font-serif text-sm md:text-base w-8 shrink-0">
                      {item.num}
                    </span>
                    <span className="text-black/80 font-serif text-sm md:text-lg tracking-wide">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 lg:mt-auto pt-6 text-[10px] md:text-xs text-black/50 font-sans leading-tight">
                <p>Imagen ilustrativa.</p>
                <p>El proyecto podrá presentar variaciones durante su ejecución.</p>
              </div>
            </div>
          </div>

          {/* ================= PLANTA ALTA BLOCK ================= */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start absolute inset-0 w-full h-full transition-all duration-700 cubic-bezier(0.25, 1, 0.5, 1) ${
              activeTab === 'alta'
                ? 'opacity-100 translate-x-0 pointer-events-auto scale-100'
                : 'opacity-0 translate-x-8 pointer-events-none scale-[0.98]'
            }`}
          >
            {/* Columna Izquierda: Título y Lista 1 a 5 */}
            <div className="lg:col-span-4 space-y-6 order-1">
              <div>
                <h2 className="text-5xl lg:text-6xl font-light text-[#1a1a1a] tracking-tight">
                  Diseñada
                </h2>
                <span className="text-4xl lg:text-5xl italic text-[#b89c66] font-normal block mt-1 mb-4">
                  para recibir
                </span>
                <p className="text-sm md:text-base text-black/70 font-sans !leading-relaxed max-w-xs mb-6">
                  Espacios para compartir momentos memorables, rodeados de naturaleza y confort.
                </p>
              </div>

              <div className="space-y-3">
                {altaFeatures.map((item) => (
                  <div key={item.num} className="flex items-baseline border-b border-[#c8beaa]/80 pb-2">
                    <span className="text-[#b89c66] font-serif text-sm md:text-base w-8 shrink-0">
                      {item.num}
                    </span>
                    <span className="text-black/80 font-serif text-sm md:text-lg tracking-wide">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna Central: Etiqueta e Imagen Plano */}
            <div className="lg:col-span-5 flex flex-col items-center order-2">
              <span className="text-[#b89c66] font-serif uppercase tracking-[0.2em] text-sm md:text-base font-medium mb-4 text-center">
                PLANTA ALTA
              </span>
              <div className="w-full max-w-[22rem] md:max-w-[26rem] relative overflow-hidden group">
                <img
                  src={plantaAlta}
                  alt="Plano Planta Alta"
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Columna Derecha: Solo Nota Legal */}
            <div className="lg:col-span-3 flex flex-col justify-end h-full order-3">
              <div className="mt-8 lg:mt-auto pt-6 text-[10px] md:text-xs text-black/50 font-sans leading-tight">
                <p>Imagen ilustrativa.</p>
                <p>El proyecto podrá presentar variaciones durante su ejecución.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Marca de Agua con Parallax Scroll */}
        <div 
          ref={parallaxRef}
          className="w-full flex justify-center pt-10 pb-4 relative z-10 pointer-events-none overflow-visible"
        >
          <div 
            className="flex flex-col items-center transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translateY(${offsetY}px)` }}
          >
            <div className="flex flex-col items-center justify-center animate-[bounce_3s_infinite]">
              <svg className="w-3.5 h-3.5 text-[#b89c66]/70 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
              <svg className="w-6 h-6 text-[#b89c66] filter drop-shadow-[0_2px_4px_rgba(44,53,46,0.08)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.1} d="M12 2L5 12h4v4h3v4h2v-4h3v-4h4L12 2z" />
              </svg>
              <div className="w-[1px] h-14 bg-gradient-to-b from-[#b89c66] via-[#b89c66]/30 to-transparent mt-2.5" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}