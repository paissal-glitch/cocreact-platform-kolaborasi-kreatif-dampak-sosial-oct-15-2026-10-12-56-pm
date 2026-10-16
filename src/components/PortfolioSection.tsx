import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  PORTFOLIO_CONTENT,
  VERIFIED_PROJECTS,
  ProjectItem,
  Language,
} from '../config/cocreact-data';
import { ImageWithFallback } from './ImageWithFallback';
import { ProjectDetailModal } from './ProjectDetailModal';
import { SectionHeader } from './ui';

interface PortfolioSectionProps {
  lang: Language;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const allLabel = lang === 'id' ? 'Semua' : 'All';
  const categories = [
    { key: 'all', label: allLabel },
    ...Array.from(new Set(VERIFIED_PROJECTS.map((p) => p.category[lang]))).map((cat) => ({
      key: cat,
      label: cat,
    })),
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? VERIFIED_PROJECTS
      : VERIFIED_PROJECTS.filter((p) => p.category[lang] === selectedCategory);

  const scrollToStart = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('start');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="portfolio" className="py-24 md:py-36 bg-[#F5F7F0] text-[#111411]">
      <div className="editorial-container">
        {/* Section Header */}
        <SectionHeader
          label={lang === 'id' ? PORTFOLIO_CONTENT.sectionLabel : PORTFOLIO_CONTENT.sectionLabelEn}
          headline={PORTFOLIO_CONTENT.headline[lang]}
          supportingText={PORTFOLIO_CONTENT.supportingText[lang]}
          theme="light"
        />

        {/* Category Filter Segments */}
        <div className="mb-14 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex items-center gap-1.5 p-1 bg-[#111411]/5 border border-[#111411]/10 rounded-full">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#111411] text-[#39FF14] font-bold shadow-sm'
                      : 'text-[#111411]/70 hover:text-[#111411]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Project Grid: Two columns with varied image proportions on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {filteredProjects.map((project, index) => {
            // Varied editorial aspect ratios (first card wider, second taller, etc.)
            const aspectClass = index % 3 === 0 ? 'aspect-[16/10]' : 'aspect-[16/11]';

            return (
              <article
                key={project.id}
                className="group flex flex-col justify-between bg-white border border-[#111411]/10 rounded-2xl overflow-hidden hover:border-[#39FF14]/60 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl"
              >
                {/* Visual Thumbnail */}
                <div
                  className={`relative w-full ${aspectClass} overflow-hidden bg-[#111411]/5 cursor-pointer`}
                  onClick={() => setActiveProject(project)}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.imageAlt[lang]}
                    fallbackTitle={project.title}
                    aspectRatioClass={aspectClass}
                    className="group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {project.role && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-[#111411]/90 text-[#39FF14] backdrop-blur-md border border-[#39FF14]/40 font-semibold">
                        {project.role[lang]}
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Metadata & Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#A5ADA3]">
                      <span className="text-[#102B1B] font-bold">{project.category[lang]}</span>
                      <span>·</span>
                      <span>{project.date[lang]}</span>
                    </div>

                    <h3
                      onClick={() => setActiveProject(project)}
                      className="text-xl sm:text-2xl font-bold font-display text-[#111411] group-hover:text-[#102B1B] transition-colors leading-snug cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    <p className="text-sm text-[#111411]/75 leading-relaxed font-sans">
                      {project.summary[lang]}
                    </p>
                  </div>

                  {/* Action Link to Case Study */}
                  <div className="pt-4 border-t border-[#111411]/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#A5ADA3]">
                      {lang === 'id' ? 'Dokumentasi Terverifikasi' : 'Verified Documentation'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#102B1B] hover:text-[#102B1B] transition-colors cursor-pointer group-hover:translate-x-0.5"
                    >
                      <span>{PORTFOLIO_CONTENT.caseStudyButton[lang]}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Simple Editorial CTA at Bottom of Portfolio */}
        <div className="mt-20 pt-10 border-t border-[#111411]/12 flex justify-center">
          <a
            href="#start"
            onClick={scrollToStart}
            className="inline-flex items-center gap-2 text-base sm:text-lg font-display font-bold text-[#102B1B] hover:text-[#102B1B] transition-colors group"
          >
            <span>{PORTFOLIO_CONTENT.ctaText[lang]}</span>
          </a>
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={activeProject}
        lang={lang}
        onClose={() => setActiveProject(null)}
        onSelectProject={(proj) => setActiveProject(proj)}
        allProjects={VERIFIED_PROJECTS}
      />
    </section>
  );
};
