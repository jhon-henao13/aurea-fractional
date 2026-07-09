import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, id, className = "" }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Conserva el estado visible una vez revelado para optimizar rendimiento
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08, // Se dispara apenas entra un 8% de la sección
        rootMargin: "0px 0px -40px 0px"
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      id={id}
      ref={ref}
      className={`transition-all duration-[1400ms] cubic-drawer transform ${
        isIntersecting 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-14 scale-[0.99]'
      } ${className}`}
    >
      {children}
    </div>
  );
}