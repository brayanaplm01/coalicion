import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

interface CronologiaModalProps {
  open: boolean;
  onClose: () => void;
}

const timeline = [
  {
    mes: "Noviembre 2024",
    color: "#1A8C6D",
    items: [
      {
        dia: "12",
        titulo: "Lanzamiento de la Coalición",
        desc: "Presentación formal, lanzamiento de recursos, lanzamiento del compromiso con la lucha contra la desinformación electoral en Bolivia."
      }
    ]
  },
  {
    mes: "Diciembre 2024",
    color: "#1A8C6D",
    items: [
      {
        dia: "5",
        titulo: "Taller de Coordinación",
        desc: "Definición de lineamientos de acción conjunta y selección inicial sobre diseño de la desinformación electoral."
      },
      {
        dia: "13-14",
        titulo: "Taller de Análisis del Entorno Informativo",
        desc: "Implementación de talleres para detectar desinformación y analizar tendencias."
      },
      {
        dia: "16",
        titulo: "Implementación de plataformas y sistemas piloto",
        desc: "Instalación de plataformas piloto y diseño de cronograma de acciones escalables."
      },
      {
        dia: "20",
        titulo: "Difusión de educaciones públicas",
        desc: "Difusión de materiales educativos, boletines, infografías, entrevistas en redes sociales y portales digitales aliados."
      }
    ]
  },
  {
    mes: "Enero 2025",
    color: "#B6E6F2",
    items: [
      {
        dia: "20",
        titulo: "Reunión de Coordinación 2025",
        desc: "Presentación de avances conjuntos y evaluación del contexto electoral."
      },
      {
        dia: "27",
        titulo: "Inicio del Boletín de Desinformación",
        desc: "Publicación del primer 'Centro conjunto de desinformación' elaborado por Fundación Aru y Fundación Internet Bolivia."
      }
    ]
  },
  {
    mes: "Febrero 2025",
    color: "#1A8C6D",
    items: [
      {
        dia: "11",
        titulo: "Diálogo sobre consulta de expertos y narrativa de desinformación",
        desc: "Conversatorio con expertos en desinformación y formulación de lineamientos argumentales."
      }
    ]
  },
  {
    mes: "Marzo 2025",
    color: "#1A8C6D",
    items: [
      {
        dia: "10",
        titulo: "Taller sobre Mitos Electorales y Panel",
        desc: "Desmontando mitos electorales: análisis, lógica, contexto y agenda electoral."
      },
      {
        dia: "22",
        titulo: "Conversatorio sobre estrategias digitales de desinformación",
        desc: "Participación de expertos de Argentina, Brasil, Colombia, México y Perú; mesa de mujeres y juventudes."
      }
    ]
  },
  {
    mes: "Abril 2025",
    color: "#B6E6F2",
    items: [
      {
        dia: "10",
        titulo: "Taller sobre Mitos Electorales y Panel",
        desc: "Continuación de espacios pedagógicos sobre mecanismos de encuesta y consulta electoral."
      },
      {
        dia: "28",
        titulo: "Difusión de materiales educativos y conclusiones",
        desc: "Difusión de materiales educativos y conclusiones sobre la desinformación."
      }
    ]
  }
];

const proximas = [
  "Entrega de recomendaciones a autoridades nacionales y Tribunal Supremo Electoral",
  "Salas de monitoreo conjunto en espacios públicos",
  "Difusión de resultados y boletines",
  "Jornadas de alfabetización digital y mediática",
  "Casos emblemáticos de desinformación",
  "Lanzamiento de plataforma digital boliviana"
];

const CronologiaModal: React.FC<CronologiaModalProps> = ({ open, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (!open) return;
    const handleScroll = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const blocks = Array.from(container.querySelectorAll('.timeline-block')) as HTMLElement[];
      if (blocks.length < 2) return;
      const first = blocks[0];
      const last = blocks[blocks.length - 1];
      const start = first.offsetTop + first.offsetHeight / 2;
      const end = last.offsetTop + last.offsetHeight / 2;
      const scrollTop = container.scrollTop;
      const visibleStart = Math.max(0, scrollTop + container.clientHeight / 8); // Empieza un poco antes
      const percent = Math.min(1, Math.max(0, (visibleStart - start) / (end - start)));
      const totalLine = end - start;
      setLineHeight(percent * totalLine);
    };
    handleScroll();
    const el = containerRef.current;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [open]);

  useEffect(() => {
    controls.start({ height: lineHeight });
  }, [lineHeight, controls]);

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
            ref={containerRef}
            style={{scrollBehavior: 'smooth'}}
          >
            <div className="sticky top-0 left-0 z-20 bg-white/80 backdrop-blur-md rounded-t-2xl mb-2 flex flex-row flex-wrap items-end gap-x-2 gap-y-0 pt-2 pb-2 px-2" style={{boxShadow:'0 2px 8px 0 #0001'}}>
              <div className="flex-1 flex flex-row flex-wrap items-end gap-x-2 gap-y-0">
                <h2 className="text-2xl md:text-3xl font-light text-[#1A3C34] leading-tight mb-0">
                  Cronología Completa de <span className="text-[#1A8C6D]">Actividades</span>
                </h2>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-[#1A8C6D] text-2xl font-bold focus:outline-none ml-auto"
                aria-label="Cerrar"
                style={{marginLeft:'auto'}}>
                ×
              </button>
            </div>
            <div className="h-1 w-24 bg-[#1A8C6D] rounded mb-6" />
            <div className="relative" style={{minHeight: 400}}>
              {/* Línea animada */}
              <motion.div
                ref={lineRef}
                className="border-l-4 border-[#1A8C6D] absolute left-6 top-0 z-0"
                style={{borderColor:'#1A8C6D', left: '32px'}}
                initial={{ height: 0 }}
                animate={controls}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <div className="space-y-10 relative z-10">
                {timeline.map((bloque, idx) => (
                  <motion.div
                    key={bloque.mes}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * idx }}
                    viewport={{ once: true, amount: 0.3 }}
                    className={`timeline-block bg-[${bloque.color}]/[.08] rounded-xl p-5 pl-16 shadow-md border-l-8`} style={{borderColor: bloque.color}}
                  >
                    <div className="flex items-center mb-2">
                      <span className="w-4 h-4 rounded-full mr-3" style={{background: bloque.color, boxShadow: `0 0 0 4px #fff, 0 0 0 8px ${bloque.color}22`}}></span>
                      <span className="text-lg font-bold" style={{color: bloque.color}}>{bloque.mes}</span>
                    </div>
                    <motion.ul
                      className="space-y-3"
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
                      {bloque.items.map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-4"
                          initial={{ opacity: 0, x: 40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * i }}
                          viewport={{ once: true, amount: 0.3 }}
                        >
                          <span className="font-extrabold text-2xl text-[#1A8C6D] min-w-[36px] text-center select-none" style={{color: bloque.color}}>{item.dia}</span>
                          <div>
                            <div className="font-bold text-[#1A3C34] text-base mb-1">{item.titulo}</div>
                            <div className="text-[#1A3C34] text-sm leading-snug">{item.desc}</div>
                          </div>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                ))}
                {/* Próximas actividades */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (timeline.length+1) }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-[#FFF6ED] rounded-xl p-5 pl-16 shadow-md border-l-8 border-[#FF7A00]"
                >
                  <div className="flex items-center mb-2">
                    <span className="w-4 h-4 rounded-full mr-3" style={{background: '#FF7A00', boxShadow: '0 0 0 4px #fff, 0 0 0 8px #FF7A0022'}}></span>
                    <span className="text-lg font-bold text-[#FF7A00]">Próximas Actividades</span>
                  </div>
                  <ul className="space-y-3">
                    {proximas.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="font-extrabold text-2xl text-[#FF7A00] min-w-[36px] text-center select-none">•</span>
                        <div className="font-bold text-[#1A3C34] text-base mb-1">{item}</div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CronologiaModal; 