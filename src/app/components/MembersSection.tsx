import Image from "next/image";
import { motion } from "framer-motion";

interface MembersSectionProps {
  onMoreInfoClick: () => void;
}

export default function MembersSection({ onMoreInfoClick }: MembersSectionProps) {
  return (
    <motion.section
      id="miembros"
      className="py-16 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-light text-[#1A3C34] mb-4">
            Nuestros <span className="text-[#1A8C6D] font-normal">Miembros</span>
          </h2>
          <p className="text-[#1A3C34] text-base mb-4">
            Somos una coalición de <b>17 organizaciones</b> comprometidas con la integridad electoral, articuladas bajo dos ejes principales: organizaciones que trabajan en democracia y tecnología, y organizaciones especializadas en combatir la desinformación.
          </p>
          <p className="text-[#1A3C34] text-base mb-6">
            Nuestra coalición incluye verificadoras de noticias, medios de investigación, organizaciones feministas, fundaciones tecnológicas, el Órgano Electoral Plurinacional y agencias del Sistema de Naciones Unidas, trabajando de manera colaborativa hacia un objetivo común.
          </p>
          <button
            onClick={onMoreInfoClick}
            className="inline-block bg-[#1A8C6D] hover:bg-[#176b53] text-white font-semibold px-8 py-3 rounded transition text-lg shadow"
          >
            Más Información &rarr;
          </button>
        </div>
        
        <div className="flex-1 flex justify-center">
          <Image 
            src="/inicial/miembros.png" 
            alt="Gráfico Miembros" 
            width={900} 
            height={900} 
            className="object-contain" 
          />
        </div>
      </div>
    </motion.section>
  );
}
