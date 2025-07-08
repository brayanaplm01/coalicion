"use client";
import Image from "next/image";
import { FaUsers, FaLightbulb, FaShieldAlt, FaInfoCircle, FaBars, FaTimes, FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaRegNewspaper } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import LogoCarousel from "./components/LogoCarousel";
import ContactoModal from "./components/ContactoModal";

const HistoriaModal = dynamic(() => import("./components/HistoriaModal"), { ssr: false });
const MiembrosModal = dynamic(() => import("./components/MiembrosModal"), { ssr: false }) as React.ComponentType<{ open: boolean; onClose: () => void }>;
const CronologiaModal = dynamic(() => import("./components/CronologiaModal"), { ssr: false }) as React.ComponentType<{ open: boolean; onClose: () => void }>;

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [miembrosModalOpen, setMiembrosModalOpen] = useState(false);
  const [cronologiaModalOpen, setCronologiaModalOpen] = useState(false);
  const [contactoModalOpen, setContactoModalOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll suave compensando el header fijo
  useEffect(() => {
    const handleMenuClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        const id = target.getAttribute("href")!.replace("#", "");
        const section = document.getElementById(id);
        if (section) {
          e.preventDefault();
          const header = headerRef.current;
          const headerHeight = header ? header.offsetHeight : 0;
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: sectionTop - headerHeight - 8, // 8px extra de aire visual
            behavior: "smooth",
          });
          setMenuOpen(false); // Cierra menú móvil si aplica
        }
      }
    };
    // Menú desktop
    const nav = document.getElementById("main-nav");
    nav?.addEventListener("click", handleMenuClick);
    // Menú móvil
    const mobileMenu = document.getElementById("mobile-nav");
    mobileMenu?.addEventListener("click", handleMenuClick);
    return () => {
      nav?.removeEventListener("click", handleMenuClick);
      mobileMenu?.removeEventListener("click", handleMenuClick);
    };
  }, []);

  return (
    <div className="bg-[#F8FAF9] min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header ref={headerRef} className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/70 backdrop-blur shadow-none" : "bg-white shadow-md"}`}>
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
          <nav id="main-nav" className="hidden md:flex gap-8 text-[#1A3C34] font-semibold text-sm uppercase tracking-wide">
            <a href="#inicio" className="hover:text-[#1A8C6D]">Inicio</a>
            <a href="#acerca" className="hover:text-[#1A8C6D]">Acerca de</a>
            <a href="#miembros" className="hover:text-[#1A8C6D]">Miembros</a>
            <a href="#actividades" className="hover:text-[#1A8C6D]">Actividades</a>
            <button type="button" className="hover:text-[#1A8C6D] focus:outline-none bg-transparent" onClick={() => setContactoModalOpen(true)}>CONTACTO</button>
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
        <motion.div id="mobile-nav"
          initial={{ opacity: 0, y: -30 }}
          animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
          className="md:hidden absolute top-full left-0 w-full bg-white/95 shadow-lg z-50 flex flex-col items-center py-4 gap-4 text-[#1A3C34] font-semibold text-base uppercase tracking-wide"
        >
          {menuOpen && (
            <>
              <a href="#inicio" className="hover:text-[#1A8C6D]" onClick={() => setMenuOpen(false)}>Inicio</a>
              <a href="#acerca" className="hover:text-[#1A8C6D]" onClick={() => setMenuOpen(false)}>Acerca de</a>
              <a href="#miembros" className="hover:text-[#1A8C6D]" onClick={() => setMenuOpen(false)}>Miembros</a>
              <a href="#actividades" className="hover:text-[#1A8C6D]" onClick={() => setMenuOpen(false)}>Actividades</a>
              <button type="button" className="hover:text-[#1A8C6D] focus:outline-none bg-transparent" onClick={() => { setContactoModalOpen(true); setMenuOpen(false); }}>CONTACTO</button>
            </>
          )}
        </motion.div>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <motion.section
          id="inicio"
          className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-center relative pt-4 md:pt-0 pb-44 md:pb-0"
          style={{ minHeight: '87vh' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:pb-[60px]">
            {/* Imagen decorativa arriba a la derecha */}
            <div className="absolute top-2 right-2 pointer-events-none select-none z-0 block md:hidden">
              <Image src="/inicial/unidad.png" alt="Manos Unidas decorativo" width={160} height={160} className="opacity-20 w-32 h-32" />
            </div>
            <div className="flex-1 flex flex-col justify-center order-2 md:order-1">
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
            <div className="flex-1 hidden md:flex justify-center items-center md:items-start mt-[-40px] md:mt-[-80px] order-2">
              <Image src="/inicial/unidad.png" alt="Manos Unidas" width={340} height={260} className="object-contain" />
            </div>
          </div>
          {/* Carrusel de logos como franja inferior */}
          <div className="absolute left-0 right-0 bottom-0 w-full bg-white shadow-lg py-8 flex items-center justify-center z-10">
            <div className="max-w-6xl w-full">
              <LogoCarousel />
            </div>
          </div>
        </motion.section>

        {/* ¿Quiénes Somos? */}
        <motion.section
          id="acerca"
          className="py-16 bg-[#F8FAF9]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-light text-[#1A3C34] mb-2">¿Quiénes <span className="text-[#1A8C6D] font-normal">Somos</span>?</h2>
            <div className="flex justify-center my-8">
              <div className="relative w-full flex justify-center">
                <Image src="/inicial/coalicion.png" alt="Grupo FACTO" width={1400} height={500} className="rounded-2xl shadow-lg object-cover w-[1200px] max-w-full h-auto" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 text-black px-12 py-2 rounded-lg shadow text-lg font-semibold max-w-none text-center whitespace-nowrap">
                  Coalición Nacional Contra la Desinformación Electoral
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
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
              ].map((item, idx) => (
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
                onClick={() => setModalOpen(true)}
                className="inline-block bg-[#1A8C6D] hover:bg-[#176b53] text-white font-semibold px-8 py-3 rounded transition text-lg shadow"
              >
                Conoce más detalles &rarr;
              </button>
            </div>
          </div>
        </motion.section>

        {/* Nuestros Miembros */}
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
              onClick={() => setMiembrosModalOpen(true)}
              className="inline-block bg-[#1A8C6D] hover:bg-[#176b53] text-white font-semibold px-8 py-3 rounded transition text-lg shadow"
            >
              Más Información &rarr;
            </button>
            </div>
            
            <div className="flex-1 flex justify-center">
              <Image src="/inicial/miembros.png" alt="Gráfico Miembros" width={900} height={900} className="object-contain" />
            </div>
          </div>
        </motion.section>

        {/* Nuestras Actividades */}
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
              <button
                onClick={() => setCronologiaModalOpen(true)}
                className="inline-block bg-[#1A8C6D] hover:bg-[#176b53] text-white font-semibold px-8 py-3 rounded transition text-lg shadow"
              >
                Ver Cronología Completa &rarr;
              </button>
            </div>
          </div>
        </motion.section>

        {/* Objetivos de la Coalición */}
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
              {[
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
              ].map((item, idx) => (
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

        {/* Footer */}
        <motion.footer
          className="bg-[#07343B] text-white pt-12 pb-4 mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
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
              <div className="flex gap-5 mt-4">
                <a href="#" className="group bg-white/10 hover:bg-[#1A8C6D] rounded-full w-14 h-14 flex items-center justify-center transition-all duration-200 shadow-lg border border-white/20">
                  <FaTwitter className="text-white w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
                </a>
                <a href="#" className="group bg-white/10 hover:bg-[#1A8C6D] rounded-full w-14 h-14 flex items-center justify-center transition-all duration-200 shadow-lg border border-white/20">
                  <FaFacebookF className="text-white w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
                </a>
                <a href="#" className="group bg-white/10 hover:bg-[#1A8C6D] rounded-full w-14 h-14 flex items-center justify-center transition-all duration-200 shadow-lg border border-white/20">
                  <FaInstagram className="text-white w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
                </a>
                <a href="#" className="group bg-white/10 hover:bg-[#1A8C6D] rounded-full w-14 h-14 flex items-center justify-center transition-all duration-200 shadow-lg border border-white/20">
                  <FaYoutube className="text-white w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
                </a>
                <a href="#" className="group bg-white/10 hover:bg-[#1A8C6D] rounded-full w-14 h-14 flex items-center justify-center transition-all duration-200 shadow-lg border border-white/20">
                  <FaRegNewspaper className="text-white w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
                </a>
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

      {/* Modales */}
      <HistoriaModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <MiembrosModal open={miembrosModalOpen} onClose={() => setMiembrosModalOpen(false)} />
      <CronologiaModal open={cronologiaModalOpen} onClose={() => setCronologiaModalOpen(false)} />
      <ContactoModal open={contactoModalOpen} onClose={() => setContactoModalOpen(false)} />
    </div>
  );
}
