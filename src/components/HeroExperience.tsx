import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { HERO_CONTENT, Language, MEDIA } from '../config/cocreact-data';

interface HeroExperienceProps {
  lang: Language;
}

export const HeroExperience: React.FC<HeroExperienceProps> = ({ lang }) => {

  // Typing animation phrases based on selected language
  const phrases = HERO_CONTENT.typingPhrases?.[lang] || [
    'mulai dari ide.',
    'mencoba hal baru.',
    'belajar bersama.',
    'menciptakan sesuatu.',
    'bergerak bersama.',
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detect user preference for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);
    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  // When language changes, reset the typing state smoothly
  useEffect(() => {
    setPhraseIndex(0);
    setDisplayedText('');
    setIsDeleting(false);
  }, [lang]);

  // Smooth, non-blocking typing animation cycle
  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(phrases[0] || '');
      return;
    }

    const currentPhrase = phrases[phraseIndex % phrases.length];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayedText.length < currentPhrase.length) {
        // Typing characters
        timeoutId = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        // Full phrase displayed: pause for readability
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayedText.length > 0) {
        // Deleting characters
        timeoutId = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length - 1));
        }, 45);
      } else {
        // Finished erasing: advance to next phrase
        setIsDeleting(false);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, phraseIndex, phrases, prefersReducedMotion]);

  const [imageLoaded, setImageLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(HERO_CONTENT.image || HERO_CONTENT.fallbackImage);

  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToStart = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('start');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const currentActivePhrase = phrases[phraseIndex % phrases.length] || '';
  const staticHeadlineText = HERO_CONTENT.staticHeadline?.[lang] || HERO_CONTENT.headlineLead[lang];
  const imageAltText = HERO_CONTENT.imageAlt?.[lang] || HERO_CONTENT.fallbackImageAlt[lang];

  return (
    <section className="hero-container" aria-label="Hero Section">
      {/* High-Resolution Documentary Background Image Layer */}
      <div className="hero-image-wrapper hero-video-wrapper">
        <img
          src={imgSrc}
          alt={imageAltText}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            if (imgSrc !== MEDIA.hero.legacyFallback) {
              setImgSrc(MEDIA.hero.legacyFallback);
            }
          }}
          className={`hero-image hero-fallback-image transition-opacity duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Layered Contrast Scrim Gradients for WCAG AA/AAA Contrast */}
        <div className="hero-overlay-scrim" />
      </div>

      {/* Hero Content with Preserved Editorial Hierarchy */}
      <div className="hero-content">
        <div className="hero-inner">
          {/* Eyebrow Label */}
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            <span>{HERO_CONTENT.eyebrow}</span>
          </div>

          {/* Main Headline with Static Lead and Smooth Typing Line */}
          <h1 className="hero-headline">
            <span className="hero-headline-static block" aria-hidden="true">
              {staticHeadlineText}
            </span>
            <span className="hero-headline-dynamic accent block" aria-hidden="true">
              <span className="hero-typing-phrase">{displayedText}</span>
              {!prefersReducedMotion && (
                <span className="hero-cursor" aria-hidden="true" />
              )}
            </span>
            {/* Accessible label for screen readers with complete sentence */}
            <span className="sr-only">
              {staticHeadlineText} {currentActivePhrase}
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="hero-supporting">
            {HERO_CONTENT.supportingText[lang]}
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a
              href="#portfolio"
              onClick={scrollToPortfolio}
              className="btn-primary"
            >
              <span>{HERO_CONTENT.primaryCta[lang]}</span>
            </a>

            <a
              href="#start"
              onClick={scrollToStart}
              className="btn-secondary"
            >
              <span>{HERO_CONTENT.secondaryCta[lang]}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Discreet Bottom-Right Scroll Indicator */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <span>{HERO_CONTENT.scrollIndicator[lang]}</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
};
