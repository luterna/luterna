<script lang="ts" setup>
import { reactive } from 'vue';
import LuButton from './LuButton.vue';
import { logEvent } from 'histoire/client';
import { LuButtonVariant } from './types';
import { AllowedColors } from '@/plugin/types';

const state = reactive<InstanceType<typeof LuButton>['$props'] & { content: string }>({
  variant: 'filled',
  content: 'I am a button',
  color: 'primary',
  disabled: false,
});
</script>

<template>
  <Story title="LuButton" group="buttons" autoPropsDisabled>
    <LuButton v-bind="state" @click="logEvent('click', $event)"> {{ state.content }}</LuButton>
    <template #controls>
      <HstSelect v-model="state.variant" title="variant" :options="LuButtonVariant" />
      <HstSelect v-model="state.color" title="color" :options="AllowedColors" />
      <HstCheckbox v-model="state.disabled" title="disabled" />
    </template>
  </Story>
</template>
