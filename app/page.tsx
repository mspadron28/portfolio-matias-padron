import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import OtherProjectsSection from "@/components/OtherProjectsSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    // El contenedor principal usa bg-dark para asegurar consistencia en todo el scroll
    <main className="flex min-h-screen flex-col bg-dark selection:bg-accent/30">
      
      {/* SECCIÓN 1: HERO */}
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <OtherProjectsSection />
      <ContactSection /> 
      <Footer />

    </main>
  );
}