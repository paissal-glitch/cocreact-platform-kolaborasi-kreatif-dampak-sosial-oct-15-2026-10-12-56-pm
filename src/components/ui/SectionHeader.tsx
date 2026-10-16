import React from 'react';

interface SectionHeaderProps {
  label: string;
  headline: string;
  supportingText?: string;
  className?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
}

/**
 * Standardized Section Heading Component
 * Enforces unified typography hierarchy for eyebrow label, display title, and supporting body
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  headline,
  supportingText,
  className = '',
  align = 'left',
  theme = 'light',
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={`max-w-3xl mb-12 ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}
    >
      <span
        className={`section-label font-bold block ${
          isDark ? 'text-[#39FF14]' : 'text-[#102B1B]'
        }`}
      >
        {label}
      </span>
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.08] tracking-tight ${
          isDark ? 'text-[#F5F7F0]' : 'text-[#111411]'
        }`}
      >
        {headline}
      </h2>
      {supportingText && (
        <p
          className={`text-base sm:text-lg mt-4 leading-relaxed font-sans ${
            isDark ? 'text-[#A5ADA3]' : 'text-[#111411]/80'
          }`}
        >
          {supportingText}
        </p>
      )}
    </div>
  );
};

