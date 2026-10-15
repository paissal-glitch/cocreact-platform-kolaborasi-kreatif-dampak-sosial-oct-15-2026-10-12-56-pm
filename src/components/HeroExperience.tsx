import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { HERO_CONTENT, Language, siteConfig } from '../config/cocreact-data';

interface HeroExperienceProps {
  lang: Language;
}

export const HeroExperience: React.FC<HeroExperienceProps> = ({ lang }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

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

        {/* Ambient Dark Scrim Gradient for WCAG AA Contrast */}
        <div className="hero-overlay-scrim" />
      </div>

      {/* Hero Content in Lower-Left Composition */}
      <div className="hero-content">
        <div className="hero-inner">
          {/* Eyebrow Label */}
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            <span>{HERO_CONTENT.eyebrow}</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline">
            {HERO_CONTENT.headlineLead[lang]}
            <span className="accent">{HERO_CONTENT.headlineAccent[lang]}</span>
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
