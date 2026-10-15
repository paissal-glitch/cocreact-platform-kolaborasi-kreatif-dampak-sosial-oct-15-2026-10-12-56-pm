import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FINAL_CTA_CONTENT, Language, siteConfig } from '../config/cocreact-data';

interface FinalCtaSectionProps {
  lang: Language;
  onOpenContact?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  lang,
  onOpenContact,
}) => {
  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenContact) {
      onOpenContact();
      return;
    }
    if (siteConfig.contactUrl) {
      window.open(siteConfig.contactUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="start" className="py-28 md:py-44 bg-[#171916] text-[#F5F4EE] relative overflow-hidden border-t border-[#F5F4EE]/10">
      {/* Background Ambient Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-[#166be0]/30 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="editorial-container relative z-10 text-center max-w-4xl mx-auto space-y-8">
        {/* Section Eyebrow Label */}
        <span className="section-label text-[#166be0]">
          {lang === 'id' ? FINAL_CTA_CONTENT.sectionLabel : FINAL_CTA_CONTENT.sectionLabelEn}
        </span>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.05] text-white">
          {FINAL_CTA_CONTENT.headline[lang]}
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-[#F5F4EE]/80 max-w-2xl mx-auto leading-relaxed font-sans">
          {FINAL_CTA_CONTENT.supportingCopy[lang]}
        </p>

        {/* Action Buttons */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={siteConfig.contactUrl}
            onClick={handleCtaClick}
            className="btn-primary"
          >
            <span>{FINAL_CTA_CONTENT.primaryCta[lang]}</span>
          </a>

          <a
            href="#portfolio"
            onClick={scrollToPortfolio}
            className="btn-secondary"
          >
            <span>{FINAL_CTA_CONTENT.secondaryCta[lang]}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

