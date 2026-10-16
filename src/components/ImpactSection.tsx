import React from 'react';
import { IMPACT_CONTENT, Language } from '../config/cocreact-data';

interface ImpactSectionProps {
  lang: Language;
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({ lang }) => {
  return (
    <section id="numbers" className="py-24 md:py-36 bg-[#FFFFFF] text-[#111411]">
      <div className="editorial-container">
        {/* Section Eyebrow Label */}
        <span className="section-label text-[#102B1B] font-bold">
          {lang === 'id' ? IMPACT_CONTENT.sectionLabel : IMPACT_CONTENT.sectionLabelEn}
        </span>

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.08] text-[#111411]">
              {IMPACT_CONTENT.headline[lang]}
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="text-lg sm:text-xl text-[#111411]/80 leading-relaxed font-sans">
              {IMPACT_CONTENT.bodyCopy[lang]}
            </p>
          </div>
        </div>

        {/* 3 Qualitative Impact Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-8 border-t border-[#111411]/12">
          {IMPACT_CONTENT.areas.map((area, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#F5F7F0] border border-[#111411]/8 space-y-4 hover:border-[#39FF14]/60 transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-[#111411] text-[#39FF14] border border-[#39FF14]/30 flex items-center justify-center font-mono text-xs font-bold">
                0{idx + 1}
              </span>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111411]">
                {area.title[lang]}
              </h3>

              <p className="text-sm sm:text-base text-[#111411]/75 leading-relaxed font-sans">
                {area.description[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
