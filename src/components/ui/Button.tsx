import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

type ButtonAsButton = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    href?: undefined;
  };

type ButtonAsAnchor = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/**
 * Standardized CoCreAct Button Component
 * Supports primary electric green, glass secondary, and outline variants
 * Works seamlessly as either a semantic <button> or an anchor <a>
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  icon,
  iconPosition = 'right',
  ...rest
}) => {
  const sizeClasses = {
    sm: 'h-9 px-4 text-xs font-semibold',
    md: 'h-11 px-6 text-sm font-bold',
    lg: 'h-12 sm:h-13 px-7 text-sm sm:text-base font-extrabold',
  }[size];

  const variantClasses = {
    primary:
      'bg-[#39FF14] text-[#111411] hover:bg-[#A8FF60] shadow-[0_4px_20px_rgba(57,255,20,0.35)] hover:shadow-[0_8px_28px_rgba(57,255,20,0.5)] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#A8FF60]',
    secondary:
      'bg-[#F5F7F0]/5 text-[#F5F7F0] border border-[#F5F7F0]/25 hover:border-[#39FF14] hover:text-[#39FF14] hover:bg-[#39FF14]/10 backdrop-blur-md hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#39FF14]/50',
    outline:
      'border border-[#39FF14]/70 bg-[#39FF14]/10 text-white hover:bg-[#39FF14] hover:text-[#111411] hover:border-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.25)] hover:-translate-y-0.5',
    ghost:
      'text-[#F5F7F0]/80 hover:text-[#39FF14] hover:bg-[#39FF14]/10',
  }[variant];

  const baseClasses =
    'inline-flex items-center justify-center gap-2.5 rounded-full font-body transition-all duration-200 cursor-pointer text-center select-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none';

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as ButtonAsAnchor;
    return (
      <a href={href} className={combinedClasses} {...anchorRest}>
        {content}
      </a>
    );
  }

  const buttonRest = rest as ButtonAsButton;
  return (
    <button className={combinedClasses} {...buttonRest}>
      {content}
    </button>
  );
};

