<script lang="ts" setup>
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
  }>(),
  {
    disabled: false,
    placeholder: '',
    label: '',
    required: false,
    description: '',
    error: false,
    modelValue: '',
  }
);

const localModelValue = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
});
</script>

<template>
  <div class="lu-input">
    <label class="lu-input__label" v-if="label">
      {{ label }}
      <span v-if="required" class="lu-input__required-mark">*</span>
    </label>
    <div v-if="description" class="lu-input__description">{{ description }}</div>
    <div class="lu-input__wrapper">
      <input
        v-model="localModelValue"
        :class="['lu-input__input', { error }]"
        :disabled="disabled"
        :placeholder="placeholder"
        v-on="$attrs"
      />
    </div>
    <div v-if="error && typeof error === 'string'" class="lu-input__error">{{ error }}</div>
  </div>
</template>

<style lang="scss">
.lu-input {
  &__label {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.2;
  }

  &__required-mark {
    color: rgb(var(--lu-error-6));
    line-height: 1.2;
  }

  &__error,
  &__description {
    font-size: 12px;
    line-height: 1.2;
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
    height: 2.25rem;
    padding: 0 10px;
    background-color: transparent;
    border-radius: 4px;
    outline-color: transparent;
    outline-width: 0;
    width: 100%;
    transition: all 0.25s ease;

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
      padding: 0 12px;
    }

    &:disabled {
      background-color: rgb(var(--lu-gray-0), 0.5);
      cursor: not-allowed;
    }
  }
}
</style>
