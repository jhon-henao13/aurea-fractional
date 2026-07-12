import { useState } from 'react';
import plantaBaja from '../assets/planta-baja.jpeg';
import plantaAlta from '../assets/planta-alta.jpeg';

export default function InternalDistribution() {
  const [activeTab, setActiveTab] = useState('baja'); // 'baja' o 'alta'

  const bajaFeatures = [
    { num: "01", title: "Cocina de alta gama", desc: "Diseñada para cocinar, compartir y disfrutar largas sobremesas." },
    { num: "02", title: "Sala de billar", desc: "Un espacio relajado para momentos memorables." },
    { num: "03", title: "Comedor principal", desc: "Pensado para recibir 14 personas alrededor de una misma mesa." },
    { num: "04", title: "Sala con chimenea", desc: "El corazón del hogar y punto de encuentro durante las noches." },
    { num: "05", title: "Terraza con asador", desc: "El lugar para prolongar la sobremesa al aire libre." }
  ];

  const altaFeatures = [
    { num: "01", title: "Recámara principal", desc: "Con baño completo y un ambiente pensado para el descanso." },
    { num: "02", title: "Estudio privado", desc: "Ideal para trabajar, leer o disfrutar momentos de tranquilidad." },
    { num: "03", title: "Rooftop privado", desc: "Un espacio exclusivo para contemplar el bosque y los atardeceres." },
    { num: "04", title: "Recámaras secundarias", desc: "Cómodas y funcionales para recibir a toda la familia y amigos." }
  ];

  return (
    <section id="distribucion" className="bg-[#f4f0e8] py-10 md:py-16 px-6 md:px-16 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12 items-center">
        
        {/* CONTROL DE INTERFAZ: Selector de Plantas Premium */}
        <div className="flex flex-col items-center space-y-6 w-full">
          <span className="text-black/70 font-sans text-xs md:text-sm uppercase tracking-widest font-semibold">
            Distribución Interna
          </span>
          
          {/* Contenedor del Toggle con Marco Fino Estilo Galería */}
          <div className="inline-flex p-1 border border-black/10 rounded-none bg-transparent relative z-10">
            <button
              onClick={() => setActiveTab('baja')}
              className={`px-8 py-3 text-xs md:text-sm font-sans font-medium uppercase tracking-widest transition-all duration-500 min-w-[140px] md:min-w-[180px] ${
                activeTab === 'baja'
                  ? 'bg-[#2C352E] text-gold-600 shadow-lg'
                  : 'text-black/60 hover:text-black hover:bg-black/[0.03]'
              }`}
            >
              Planta Baja
            </button>
            <button
              onClick={() => setActiveTab('alta')}
              className={`px-8 py-3 text-xs md:text-sm font-sans font-medium uppercase tracking-widest transition-all duration-500 min-w-[140px] md:min-w-[180px] ${
                activeTab === 'alta'
                  ? 'bg-[#2C352E] text-gold-600 shadow-lg'
                  : 'text-black/60 hover:text-black hover:bg-black/[0.03]'
              }`}
            >
              Planta Alta
            </button>
          </div>
        </div>

        {/* CONTENEDOR DE CONTENIDO CON ANIMACIÓN DE TRANSICIÓN CRUZADA */}
        {/* CONTENEDOR DE CONTENIDO CON ANIMACIÓN DE TRANSICIÓN CRUZADA */}
        <div className="w-full relative min-h-[1050px] sm:min-h-[1100px] lg:min-h-[650px] mt-2">
          
          {/* ================= PLANTA BAJA BLOCK (Imagen Izquierda, Texto Derecha) ================= */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center absolute inset-0 w-full h-full transition-all duration-700 cubic-bezier(0.25, 1, 0.5, 1) ${
              activeTab === 'baja'
                ? 'opacity-100 translate-x-0 pointer-events-auto scale-100'
                : 'opacity-0 -translate-x-8 pointer-events-none scale-[0.98]'
            }`}
          >
            {/* Izquierda: Imagen */}
            {/* Izquierda: Imagen */}
            <div className="lg:col-span-7 w-full order-1 flex justify-center items-center">
              <div className="w-full max-w-[20rem] md:max-w-[25rem] relative overflow-hidden rounded-[2px] shadow-2xl border border-black/[0.05] group">
                <img
                  src={plantaBaja}
                  alt="Plano distribución interna de la Planta Baja"
                  className="w-full h-auto object-cover transform scale-100 transition-transform duration-[3s] group-hover:scale-[1.01] rounded-xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/[0.02] to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Derecha: Especificaciones */}
            <div className="lg:col-span-5 space-y-8 order-2 pl-0 lg:pl-4">
              <div className="space-y-6">
                {bajaFeatures.map((feature, i) => (
                  <div 
                    key={i} 
                    className="group flex items-start space-x-6 border-b border-black/[0.05] pb-5 last:border-0 cursor-default"
                  >
                    <span className="text-gold-600 font-serif font-light text-xl md:text-2xl pt-0.5 transition-transform duration-300 group-hover:translate-x-1 block">
                      {feature.num}
                    </span>
                    <div className="space-y-4">
                      <h4 className="text-black/70 font-serif font-normal text-lg tracking-wide group-hover:text-gold-600 transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-black/70 font-sans font-normal text-base md:text-lg leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= PLANTA ALTA BLOCK (Texto Izquierda, Imagen Derecha) ================= */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center absolute inset-0 w-full h-full transition-all duration-700 cubic-bezier(0.25, 1, 0.5, 1) ${
              activeTab === 'alta'
                ? 'opacity-100 translate-x-0 pointer-events-auto scale-100'
                : 'opacity-0 translate-x-8 pointer-events-none scale-[0.98]'
            }`}
          >
            {/* Izquierda: Especificaciones (En mobile se apila abajo gracias a order-2 lg:order-1) */}
            <div className="lg:col-span-5 space-y-8 order-2 lg:order-1 pr-0 lg:pr-4">
              <div className="space-y-6">
                {altaFeatures.map((feature, i) => (
                  <div 
                    key={i} 
                    className="group flex items-start space-x-6 border-b border-black/[0.05] pb-4 last:border-0 cursor-default"
                  >
                    <span className="text-gold-600 font-serif font-light text-xl md:text-2xl pt-0.5 transition-transform duration-300 group-hover:translate-x-1 block">
                      {feature.num}
                    </span>
                    <div className="space-y-4">
                      <h4 className="text-black/70 font-serif font-normal text-lg tracking-wide group-hover:text-gold-600 transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-black/70 font-sans font-normal text-base md:text-lg leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Derecha: Imagen (En mobile se posiciona arriba gracias a order-1 lg:order-2) */}
            {/* Derecha: Imagen (En mobile se posiciona arriba gracias a order-1 lg:order-2) */}
            <div className="lg:col-span-7 w-full order-1 lg:order-2 flex justify-center items-center">
              <div className="w-full max-w-[20rem] md:max-w-[25rem] relative overflow-hidden rounded-[2px] shadow-2xl border border-black/[0.05] group">
                <img
                  src={plantaAlta}
                  alt="Plano distribución interna de la Planta Alta"
                  className="w-full h-auto object-cover transform scale-100 transition-transform duration-[3s] group-hover:scale-[1.01] rounded-xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/[0.02] to-transparent pointer-events-none" />
              </div>
            </div>

            
          </div>

        </div>

        {/* Marca de Agua Elegante del Arbolito al final de la Sección */}
        <div className="pt-8 opacity-30 pointer-events-none">
          <svg className="w-6 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 2L5 12h4v4h3v4h2v-4h3v-4h4L12 2z" />
          </svg>
        </div>

      </div>
    </section>
  );
}