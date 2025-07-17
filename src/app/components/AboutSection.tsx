import Image from "next/image";
import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaInfoCircle } from "react-icons/fa";

interface AboutSectionProps {
  onLearnMoreClick: () => void;
}

export default function AboutSection({ onLearnMoreClick }: AboutSectionProps) {
  const features = [
    {
      icon: <FaInfoCircle className="text-[#1A8C6D] mb-2" size={32} />,
      title: "Nuestro Origen",
      text: (
        <>Nace como respuesta a los eventos de <b>2019 en Bolivia</b>, que dejaron 33 muertos y 804 heridos, evidenciando la urgente necesidad de proteger la integridad electoral.</>
      ),
    },
    {
      icon: <FaUsers className="text-[#1A8C6D] mb-2" size={32} />,
      title: "Nuestro Alcance",
      text: (
        <>Parte de la <b>Iniciativa Global del PNUD</b> presente en 4 países, trabajando como plataforma colaborativa que reúne múltiples actores.</>
      ),
    },
    {
      icon: <FaLightbulb className="text-[#1A8C6D] mb-2" size={32} />,
      title: "Nuestro Objetivo",
      text: (
        <>Enfrentar la desinformación y promover una participación democrática informada de cara a las <b>elecciones generales 2025</b>.</>
      ),
    },
  ];

  return (
    <motion.section
      id="acerca"
      className="py-16 bg-[#F8FAF9]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-light text-[#1A3C34] mb-2">
          ¿Quiénes <span className="text-[#1A8C6D] font-normal">Somos</span>?
        </h2>
        
        <div className="flex justify-center my-8">
          <div className="relative w-full flex justify-center">
            <Image 
              src="/inicial/coalicion.png" 
              alt="Grupo FACTO" 
              width={1400} 
              height={500} 
              className="rounded-2xl shadow-lg object-cover w-[1200px] max-w-full h-auto" 
            />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 text-black px-2 sm:px-8 py-2 rounded-lg shadow text-sm sm:text-lg font-semibold max-w-[95vw] w-[95%] text-center break-words">
              Coalición Nacional Contra la Desinformación Electoral
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {features.map((item, idx) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(26,140,109,0.10)" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 * idx }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center transition-all cursor-pointer"
            >
              {item.icon}
              <div className="font-bold text-[#1A3C34] mb-1">{item.title}</div>
              <div className="text-[#1A3C34] text-sm">{item.text}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-4">
          <button
            onClick={onLearnMoreClick}
            className="inline-block bg-[#1A8C6D] hover:bg-[#176b53] text-white font-semibold px-8 py-3 rounded transition text-lg shadow"
          >
            Conoce más detalles &rarr;
          </button>
        </div>
      </div>
    </motion.section>
  );
}
