import './src/styles/global.scss';
import { createLuterna } from './src';
import { defineSetupVue3 } from '@histoire/plugin-vue';

export const setupVue3 = defineSetupVue3(({ app }) => {
  app.use(createLuterna());
});
