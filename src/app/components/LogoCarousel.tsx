import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const logos = [
  { src: "/logos/anpb.jpeg", alt: "Miembro ANPB" },
  { src: "/logos/aru.jpeg", alt: "Miembro ARU" },
  { src: "/logos/chequeabolivia.jpeg", alt: "Miembro Chequea Bolivia" },
  { src: "/logos/friedrich.jpeg", alt: "Miembro Friedrich" },
  { src: "/logos/guardiana.jpeg", alt: "Miembro Guardiana" },
  { src: "/logos/internet-bolivia.jpeg", alt: "Miembro Internet Bolivia" },
  { src: "/logos/ipicom.jpeg", alt: "Miembro IPICOM" },
  { src: "/logos/warms.jpeg", alt: "Miembro Warms" },
];

// Duplicar los logos para efecto infinito
const logosLoop = [...logos, ...logos];

const LOGO_WIDTH = 224; // w-56 (tailwind) + gap
const GAP = 24; // gap-6 (tailwind)
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

  // Animación infinita tipo marquee
  useEffect(() => {
    controls.start({
      x: [0, -TOTAL_WIDTH],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 28,
          ease: "linear"
        }
      }
    });
  }, [controls]);

  return (
    <div className="relative w-full overflow-hidden py-2" ref={containerRef}>
      <motion.div
        className="flex gap-6"
        style={{ minWidth: "100%" }}
        animate={controls}
      >
        {logosLoop.map((logo, i) => (
          <div key={logo.alt + i} className="flex-shrink-0 bg-white rounded shadow w-56 h-28 flex items-center justify-center">
            <Image src={logo.src} alt={logo.alt} width={220} height={100} className="object-contain w-52 h-24" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoCarousel; 