import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaShieldAlt, FaGlobe, FaRegNewspaper, FaUser, FaEnvelope, FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

interface ContactoModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactoModal({ open, onClose }: ContactoModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 p-6 relative flex flex-col"
            initial={{ scale: 0.95, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 40, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header sticky */}
            <div className="sticky top-0 bg-white z-10 flex items-center justify-between pb-2 mb-4 border-b">
              <h2 className="text-2xl md:text-3xl font-bold text-center w-full font-bold text-[#1A3C34] text-base">¿<span className="font-extrabold">Cómo Contactarnos?</span>?</h2>
              <button onClick={onClose} className="absolute right-2 top-2 text-2xl text-gray-400 hover:text-[#1A8C6D] transition"><FaTimes /></button>
            </div>
            <div className="border-b-2 border-[#1A8C6D] w-40 mx-auto mb-6" />
            {/* Opciones de contacto */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#F3FBF7] rounded-xl p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="text-[#1A8C6D] bg-[#D1FADF] rounded p-1" size={24} />
                  <span className="font-bold text-[#1A3C34] text-base">Adhesiones a la Coalición</span>
                </div>
                <div className="text-[#1A3C34] text-sm">Si tu organización está interesada en formar parte de nuestra coalición, contáctanos para conocer los requisitos y procesos de adhesión.</div>
              </div>
              <div className="bg-[#F6F3FB] rounded-xl p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <FaGlobe className="text-[#7C3AED] bg-[#EDE9FE] rounded p-1" size={24} />
                  <span className="font-bold text-[#1A3C34] text-base">Organizaciones Internacionales</span>
                </div>
                <div className="text-[#1A3C34] text-sm">Intercambio de experiencias y buenas prácticas en la lucha contra la desinformación electoral.</div>
              </div>
              <div className="bg-[#F3F7FB] rounded-xl p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <FaRegNewspaper className="text-[#2563EB] bg-[#DBEAFE] rounded p-1" size={24} />
                  <span className="font-bold text-[#1A3C34] text-base">Medios de Comunicación</span>
                </div>
                <div className="text-[#1A3C34] text-sm">Consultas sobre nuestras actividades, declaraciones o solicitudes de entrevistas.</div>
              </div>
              <div className="bg-[#FEF9E7] rounded-xl p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <FaUser className="text-[#F59E42] bg-[#FEF3C7] rounded p-1" size={24} />
                  <span className="font-bold text-[#1A3C34] text-base">Ciudadanía</span>
                </div>
                <div className="text-[#1A3C34] text-sm">Información sobre nuestras actividades, recursos educativos y herramientas disponibles.</div>
              </div>
            </div>
            <div className="border-t pt-6 mt-2 flex flex-col items-center">
              <div className="text-lg font-bold mb-2 text-[#1A3C34]">Contáctanos</div>
              <div className="flex items-center gap-2 mb-4 text-[#1A3C34] text-base font-semibold"><FaEnvelope className="text-[#1A8C6D]" /> contacto@facto.bo</div>
              <div className="flex gap-4 text-2xl text-[#1A3C34]">
                <a href="#" className="hover:text-[#1A8C6D] transition"><FaTwitter /></a>
                <a href="#" className="hover:text-[#1A8C6D] transition"><FaFacebookF /></a>
                <a href="#" className="hover:text-[#1A8C6D] transition"><FaInstagram /></a>
                <a href="#" className="hover:text-[#1A8C6D] transition"><FaYoutube /></a>
                <a href="#" className="hover:text-[#1A8C6D] transition"><FaLinkedin /></a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 