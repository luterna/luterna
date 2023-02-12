import type { Plugin } from 'vue';
import * as components from '@/components';
import type { LuternaConfig } from './types';
import type { DeepPartial } from '../utils/types';
import { createLuternaConfig } from './config/luterna-config';

export const createLuterna = (config: DeepPartial<LuternaConfig> = {}): Plugin => ({
  install: (app) => {
    createLuternaConfig(config);
    Object.keys(components).forEach((name) => {
      app.component(name, components[name]);
    });
  },
});
