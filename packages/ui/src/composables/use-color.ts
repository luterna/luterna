import { useLuternaConfig } from '@/plugin';
import type { AllowedColors } from '@/plugin/types';
import { computed } from 'vue';

export type ColorProps = {
  color?: AllowedColors;
};

export const useColor = (props?: ColorProps) => {
  const config = useLuternaConfig();
  const color = computed(() => props?.color || config.theme.accentColor);
  const v = (variation: number = 6, alpha: number = 1) =>
    `hsl(var(--luterna-color-${color.value}-${variation}), ${alpha})`;
  return {
    color,
    v,
  };
};

export const generateVars = (vars: { [key: string]: string }) => {
  return Object.fromEntries(Object.entries(vars).map(([key, value]) => [`--luterna-${key}`, value]));
};
