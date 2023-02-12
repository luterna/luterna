<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import PlaceholderIcon from './icons/PlaceholderIcon.vue';
import { useVars } from './lu-image';
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

const computedWidth = computed(() => (props.width ? `${props.width}px` : '100%'));
const computedHeight = computed(() => (props.height ? `${props.height}px` : 'auto'));

watch(
  () => props.src,
  () => (loadingError.value = false)
);
</script>

<template>
  <div class="lu-image" :style="useVars()">
    <figure class="lu-image__figure">
      <div class="lu-image__internals">
        <img
          class="lu-image__image"
          v-on="$attrs"
          :src="src"
          :width="width"
          :height="height"
          :alt="alt"
          @error="loadingError = true"
        />
        <div v-if="withPlaceholder && loadingError" class="lu-image__placeholder">
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
@import './src/styles/tools';

.lu-image {
  width: v-bind(computedWidth);
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
    width: v-bind(computedWidth);
    height: v-bind(computedHeight);
    object-fit: v-bind('props.fit');
  }

  &__placeholder {
    position: absolute;
    inset: 0;
    background-color: use-var('backgroundColor');
    min-height: fit-content;
    width: v-bind(computedWidth);
    height: v-bind(computedHeight);

    &__icon {
      width: 40px;
      color: use-var('iconColor');
    }
  }

  &__caption {
    margin-top: 4px;
    text-align: center;
    font-size: 14px;
    line-height: 1.5;
    color: use-var('captionColor');
  }
}
</style>
