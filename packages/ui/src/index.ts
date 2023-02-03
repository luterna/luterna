import type { Plugin } from 'vue';
import * as components from './components';

export const useLuterna: Plugin = {
  install: (app) => {
    Object.keys(components).forEach((name) => {
      app.component(name, components[name]);
    });
  },
};

export * as components from './components';
