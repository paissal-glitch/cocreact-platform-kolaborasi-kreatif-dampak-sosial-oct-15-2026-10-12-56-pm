import React, { useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
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
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#1C201B] border border-[#F5F4EE]/15 rounded-2xl overflow-y-auto shadow-2xl text-[#F5F4EE]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Close Header */}
        <div className="sticky top-0 right-0 z-20 flex items-center justify-between px-6 py-4 bg-[#1C201B]/95 backdrop-blur-md border-b border-[#F5F4EE]/10">
          <div className="flex items-center gap-3 text-xs font-mono text-[#A8ADA3]">
            <span className="text-[#166be0]">{project.category[lang]}</span>
            <span>·</span>
            <span>{project.date[lang]}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#A8ADA3] hover:text-[#F5F4EE] hover:bg-[#111310] transition-colors cursor-pointer"
            aria-label={lang === 'id' ? 'Tutup detail proyek' : 'Close project details'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Banner */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-[#111310]">
          <ImageWithFallback
            src={project.image}
            alt={project.imageAlt[lang]}
            fallbackTitle={project.title}
            aspectRatioClass="aspect-[16/9] sm:aspect-[21/9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C201B] via-transparent to-transparent" />
        </div>

        {/* Modal Content Details */}
        <div className="p-6 sm:p-10 space-y-10">
          {/* Header Block */}
          <div>
            {project.role && (
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-mono text-[#166be0] px-2.5 py-0.5 rounded bg-[#166be0]/10 border border-[#166be0]/20">
                  {lang === 'id' ? 'Peran Terkonfirmasi: ' : 'Verified Role: '}
                  {project.role[lang]}
                </span>
                {project.roleDetail && (
                  <span className="text-xs font-mono text-[#A8ADA3]">
                    ({project.roleDetail[lang]})
                  </span>
                )}
              </div>
            )}
            <h2 id="modal-title" className="text-2xl sm:text-4xl font-bold font-display text-[#F5F4EE] leading-tight">
              {project.title}
            </h2>
            <p className="text-base text-[#A8ADA3] mt-3 leading-relaxed">
              {project.summary[lang]}
            </p>
          </div>

          {/* Case Study Sections */}
          {caseStudy && (
            <div className="space-y-8 divide-y divide-[#F5F4EE]/10 text-sm">
              {/* Background & Objectives */}
              <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#166be0] mb-2 font-semibold">
                    {lang === 'id' ? 'Latar Belakang & Kebutuhan' : 'Background & Context'}
                  </h4>
                  <p className="text-[#A8ADA3] leading-relaxed">
                    {caseStudy.background[lang]}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#166be0] mb-2 font-semibold">
                    {lang === 'id' ? 'Tujuan Inisiatif' : 'Initiative Objectives'}
                  </h4>
                  <ul className="space-y-2 text-[#A8ADA3]">
                    {caseStudy.objectives[lang].map((obj, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#166be0] mt-1.5 shrink-0" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Role & Activities */}
              <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#166be0] mb-2 font-semibold">
                    {lang === 'id' ? 'Peran CoCreAct' : 'CoCreAct Contribution'}
                  </h4>
                  <p className="text-[#A8ADA3] leading-relaxed">
                    {caseStudy.roleDescription[lang]}
                  </p>
                  {caseStudy.partners && caseStudy.partners.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-[#F5F4EE]/10">
                      <span className="text-xs text-[#A8ADA3] block font-mono mb-1">
                        {lang === 'id' ? 'Mitra Kolaborator Terlibat:' : 'Collaborating Partners:'}
                      </span>
                      <p className="text-xs text-[#F5F4EE]/90">
                        {caseStudy.partners.join(' · ')}
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#166be0] mb-2 font-semibold">
                    {lang === 'id' ? 'Rangkaian Kegiatan' : 'Key Activities'}
                  </h4>
                  <ul className="space-y-2 text-[#A8ADA3]">
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
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#166be0] mb-2 font-semibold">
                    {lang === 'id' ? 'Keluaran Nyata' : 'Concrete Outputs'}
                  </h4>
                  <ul className="space-y-1.5 text-[#A8ADA3]">
                    {caseStudy.outputs[lang].map((output, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#166be0] shrink-0 mt-0.5" />
                        <span>{output}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#166be0] mb-2 font-semibold">
                    {lang === 'id' ? 'Refleksi & Pembelajaran' : 'Lessons Learned'}
                  </h4>
                  <ul className="space-y-2 text-[#A8ADA3]">
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

          {/* Related Initiatives */}
          {relatedProjects.length > 0 && (
            <div className="pt-8 border-t border-[#F5F4EE]/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#A8ADA3] mb-4">
                {lang === 'id' ? 'Inisiatif Terkait Lainnya' : 'Related Initiatives'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedProjects.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => onSelectProject(p)}
                    className="p-4 bg-[#111310] border border-[#F5F4EE]/10 rounded-xl hover:border-[#166be0]/40 transition-colors cursor-pointer group flex items-center justify-between"
                  >
                    <div>
                      <p className="text-xs text-[#166be0] font-mono">{p.category[lang]}</p>
                      <h5 className="text-sm font-bold text-[#F5F4EE] group-hover:text-[#166be0] transition-colors line-clamp-1">
                        {p.title}
                      </h5>
                    </div>
                    <span className="text-xs font-mono text-[#A8ADA3] group-hover:translate-x-1 transition-transform">
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
