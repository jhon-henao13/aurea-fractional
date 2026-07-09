import coffeImg from '../assets/grid-4images/coffe-1ra.jpeg';
import copasImg from '../assets/grid-4images/copas-2da.jpeg';
import fogataImg from '../assets/grid-4images/fogata-3ra.jpeg';
import atardecerImg from '../assets/grid-4images/atardecer-4ta.jpeg';

export default function ExperienceGrid() {
  const experiences = [
    {
      id: 1,
      image: coffeImg,
      title: "Mañanas sin prisa",
    },
    {
      id: 2,
      image: copasImg,
      title: "Conversaciones que se quedan",
    },
    {
      id: 3,
      image: fogataImg,
      title: "Noches junto al fuego",
    },
    {
      id: 4,
      image: atardecerImg,
      title: "Atardeceres para recordar",
    },
  ];

  return (
    <section className="bg-luxury-forest py-16 md:py-24 px-4 md:px-8 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto relative">
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-3 relative">
          
          {experiences.map((item, index) => (
            <div 
              key={item.id} 
              className="group flex flex-col items-center cursor-pointer relative"
            >
              {/* Image Frame Wrapper with Border Effect */}
              <div className="w-full aspect-[4/3] lg:aspect-[1.4/1] overflow-hidden rounded-[2px] border border-white/5 relative shadow-2xl transition-all duration-500 group-hover:border-gold-500/30">
                
                {/* Image Component with subtle zoom */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transform scale-100 transition-transform duration-[1.5s] cubic-bezier(0.25, 1, 0.5, 1) group-hover:scale-105"
                  loading="lazy"
                />

                {/* Micro-overlay on hover for premium depth */}
                <div className="absolute inset-0 bg-black/10 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
              </div>

              {/* Elegant Serif Typographic Label */}
              <div className="mt-5 text-center px-2 transform transition-transform duration-500 group-hover:translate-y-[-2px]">
                <p className="text-gold-500/90 font-serif font-light italic text-lg md:text-xl tracking-wide leading-relaxed">
                  {item.title}
                </p>
                {/* Underline Micro-Animation */}
                <div className="w-0 h-[1px] bg-gold-500/40 mx-auto mt-1 transition-all duration-500 group-hover:w-3/4" />
              </div>

              {/* Vertical Elegant Inner Dividers for Desktop (Exclusive UI Layout) */}
              {index < 3 && (
                <div className="hidden lg:block absolute right-[-6px] top-0 h-[75%] w-[1px] bg-white/5 self-center pointer-events-none" />
              )}
            </div>
          ))}

          {/* Golden Tree Ornament - Perfect Absolute Alignment Between Column 2 and 3 */}
          <div className="hidden lg:flex absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center pointer-events-none">
            <div className="bg-luxury-forest p-2 rounded-full border border-gold-500/20 backdrop-blur-sm shadow-xl">
              <svg 
                className="w-5 h-6 text-gold-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {/* Icono de pino simétrico refinado */}
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.2} 
                  d="M12 2L5 12h4v4h3v4h2v-4h3v-4h4L12 2z" 
                />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}