import React from 'react';
import { ThemeProvider } from './application/context/ThemeContext';
import { GrainOverlay } from './presentation/components/ui/GrainOverlay';
import { FloatingWhatsApp } from './presentation/components/ui/FloatingWhatsApp';
import { Navbar } from './presentation/components/sections/Navbar';
import { Hero } from './presentation/components/sections/Hero';
import { MarqueeTicker } from './presentation/components/ui/MarqueeTicker';
import { ProjectsShowcase } from './presentation/components/sections/ProjectsShowcase';
import { SkillsMatrix } from './presentation/components/sections/SkillsMatrix';
import { ExperienceTimeline } from './presentation/components/sections/ExperienceTimeline';
import { EducationSection } from './presentation/components/sections/EducationSection';
import { ContactCTA } from './presentation/components/sections/ContactCTA';
import { Footer } from './presentation/components/sections/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      {/* Analog Film Grain Texture */}
      <GrainOverlay />

      {/* Floating Pill Nav */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="conteudo">
        <Hero />
        <MarqueeTicker />
        <ProjectsShowcase />
        <SkillsMatrix />
        <ExperienceTimeline />
        <EducationSection />
        <ContactCTA />
      </main>

      {/* Footer & Floating WhatsApp */}
      <Footer />
      <FloatingWhatsApp />
    </ThemeProvider>
  );
};

export default App;
