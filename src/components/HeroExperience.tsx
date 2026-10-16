import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { HERO_CONTENT, Language, siteConfig } from '../config/cocreact-data';

interface HeroExperienceProps {
  lang: Language;
}

export const HeroExperience: React.FC<HeroExperienceProps> = ({ lang }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

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

  // YouTube embed URL with autoplay, loop, muted, no controls
  const videoId = siteConfig.heroVideoId || 'q0VzUigrb_g';
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${videoId}&playsinline=1&modestbranding=1&enablejsapi=1`;

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

  return (
    <section className="hero-container" aria-label="Hero Section">
      {/* Background Video Layer with Robust Image Fallback */}
      <div className="hero-video-wrapper">
        {/* High-res documentary fallback image, always rendered beneath */}
        <img
          src={HERO_CONTENT.fallbackImage}
          alt={HERO_CONTENT.fallbackImageAlt[lang]}
          className={`hero-fallback-image ${videoLoaded && !videoError ? 'opacity-30' : 'opacity-100'}`}
        />

        {/* Cinematic YouTube Player Overlay */}
        {!videoError && (
          <iframe
            className={`hero-video-frame transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            src={embedUrl}
            title="CoCreAct Cinematic Background"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            onLoad={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            tabIndex={-1}
            aria-hidden="true"
          />
        )}

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
