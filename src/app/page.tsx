"use client";
import Image from "next/image";
import { FaUsers, FaLightbulb, FaShieldAlt, FaBullhorn, FaCalendarAlt, FaInfoCircle } from "react-icons/fa";
import { FaCheckCircle, FaSearch, FaChartLine, FaBookOpen, FaChalkboardTeacher, FaRegImages } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-[#F1F1F1] min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-white shadow fixed top-0 left-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-2 sm:px-4 py-0.5 sm:py-1">
          <div className="flex items-center gap-2">
            <Image src="/logo-facto.png" alt="FACTO Logo" width={110} height={40} className="object-contain" priority />
          </div>
          <nav className="hidden md:flex gap-4 sm:gap-6 text-[#003366] font-medium text-sm sm:text-base">
            <a href="#alertas" className="hover:text-[#C62828]">Alertas</a>
            <a href="#calendario" className="hover:text-[#C62828]">Calendario</a>
            <a href="#miembros" className="hover:text-[#C62828]">Miembros</a>
            <a href="#herramientas" className="hover:text-[#C62828]">Herramientas</a>
            <a href="#adhesion" className="hover:text-[#C62828]">Adhesión</a>
          </nav>
          <div className="flex gap-2 sm:gap-3">
            <a href="#" aria-label="Twitter" className="text-[#003366] hover:text-[#C62828]"><svg width="22" height="22" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 8.99 4.07 7.13 1.64 4.15c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.95 3.62-.72-.02-1.4-.22-1.99-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.11 2.94 3.97 2.97A8.6 8.6 0 0 1 2 19.54c-.32 0-.63-.02-.94-.06A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 4.59a8.36 8.36 0 0 1-2.54.7z"/></svg></a>
            <a href="#" aria-label="Facebook" className="text-[#003366] hover:text-[#C62828]"><svg width="22" height="22" fill="currentColor"><path d="M22.68 0H1.32A1.32 1.32 0 0 0 0 1.32v21.36A1.32 1.32 0 0 0 1.32 24h11.5v-9.29H9.69v-3.62h3.13V8.41c0-3.1 1.89-4.79 4.65-4.79 1.32 0 2.45.1 2.78.14v3.22h-1.91c-1.5 0-1.79.71-1.79 1.75v2.3h3.58l-.47 3.62h-3.11V24h6.09A1.32 1.32 0 0 0 24 22.68V1.32A1.32 1.32 0 0 0 22.68 0z"/></svg></a>
          </div>
        </div>
        {/* Mobile nav */}
        <nav className="flex md:hidden justify-center gap-4 pb-2 text-[#003366] font-medium text-sm bg-white">
          <a href="#alertas" className="hover:text-[#C62828]">Alertas</a>
          <a href="#calendario" className="hover:text-[#C62828]">Calendario</a>
          <a href="#miembros" className="hover:text-[#C62828]">Miembros</a>
          <a href="#herramientas" className="hover:text-[#C62828]">Herramientas</a>
          <a href="#adhesion" className="hover:text-[#C62828]">Adhesión</a>
        </nav>
      </header>

      {/* Hero Section con imagen principal */}
      <motion.section
        className="relative flex flex-col items-center justify-center w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden"
        style={{ backgroundImage: 'url(/fondoinicial.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Overlay oscuro para contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#003366]/80 via-[#003366]/60 to-[#C62828]/70" aria-hidden="true"></div>
        <div className="relative z-10 text-center w-full flex flex-col items-center justify-center h-full px-2">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Combatiendo la <span className="text-[#C62828]">Desinformación</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white mb-8 font-medium drop-shadow max-w-2xl mx-auto"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Somos FACTO, una coalición que verifica información y educa sobre desinformación electoral.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <a href="#alertas" className="bg-[#C62828] hover:bg-[#a91f1f] text-white font-semibold px-8 py-3 rounded shadow-lg text-lg transition">Ver Últimas Alertas</a>
            <a href="#quees" className="bg-white hover:bg-[#F1F1F1] text-[#003366] font-semibold px-8 py-3 rounded shadow-lg text-lg transition">Conoce Más</a>
          </motion.div>
        </div>
      </motion.section>

      {/* ¿Qué es FACTO? */}
      <motion.section id="quees" className="py-10 sm:py-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-[#003366] text-white rounded-full p-3 shadow-lg flex items-center justify-center mr-2"><FaInfoCircle size={28} /></span>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#003366]">¿Qué es FACTO?</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center bg-gradient-to-br from-[#e3f2fd] to-[#F1F1F1] rounded-2xl shadow-xl p-4 sm:p-8 border border-[#b3e0f7]">
            <div className="flex-1 flex justify-center mb-4 md:mb-0">
              <Image src="/imagenprevia2.png" alt="Live Breaking News" width={320} height={192} className="rounded-lg shadow-md object-cover w-full max-w-xs md:max-w-full" />
            </div>
            <div className="flex-1 text-base sm:text-lg text-[#003366] font-medium text-center md:text-left">
              Somos una alianza de verificadores independientes comprometidos con la transparencia electoral. Verificamos información para proteger la democracia y educar a la ciudadanía.
            </div>
          </div>
        </div>
      </motion.section>

      {/* Alertas de Desinformación */}
      <motion.section id="alertas" className="bg-white py-10 sm:py-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-[#C62828] text-white rounded-full p-3 shadow-lg flex items-center justify-center mr-2"><FaBullhorn size={28} /></span>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#003366]">Últimas Alertas Desinformación</h2>
          </div>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-3">
            {/* Tarjeta de alerta */}
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(198,40,40,0.10)" }}
              className="bg-white border-l-4 border-[#C62828] p-4 sm:p-5 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span className="text-xs font-bold text-[#C62828] uppercase">Falso</span>
              <h3 className="font-semibold text-base sm:text-lg mt-2 mb-1 text-[#003366]">El rumor de cierre de urnas a las 16:00 es falso</h3>
              <p className="text-[#003366] text-sm">La información oficial indica que las urnas cierran a las 18:00 en todo el país.</p>
              <span className="text-xs text-gray-500">Publicado: 05/07/2025</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(251,191,36,0.10)" }}
              className="bg-white border-l-4 border-yellow-500 p-4 sm:p-5 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span className="text-xs font-bold text-yellow-600 uppercase">Engañoso</span>
              <h3 className="font-semibold text-base sm:text-lg mt-2 mb-1 text-[#003366]">Mensaje viral sobre boletas marcadas</h3>
              <p className="text-[#003366] text-sm">No hay evidencia de boletas pre-marcadas. Las autoridades lo desmintieron.</p>
              <span className="text-xs text-gray-500">Publicado: 04/07/2025</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(22,163,74,0.10)" }}
              className="bg-white border-l-4 border-green-600 p-4 sm:p-5 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span className="text-xs font-bold text-green-600 uppercase">Verdadero</span>
              <h3 className="font-semibold text-base sm:text-lg mt-2 mb-1 text-[#003366]">El padrón electoral es público</h3>
              <p className="text-[#003366] text-sm">Cualquier ciudadano puede consultar el padrón en la web oficial.</p>
              <span className="text-xs text-gray-500">Publicado: 03/07/2025</span>
            </motion.div>
          </div>
          <div className="flex justify-center mt-8">
            <a href="#" className="bg-[#003366] hover:bg-[#002244] text-white font-semibold px-6 py-2 rounded shadow-lg">Ver más alertas</a>
          </div>
        </div>
      </motion.section>

      {/* Calendario Electoral */}
      <motion.section id="calendario" className="py-10 sm:py-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-[#003366] text-white rounded-full p-3 shadow-lg flex items-center justify-center mr-2"><FaCalendarAlt size={28} /></span>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#003366]">Calendario Electoral</h2>
          </div>
          <ul className="space-y-4">
            <motion.li
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(0,51,102,0.10)" }}
              className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-gradient-to-r from-[#e3f2fd] to-[#F1F1F1] p-4 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span className="bg-[#003366] text-white rounded-full px-3 py-1 text-xs font-bold">10/07</span>
              <span className="font-medium text-[#003366]">Cierre de Inscripciones</span>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(0,51,102,0.10)" }}
              className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-gradient-to-r from-[#e3f2fd] to-[#F1F1F1] p-4 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span className="bg-[#003366] text-white rounded-full px-3 py-1 text-xs font-bold">20/07</span>
              <span className="font-medium text-[#003366]">Inicio de Campaña</span>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(0,51,102,0.10)" }}
              className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-gradient-to-r from-[#e3f2fd] to-[#F1F1F1] p-4 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span className="bg-[#003366] text-white rounded-full px-3 py-1 text-xs font-bold">05/08</span>
              <span className="font-medium text-[#003366]">Día de Elecciones</span>
            </motion.li>
          </ul>
        </div>
      </motion.section>

      {/* Organizaciones Miembros */}
      <section id="miembros" className="bg-white py-10 sm:py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-[#003366]">Organizaciones Miembros</h2>
        <p className="text-center text-[#003366] text-base md:text-lg font-medium mb-8 max-w-2xl mx-auto">Trabajamos junto a organizaciones líderes en la lucha contra la desinformación y la transparencia</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
          <Image src="/logos/anpb.jpeg" alt="Miembro ANPB" width={300} height={120} className="object-contain bg-white rounded shadow w-56 h-32" />
          <Image src="/logos/aru.jpeg" alt="Miembro ARU" width={300} height={120} className="object-contain bg-white rounded shadow w-56 h-32" />
          <Image src="/logos/chequeabolivia.jpeg" alt="Miembro Chequea Bolivia" width={300} height={120} className="object-contain bg-white rounded shadow w-56 h-32" />
          <Image src="/logos/friedrich.jpeg" alt="Miembro Friedrich" width={300} height={120} className="object-contain bg-white rounded shadow w-56 h-32" />
          <Image src="/logos/guardiana.jpeg" alt="Miembro Guardiana" width={300} height={120} className="object-contain bg-white rounded shadow w-56 h-32" />
          <Image src="/logos/internet-bolivia.jpeg" alt="Miembro Internet Bolivia" width={300} height={120} className="object-contain bg-white rounded shadow w-56 h-32" />
          <Image src="/logos/ipicom.jpeg" alt="Miembro IPICOM" width={300} height={120} className="object-contain bg-white rounded shadow w-56 h-32" />
          <Image src="/logos/warms.jpeg" alt="Miembro Warms" width={300} height={120} className="object-contain bg-white rounded shadow w-56 h-32" />
        </div>
      </section>

      {/* Objetivos de la Coalición */}
      <motion.section className="bg-gradient-to-br from-[#F1F1F1] to-[#e3f2fd] py-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-2 sm:px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-[#003366] tracking-tight drop-shadow">Objetivos de la Coalición en el Marco de la Iniciativa Global</h2>
          <div className="text-center text-[#003366] text-base md:text-lg font-medium mb-12 max-w-3xl mx-auto">
            Trabajamos para fortalecer la colaboración, desarrollar capacidades y asegurar la integridad de la información en el proceso electoral.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Fortalecer la Colaboración */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(0,51,102,0.10)" }}
              className="relative group bg-white rounded-2xl shadow-xl border border-[#b3e0f7] p-8 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl"
              viewport={{ once: true }}
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#003366] text-white rounded-full p-4 shadow-lg border-4 border-white flex items-center justify-center" style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)' }}>
                <FaUsers size={40} />
              </div>
              <h3 className="text-lg md:text-xl font-extrabold text-[#003366] mb-3 text-center mt-10">Fortalecer la Colaboración</h3>
              <p className="text-[#003366] text-base text-center">Establecer una coalición que reúna a instituciones públicas, sociedad civil, medios de comunicación y socios internacionales para contrarrestar la desinformación.</p>
            </motion.div>
            {/* Desarrollo de Capacidades */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(198,40,40,0.10)" }}
              className="relative group bg-white rounded-2xl shadow-xl border border-[#b3e0f7] p-8 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl"
              viewport={{ once: true }}
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#C62828] text-white rounded-full p-4 shadow-lg border-4 border-white flex items-center justify-center" style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)' }}>
                <FaLightbulb size={40} />
              </div>
              <h3 className="text-lg md:text-xl font-extrabold text-[#003366] mb-3 text-center mt-10">Desarrollo de Capacidades</h3>
              <p className="text-[#003366] text-base text-center">Colaborar en iniciativas que fortalezcan la alfabetización mediática digital, aumenten la conciencia pública y aseguren la integridad de la información electoral.</p>
            </motion.div>
            {/* Integridad de la Información */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(22,163,74,0.10)" }}
              className="relative group bg-white rounded-2xl shadow-xl border border-[#b3e0f7] p-8 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl"
              viewport={{ once: true }}
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-600 text-white rounded-full p-4 shadow-lg border-4 border-white flex items-center justify-center" style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)' }}>
                <FaShieldAlt size={40} />
              </div>
              <h3 className="text-lg md:text-xl font-extrabold text-[#003366] mb-3 text-center mt-10">Integridad de la Información</h3>
              <p className="text-[#003366] text-base text-center">Mitigar el impacto de la desinformación y los discursos tóxicos, especialmente hacia las mujeres y poblaciones vulnerables.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Caja de Herramientas */}
      <section id="herramientas" className="py-10 sm:py-12">
        <div className="max-w-5xl mx-auto px-2 sm:px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#003366]">Caja de Herramientas</h2>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-3">
            {/* Tarjeta 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 rgba(198,40,40,0.15)" }}
              className="bg-white border p-6 rounded-2xl shadow-md flex flex-col items-start transition-all cursor-pointer min-h-[240px]"
              viewport={{ once: true }}
            >
              <span className="bg-[#C62828] text-white rounded-full p-3 mb-3 flex items-center justify-center shadow-lg"><FaBookOpen size={28} /></span>
              <span className="text-[#C62828] font-bold mb-2">Guías de Verificación</span>
              <p className="text-[#003366] mb-4">Aprende técnicas profesionales para identificar información falsa.</p>
              <a href="#" className="text-[#003366] font-semibold hover:underline mt-auto">Descargar &rarr;</a>
            </motion.div>
            {/* Tarjeta 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 rgba(0,51,102,0.15)" }}
              className="bg-white border p-6 rounded-2xl shadow-md flex flex-col items-start transition-all cursor-pointer min-h-[240px]"
              viewport={{ once: true }}
            >
              <span className="bg-[#003366] text-white rounded-full p-3 mb-3 flex items-center justify-center shadow-lg"><FaChalkboardTeacher size={28} /></span>
              <span className="text-[#003366] font-bold mb-2">Cursos Online</span>
              <p className="text-[#003366] mb-4">Capacitación gratuita digital para combatir la desinformación.</p>
              <a href="#" className="text-[#003366] font-semibold hover:underline mt-auto">Acceder &rarr;</a>
            </motion.div>
            {/* Tarjeta 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 rgba(22,163,74,0.15)" }}
              className="bg-white border p-6 rounded-2xl shadow-md flex flex-col items-start transition-all cursor-pointer min-h-[240px]"
              viewport={{ once: true }}
            >
              <span className="bg-green-600 text-white rounded-full p-3 mb-3 flex items-center justify-center shadow-lg"><FaRegImages size={28} /></span>
              <span className="text-green-600 font-bold mb-2">Infografías</span>
              <p className="text-[#003366] mb-4">Material visual para compartir y educar sobre desinformación.</p>
              <a href="#" className="text-[#003366] font-semibold hover:underline mt-auto">Ver todas &rarr;</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores y Formulario de Adhesión */}
      <motion.section id="adhesion" className="bg-gradient-to-br from-[#F1F1F1] to-[#003366]/10 py-10 sm:py-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-2 sm:px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#003366]">¿Tu organización quiere sumarse a FACTO?</h2>
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            <div className="flex-1 grid grid-cols-1 gap-4 mb-8 md:mb-0">
              <motion.div
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(0,51,102,0.10)" }}
                className="bg-white p-4 rounded-xl shadow-md flex items-center gap-3 transition-all cursor-pointer"
              >
                <span className="bg-[#003366] text-white rounded-full p-2 flex items-center justify-center"><FaCheckCircle size={28} /></span>
                <span className="font-semibold text-[#003366]">Transparencia</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(198,40,40,0.10)" }}
                className="bg-white p-4 rounded-xl shadow-md flex items-center gap-3 transition-all cursor-pointer"
              >
                <span className="bg-[#C62828] text-white rounded-full p-2 flex items-center justify-center"><FaSearch size={28} /></span>
                <span className="font-semibold text-[#003366]">Verificación</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(22,163,74,0.10)" }}
                className="bg-white p-4 rounded-xl shadow-md flex items-center gap-3 transition-all cursor-pointer"
              >
                <span className="bg-green-600 text-white rounded-full p-2 flex items-center justify-center"><FaChartLine size={28} /></span>
                <span className="font-semibold text-[#003366]">Impacto</span>
              </motion.div>
            </div>
            <motion.form
              className="flex-1 bg-white p-4 sm:p-6 rounded-xl shadow-md w-full max-w-md mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4 text-[#003366]">Formulario de Adhesión</h3>
              <div className="mb-4">
                <label className="block text-[#003366] mb-1" htmlFor="org">Nombre de la organización</label>
                <input id="org" name="org" type="text" className="w-full border rounded px-3 py-2" required />
              </div>
              <div className="mb-4">
                <label className="block text-[#003366] mb-1" htmlFor="tipo">Tipo de organización</label>
                <select id="tipo" name="tipo" className="w-full border rounded px-3 py-2" required>
                  <option value="">Seleccionar</option>
                  <option value="ONG">ONG</option>
                  <option value="Medio">Medio</option>
                  <option value="Universidad">Universidad</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-[#003366] mb-1" htmlFor="contacto">Correo de contacto</label>
                <input id="contacto" name="contacto" type="email" className="w-full border rounded px-3 py-2" required />
              </div>
              <div className="mb-4">
                <label className="block text-[#003366] mb-1" htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje" className="w-full border rounded px-3 py-2" rows={3}></textarea>
              </div>
              <button type="submit" className="w-full bg-[#003366] hover:bg-[#002244] text-white font-semibold py-2 rounded">Enviar Solicitud</button>
            </motion.form>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#003366] text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-2 sm:px-4 gap-4">
          <div className="text-sm">&copy; 2025 FACTO. Todos los derechos reservados.</div>
          <div className="flex gap-4 text-xs sm:text-base">
            <a href="#" className="hover:underline">Verificación</a>
            <a href="#" className="hover:underline">Recursos</a>
            <a href="#" className="hover:underline">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
