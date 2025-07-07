"use client";
import Image from "next/image";
import { FaUsers, FaLightbulb, FaShieldAlt, FaInfoCircle, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const HistoriaModal = dynamic(() => import("./components/HistoriaModal"), { ssr: false });

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#F8FAF9] min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/70 backdrop-blur shadow-none" : "bg-white shadow-md"}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
          {/* Logo y urna */}
          <div className="flex items-center gap-2 relative">
            <Image
              src="/inicial/logo.png"
              alt="FACTOBO Logo"
              width={260}
              height={80}
              className="object-contain z-10 hidden sm:block"
              priority
            />
            <Image
              src="/inicial/logo.png"
              alt="FACTOBO Logo"
              width={160}
              height={50}
              className="object-contain z-10 block sm:hidden"
              priority
            />
            <Image
              src="/inicial/Vote.svg"
              alt="Urna de voto"
              width={100}
              height={100}
              className="object-contain ml-[-15px] z-0 hidden sm:block"
              style={{ marginTop: 0 }}
            />
            <Image
              src="/inicial/Vote.svg"
              alt="Urna de voto"
              width={60}
              height={60}
              className="object-contain ml-[-10px] z-0 block sm:hidden"
              style={{ marginTop: 0 }}
            />
          </div>
          {/* Menú desktop */}
          <nav className="hidden md:flex gap-8 text-[#1A3C34] font-semibold text-sm uppercase tracking-wide">
            <a href="#inicio" className="hover:text-[#1A8C6D]">Inicio</a>
            <a href="#acerca" className="hover:text-[#1A8C6D]">Acerca de</a>
            <a href="#miembros" className="hover:text-[#1A8C6D]">Miembros</a>
            <a href="#actividades" className="hover:text-[#1A8C6D]">Actividades</a>
            <a href="#contacto" className="hover:text-[#1A8C6D]">Contacto</a>
          </nav>
          {/* Menú móvil hamburguesa */}
          <button
            className="md:hidden text-[#1A3C34] text-2xl p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          {/* Logo PNUD */}
          <div className="hidden sm:block">
            <Image src="/inicial/pnud.png" alt="PNUD" width={100} height={48} className="object-contain" />
          </div>
          <div className="block sm:hidden ml-2">
            <Image src="/inicial/pnud.png" alt="PNUD" width={48} height={24} className="object-contain" />
          </div>
        </div>
        {/* Menú móvil desplegable */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 shadow-lg z-50 animate-fade-in flex flex-col items-center py-4 gap-4 text-[#1A3C34] font-semibold text-base uppercase tracking-wide">
            <a href="#inicio" className="hover:text-[#1A8C6D]" onClick={() => setMenuOpen(false)}>Inicio</a>
            <a href="#acerca" className="hover:text-[#1A8C6D]" onClick={() => setMenuOpen(false)}>Acerca de</a>
            <a href="#miembros" className="hover:text-[#1A8C6D]" onClick={() => setMenuOpen(false)}>Miembros</a>
            <a href="#actividades" className="hover:text-[#1A8C6D]" onClick={() => setMenuOpen(false)}>Actividades</a>
            <a href="#contacto" className="hover:text-[#1A8C6D]" onClick={() => setMenuOpen(false)}>Contacto</a>
          </div>
        )}
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <motion.section id="inicio" className="bg-white min-h-screen flex items-center justify-center"
          style={{ minHeight: '100vh' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-8 px-4">
            <div className="flex-1 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-light text-[#1A3C34] mb-4 leading-tight">
                Juntos Contra la <span className="text-[#1A8C6D] font-normal">Desinformación Electoral</span>
              </h1>
              <p className="text-[#1A3C34] text-lg mb-4">
                Coalición Nacional que reúne a <span className="text-[#1A8C6D] font-semibold">17 organizaciones</span> comprometidas con la integridad de la información electoral en Bolivia
              </p>
              <p className="text-[#1A3C34] text-base mb-6">
                Trabajamos juntos para fortalecer la confianza ciudadana en los procesos electorales, combatiendo la desinformación y promoviendo una participación democrática informada de cara a las <span className="text-[#1A8C6D] font-semibold">elecciones generales 2025</span>.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <Image src="/inicial/unidad.png" alt="Manos Unidas" width={340} height={260} className="object-contain" />
            </div>
          </div>
        </motion.section>

        {/* ¿Quiénes Somos? */}
        <motion.section id="acerca" className="py-16 bg-[#F8FAF9]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-light text-[#1A3C34] mb-2">¿Quiénes <span className="text-[#1A8C6D] font-normal">Somos</span>?</h2>
            <div className="flex justify-center my-8">
              <Image src="/inicial/coalicion.png" alt="Grupo FACTO" width={1000} height={320} className="rounded-2xl shadow-lg object-cover" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(26,140,109,0.10)" }} className="bg-white rounded-xl shadow p-6 flex flex-col items-center transition-all cursor-pointer">
                <FaInfoCircle className="text-[#1A8C6D] mb-2" size={32} />
                <div className="font-bold text-[#1A3C34] mb-1">Nuestro Origen</div>
                <div className="text-[#1A3C34] text-sm">
                  Nace como respuesta a los eventos de <b>2019 en Bolivia</b>, que dejaron 33 muertos y 804 heridos, evidenciando la urgente necesidad de proteger la integridad electoral.
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(26,140,109,0.10)" }} className="bg-white rounded-xl shadow p-6 flex flex-col items-center transition-all cursor-pointer">
                <FaUsers className="text-[#1A8C6D] mb-2" size={32} />
                <div className="font-bold text-[#1A3C34] mb-1">Nuestro Alcance</div>
                <div className="text-[#1A3C34] text-sm">
                  Parte de la <b>Iniciativa Global del PNUD</b> presente en 4 países, trabajando como plataforma colaborativa que reúne múltiples actores.
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(26,140,109,0.10)" }} className="bg-white rounded-xl shadow p-6 flex flex-col items-center transition-all cursor-pointer">
                <FaLightbulb className="text-[#1A8C6D] mb-2" size={32} />
                <div className="font-bold text-[#1A3C34] mb-1">Nuestro Objetivo</div>
                <div className="text-[#1A3C34] text-sm">
                  Enfrentar la desinformación y promover una participación democrática informada de cara a las <b>elecciones generales 2025</b>.
                </div>
              </motion.div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-block bg-[#1A8C6D] hover:bg-[#176b53] text-white font-semibold px-8 py-3 rounded transition text-lg shadow"
              >
                Conoce más detalles &rarr;
              </button>
            </div>
          </div>
        </motion.section>

        {/* Nuestros Miembros */}
        <motion.section id="miembros" className="py-16 bg-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
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
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/inicial/miembros.png" alt="Gráfico Miembros" width={900} height={900} className="object-contain" />
            </div>
          </div>
          {/* Logos de miembros (ajustados al nuevo diseño) */}
          <motion.div className="max-w-6xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image src="/logos/anpb.jpeg" alt="Miembro ANPB" width={220} height={100} className="object-contain bg-white rounded shadow w-56 h-28" />
            <Image src="/logos/aru.jpeg" alt="Miembro ARU" width={220} height={100} className="object-contain bg-white rounded shadow w-56 h-28" />
            <Image src="/logos/chequeabolivia.jpeg" alt="Miembro Chequea Bolivia" width={220} height={100} className="object-contain bg-white rounded shadow w-56 h-28" />
            <Image src="/logos/friedrich.jpeg" alt="Miembro Friedrich" width={220} height={100} className="object-contain bg-white rounded shadow w-56 h-28" />
            <Image src="/logos/guardiana.jpeg" alt="Miembro Guardiana" width={220} height={100} className="object-contain bg-white rounded shadow w-56 h-28" />
            <Image src="/logos/internet-bolivia.jpeg" alt="Miembro Internet Bolivia" width={220} height={100} className="object-contain bg-white rounded shadow w-56 h-28" />
            <Image src="/logos/ipicom.jpeg" alt="Miembro IPICOM" width={220} height={100} className="object-contain bg-white rounded shadow w-56 h-28" />
            <Image src="/logos/warms.jpeg" alt="Miembro Warms" width={220} height={100} className="object-contain bg-white rounded shadow w-56 h-28" />
          </motion.div>
        </motion.section>

        {/* Nuestras Actividades */}
        <motion.section id="actividades" className="py-16 bg-[#F8FAF9]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
            <div className="flex-1 flex justify-center">
              <Image src="/inicial/actividades.png" alt="Actividades" width={600} height={250} className="rounded-2xl shadow-lg object-cover" />
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
            </div>
          </div>
        </motion.section>

        {/* Objetivos de la Coalición */}
        <motion.section id="objetivos" className="py-16 bg-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light text-[#1A3C34] mb-10 text-center">
              Objetivos de la Coalición en el Marco de la Iniciativa Global
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(26,140,109,0.10)" }} className="bg-[#F8FAF9] rounded-2xl shadow p-8 flex flex-col items-center border border-[#E0E7E9] transition-all cursor-pointer">
                <FaUsers size={40} className="text-[#1A8C6D] mb-4" />
                <h3 className="text-lg font-bold text-[#1A3C34] mb-2 text-center">Fortalecer la Colaboración</h3>
                <p className="text-[#1A3C34] text-base text-center">
                  Establecer una coalición que reúna a instituciones públicas, sociedad civil, medios de comunicación y socios internacionales para contrarrestar la desinformación.
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(26,140,109,0.10)" }} className="bg-[#F8FAF9] rounded-2xl shadow p-8 flex flex-col items-center border border-[#E0E7E9] transition-all cursor-pointer">
                <FaLightbulb size={40} className="text-[#1A8C6D] mb-4" />
                <h3 className="text-lg font-bold text-[#1A3C34] mb-2 text-center">Desarrollo de Capacidades</h3>
                <p className="text-[#1A3C34] text-base text-center">
                  Colaborar en iniciativas que fortalezcan la alfabetización mediática digital, aumenten la conciencia pública y aseguren la integridad de la información electoral.
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(26,140,109,0.10)" }} className="bg-[#F8FAF9] rounded-2xl shadow p-8 flex flex-col items-center border border-[#E0E7E9] transition-all cursor-pointer">
                <FaShieldAlt size={40} className="text-[#1A8C6D] mb-4" />
                <h3 className="text-lg font-bold text-[#1A3C34] mb-2 text-center">Integridad de la Información</h3>
                <p className="text-[#1A3C34] text-base text-center">
                  Mitigar el impacto de la desinformación y los discursos tóxicos, especialmente hacia las mujeres y poblaciones vulnerables.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer className="bg-[#07343B] text-white pt-12 pb-4 mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-8">
            {/* Logo y descripción */}
            <div className="flex flex-col items-start md:col-span-1">
              <Image src="/inicial/logo-fotter.png" alt="FACTO Logo" width={220} height={60} className="object-contain mb-4" />
              <div className="text-lg font-normal mb-4">Coalición Nacional Contra la<br/>Desinformación Electoral</div>
              <div className="italic text-base text-[#b6d6d6] mb-4">&quot;Protegiendo la integridad de la información electoral en Bolivia&quot;</div>
            </div>
            {/* Enlaces rápidos */}
            <div className="md:col-span-1">
              <div className="font-bold text-lg mb-2 border-b border-[#3a5c5c] pb-1">Enlaces Rápidos</div>
              <ul className="space-y-2 mt-2 text-base">
                <li><a href="#inicio" className="hover:underline">Inicio</a></li>
                <li><a href="#acerca" className="hover:underline">Acerca de</a></li>
                <li><a href="#miembros" className="hover:underline">Miembros</a></li>
                <li><a href="#actividades" className="hover:underline">Actividades</a></li>
                <li><a href="#contacto" className="hover:underline">Contacto</a></li>
              </ul>
            </div>
            {/* Coordinación y proyecto */}
            <div className="md:col-span-1 flex flex-col gap-2">
              <div className="flex items-center gap-3 mb-2">
                <Image src="/inicial/pnud.png" alt="PNUD" width={100} height={48} className="object-contain" />
                <span className="font-bold text-lg">Coordinación:</span>
              </div>
              <div className="text-base mb-2">Programa de las Naciones Unidas para el Desarrollo (PNUD) Bolivia</div>
              <div className="font-bold text-lg mt-4 mb-1">Proyecto:</div>
              <div className="text-base">&quot;Cultura de Paz y Fortalecimiento del Órgano Electoral Plurinacional (OEP) de Bolivia&quot;</div>
            </div>
            {/* Redes sociales */}
            <div className="md:col-span-1">
              <div className="font-bold text-lg mb-2 border-b border-[#3a5c5c] pb-1">Síguenos</div>
              <div className="flex gap-4 mt-4">
                <a href="#" className="bg-[#25464d] hover:bg-[#1A8C6D] rounded-full w-12 h-12 flex items-center justify-center transition"><svg fill="currentColor" viewBox="0 0 24 24" width="28" height="28"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 8.99 4.07 7.13 1.64 4.15c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.95 3.62-.72-.02-1.4-.22-1.99-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.11 2.94 3.97 2.97A8.6 8.6 0 0 1 2 19.54c-.32 0-.63-.02-.94-.06A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 4.59a8.36 8.36 0 0 1-2.54.7z"/></svg></a>
                <a href="#" className="bg-[#25464d] hover:bg-[#1A8C6D] rounded-full w-12 h-12 flex items-center justify-center transition"><svg fill="currentColor" viewBox="0 0 24 24" width="28" height="28"><path d="M18.896 2.003H5.104A3.104 3.104 0 0 0 2 5.104v13.792A3.104 3.104 0 0 0 5.104 22h7.417v-7.294H9.692v-2.844h2.829V9.413c0-2.8 1.71-4.324 4.21-4.324 1.194 0 2.222.089 2.522.129v2.924h-1.73c-1.357 0-1.62.646-1.62 1.594v2.09h3.24l-.422 2.844h-2.818V22h5.522A3.104 3.104 0 0 0 22 18.896V5.104A3.104 3.104 0 0 0 18.896 2.003"/></svg></a>
                <a href="#" className="bg-[#25464d] hover:bg-[#1A8C6D] rounded-full w-12 h-12 flex items-center justify-center transition"><svg fill="currentColor" viewBox="0 0 24 24" width="28" height="28"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406 2.697 2.387 2.403 3.499 2.344 4.78.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.281.353 2.393 1.334 3.374.981.981 2.093 1.275 3.374 1.334C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.353 3.374-1.334.981-.981 1.275-2.093 1.334-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.353-2.393-1.334-3.374-.981-.981-2.093-1.275-3.374-1.334C15.668.013 15.259 0 12 0z"/><circle cx="12" cy="12" r="3.5"/></svg></a>
                <a href="#" className="bg-[#25464d] hover:bg-[#1A8C6D] rounded-full w-12 h-12 flex items-center justify-center transition"><svg fill="currentColor" viewBox="0 0 24 24" width="28" height="28"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.545 3.5 12 3.5 12 3.5s-7.545 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.027 0 12 0 12s0 3.973.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.455 20.5 12 20.5 12 20.5s7.545 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.973 24 12 24 12s0-3.973-.502-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z"/></svg></a>
                <a href="#" className="bg-[#25464d] hover:bg-[#1A8C6D] rounded-full w-12 h-12 flex items-center justify-center transition"><svg fill="currentColor" viewBox="0 0 24 24" width="28" height="28"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-7 19h-3v-7h3v7zm-1.5-8.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 8.268c0 1.654-1.346 3-3 3h-14c-1.654 0-3-1.346-3-3v-14c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v14zm-4-3h-3v-4c0-1.104-.896-2-2-2s-2 .896-2 2v4h-3v-7h3v1.104c.293-.626 1.021-1.104 1.75-1.104 1.104 0 2 .896 2 2v5z"/></svg></a>
              </div>
            </div>
          </div>
          <hr className="my-8 border-[#3a5c5c]" />
          <div className="text-center text-base text-[#b6d6d6]">
            © 2025 FactoBo - Coalición Nacional Contra la Desinformación Electoral. Todos los derechos reservados.<br />
            Desarrollado con el apoyo del PNUD Bolivia
          </div>
        </motion.footer>
      </main>

      <HistoriaModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
