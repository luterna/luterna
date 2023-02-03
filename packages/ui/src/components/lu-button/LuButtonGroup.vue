<script lang="ts" setup>
import type { Orientation } from './types';

withDefaults(
  defineProps<{
    orientation?: Orientation;
  }>(),
  {
    orientation: 'horizontal',
  }
);
</script>

<template>
  <div :class="['lu-button-group', orientation]">
    <slot />
  </div>
</template>

<style lang="scss">
.lu-button-group {
  display: flex;
  width: fit-content;

  &.horizontal {
    .lu-button:first-of-type {
      border-right-width: 0.5px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    .lu-button:last-of-type {
      border-left-width: 0.5px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    .lu-button:not(:first-of-type, :last-of-type) {
      border-left-width: 0.5px;
      border-right-width: 0.5px;
      border-radius: 0;
    }
  }

  &.vertical {
    flex-direction: column;

    .lu-button:first-of-type {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-width: 0.5px;
    }

    .lu-button:last-of-type {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-top-width: 0.5px;
    }

    .lu-button:not(:first-of-type, :last-of-type) {
      border-radius: 0;
      border-top-width: 0.5px;
      border-bottom-width: 0.5px;
    }
  }
}
</style>
