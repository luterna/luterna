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
      square: './src/assets/logo.svg',
      light: './src/assets/logo-light.svg',
      dark: './src/assets/logo-dark.svg',
    },
  },
  tree: {
    groups: [
      {
        id: 'buttons',
        title: 'Buttons',
      },
      {
        id: 'layout',
        title: 'Layout',
      },
      {
        id: 'data',
        title: 'Data display',
      },
      {
        id: 'styles',
        title: 'Styles',
      },
    ],
  },
});
