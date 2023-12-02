<script lang="ts" setup>
import { reactive } from 'vue';
import type { LuInput } from '.';
import { LuternaSizes } from '@/plugin/types';
import { logEvent } from 'histoire/client';

const state = reactive<InstanceType<typeof LuInput>['$props']>({
  radius: 'sm',
  size: 'sm',
  modelValue: '',
  disabled: false,
  required: false,
  label: '',
  error: '',
  description: '',
});
</script>

<template>
  <Story title="LuInput" group="inputs" autoPropsDisabled>
    <LuInput v-bind="state" @update:modelValue="logEvent('update:modelValue', $event)" />
    <template #controls>
      <HstButtonGroup v-model="state.radius" title="Radius" :options="LuternaSizes" />
      <HstButtonGroup v-model="state.size" title="Size" :options="LuternaSizes" />
      <HstText v-model="state.label" title="Label" />
      <HstText v-model="state.description" title="Description" />
      <HstText v-model="state.error" title="Error" />
      <HstText v-model="state.modelValue" title="modelValue" />
      <HstCheckbox v-model="state.disabled" title="Disabled" />
      <HstCheckbox v-model="state.required" title="Required" />
    </template>
  </Story>
</template>
