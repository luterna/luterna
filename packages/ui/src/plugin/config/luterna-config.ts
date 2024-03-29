import { getColorVariations } from '@/utils/colors';
import { deepMerge } from '@/utils/object';
import type { DeepPartial } from '@/utils/types';
import { computed, reactive, readonly, watch } from 'vue';
import type { LuternaConfig, LuternaTheme } from '../types';
import defaultConfig from './default-config';

const luternaConfig = reactive<LuternaConfig>(defaultConfig);

export const useLuternaConfig = () => ({
  theme: readonly(luternaConfig.theme),
  setColorScheme: (mode: 'light' | 'dark') => (luternaConfig.theme.colorScheme = mode),
});

const createCssClass = (lines: string[], selector: string, content: string[]) => {
  lines.push(`${selector} {\n`, ...content.map((line) => `  ${line};\n`), '}\n');
};

const getColorVariables = (theme: LuternaTheme) => {
  const variables: string[] = [];

  Object.keys(theme.colors).forEach((key) => {
    getColorVariations(theme.colors[key]).forEach((colorVariant, index) => {
      variables.push(`--lu-${key}-${index}: ${colorVariant}`);
    });
  });
  return variables;
};

const objectToVariable = (key: keyof LuternaTheme, theme: LuternaTheme) => {
  const variables: string[] = [];

  Object.keys(theme[key]).forEach((k) => {
    variables.push(`--lu-${key}-${k}: ${theme[key][k]}`);
  });
  return variables;
};

export const createLuternaConfig = (config: DeepPartial<LuternaConfig> = {}) => {
  const newConfig = deepMerge(defaultConfig, config);

  const styles = computed(() => {
    const lines = [];
    const { theme } = luternaConfig;

    createCssClass(lines, ':root', [
      `color-scheme: ${theme.colorScheme}`,
      `--lu-fontFamily: ${theme.fontFamily}`,
      ...getColorVariables(theme),
      ...objectToVariable('borderRadius', theme),
      ...objectToVariable('fontSize', theme),
      `--lu-fontColor: rgb(var(--lu-dark-7))`,
    ]);
    return lines.join('');
  });

  let styleEl = document.getElementById('luterna-stylesheet');

  const updateStyles = () => {
    if (document !== undefined && !styleEl) {
      const el = document.createElement('style') as HTMLStyleElement;
      el.id = 'luterna-stylesheet';

      styleEl = el;
      document.head.appendChild(styleEl);
    }
    document.documentElement.setAttribute('data-theme', luternaConfig.theme.colorScheme);

    if (styleEl) {
      styleEl.innerHTML = styles.value;
    }
  };

  watch(styles, updateStyles, { immediate: true });

  luternaConfig.theme = newConfig.theme;
};
