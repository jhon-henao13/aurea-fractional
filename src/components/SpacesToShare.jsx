import blueHouse from '../assets/blue-house.jpeg';

export default function SpacesToShare() {
  const specs = [
    {
      id: 1,
      value: "1,750 m2",
      label: "Terreno",
      // Icono de plano de terreno / cuadrícula estructural
      icon: (
        <svg className="w-12 h-12 text-black/60 transition-colors duration-300 group-hover:text-gold-600" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v16.5h16.5V3.75H3.75zM9 3.75v16.5M15 3.75v16.5M3.75 9h16.5M3.75 15h16.5" />
        </svg>
      )
    },
    {
      id: 2,
      value: "540 m2",
      label: "Construcción",
      // Icono de fachada de residencia premium
      icon: (
        <svg className="w-12 h-12 text-black/60 transition-colors duration-300 group-hover:text-gold-600" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      )
    },
    {
      id: 3,
      value: "5",
      label: "Recámaras",
      // Icono de cama minimalista
      icon: (
        <svg className="w-12 h-12 text-black/60 transition-colors duration-300 group-hover:text-gold-600" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5M3.75 12h16.5m-16.5 4.5h16.5M3.75 20.25V3.75M20.25 20.25V12" />
        </svg>
      )
    },
    {
      id: 4,
      value: "6.5",
      label: "Baños",
      // Icono de tina premium
      icon: (
        <svg className="w-12 h-12 text-black/60 transition-colors duration-300 group-hover:text-gold-600" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5h18M5.25 10.5v6.75a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25V10.5M6.75 19.5v1.5M17.25 19.5v1.5M18.75 6.75h-3.75V4.5a1.5 1.5 0 00-1.5-1.5h-3" />
        </svg>
      )
    },
    {
      id: 5,
      value: "14",
      label: "Personas",
      // Icono elegante de huéspedes / capacidad
      icon: (
        <svg className="w-12 h-12 text-black/60 transition-colors duration-300 group-hover:text-gold-600" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      )
    }
  ];

  return (
    <section id="proyecto" className="bg-[#f4f0e8] py-16 md:py-20 px-6 md:px-16 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12 md:space-y-16">
        
        {/* TOP BLOCK: Main Headings spanning full width */}
        <div className="max-w-5xl space-y-6 animate-fade-in-up">
          <h2 className="text-black/80 font-serif text-4xl md:text-[45px] font-extralight tracking-wide leading-tight">
            Espacios para Compartir
          </h2>
          <p className="text-gold-600 font-serif font-light italic text-4xl md:text-[45px] tracking-wide leading-none">
            Pensada para quedarse en la memoria
          </p>
        </div>

        {/* BOTTOM BLOCK: Inverted Asymmetric Layout (Image Left, Specs Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center !mt-10">
          
          {/* Left Column: High-End Architectural Image */}
          <div className="lg:col-span-6 w-full relative group">
            <div className="w-full relative overflow-hidden rounded-[2px] shadow-2xl border border-black/[0.03]">
              <img 
                src={blueHouse} 
                alt="Diseño arquitectónico exterior residencial de lujo" 
                className="w-full h-full object-cover aspect-[4/3] rounded-md transform scale-100 transition-transform duration-[3s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/[0.02] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Brand Tree Icon - Placed on the bottom-right of the image module exactly like the template */}
            <div className="absolute -right-8 -bottom-6 hidden xl:block opacity-50 pointer-events-none transition-opacity duration-500 group-hover:opacity-90">
              <svg className="w-6 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 2L5 12h4v4h3v4h2v-4h3v-4h4L12 2z" />
              </svg>
            </div>
          </div>

          {/* Right Column: Narrative Block & Data Specs Grid */}
          <div className="lg:col-span-6 space-y-10">
            <p className="text-black/70 font-sans font-normal text-xl md:text-[24px] leading-relaxed max-w-xl">
              Una residencia <b>de lujo</b> diseñada para reunir a toda la familia, con espacio de sobra para invitar cuando tú decidas.
            </p>

            {/* Technical Metrics / Icons Row */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-y-8 gap-x-4 pt-4 border-t border-black/[0.06]">
              {specs.map((item) => (
                <div 
                  key={item.id} 
                  className="group flex flex-col items-center text-center space-y-3 cursor-default"
                >
                  {/* Icon Wrapper with Lift Animation */}
                  <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
                    {item.icon}
                  </div>
                  
                  {/* Numeric/Metric Info */}
                  <div className="space-y-2">
                    <span className="block text-black/80 font-sans font-bold text-base md:text-lg tracking-tight leading-none">
                      {item.value}
                    </span>
                    <span className="block text-black/40 font-sans text-[11px] md:text-xs uppercase tracking-widest font-medium">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}