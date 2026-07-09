import { useState } from 'react';

// Importación de las 6 imágenes desde la subcarpeta correspondiente
import vistaAerea1 from '../assets/grid-6images/vista-aerea-1ra.png';
import vistaAereaLluvia2 from '../assets/grid-6images/vista-aerea-lluvia-2da.png';
import sala3 from '../assets/grid-6images/sala-3ra.jpeg';
import pasilloSala4 from '../assets/grid-6images/pasillo-sala-4ta.jpeg';
import bano5 from '../assets/grid-6images/baño-5ta.jpeg';
import patioTrasero6 from '../assets/grid-6images/patio-trasero-6ta.jpeg';

export default function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const images = [
    { src: vistaAerea1, alt: "Vista aérea diurna de la propiedad integrada con el bosque" },
    { src: vistaAereaLluvia2, alt: "Vista aérea nocturna y atmosférica bajo la lluvia" },
    { src: sala3, alt: "Comedor principal y estancia con ventanales de piso a techo" },
    { src: pasilloSala4, alt: "Pasillo conector y transición arquitectónica de espacios abiertos" },
    { src: bano5, alt: "Cuarto de baño de lujo con acabados de piedra natural y espejos retroiluminados" },
    { src: patioTrasero6, alt: "Patio trasero y fachada posterior orientada al jardín y pinos" }
  ];

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="galeria" className="bg-[#2C352E] py-1 md:py-2 overflow-hidden relative">
      
      {/* Contenedor de la Grilla - Sin espacio (gap-0) para calcar la estética exacta de la imagen */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full max-w-[100vw]">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className="relative aspect-[4/3] md:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden cursor-zoom-in group border-[0.5px] border-[#2C352E]/30"
          >
            {/* Imagen con Zoom Lento e Inversión de Brillo Satín al Hover */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transform scale-100 transition-transform duration-[2.5s] ease-out group-hover:scale-[1.05] will-change-transform"
              loading="lazy"
            />

            {/* Overlay Premium: Oscurecimiento sutil y desenfoque suave periférico */}
            <div className="absolute inset-0 bg-black/10 opacity-100 group-hover:bg-black/30 transition-all duration-700 ease-out" />
            
            {/* Indicador UI/UX Minimalista de Expansión */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0 pointer-events-none">
              <div className="bg-[#F4F1EA]/90 backdrop-blur-sm px-5 py-2.5 rounded-none border border-black/[0.05] shadow-xl">
                <span className="text-[10px] tracking-widest uppercase font-sans font-medium text-[#2C352E]">
                  Expandir Perspectiva
                </span>
              </div>
            </div>

            {/* Micro Línea de Carga Oro en la base del item al pasar el mouse */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-gold-500 w-0 group-hover:w-full transition-all duration-700 ease-out" />
          </div>
        ))}
      </div>

      {/* ================= LIGHTBOX CINEMÁTICO PREMIUM ================= */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-[#0B0F12]/95 backdrop-blur-md flex items-center justify-center transition-all duration-500 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Botón Cerrar */}
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-[#F4F1EA]/60 hover:text-white transition-colors duration-300 p-2 z-50 group"
            onClick={closeLightbox}
          >
            <svg className="w-8 h-8 transform group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Flecha Izquierda */}
          <button 
            className="absolute left-4 md:left-10 text-[#F4F1EA]/50 hover:text-white transition-all duration-300 p-3 bg-white/5 hover:bg-white/10 rounded-full z-50"
            onClick={prevImage}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Contenedor Central de Imagen Activa */}
          <div className="max-w-5xl max-h-[80vh] px-4 flex flex-col items-center space-y-4 relative select-none">
            <img 
              src={images[lightboxIndex].src} 
              alt={images[lightboxIndex].alt} 
              className="max-w-full max-h-[72vh] object-contain shadow-2xl border border-white/5 animate-scale-up"
              onClick={(e) => e.stopPropagation()}
            />
            {/* Pie de foto / Contador editorial */}
            <div className="text-center space-y-1 pt-2 animate-fade-in" onClick={(e) => e.stopPropagation()}>
              <p className="text-gold-400 font-serif italic text-sm md:text-base">
                {images[lightboxIndex].alt}
              </p>
              <p className="text-[#F4F1EA]/40 font-sans text-xs uppercase tracking-widest">
                {lightboxIndex + 1} / {images.length}
              </p>
            </div>
          </div>

          {/* Flecha Derecha */}
          <button 
            className="absolute right-4 md:right-10 text-[#F4F1EA]/50 hover:text-white transition-all duration-300 p-3 bg-white/5 hover:bg-white/10 rounded-full z-50"
            onClick={nextImage}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

    </section>
  );
}