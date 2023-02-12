<script lang="ts" setup>
import { reactive } from 'vue';
import LuButton from './LuButton.vue';
import { luButtonGroupOrientation, type LuButtonGroupOrientation } from './types';
import LuButtonGroup from './LuButtonGroup.vue';

type State = {
  orientation: LuButtonGroupOrientation;
};

const state = reactive<State>({
  orientation: 'horizontal',
});
</script>

<template>
  <Story title="LuButtonGroup">
    <LuButtonGroup :orientation="state.orientation">
      <LuButton variant="outlined"> First </LuButton>
      <LuButton variant="outlined"> Second </LuButton>
      <LuButton variant="outlined"> Third </LuButton>
    </LuButtonGroup>
    <template #controls>
      <HstSelect v-model="state.orientation" title="orientation" :options="luButtonGroupOrientation" />
    </template>
  </Story>
</template>
