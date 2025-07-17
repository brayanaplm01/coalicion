import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaShieldAlt } from "react-icons/fa";

export default function ObjectivesSection() {
  const objectives = [
    {
      icon: <FaUsers size={40} className="text-[#1A8C6D] mb-4" />,
      title: "Fortalecer la Colaboración",
      text: (
        <>Establecer una coalición que reúna a instituciones públicas, sociedad civil, medios de comunicación y socios internacionales para contrarrestar la desinformación.</>
      ),
    },
    {
      icon: <FaLightbulb size={40} className="text-[#1A8C6D] mb-4" />,
      title: "Desarrollo de Capacidades",
      text: (
        <>Colaborar en iniciativas que fortalezcan la alfabetización mediática digital, aumenten la conciencia pública y aseguren la integridad de la información electoral.</>
      ),
    },
    {
      icon: <FaShieldAlt size={40} className="text-[#1A8C6D] mb-4" />,
      title: "Integridad de la Información",
      text: (
        <>Mitigar el impacto de la desinformación y los discursos tóxicos, especialmente hacia las mujeres y poblaciones vulnerables.</>
      ),
    },
  ];

  return (
    <motion.section
      id="objetivos"
      className="py-16 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-[#1A3C34] mb-10 text-center">
          Objetivos de la Coalición en el Marco de la Iniciativa Global
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {objectives.map((item, idx) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(26,140,109,0.10)" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 * idx }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-[#F8FAF9] rounded-2xl shadow p-8 flex flex-col items-center border border-[#E0E7E9] transition-all cursor-pointer"
            >
              {item.icon}
              <h3 className="text-lg font-bold text-[#1A3C34] mb-2 text-center">{item.title}</h3>
              <p className="text-[#1A3C34] text-base text-center">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
