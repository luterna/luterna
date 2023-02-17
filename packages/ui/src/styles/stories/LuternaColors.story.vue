<script lang="ts" setup>
import { useLuternaConfig } from '@/plugin';
</script>

<template>
  <Story title="Colors" group="styles">
    <div class="grid">
      <template v-for="(_, color) in useLuternaConfig().theme.colors">
        <div class="color-block" v-for="i = 0 in 10" :key="color + i">
          <div
            class="color-block__item"
            :style="{
              backgroundColor: `rgb(var(--lu-${color}-${i - 1}))`,
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
