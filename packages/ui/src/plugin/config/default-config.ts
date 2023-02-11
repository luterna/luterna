import type { LuternaConfig, LuternaTheme } from '../types';

const defaultTheme: LuternaTheme = {
  colorScheme: 'light',
  accentColor: 'blue',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  colors: {
    dark: '#22242a',
    gray: '#818c98',
    blue: '#298ee6',
    red: '#e63528',
    green: '#40bf59',
    violet: '#6842f0',
  },
};

export default {
  theme: defaultTheme,
} as LuternaConfig;
