import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, Images } from 'lucide-react';
import { ProjectItem, Language } from '../config/cocreact-data';
import { ImageWithFallback } from './ImageWithFallback';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  lang: Language;
  onClose: () => void;
  onSelectProject: (proj: ProjectItem) => void;
  allProjects: ProjectItem[];
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  lang,
  onClose,
  onSelectProject,
  allProjects,
}) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    setActiveImage(project?.image || null);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const caseStudy = project.caseStudy;
  const relatedProjects = allProjects
    .filter((p) => p.id !== project.id && p.category.id === project.category.id)
    .slice(0, 2);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#111411] border border-[#F5F7F0]/15 rounded-2xl overflow-y-auto shadow-2xl text-[#F5F7F0]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Close Header */}
        <div className="sticky top-0 right-0 z-20 flex items-center justify-between px-6 py-4 bg-[#111411]/95 backdrop-blur-md border-b border-[#F5F7F0]/10">
          <div className="flex items-center gap-3 text-xs font-mono text-[#A5ADA3]">
            <span className="text-[#39FF14]">{project.category[lang]}</span>
            <span>·</span>
            <span>{project.date[lang]}</span>
          </div>
          <button
            onClick={onClose}
            className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-[#A5ADA3] hover:text-[#39FF14] hover:bg-[#102B1B] focus-visible:outline-2 focus-visible:outline-[#39FF14] transition-colors cursor-pointer"
            aria-label={lang === 'id' ? 'Tutup detail proyek' : 'Close project details'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Banner */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-[#111411]">
          <ImageWithFallback
            src={activeImage || project.image}
            alt={project.imageAlt[lang]}
            fallbackTitle={project.title}
            aspectRatioClass="aspect-[16/9] sm:aspect-[21/9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111411] via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Modal Content Details */}
        <div className="p-6 sm:p-10 space-y-10">
          {/* Header Block */}
          <div>
            {project.role && (
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-mono text-[#39FF14] px-2.5 py-0.5 rounded bg-[#39FF14]/10 border border-[#39FF14]/25">
                  {lang === 'id' ? 'Peran Terkonfirmasi: ' : 'Verified Role: '}
                  {project.role[lang]}
                </span>
                {project.roleDetail && (
                  <span className="text-xs font-mono text-[#A5ADA3]">
                    ({project.roleDetail[lang]})
                  </span>
                )}
              </div>
            )}
            <h2 id="modal-title" className="text-2xl sm:text-4xl font-bold font-display text-[#F5F7F0] leading-tight">
              {project.title}
            </h2>
            <p className="text-base text-[#A5ADA3] mt-3 leading-relaxed">
              {project.summary[lang]}
            </p>
          </div>

          {/* Case Study Sections */}
          {caseStudy && (
            <div className="space-y-8 divide-y divide-[#F5F7F0]/10 text-sm">
              {/* Background & Objectives */}
              <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#39FF14] mb-2 font-semibold">
                    {lang === 'id' ? 'Latar Belakang & Kebutuhan' : 'Background & Context'}
                  </h4>
                  <p className="text-[#A5ADA3] leading-relaxed">
                    {caseStudy.background[lang]}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#39FF14] mb-2 font-semibold">
                    {lang === 'id' ? 'Tujuan Inisiatif' : 'Initiative Objectives'}
                  </h4>
                  <ul className="space-y-2 text-[#A5ADA3]">
                    {caseStudy.objectives[lang].map((obj, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] mt-1.5 shrink-0" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Role & Activities */}
              <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#39FF14] mb-2 font-semibold">
                    {lang === 'id' ? 'Peran CoCreAct' : 'CoCreAct Contribution'}
                  </h4>
                  <p className="text-[#A5ADA3] leading-relaxed">
                    {caseStudy.roleDescription[lang]}
                  </p>
                  {caseStudy.partners && caseStudy.partners.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-[#F5F7F0]/10">
                      <span className="text-xs text-[#A5ADA3] block font-mono mb-1">
                        {lang === 'id' ? 'Mitra Kolaborator Terlibat:' : 'Collaborating Partners:'}
                      </span>
                      <p className="text-xs text-[#F5F7F0]/90">
                        {caseStudy.partners.join(' · ')}
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#39FF14] mb-2 font-semibold">
                    {lang === 'id' ? 'Rangkaian Kegiatan' : 'Key Activities'}
                  </h4>
                  <ul className="space-y-2 text-[#A5ADA3]">
                    {caseStudy.activities[lang].map((act, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E9A15A] mt-1.5 shrink-0" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Outputs & Lessons Learned */}
              <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#39FF14] mb-2 font-semibold">
                    {lang === 'id' ? 'Keluaran Nyata' : 'Concrete Outputs'}
                  </h4>
                  <ul className="space-y-1.5 text-[#A5ADA3]">
                    {caseStudy.outputs[lang].map((output, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#39FF14] shrink-0 mt-0.5" />
                        <span>{output}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#39FF14] mb-2 font-semibold">
                    {lang === 'id' ? 'Refleksi & Pembelajaran' : 'Lessons Learned'}
                  </h4>
                  <ul className="space-y-2 text-[#A5ADA3]">
                    {caseStudy.lessonsLearned[lang].map((lesson, i) => (
                      <li key={i} className="italic text-xs sm:text-sm">
                        “{lesson}”
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Documentation Photo Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="pt-8 border-t border-[#F5F7F0]/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Images className="w-4 h-4 text-[#39FF14]" />
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#39FF14] font-semibold">
                    {lang === 'id' ? 'Galeri Dokumentasi Foto' : 'Photo Documentation Gallery'}
                  </h4>
                </div>
                <span className="text-xs font-mono text-[#A5ADA3]">
                  {project.gallery.length} {lang === 'id' ? 'Foto Tersedia' : 'Photos'}
                </span>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {project.gallery.map((item, idx) => {
                  const isSelected = (activeImage || project.image) === item.src;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImage(item.src)}
                      className={`group relative aspect-[4/3] rounded-lg overflow-hidden border transition-all text-left cursor-pointer ${
                        isSelected
                          ? 'border-[#39FF14] ring-2 ring-[#39FF14]/50 scale-[1.03] shadow-lg'
                          : 'border-[#F5F7F0]/15 hover:border-[#39FF14]/60 opacity-80 hover:opacity-100'
                      }`}
                      title={item.caption?.[lang]}
                    >
                      <img
                        src={item.src}
                        alt={item.caption?.[lang] || `Foto dokumentasi ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  );
                })}
              </div>

              {/* Active Photo Caption */}
              {project.gallery.find((g) => g.src === (activeImage || project.image))?.caption && (
                <div className="p-3 rounded-lg bg-[#102B1B]/40 border border-[#39FF14]/20 flex items-center justify-between text-xs">
                  <span className="text-[#F5F7F0]/90 font-sans">
                    {project.gallery.find((g) => g.src === (activeImage || project.image))?.caption[lang]}
                  </span>
                  <span className="text-[11px] font-mono text-[#39FF14] shrink-0 ml-3">
                    {lang === 'id' ? 'Klik foto untuk pratinjau utama' : 'Click photo to view in banner'}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Related Initiatives */}
          {relatedProjects.length > 0 && (
            <div className="pt-8 border-t border-[#F5F7F0]/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#A5ADA3] mb-4">
                {lang === 'id' ? 'Inisiatif Terkait Lainnya' : 'Related Initiatives'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedProjects.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => onSelectProject(p)}
                    className="p-4 bg-[#102B1B]/40 border border-[#F5F7F0]/10 rounded-xl hover:border-[#39FF14]/50 transition-colors cursor-pointer group flex items-center justify-between"
                  >
                    <div>
                      <p className="text-xs text-[#39FF14] font-mono">{p.category[lang]}</p>
                      <h5 className="text-sm font-bold text-[#F5F7F0] group-hover:text-[#39FF14] transition-colors line-clamp-1">
                        {p.title}
                      </h5>
                    </div>
                    <span className="text-xs font-mono text-[#A5ADA3] group-hover:text-[#39FF14] group-hover:translate-x-1 transition-all">
                      →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
