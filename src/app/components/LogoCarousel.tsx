import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const logos = [
  { src: "/logos/aboic.png", alt: "ABOIC", name: "Asociación Boliviana de Carreras de Comunicación" },
  { src: "/logos/aru.png", alt: "Fundación ARU", name: "Fundación ARU" },
  { src: "/logos/DW-Academie.jpg", alt: "DW Akademie", name: "DW Akademie" },
  { src: "/logos/fundacion-construir.webp", alt: "Fundación Construir", name: "Fundación Construir" },
  { src: "/logos/ibf.webp", alt: "Internet Bolivia Foundation", name: "Internet Bolivia Foundation" },
  { src: "/logos/LOGO-bolivia.png", alt: "Bolivia Verifica", name: "Bolivia Verifica" },
  { src: "/logos/logo-chequea.png", alt: "Chequea Bolivia", name: "Chequea Bolivia" },
  { src: "/logos/logo-cibeEr.png", alt: "CIBER", name: "Centro de Investigación y Desarrollo" },
  { src: "/logos/logo-coordinadora-de-la-mujer.jpg", alt: "Coordinadora de la Mujer", name: "Coordinadora de la Mujer" },
  { src: "/logos/Logo-fespng.png", alt: "FES", name: "Friedrich Ebert Stiftung" },
  { src: "/logos/logo-guardiana.png", alt: "Guardiana", name: "Guardiana" },
  { src: "/logos/logo-ipicom.png", alt: "IPICOM", name: "Instituto de Prensa y Sociedad" },
  { src: "/logos/LOGO-MUY-WASO.webp", alt: "Muy Waso", name: "Muy Waso" },
  { src: "/logos/logo-periodistas.jpg", alt: "Colegio de Periodistas", name: "Colegio Nacional de Periodistas" },
  { src: "/logos/OEP.png", alt: "OEP", name: "Órgano Electoral Plurinacional" },
  { src: "/logos/ONU-mujeres.avif", alt: "ONU Mujeres", name: "ONU Mujeres Bolivia" },
];

// Duplicar los logos para efecto infinito
const logosLoop = [...logos, ...logos, ...logos];

const LOGO_WIDTH = 300; // Actualizado para el nuevo tamaño
const GAP = 24; // Gap reducido para mejor flujo
const TOTAL_WIDTH = logos.length * (LOGO_WIDTH + GAP);

const LogoCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (containerRef.current) {
      // setContainerWidth(containerRef.current.offsetWidth); // This line is removed
    }
    const handleResize = () => {
      if (containerRef.current) {
        // setContainerWidth(containerRef.current.offsetWidth); // This line is removed
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animación infinita tipo marquee más suave
  useEffect(() => {
    controls.start({
      x: [0, -TOTAL_WIDTH],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 120, // Más lento y suave
          ease: "linear"
        }
      }
    });
  }, [controls]);

  return (
    <div className="relative w-full overflow-hidden py-6" ref={containerRef}>
      {/* Gradientes laterales muy sutiles para que no sean notorios */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#2c5364]/20 via-[#2c5364]/10 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#2c5364]/20 via-[#2c5364]/10 to-transparent z-10" />
      
      <motion.div
        className="flex gap-6"
        style={{ minWidth: "100%" }}
        animate={controls}
      >
        {logosLoop.map((logo, i) => (
          <motion.div 
            key={logo.alt + i} 
            className="flex-shrink-0 group"
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-[#3ED598]/20 transition-all duration-300 w-72 h-36 flex flex-col items-center justify-center p-6 border border-white/20 group-hover:border-[#3ED598]/40 group-hover:bg-white/100">
              <div className="flex items-center justify-center h-20 mb-3">
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={180} 
                  height={90} 
                  className="object-contain max-w-full max-h-full filter group-hover:brightness-110 group-hover:contrast-110 transition-all duration-300 drop-shadow-md" 
                />
              </div>
              <p className="text-xs text-[#1A3C34]/80 font-medium text-center opacity-70 group-hover:opacity-100 group-hover:text-[#1A8C6D] transition-all duration-300 leading-tight">
                {logo.name}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoCarousel; 