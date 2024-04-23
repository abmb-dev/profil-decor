<script setup lang="ts">
defineSlots<{ default(): any }>();

const props = withDefaults(
  defineProps<{
    clone?: boolean
    pauseOnHover?: boolean
    direction?: 'normal' | 'reverse'
  }>(),
  {
    clone: true,
    pauseOnHover: true,
    direction: 'normal'
  }
);
</script>

<template>
  <ODynamicMarquee class="!w-[150%] flex justify-center items-center cursor-pointer [&>*]:mr-8" v-bind="props">
    <slot></slot>
  </ODynamicMarquee>
</template>