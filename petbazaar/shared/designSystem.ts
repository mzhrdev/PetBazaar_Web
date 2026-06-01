/**
 * PetBazaar Design System Tokens
 * Consistent color palette, spacing, typography across the app
 */

// Color Palette
export const colors = {
  // Primary (Green)
  primary: {
    light: '#dcfce7',
    base: '#22c55e',
    dark: '#16a34a',
    darker: '#15803d',
  },

  // Background
  background: {
    page: '#f9fafb',
    card: '#ffffff',
    muted: '#f3f4f6',
    hover: '#f0fdf4',
  },

  // Text
  text: {
    primary: '#111827',
    secondary: '#6b7280',
    muted: '#9ca3af',
  },

  // Semantic
  error: '#ef4444',
  warning: '#f59e0b',
  success: '#22c55e',
  info: '#3b82f6',

  // Borders
  border: '#e5e7eb',
  borderLight: '#f3f4f6',
} as const;

// Spacing Scale (strict Tailwind scale)
export const spacing = {
  xs: '2',   // 8px
  sm: '4',   // 16px
  md: '6',   // 24px
  lg: '8',   // 32px
  xl: '10',  // 40px
  '2xl': '12', // 48px
  '3xl': '16', // 64px
} as const;

// Typography Scale
export const typography = {
  xs: 'text-xs',           // 12px - labels
  sm: 'text-sm',           // 14px - helper text
  base: 'text-base',       // 16px - normal text
  lg: 'text-lg',           // 18px - section text
  xl: 'text-xl',           // 20px - card titles
  '2xl': 'text-2xl',       // 24px - page titles
  '3xl': 'text-3xl',       // 30px - main headings
} as const;

// Font Weights
export const fontWeights = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
} as const;

// Border Radius
export const borderRadius = {
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
  full: 'rounded-full',
} as const;

// Shadows
export const shadows = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
} as const;

// Transitions
export const transitions = {
  fast: 'transition-all duration-150',
  base: 'transition-all duration-200',
  slow: 'transition-all duration-300',
} as const;

export default {
  colors,
  spacing,
  typography,
  fontWeights,
  borderRadius,
  shadows,
  transitions,
};
