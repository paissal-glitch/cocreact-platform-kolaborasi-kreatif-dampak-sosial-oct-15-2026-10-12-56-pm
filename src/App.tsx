import React, { useState, useEffect } from 'react';
import { Language, siteConfig } from './config/cocreact-data';
import { Header } from './components/Header';
import { HeroExperience } from './components/HeroExperience';
import { AboutSection } from './components/AboutSection';
import { PillarsSection } from './components/PillarsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ProcessSection } from './components/ProcessSection';
import { ImpactSection } from './components/ImpactSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('cocreact_lang');
      return saved === 'en' ? 'en' : 'id';
    } catch {
      return 'id';
    }
  });

  // Synchronize document language and title dynamically without page reloads
  useEffect(() => {
    try {
      localStorage.setItem('cocreact_lang', lang);
    } catch {
      // Ignore storage errors in private browsing modes
    }

    document.documentElement.lang = lang;
    document.title =
      lang === 'id'
        ? 'CoCreAct · Collaboration, Creative, Action | Bukan Siapa, Tetapi Apa.'
        : 'CoCreAct · Cross-Sector Creative Collaboration Platform | Not Who, But What.';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        lang === 'id'
          ? 'CoCreAct adalah platform kolaborasi lintas sektor yang mempertemukan gagasan, kreativitas, dan berbagai potensi untuk menciptakan program yang bermakna bagi masyarakat. Bukan Siapa, Tetapi Apa.'
          : 'CoCreAct is a cross-sector collaboration platform connecting individuals, communities, educators, businesses, and government to transform ideas into meaningful action. Not Who, But What.'
      );
    }
  }, [lang]);

  const scrollToContact = () => {
    const el = document.getElementById('start');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (siteConfig.contactUrl) {
      window.open(siteConfig.contactUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-[#111411] text-[#F5F7F0] flex flex-col font-sans selection:bg-[#39FF14] selection:text-[#111411]">
      <Header
        lang={lang}
        onToggleLang={(newLang) => setLang(newLang)}
        onOpenContact={scrollToContact}
      />

      <main id="top" className="flex-1">
        <HeroExperience lang={lang} />
        <AboutSection lang={lang} />
        <PillarsSection lang={lang} />
        <PortfolioSection lang={lang} />
        <PhilosophySection lang={lang} />
        <ProcessSection lang={lang} />
        <ImpactSection lang={lang} />
        <FinalCtaSection lang={lang} onOpenContact={scrollToContact} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}
