<script lang="ts" setup>
import type { AllowedColors } from '@/plugin/types';
import type { LuButtonVariant } from './types';

export type Props = {
  variant?: LuButtonVariant;
  disabled?: boolean;
  color?: AllowedColors;
};

withDefaults(defineProps<Props>(), {
  variant: 'filled',
  disabled: false,
  color: 'primary',
});
</script>

<template>
  <button :class="['lu-button', variant, color, { disabled }]">
    <span class="lu-button__text"><slot /></span>
  </button>
</template>

<style lang="scss">
.lu-button {
  $parent: &;

  padding: 0 1rem;
  font-weight: 600;
  outline: none;
  height: 2.25rem;
  border-radius: 0.25rem;
  transition: all 0.25s ease;
  cursor: pointer;

  &.primary {
    --lu-color: var(--lu-primary-6);
    --lu-hover-color: var(--lu-primary-7);
  }

  &.danger {
    --lu-color: var(--lu-danger-6);
    --lu-hover-color: var(--lu-danger-7);
  }

  &.error {
    --lu-color: var(--lu-error-6);
    --lu-hover-color: var(--lu-error-7);
  }

  &.warning {
    --lu-color: var(--lu-warning-6);
    --lu-hover-color: var(--lu-warning-7);
  }

  &.success {
    --lu-color: var(--lu-success-6);
    --lu-hover-color: var(--lu-success-7);
  }

  &.gray {
    --lu-color: var(--lu-gray-6);
    --lu-hover-color: var(--lu-gray-8);
  }

  &.dark {
    --lu-color: var(--lu-dark-6);
    --lu-hover-color: var(--lu-dark-8);
  }

  &.filled {
    border: 1px solid transparent;
    background-color: rgb(var(--lu-color));

    #{$parent}__text {
      color: white;
    }

    &:not(.disabled):hover {
      background-color: rgb(var(--lu-hover-color));
    }
  }

  &.outlined {
    border: 1px solid rgb(var(--lu-color));
    background-color: transparent;

    #{$parent}__text {
      color: rgb(var(--lu-color));
    }

    &:not(.disabled):hover {
      background-color: rgba(var(--lu-color), 0.15);
    }
  }

  &.light {
    border: 1px solid transparent;
    background-color: rgba(var(--lu-color), 0.2);

    #{$parent}__text {
      color: rgb(var(--lu-color));
    }

    &:not(.disabled):hover {
      background-color: rgba(var(--lu-color), 0.3);
    }
  }

  &.disabled {
    border: 1px solid transparent;
    background-color: rgba(var(--lu-gray-4), 0.2);
    cursor: not-allowed;

    #{$parent}__text {
      color: rgb(var(--lu-gray-5));
    }
  }

  &:not(.disabled):active {
    transform: translateY(2px);
  }
}
</style>
