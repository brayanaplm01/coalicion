import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import LogoCarousel from "./LogoCarousel";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const isInView = useInView(textRef, { once: true, amount: 0.3 });

  // Efecto de paralaje con el mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x: x * 20, y: y * 20 });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <motion.section
      ref={containerRef}
      id="inicio"
      className="bg-gradient-to-br from-white via-[#F8FAF9] to-white min-h-screen flex flex-col md:flex-row items-center justify-center relative pt-20 md:pt-28 pb-20 md:pb-28 overflow-hidden"
      style={{ 
        minHeight: '87vh'
      }}
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Círculos animados de fondo */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#1A8C6D]/10 to-[#3ED598]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#3ED598]/10 to-[#1A8C6D]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            x: mousePosition.x * -0.3,
            y: mousePosition.y * -0.3,
          }}
        />
        
        {/* Partículas flotantes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#1A8C6D]/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:pb-[60px] relative z-10"
        style={{ y, opacity, scale }}
      >
        {/* Imagen decorativa arriba a la derecha - móvil */}
        <motion.div 
          className="absolute top-2 right-2 pointer-events-none select-none z-0 block md:hidden"
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image 
            src="/nuevos/inicial_nuevo.png" 
            alt="Manos Unidas decorativo" 
            width={300} 
            height={200} 
            className="opacity-20 w-32 h-32" 
          />
        </motion.div>
        
        {/* Contenido de texto */}
        <motion.div 
          ref={textRef}
          className="flex-1 flex flex-col justify-center order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span 
              className="inline-block px-4 py-2 bg-gradient-to-r from-[#1A8C6D]/10 to-[#3ED598]/10 text-[#1A8C6D] text-sm font-semibold rounded-full border border-[#1A8C6D]/20 mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ✨ Iniciativa Global PNUD 2025
            </motion.span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-light text-[#1A3C34] mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Juntos Contra la{" "}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A8C6D] to-[#3ED598] font-normal relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Desinformación Electoral
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#1A8C6D] to-[#3ED598] rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
              />
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-[#1A3C34] text-xl mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Coalición Nacional que reúne a{" "}
            <motion.span 
              className="text-[#1A8C6D] font-bold relative"
              whileHover={{ scale: 1.05 }}
            >
              17 organizaciones
            </motion.span>{" "}
            comprometidas con la integridad de la información electoral en Bolivia
          </motion.p>

          <motion.p 
            className="text-[#1A3C34] text-lg mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Trabajamos juntos para fortalecer la confianza ciudadana en los procesos electorales, 
            combatiendo la desinformación y promoviendo una participación democrática informada 
            de cara a las{" "}
            <motion.span 
              className="text-[#1A8C6D] font-bold"
              whileHover={{ scale: 1.05 }}
            >
              elecciones generales 2025
            </motion.span>.
          </motion.p>

          {/* Botones de acción */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-[#1A8C6D] to-[#3ED598] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Conoce la Coalición
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-[#1A8C6D] text-[#1A8C6D] font-semibold rounded-xl hover:bg-[#1A8C6D] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Actividades
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Imagen principal */}
        <motion.div 
          ref={imageRef}
          className="flex-1 hidden md:flex justify-center items-center md:items-start mt-[-40px] md:mt-[-80px] order-2"
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#1A8C6D]/20 to-[#3ED598]/20 rounded-3xl blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <Image 
              src="/nuevos/inicial_nuevo.png" 
              alt="Manos Unidas" 
              width={400} 
              height={300} 
              className="object-contain relative z-10 drop-shadow-2xl" 
            />
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Carrusel de logos mejorado */}
      <motion.div 
        className="absolute left-0 right-0 bottom-0 w-full bg-white/80 backdrop-blur-sm shadow-2xl py-8 flex items-center justify-center z-20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="max-w-6xl w-full">
          <LogoCarousel />
        </div>
      </motion.div>
    </motion.section>
  );
}
