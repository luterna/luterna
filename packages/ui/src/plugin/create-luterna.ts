import type { Plugin } from 'vue';
import * as components from '@/components';

export const createLuterna = (): Plugin => ({
  install: (app) => {
    Object.keys(components).forEach((name) => {
      app.component(name, components[name]);
    });
  },
});
