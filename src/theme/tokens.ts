/**
 * CoCreAct Central Design System Tokens
 * 
 * Provides typed JavaScript/TypeScript access to the design tokens defined in index.css.
 * Maps the electric green signature accent with balanced dark surfaces and off-white typography.
 */

export const THEME_COLORS = {
  // Brand Palette
  electricGreen: '#39FF14',
  limeGreen: '#A8FF60',
  deepForestGreen: '#102B1B',
  deepCharcoal: '#111411',
  warmOffWhite: '#F5F7F0',
  pureWhite: '#FFFFFF',
  mutedGrey: '#A5ADA3',
  warmOrange: '#E9A15A',

  // Semantic Design Tokens
  primary: '#39FF14',
  primaryHover: '#A8FF60',
  background: '#111411',
  surface: '#102B1B',
  surfaceCard: 'rgba(16, 43, 27, 0.45)',
  surfaceLight: '#F5F7F0',
  surfaceWhite: '#FFFFFF',
  text: '#F5F7F0',
  textDark: '#111411',
  textMuted: '#A5ADA3',
  border: 'rgba(245, 247, 240, 0.12)',
  borderAccent: 'rgba(57, 255, 20, 0.4)',
  focus: 'rgba(168, 255, 96, 0.7)',
  accentOrange: '#E9A15A',
} as const;

export const TYPOGRAPHY = {
  fonts: {
    body: '"Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: '"Space Grotesk", system-ui, -apple-system, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  },
  sizes: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
  },
} as const;

export const SPACING = {
  containerWidth: '1440px',
  pagePaddingClamp: 'clamp(20px, 3vw, 48px)',
  sectionYDesktop: '9rem', // 144px (py-36)
  sectionYMobile: '6rem',  // 96px (py-24)
} as const;

export const RADII = {
  sm: '6px',
  md: '10px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  full: '9999px',
} as const;

export const TRANSITIONS = {
  editorial: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
  standard: '0.25s ease',
  fast: '0.15s ease',
  durationSlow: '0.8s ease',
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

