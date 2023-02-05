<script lang="ts" setup>
import { reactive } from 'vue';
import LuImage from './LuImage.vue';
import { logEvent } from 'histoire/client';
import { FitOptions } from './types';

const state = reactive({
  src: 'https://loremflickr.com/300/200',
  width: 300,
  height: 200,
  caption: 'My awesome image',
  alt: 'Alt of image',
  withPlaceholder: true,
  fit: 'cover' as FitOptions,
});
</script>

<template>
  <Story title="LuImage" icon="ion:image-outline" auto-props-disabled>
    <LuImage v-bind="state" @error="logEvent('error', $event)" />
    <template #controls>
      <HstText v-model="state.src" title="src" />
      <HstText v-model="state.caption" title="caption" />
      <HstText v-model="state.alt" title="alt" />
      <HstText v-model="state.width" title="width" />
      <HstText v-model="state.height" title="height" />
      <HstCheckbox v-model="state.withPlaceholder" title="withPlaceholder" />
      <HstSelect v-model="state.fit" :options="FitOptions" />
    </template>
  </Story>
</template>
