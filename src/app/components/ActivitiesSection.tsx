import Image from "next/image";
import { motion } from "framer-motion";

interface ActivitiesSectionProps {
  onTimelineClick: () => void;
}

export default function ActivitiesSection({ onTimelineClick }: ActivitiesSectionProps) {
  return (
    <motion.section
      id="actividades"
      className="py-16 bg-[#F8FAF9]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        <div className="flex-1 flex justify-center">
          <Image 
            src="/inicial/actividades.png" 
            alt="Actividades" 
            width={600} 
            height={250} 
            className="rounded-2xl shadow-lg object-cover" 
          />
        </div>
        
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-light text-[#1A3C34] mb-4">
            Nuestras <span className="text-[#1A8C6D] font-normal">Actividades</span>
          </h2>
          <p className="text-[#1A3C34] text-base mb-4">
            Desarrollamos iniciativas que incluyen talleres de capacitación, implementación de herramientas tecnológicas, análisis de procesos electorales y creación de lineamientos comunicacionales.
          </p>
          <p className="text-[#1A3C34] text-base mb-6">
            Destacamos la aplicación del <b>eMonitor+</b> durante las elecciones judiciales, talleres sobre mitos electorales y estrategias colaborativas contra la desinformación de cara a las <b>elecciones generales 2025</b>.
          </p>
          <button
            onClick={onTimelineClick}
            className="inline-block bg-[#1A8C6D] hover:bg-[#176b53] text-white font-semibold px-8 py-3 rounded transition text-lg shadow"
          >
            Ver Cronología Completa &rarr;
          </button>
        </div>
      </div>
    </motion.section>
  );
}
