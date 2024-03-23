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
    class="!h-[20vw] lg:!h-[10vw] !w-[150%] bg-primary border border-solid flex justify-center items-center cursor-pointer"
  >
    <slot></slot>
  </OMarquee>
</template>