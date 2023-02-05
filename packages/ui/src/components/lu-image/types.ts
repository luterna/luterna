export const FitOptions = ['fill', 'contain', 'cover', 'none', 'scale-down', 'unset'] as const;
export type FitOptions = (typeof FitOptions)[number];
