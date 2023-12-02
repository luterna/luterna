<script lang="ts" setup>
import { useLuternaConfig } from '@/plugin';
</script>

<template>
  <Story title="Radiuses" group="styles">
    <div class="flex">
      <div class="block" v-for="(value, borderRadius) in useLuternaConfig().theme.borderRadius" :key="borderRadius">
        <div
          class="block__item"
          :style="{
            borderRadius: value,
          }"
        ></div>
        {{ borderRadius }} ({{ value }})
      </div>
    </div>
  </Story>
</template>

<style lang="scss" scoped>
.flex {
  display: flex;
  gap: 1rem;
}
.block {
  text-align: center;
  &__item {
    height: 100px;
    aspect-ratio: 1 / 1;
    background-color: rgb(var(--lu-primary-5));
  }
}
</style>
