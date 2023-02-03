import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import LuButtonGroup from '../LuButtonGroup.vue';

describe('LuButtonGroup', () => {
  it('renders properly', () => {
    const buttonText = 'Hello from button group';
    const wrapper = mount(LuButtonGroup, { slots: { default: buttonText } });
    expect(wrapper.text()).toContain(buttonText);
  });
});
