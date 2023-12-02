export const AllowedColors = ['primary', 'success', 'error', 'warning', 'dark', 'gray'] as const;
export type AllowedColors = (typeof AllowedColors)[number];

export type LuternaColors = Record<AllowedColors, string>;

export type LuternaTheme = {
  colorScheme: 'light' | 'dark';
  fontFamily: string;
  colors: LuternaColors;
};
