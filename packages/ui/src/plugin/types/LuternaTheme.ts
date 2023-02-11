export const allowedColors = ['blue', 'red', 'green', 'violet', 'dark', 'gray'] as const;
export type AllowedColors = (typeof allowedColors)[number] | string;

export type LuternaColors = Record<AllowedColors, string>;
export type LuternaColor = Record<AllowedColors, string>;

export type LuternaTheme = {
  colorScheme: 'light' | 'dark';
  fontFamily: string;
  accentColor: AllowedColors;
  colors: LuternaColors;
};
