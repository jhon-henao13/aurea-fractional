/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#D4AF37',
          500: '#C5A059',
          600: '#A88B57', // Oro/Latón envejecido de la imagen
        },
        luxury: {
          dark: '#0B0F12',
          forest: '#1E2922',
          cream: '#F4F1EA',     // Fondo cálido orgánico (Linen)
          olive: '#2C352E',     // Verde oliva/oscuro de los títulos principales
          graphite: '#4A534D',  // Gris elegante satinado para las descripciones
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}