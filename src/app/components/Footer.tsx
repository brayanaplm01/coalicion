import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-[#03363D] text-white pt-12 pb-4 mt-12 border-t border-white/10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Columna 1: Logo y nombre */}
        <div>
          <Image 
            src="/inicial/logo-fotter.png" 
            alt="FactoBo Logo" 
            width={180} 
            height={60} 
            className="object-contain mb-4" 
          />
          <div className="font-bold text-lg mb-2">
            Coalición Nacional Contra la Desinformación Electoral
          </div>
          <div className="italic text-white/80 text-base">
            &quot;Protegiendo la integridad de la información electoral en Bolivia&quot;
          </div>
        </div>
        
        {/* Columna 2: Enlaces rápidos */}
        <div>
          <div className="font-bold text-lg mb-2 border-b border-white/20 pb-1">Enlaces Rápidos</div>
          <ul className="space-y-2 mt-2">
            <li><a href="#inicio" className="hover:underline">Inicio</a></li>
            <li><a href="#acerca" className="hover:underline">Acerca de</a></li>
            <li><a href="#miembros" className="hover:underline">Miembros</a></li>
            <li><a href="#actividades" className="hover:underline">Actividades</a></li>
            <li><a href="#contacto" className="hover:underline">Contacto</a></li>
          </ul>
        </div>
        
        {/* Columna 3: Coordinación y proyecto */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Image 
              src="/inicial/pnud.png" 
              alt="PNUD" 
              width={60} 
              height={60} 
              className="object-contain" 
            />
            <span className="font-bold text-lg">Coordinación:</span>
          </div>
          <div className="text-white/90 mb-4">
            Programa de las Naciones Unidas para el Desarrollo (PNUD) Bolivia
          </div>
          <div className="font-bold text-lg mb-1">Proyecto:</div>
          <div className="text-white/90">
            &quot;Cultura de Paz y Fortalecimiento del Órgano Electoral Plurinacional (OEP) de Bolivia&quot;
          </div>
        </div>
      </div>
      
      <div className="mt-8 border-t border-white/10 pt-4 text-center text-white/70 text-base">
        © 2025 FactoBo - Coalición Nacional Contra la Desinformación Electoral. Todos los derechos reservados.<br />
        Desarrollado con el apoyo del PNUD Bolivia
      </div>
    </motion.footer>
  );
}
