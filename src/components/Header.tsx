import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import {
  BRAND_DICTIONARY,
  HEADER_NAV_LINKS,
  Language,
  MEDIA,
  siteConfig,
} from '../config/cocreact-data';

interface HeaderProps {
  lang: Language;
  onToggleLang: (lang: Language) => void;
  onOpenContact?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (onOpenContact) {
      onOpenContact();
      return;
    }

    const startEl = document.getElementById('start');
    if (startEl) {
      startEl.scrollIntoView({ behavior: 'smooth' });
    } else if (siteConfig.contactUrl) {
      window.open(siteConfig.contactUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          {/* Left: Official CoCreAct Logo */}
          <div className="header-brand">
            <a
              className="wordmark"
              href="#top"
              aria-label="CoCreAct Home"
              onClick={(e) => handleNavClick(e, '#top')}
            >
              <img
                src={MEDIA.brand.logo}
                alt="CoCreAct"
                className="h-7 md:h-8 w-auto object-contain transition-opacity hover:opacity-90"
                width={140}
                height={32}
                loading="eager"
                decoding="async"
              />
            </a>
          </div>

          {/* Center: Clean Minimal Navigation Links (No Heavy Capsule) */}
          <nav className="desktop-nav" aria-label="Primary navigation">
            {HEADER_NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label[lang]}
              </a>
            ))}
          </nav>

          {/* Right: ID/EN Switcher + Outlined CTA + Mobile Hamburger */}
          <div className="header-actions">
            {/* ID / EN Language Switcher */}
            <div className="lang-switch" role="group" aria-label="Language selection">
              <button
                type="button"
                onClick={() => onToggleLang('id')}
                className={`lang-btn ${lang === 'id' ? 'active' : ''}`}
                aria-label="Bahasa Indonesia"
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => onToggleLang('en')}
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                aria-label="English"
              >
                EN
              </button>
            </div>

            {/* Outlined Collaboration CTA */}
            <a
              className="cta-outlined desktop-cta"
              href="#start"
              onClick={handleCtaClick}
            >
              <span>{lang === 'id' ? 'Mulai Kolaborasi' : "Let's Collaborate"}</span>
              <i>↗</i>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hamburger-btn"
              aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="mobile-overlay-header">
            <span className="text-xs font-mono tracking-widest text-[#39FF14] uppercase font-semibold">
              {lang === 'id' ? 'Navigasi' : 'Navigation'}
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#F5F7F0]/70 hover:text-[#39FF14] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="mobile-nav-list" aria-label="Mobile navigation links">
            {HEADER_NAV_LINKS.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="mobile-nav-link"
              >
                <span className="mobile-nav-index">0{idx + 1}</span>
                <span>{link.label[lang]}</span>
              </a>
            ))}
          </nav>

          <div className="mobile-overlay-footer">
            <a
              href="#start"
              onClick={handleCtaClick}
              className="btn-primary w-full justify-center"
            >
              <span>{lang === 'id' ? 'Mulai Kolaborasi' : "Let's Collaborate"}</span>
              <i>↗</i>
            </a>

            <p className="text-xs font-mono text-[#A5ADA3] text-center mt-4">
              CoCreAct · {BRAND_DICTIONARY.tagline[lang]}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
