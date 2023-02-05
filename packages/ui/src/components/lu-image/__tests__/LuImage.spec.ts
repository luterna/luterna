import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import LuImage from '../LuImage.vue';

describe('LuImage', () => {
  it('renders properly', () => {
    const wrapper = mount(LuImage);
    expect(wrapper.vm).toBeTruthy();
  });

  describe('placeholder', () => {
    it.each([
      { withPlaceholder: true, src: '', expected: true },
      { withPlaceholder: true, src: 'https://hello.world', expected: false },
      { withPlaceholder: true, src: 'https://hello.world', emitsError: true, expected: true },
      { withPlaceholder: false, src: 'https://hello.world', expected: false },
      { withPlaceholder: false, src: '', expected: false },
    ])('', async ({ withPlaceholder, src, emitsError, expected }) => {
      const wrapper = mount(LuImage, { props: { withPlaceholder, src } });
      if (emitsError) {
        wrapper.find('.lu-image__image').trigger('error');
        await wrapper.vm.$nextTick();
      }
      expect(wrapper.find('.lu-image__placeholder').exists()).toBe(expected);
    });
  });

  describe('caption', () => {
    it.each([
      { caption: '', expected: false },
      { caption: 'Test caption', expected: true },
    ])('', ({ caption, expected }) => {
      const wrapper = mount(LuImage, { props: { caption } });
      expect(wrapper.find('.lu-image__caption').exists()).toBe(expected);
    });
  });
});
