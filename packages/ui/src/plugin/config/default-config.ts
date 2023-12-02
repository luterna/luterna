import { rem } from '@/utils/styles';
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
  borderRadius: {
    xs: rem(0.125),
    sm: rem(0.25),
    md: rem(0.5),
    lg: rem(1),
    xl: rem(2),
  },
  fontSize: {
    xs: rem(0.75),
    sm: rem(0.875),
    md: rem(1),
    lg: rem(1.125),
    xl: rem(1.25),
  },
};

export default {
  theme: defaultTheme,
} as LuternaConfig;
