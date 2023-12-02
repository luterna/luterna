<script lang="ts" setup>
import type { LuternaSizes } from '@/plugin/types';
import { computed } from 'vue';

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    placeholder?: string;
    label?: string;
    required?: boolean;
    description?: string;
    error?: string | boolean;
    modelValue?: string;
    radius: LuternaSizes;
    size: LuternaSizes;
  }>(),
  {
    disabled: false,
    placeholder: '',
    label: '',
    required: false,
    description: '',
    error: false,
    modelValue: '',
    radius: 'sm',
    size: 'sm',
  }
);

const localModelValue = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
});
</script>

<template>
  <div :class="['lu-input', size]">
    <label class="lu-input__label" v-if="label">
      {{ label }}
      <span v-if="required" class="lu-input__label__required-mark">*</span>
    </label>
    <div v-if="description" class="lu-input__description">{{ description }}</div>
    <div class="lu-input__wrapper">
      <input
        v-model="localModelValue"
        :class="['lu-input__input', { error }, `radius-${radius}`]"
        :disabled="disabled"
        :placeholder="placeholder"
      />
    </div>
    <div v-if="error && typeof error === 'string'" class="lu-input__error">{{ error }}</div>
  </div>
</template>

<style lang="scss">
.lu-input {
  &.xs {
    --lu-input-padding-x: 0.875rem;
    --lu-input-height: 1.875rem;
    --lu-input-font-size: var(--lu-fontSize-xs);
  }

  &.sm {
    --lu-input-padding-x: 1.125rem;
    --lu-input-height: 2.25rem;
    --lu-input-font-size: var(--lu-fontSize-sm);
  }

  &.md {
    --lu-input-padding-x: 1.375rem;
    --lu-input-height: 2.625rem;
    --lu-input-font-size: var(--lu-fontSize-md);
  }

  &.lg {
    --lu-input-padding-x: 1.625rem;
    --lu-input-height: 3.125rem;
    --lu-input-font-size: var(--lu-fontSize-lg);
  }

  &.xl {
    --lu-input-padding-x: 2rem;
    --lu-input-height: 3.75rem;
    --lu-input-font-size: var(--lu-fontSize-xl);
  }

  &__label {
    font-size: var(--lu-input-font-size);
    font-weight: 500;
    line-height: 1.5;
    transition: all 0.25s ease;
    &__required-mark {
      color: rgb(var(--lu-error-6));
      line-height: 1.5;
    }
  }

  &__error,
  &__description {
    font-size: calc(var(--lu-input-font-size) - 0.125rem);
    line-height: 1.5;
    transition: all 0.25s ease;
  }

  &__description {
    color: rgb(var(--lu-gray-4));
  }

  &__error {
    color: rgb(var(--lu-error-6));
  }

  &__wrapper {
    margin: 5px 0;
  }

  &__input {
    border: 1px solid rgb(var(--lu-gray-6), 0.2);
    background-color: transparent;
    outline-color: transparent;
    outline-width: 0;
    width: 100%;
    transition: all 0.25s ease;
    padding: 0 var(--lu-input-padding-x);
    height: var(--lu-input-height);
    font-size: var(--lu-input-font-size);

    &.radius-xs {
      border-radius: var(--lu-borderRadius-xs);
    }

    &.radius-sm {
      border-radius: var(--lu-borderRadius-sm);
    }

    &.radius-md {
      border-radius: var(--lu-borderRadius-md);
    }

    &.radius-lg {
      border-radius: var(--lu-borderRadius-lg);
    }

    &.radius-xl {
      border-radius: var(--lu-borderRadius-xl);
    }

    &.error {
      border-color: rgb(var(--lu-error-6));
      color: rgb(var(--lu-error-6));
    }

    &::placeholder {
      color: rgb(var(--lu-gray-4));
    }

    &:not(.error):focus {
      border-color: rgb(var(--lu-primary-6));
    }

    &:focus {
      padding: 0 calc(var(--lu-input-padding-x) + var(--lu-input-padding-x) / 5);
    }

    &:disabled {
      background-color: rgb(var(--lu-gray-0), 0.5);
      cursor: not-allowed;
    }
  }
}
</style>
