import React from 'react';
import {
  BRAND_DICTIONARY,
  HEADER_NAV_LINKS,
  FOOTER_CONTENT,
  Language,
  siteConfig,
} from '../config/cocreact-data';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111411] text-[#F5F7F0] border-t border-[#F5F7F0]/10 pt-16 pb-12">
      <div className="editorial-container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#F5F7F0]/10">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <a
              href="#top"
              onClick={(e) => handleNavClick(e, '#top')}
              className="wordmark inline-flex items-center gap-2.5"
            >
              <svg viewBox="0 0 32 32" className="wordmark-sprout" aria-hidden="true" fill="none">
                <path
                  d="M16 28c0-8 0-12-5-18M16 28c0-6 2-10 7-14M16 20c-2-2-5-3-8-3"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
              </svg>
              <span>{BRAND_DICTIONARY.name}</span>
            </a>

            <p className="text-sm font-display font-semibold text-[#39FF14]">
              “{FOOTER_CONTENT.tagline[lang]}”
            </p>

            <p className="text-sm text-[#A5ADA3] max-w-sm leading-relaxed">
              {FOOTER_CONTENT.brandDescription[lang]}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono tracking-widest text-[#39FF14] uppercase block mb-3 font-semibold">
              {FOOTER_CONTENT.navTitle[lang]}
            </span>
            <ul className="space-y-2 text-sm text-[#F5F7F0]/80">
              {HEADER_NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#39FF14] transition-colors"
                  >
                    {link.label[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Social Channels */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono tracking-widest text-[#39FF14] uppercase block mb-3 font-semibold">
              {FOOTER_CONTENT.socialTitle[lang]}
            </span>
            <ul className="space-y-2 text-sm text-[#F5F7F0]/80">
              <li>
                <a
                  href={`mailto:${siteConfig.inquiryEmail}`}
                  className="hover:text-[#39FF14] transition-colors"
                >
                  {siteConfig.inquiryEmail}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#39FF14] transition-colors"
                >
                  Instagram ↗
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#39FF14] transition-colors"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#39FF14] transition-colors"
                >
                  WhatsApp ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A5ADA3]">
          <p>
            © {currentYear} {BRAND_DICTIONARY.name}. {BRAND_DICTIONARY.expansion}.
          </p>

          <p className="text-center sm:text-right">
            <a
              href={FOOTER_CONTENT.videoAttributionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#39FF14] transition-colors underline underline-offset-4"
            >
              {FOOTER_CONTENT.videoAttribution[lang]}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
