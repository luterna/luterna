<script lang="ts" setup>
import type { LuFlexDirection, LuFlexWrap, LuFlexJustify, LuFlexAlign } from './types';

type Props = {
  direction?: LuFlexDirection;
  wrap?: LuFlexWrap;
  justify?: LuFlexJustify;
  align?: LuFlexAlign;
  gap?: number;
  columnGap?: number;
  rowGap?: number;
};

withDefaults(defineProps<Props>(), {
  direction: 'row',
  wrap: 'wrap',
  justify: 'flex-start',
  align: 'flex-start',
  columnGap: 0,
  rowGap: 0,
  gap: 0,
});
</script>

<template>
  <div
    class="lu-flex"
    :style="{
      flexDirection: direction,
      flexWrap: wrap,
      justifyContent: justify,
      alignItems: align,
      columnGap: `${columnGap || gap}px`,
      rowGap: `${rowGap || gap}px`,
    }"
  >
    <slot />
  </div>
</template>

<style lang="scss">
.lu-flex {
  display: flex;
  transition: all 0.25s ease;
}
</style>
