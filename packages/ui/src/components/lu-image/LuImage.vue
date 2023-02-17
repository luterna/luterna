<script lang="ts" setup>
import { ref, watch } from 'vue';
import PlaceholderIcon from './icons/PlaceholderIcon.vue';
import type { FitOptions } from './types';

const props = withDefaults(
  defineProps<{
    src?: string;
    alt?: string;
    caption?: string;
    width?: number;
    height?: number;
    withPlaceholder?: boolean;
    fit?: FitOptions;
  }>(),
  {
    src: '',
    alt: '',
    caption: '',
    withPlaceholder: false,
    fit: 'cover',
  }
);

const loadingError = ref(!props.src);

watch(
  () => props.src,
  () => (loadingError.value = false)
);
</script>

<template>
  <div class="lu-image">
    <figure class="lu-image__figure">
      <div class="lu-image__internals">
        <img
          class="lu-image__image"
          v-on="$attrs"
          :src="src"
          :width="width"
          :height="height"
          :alt="alt"
          :style="{ objectFit: fit }"
          @error="loadingError = true"
        />
        <div v-if="withPlaceholder && loadingError" class="lu-image__placeholder" :style="{ height: `${height}px` }">
          <slot name="placeholder">
            <PlaceholderIcon class="lu-image__placeholder__icon" />
          </slot>
        </div>
      </div>
      <figcaption class="lu-image__caption" v-if="caption">
        <slot name="caption">{{ caption }}</slot>
      </figcaption>
    </figure>
  </div>
</template>

<style lang="scss">
.lu-image {
  width: fit-content;
  height: auto;

  &__figure {
    margin: 0;
  }

  &__internals {
    position: relative;
  }

  &__placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
    display: block;
    transition: all 0.25s ease;
  }

  &__placeholder {
    position: absolute;
    inset: 0;
    background-color: rgb(var(--lu-gray-0));
    transition: all 0.25s ease;
    min-height: fit-content;

    &__icon {
      width: 40px;
      color: rgb(var(--lu-gray-5));
    }
  }

  &__caption {
    margin-top: 4px;
    text-align: center;
    font-size: 14px;
    line-height: 1.5;
    color: rgb(var(--lu-gray-9));
  }
}
</style>
