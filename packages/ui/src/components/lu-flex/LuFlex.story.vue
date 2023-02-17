<script lang="ts" setup>
import { reactive } from 'vue';
import { LuButton } from '../lu-button';
import LuFlex from './LuFlex.vue';
import { LuFlexAlign, LuFlexDirection, LuFlexJustify, LuFlexWrap } from './types';

const state = reactive<InstanceType<typeof LuFlex>['$props']>({
  direction: 'row',
  wrap: 'wrap',
  justify: 'flex-start',
  align: 'flex-start',
  gap: 10,
  columnGap: 0,
  rowGap: 0,
});
</script>

<template>
  <Story title="LuFlex" group="layout" autoPropsDisabled>
    <div>
      <LuFlex v-bind="state" class="flex">
        <LuButton v-for="i in 5" :key="i">Button {{ i }}</LuButton>
      </LuFlex>
    </div>
    <template #controls>
      <HstSelect v-model="state.direction" title="direction" :options="LuFlexDirection" />
      <HstSelect v-model="state.wrap" title="wrap" :options="LuFlexWrap" />
      <HstSelect v-model="state.justify" title="justify" :options="LuFlexJustify" />
      <HstSelect v-model="state.align" title="align" :options="LuFlexAlign" />
      <HstNumber v-model="state.gap" title="gap" />
      <HstNumber v-model="state.columnGap" title="columnGap" />
      <HstNumber v-model="state.rowGap" title="rowGap" />
    </template>
  </Story>
</template>

<style lang="scss" scoped>
.flex {
  background-color: rgba(var(--lu-primary-3), 0.2);
  min-height: 100px;
}
</style>
