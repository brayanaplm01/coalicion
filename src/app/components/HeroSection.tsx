import Image from "next/image";
import LogoCarousel from "./LogoCarousel";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center py-16 px-4 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(26, 140, 109, 0.4) 0%, transparent 60%),
          radial-gradient(circle at 80% 20%, rgba(62, 213, 152, 0.3) 0%, transparent 60%),
          radial-gradient(circle at 40% 40%, rgba(26, 60, 52, 0.5) 0%, transparent 50%),
          linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)
        `
      }}
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Patrón de red sutil mejorado */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(62, 213, 152, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(62, 213, 152, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Efectos de luz ambiental */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#1A8C6D]/20 to-[#3ED598]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-[#3ED598]/15 to-[#1A8C6D]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-[#1A8C6D]/10 to-transparent rounded-full blur-2xl" />
        </div>
        
        {/* Formas geométricas luminosas */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-[#3ED598]/30 rounded-full transform rotate-45 shadow-lg shadow-[#3ED598]/20" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-[#1A8C6D]/40 rounded-lg transform -rotate-12 shadow-lg shadow-[#1A8C6D]/20" />
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-[#3ED598]/25 transform rotate-12 shadow-lg shadow-[#3ED598]/15" 
             style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
        
        {/* Red de conexiones mejorada */}
        <svg className="absolute top-16 right-16 w-40 h-40 opacity-30" viewBox="0 0 100 100">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <circle cx="20" cy="20" r="3" fill="#3ED598" filter="url(#glow)" />
          <circle cx="50" cy="30" r="3" fill="#1A8C6D" filter="url(#glow)" />
          <circle cx="80" cy="25" r="3" fill="#3ED598" filter="url(#glow)" />
          <circle cx="35" cy="60" r="3" fill="#1A8C6D" filter="url(#glow)" />
          <circle cx="70" cy="70" r="3" fill="#3ED598" filter="url(#glow)" />
          <line x1="20" y1="20" x2="50" y2="30" stroke="#3ED598" strokeWidth="1" opacity="0.6" />
          <line x1="50" y1="30" x2="80" y2="25" stroke="#1A8C6D" strokeWidth="1" opacity="0.6" />
          <line x1="35" y1="60" x2="70" y2="70" stroke="#3ED598" strokeWidth="1" opacity="0.6" />
          <line x1="20" y1="20" x2="35" y2="60" stroke="#1A8C6D" strokeWidth="1" opacity="0.6" />
          <line x1="50" y1="30" x2="35" y2="60" stroke="#3ED598" strokeWidth="1" opacity="0.4" />
        </svg>
        
        {/* Elementos cristalinos mejorados */}
        <div className="absolute bottom-28 right-28 w-20 h-20 bg-gradient-to-br from-[#3ED598]/20 to-transparent rounded-xl backdrop-blur-sm border border-[#3ED598]/30 transform rotate-45 shadow-xl shadow-[#3ED598]/10" />
        <div className="absolute top-36 left-16 w-16 h-16 bg-gradient-to-br from-[#1A8C6D]/20 to-transparent rounded-full backdrop-blur-sm border border-[#1A8C6D]/30 shadow-lg shadow-[#1A8C6D]/10" />
        <div className="absolute bottom-40 left-40 w-12 h-12 bg-gradient-to-br from-[#3ED598]/15 to-transparent rounded-lg backdrop-blur-sm border border-[#3ED598]/25 transform -rotate-12" />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Contenido superior: título, texto e imagen */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
          {/* Contenido de texto */}
          <div className="space-y-5">
            <h1 className="text-4xl md:text-5xl font-light text-white leading-tight drop-shadow-lg">
              Juntos Contra la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3ED598] to-[#1A8C6D] font-normal">
                Desinformación Electoral
              </span>
            </h1>

            <p className="text-gray-100 text-lg leading-relaxed drop-shadow-md">
              Coalición Nacional que reúne a{" "}
              <span className="text-[#3ED598] font-bold">
                16 organizaciones
              </span>{" "}
              comprometidas con la integridad de la información electoral en Bolivia
            </p>

            <p className="text-gray-200 text-base leading-relaxed drop-shadow-md">
              Trabajamos juntos para fortalecer la confianza ciudadana en los procesos electorales, 
              combatiendo la desinformación y promoviendo una participación democrática informada 
              de cara a las{" "}
              <span className="text-[#3ED598] font-bold">
                elecciones generales 2025
              </span>.
            </p>
          </div>
          
          {/* Imagen principal - movida más arriba */}
          <div className="flex justify-center items-start">
            <div className="relative p-2 rounded-lg bg-gradient-to-br from-white/6 via-white/3 to-transparent backdrop-blur-sm border border-white/10 shadow-lg shadow-black/10">
              <Image 
                src="/nuevos/inicial_nuevo.png" 
                alt="Manos Unidas" 
                width={350} 
                height={260} 
                className="object-contain drop-shadow-xl" 
              />
              {/* Efecto de brillo sutil */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-[#3ED598]/2 via-transparent to-[#1A8C6D]/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Carrusel de logos en la parte inferior */}
        <div className="w-full">
          <LogoCarousel />
        </div>
      </div>
    </section>
  );
}
