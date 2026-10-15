import React from 'react';
import { PROCESS_CONTENT, Language } from '../config/cocreact-data';

interface ProcessSectionProps {
  lang: Language;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ lang }) => {
  return (
    <section id="process" className="py-24 md:py-36 bg-[#F5F4EE] text-[#171916]">
      <div className="editorial-container">
        {/* Section Eyebrow Label */}
        <span className="section-label text-[#166be0]">
          {lang === 'id' ? PROCESS_CONTENT.sectionLabel : PROCESS_CONTENT.sectionLabelEn}
        </span>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] text-[#171916]">
            {PROCESS_CONTENT.headline[lang]}
          </h2>
        </div>

        {/* 4 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pt-8 border-t border-[#171916]/12">
          {PROCESS_CONTENT.stages.map((stage, idx) => (
            <div
              key={stage.number}
              className="flex flex-col justify-between space-y-6 pt-4 border-t-2 border-[#0B1D40]/20 hover:border-[#166be0] transition-colors group"
            >
              <div className="space-y-4">
                {/* Large Number */}
                <span className="font-display text-4xl sm:text-5xl font-bold text-[#0B1D40]/30 group-hover:text-[#166be0] transition-colors block">
                  {stage.number}
                </span>

                {/* Stage Title */}
                <h3 className="font-display text-2xl font-bold text-[#171916] leading-snug">
                  {stage.name[lang]}
                </h3>

                {/* Stage Description */}
                <p className="text-sm sm:text-base text-[#171916]/75 leading-relaxed font-sans">
                  {stage.description[lang]}
                </p>
              </div>

              <div className="text-[11px] font-mono text-[#777B74]">
                Phase 0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
