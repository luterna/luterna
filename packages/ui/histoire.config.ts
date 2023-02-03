import { defaultColors, defineConfig } from 'histoire';
import { HstVue } from '@histoire/plugin-vue';

export default defineConfig({
  plugins: [HstVue()],
  routerMode: 'hash',
  vite: (config, env) => {
    config.base = env.mode === 'build' ? '/luterna-ui/' : '/';
  },
  setupFile: './histoire.setup.ts',
  theme: {
    title: 'Luterna UI',
    colors: {
      primary: defaultColors.blue,
    },
    favicon: 'favicon.svg',
    logo: {
      square: './src/assets/img/logo.svg',
      light: './src/assets/img/logo-light.svg',
      dark: './src/assets/img/logo-dark.svg',
    },
  },
});
