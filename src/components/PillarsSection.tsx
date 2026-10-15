import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PILLARS_CONTENT, Language } from '../config/cocreact-data';

interface PillarsSectionProps {
  lang: Language;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ lang }) => {
  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 md:py-36 bg-[#FFFFFF] text-[#171916]">
      <div className="editorial-container">
        {/* Section Eyebrow Label */}
        <span className="section-label text-[#166be0]">
          {lang === 'id' ? PILLARS_CONTENT.sectionLabel : PILLARS_CONTENT.sectionLabelEn}
        </span>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] text-[#171916] max-w-3xl mb-16">
          {PILLARS_CONTENT.headline[lang]}
        </h2>

        {/* Editorial 3 Pillars Grid with Large Numbers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 pt-8 border-t border-[#171916]/12">
          {PILLARS_CONTENT.pillars.map((pillar) => (
            <article
              key={pillar.number}
              className="flex flex-col justify-between space-y-8 group"
            >
              <div className="space-y-6">
                {/* Large Distinct Number */}
                <span className="font-display text-4xl sm:text-5xl font-bold text-[#0B1D40]/30 group-hover:text-[#166be0] transition-colors">
                  {pillar.number}
                </span>

                {/* Pillar Title */}
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#171916] leading-tight group-hover:text-[#166be0] transition-colors">
                  {pillar.title[lang]}
                </h3>

                {/* Pillar Description */}
                <p className="text-base text-[#171916]/80 leading-relaxed font-sans">
                  {pillar.description[lang]}
                </p>

                {/* Keywords List */}
                <ul className="pt-4 border-t border-[#171916]/10 space-y-2" aria-label="Keywords">
                  {pillar.keywords.map((kw, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-[#171916]/70 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#166be0] shrink-0" />
                      <span>{kw}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Minimal Link */}
              <div className="pt-4">
                <a
                  href="#portfolio"
                  onClick={scrollToPortfolio}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#166be0] hover:text-[#0B1D40] transition-colors"
                >
                  <span>{lang === 'id' ? 'Lihat Inisiatif' : 'Explore Initiatives'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
