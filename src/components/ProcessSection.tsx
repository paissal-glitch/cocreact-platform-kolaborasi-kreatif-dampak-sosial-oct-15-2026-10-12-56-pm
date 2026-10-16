import React from 'react';
import { PROCESS_CONTENT, Language } from '../config/cocreact-data';
import { SectionHeader } from './ui';

interface ProcessSectionProps {
  lang: Language;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ lang }) => {
  return (
    <section id="process" className="py-24 md:py-36 bg-[#F5F7F0] text-[#111411]">
      <div className="editorial-container">
        {/* Section Header */}
        <SectionHeader
          label={lang === 'id' ? PROCESS_CONTENT.sectionLabel : PROCESS_CONTENT.sectionLabelEn}
          headline={PROCESS_CONTENT.headline[lang]}
          theme="light"
        />

        {/* 4 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pt-8 border-t border-[#111411]/12">
          {PROCESS_CONTENT.stages.map((stage, idx) => (
            <div
              key={stage.number}
              className="flex flex-col justify-between space-y-6 pt-4 border-t-2 border-[#102B1B]/20 hover:border-[#39FF14] transition-colors group"
            >
              <div className="space-y-4">
                {/* Large Number */}
                <span className="font-display text-4xl sm:text-5xl font-bold text-[#102B1B]/30 group-hover:text-[#102B1B] transition-colors block">
                  {stage.number}
                </span>

                {/* Stage Title */}
                <h3 className="font-display text-2xl font-bold text-[#111411] leading-snug">
                  {stage.name[lang]}
                </h3>

                {/* Stage Description */}
                <p className="text-sm sm:text-base text-[#111411]/75 leading-relaxed font-sans">
                  {stage.description[lang]}
                </p>
              </div>

              <div className="text-[11px] font-mono text-[#A5ADA3]">
                Phase 0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
