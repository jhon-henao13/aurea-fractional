export default function Footer() {
  return (
    <footer className="bg-luxury-dark border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between text-white/40 text-xs tracking-wider">
        <p>© 2026 AUREA FRACTIONAL. Todos los derechos reservados.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#privacidad" className="hover:text-white transition-colors">Aviso de Privacidad</a>
          <a href="#terminos" className="hover:text-white transition-colors">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  );
}