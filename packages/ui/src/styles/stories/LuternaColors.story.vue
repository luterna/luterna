<script lang="ts" setup>
import { useColor } from '@/composables/use-color';
import { useLuternaConfig } from '@/plugin';
</script>

<template>
  <Story title="Colors">
    <div class="grid">
      <template v-for="(_, color) in useLuternaConfig().theme.colors">
        <div class="color-block" v-for="i = 0 in 10" :key="color + i">
          <div
            class="color-block__item"
            :style="{
              backgroundColor: useColor({ color }).v(i - 1),
            }"
          ></div>
          {{ color }} {{ i - 1 }}
        </div>
      </template>
    </div>
  </Story>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 1rem;
}
.color-block {
  text-align: center;
  &__item {
    border-radius: 5px;
    height: 50px;
  }
}
</style>
