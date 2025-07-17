"use client";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Detectar sección activa
      const sections = ["inicio", "acerca", "miembros", "actividades", "objetivos"];
      const header = headerRef.current;
      const headerHeight = header ? header.offsetHeight : 0;
      const scrollPosition = window.scrollY + headerHeight + 50; // Reducido el offset para mejor detección
      
      let newActiveSection = "inicio"; // Por defecto
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          
          if (scrollPosition >= sectionTop - 100) { // 100px de tolerancia antes de la sección
            newActiveSection = sectionId;
            break;
          }
        }
      }
      
      setActiveSection(newActiveSection);
    };
    
    handleScroll(); // Ejecutar una vez al montar
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Componente para los elementos de navegación mejorado
  const NavItem = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => (
    <motion.div
      className={`relative px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
        isActive 
          ? "text-[#1A8C6D] font-bold bg-gradient-to-r from-[#3ED598]/10 to-[#1A8C6D]/10 shadow-md" 
          : "text-[#1A3C34] hover:text-[#1A8C6D] hover:bg-[#F8FAF9]/80"
      }`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={(e) => {
        e.preventDefault();
        const id = href.replace("#", "");
        const section = document.getElementById(id);
        if (section) {
          const header = document.querySelector('header');
          const headerHeight = header ? header.offsetHeight : 0;
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          const extraOffset = id === "inicio" ? 80 : 8;
          
          window.scrollTo({
            top: sectionTop - headerHeight - extraOffset,
            behavior: "smooth",
          });
        }
      }}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1A8C6D] to-[#3ED598] rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      )}
      {!isActive && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#3ED598]/5 to-[#1A8C6D]/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
        />
      )}
    </motion.div>
  );

  // Componente para elementos del menú móvil
  const MobileNavItem = ({ href, children, isActive, onClick }: { 
    href: string; 
    children: React.ReactNode; 
    isActive: boolean;
    onClick: () => void;
  }) => (
    <motion.div
      className={`relative px-4 py-2.5 rounded-xl transition-all duration-300 cursor-pointer ${
        isActive 
          ? "bg-gradient-to-r from-[#1A8C6D] to-[#3ED598] text-white font-bold shadow-lg shadow-[#1A8C6D]/30" 
          : "text-[#1A3C34] hover:text-[#1A8C6D] hover:bg-[#F8FAF9] hover:shadow-md"
      }`}
      onClick={(e) => {
        e.preventDefault();
        const id = href.replace("#", "");
        const section = document.getElementById(id);
        if (section) {
          const header = document.querySelector('header');
          const headerHeight = header ? header.offsetHeight : 0;
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          const extraOffset = id === "inicio" ? 80 : 8;
          
          window.scrollTo({
            top: sectionTop - headerHeight - extraOffset,
            behavior: "smooth",
          });
        }
        onClick();
      }}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      variants={{
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 }
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1A8C6D] to-[#3ED598] blur-md -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );

  return (
    <motion.header 
      ref={headerRef} 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-700 ease-out ${
        scrolled 
          ? "bg-gradient-to-r from-white/95 via-white/98 to-white/95 backdrop-blur-xl shadow-2xl border-b border-[#3ED598]/20" 
          : "bg-gradient-to-r from-white via-[#F8FAF9] to-white shadow-xl border-b border-gray-100/50"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1A8C6D] via-[#3ED598] to-[#1A8C6D]" />
      
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-1 relative">
        {/* Elemento decorativo de fondo */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3ED598]/5 to-transparent opacity-50" />
        
        {/* Logo mejorado */}
        <motion.div 
          className="flex items-center gap-2 relative z-10"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#1A8C6D]/20 to-[#3ED598]/20 rounded-xl blur-lg"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <Image
              src="/nuevos/logo-sello2.png"
              alt="FACTOBO Logo"
              width={scrolled ? 80 : 90}
              height={scrolled ? 40 : 45}
              className="object-contain z-10 hidden sm:block transition-all duration-500 drop-shadow-lg"
              priority
            />
            <Image
              src="/nuevos/logo-sello2.png"
              alt="FACTOBO Logo"
              width={scrolled ? 65 : 75}
              height={scrolled ? 22 : 28}
              className="object-contain z-10 block sm:hidden transition-all duration-500 drop-shadow-lg"
              priority
            />
          </div>
        </motion.div>

        {/* Menú desktop mejorado */}
        <nav id="main-nav" className="hidden md:flex gap-6 font-semibold text-sm uppercase tracking-wider relative z-10">
          <NavItem href="#inicio" isActive={activeSection === "inicio"}>Inicio</NavItem>
          <NavItem href="#acerca" isActive={activeSection === "acerca"}>Acerca de</NavItem>
          <NavItem href="#miembros" isActive={activeSection === "miembros"}>Miembros</NavItem>
          <NavItem href="#actividades" isActive={activeSection === "actividades"}>Actividades</NavItem>
          <motion.button 
            type="button" 
            className="relative px-3 py-1.5 text-[#1A3C34] hover:text-white focus:outline-none bg-gradient-to-r from-transparent to-transparent hover:from-[#1A8C6D] hover:to-[#3ED598] rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#1A8C6D]/30 border border-transparent hover:border-[#3ED598]/30" 
            onClick={onContactClick}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">CONTACTO</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#1A8C6D] to-[#3ED598] rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ opacity: 1 }}
            />
          </motion.button>
        </nav>

        {/* Logo PNUD mejorado */}
        <motion.div 
          className="hidden md:flex items-center relative z-10"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-lg blur-sm" />
            <Image
              src="/inicial/pnud.png"
              alt="PNUD Logo"
              width={scrolled ? 60 : 65}
              height={scrolled ? 28 : 32}
              className="object-contain transition-all duration-500 drop-shadow-md relative z-10"
              priority
            />
          </div>
        </motion.div>

        {/* Menú móvil hamburguesa mejorado */}
        <motion.button
          className="md:hidden text-[#1A3C34] text-lg p-2 focus:outline-none relative z-10 rounded-lg hover:bg-[#F8FAF9] transition-colors duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            initial={false}
            animate={menuOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 }
            }}
            transition={{ duration: 0.3 }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </motion.div>
        </motion.button>
      </div>

      {/* Menú móvil desplegable mejorado */}
      <motion.div 
        id="mobile-nav"
        initial={{ opacity: 0, y: -40, scale: 0.95 }}
        animate={menuOpen ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -40, scale: 0.95 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
        className="md:hidden absolute top-full left-0 w-full bg-gradient-to-br from-white/98 via-[#F8FAF9]/95 to-white/98 backdrop-blur-xl shadow-2xl z-50 flex flex-col items-center py-4 gap-3 px-4 font-semibold text-base uppercase tracking-wider border-t border-[#3ED598]/20"
      >
        {/* Línea decorativa */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#3ED598] to-transparent" />
        
        {menuOpen && (
          <motion.div
            className="flex flex-col gap-3 w-full items-center max-w-sm"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <MobileNavItem href="#inicio" isActive={activeSection === "inicio"} onClick={() => setMenuOpen(false)}>
              Inicio
            </MobileNavItem>
            <MobileNavItem href="#acerca" isActive={activeSection === "acerca"} onClick={() => setMenuOpen(false)}>
              Acerca de
            </MobileNavItem>
            <MobileNavItem href="#miembros" isActive={activeSection === "miembros"} onClick={() => setMenuOpen(false)}>
              Miembros
            </MobileNavItem>
            <MobileNavItem href="#actividades" isActive={activeSection === "actividades"} onClick={() => setMenuOpen(false)}>
              Actividades
            </MobileNavItem>
            <motion.button 
              type="button" 
              className="relative px-5 py-2.5 rounded-xl text-white font-bold bg-gradient-to-r from-[#1A8C6D] to-[#3ED598] hover:from-[#3ED598] hover:to-[#1A8C6D] shadow-lg hover:shadow-[#1A8C6D]/40 focus:outline-none transition-all duration-300 w-full max-w-36" 
              onClick={() => { onContactClick(); setMenuOpen(false); }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <span className="relative z-10">CONTACTO</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#3ED598] to-[#1A8C6D] rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.button>
            
            {/* Logo PNUD en móvil */}
            <motion.div
              className="mt-1 pt-1 border-t border-[#3ED598]/20"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src="/inicial/pnud.png"
                alt="PNUD Logo"
                width={55}
                height={28}
                className="object-contain opacity-70"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.header>
  );
}
