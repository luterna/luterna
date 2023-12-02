export const AllowedColors = ['primary', 'success', 'error', 'warning', 'dark', 'gray'] as const;
export type AllowedColors = (typeof AllowedColors)[number];

export type LuternaColors = Record<AllowedColors, string>;

export const LuternaSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export type LuternaSizes = (typeof LuternaSizes)[number];

export type LuternaTheme = {
  colorScheme: 'light' | 'dark';
  fontFamily: string;
  colors: LuternaColors;
  borderRadius: Record<LuternaSizes, string>;
  fontSize: Record<LuternaSizes, string>;
};
