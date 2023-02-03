import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import LuButton from '../LuButton.vue';

describe('LuButton', () => {
  it('renders properly', () => {
    const buttonText = 'Hello from button';
    const wrapper = mount(LuButton, { slots: { default: buttonText } });
    expect(wrapper.text()).toContain(buttonText);
  });
});
