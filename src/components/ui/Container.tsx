import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main';
}

/**
 * Editorial Container
 * Enforces standardized max-width (1440px) and fluid responsive gutters (--page-padding)
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  as: Component = 'div',
  ...rest
}) => {
  return (
    <Component
      className={`w-[min(100%-(var(--page-padding)*2),var(--container-width))] mx-auto ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
};

