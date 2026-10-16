import React from 'react';
import { ABOUT_CONTENT, Language } from '../config/cocreact-data';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  return (
    <section id="about" className="py-24 md:py-36 bg-[#F5F7F0] text-[#111411]">
      <div className="editorial-container">
        {/* Section Eyebrow Label */}
        <span className="section-label text-[#102B1B] font-bold">
          {lang === 'id' ? ABOUT_CONTENT.sectionLabel : ABOUT_CONTENT.sectionLabelEn}
        </span>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mt-4">
          {/* Left Column: Bold Editorial Headline & Supporting Brand Principle */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.08] text-[#111411]">
              {ABOUT_CONTENT.headline[lang]}
            </h2>

            <div className="pt-6 border-t border-[#111411]/12">
              <p className="text-xs font-mono uppercase tracking-widest text-[#102B1B] mb-2 font-semibold">
                {lang === 'id' ? 'Prinsip Dasar' : 'Core Principle'}
              </p>
              <p className="text-2xl sm:text-3xl font-display font-semibold text-[#102B1B]">
                {ABOUT_CONTENT.supportingStatement[lang]}
              </p>
            </div>
          </div>

          {/* Right Column: Narrative Body & 3 Core Approaches */}
          <div className="lg:col-span-6 space-y-10">
            <p className="text-lg sm:text-xl text-[#111411]/80 leading-relaxed font-sans">
              {ABOUT_CONTENT.body[lang]}
            </p>

            {/* 3 Pillars of Approach */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#111411]/12">
              {ABOUT_CONTENT.corePrinciples.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <span className="text-xs font-mono text-[#111411] bg-[#39FF14] px-2 py-0.5 rounded text-[11px] font-bold inline-block">
                    0{idx + 1}
                  </span>
                  <h3 className="font-display font-bold text-lg text-[#111411]">
                    {item.label[lang]}
                  </h3>
                  <p className="text-xs text-[#111411]/70 leading-relaxed">
                    {item.detail[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
