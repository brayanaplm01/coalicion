import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HistoriaModalProps {
  open: boolean;
  onClose: () => void;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 * i } })
};

const itemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number) => ({ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 * i } })
};

const HistoriaModal: React.FC<HistoriaModalProps> = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-[98vw] md:w-[900px] max-h-[90vh] overflow-y-auto p-6 relative animate-fade-in"
            initial={{ scale: 0.95, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 40, opacity: 0 }}
            transition={{ duration: 0.35, type: "spring" }}
          >
            <div className="sticky top-0 left-0 z-20 bg-white/80 backdrop-blur-md rounded-t-2xl mb-2 flex flex-row flex-wrap items-end gap-x-2 gap-y-0 pt-2 pb-2 px-2" style={{boxShadow:'0 2px 8px 0 #0001'}}>
              <motion.div
                className="flex-1 flex flex-row flex-wrap items-end gap-x-2 gap-y-0"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                custom={0}
              >
                <h2 className="text-2xl md:text-3xl font-light text-[#1A3C34] leading-tight mb-0">
                  Nuestra Historia, Misión y
                </h2>
                <span className="text-2xl md:text-3xl font-light text-[#1A8C6D] leading-tight mb-0">Objetivos</span>
              </motion.div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-[#1A8C6D] text-2xl font-bold focus:outline-none ml-auto"
                aria-label="Cerrar"
                style={{marginLeft:'auto'}}>
                ×
              </button>
            </div>
            <div className="h-1 w-24 bg-[#1A8C6D] rounded mb-4" />
            {/* Antecedentes */}
            <motion.div className="mb-5" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants} custom={1}>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-[#1A8C6D] text-white rounded-full w-7 h-7 flex items-center justify-center text-lg font-bold">•</span>
                <span className="font-bold text-[#1A3C34] text-lg">Antecedentes</span>
              </div>
              <div className="text-[#1A3C34] text-base mt-1">
                En los últimos años, el PNUD y otros actores globales han desarrollado medidas innovadoras para mitigar riesgos que afectan la integridad de los ecosistemas de información durante procesos electorales. Los eventos de <span className="font-bold">2019 en Bolivia</span> dejaron un saldo de <span className="font-bold">33 muertos, 804 heridos</span>, tribunales electorales quemados y autoridades electorales encarceladas, evidenciando la urgente necesidad de proteger la democracia.
              </div>
            </motion.div>
            {/* Iniciativa Global */}
            <motion.div className="mb-5" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants} custom={2}>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-[#1A8C6D] text-white rounded-full w-7 h-7 flex items-center justify-center text-lg font-bold">•</span>
                <span className="font-bold text-[#1A3C34] text-lg">Iniciativa Global</span>
              </div>
              <div className="text-[#1A3C34] text-base mt-1">
                Bolivia fue seleccionada como uno de los <span className="font-bold">cuatro países participantes</span> de la Coalición de Acción sobre la Integridad de la Información en las Elecciones (NAC) del PNUD. Esta iniciativa busca construir un entendimiento colectivo sobre los desafíos de la contaminación informativa y coordinar respuestas eficaces.
              </div>
            </motion.div>
            {/* Nuestra Misión */}
            <motion.div className="mb-5" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants} custom={3}>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-[#1A8C6D] text-white rounded-full w-7 h-7 flex items-center justify-center text-lg font-bold">•</span>
                <span className="font-bold text-[#1A3C34] text-lg">Nuestra Misión</span>
              </div>
              <div className="text-[#1A3C34] text-base mt-1">
                La <span className="font-bold">CNCDE</span> trabaja como plataforma colaborativa que facilita el intercambio de buenas prácticas, el análisis conjunto de amenazas y la promoción de herramientas tecnológicas como <span className="font-bold">eMonitor+</span>. Nos basamos en el enfoque de bienes comunes digitales, considerando la integridad de la información electoral como un bien común que debemos proteger.
              </div>
            </motion.div>
            {/* Nuestros Objetivos */}
            <motion.div className="mb-5" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants} custom={4}>
              <div className="font-bold text-[#1A3C34] text-lg mb-2">Nuestros Objetivos</div>
              <motion.ol
                className="space-y-5 ml-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.15
                    }
                  }
                }}
              >
                <motion.li
                  className="flex items-start gap-4"
                  variants={itemVariants}
                  custom={0}
                >
                  <span className="shadow-lg bg-gradient-to-br from-[#1A8C6D] to-[#3ED598] text-white rounded-xl w-12 h-12 flex items-center justify-center font-extrabold text-2xl border-4 border-white drop-shadow-md select-none transition-transform duration-200">
                    1
                  </span>
                  <div>
                    <span className="font-extrabold text-[#1A8C6D] text-lg">Fortalecer la Colaboración</span><br />
                    <span className="text-[#1A3C34] text-base">Establecer una coalición que reúna a instituciones públicas, sociedad civil, medios de comunicación y socios internacionales para contrarrestar la desinformación electoral de manera coordinada.</span>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-start gap-4"
                  variants={itemVariants}
                  custom={1}
                >
                  <span className="shadow-lg bg-gradient-to-br from-[#1A8C6D] to-[#3ED598] text-white rounded-xl w-12 h-12 flex items-center justify-center font-extrabold text-2xl border-4 border-white drop-shadow-md select-none transition-transform duration-200">
                    2
                  </span>
                  <div>
                    <span className="font-extrabold text-[#1A8C6D] text-lg">Desarrollo de Capacidades</span><br />
                    <span className="text-[#1A3C34] text-base">Colaborar en iniciativas que fortalezcan la alfabetización mediática digital, aumenten la conciencia pública y aseguren la integridad de la información electoral a través de herramientas innovadoras.</span>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-start gap-4"
                  variants={itemVariants}
                  custom={2}
                >
                  <span className="shadow-lg bg-gradient-to-br from-[#1A8C6D] to-[#3ED598] text-white rounded-xl w-12 h-12 flex items-center justify-center font-extrabold text-2xl border-4 border-white drop-shadow-md select-none transition-transform duration-200">
                    3
                  </span>
                  <div>
                    <span className="font-extrabold text-[#1A8C6D] text-lg">Integridad de la Información</span><br />
                    <span className="text-[#1A3C34] text-base">Mitigar el impacto de la desinformación y los discursos tóxicos, especialmente hacia las mujeres y poblaciones vulnerables, protegiendo la estabilidad democrática del país.</span>
                  </div>
                </motion.li>
              </motion.ol>
            </motion.div>
            {/* Ejes de Trabajo */}
            <motion.div className="mb-2" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants} custom={5}>
              <div className="font-bold text-[#1A3C34] text-lg mb-2">Ejes de Trabajo</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <motion.div
                  className="bg-white border border-[#1A8C6D] rounded-lg p-3"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="font-bold text-[#1A8C6D] mb-1">Democracia y Tecnología</div>
                  <div className="text-[#1A3C34] text-base">Organizaciones que desarrollan acciones sobre democracia y tecnología</div>
                </motion.div>
                <motion.div
                  className="bg-white border border-[#1A8C6D] rounded-lg p-3"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="font-bold text-[#1A8C6D] mb-1">Contra la Desinformación</div>
                  <div className="text-[#1A3C34] text-base">Organizaciones que desarrollan acciones sobre desinformación</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HistoriaModal; 