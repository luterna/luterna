<script lang="ts" setup>
import { computed } from 'vue';
import type { LuButtonVariant } from './types';

const props = withDefaults(
  defineProps<{
    variant?: LuButtonVariant;
    disabled?: boolean;
  }>(),
  {
    variant: 'filled',
    disabled: false,
  }
);

const variantClass = computed(() => (props.disabled ? 'disabled' : props.variant));
</script>

<template>
  <button :class="['lu-button', variantClass]">
    <span class="lu-button__text"><slot /></span>
  </button>
</template>

<style lang="scss">
.lu-button {
  padding: 0 1rem;
  font-weight: 600;
  outline: none;
  height: 2.25rem;
  border-radius: 0.25rem;
  cursor: pointer;

  &.filled {
    border: 1px solid transparent;
    color: white;
    background-color: #3a86ff;

    &:not(.disabled):hover {
      background-color: #3175e3;
    }
  }

  &.outlined {
    border: 1px solid #3a86ff;
    color: #3a86ff;
    background-color: transparent;

    &:not(.disabled):hover {
      background-color: #3a86ff20;
    }
  }

  &.light {
    border: 1px solid transparent;
    color: #3a86ff;
    background-color: #3ab3ff20;

    &:not(.disabled):hover {
      background-color: #3ab3ff30;
    }
  }

  &.disabled {
    border: 1px solid transparent;
    background-color: #e6eaf1;
    color: #b5bac1;
    cursor: not-allowed;
  }

  &:not(.disabled):active {
    transform: translateY(1px);
  }
}
</style>
