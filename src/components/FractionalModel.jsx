export default function FractionalModel() {
  const pillars = [
    {
      number: "10",
      title: "Fracciones",
      desc: "Iguales en tamaño y derechos. Ocho disponibles para compra, dos con los socios fundadores."
    },
    {
      number: "14",
      title: "Huéspedes",
      desc: "Iguales en tamaño y derechos. Capacidad total de ocupación. Espacios diseñados para familias y grupos de amigos."
    },
    {
      number: "∞",
      title: "Experiencias",
      desc: "Cada visita es una oportunidad para vivir el destino de una forma completamente diferente."
    }
  ];

  return (
    <section id="modelo" className="bg-[#2C352E] py-16 md:py-20 px-6 md:px-16 overflow-hidden relative group">
      
      {/* Sutil resplandor ambiental interactivo que sigue al mouse de fondo */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_-20%,rgba(168,139,87,0.15),transparent_50%)]" />

      <div className="max-w-6xl mx-auto flex flex-col space-y-14 md:space-y-16 relative z-10">
        
        {/* ENCABEZADO: Títulos principales */}
        <div className="max-w-full space-y-4 animate-fade-in-up">
          <h2 className="text-[#f4f0e8] font-serif text-4xl md:text-[50px] font-extralight tracking-wide leading-tight">
            Modelo Fraccional
          </h2>
          <p className="text-gold-500 font-serif font-light italic text-3xl md:text-[42px] tracking-wide leading-none">
            Sencillo y elegante
          </p>
          <p className="text-[#f4f0e8]/80 font-sans font-normal text-lg md:text-2xl leading-relaxed max-w-5xl pt-4">
            Diez fracciones con derechos reales sobre el inmueble, respaldados por un fideicomiso. Cada copropietario accede por igual a los espacios, con reglas de salida establecidas desde el inicio.
          </p>
        </div>

        {/* GRILLA ASIMÉTRICA: Columnas con líneas divisorias Premium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 pt-6">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className={`flex flex-col space-y-4 md:px-8 first:pl-0 md:first:pl-6 last:pr-0 md:border-l border-gold-600/30 transition-all duration-500 group/item hover:translate-y-[-4px]`}
            >
              {/* Número o Símbolo Serif Grande */}
              <span className="text-gold-500 font-serif text-3xl md:text-4xl font-light tracking-tight transition-colors duration-300 group-hover/item:text-gold-400">
                {pillar.number}
              </span>
              
              <div className="space-y-2">
                <h3 className="text-[#f4f0e8] font-serif font-medium text-lg tracking-wide">
                  {pillar.title}
                </h3>
                <p className="text-[#f4f0e8]/80 font-sans font-normal text-base md:text-[18px] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CONTENEDOR FLOTANTE INFRECUENTE: Ruta de Salida */}
        <div className="w-full bg-[#F4F1EA] p-8 md:p-10 rounded-[2px] shadow-2xl border border-white/[0.05] transform transition-transform duration-700 hover:scale-[1.01] mt-8">
          <div className="space-y-3">
            <h4 className="text-gold-600 font-serif font-light italic text-base md:text-xl tracking-wide">
              Ruta de Salida
            </h4>
            <p className="text-[#4A534D] font-sans font-light text-base md:text-lg leading-relaxed">
              Si en el futuro decides salir de la copropiedad, cuentas con tres caminos definidos: cesión de tus derechos fiduciarios a un tercero, derecho de preferencia entre los copropietarios actuales, o herencia directa a tus herederos a través del fideicomiso. Reglas claras desde el día uno. Los detalles completos se revisan en tu asesoría personalizada.
            </p>
          </div>
        </div>

        {/* Marca de agua del Isotipo inferior */}
        <div className="flex justify-center pt-4 opacity-40 pointer-events-none transition-opacity duration-500 group-hover:opacity-75">
          <svg className="w-6 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 2L5 12h4v4h3v4h2v-4h3v-4h4L12 2z" />
          </svg>
        </div>

      </div>
    </section>
  );
}