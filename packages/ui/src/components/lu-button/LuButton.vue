<script lang="ts" setup>
import type { AllowedColors } from '@/plugin/types';
import { computed } from 'vue';
import { useVars } from './lu-button';
import type { LuButtonVariant } from './types';

export type Props = {
  variant?: LuButtonVariant;
  disabled?: boolean;
  color?: AllowedColors;
};

const props = withDefaults(defineProps<Props>(), {
  variant: 'filled',
  disabled: false,
});

const variantClass = computed(() => (props.disabled ? 'disabled' : props.variant));
</script>

<template>
  <button :class="['lu-button', variantClass]" :style="useVars($props)">
    <span class="lu-button__text"><slot /></span>
  </button>
</template>

<style lang="scss">
@import './src/styles/tools';

.lu-button {
  padding: 0 1rem;
  font-weight: 600;
  outline: none;
  height: 2.25rem;
  border-radius: 0.25rem;
  cursor: pointer;

  &.filled {
    border: 1px solid transparent;
    color: use-var('buttonTextColor');
    background-color: use-var('buttonColor');

    &:not(.disabled):hover {
      background-color: use-var('buttonHoverColor');
    }
  }

  &.outlined {
    border: 1px solid use-var('buttonColor');
    color: use-var('buttonTextColor');
    background-color: transparent;

    &:not(.disabled):hover {
      background-color: use-var('buttonHoverColor');
    }
  }

  &.light {
    border: 1px solid transparent;
    color: use-var('buttonTextColor');
    background-color: use-var('buttonColor');

    &:not(.disabled):hover {
      background-color: use-var('buttonHoverColor');
    }
  }

  &.disabled {
    border: 1px solid transparent;
    background-color: use-var('buttonColor');
    color: use-var('buttonTextColor');
    cursor: not-allowed;
  }

  &:not(.disabled):active {
    transform: translateY(1px);
  }
}
</style>
