import { motion, AnimatePresence } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 * i } })
};

export default function MiembrosModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-8 relative overflow-y-auto max-h-[90vh]"
            initial={{ scale: 0.95, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
          >
            <div className="sticky top-0 left-0 z-20 bg-white/80 backdrop-blur-md rounded-t-2xl mb-2 flex flex-row items-center pt-2 pb-2 px-2" style={{boxShadow:'0 2px 8px 0 #0001'}}>
              <motion.h2
                className="flex-1 text-2xl md:text-3xl font-light text-[#1A3C34] mb-0"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                custom={0}
              >
                Nuestros <span className="text-[#1A8C6D] font-normal">17 Miembros Articulados</span>
              </motion.h2>
              <button
                className="text-2xl text-gray-400 hover:text-[#1A8C6D] focus:outline-none ml-auto"
                onClick={onClose}
                aria-label="Cerrar"
                style={{marginLeft:'auto'}}>
                ×
              </button>
            </div>
            <motion.hr className="mb-4 border-[#1A8C6D]" initial="hidden" animate="visible" variants={sectionVariants} custom={1} />
            <motion.p className="mb-4 text-[#1A3C34] text-base" initial="hidden" animate="visible" variants={sectionVariants} custom={2}>
              Al 20 de abril de 2025, nuestra coalición está conformada por <b>17 organizaciones articuladas</b>, con <b>4 solicitudes adicionales</b> de adhesión en proceso. Trabajamos bajo dos ejes principales que nos permiten abordar integralmente los desafíos de la desinformación electoral.
            </motion.p>
            <motion.div className="mb-6" initial="hidden" animate="visible" variants={sectionVariants} custom={3}>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <motion.div
                  className="flex-1 bg-[#F8FAF9] rounded-xl p-4 flex items-start gap-3"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <span className="inline-block w-4 h-4 bg-[#1A8C6D] rounded-full mt-1" />
                  <div>
                    <div className="font-bold text-[#1A3C34]">Democracia y Tecnología</div>
                    <div className="text-sm text-[#1A3C34]">Organizaciones que desarrollan acciones sobre democracia y tecnología</div>
                  </div>
                </motion.div>
                <motion.div
                  className="flex-1 bg-[#F8FAF9] rounded-xl p-4 flex items-start gap-3"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <span className="inline-block w-4 h-4 bg-[#1A3C6D] rounded-full mt-1" />
                  <div>
                    <div className="font-bold text-[#1A3C34]">Contra la Desinformación</div>
                    <div className="text-sm text-[#1A3C34]">Organizaciones que desarrollan acciones sobre desinformación</div>
                  </div>
                </motion.div>
              </div>
              <div className="font-bold text-[#1A3C34] mb-2 flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-[#1A3C34] rounded-full" /> Nuestros Miembros
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#1A3C34] text-sm">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants} custom={4}>
                  <div className="font-semibold text-[#1A8C6D] mb-1">Órgano Electoral</div>
                  <ul className="mb-2 ml-4 list-disc">
                    <li>Tribunal Supremo Electoral - Órgano Electoral Plurinacional (TSE-OEP)</li>
                  </ul>
                  <div className="font-semibold text-[#1A8C6D] mb-1">Verificadores y Medios</div>
                  <ul className="mb-2 ml-4 list-disc">
                    <li>Bolivia Verifica</li>
                    <li>ChequeaBolivia -- Cochabamba</li>
                    <li>DW Akademie</li>
                    <li>Guardiana -- Cochabamba</li>
                  </ul>
                  <div className="font-semibold text-[#1A8C6D] mb-1">Organizaciones de Base y Feministas</div>
                  <ul className="mb-2 ml-4 list-disc">
                    <li>Ciberwarmi</li>
                    <li>Coordinadora de la Mujer</li>
                  </ul>
                  <div className="font-semibold text-[#1A8C6D] mb-1">Agencias del Sistema de Naciones Unidas</div>
                  <ul className="mb-2 ml-4 list-disc">
                    <li>ONU Mujeres</li>
                    <li>PNUD</li>
                  </ul>
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants} custom={5}>
                  <div className="font-semibold text-[#1A8C6D] mb-1">Fundaciones Tecnológicas y de Investigación</div>
                  <ul className="mb-2 ml-4 list-disc">
                    <li>Fundación Internet Bolivia</li>
                    <li>Fundación Aru</li>
                    <li>Fundación Muy Waso -- Oruro</li>
                    <li>Fundación Construir</li>
                  </ul>
                  <div className="font-semibold text-[#1A8C6D] mb-1">Instituciones Académicas</div>
                  <ul className="mb-2 ml-4 list-disc">
                    <li>Instituto de Investigación y Posgrado en Comunicación - UMSA (IPICOM-UMSA)</li>
                    <li>Asociación Boliviana de Investigadores de la Comunicación (ABOIC) - Santa Cruz y La Paz</li>
                  </ul>
                  <div className="font-semibold text-[#1A8C6D] mb-1">Organizaciones Internacionales</div>
                  <ul className="mb-2 ml-4 list-disc">
                    <li>Fundación Friedrich Ebert Stiftung (FES)</li>
                    <li>Asociación Nacional de la Prensa de Bolivia (ANPB)</li>
                  </ul>
                </motion.div>
              </div>
              <motion.div className="bg-[#E6F4F1] rounded-xl p-4 mt-6 text-[#1A3C34] text-sm flex items-center gap-2"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <span className="inline-block w-3 h-3 bg-[#1A8C6D] rounded-full" />
                <span><b>En Proceso:</b> 4 solicitudes de adhesión están siendo evaluadas para fortalecer aún más nuestra coalición.</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 