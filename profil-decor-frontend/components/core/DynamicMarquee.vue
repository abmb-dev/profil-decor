<script setup lang="ts">
withDefaults(
  defineProps<{
  pauseOnHover: boolean
  }>(),
  {
    pauseOnHover: true
  }
);

defineSlots<{ default(): any }>();
</script>

<template>
  <OMarquee 
    :pauseOnHover
    class="relative h-[10vw] bg-primary w-[150%] border border-solid flex justify-center items-center cursor-pointer"
  >
    <slot></slot>
  </OMarquee>
</template>