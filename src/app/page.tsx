"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

// Componentes principales
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import MembersSection from "./components/MembersSection";
import ActivitiesSection from "./components/ActivitiesSection";
import ObjectivesSection from "./components/ObjectivesSection";
import Footer from "./components/Footer";
import ContactoModal from "./components/ContactoModal";

// Modales con lazy loading
const HistoriaModal = dynamic(() => import("./components/HistoriaModal"), { ssr: false });
const MiembrosModal = dynamic(() => import("./components/MiembrosModal"), { ssr: false }) as React.ComponentType<{ open: boolean; onClose: () => void }>;
const CronologiaModal = dynamic(() => import("./components/CronologiaModal"), { ssr: false }) as React.ComponentType<{ open: boolean; onClose: () => void }>;

export default function Home() {
  // Estados para los modales
  const [modalOpen, setModalOpen] = useState(false);
  const [miembrosModalOpen, setMiembrosModalOpen] = useState(false);
  const [cronologiaModalOpen, setCronologiaModalOpen] = useState(false);
  const [contactoModalOpen, setContactoModalOpen] = useState(false);

  return (
    <div className="bg-[#F8FAF9] min-h-screen flex flex-col font-sans">
      <Header onContactClick={() => setContactoModalOpen(true)} />
      
      <main className="pt-24">
        <HeroSection />
        <AboutSection onLearnMoreClick={() => setModalOpen(true)} />
        <MembersSection onMoreInfoClick={() => setMiembrosModalOpen(true)} />
        <ActivitiesSection onTimelineClick={() => setCronologiaModalOpen(true)} />
        <ObjectivesSection />
        <Footer />
      </main>

      {/* Modales */}
      <HistoriaModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <MiembrosModal open={miembrosModalOpen} onClose={() => setMiembrosModalOpen(false)} />
      <CronologiaModal open={cronologiaModalOpen} onClose={() => setCronologiaModalOpen(false)} />
      <ContactoModal open={contactoModalOpen} onClose={() => setContactoModalOpen(false)} />
    </div>
  );
}
