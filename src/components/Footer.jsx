import logoColor from '../assets/logo-color.png';

export default function Footer() {
  return (
    <footer className="bg-[#2C352E] border-t border-white/[0.03] pt-16 pb-12 px-6 md:px-16 text-[#F4F1EA]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* COLUMNA 1: Identidad Corporativa y Manifiesto (5 de 12 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center space-x-3">
            <img 
              src={logoColor} 
              alt="Aurea Fractional Logo" 
              className="h-16 md:h-20 w-auto object-contain brightness-0 invert" 
            />
          </div>
          <div className="space-y-3 max-w-sm">
            
            <p className="text-[#F4F1EA]/75 font-sans font-light text-lg leading-relaxed">
              Una forma distinta de ser propietario, sin la carga de mantenerlo todo el año.
            </p>
          </div>
        </div>

        {/* COLUMNA 2: Datos de Contacto con Columnas Oro Envejecido (4 de 12 cols) */}
        <div className="lg:col-span-4 lg:border-l lg:border-r border-gold-600/30 lg:px-8 space-y-5">
          {/* Ubicación */}
          <div className="flex items-start space-x-3 text-base font-sans font-light text-[#F4F1EA]/80">
            <svg className="w-8 h-8 text-gold-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Fracc. Rincón de los Pastores, Tapalpa, Jal.</span>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3 text-base font-sans font-light text-[#F4F1EA]/80">
            <svg className="w-8 h-8 text-gold-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-9 11h3a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h3" />
            </svg>
            <a href="mailto:hola@aureafractional.com" className="hover:text-gold-400 transition-colors">
              hola@aureafractional.com
            </a>
          </div>

          {/* Teléfono */}
          <div className="flex items-center space-x-3 text-base font-sans font-light text-[#F4F1EA]/80">
            <svg className="w-8 h-8 text-gold-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:+523335067419" className="hover:text-gold-400 transition-colors">
              +52 33 3506 7419
            </a>
          </div>

          {/* Legal Link */}
          <div className="pt-2">
            <a href="#privacidad" className="text-xs font-sans font-light text-[#F4F1EA]/50 hover:text-white underline underline-offset-4 transition-colors">
              Aviso de Privacidad
            </a>
          </div>
        </div>

        {/* COLUMNA 3: Canales Sociales (3 de 12 cols) */}
        <div className="lg:col-span-3 lg:pl-6 space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#F4F1EA]/50 block">
            Síguenos
          </span>
          <div className="flex items-center space-x-4">
            {/* Facebook */}
            <a href="#facebook" className="text-[#F4F1EA]/80 hover:text-gold-400 transition-colors p-1 transform hover:scale-110 duration-300">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 12 22 12z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#instagram" className="text-[#F4F1EA]/80 hover:text-gold-400 transition-colors p-1 transform hover:scale-110 duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Copy legal mínimo al cierre */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/5 text-center lg:text-left text-[11px] text-[#F4F1EA]/30 tracking-wider">
        <p>© 2026 AUREA FRACTIONAL. TODOS LOS DERECHOS RESERVADOS.</p>
      </div>
    </footer>
  );
}