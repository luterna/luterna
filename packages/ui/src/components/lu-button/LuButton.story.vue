<script lang="ts" setup>
import { reactive } from 'vue';
import LuButton from './LuButton.vue';
import { logEvent } from 'histoire/client';
import { LuButtonVariant } from './types';
import { AllowedColors, LuternaSizes } from '@/plugin/types';

const state = reactive<InstanceType<typeof LuButton>['$props'] & { content: string }>({
  variant: 'filled',
  content: 'I am a button',
  radius: 'sm',
  size: 'sm',
  color: 'primary',
  disabled: false,
});
</script>

<template>
  <Story title="LuButton" group="buttons" autoPropsDisabled>
    <LuButton v-bind="state" @click="logEvent('click', $event)"> {{ state.content }}</LuButton>
    <template #controls>
      <HstButtonGroup v-model="state.variant" title="Label" :options="LuButtonVariant" />
      <HstButtonGroup v-model="state.radius" title="Radius" :options="LuternaSizes" />
      <HstButtonGroup v-model="state.size" title="Size" :options="LuternaSizes" />
      <HstSelect v-model="state.color" title="Color" :options="AllowedColors" />
      <HstCheckbox v-model="state.disabled" title="Disabled" />
    </template>
  </Story>
</template>
