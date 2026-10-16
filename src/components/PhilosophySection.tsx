import React from 'react';
import { PHILOSOPHY_CONTENT, Language } from '../config/cocreact-data';

interface PhilosophySectionProps {
  lang: Language;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ lang }) => {
  return (
    <section className="py-28 md:py-40 bg-[#102B1B] text-[#F5F7F0] relative overflow-hidden">
      {/* Subtle organic electric green ambient glow */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 bg-[#39FF14]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="editorial-container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Eyebrow Label */}
          <span className="section-label text-[#39FF14] tracking-widest font-bold">
            {lang === 'id' ? PHILOSOPHY_CONTENT.sectionLabel : PHILOSOPHY_CONTENT.sectionLabelEn}
          </span>

          {/* Statement Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.12] text-white">
            “{PHILOSOPHY_CONTENT.headline[lang]}”
          </h2>

          {/* Supporting Statement */}
          <p className="text-lg sm:text-xl text-[#F5F7F0]/85 max-w-2xl mx-auto leading-relaxed font-sans pt-4">
            {PHILOSOPHY_CONTENT.supportingCopy[lang]}
          </p>
        </div>
      </div>
    </section>
  );
};
