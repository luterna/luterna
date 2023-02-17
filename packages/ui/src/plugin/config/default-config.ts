import type { LuternaConfig, LuternaTheme } from '../types';

const defaultTheme: LuternaTheme = {
  colorScheme: 'light',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  colors: {
    primary: '#298ee6',
    dark: '#22242a',
    gray: '#818c98',
    error: '#e63528',
    success: '#40bf59',
    warning: '#fab007',
  },
};

export default {
  theme: defaultTheme,
} as LuternaConfig;
