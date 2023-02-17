<script lang="ts" setup>
import { reactive } from 'vue';
import LuButton from './LuButton.vue';
import { LuButtonGroupOrientation } from './types';
import LuButtonGroup from './LuButtonGroup.vue';

const state = reactive<InstanceType<typeof LuButtonGroup>['$props']>({
  orientation: 'horizontal',
});
</script>

<template>
  <Story title="LuButtonGroup" group="buttons" autoPropsDisabled>
    <LuButtonGroup :orientation="state.orientation">
      <LuButton variant="outlined"> First </LuButton>
      <LuButton variant="outlined"> Second </LuButton>
      <LuButton variant="outlined"> Third </LuButton>
    </LuButtonGroup>
    <template #controls>
      <HstSelect v-model="state.orientation" title="orientation" :options="LuButtonGroupOrientation" />
    </template>
  </Story>
</template>
