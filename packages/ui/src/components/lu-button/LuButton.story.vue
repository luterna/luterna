<script lang="ts" setup>
import { reactive } from 'vue';
import LuButton from './LuButton.vue';
import { logEvent } from 'histoire/client';
import { luButtonVariant, type LuButtonVariant } from './types';
import { allowedColors, type AllowedColors } from '@/plugin/types';

type State = {
  variant: LuButtonVariant;
  content: string;
  color: AllowedColors;
};

const state = reactive<State>({
  variant: 'filled',
  content: 'I am a button',
  color: 'blue',
});
</script>

<template>
  <Story title="LuButton">
    <LuButton v-bind="state" @click="logEvent('click', $event)"> {{ state.content }}</LuButton>
    <template #controls>
      <HstSelect v-model="state.variant" title="variant" :options="luButtonVariant" />
      <HstSelect v-model="state.color" title="color" :options="allowedColors" />
    </template>
  </Story>
</template>
