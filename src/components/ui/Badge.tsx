import React from 'react';

export type BadgeVariant = 'electric' | 'dark' | 'forest' | 'subtle' | 'outline';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

/**
 * Standardized CoCreAct Badge Component
 * Used for categories, verified roles, numeric indicators, and metadata
 */
export const Badge: React.FC<BadgeProps> = ({
  variant = 'subtle',
  children,
  className = '',
  ...rest
}) => {
  const variantClasses = {
    electric: 'bg-[#39FF14] text-[#111411] font-bold border border-[#39FF14]',
    dark: 'bg-[#111411] text-[#39FF14] font-bold border border-[#39FF14]/30',
    forest: 'bg-[#102B1B] text-[#39FF14] font-semibold border border-[#39FF14]/25',
    subtle: 'bg-[#111411]/5 text-[#111411]/80 border border-[#111411]/10',
    outline: 'bg-transparent text-[#F5F7F0] border border-[#F5F7F0]/20',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono tracking-wide ${variantClasses} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
};

