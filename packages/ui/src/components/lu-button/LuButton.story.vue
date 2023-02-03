<script lang="ts" setup>
import { reactive } from 'vue';
import LuButton from './LuButton.vue';
import { logEvent } from 'histoire/client';
import type { LuButtonVariant } from './types';

type State = {
  variant: LuButtonVariant;
  content: string;
};

const state = reactive<State>({
  variant: 'filled',
  content: 'I am a button',
});
</script>

<template>
  <Story title="LuButton">
    <LuButton :variant="state.variant" @click="logEvent('click', $event)"> {{ state.content }}</LuButton>
    <template #controls>
      <HstSelect
        v-model="state.variant"
        title="variant"
        :options="{
          filled: 'filled',
          outlined: 'outlined',
          light: 'light',
        }"
      />
    </template>
  </Story>
</template>
