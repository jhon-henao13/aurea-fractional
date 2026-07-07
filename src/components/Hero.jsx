import bgHero from '../assets/bg-hero-diego.jpeg';

export default function Hero() {
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
          <h1 className="flex flex-col gap-2 text-white font-serif text-6xl md:text-7xl !font-extralight leading-tight tracking-wide">
            Cabaña Pastores
            <span className="block text-gold-500/90 font-serif font-light italic mt-1 text-4xl md:text-6xl">
              Tapalpa, Jalisco
            </span>
          </h1>
          <p className="text-white/70 font-light text-lg md:text-2xl mt-8 max-w-lg leading-relaxed border-l border-gold-500/40 pl-4">
            El lujo no es tener más. Es tener un lugar al que siempre quieras volver.
          </p>
        </div>

        {/* Bottom indicator / Ornament */}
        <div className="flex flex-col items-center justify-center mt-auto animate-bounce">
          {/* Pequeño icono de pino minimalista estilizado */}
          <svg className="w-5 h-5 text-gold-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3L4 14h5v5h6v-5h5L12 3z" />
          </svg>
          <div className="w-[1px] h-8 bg-gradient-to-b from-gold-500/50 to-transparent mt-2"></div>
        </div>
      </div>
    </div>
  );
}