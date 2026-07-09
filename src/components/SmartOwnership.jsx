import salaFogata from '../assets/sala-fogata.jpeg';

export default function SmartOwnership() {
  const services = [
    "Casa lista a tu llegada",
    "Mantenimiento y jardinería integral",
    "Seguridad y vigilancia 24/7",
    "Reportes periódicos de administración y mantenimiento",
    "Reserva de servicios y experiencias"
  ];

  return (
    <section id="co-propiedad" className="bg-[#f4f0e8] py-16 md:py-20 px-6 md:px-16 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12 md:space-y-16">
        
        {/* TOP BLOCK: Main Headings spanning full width */}
        <div className="max-w-3xl space-y-4 animate-fade-in-up">
          <h2 className="text-black/80 font-serif text-4xl md:text-[45px] font-extralight tracking-wide leading-tight">
            La cabaña es tuya.
          </h2>
          <p className="text-gold-600 font-serif font-light italic text-5xl md:text-[52px] tracking-wide leading-none">
            La gestión, nuestra.
          </p>
        </div>

        {/* BOTTOM BLOCK: Asymmetric Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start !mt-10">
          
          {/* Left Column: Description & Premium Services List */}
          <div className="lg:col-span-6 space-y-10 relative">
            <p className="text-black/70 font-sans font-light text-lg md:text-[26px] leading-relaxed max-w-xl">
              El lugar al que siempre quieres volver, sin la carga que implica mantenerlo.
            </p>

            {/* Services Group */}
            <div className="space-y-6">
              <h4 className="text-black/70 font-sans font-semibold text-xl tracking-wider">
                Servicios incluidos:
              </h4>
              
              <ul className="space-y-4 !mt-8">
                {services.map((service, index) => (
                  <li 
                    key={index} 
                    className="flex items-center space-x-4 text-luxury-graphite/95 font-sans font-light text-lg md:text-[23px] group cursor-default"
                  >
                    {/* Dark Solid Rounded Check (Matches image format) */}
                    <div className="flex-shrink-0 w-[24px] h-[24px] rounded-full bg-black/80 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-neutral-900 group-hover:shadow-[0_0_12px_rgba(0,0,0,0.15)] shadow-sm">
                      <svg 
                        className="w-2.5 h-2.5 text-white transition-transform duration-300 group-hover:scale-105"
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth={3.5} 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    
                    <span className="transition-colors text-black/90 duration-300 group-hover:text-gold-600">
                      {service}
                    </span>

                  </li>
                ))}
              </ul>
            </div>

            {/* Minimalist Brand Tree Icon - Placed elegantly at the lower zone */}
            <div className="absolute right-6 bottom-2 hidden lg:block opacity-40 pointer-events-none transition-opacity duration-500 hover:opacity-80">
              <svg className="w-6 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 2L5 12h4v4h3v4h2v-4h3v-4h4L12 2z" />
              </svg>
            </div>
          </div>

          {/* Right Column: High-End Cinematic Image Frame */}
          <div className="lg:col-span-6 w-full">
            <div className="w-full relative overflow-hidden rounded-[2px] shadow-2xl group border border-black/[0.03]">
              <img 
                src={salaFogata} 
                alt="Interior residencial premium con fogata" 
                className="w-full h-full object-cover aspect-[4/3] rounded-md transform scale-100 transition-transform duration-[3s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.02]"
                loading="lazy"
              />
              {/* Ultra smooth environmental lighting overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/[0.04] via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}



